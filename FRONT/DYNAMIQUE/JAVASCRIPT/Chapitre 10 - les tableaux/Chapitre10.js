/*Les Tableaux - Exercice 1
let arraySize = parseInt(prompt("Entrez la taille de votre tableau"));
let tab = Array();

console.log("longueur tableau :" + arraySize);
let len = arr.length;

for (var i = 0; i<len; i++) {
    let inp = window.prompt("Entrez une valeur");
    tab.push(inp);
    console.log("longueur tableau :" + i);
}
console.log(tab);

affiche(tab);

function affiche (arr){
    document.getElementById("a").innerHTML = arr;
}*/

//Les Tableaux - Exercice 2
let int = 0;
let postesContent = window.prompt("Enter content");
function GetInteger(int){
    alert('ok');
}

function InitTab(){

}

function SaisieTab(){

}

function AfficheTab(){

}

function RechercheTab (){

}

function InfoTab (){

}

function postes(postesContent){
    document.getElementById("postes-content").innerHTML = postesContent;
}

var btnPostes  = document.getElementById("postes");
btnPostes.addEventListener("click", GetInteger);