let main = document.createElement("main");
let commonBoxContainer = document.createElement("div");
let howManyNumbersText = document.createElement("p");
let input = document.createElement("input");
document.body.append(main);
main.append(commonBoxContainer);
commonBoxContainer.append(howManyNumbersText);
commonBoxContainer.append(input);

commonBoxContainer.style.display = "grid";


howManyNumbersText.textContent = "How Many Numbers In the Grid?";
howManyNumbersText.style.fontFamily = "Helvetica";
howManyNumbersText.style.margin = "30px 10px";

input.style.width = "60px";
input.style.height = "30px";

commonBoxContainer.style.display = "flex";
commonBoxContainer.style.alignItems = "center";
commonBoxContainer.style.justifyContent = "center";



function createBoxesForAll(){
    let boxContainer = document.createElement("div");
    boxContainer.style.display = "grid";
    boxContainer.style.gridTemplateColumns = "repeat(19, 1fr)";
    boxContainer.style.gap = "10px";

    for (let i = 0; i <= 94; i++){
        let box = document.createElement("div");
        let randomNumber = Math.floor(Math.random()*90) + 1;
        box.textContent = randomNumber;

        box.style.display = "flex";
        box.style.justifyContent = "center";
        box.style.alignItems = "center";
        box.style.border = "1px solid black";
        box.style.borderRadius = "4px";
        box.style.height = "50px";
        box.style.fontSize = "16px";
        box.style.backgroundColor = "white";  // Du kan ändra bakgrundsfärgen här
    
        boxContainer.appendChild(box);
    }
    document.body.appendChild(boxContainer);  
}
createBoxesForAll();

