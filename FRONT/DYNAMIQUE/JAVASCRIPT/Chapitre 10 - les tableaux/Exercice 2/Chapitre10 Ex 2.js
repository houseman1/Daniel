//Les Tableaux - Exercice 2
let postesArray = new Array();
let len = 0;
let max = 0;
let av = 0;
let tot = 0;

var btnInit  = document.getElementById("InitTab");//identify button
btnInit.addEventListener("click", InitTab);//Assign click event 

var btnSaisie  = document.getElementById("SaisieTab");//identify button
btnSaisie.addEventListener("click", SaisieTab);//Assign click event

var btnGetInteger  = document.getElementById("GetIntegerTab");//identify button
btnGetInteger.addEventListener("click", GetInteger);//Assign click event

var btnAffiche  = document.getElementById("AfficheTab");//identify button
btnAffiche.addEventListener("click", AfficheTab);//Assign click event

var btnRecherche  = document.getElementById("RechercheTab");//identify button
btnRecherche.addEventListener("click", RechercheTab);//Assign click event

var btnInfo  = document.getElementById("InfoTab");//identify button
btnInfo.addEventListener("click", InfoTab);//Assign click event



function InitTab(){
    len = window.prompt("Entrez le nombre de postes");
    document.getElementById("nombre").innerHTML = "Le nombre de postes dans votre tableau est " + len + ".";
}

function SaisieTab(){
    if (len <1) {
        alert("Il faut cliquer 'InitTab' pour initialiser votre tableau");
    } else {
        for (i=0; i<=len-1; i++) {
            entry = window.prompt("Entrez un nombre");
            postesArray.push(parseInt(entry));
            console.log("postesArray = " + postesArray)
            document.getElementById("nombre").innerHTML = "Le nombre de postes dans votre tableau est " + postesArray.length + ".";
        }
    }   
}

function AfficheTab(str){
    str = postesArray.toString();
    document.getElementById("affiche").innerHTML = "Vos postes : " + str;  
    console.log("postesArray = " + str); 
}

function RechercheTab (){
    ndx = window.prompt("Entrez l'index de la valeur que vous cherchez");
    val = postesArray[ndx-1];
    document.getElementById("recherche").innerHTML = "La valuer que vous recherchez est: " + val;
}

function InfoTab (){
    for (i=0; i<=len; i++) {
        console.log("i = " + i ) ;
        tot = tot + postesArray[i]//to calculate total
        if (postesArray[i] > max) {
            max = postesArray[i];
            console.log("Max = " + max);
            //console.log("len = " + len) ;
        }
        av = tot / parseInt(len);  
    }
    document.getElementById("maximum").innerHTML = "Le maximum des postes est " + max;
    document.getElementById("moyenne").innerHTML = "Le moyenne des postes est " + av;

}

function GetInteger(int){
    int = window.prompt("Entrez un nombre");
    if (Number.isInteger(int)) {
        document.getElementById("integer").innerHTML = "Votre nombre est un nombre entier.";
    } else {
        document.getElementById("integer").innerHTML = "Votre nombre est un 'float'.";
    }
    console.log(Number.isInteger("Number.isInteger = " + int));
    console.log(int);
}