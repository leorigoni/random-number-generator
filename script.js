function generateRandomNumber() {
    const minInput = document.getElementById('minValue');
    const maxInput = document.getElementById('maxValue');
    const resultDisplay = document.getElementById('result');
    const historyDisplay = document.getElementById('history');

    const minValue = parseInt(minInput.value);
    const maxValue = parseInt(maxInput.value);

    if (isNaN(minValue) || isNaN(maxValue) || minValue >= maxValue) {
        resultDisplay.textContent = 'Please enter valid minimum and maximum values.';
        return;
    }

    const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
    resultDisplay.textContent = `Generated Random Number: ${randomNumber}`;

    // Creare un nuovo elemento per il numero generato
    const newEntry = document.createElement('p');
    newEntry.textContent = randomNumber;

    // Aggiungere il numero all'inizio della lista
    historyDisplay.prepend(newEntry);
}

document.getElementById('randomNumberForm').addEventListener('submit', function(event) {
    event.preventDefault();
    generateRandomNumber();
});
