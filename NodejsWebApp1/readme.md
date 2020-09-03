 # ProjetDMX
<img src="/views/img/Markdown/dalleDMX.png">

[![made-for-VSCode](https://img.shields.io/badge/Made%20for-VSCode-1f425f.svg)](https://code.visualstudio.com/)

# A propos du projet !
La dalle DMX(et ses alimentations)conçue par l’ENTPE permet d’obtenir une lumière de forte puissance (environ 300W rayon maximum) avec un spectre que l’on peut finement construire à partir de l’addition de 32 spectres différents modulables en amplitude. 24 de ces spectres sont proches de couleurs pures et 6 sont des blancs plus ou moins chauds avec des IRC différents.

Le projet est de créer une application web permettant de faire fonctionner la dalle DMX de manière ludique.
### Pré-requis

* Tablette android de 10"
* Raspberry pi 3+
* Google chrome(**_Obligatoire_**)

****
### Installation

1. Télécharger la dernière version du projet.
2. Allumer la raspberry puis le Logiciel MobaXterm.
3. Installer le projet dans la raspberry dans le repertoire "ApplicationDMX".

****
## Démarrage
Allez dans le répertoire "ApplicationDMX" puis taper:
```sh
$ node server.js
```
* Connecter la tablette au réseau du serveur.
  
Allez sur google chrome puis taper l'url du serveur dans la barre de recherche.
```
"http://Ipduserveur"
```
Les différentes pages dans le projet:
* **Table de mixage des couleurs** - Page avec 24 curseurs de couleurs et 8 curseurs blanc afin de créer un spectre de couleurs.
* **Espace de couleurs** - Création d'un espace colorimétrique avec 3 curseurs de couleurs dominantes.
* **Scènes** - Choix des différentes scènes pré-défini.
* **Saturation** - Permet d'ajouter un blanc à une des 24 couleurs disponible et voir la couleur finale.

**** 
## Fabriqué avec

Ressources utilisées pour la création du projet:
##### HTML et CSS
* [Bootstrap.css](https://getbootstrap.com/) - Framework CSS (front-end)
* [Vue.js](https://fr.vuejs.org/v2/guide/index.html) - Framework Js(Front-end)
* [ejs](https://ejs.co/#install) - Moteur de templates
* [chart.js](https://www.chartjs.org/docs/latest/) - Création de chart 
  
##### Serveur
* [express](https://github.com/expressjs/express) - Module serveur
* [express-ws](https://www.npmjs.com/package/express-ws) - Module websocket
* [json2csv](https://www.npmjs.com/package/json2csv) - Conversion json en csv
****
## Versions
En cours de développement:

**Dernière version stable :** 1.0

**Dernière version :** 1.1
****
## Auteurs
**_Donin Jean-Baptiste_**

**_Gisbert Baptiste_**
