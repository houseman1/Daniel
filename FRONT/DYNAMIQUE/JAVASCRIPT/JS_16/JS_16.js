let form = document.getElementById("myForm");

//société
let societeVal = document.getElementById("inputSociete");
let errorSociete = document.getElementById("errSociete")
//personne à contacter
let pacVal = document.getElementById("inputPac");
let errorPac = document.getElementById("errPac")

//code postale
let codeVal = document.getElementById("inputCP");
let errorCode = document.getElementById("errCP");
let codeRegex = /\d{2}[ ]?\d{3}/;

//ville
let villeVal = document.getElementById("inputVille");
let errorVille = document.getElementById("errVille")

//email
let emailVal = document.getElementById("inputEmail");
let errorEmail = document.getElementById("errEmail");
let emailRegex = /(^[\w.-]+@[a-z]+[.]{1}[a-z]{2,3}$)/;

//display dropdown input in textarea
let selectTech = document.getElementById("selectTech");
let textTech = document.getElementById("textTech");
selectTech.addEventListener("change", textA);

function textA() {
    textTech.textContent = selectTech.value;
}

//validate inputs
form.addEventListener("submit", function(event) {
    
    //société
    if (societeVal.value.length < 1) {
        event.preventDefault();
        console.log("societe n'est pas validé");
        errorSociete.innerHTML = "non-validé";
    } else {
        errorSociete.innerHTML = "";
    }

    //personne à contacter
    if (pacVal.value.length < 1) {
        event.preventDefault();
        console.log("personne à contacter n'est pas validé");
        errorPac.innerHTML = "non-validé";
    } else {
        errorPac.innerHTML = "";
    }

    //code postal
    if (codeVal.value.length < 1 || codeVal.value.length > 5) {
        event.preventDefault();
        console.log("code postal n'est pas validé");
        errorCode.innerHTML = "non-validé";
    } else {
        errorCode.innerHTML = "";
    }

    //Ville
    if (villeVal.value.length < 1) {
        event.preventDefault();
        console.log("ville n'est pas validé");
        errorVille.innerHTML = "non-validé";
    } else {
        errorVille.innerHTML = "";
    }

    //email
    if (!emailRegex.test(emailVal.value)) {
        event.preventDefault();
        console.log("email n'est pas validé");
        errorEmail.innerHTML = "non-validé";
    } else {
        errorEmail.innerHTML = "";
    }
});