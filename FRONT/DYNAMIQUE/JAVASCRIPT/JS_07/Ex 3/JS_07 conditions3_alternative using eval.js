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