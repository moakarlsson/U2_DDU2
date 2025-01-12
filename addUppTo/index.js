const addUpTo = document.querySelector("input"); 
const cellButton = document.getElementById("new_number_button");

cellButton.addEventListener("click", function(){
    const targetValue = parseInt(addUpTo.value);
    if (isNaN(targetValue)) return;
    let foundPair = false;

    for (const box of boxesArray){
        box.style.backgroundColor = "";
    }

    for (const numberBox of boxesArray){
        for (const numberBox2 of boxesArray) {
            if (numberBox === numberBox2) continue;

            const value1 = parseInt(numberBox.textContent);
            const value2 = parseInt(numberBox2.textContent);

            if (value1 + value2 === targetValue) {
                numberBox.classList.add("markedBox");
                numberBox2.classList.add("markedBox");
                foundPair = true;
                break;
            }
        }
        if (foundPair) break;
    }
});