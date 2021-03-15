var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
let enteredName = window.prompt("Entrez un prénom");
let text = document.getElementById("text");
let tabLength = tab.length;
let check = 0;

for (i=0; i<=tabLength; i++){
    if (tab[i] == enteredName){
        tab.splice(i, 1);
        tab.push(" ");       
    } 

text.innerHTML += tab[i] + "\n";

}
if (!tab.includes(" ")) {
    alert("prénom n'est pas trouvé")
}