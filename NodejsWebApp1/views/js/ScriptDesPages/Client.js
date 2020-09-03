var ipServeur = location.hostname; // Adresse ip du serveur
var ws; // Variable pour l'instance de la WebSocket.

console.log("Client-side code running");

//Variable
/**********/
const nbrLED = 24;
var nbrCaissons = 1;
var nbrMaxCaisson = 4;
var nbrMaxCaissonDefault = 4;

var tabIdCursor = ["id_nm_490", "id_nm_512", "id_nm_629-pc", "id_nm_502", "id_nm_530", "id_nm_520", "id_nm_544-lime",
    "id_nm_480", "id_3000K-IRC=83", "id_nm_450", "id_3000K-IRC=98", "id_4000K-IRC=97", "id_5600K-IRC=83", "id_nm_403", "id_nm_440", "id_nm_405",
    "id_6500K-IRC=97", "id_nm_425", "id_nm_410", "id_nm_470", "id_4000K-IRC=82", "id_nm_390", "id_2700K-IRC=98", "id_5000K-IRC=99", "id_nm_590", "id_nm_605",
    "id_nm_655", "id_nm_660", "id_nm_730", "id_nm_680", "id_nm_620", "id_nm_630"
];

var tabIdOrdreCourbe = ["id_nm_390", "id_nm_403", "id_nm_405", "id_nm_410", "id_nm_425", "id_nm_440", "id_nm_450", "id_nm_470", "id_nm_480", "id_nm_490", "id_nm_502",
    "id_nm_512", "id_nm_520", "id_nm_530", "id_nm_544-lime", "id_nm_590", "id_nm_605", "id_nm_620", "id_nm_629-pc", "id_nm_630", "id_nm_655", "id_nm_660", "id_nm_680", "id_nm_730",
]

var dataCaissons = [];

//Variable pour la fonction BPSauvegarde
var notUseableCharacter = ["/", "\\", '\"', ",", "*", "<", ">", "?", "|", ":", ";", "\'"];
var errorFile = false;

//variable pour alertebox
var reponse;

//variable pour l'envoi au serveur
var canSend = true;

//Commande a nevoyer au serveur sous forme d'objet
var commandSave = {
    command: "C_save",
    SaveName: '',
    overWrite: false,
    reply: false
}
var commandEnvoyerTrame = {
    command: "C_EnvoyerTrame",
    universe: 1,
    numeroCaisson: 1,
    dataTrame: [],
    nombreMaxCaisson: nbrMaxCaissonDefault
}



//permet d'obtenir les point du graphique afin de le dessiné
//Valeur d'entrée : Aucune
//Valeur retournée : Tableau de int (intensité de chaque led) 
function setGraph() {
    var temp = [];
    for (var i = 0; i < (nbrLED); i++) {

        temp[i] = parseInt(document.getElementById(tabIdOrdreCourbe[i]).value);
    }
    return temp;
}

//permet d'envoyer les donnée des curseur au serveur
//Valeur d'entré : aucune
//Valeur de sortie : aucune 
var commandEnvoyerTrameMemory;

function sendTrame() {
    commandEnvoyerTrameMemory = commandEnvoyerTrame;
    if (canSend === true) {
        ws.send(JSON.stringify(commandEnvoyerTrame)) //Envoit sous forme de string
        console.log("envoyer");
        canSend = false;
        setTimeout(() => {
            canSend = true;
            ws.send(JSON.stringify(commandEnvoyerTrameMemory)) //Envoit sous forme de string
        }, 250); //timer pour empecher le spam de trame sur le serveur
    }

    console.log(commandEnvoyerTrame);
}


