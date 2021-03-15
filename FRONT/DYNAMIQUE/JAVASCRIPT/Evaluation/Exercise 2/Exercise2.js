promptNombre = parseInt(prompt("Entrez un nombre"));
let textNombre = document.getElementById("textMult");

const multiply = (num1, num2) => {
    return num1 * num2;
    };

    for (i=1; i<=10; i++) {
        let resultMultiply = multiply(i, promptNombre);
        textNombre.innerHTML += i + " x " + promptNombre + " = " + resultMultiply + "\n";
    }