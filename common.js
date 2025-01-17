
const creatorContainer = document.getElementById("creator");
const numbersContainer = document.getElementById("numbers");
const numberDiv = document.getElementById("numbers");
const allNumbers = document.getElementById("numbers").children;
const linkDiv = document.getElementById("link_nav");
let boxesArray = [];

const homeButton = document.createElement("a");
homeButton.href = "../index.html";
homeButton.textContent = "Home";
linkDiv.appendChild(homeButton);
document.body.insertBefore(linkDiv,document.body.firstChild);

function getRandomNumber() {
    return Math.floor(Math.random()*99)+1;
}
const howManyNumbersText = document.createElement("p");
howManyNumbersText.textContent = "How Many Numbers In the Grid?";
const input = document.createElement("input");
input.type = "text";
input.style.width = "60px";
input.style.height = "30px";
input.style.borderRadius = "3px";
input.style.padding = "5px";
input.style.fontSize = "16px";

const createButton = document.createElement ("button");
createButton.textContent = "Create";
const buttonDOM = document.createElement("button");

createButton.addEventListener("click", function (){    
    createBoxes(input.value); 
})

creatorContainer.append(howManyNumbersText, input, createButton);
creatorContainer.classList.add("flex-center");
numbersContainer.classList.add("numbers")

function createBoxes(count){
    numbersContainer.innerHTML = "";
    boxesArray = [];
    for (let i = 0; i < count; i++){
        const numberDiv = document.createElement("div");
        let randomNumber = getRandomNumber();
        numberDiv.textContent = randomNumber;
        numberDiv.classList.add("numberDiv");
        numbersContainer.appendChild(numberDiv); 
        boxesArray.push(numberDiv);
    }     
}














