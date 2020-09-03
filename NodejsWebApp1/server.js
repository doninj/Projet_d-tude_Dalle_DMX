/* Creation serveur */

"use strict";
const express = require("express");
const app = express();
const expressWs = require("express-ws")(app);
const fs = require('fs');
const csvtojsonV2 = require("csvtojson/v2");
const JSONToCSV = require("json2csv").parse;
var path = require("path");

//EJS
app.set('views', './views/ejs/pagePrincipale/');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'views')));

app.get("/", function (req, res) {
    console.log("Serveur en ecoute");
    res.render('pageTableDeMixage');
});
app.get("/presentation", function (req, res) {
    console.log("Serveur en ecoute");
    res.render('pageTableDeMixage');
});
app.get("/presentationAdmin", function (req, res) {
    console.log("Serveur en ecoute");
    res.render('pageTableDeMixageAdmin');
});
app.get("/scene", function (req, res) {
    console.log("Serveur en ecoute");
    res.render('pageScene');
});
app.get("/melangeur", function (req, res) {
    console.log("Serveur en ecoute");
    res.render('pageEspaceDeCouleur');
});
app.get("/jeux", function (req, res) {
    console.log("Serveur en ecoute");
    res.render('pageSaturation');
});


// FIN EJS//

//ArnetOption
//host (Default "255.255.255.255")
//port (Default 6454)
//refresh (millisecond interval for sending unchanged data to the Art-Net node. Default 4000)
//iface (optional string IP address - bind udp socket to specific network interface)
//sendAll (sends always the full DMX universe instead of only changed values. Default false)
var options = {
    host: "127.0.0.1",
};
const artnet = require("artnet")(options)

//Verification serveur fonctionnel
setInterval(() => {
    console.log('fonctionne !')
}, 10000);

/* Variable */

var user = 0;   //Compte le nombre d'user connecter au serveur sur le port 80
var csvNameFile = "" //Nomdefichier de sauvegarde
var savePath = "./SauvegardeScene" + csvNameFile; //chemin le fichier csv de sauvegarde 
var nbrLEDs = 8;
var nbrCannauxParCaisson = 78; //Nombre de cannaux utilisé par caisson 
var tabCaissonsCursors = [[], []] // un tableau comportant un tableau des valeurs des curseurs de chaque caisson (0 a 100) ( tableau de mixage ) 
var tabCaissonsCursorsEspaceCouleur = [[], []]; // un tableau comportant un tableau des valeurs des curseurs de chaque caisson (0 a 100) ( Espace de colorimétrique ) 
var tabCaissonCursorsSaturation = [[], []];; // un tableau comportant un tableau des valeurs des curseurs de chaque caisson (0 a 100) ( Saturation ) 
var tabCaissonCursorsScnene = []// un tableau comportant un tableau des valeurs des curseurs de chaque caisson (0 a 100) ( Page scene ) 
var tabtosave = [[], [],[],[]] ;// copy des message recut par la table de mixage pour  sauvegarder
var tabCaissonZero = [[], []];// un tableau comportant un tableau des valeurs des curseurs de chaque caisson (0 a 100) initialise a 0
var tabCaissonsDMX = []; //un tableau comportant un tableau des valeurs pour communiqué en Artnet de chaque caisson (0 a 255)
var tabSentToArnet = []; // grand tableau commportant une grande trame ( max 8 caisson ) ;

var init = true;
/* Variable  Commande*/
var replyCommandSave = { command: "C_replyCommandSave", error: false, exist: false }
var replyCommandAjustCursor = { command: "C_replyCommandAjustCursor", universe: 1, caisson: 1, trameCache: [0, 0, 0, 0, 0, 0, 0], nbrMaxCaisson: 4 };
var commandInitClient = { command: "C_CommandInitClient", tab1stCaisson: null };
//the absolute path of where you started the Node.js process
app.use(express.static(__dirname));


// Pour convertir les éléments des fichiers .csv en objets json

//Création de la classe qui comportera tous les fichiers .csv
class CLoadCSV {

    // Contient toutes les entités des fichiers .csv
    constructor() {
        this.csvFile = [];
        this.csvNameFile;
        this.savePathe;

        this.tabName;
        this.tabNameToDelete;
        this.DefaultCount = 0

    };



    getTabNameExisting() {

        console.log(fs.readdirSync("./SauvegardeScene"));
        this.tabName = fs.readdirSync("./SauvegardeScene");
        return this.tabName;
    }


