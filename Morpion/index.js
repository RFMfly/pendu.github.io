// VARIABLE
let quiJoue = true;
let plateau = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

//Balise P -> ZONE DE TEXTE

//BOUTON ET INPUT ET LISTE
let cases = document.getElementsByClassName("case");
let zoneQuiJoue = document.getElementById("qui-joue");
let zoneBravo = document.getElementById("ma-zone-bravo");


//FUNCTION
function win() {
    for (let i = 0; i < plateau.length; i++) {
        if (plateau[i][0] == "X" && plateau[i][1] == "X" && plateau[i][2] == "X") {
            zoneBravo = "Fin de la partie. Bravo au joueur 1!"
        }
        if (plateau[i][0] == "O" && plateau[i][1] == "O" && plateau[i][2] == "O") {
            zoneBravo = "Fin de la partie. Bravo au joueur 2!"
        }
    }


}

function jouer(event) {
    console.log(event.target);
    let caseCliquee = event.target;
    let id = event.target.id;
    let numero = id.substring(4); // "5"
    let index = Number(numero);    // 5
    zoneQuiJoue.textContent = quiJoue ? "Joueur 1" : "Joueur 2";
    if (caseCliquee.textContent === "") {
        if (quiJoue == true) {

            plateau[Math.floor((index - 1) / 3)][(index - 1) % 3] = "X"
            caseCliquee.textContent = "X"

            quiJoue = false
        }
        else {

            plateau[Math.floor((index - 1) / 3)][(index - 1) % 3] = "O"
            caseCliquee.textContent = "O"
            quiJoue = true
        }
    }
    else {
        alert("Vous ne pouvez pas jouer une case déjà jouer.")
    }
}

for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener("click", jouer)

}
/*function jouer (){
    if  (quiJoue==0){
        zoneQuiJoue.textContent = "Joueur 1"
    }
    if (quiJoue==1){
        zoneQuiJoue.textContent = "Joueur 2"
    }
}*/
//ADDEVENTLISTENER
//boutonReset.addEventListener("click", reset);