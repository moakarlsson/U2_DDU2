let numbersContainer = document.getElementById("numbers");
let controlsContainer = document.getElementById("controls");
let creatorContainer = document.getElementById("creator");

let main = document.createElement("main");


let commonBoxContainer = document.createElement("div");
commonBoxContainer.style.display = "flex";
commonBoxContainer.style.alignItems = "center";
commonBoxContainer.style.justifyContent = "center";

let input = document.createElement("input");
input.type = "text";
input.style.width = "60px";
input.style.height = "30px";
input.style.borderRadius = "3px";
input.placeholder = "95";

let createButton = document.createElement ("button");
document.body.append(main);
main.append(commonBoxContainer);
createButton.textContent = "Create";
createButton.style.marginLeft = "10px"
createButton.style.padding = "7px";

let howManyNumbersText = document.createElement("p");
howManyNumbersText.textContent = "How Many Numbers In the Grid?";
howManyNumbersText.style.fontFamily = "Helvetica";
howManyNumbersText.style.margin = "30px 10px";

commonBoxContainer.append(howManyNumbersText);
commonBoxContainer.append(input);
commonBoxContainer.append(createButton);
creatorContainer.appendChild(commonBoxContainer);



let boxContainer = document.createElement("div");
    boxContainer.style.display = "grid";
    boxContainer.style.gridTemplateColumns = "repeat(19, 1fr)";
    boxContainer.style.gap = "5px";
    boxContainer.style.marginTop = "70px";
    numbers.appendChild(boxContainer); 
    let boxesArray = [];

numbers.appendChild(boxContainer);

function createBoxesForAll(count){
    boxContainer.innerHTML = "";
    boxesArray = [];
    for (let i = 0; i < count; i++){
        let box = document.createElement("div");
        let randomNumber = Math.floor(Math.random()*90) + 1;
        box.textContent = randomNumber;
        box.classList.add("boxStyle")
        boxContainer.appendChild(box);
        boxesArray.push(box);
    }  
    
    
}
createBoxesForAll(95);

createButton.addEventListener("click", function(){
    let count = Number(input.value);
    createBoxesForAll(count);
});


