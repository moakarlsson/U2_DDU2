function updateSumOfAll() {
    let totalSum = 0;

    // Loopa genom alla boxar och räkna deras värden
    for (let i = 0; i < boxes.length; i++) {
        totalSum += Number(boxes[i].textContent);
    }

    // Uppdatera summan på sidan
    document.getElementById("sum_Result_All").textContent = totalSum;
}

// Lyssna på "Create"-knappen
createButton.addEventListener("click", function () {
    let count = Number(input.value);

    // Skapa boxar och uppdatera summan
    createBoxesForAll(count); // Funktion från common.js
    updateSumOfAll(); // Uppdatera summan efter att boxarna skapats
});




