/*let inputArr = new Array();


function triABulles(inputArr) {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};*/

let bulleArray = [5,3,1,4,6];
let len = bulleArray.length;
let swapped;

do {
    swapped = false;
    for (let i = 0; i <= len ; i++) {
        let tempA = bulleArray[i];
        let tempB = bulleArray[i+1];
        if (tempA > tempB) {
            swapped = true;
            tempA = tempA + tempB;
            tempB = tempA - tempB;
            tempA = tempA - tempB;
            console.log("tempA = " + tempA);
            console.log("tempB = " + tempB);
            console.log(bulleArray);
        }
    }
} while (swapped = true);
alert(bulleArray);