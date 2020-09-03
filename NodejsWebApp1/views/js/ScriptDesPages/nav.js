
  //////////Variables//////////////
  page_info=true; //variable pour afficher ou non la page présentation

  document.getElementById("Total").style.display = "block";
  document.getElementById("information").style.display="none";
 // Permet de changer le background de la page 
//Valeur d'entrée : aucune
//Valeur retournée : aucune 
       function changerbackground(){

        if(document.getElementById("backgroundChange").checked)
        {
            document.body.style.backgroundColor=" #4B1D8F";
        }
        else{
            document.body.style.backgroundColor="rgba(5, 0, 0, 0.71)";
        }
       }

    function information(){
        if(page_info != true)
        {
            document.getElementById("Total").style.display="none";
            document.getElementById("information").style.display="flex";
            page_info=true;
        }
        else{
            document.getElementById("Total").style.display="block";
            document.getElementById("information").style.display="none";
            page_info=false;
        }
    }

    var loadBox; //variable pour le loading page

    //permet de charger la page de loading
  function chargerLoader() {
    loadBox = showPage() ;
  }
  function showPage() {
      document.getElementById("loader").style.display = "none";
      document.getElem
      document.getElementById("Total").style.display = "block";
    }
  
     ////VueJs pour le choix des caissons
  var CaissonVueModel = new Vue({
    el: '#choixCaisson',
    data: {
      counter: 0,
      selected: 1,
      message: "",
      caisson: "Caisson",
      options: [{
          text: 'Caisson',
          value: 1
        },
        {
          text: 'Caisson',
          value: 2
        },
        {
          text: 'Caisson',
          value: 3
        },
        {
          text: 'Caisson',
          value: 4
        },
      ],
      value: 5
    },

    //methode pour le vue.JS
    methods: {
      //Fonction qui permet d'ajouter dans l'array options un caisson 
      ajouterCaisson: function () {
        this.options.push({
          text: this.caisson,
          value: this.value
        })
        this.value++
      },
      //Fonction qui permet de supprimer dans l'array options le dernier caisson dans la liste 
      supprimerCaisson: function () {
        this.options.pop()
        this.value--
      }
    }
  })