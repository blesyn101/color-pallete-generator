const colorPicker = document.getElementById("colorPicker");
const colorDisplay = document.getElementById("colorDisplay");
const saveColorBtn = document.getElementById("saveColorBtn");
const generateRandomBtn = document.getElementById("generateRandomBtn");
const savedColorsContainer = document.getElementById("savedColors");

//store saved color
var savedColors = [];

// Function to update display color
function updateColor() {
    const chosenColor = colorPicker.value;
    colorDisplay.textContent = chosenColor;
    colorDisplay.style.backgroundColor = chosenColor;   
}

// Function to save the selected color
function saveColor() {
    const chosenColor = colorPicker.value;
    savedColors.push(chosenColor);
    displaySavedColors();
}

// Function to display saved colors
function displaySavedColors() {
    savedColorsContainer.innerHTML = ''; // Clear previous colors
    savedColors.forEach(color => {
        const colorBox = document.createElement("div");
        colorBox.style.backgroundColor = color;
        savedColorsContainer.appendChild(colorBox);
    });
}

// Function to generate a random hex color
function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

// Function to generate random color scheme
function generateRandomColors() {
    savedColors = []; // Reset saved colors
    for (let i = 0; i < 5; i++) {  // Generate 5 random colors
        savedColors.push(generateRandomColor());
    }
    displaySavedColors();
}

colorPicker.addEventListener("input", updateColor);
saveColorBtn.addEventListener("click", saveColor);
generateRandomBtn.addEventListener("click", generateRandomColors);