//Exercice 2 - Entiers inférieurs à N
let resultat = 0;
let n = window.prompt("Entrez un nombre :");
let i = 0;
let blockquote = document.getElementById("a");
let text = "";
for (i=0; i<n; i++) {
    resultat = i;
    text = document.createTextNode(resultat + " ");
    blockquote.appendChild(text);
}