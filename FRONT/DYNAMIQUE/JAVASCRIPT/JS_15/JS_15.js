let randNum = 1;

var btnCont  = document.getElementById("btnCont");//identify button
btnCont.addEventListener("click", Controle);//Assign click event

var btnMagic  = document.getElementById("btnMagic");
btnMagic.addEventListener("click", Magic);

function Controle() {
    let inpCont = document.getElementById("inpCont").value;
    alert("Vous avez saisie: " + inpCont);
}

function Magic(min, max) {
    min = Math.ceil(1);
    max = Math.floor(20);
    randNum = Math.floor(Math.random() * (max - min) + min);
    console.log("randNum = " + randNum);

    let inpMagic = document.getElementById("inpMagic").value;

    if (inpMagic === randNum) {
        document.getElementById("label1").innerHTML = "C'est magique !";
    } else if (inpMagic < randNum) {
        document.getElementById("label1").innerHTML = "Trop petit !  J'ai " + randNum;
    } else {
        document.getElementById("label1").innerHTML = "Trop grand !  J'ai " + randNum;
    }   
}