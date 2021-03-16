//JS 08 Exercice 5 - Nombre de voyelles.
let word = window.prompt("Entrez un mot : ");
let lenWord = word.length;
let letters = Array();
let vowels = Array();
let i = 0;
let a = 0;


for (i=0; i<=lenWord; i++) {
    let ltr = word.substr(i,1);
    letters.push(ltr);
}
for (i=0; i<=lenWord; i++) {
    let ltr = letters[i];
    switch (ltr) { 
        case "a" :
        case "e" :
        case "i" :
        case "o" :
        case "u" :
        case "y" :
            vowels.push(ltr);
            break;
    }
}
if (vowels.includes("y")) {
    alert("Il y a " + vowels.length + " voyelles dans votre mot :\n" + vowels + "\n\n(Attention ! «y» peut être prononcé comme voyelle et consonne en anglais. Il est généralement considéré comme une consonne.)");
} else {
    alert("Il y a " + vowels.length + " voyelles dans votre mot :\n" + vowels);
}