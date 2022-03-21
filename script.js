// Selectors
const wrapper = document.getElementById("wrapper-grid");
const changeGridBtn = document.getElementById("gridBtn");
const clearBtn = document.getElementById("clearBtn");
const radioButtons = document.querySelectorAll("input");

// Helper function definitions

let resetGrid = () => {
  // Keep looking for child nodes (cells) and remove them one at a time
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }
};

// Select every cell in the grid and reset it
let clearGrid = () => {
  let cells = document.getElementsByClassName("cell");
  for (let cell of cells) {
    cell.style.backgroundColor = "white";
  }
};

// Get a random number between 0-255 to use as RGB value
function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

/* Black color is checked by default so we only need to check
if the 'random' button is on */
function selectColor() {
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked === true) {
      if (radioButtons[i].value === "random") {
        return `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
      }
      return "black";
    }
  }
}

function createGrid(val) {
  // Start by reseting the current grid
  resetGrid();

  // Calculate the new cell size
  let cellSize = wrapper.scrollHeight / val;

  for (let i = 0, totalCells = val * val; i < totalCells; i++) {
    // Create a new div and set it's attributes
    let newDiv = document.createElement("div");
    newDiv.classList.add("cell");

    newDiv.style.height = `${cellSize}px`;
    newDiv.style.width = `${cellSize}px`;

    // Add the child div to the grid HTML
    wrapper.appendChild(newDiv);
  }

  // After creating the grid, make it usable
  makeSketch();
}

// Change Grid function
let changeGridSize = () => {
  // Ask for a number and check if it's between acceptable parameters
  let input = prompt("Enter your grid size:");
  while (input < 1 || input > 100) {
    input = prompt("The grid must be between 1 and 100 squares wide");
  }
  // Looks for a non numeric character
  let regex = /\D|\W/;
  
  // If the test returns false, i.e., you entered an integer
  while (regex.test(input)) {
    alert("You entered a non numeric character.");
    return;
  }
  
  createGrid(input);
};

// Makes cells change color when hovering
function makeSketch() {
  wrapper.childNodes.forEach((cell) =>
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = `${selectColor()}`;
    })
  );
}

// Button Mappings
changeGridBtn.addEventListener("click", changeGridSize);
clearBtn.addEventListener("click", clearGrid);

createGrid(16); // Default state, gets executed when site is loaded