    getDefaultName(numero) {
        this.savePath = "./SauvegardeScene/Scène n°" + numero + ".csv";
        return this.savePath;
    }


    DeleteFile(test) {
        let FiletoDelete = test
        for (let i = 0; i < FiletoDelete.length; i++) {
            FiletoDelete[i] = "./SauvegardeScene/" + FiletoDelete[i] + ".csv";
            if (fs.existsSync(FiletoDelete[i]) === true) {
                fs.unlinkSync(FiletoDelete[i]);

            }
        }
    }




    RenameFile(newName, OldName) {
        newName = "./SauvegardeScene/" + newName + ".csv";
        OldName = "./SauvegardeScene/" + OldName + ".csv";
        try {
            if (fs.existsSync(OldName) === true) {
                fs.rename(OldName, newName, () => {
                    console.log(newName + "est le nouveau nom de " + OldName);
                }
                )
            }
        } catch
        {
            console.log("Rename echouer");
        }
    }


    // Charge le fichier Scene.csv
    ChargerSceneCsv(csvName) {
        csvName = "./SauvegardeScene/" + csvName + ".csv";
        //csvtojsonV2({ delimiter: ";", })    // Remplace les délimiteurs ";" du fichier .csv par des ","a
        csvtojsonV2().fromFile(csvName)         // Sélection du fichier .csv à convertir
            // Conversion des entités du .csv en objets json
            .then((jsonObj) => {
                //  console.log(jsonObj);           // Affichage des objets json
                this.csvFile = jsonObj;        // Les objets json créées sont stockés dans les listes pour en faire des listes d'objets json

            })

    }


}



//Socket
var aWss = expressWs.getWss("/echo");

initCaisson();
let CSVToLoad = new CLoadCSV();

