const wrapper = document.getElementById("wrapper-grid");
const changeGridBtn = document.getElementById("gridBtn");

changeGridBtn.addEventListener("click", () => {
	input = prompt("Enter your grid size:");
  
	while (input < 1 || input > 100) {
	  input = prompt("The grid must be between 1 and 100 squares wide");
  }
  createGrid(input);
});

let resetGrid = () => {
  while (wrapper.firstChild) {
    wrapper.removeChild(wrapper.firstChild);
  }
};

function selectColor () {
	let radioButtons = document.get(`input`);
	
	radioButtons.forEach( btn => {
		console.log(btn)
	})
}

// Makes cells change color when hovering
function makeSketch() {
  wrapper.childNodes.forEach( cell =>
    cell.addEventListener("mouseover", () => {
      cell.style.backgroundColor = "black";
    })
  );
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

    wrapper.appendChild(newDiv);
  }

  // After creating the grid, make it usable
  makeSketch();
}

createGrid(16); // Default state