//JS_08 Exercice 1 - Saisie
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