//permet de modifier les valeur de la trame dès qu'il y a utilisation des curseurs et apelle la fonction d'envoie
//Valeur d'entrée : aucune 
//Valeur de sortie : Aucune 
function setTrame() {
    commandEnvoyerTrame.command = "C_EnvoyerTrame";


    commandEnvoyerTrame.dataTrame[0] = parseInt(document.getElementById("id_nm_490").value);
    commandEnvoyerTrame.dataTrame[2] = parseInt(document.getElementById("id_nm_512").value);
    commandEnvoyerTrame.dataTrame[4] = parseInt(document.getElementById("id_nm_629-pc").value);
    commandEnvoyerTrame.dataTrame[6] = parseInt(document.getElementById("id_nm_502").value);
    commandEnvoyerTrame.dataTrame[8] = parseInt(document.getElementById("id_nm_530").value);
    commandEnvoyerTrame.dataTrame[10] = parseInt(document.getElementById("id_nm_520").value);
    commandEnvoyerTrame.dataTrame[12] = parseInt(document.getElementById("id_nm_544-lime").value);
    commandEnvoyerTrame.dataTrame[14] = parseInt(document.getElementById("id_nm_480").value);
    commandEnvoyerTrame.dataTrame[16] = parseInt(document.getElementById("id_3000K-IRC=83").value);
    commandEnvoyerTrame.dataTrame[18] = parseInt(document.getElementById("id_nm_450").value);
    commandEnvoyerTrame.dataTrame[20] = parseInt(document.getElementById("id_3000K-IRC=98").value);
    commandEnvoyerTrame.dataTrame[22] = parseInt(document.getElementById("id_4000K-IRC=97").value);
    commandEnvoyerTrame.dataTrame[24] = parseInt(document.getElementById("id_5600K-IRC=83").value);
    commandEnvoyerTrame.dataTrame[26] = parseInt(document.getElementById("id_nm_403").value);
    commandEnvoyerTrame.dataTrame[28] = parseInt(document.getElementById("id_nm_440").value);
    commandEnvoyerTrame.dataTrame[30] = parseInt(document.getElementById("id_nm_405").value);
    commandEnvoyerTrame.dataTrame[32] = 0;
    commandEnvoyerTrame.dataTrame[34] = 0;
    commandEnvoyerTrame.dataTrame[36] = parseInt(document.getElementById("id_6500K-IRC=97").value);
    commandEnvoyerTrame.dataTrame[38] = parseInt(document.getElementById("id_nm_425").value);
    commandEnvoyerTrame.dataTrame[40] = parseInt(document.getElementById("id_nm_410").value);
    commandEnvoyerTrame.dataTrame[42] = parseInt(document.getElementById("id_nm_470").value);
    commandEnvoyerTrame.dataTrame[44] = parseInt(document.getElementById("id_4000K-IRC=82").value);
    commandEnvoyerTrame.dataTrame[46] = parseInt(document.getElementById("id_nm_390").value);
    commandEnvoyerTrame.dataTrame[48] = 0;
    commandEnvoyerTrame.dataTrame[50] = parseInt(document.getElementById("id_2700K-IRC=98").value);
    commandEnvoyerTrame.dataTrame[52] = parseInt(document.getElementById("id_5000K-IRC=99").value);
    commandEnvoyerTrame.dataTrame[54] = 0
    commandEnvoyerTrame.dataTrame[56] = parseInt(document.getElementById("id_nm_590").value);
    commandEnvoyerTrame.dataTrame[58] = parseInt(document.getElementById("id_nm_605").value);
    commandEnvoyerTrame.dataTrame[60] = 0;
    commandEnvoyerTrame.dataTrame[62] = 0;
    commandEnvoyerTrame.dataTrame[64] = parseInt(document.getElementById("id_nm_655").value);
    commandEnvoyerTrame.dataTrame[66] = parseInt(document.getElementById("id_nm_660").value);
    commandEnvoyerTrame.dataTrame[68] = parseInt(document.getElementById("id_nm_730").value);
    commandEnvoyerTrame.dataTrame[70] = parseInt(document.getElementById("id_nm_680").value);
    commandEnvoyerTrame.dataTrame[72] = parseInt(document.getElementById("id_nm_620").value);
    commandEnvoyerTrame.dataTrame[74] = parseInt(document.getElementById("id_nm_630").value);
    commandEnvoyerTrame.dataTrame[76] = parseInt(document.getElementById("id_nm_605").value);
    commandEnvoyerTrame.dataTrame[78] = parseInt(document.getElementById("id_nm_605").value); //pas d'erreur


    console.log("trametosert " + commandEnvoyerTrame.dataTrame)


    console.log(commandEnvoyerTrame.numeroCaisson);
    changeData();
    sendTrame();
}




//Vérifie si le nom choisit et correct
//puis envoit la demande d'effectuer une sauvegarde au serveur
//Valeur d'entrée : aucune
//Valeur retournée : aucune
function BPSauvegarder() {

    errorFile = false;
    console.log('Sauvegarder');
    commandSave.SaveName = document.getElementById('search').value;
    if (commandSave.SaveName === '') {
        // document.getElementById('id_errorFileName').innerHTML = "Nom obligatoire...";
        console.log('Pas de nom saisie');
    } else {
        for (var i = 0; i < commandSave.SaveName.length; i++) {
            for (var j = 0; j < notUseableCharacter.length; j++) {
                if (notUseableCharacter[j] === commandSave.SaveName[i]) {
                    errorFile = true;
                    console.log('erreur : caractère(s) interdit détecté(s)');
                    // document.getElementById('id_errorFileName').innerHTML = "Ce champ ne peut pas comporter les charactères suivants :  / \ \" , * < > ? | : ; \' ";
                    console.log(commandSave.SaveName);
                }
            }
        }
        if (errorFile === false) {
            commandSave.reply = true;
            ws.send(JSON.stringify(commandSave));
            console.log('Commande de sauvegarde envoyer')
        }
    }
    commandSave.reply = true;
    commandSave.overWrite = false;
}

