const clearButton = document.getElementById("clearedButton");

function clearBoxes() {
    for (let box of boxesArray) {
        box.addEventListener("click", function () {
            if (box.classList.contains("marked")) {
                box.classList.add("clicked");
            }
        });
    }
}

clearButton.addEventListener("click", function () {
    for (let box of boxesArray) {
        if (box.classList.contains("clicked")) {
            box.classList.add("cleared");
            const newNumber = getRandomNumber();
            box.textContent = newNumber;
            box.classList.remove("clicked");
        }
    }
});







