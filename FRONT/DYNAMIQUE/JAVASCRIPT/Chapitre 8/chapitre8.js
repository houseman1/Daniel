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
document.getElementById("b").innerHTML = "Les prénoms : " + listNom;

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

//Exercice 3 - Moyenne
let inp = 1;
let tot = 0;
let av = 0;
let count = 0;
inp = parseInt(prompt("Entrez un nombre"));
while (inp != 0) {
    count ++;    
    tot = tot + inp;
    av = tot / count;
    alert("La somme : " + tot + "\nLa moyenne : " + av);
    inp = parseInt(prompt("Entrez un nombre"));
}

//Exercice 4 - Multiples
let res = 1;
let n = parseInt(prompt("Entrez un nombre : "));
let x = parseInt(prompt("Entrez un nombre : "));
let i = 1;

for (i=1; i<=n; i++) {
    res = i * x;
    
    let para = document.createElement("P");//create a P node
    let t = document.createTextNode(i + " x " + x + " = " + res);//create a text node
    para.appendChild(t);//append the text node to the P node
    document.getElementById("d").appendChild(para);//append P node to div   
}*/

//Exercice 5 - Nombre de voyelles.
let word = window.prompt("Entrez un mot : ")
let len = word.length
let letters = Array();

for (i=0; i<=len; i++) {
    let l = word.substr(i,1);
    letters.push(l);
}
alert(letters)