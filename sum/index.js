
const sumAllDOM = document.getElementById("sum_Result_All");
const sumMarkedDOM = document.getElementById("sumResultMarked");
const resetButton = document.getElementById("reset");
//Funktion som räknar ut summan av alla boxar med random nummer i

function sumOfAll(){
    let totalSum = 0;
    for(let box of boxesArray){
        totalSum += parseInt(box.textContent);
    }
    sumAllDOM.textContent = totalSum;
}
//Funktion som räknar ut summan av alla nummerboxar som användaren markerar.

function sumOfMarked() {
    let markedSum = 0;
    for (let box of boxesArray) {
        if (box.classList.contains("marked")) {
            markedSum += parseInt(box.textContent);
        }
    }
    sumMarkedDOM.textContent = markedSum; 
}
//Event som är kopplat till funktionen SumOfMarked som sätter en klass på boxarna när det klickas på.
function ClickEventBoxes() {
    for (let box of boxesArray) {
        box.addEventListener("click", function () {
            box.classList.toggle("marked");
            sumOfMarked();
        });
    }
}

//Event som gör att resetKnappen clearar boxarna och summan.
resetButton.addEventListener("click", function () {
    for (let box of boxesArray) {
        box.classList.remove("marked");
    }
    sumMarkedDOM.textContent = "";
});
//
createButton.addEventListener("click", function (){
    sumOfAll();
    ClickEventBoxes();
});





































