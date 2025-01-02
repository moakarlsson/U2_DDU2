
const sumAllDOM = document.getElementById("sum_Result_All");
const sumMarkedDOM = document.getElementById("sumResultMarked");
const resetButton = document.getElementById("reset");

function SumOfAll() {
    let totalSum = 0;
    for (let i = 0; i < boxes.length; i++) {
        totalSum += Number(boxes[i].textContent);
    }
    document.getElementById("sum_Result_All").textContent = totalSum;
}
createButton.addEventListener("click", function () {
    let count = Number(input.value);
    createBoxesForAll(count);
    SumOfAll(); 
    ClickEventBoxes();
});

function sumOfMarked() {
    let markedSum = 0;
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].classList.contains("marked")) {
            markedSum += Number(boxes[i].textContent);
        }
    }
    sumMarkedDOM.textContent = markedSum;
}

function ClickEventBoxes() {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("click", function () {
            boxes[i].classList.toggle("marked"); 
            sumOfMarked(); 
        });
    }
}
resetButton.addEventListener("click" ,function(){
    sumMarkedDOM.textContent = "";
    

})

ClickEventBoxes()






