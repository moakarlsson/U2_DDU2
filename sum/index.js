
const sumAllDOM = document.getElementById("sum_Result_All");
const sumMarkedDOM = document.getElementById("sumResultMarked");
const resetButton = document.getElementById("reset");

function sumOfAll(){
    let totalSum = 0;
    for(let box of boxesArray){
        totalSum += Number(box.textContent);
    }
    sumAllDOM.textContent = totalSum;
}
function sumOfMarked() {
    let markedSum = 0;
    for (let box of boxesArray) {
        if (box.classList.contains("marked")) {
            markedSum += Number(box.textContent);
        }
    }
    sumMarkedDOM.textContent = markedSum;
}

function ClickEventBoxes() {
    for (let box of boxesArray) {
        box.addEventListener("click", function () {
            box.classList.toggle("marked");
            sumOfMarked();
        });
    }
}

resetButton.addEventListener("click", function () {
    for (let box of boxesArray) {
        box.classList.remove("marked");
        box.style.backgroundColor = "white";
    }
    sumMarkedDOM.textContent = "";
});

createButton.addEventListener("click", function () {
    let count = Number(input.value);
    createBoxesForAll(count);
    sumOfAll(); 
    ClickEventBoxes();
});


















