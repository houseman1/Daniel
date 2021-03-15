let pu = window.prompt("Entrez le prix unitaire");
let qtecom = window.prompt("Entrez la quantité commandée");
let tot = pu * qtecom;
let port = 0;
let rem = 0;
console.log(tot);
let text = document.getElementById("text");

if (tot >= 100 && tot <= 200){
    rem = ((tot/100)*5);
    tot -= rem;
} else if(tot > 200){
    rem = ((tot/100)*10);
    tot -= rem;
}
console.log(tot);

if (tot < 500) {
    port = ((tot/100)*2);
    if (port < 6){
        port = 6;
    } 
tot += port;
}

let prixUnitaire = parseFloat(pu).toFixed(2);
let discount = parseFloat(rem).toFixed(2);
let shipping = parseFloat(port).toFixed(2);
let total = parseFloat(tot).toFixed(2);

console.log(tot);

text.innerHTML = "Prix unitaire : " + prixUnitaire + "€\nQuantité commandée : " + qtecom + "\nRemise : " + discount + "€\nPort : " + shipping + "€\nPrix à payer : " + total + "€";
