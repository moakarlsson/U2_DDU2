let numbersContainer = document.getElementById("numbers");
let creatorContainer = document.getElementById("creator");
let main = document.createElement("main");
let commonBoxContainer = document.createElement("div");
commonBoxContainer.classList.add("flex-center");

let input = document.createElement("input");
input.type = "text";
input.style.width = "60px";
input.style.height = "30px";
input.style.borderRadius = "3px";
input.style.padding = "5px";
input.style.fontSize = "16px";

let createButton = document.createElement ("button");
document.body.append(main);
main.append(commonBoxContainer);
createButton.textContent = "Create";

let howManyNumbersText = document.createElement("p");
howManyNumbersText.textContent = "How Many Numbers In the Grid?";

commonBoxContainer.append(howManyNumbersText, input, createButton);
creatorContainer.appendChild(commonBoxContainer);

let boxContainer = document.createElement("div");
boxContainer.classList.add("grid-container");
numbersContainer.appendChild(boxContainer); 
let boxesArray = [];

numbers.appendChild(boxContainer);

function createBoxesForAll(count){
    boxContainer.innerHTML = "";
    boxesArray = [];
    for (let i = 0; i < count; i++){
        let box = document.createElement("div");
        let randomNumber = Math.floor(Math.random()*99) + 1;
        box.textContent = randomNumber;
        box.classList.add("boxStyle");
        boxContainer.appendChild(box);
        boxesArray.push(box);
    }  
    
}
createBoxesForAll(95);

createButton.addEventListener("click", function(){
    let count = parseInt(input.value);
    createBoxesForAll(count);
    clickEventBoxes();  
});

