const clearButton = document.getElementById("clearedButton");

function clearBoxes(){
    for (let box of boxesArray) {
        box.addEventListener("mouseover", function (){
            box.classList.add("hover");  
        });

        box.addEventListener("click", function (){
            if (box.classList.contains("hover")) { 
                box.classList.remove("hover");
                box.textContent = ""; 
            }
            box.classList.add("click");
        });
        box.addEventListener("mouseout", function (){
            if (box.classList.contains("click")){
                box.classList.remove("click"); 
                box.classList.toggle("cleared"); 

                if (!box.classList.contains("cleared")) {
                    box.textContent = getRandomNumber();
                } else {
                    box.textContent = "";
                }
            }
        });
    }
}

clearButton.addEventListener("click", function (){
    for (let box of boxesArray) {
        if (box.classList.contains("cleared")){
            box.textContent = getRandomNumber();
            box.classList.remove("cleared", "click", "hover");
            box.style.backgroundColor = "";
        }
    }
});

createButton.addEventListener("click", function(){
    clearBoxes();
});
clearBoxes();