// Connexion des clients � la WebSocket /echo et evenements associ�s
app.ws("/echo", function (ws, req) {
    console.log(
        "Connection WebSocket %s sur le port %s",
        req.connection.remoteAddress,
        req.connection.remotePort
    );
    initClient(ws)

    //commandInitClient.tabValueCaisson = tabTrameCaisson;
    //ws.send(JSON.stringify(CommandInitClient));
    user += 1; //+1 user connecter a la socket
    artnet.set(1, 1, replyCommandAjustCursor.trameCache); //affiche la couleur stocker dans trame 
    ws.send(JSON.stringify(replyCommandAjustCursor));
    //envoit au client qui se connecte la trame de chacun des caisson afin d'ajuster les curseurs.
    ws.send(JSON.stringify(tabCaissonsCursors));



    //message recut depuis un client sur la WebSocket
    ws.on("message", function (message) {
        console.log(
            "De %s %s, message :%s",
            req.connection.remoteAddress,
            req.connection.remotePort,
            message
        );

        /*instruction*/
        //parse => Transformation d'un string en objet
        let messageFromClient = JSON.parse(message);
        console.log(messageFromClient);
        if (messageFromClient.command === "C_DemanderCaisson") {
            messageFromClient.dataTrame = tabCaissonsCursors[0];
            ws.send(JSON.stringify(messageFromClient));
        }
        //Commande de sauvegarde de fichier CSV
        if (messageFromClient.command === 'C_save') {

            csvNameFile = messageFromClient.SaveName;
            savePath = "./SauvegardeScene/" + csvNameFile + '.csv';

            if (fs.existsSync(savePath) === false) {

                ///SAVE
                /* remplissage fichier csv*/

                var data = fillCSVFile(tabtosave);

                //Ecriture dans un fichier CSV 
                try {
                    const csv = JSONToCSV(data);
                    fs.writeFileSync(savePath, csv);
                    //SAVE 
                    console.log('Fichier sauvegarder');
                    replyCommandSave.error = false;
                    ws.send(JSON.stringify(replyCommandSave));
                }
                catch (err) {
                    console.log(err + "fichier en cour d'utilisation !")
                }

            }
            // fichier existant ... prevenir l'utisateur
            else if (fs.existsSync(savePath) === true && messageFromClient.overWrite === false) {
                console.log("Nom de fichier déja existant...")
                replyCommandSave.error = true;
                if (messageFromClient.reply === true) {
                    ws.send(JSON.stringify(replyCommandSave));
                }
            }

            //ecrasement du fichier si l'utilisateur est d'accord 
            else if (fs.existsSync(savePath) === true && messageFromClient.overWrite === true) {

                /* remplissage fichier csv*/

                var data = fillCSVFile(tabtosave);

                ///SAVE
                //Ecriture dans un fichier CSV 
                try {
                    const csv = JSONToCSV(data);
                    fs.writeFileSync(savePath, csv);
                    //SAVE 
                    console.log('Fichier sauvegarder');
                    replyCommandSave.error = false;
                    ws.send(JSON.stringify(replyCommandSave));
                }
                catch {
                    console.log("FICHIER UTILISER !")
                }

            }
            // fichier existant ... prevenir l'utisateur
            else if (fs.existsSync(savePath) === true && messageFromClient.overWrite === false) {
                console.log("Nom de fichier déja existant...")
                replyCommandSave.error = true;
                if (messageFromClient.reply === true) {
                    console.log(replyCommandSave)
                    ws.send(JSON.stringify(replyCommandSave));
                }
            }

            //console.log("fichier écrasé")
            //replyCommandSave.error = false;
            //ws.send(JSON.stringify(replyCommandSave));
        }


        //Gestion des lumières
        if (messageFromClient.command === 'C_EnvoyerTrame') {

            //Variable contenant un grand tableau de caisson ( max 8 caisson ) 
            tabSentToArnet = [];
            
            /*---------------Peut être remplace en une seule même commande( client et serveur)-----------*/
            //configuration de la reponse aux utilisateurs
            //replyCommandAjustCursor.trameCache = messageFromClient.dataTrame;
            //replyCommandAjustCursor.caisson = messageFromClient.numeroCaisson;
            //replyCommandAjustCursor.universe = messageFromClient.universe;
            replyCommandAjustCursor.nbrMaxCaisson = messageFromClient.nombreMaxCaisson;
            /*--------------------------------------------------------------------------*/
            console.log('ntm');

           ;
            tabtosave[messageFromClient.numeroCaisson -1] [0]= messageFromClient.dataTrame[0];
            tabtosave[messageFromClient.numeroCaisson-1  ][1] = messageFromClient.dataTrame[2];
            tabtosave[messageFromClient.numeroCaisson-1  ][2] = messageFromClient.dataTrame[4];
            tabtosave[messageFromClient.numeroCaisson-1  ][3] = messageFromClient.dataTrame[6];
            tabtosave[messageFromClient.numeroCaisson-1  ][4] = messageFromClient.dataTrame[8];
            tabtosave[messageFromClient.numeroCaisson-1  ][5] = messageFromClient.dataTrame[10];
            tabtosave[messageFromClient.numeroCaisson-1  ][6] = messageFromClient.dataTrame[12];
            tabtosave[messageFromClient.numeroCaisson-1  ][7] = messageFromClient.dataTrame[14];
            tabtosave[messageFromClient.numeroCaisson-1  ][8] = messageFromClient.dataTrame[16];
            tabtosave[messageFromClient.numeroCaisson-1  ][9] = messageFromClient.dataTrame[18];
            tabtosave[messageFromClient.numeroCaisson-1  ][10] = messageFromClient.dataTrame[20];
            tabtosave[messageFromClient.numeroCaisson-1  ][11] = messageFromClient.dataTrame[22];
            tabtosave[messageFromClient.numeroCaisson-1  ][12] = messageFromClient.dataTrame[24];
            tabtosave[messageFromClient.numeroCaisson-1  ][13] = messageFromClient.dataTrame[26];
            tabtosave[messageFromClient.numeroCaisson-1  ][14] = messageFromClient.dataTrame[28];
            tabtosave[messageFromClient.numeroCaisson-1  ][15] = messageFromClient.dataTrame[30];
            tabtosave[messageFromClient.numeroCaisson-1  ][16] = messageFromClient.dataTrame[36];
            tabtosave[messageFromClient.numeroCaisson-1  ][17] = messageFromClient.dataTrame[38];
            tabtosave[messageFromClient.numeroCaisson-1  ][18] = messageFromClient.dataTrame[40];
            tabtosave[messageFromClient.numeroCaisson-1  ][19] = messageFromClient.dataTrame[42];
            tabtosave[messageFromClient.numeroCaisson-1  ][20] = messageFromClient.dataTrame[44];
            tabtosave[messageFromClient.numeroCaisson-1  ][21] = messageFromClient.dataTrame[46];
            tabtosave[messageFromClient.numeroCaisson-1  ][22] = messageFromClient.dataTrame[50];
            tabtosave[messageFromClient.numeroCaisson-1  ][23] = messageFromClient.dataTrame[52];
            tabtosave[messageFromClient.numeroCaisson-1  ][24] = messageFromClient.dataTrame[56];
            tabtosave[messageFromClient.numeroCaisson-1  ][25] = messageFromClient.dataTrame[58];
            tabtosave[messageFromClient.numeroCaisson-1  ][26] = messageFromClient.dataTrame[64];
            tabtosave[messageFromClient.numeroCaisson-1  ][27] = messageFromClient.dataTrame[66];
            tabtosave[messageFromClient.numeroCaisson-1  ][28] = messageFromClient.dataTrame[68];
            tabtosave[messageFromClient.numeroCaisson-1  ][29] = messageFromClient.dataTrame[70];
            tabtosave[messageFromClient.numeroCaisson - 1][30] = messageFromClient.dataTrame[72];
            tabtosave[messageFromClient.numeroCaisson - 1][31] = messageFromClient.dataTrame[74];
          //  console.log(tabtosave[0]);
 console.log(tabtosave)


            tabCaissonsCursors[messageFromClient.numeroCaisson - 1] = messageFromClient.dataTrame;
            tabCaissonsDMX[messageFromClient.numeroCaisson - 1] = to_DMX(messageFromClient.dataTrame);

            console.log(tabCaissonsDMX[messageFromClient.numeroCaisson - 1]);


            //Forme une seule trame pour lensemble des caisson ( max 8 caissons ) 
            for (var i = 0; i < messageFromClient.nombreMaxCaisson; i++) {
                tabSentToArnet = tabSentToArnet.concat(tabCaissonsDMX[i]);
            }

            //console.log(tabSentToArnet);
            //console.log(typeof (trame));

            //Broadcast => trame de lumiere a tout les client
            messageFromClient.command = "C_replyCommandAjustCursor";
            aWss.clients.forEach(function (client) {
                if (client !== ws) client.send(JSON.stringify(messageFromClient));
            });


            console.log(messageFromClient);
            //test
            //Allume les lumiere selon la valeur du tab "trame"
            artnet.set(1, 1, tabSentToArnet);


        }

        if (messageFromClient.command === 'C_DemanderCaisson') {
            messageFromClient.dataTrame = tabCaissonsCursors[messageFromClient.numeroCaisson - 1];
            messageFromClient.command = 'C_reply_DemanderCaisson';
            ws.send(JSON.stringify(messageFromClient));

        }

        //////Espace colorimétrique 
        if (messageFromClient.command === "C_CommanderEspaceCouleur") {

            tabSentToArnet = [];

            tabCaissonsCursorsEspaceCouleur[messageFromClient.numeroCaisson - 1] = messageFromClient.dataEspaceCouleurCIE;
            tabCaissonsDMX[messageFromClient.numeroCaisson - 1] = to_DMX(messageFromClient.dataEspaceCouleurCIE);

            for (var i = 0; i < messageFromClient.nombreMaxCaisson; i++) {
                tabSentToArnet = tabSentToArnet.concat(tabCaissonsDMX[i]);

            }
            console.log(tabCaissonsDMX[messageFromClient.numeroCaisson - 1])
            //Broadcast => trame de lumiere a tout les client
            messageFromClient.command = "C_replyCommandAjustCursorEspaceColor";
            aWss.clients.forEach(function (client) {
                if (client !== ws) client.send(JSON.stringify(messageFromClient));
            });

            artnet.set(1, 1, tabSentToArnet);


        }

        if (messageFromClient.command === 'C_DemanderCaissonEspaceCouleur') {
            messageFromClient.dataEspaceCouleurCIE = tabCaissonsCursorsEspaceCouleur[messageFromClient.numeroCaisson - 1];
            messageFromClient.command = 'C_reply_DemanderCaissonEspaceCouleur';
            ws.send(JSON.stringify(messageFromClient));

        }



        ///////////// Page saturation ///////////////
        if (messageFromClient.command === "C_CommanderSaturation") {

            tabSentToArnet = [];

            tabCaissonCursorsSaturation[messageFromClient.numeroCaisson - 1] = messageFromClient.dataSaturationCIE;
            tabCaissonsDMX[messageFromClient.numeroCaisson - 1] = to_DMX(messageFromClient.dataSaturationCIE);

            for (var i = 0; i < messageFromClient.nombreMaxCaisson; i++) {
                tabSentToArnet = tabSentToArnet.concat(tabCaissonsDMX[i]);

            }
            console.log(tabCaissonsDMX[messageFromClient.numeroCaisson - 1])
            //Broadcast => trame de lumiere a tout les client
            messageFromClient.command = "C_replyCommandAjustCursorSaturation";
            aWss.clients.forEach(function (client) {
                if (client !== ws) client.send(JSON.stringify(messageFromClient));
            });

            artnet.set(1, 1, tabSentToArnet);


        }

        if (messageFromClient.command === 'C_DemanderCaissonSaturation') {
            messageFromClient.dataSaturationCIE = tabCaissonCursorsSaturation[messageFromClient.numeroCaisson - 1];
            messageFromClient.command = 'C_reply_DemanderCaissonSaturation';
            ws.send(JSON.stringify(messageFromClient));

        }
        if (messageFromClient.command === 'test') {

            ws.send(JSON.stringify(messageFromClient));

        }




        //////////////////////////Page Scène /////////////////////////////


        if (messageFromClient.command === "C_commandAsknbrButtonToMake") {

            messageFromClient.command = "C_replyCommandAsknbrButtonToMake";

            // messageFromClient.nbrButton = CSVToLoad.getNbrExistFile();
            messageFromClient.tabNameExisting = CSVToLoad.getTabNameExisting();

            ws.send(JSON.stringify(messageFromClient));
        }



        if (messageFromClient.command === "C_createButton") {
            messageFromClient.command = "C_replyCreateButton"

            CSVToLoad.DefaultCount += 1
            let counter = CSVToLoad.DefaultCount

            console.log(messageFromClient.name);

            console.log("ok");

            if (CSVToLoad.DefaultCount < 10) {
                counter = "0" + counter;

            }
            messageFromClient.name = CSVToLoad.getDefaultName(counter);
            let data = fillCSVFile(tabCaissonZero);

            ///SAVE
            //Ecriture dans un fichier CSV 
            try {
                const csv = JSONToCSV(data);
                fs.writeFileSync(messageFromClient.name, csv);
                //SAVE 
                console.log('Fichier sauvegarder');

                aWss.broadcast(JSON.stringify(messageFromClient))
            }
            catch {
                console.log("problème")
            }
        }

        if (messageFromClient.command === "C_DeleteButton") {

            messageFromClient.command = "C_ReplyDeleteButton";
            console.log(messageFromClient.buttonToDelete);
            let fileToDelete = messageFromClient.buttonToDelete

            CSVToLoad.DeleteFile(fileToDelete);
            console.log(messageFromClient.buttonToDelete);

            aWss.broadcast(JSON.stringify(messageFromClient));

        }

        if (messageFromClient.command === "C_ModifierNom") {
            messageFromClient.command = "C_replyModifierNom"

            let newNameFile = messageFromClient.newname;
            let oldNameFile = messageFromClient.oldName;
            console.log("oldname  :" + oldNameFile)
            console.log("Newanme  :" + newNameFile)
            CSVToLoad.RenameFile(newNameFile, oldNameFile)

            aWss.broadcast(JSON.stringify(messageFromClient));
        }

        if (messageFromClient.command === "C_ChargerScène") {

            CSVToLoad.ChargerSceneCsv(messageFromClient.btnName);
            CsvtoTab();

            messageFromClient.command = "C_replyCommandAjustCursor";

            tabCaissonsCursors = tabCaissonCursorsScnene;
            for (var i = 0; i < tabCaissonCursorsScnene.length; i++) {
                tabSentToArnet = tabSentToArnet.concat(tabCaissonCursorsScnene[i]);
                messageFromClient.dataTrame = tabCaissonCursorsScnene[i];
                messageFromClient.numeroCaisson = i;
                aWss.broadcast(JSON.stringify(messageFromClient));

            }
        }

        artnet.set(1, 1, tabSentToArnet)



    });



    //Quand quelqu'un se deconnect du websocket
    ws.on("close", function (reasonCode, description) {
        console.log(
            "Deconnexion WebSocket %s sur le port %s",
            req.connection.remoteAddress,
            req.connection.remotePort
        );
        user -= 1;
        if (user === 0)   // si pas d'utlisateur
        {
            turnOffLight();
        }

    });
});

