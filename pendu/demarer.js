// VARIABLE
let tiret = [];
let lettreS = [];
let reponse = "";
let jeuEtat = true;
let menuvisible = false;
let aleatoire = false;

//Balise P -> ZONE DE TEXTE
let zoneTexte = document.getElementById("ma-zone-pendu"); //sert a établir la zone du texte
let zoneLettreFausse = document.getElementById("lettre-fausse"); //sert a établir la zone du texte
let zoneBravo = document.getElementById("ma-zone-bravo");

//BOUTON ET INPUT ET LISTE
let boutonOk = document.querySelector(".check");
let input = document.getElementById("name");
let theme = document.getElementById("div-theme");
let boutonReset = document.querySelector(".reset");
let boutonStart = document.querySelector(".start");
let topicWord = document.querySelector("#topic-select");
let confettis = document.querySelector('#confetti-canvas');

//FUNCTION
function reset() { //Reset le jeu
    tiret = []
    reponse = []
    lettreS = []
    menuvisible = false;
    theme.style.display = "none"
    zoneBravo.style.display = "none";
    jeuEtat = true
    zoneTexte.textContent = tiret.join(" "); // Pour afficher les tirets
    zoneLettreFausse.textContent = lettreS.join(" ");
    input.value = "";

};

//ADDEVENTLISTENER
boutonReset.addEventListener("click", reset);