let ageArrayInf20 = [];
let ageArray20a40 = [];
let ageArraySup40 = [];
let ageEntered = 0;
let ageInf20 = 0;
let age20a40 = 0;
let ageSup40 = 0;
let countInf20 = 0;
let count20a40 = 0;
let countSup40 = 0;
let labelInf20 = document.getElementById("labelInf20");
let label20a40 = document.getElementById("label20a40");
let labelSup40 = document.getElementById("labelSup40");
let labelSup100 = document.getElementById("labelSup100");
let textInf20 = document.getElementById("inferieur20");
let text20a40 = document.getElementById("20a40");
let textSup40 = document.getElementById("superieur40");
let textSup100 = document.getElementById("superieur100");


while (ageEntered<100) {
    ageEntered = parseInt(prompt("Entrez un âge"));
    if (ageEntered < 20){
        ageArrayInf20.push(ageEntered);
        textInf20.innerHTML = ageArrayInf20;
        countInf20++;
        labelInf20.innerHTML = countInf20 + " inférieur à 20 ans";
    } else if (ageEntered >= 20 && ageEntered <= 40) {
        ageArray20a40.push(ageEntered);
        text20a40.innerHTML = ageArray20a40;
        count20a40++;
        label20a40.innerHTML = count20a40 + " entre 20 ans et 40 ans";
    } else if (ageEntered > 40 && ageEntered < 100) {
        ageArraySup40.push(ageEntered);
        textSup40.innerHTML = ageArraySup40;
        countSup40++;
        labelSup40.innerHTML = countSup40 + " supérieur à 40 ans"
    }
} 
textSup100.innerHTML = ageEntered;
labelSup100.innerHTML = "1 supérieur à 100 ans";