/*  ****************** Broadcast clients websocket  **************   */
//  Pour diffuser sur tous les clients websocket : aWss.broadcast(dataStr);
var aWss = expressWs.getWss('/echo');
var WebSocket = require('ws');
aWss.broadcast = function broadcast(data) {
    console.log("Broadcast aux clients navigateur : %s", data);
    aWss.clients.forEach(function each(client) {
        if (client.readyState == WebSocket.OPEN) {
            client.send(data, function ack(error) {
                console.log("    -  %s-%s", client._socket._peername.address, client._socket._peername.port);
                if (typeof (error) != "undefined") {
                    console.log('ERREUR websocket broadcast : %s', error.toString());
                }
            });
        }
    });
};

/*Function */
//Eteint les lumières
//valeur d'entrée : Aucune
//Valeur de sortie : Aucune
function turnOffLight() {
    var tabZero = [];
    for (var i = 0; i < (nbrLEDs * 2); i++) {
        tabZero[i] = 0;
    }
    console.log('Eteint');
    artnet.set(1, 1, tabZero);
}

//ecrit un nouveau header pour les sauvegarde ( adapter au nombre de caisson  utilisé)
//valeur d'entre : rien 
//valeur de sortie :  header(tableau d'objet)
function setHeaderCsv() {
    var header = [];

    for (var i = 0; i < replyCommandAjustCursor.nbrMaxCaisson; i++) {
        var x = '{ "nom": "Caisson' + (i + 1) + '" }'
        console.log(JSON.parse(x))
        header.push(JSON.parse(x));
    }
    console.log("type de " + typeof (header))
    console.log("Valeur de header" + header)
    console.log("longueur de field  " + header.length);
    return header;
}

