// Array of fun facts about me
const funFacts = [
    "I have four dogs, and each of them is a different breed.",
    "I could probably survive eating Igado for the rest of my life.",
    "I have a unique perspective because I'm part of the neurodivergent community."
];

// Get the button and display paragraph elements
const funFactBtn = document.getElementById('funFactBtn');
const funFactDisplay = document.getElementById('funFactDisplay');

// Variable to track the current fun fact
let index = 0;

// Function to display a fun fact
function showFunFact() {

    // Display the fun fact based on the current index
    funFactDisplay.textContent = funFacts[index];

    // Move to the next fun fact
    index++;

    // Reset index to the beginning if all facts have been shown
    if (index >= funFacts.length) {
        index = 0;
    }
}

// Add click event listener to the button
funFactBtn.addEventListener('click', showFunFact);