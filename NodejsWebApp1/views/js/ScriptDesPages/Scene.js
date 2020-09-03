
var commandInteractionBtn = {
    command: "C_commandAsknbrButtonToMake",
    tabNameExisting: null

}

//Envoit une commande au serveur
//Parametre d'entré : ObjetJson
//Valeur retourné aucune 
function sendCommand(commandName) {

    ws.send(JSON.stringify(commandName));
}



//modifie la commande makeButton et l'enfvoie au serveur
//Parametre d'entré : aucune
//Valeur retourné aucune 
function BPAjouterBouton() {

    commandInteractionBtn.command = "C_createButton"
    sendCommand(commandInteractionBtn);
}


//modifie la commande makeButton et l'enfvoie au serveur
//Parametre d'entré : aucune
//Valeur retourné aucune 
function BPDeleteCaisson() {
    
    var tabBtnName = [];
    var tabBtnNameFilter;
    var d = document.querySelectorAll(".diva");
    for (let i = 0; i < document.querySelectorAll(".diva").length ; i++ ) {
        //si l'élement est checké, le supprimer
        if (d[i].firstChild.checked) {
           
            tabBtnName[i] = d[i].innerText;
        }
   
    }

    tabBtnNameFilter = tabBtnName.filter(function (el) {
        return el != null;
    });
    console.log(tabBtnNameFilter);

    commandInteractionBtn.command = "C_DeleteButton"; 
    commandInteractionBtn.buttonToDelete = tabBtnNameFilter
    sendCommand(commandInteractionBtn);
   
}



//modifie la commande makeButton et l'enfvoie au serveur
//Parametre d'entré : aucune
//Valeur retourné aucune 
function BPModifierNom() {
    errorPara=document.getElementById("errortext");
    var tabBtnToRename = [];
    var BtntoRenameFilter;

    var tabBtnNameCounter = 0;

    var d = document.querySelectorAll(".diva");
    for (let i = 0; i < document.querySelectorAll(".diva").length; i++) {
        //si l'élement est checké, le supprimer
        if (d[i].firstChild.checked) {
            tabBtnToRename[i] = d[i].innerText
            tabBtnNameCounter++;
          
        }
    }
  
   

    if (tabBtnNameCounter === 1) {
        commandInteractionBtn.command = "C_ModifierNom";
       

        BtntoRenameFilter = tabBtnToRename.filter(function (el) {
            return el != null;
        });


        var longueur= document.getElementById("renameTextInput")
        //si selection mais pas de valeur




            if(longueur.value.length<longueur.minLength || longueur.value.length>longueur.value.maxLength ){
                errorPara.innerText="veillez écrire un nom entre 2 et 10 caractères";
                longueur.style.border="2px solid red";
                console.log("salut");
        }
        //ça marche
            else {


            commandInteractionBtn.newname = document.getElementById("renameTextInput").value;
            commandInteractionBtn.oldName = BtntoRenameFilter[0];
            sendCommand(commandInteractionBtn);
            document.getElementById("renameTextInput").value = "";
            errorPara.innerText="";
            longueur.style.border="none";

            
        }
    }
    //pas de selection 
    else if(tabBtnNameCounter <= 0){
        console.log("aucune selection");   
        errorPara.innerText="veillez  sélectionner une scène puis écrire un nom entre 2 et 10 caractères";
        longueur.style.border="2px solid red";

    }
    //selection de plusieurs scène
    else if (tabBtnNameCounter > 1)
    {
        tabBtnNameCounter = 0;
        console.log("plusieurs selection...");
        errorPara.innerText="Vous ne pouvez pas modifier plusieurs scène en même temps.";
        longueur.style.border="2px solid red";
        
    }
}

function BPChargerScene() {

    var tabBtnToRename = [];
    var BtntoRenameFilter;

    var tabBtnNameCounter = 0;

    var d = document.querySelectorAll(".diva");
    for (let i = 0; i < document.querySelectorAll(".diva").length; i++) {
      
        if (d[i].firstChild.checked) {
            tabBtnToRename[i] = d[i].innerText
            tabBtnNameCounter++;
        }
    }
    console.log("click");
    if (tabBtnNameCounter === 1) {
        commandInteractionBtn.command = "C_ChargerScène";


        BtntoRenameFilter = tabBtnToRename.filter(function (el) {
            return el != null;
        });
        commandInteractionBtn.btnName = BtntoRenameFilter[0];

        sendCommand(commandInteractionBtn);
    }
    else {
        console.log("selection éronnée : rename impossible");
    }
}

//////////////////////////  Comunication Serveur /////////////////////////////////

var ipServeur = location.hostname; // Adresse ip du serveur
var ws; // Variable pour l'instance de la WebSocket.


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



        sendCommand(commandInteractionBtn);
     



    };

    //quand on recoit un message du serveur
    ws.onmessage = function (evt) {

        /*instructions*/

        let messageFromServer = JSON.parse(evt.data);
        console.log(messageFromServer);

        if (messageFromServer.command === "C_replyCommandAsknbrButtonToMake") {
            commandInteractionBtn.tabNameExisting = messageFromServer.tabNameExisting;

            for (let i = 0; i < messageFromServer.tabNameExisting.length; i++) {

                ajouterScene(commandInteractionBtn.tabNameExisting[i].replace('.csv', ''));
            }
            chargerLoader();
        }

        if (messageFromServer.command === "C_replyCreateButton") {
            let nameButton = messageFromServer.name.replace("./SauvegardeScene/", '');
            ajouterScene(nameButton.replace('.csv', ''));
        }

        if (messageFromServer.command === "C_ReplyDeleteButton") {
            let nameButton = [];
            for (let i = 0; i < messageFromServer.buttonToDelete.length; i++) {
                nameButton[i] = messageFromServer.buttonToDelete[i].replace("./SauvegardeScene/", '');
                supprimerBouton(nameButton[i].replace('.csv', ''));

            }
            
        }
        if (messageFromServer.command === "C_replyModifierNom") {

            console.log(messageFromServer)
            var d = document.querySelectorAll(".diva");
            for (elt of d) {
                //si l'élement est checké, le supprimer
                if (elt.innerText === messageFromServer.oldName)


                    elt.children[1].innerText = messageFromServer.newname; 

                    
            }


        }
        

    }
}

//interaction IHM
function ControleIHM() {


}