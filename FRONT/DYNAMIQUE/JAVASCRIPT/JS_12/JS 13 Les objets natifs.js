let inpArray = Array();
let sum = 0;
let av = 0;

let inp = window.prompt("Entrez un nombre (0 pour arrêter)");
while (inp != "0") {
    if (inp == null) {
        break;
    }
    sum = sum + parseInt(inp);
    inpArray.push(inp);
    inp = window.prompt("Entrez un nombre (0 pour arrêter)");
}
av = sum / inpArray.length;
document.getElementById("nombre").innerHTML = "Le nombre de valeurs saisies est : " + inpArray.length;
document.getElementById("somme").innerHTML = "La somme est : " + sum;
document.getElementById("moyenne").innerHTML = "La moyenne est : " + av;