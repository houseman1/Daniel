//JS 08 Exercice 4 - Multiples
let res = 1;
let n = parseInt(prompt("Entrez un nombre : "));
let x = parseInt(prompt("Entrez un nombre : "));
let i = 1;

for (i=1; i<=n; i++) {
    res = i * x;
    
    let para = document.createElement("P");//create a P node
    let t = document.createTextNode(i + " x " + x + " = " + res);//create a text node
    para.appendChild(t);//append the text node to the P node
    document.getElementById("d").appendChild(para);//append P node to div   
}