copiesTextBox = document.getElementById("copies_text");
resetButton = document.getElementById("reset");

function clickEventBoxes() {
    for (let box of boxesArray){
        box.addEventListener("click", function(){
            let clickedNumber = parseInt(box.textContent);
            let count = 0;
            for (let otherBox of boxesArray){
                if (parseInt(otherBox.textContent) === clickedNumber){
                    otherBox.classList.add("matched");
                    count++;
                }else{
                    otherBox.classList.remove("matched");
                }
            }
            if (count > 0){
                copiesTextBox.textContent = `${count} copies of the Number ${clickedNumber}`;
            } else{
                copiesTextBox.textContent = "No matches found";
            }
        });
    }
}
resetButton.addEventListener("click", function(){
    for (let box of boxesArray){
        box.classList.remove("matched");
    }
    copiesTextBox.textContent = "Click on a Number to find copies";
});

createButton.addEventListener("click", function(){
    clickEventBoxes();
})






 