//Ajoute caisson
//Valeur d'entrée : aucune
//Valeur retournée : aucune 
function BPAddCaisson() {
    commandEnvoyerTrame.nombreMaxCaisson += 1;
    dataCaissons[commandEnvoyerTrame.nombreMaxCaisson] = initValueCaisson();
    console.log("Ajout Caisson");
}

//Supprime un caisson
//Valeur d'entrée : aucune
//Valeur retournée : aucune 
function BPDeleteCaisson() {
    delete dataCaissons[commandEnvoyerTrame.nombreMaxCaisson];
    commandEnvoyerTrame.nombreMaxCaisson -= 1;
    if (commandEnvoyerTrame.nombreMaxCaisson <= 1) {
        commandEnvoyerTrame.nombreMaxCaisson = 1;
    }
    console.log("Supprime caisson");

}

function changeCaisson() {
    setTimeout(() => {
        commandEnvoyerTrame.numeroCaisson = CaissonVueModel.selected;
        commandEnvoyerTrame.command = "C_DemanderCaisson";
        ws.send(JSON.stringify(commandEnvoyerTrame));
    }, 500);
}

//Initialisation vlaeur de cursueur sur nouveau caisson
//Valeur d'entrée : aucune
//Valeur retournée : Tableau de 64 element initialisasé a 0
function initValueCaisson() {
    var tabZero = [];
    for (let i = 0; i < nbrLED * 2; i++) {
        tabZero[i] = 0;
    }
    return tabZero;
}

//met à 0 tout les curseurs et éteint les lumières.
//Valeur d'entrée : aucune
//Valeur retournée : aucune 
function turnOffLight() {
    for (let i = 0; i < tabIdCursor.length; i++) {
        document.getElementById(tabIdCursor[i]).value = 0;
    }
    setTrame();
}

//met à 100 tout les curseurs et éteint les lumières.
//Valeur d'entrée : aucune
//Valeur retournée : aucune 
function turnMaxLight() {
    for (let i = 0; i < tabIdCursor.length; i++) {
        document.getElementById(tabIdCursor[i]).value = 100;
    }
    setTrame();
}

//met à 10 tout les curseurs et éteint les lumières.
//Valeur d'entrée : aucune
//Valeur retournée : aucune 
function turnLowLight() {
    for (let i = 0; i < tabIdCursor.length; i++) {
        document.getElementById(tabIdCursor[i]).value = 10;
    }
    setTrame();
}


//alerte box oui / non
//Valeur d'entrée  : aucune 
//Valeur retournée : aucune
function alerteBoxYesNo() {

    let r = confirm("Ce nom existe déja ... Voulez-vous l'écraser ?");
    if (r == true) {
        reponse = true;
    } else {
        reponse = false;
    }
    document.getElementById("id_errorFileName").innerHTML = reponse;
}

//////////////////////////  Comunication Serveur /////////////////////////////////


//executé au chargement de la page web
//Valeur d'entrée : aucune
//Valeur retournée : aucune 
window.onload = function () {
    //ControleIHM();
    ConnexionAuServeurWebsocket();

};

