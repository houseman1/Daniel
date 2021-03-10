//Les Tableaux - Exercice 2
let postesArray = new Array();
let len = 0;
let max = 0;
let av = 0;
let tot = 0;
let int = 1;
let i = 1;
let entry = 1;

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



function InitTab() {
    len = window.prompt("Entrez le nombre de postes");
    document.getElementById("nombre").innerHTML = "Le nombre de postes dans votre tableau est " + len + ".";
    document.getElementById("SaisieTab").disabled = false;
}

function SaisieTab(){
    if (len <1) {
        alert("Il faut cliquer 'InitTab' pour initialiser votre tableau");
    } else {
        for (i=0; i<=len-1; i++) {
            entry = window.prompt("Entrez un nombre");
            tot = tot + parseInt(entry);//used to calculate average in InfoTab
            console.log("tot = " + tot);
            postesArray.push(parseInt(entry));
            console.log("postesArray = " + postesArray);
            document.getElementById("saisie").innerHTML = "C'est noté !";
        }
    }
    document.getElementById("AfficheTab").disabled = false;   
}

function AfficheTab(str){
    str = postesArray.toString();
    document.getElementById("affiche").innerHTML = "Vos postes : " + str;  
    console.log("postesArray = " + str); 
    document.getElementById("RechercheTab").disabled = false;
}

function RechercheTab (ndx, val){
    ndx = window.prompt("Entrez l'index de la valeur que vous cherchez");
    val = postesArray[ndx-1];
    document.getElementById("recherche").innerHTML = "La valuer que vous recherchez est: " + val;
    document.getElementById("InfoTab").disabled = false;
}

function InfoTab (){
    for (i=0; i<=len; i++) {
        console.log("i = " + i ) ;

        if (postesArray[i] > max) {
            max = postesArray[i];
            console.log("Max = " + max);
        }
    }
    av = tot / len;
    document.getElementById("maximum").innerHTML = "Le maximum des postes est " + max;
    document.getElementById("moyenne").innerHTML = "Le moyenne des postes est " + av.toFixed(1);
    document.getElementById("GetIntegerTab").disabled = false;
}

function GetInteger(){
    int = window.prompt("Entrez un nombre");
    while (isNaN(int)) {
        alert("Il faut entrer un nombre entier");
        int = window.prompt("Entrez un nombre");
    }

    document.getElementById("integer").innerHTML = "Votre nombre entier est : " + parseInt(int);    
    console.log(int);
}