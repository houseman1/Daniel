/*JS 05 Afficher du texte*/
let nom = window.prompt("Entrez votre nom");
let prenom = window.prompt("Entrez votre prénom");
if (window.confirm("Etes-vous un homme ?") == true) { 
    window.alert("Bonjour Monsieur " + nom + " " + prenom + "\n\nBienvenue sur notre site web !");
}