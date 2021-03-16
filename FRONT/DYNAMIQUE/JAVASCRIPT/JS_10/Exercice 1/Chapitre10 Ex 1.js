//Les Tableaux - Exercice 1
let arraySize = parseInt(prompt("Entrez la taille de votre tableau"));
let tab = Array();

console.log("longueur tableau :" + arraySize);

for (var i = 0; i<arraySize; i++) {
    let inp = window.prompt("Entrez une valeur");
    tab.push(inp);
    console.log("longueur tableau :" + i);
}
console.log(tab);

affiche(tab);

function affiche (tab){
    document.getElementById("a").innerHTML = tab;
}