// connexion au serveur web socket
//Valeur d'entrée : aucune
//Valeur retournée : aucune 
function ConnexionAuServeurWebsocket() {
    ws = new WebSocket("ws://" + ipServeur + ":80/echo");
    ws.onclose = function (evt) {

        window.alert("Vous avez été deconnecté ...");
    };
    //Quand la websocket s'ouvre
    ws.onopen = function () {
        //Les curseurs sont ajustés selon les denriere donnée ( de curseur)  envoyer par un utilisateur sur le serveur
        commandEnvoyerTrame.command = "C_DemanderCaisson";
        ws.send(JSON.stringify(commandEnvoyerTrame));
      
        commandEnvoyerTrame.command = "test";
        ws.send(JSON.stringify(commandEnvoyerTrame));

    };

    //quand on recoit un message du serveur
    ws.onmessage = function (evt) {

        /*instructions*/

        //on essais de parse le message du serveur, si il y a une erreur, les lumières s'éteignent par default 
        //try {
        let messageFromServer = JSON.parse(evt.data);
        if (messageFromServer.command === "test");
        chargerLoader();

        console.log(messageFromServer);
        if (messageFromServer.command === "C_CommandInitClient") {
            InitValueCursor = messageFromServer.tab1stCaisson;
        }

        //Reponse de confirmation du nom de sauvagarde du documement 
        if (messageFromServer.command === "C_replyCommandSave") {

            if (messageFromServer.error === false) {
                console.log("fichier sauvegarder avec succès !");
                //"élément sauvegarder avec succès ! ";
            }
            if (messageFromServer.error === true) {
                console.log("Fichier existant");
                alerteBoxYesNo();
                if (reponse === false) {
                    console.log("opération annulé");
                    commandSave.reply = false;
                    // "Opération annulé";
                }

                if (reponse === true) {
                    commandSave.overWrite = true;
                    console.log("envoit de demande d'écrasement de fichier au serveur");
                    ws.send(JSON.stringify(commandSave));
                    // "élément sauvegarder avec succès ! ";

                }
                commandSave.overWrite = false;
                commandSave.reply = false;
            }

            setTimeout(() => {
                document.getElementById('id_errorFileName').innerHTML = "";
            }, 5000);
        }

        if (messageFromServer.command === "C_replyCommandAjustCursor" || messageFromServer.command === "C_reply_DemanderCaisson") {
            if (messageFromServer.numeroCaisson === commandEnvoyerTrame.numeroCaisson) {
                document.getElementById("id_nm_490").value = messageFromServer.dataTrame[0];
                document.getElementById("id_nm_512").value = messageFromServer.dataTrame[2];
                document.getElementById("id_nm_629-pc").value = messageFromServer.dataTrame[4];
                document.getElementById("id_nm_502").value = messageFromServer.dataTrame[6];
                document.getElementById("id_nm_530").value = messageFromServer.dataTrame[8];
                document.getElementById("id_nm_520").value = messageFromServer.dataTrame[10];
                document.getElementById("id_nm_544-lime").value = messageFromServer.dataTrame[12];
                document.getElementById("id_nm_480").value = messageFromServer.dataTrame[14];
                document.getElementById("id_3000K-IRC=83").value = messageFromServer.dataTrame[16];
                document.getElementById("id_nm_450").value = messageFromServer.dataTrame[18];
                document.getElementById("id_3000K-IRC=98").value = messageFromServer.dataTrame[20];
                document.getElementById("id_4000K-IRC=97").value = messageFromServer.dataTrame[22];
                document.getElementById("id_5600K-IRC=83").value = messageFromServer.dataTrame[24];
                document.getElementById("id_nm_403").value = messageFromServer.dataTrame[26];
                document.getElementById("id_nm_440").value = messageFromServer.dataTrame[28];
                document.getElementById("id_nm_405").value = messageFromServer.dataTrame[30];
                document.getElementById("id_6500K-IRC=97").value = messageFromServer.dataTrame[36];
                document.getElementById("id_nm_425").value = messageFromServer.dataTrame[38];
                document.getElementById("id_nm_410").value = messageFromServer.dataTrame[40];
                document.getElementById("id_nm_470").value = messageFromServer.dataTrame[42];
                document.getElementById("id_4000K-IRC=82").value = messageFromServer.dataTrame[44];
                document.getElementById("id_nm_390").value = messageFromServer.dataTrame[46];
                document.getElementById("id_2700K-IRC=98").value = messageFromServer.dataTrame[50];
                document.getElementById("id_5000K-IRC=99").value = messageFromServer.dataTrame[52];
                document.getElementById("id_nm_590").value = messageFromServer.dataTrame[56];
                document.getElementById("id_nm_605").value = messageFromServer.dataTrame[58];
                document.getElementById("id_nm_655").value = messageFromServer.dataTrame[64];
                document.getElementById("id_nm_660").value = messageFromServer.dataTrame[66];
                document.getElementById("id_nm_730").value = messageFromServer.dataTrame[68];
                document.getElementById("id_nm_680").value = messageFromServer.dataTrame[70];
                document.getElementById("id_nm_620").value = messageFromServer.dataTrame[72];
                document.getElementById("id_nm_630").value = messageFromServer.dataTrame[74];

                setGraph();
                changeData();
            }
        }

    };

}

//interaction IHM
function ControleIHM() {
    document.getElementById("id_save").onclick = BPSauvegarder;
    document.getElementById("id_deleteCaisson").onclick = BPDeleteCaisson;
    document.getElementById("id_addCaisson").onclick = BPAddCaisson;
    document.getElementById("id_deleteCaisson").onclick = BPDeleteCaisson;
}