//Les Tableaux - Exercice 1
let arraySize = parseInt(prompt("Entrez la taille de votre tableau"));
let arr = Array();

console.log("longueur tableau :" + arraySize);
let len = arr.length;

for (var i = 0; i<len; i++) {
    let inp = window.prompt("Entrez une valeur");
    arr.push(inp);
    console.log("longueur tableau :" + i);
}
console.log(arr);

affiche(arr);

function affiche (arr){
    document.getElementById("a").innerHTML = arr;
}