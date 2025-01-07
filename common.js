function getRandomNumber() {
    return Math.floor(Math.random()*99) +1;
}

const creatorContainer = document.getElementById("creator");
const numbersContainer = document.getElementById("numbers");
const numberDiv = document.getElementsByClassName("numberDiv")

let boxesArray = [];

const input = document.createElement("input");
input.type = "text";
input.style.width = "60px";
input.style.height = "30px";
input.style.borderRadius = "3px";
input.style.padding = "5px";
input.style.fontSize = "16px";

const createButton = document.createElement ("button");
createButton.textContent = "Create";

const howManyNumbersText = document.createElement("p");
howManyNumbersText.textContent = "How Many Numbers In the Grid?";

const commonBoxContainer = document.createElement("div");
commonBoxContainer.classList.add("flex-center");
commonBoxContainer.append(howManyNumbersText, input, createButton);

creatorContainer.appendChild(commonBoxContainer);


const boxContainer = document.createElement("div");
boxContainer.classList.add("grid-container");
numbersContainer.appendChild(boxContainer); 

function createBoxesForAll(count){
    boxContainer.innerHTML = "";
    boxesArray = [];
    for (let i = 0; i < count; i++){
        const box = document.createElement("div");
        const randomNumber = getRandomNumber ();
        box.textContent = randomNumber;
        box.classList.add("numberDiv");
        boxContainer.appendChild(box);
        boxesArray.push(box);
    }     
}
createBoxesForAll(95);

createButton.addEventListener("click", function(){
    let count = parseInt(input.value);
    createBoxesForAll(count); 
});