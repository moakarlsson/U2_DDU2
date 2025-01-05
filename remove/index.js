const randomNumberButton = document.getElementById("new_number_button");
const removeButton = document.getElementById("remove");
const newRandomNumberResult = document.getElementById("new_random_number_result");
const removeResult = document.getElementById("remove_result");

function generateNewRandomNumber(){
    let randomNumber = Math.floor(Math.random()*95) +1;
    newRandomNumberResult.textContent = randomNumber;
    return randomNumber;
}

randomNumberButton.addEventListener("click", function(){
    let randomNumber = generateNewRandomNumber();
    for (let box of boxesArray){
        if (box.classList.contains("matchMarked")) {
            box.classList.remove("matchMarked");
        }
        if (parseInt(box.textContent)=== randomNumber){
            box.classList.add("matchMarked");
        }
    }
});


    

