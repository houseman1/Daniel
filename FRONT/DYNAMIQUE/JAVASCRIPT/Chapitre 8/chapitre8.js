/*Exercice 1 - Saisie
let prenom = "Dan";
let count = 1;
let listNom = [];
while (prenom != "" && prenom != null) {
    prenom = window.prompt("Saisissez le prénom N°" + count + "\nou Clic sur Annuler pour arrêter le saisie.");
    listNom.push(prenom);
    count++;   
    }
document.getElementById("a").innerHTML = "Le nombre de prénoms : " + (count - 2);
document.getElementById("b").innerHTML = "Les prénoms : " + listNom;*/

/*Exercice 2 - Entiers inférieurs à N
let resultat = 0;
let n = window.prompt("Entrez un nombre :");
let i = 0;
let blockquote = document.getElementById("a");
let text = "";
for (i=0; i<n; i++) {
    resultat = i;
    text = document.createTextNode(resultat + " ");
    blockquote.appendChild(text);
}*/

//Exercice 3 - Moyenne
let inp = 1
let tot = 0
let av = 0
let count = 0
while (inp != 0) {
    count ++;
    inp = window.prompt("Entrez un nombre");
    tot = tot + parseInt(inp);
    av = tot / count;
    alert("La somme : " + tot + "\nLa moyenne : " + av + "\n" + count);
}