//Permet de remplir le fichier csv 
//valeur d'entrée : aucune 
//Valeur de sortie  : listecouleur(donnée CSV )
function fillCSVFile(tabValeur) {
    const header = setHeaderCsv(); //Nombre de caissons
    let listeCaissons = []
    let listeCouleur = [{ VOIE: "490" }, { VOIE: "512" }, { VOIE: "629-pc" }, { VOIE: "502" }, { VOIE: "530" }
        , { VOIE: "520" }, { VOIE: "544 - lime" }, { VOIE: "480" }, { VOIE: "3000K-IRC=83" }, { VOIE: "450" }, { VOIE: "3000K-IRC=98" }
        , { VOIE: "4000K-IRC=97" }, { VOIE: "5600K-IRC=83" }, { VOIE: "403" }, { VOIE: "440" }, { VOIE: "405" }, { VOIE: "6500K-IRC=97" }
        , { VOIE: "425" }, { VOIE: "410" }, { VOIE: "470" }, { VOIE: "4000K-IRC=82" }, { VOIE: "390" }, { VOIE: "2700K-IRC=98" }, { VOIE: "5000K-IRC=99" }, { VOIE: "590" }
        , { VOIE: "605" }, { VOIE: "655" }, { VOIE: "660" }, { VOIE: "730" }, { VOIE: "680" }, { VOIE: "620" }, { VOIE: "630" }];


    //on parcours chaque objet de listecouleur et on ajoute des champs de couleur à un chaque header /////A CHANGERRRRRRRR
    for (var i = 0; i < header.length; i++) {
        let d = 0;
        let temp = new Array();
   
        listeCouleur.forEach(col => {
            
            header[i][col.VOIE] = tabValeur[i][d];
            listeCaissons.push(header[i])
            d++;
        })

    }
    // inverse colonnes & lignes
    listeCaissons.forEach(caisse => {
        listeCouleur.forEach(col => {
            col[caisse.nom] = caisse[col.VOIE];
        })
    })
    return listeCouleur;
}

