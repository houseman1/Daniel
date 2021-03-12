let form = document.getElementById("myForm");

//société
let societeVal = document.getElementById("inputSociete");
let errorSociete = document.getElementById("errSociete");

//personne à contacter
let pacVal = document.getElementById("inputPac");
let errorPac = document.getElementById("errPac");

//code postale
let codeVal = document.getElementById("inputCP");
let errorCode = document.getElementById("errCP");
let codeRegex = /\d{2}[ ]?\d{3}/;

//ville
let villeVal = document.getElementById("inputVille");
let errorVille = document.getElementById("errVille");

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

//alert for invalid inputs
let alertSociete = " le nom de la société\n";
let alertPac = " le nom de la personne à contacter\n";
let alertCode = " le code postal sur 5 chiffres\n";
let alertVille = " la ville\n";
let alertEmail = " l'adresse e-mail avec un symbole @\n";
let alertArray = ["Entrez:\n"];
let arrayIndex = 0;

//remove non-validé when typing
/*document.getElementById("inputSociete").addEventListener("input", nonValide);
document.getElementById("inputPac").addEventListener("input", nonValide);
document.getElementById("inputCP").addEventListener("input", nonValide);
document.getElementById("inputVille").addEventListener("input", nonValide);
document.getElementById("inputEmail").addEventListener("input", nonValide);*/

document.querySelectorAll("form-control").addEventListener("input", nonValide);

function nonValide() {
    .innerHTML = "";
    }


//validate inputs by submit button
form.addEventListener("submit", function(event) {
    
    //société
    if (societeVal.value.length < 1) {
        event.preventDefault();
        errorSociete.innerHTML = "non-validé";
        if (!alertArray.includes(alertSociete)) {
            alertArray.push(alertSociete);
            } 
    } else {
        errorSociete.innerHTML = "";
        if (alertArray.includes(alertSociete)) {
            arrayIndex = alertArray.indexOf(alertSociete);
            alertArray.splice(arrayIndex, 1);
        }
    }  

    //personne à contacter
    if (pacVal.value.length < 1) {
        event.preventDefault();
        errorPac.innerHTML = "non-validé";
        if (!alertArray.includes(alertPac)) {
            alertArray.push(alertPac);
        }
    } else {
        errorPac.innerHTML = "";
        if (alertArray.includes(alertPac)) {
            arrayIndex = alertArray.indexOf(alertPac);
            alertArray.splice(arrayIndex, 1);
        }  
    }

    //code postal
    if (codeVal.value.length < 1 || codeVal.value.length > 5) {
        event.preventDefault();
        errorCode.innerHTML = "non-validé";
        if (!alertArray.includes(alertCode)) {
            alertArray.push(alertCode);
        }
    } else {
        errorCode.innerHTML = "";
        if (alertArray.includes(alertCode)) {
            arrayIndex = alertArray.indexOf(alertCode);
            alertArray.splice(arrayIndex, 1);
        }
    }

    //Ville
    if (villeVal.value.length < 1) {
        event.preventDefault();
        errorVille.innerHTML = "non-validé";
        if (!alertArray.includes(alertVille)) {
            alertArray.push(alertVille);
        }
    } else {
        errorVille.innerHTML = "";
        if (alertArray.includes(alertVille)) {
            arrayIndex = alertArray.indexOf(alertVille);
            alertArray.splice(arrayIndex, 1);
        }
    }

    //email
    if (!emailRegex.test(emailVal.value)) {
        event.preventDefault();
        errorEmail.innerHTML = "non-validé";
        if (!alertArray.includes(alertEmail)) {
            alertArray.push(alertEmail);
        }
    } else {
        errorEmail.innerHTML = "";
        if (alertArray.includes(alertEmail)) {
            arrayIndex = alertArray.indexOf(alertEmail);
            alertArray.splice(arrayIndex, 1);
        }
    }
    //alert
    if (alertArray.length > 1) {
        let a = alertArray.join(" ");
        console.log(alertArray);
        alert(a);
    }
});