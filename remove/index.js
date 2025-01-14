const randomNumberButton = document.getElementById("new_number_button");
const removeButton = document.getElementById("remove");
const newRandomNumberResult = document.getElementById("new_random_number_result");
const removeResult = document.getElementById("remove_result");

randomNumberButton.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    newRandomNumberResult.textContent = randomNumber;
    for (let box of boxesArray){
        if (box.classList.contains("matchMarked")) {
            box.classList.remove("matchMarked");
        }
        if (parseInt(box.textContent) === randomNumber){
            box.classList.add("matchMarked");
        }
    }
});

removeButton.addEventListener("click", function(){
    let randomNumber = parseInt(newRandomNumberResult.textContent)
    let countRemoved = 0;
    for (let box of boxesArray) {
        if (parseInt(box.textContent) === randomNumber) {
            box.classList.add("removed");
            box.textContent = "X";
            countRemoved++;
        } 
    }
    if (countRemoved > 0) {
        removeResult.textContent = `${randomNumber} removed ${countRemoved} times.`;
    } else {
        removeResult.textContent = "Nothing to remove";
    }
});


    

