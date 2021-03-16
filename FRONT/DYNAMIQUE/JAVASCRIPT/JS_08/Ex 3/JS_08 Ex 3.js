//JS 08 Exercice 3 - Moyenne
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