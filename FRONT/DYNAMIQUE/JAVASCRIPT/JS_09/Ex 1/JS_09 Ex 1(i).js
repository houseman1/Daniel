//JS 09 Exercice 1 - affiche l'image
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