function to_DMX(dataCursor) {
    var tab_DMX = [];

    //Tableau de conversion [14,101]
    var t_dmx =
        [
            [
                0,
                9,
                10,
                11,
                13,
                15,
                17,
                19,
                20,
                23,
                25,
                27,
                29,
                31,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ],
            [
                0,
                14,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                23,
                25,
                27,
                29,
                31,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ],
            [
                0,
                7,
                8,
                10,
                12,
                14,
                16,
                18,
                20,
                23,
                25,
                27,
                29,
                31,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ],
            [
                0,
                12,
                14,
                16,
                17,
                18,
                19,
                20,
                21,
                23,
                25,
                27,
                29,
                31,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ],
            [
                0,
                15,
                16,
                17,
                18,
                19,
                20,
                21,
                22,
                23,
                25,
                27,
                29,
                31,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ],
            [
                0,
                17,
                18,
                19,
                20,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                31,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ],
            [
                0,
                10,
                11,
                12,
                13,
                15,
                17,
                19,
                20,
                23,
                25,
                27,
                29,
                31,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ],
            [
                0,
                8,
                9,
                10,
                12,
                14,
                16,
                18,
                20,
                23,
                25,
                27,
                29,
                31,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ],
            [
                0,
                16,
                17,
                18,
                19,
                20,
                21,
                20,
                22,
                23,
                25,
                27,
                29,
                31,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ],
            [
                0,
                11,
                12,
                13,
                14,
                15,
                17,
                19,
                20,
                23,
                25,
                27,
                29,
                31,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ],
            [
                0,
                19,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ],
            [
                0,
                18,
                19,
                20,
                21,
                22,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ],
            [
                0,
                20,
                21,
                22,
                23,
                24,
                25,
                26,
                27,
                28,
                29,
                30,
                31,
                32,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ],
            [
                0,
                9,
                10,
                11,
                12,
                14,
                16,
                18,
                20,
                23,
                25,
                27,
                29,
                31,
                33,
                35,
                37,
                38,
                40,
                42,
                44,
                45,
                47,
                49,
                50,
                51,
                53,
                55,
                56,
                58,
                60,
                61,
                63,
                65,
                67,
                69,
                71,
                72,
                73,
                75,
                77,
                78,
                80,
                81,
                83,
                85,
                87,
                88,
                90,
                92,
                93,
                94,
                96,
                98,
                100,
                102,
                103,
                105,
                107,
                108,
                110,
                112,
                113,
                115,
                117,
                119,
                121,
                123,
                125,
                126,
                127,
                129,
                131,
                133,
                135,
                138,
                140,
                143,
                146,
                148,
                150,
                153,
                156,
                158,
                162,
                165,
                169,
                172,
                178,
                185,
                193,
                201,
                209,
                218,
                225,
                231,
                237,
                241,
                248,
                252,
                255
            ]
        ];


    tab_DMX[0] = t_dmx[0][dataCursor[0]];
    tab_DMX[2] = t_dmx[2][dataCursor[2]];
    tab_DMX[4] = t_dmx[2][dataCursor[4]];
    tab_DMX[6] = t_dmx[3][dataCursor[6]];
    tab_DMX[8] = t_dmx[0][dataCursor[8]];
    tab_DMX[10] = t_dmx[6][dataCursor[10]];
    tab_DMX[12] = t_dmx[6][dataCursor[12]];
    tab_DMX[14] = t_dmx[0][dataCursor[14]];
    tab_DMX[16] = t_dmx[0][dataCursor[16]];
    tab_DMX[18] = t_dmx[0][dataCursor[18]];
    tab_DMX[20] = t_dmx[0][dataCursor[20]];
    tab_DMX[22] = t_dmx[0][dataCursor[22]];
    tab_DMX[24] = t_dmx[0][dataCursor[24]];
    tab_DMX[26] = t_dmx[7][dataCursor[26]];
    tab_DMX[28] = t_dmx[6][dataCursor[28]];
    tab_DMX[30] = t_dmx[2][dataCursor[30]];
    tab_DMX[32] = 0;
    tab_DMX[34] = 0;
    tab_DMX[36] = t_dmx[0][dataCursor[36]];
    tab_DMX[38] = t_dmx[0][dataCursor[38]];
    tab_DMX[40] = t_dmx[0][dataCursor[40]];
    tab_DMX[42] = t_dmx[0][dataCursor[42]];
    tab_DMX[44] = t_dmx[0][dataCursor[44]];
    tab_DMX[46] = t_dmx[6][dataCursor[46]];
    tab_DMX[48] = 0;
    tab_DMX[50] = t_dmx[0][dataCursor[50]];
    tab_DMX[52] = t_dmx[5][dataCursor[52]];
    tab_DMX[54] = 0
    tab_DMX[56] = t_dmx[8][dataCursor[56]];
    tab_DMX[58] = t_dmx[5][dataCursor[58]];
    tab_DMX[60] = 0;
    tab_DMX[62] = 0;
    tab_DMX[64] = t_dmx[1][dataCursor[64]];
    tab_DMX[66] = t_dmx[11][dataCursor[66]];
    tab_DMX[68] = t_dmx[12][dataCursor[68]];
    tab_DMX[70] = t_dmx[5][dataCursor[70]];
    tab_DMX[72] = t_dmx[8][dataCursor[72]];
    tab_DMX[74] = t_dmx[1][dataCursor[74]];
    tab_DMX[76] = t_dmx[5][dataCursor[76]]; //même curseur
    tab_DMX[78] = t_dmx[5][dataCursor[78]]; //même curseur

    return tab_DMX;
}

