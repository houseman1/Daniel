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