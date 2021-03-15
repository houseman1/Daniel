//form
let form = document.getElementById("myForm");
//nom
let errorNom = document.getElementById("errorNom");
let valueNom = document.getElementById("nom");

//alert for invalid inputs
let alertNom = " le nom\n";
let alertPrenom = " le prénom\n";
let alertSexe = " le sexe\n";
let alertCode = " le code postal\n";
let alertEmail = " l'adresse e-mail avec un symbole @\n";
let alertArray = ["Entrez:\n"];
let arrayIndex = 0;


//validate inputs
form.addEventListener("submit", function(event) {
    if (valueNom.value.length < 1) {
        event.preventDefault();
        errorNom.innerHTML = "non-validé";
        if (!alertArray.includes(alertNom)) {
            alertArray.push(alertNom);
            } 
    } else {
        errorNom.innerHTML = "";
        if (alertArray.includes(alertNom)) {
            arrayIndex = alertArray.indexOf(alertNom);
            alertArray.splice(arrayIndex, 1);
        }
    }
    
    //alert
    if (alertArray.length > 1) {
        let a = alertArray.join(" ");
        console.log(alertArray);
        alert(a);
    }
})

