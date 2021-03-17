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