function CsvtoTab() {
    //necessaire pour lire le fichier 
    let tabOrderColorDMX = [
        "id_nm_490",
        0,
        "id_nm_512",
        0,
        "id_nm_629-pc",
        0,
        "id_nm_502",
        0,
        "id_nm_530",
        0,
        "id_nm_520",
        0,
        "id_nm_544-lime",
        0,
        "id_nm_480",
        0,
        "id_3000K-IRC=83",
        0,
        "id_nm_450",
        0,
        "id_3000K-IRC=83",
        0,
        "id_4000K-IRC=97",
        0,
        "id_5600K-IRC=83",
        0,
        "id_nm_403",
        0,
        "id_nm_440",
        0,
        "id_nm_405",
        0,
        0,
        0,
        0,
        0,
        "id_6500K-IRC=97",
        0,
        "id_nm_425",
        0,
        "id_nm_410",
        0,
        "id_nm_470",
        0,
        "id_4000K-IRC=82",
        0,
        "id_nm_390",
        0,
        0,
        0,
        "id_2700K-IRC=98",
        0,
        "id_5000K-IRC=99",
        0,
        0,
        0,
        "id_nm_590",
        0,
        "id_nm_605",
        0,
        0,
        0,
        0,
        0,
        "id_nm_655",
        0,
        "id_nm_660",
        0,
        "id_nm_730",
        0,
        "id_nm_680",
        0,
        "id_nm_620",
        0,
        "id_nm_630"
    ]


    setTimeout(() => {
        console.log(Object.values(CSVToLoad.csvFile[0]).length);
        CSVToLoad.csvFile.length

        //Boucle qui parcour le nombre de Caisson
        for (let y = 0; y < (Object.values(CSVToLoad.csvFile[0]).length) - 1; y++) {
            let ligneCsv = 0
            let tabCaissonColonne = new Array();

            //BOUCLE nbr d'element dans la trame
            for (let i = 0; i < tabOrderColorDMX.length; i++) {

              
                if (tabOrderColorDMX[i] === 0)
                    tabCaissonColonne[i] = 0
                else {
                    if (ligneCsv < CSVToLoad.csvFile.length) {
                        let temp = Object.values(CSVToLoad.csvFile[ligneCsv]);
                        tabCaissonColonne[i] = temp[y + 1]
                    }
                    else {
                        console.log("erreur Fichier CSV : Correspondance des cannaux" )
                    }
                    ligneCsv++;
                }

            }
            tabCaissonCursorsScnene[y] = tabCaissonColonne;


            //pour les curseur 605 qui sont utilisé sur plusieur cannaux
            tabCaissonCursorsScnene[y][76] = tabCaissonCursorsScnene[y][58]
            tabCaissonCursorsScnene[y][78] = tabCaissonCursorsScnene[y][58]

        }

        console.log(tabCaissonCursorsScnene);
        //   console.log(tabCaissonCursorsScnene);


    }, 300)
}

