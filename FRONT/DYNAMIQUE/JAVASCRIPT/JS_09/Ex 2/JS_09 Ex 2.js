//JS_09 Exercice 2 - String Token
let sentence = window.prompt("Entrez une phrase");
let str1 = sentence.split(" ");
let str2 = window.prompt("Entrez un caractère");
let n = parseInt(prompt("Entrez un nombre entre 1 et " + str1.length));
let ndx = str1[n-1];
str1 = str1.join(str2);

strtok(str1, str2, n, ndx);

function strtok(str1, str2, n, ndx)
{ 
    document.getElementById("a").innerHTML = str1;
    document.getElementById("b").innerHTML = ndx;
    console.log(str1);
    console.log(str2);
    console.log(n);
    console.log(ndx);
}