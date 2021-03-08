//Exercice 1 - le produit des 2 variables
function produit(x,y)
{
    return x * y;
}
let resultat = alert(produit(2, 4));


//Exercice 1 - affiche l'image
let x =  parseInt(prompt("Entrez un nombre"));
let y =  parseInt(prompt("Entrez un multiplacateur"));

let image = "https://ncode.amorce.org/ressources/Pool/TB/WEB_Javascript_BASES/images/papillon.jpg";
afficheImg(image);

function afficheImg(image)
{
    let imgDiv = document.getElementById("imgDiv");
    let imgElement = document.createElement("img");
    imgElement.src = image;
    imgDiv.append(imgElement);
    document.getElementById("a").innerHTML = "Le cube de " + x + " est égal à " + x * x * x + "." + "<br>Le produit de " + x + " x " + y + " = " + x * y + ".";  
}


//Exercice 2 - String Token

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