//Initialisation des caisson par default a 0 ;
//valeur d'entée : caissonMAX 
//valeur de sortie : aucune 
function initCaisson() {
    console.log('hey');
    var tab = new Array();
    var tabcsv = new Array();
    var nbrLigneCSV = 32;

    for (let y = 0; y < nbrCannauxParCaisson; y++) {
        tab[y] = 0;
    }

    for (let z = 0; z < 32; z++) {
        tabcsv[z] = 0;
    }

    for (let i = 0; i < 4; i++) {

        tabCaissonsCursors[i] = tab;
        tabCaissonsDMX[i] = tab;
        tabCaissonsCursorsEspaceCouleur[i] = tab;
        tabCaissonCursorsSaturation[i] = tab;
        tabCaissonZero[i] = tab;
        tabtosave[i] = tabcsv;
    }
    console.log(tabtosave);
}

//Permet d'envoyer la valeur de tout les caissons existant a une nouvelle socket connecté
//valeur d'entrée : ws info WebSocket 
//Valeur retournée  : aucune 
function initClient(ws) {
    commandInitClient.tab1stCaisson = tabCaissonsCursors[0];
    ws.send(JSON.stringify(commandInitClient));
}

//écoute du port 80
app.listen(80, function () {
    console.log("Serveur en écoute express : port 80 !");
});