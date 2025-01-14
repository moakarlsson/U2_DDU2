const clearButton = document.getElementById("clearedButton");

function clearBoxes(){
    for (let box of boxesArray) {
        box.addEventListener("mouseover", function (){
            box.classList.add("hover");  
        });

        box.addEventListener("click", function (){
            if (box.classList.contains("hover")) {  
                box.classList.add("click");
                box.textContent = "";
                 
            }
        });
        box.addEventListener("mouseout", function (){
            if (box.classList.contains("click")){
                box.classList.add("cleared");
                box.textContent = ""; 
            } 
        });
    }
}

clearButton.addEventListener("click", function (){
    for (let box of boxesArray) {
        if (box.classList.contains("cleared")){
            box.textContent = getRandomNumber();
            box.style.backgroundColor = "lightblue";
        }
    }
});

createButton.addEventListener("click", function(){
    clearBoxes();
});
clearBoxes();












