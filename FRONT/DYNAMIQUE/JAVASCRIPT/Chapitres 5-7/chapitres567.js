/*JS 05 Afficher du texte*/
let nom = window.prompt("Entrez votre nom");
let prenom = window.prompt("Entrez votre prénom");
if (window.confirm("Etes-vous un homme ?") == true) { 
    window.alert("Bonjour Monsieur " + nom + " " + prenom + "\n\nBienvenue sur notre site web !");
}

/*JS 06 Les opérateurs*/
/*les affichage*/ 
let a = "100" ;
let b = 100 ;
let c = 1 ;
let d = true ;
document.getElementById("a").innerHTML = ('Ceci est une chaîne de caractères : ' + a);
b = --b ;
c += a ;
d = !d ;

/*JS 07 Les conditions*/
/*Exercice 1 - Parité*/
let n = window.prompt("Entrez un nombre");
if (n % 2 == 0) {
    window.alert("nombre pair");
} else {
    window.alert("nombre impair");
}

/*JS 07 Les conditions*/
/*Exercice 2 - Age*/
let dob = window.prompt("Entrez votre année de naissance");
let thisYear;
thisYear = new Date().getFullYear();
let age = thisYear - dob;
if (age < 18){
	window.alert("Vous avez " + age + " ans.\nVous êtes mineur.");
} else {
	window.alert("Vous avez " + age + " ans.\nVous êtes majeur.");
} 

/*JS 07 Les conditions*/
/*Exercice 3 - Calculette*/
let result = 0;
let num1 = window.prompt("Entrez un nombre");
let num2 = window.prompt("Entrez un nombre");
let op = window.prompt("Entrez un opérateur (+, -, * ou /)");
result = parseInt(num1) + parseInt(num2);

switch (op) {
    case "+":
    result = parseInt(num1) + parseInt(num2);
    window.alert(num1 + op + num2 + " = " + result);
    break;

    case "-":
    result = parseInt(num1) - parseInt(num2);
    window.alert(num1 + op + num2 + " = " + result);
    break;

    case "*":
    result = parseInt(num1) * parseInt(num2);
    window.alert(num1 + op + num2 + " = " + result);
    break;

    case "/":
    if (num2 == 0) {
        window.alert("Erreur!");
        }
    else {
        result = parseInt(num1) / parseInt(num2);
        window.alert(num1 + " / " + num2 + " = " + result);
        }  
    break;
    
    default :
    window.alert("Erreur!");
    break;	
}
/*alternative using eval*/
/*eval is flagged as risky*/
let result = 0;
let num1 = window.prompt("Entrez un nombre");
let num2 = window.prompt("Entrez un nombre");
let op = window.prompt("Entrez un opérateur (+, -, * ou /)");
let input = num1 + op + num2;

switch (op) {
    case "+":

    case "-":

    case "*": 
    result = eval(input);
    window.alert(result);
    break;

    case "/":
    if (num2 == 0) {
        window.alert("Erreur!");
        break;
        }
    else {
        result = eval(input);
        window.alert(result);
        }  
    break;
    
    default :
    window.alert("Erreur!");
    break;	
}