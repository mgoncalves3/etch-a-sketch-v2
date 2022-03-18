let input = undefined;
const wrapper = document.getElementById("wrapper-grid");
const changeGridBtn = document.getElementById("gridBtn");
changeGridBtn.addEventListener("click", () => {
	input = prompt("Enter your grid size:");
	console.log(input)
});

function createGrid(val) {
	let cellSize = (wrapper.scrollHeight / val) - 4;
	console.log(cellSize)
	for (let i = 0, totalCells = val * val; i < totalCells; i++) {

		let newDiv = document.createElement("div");
		newDiv.classList.add("cell");

		newDiv.style.height = `${cellSize}px`;
		newDiv.style.width = `${cellSize}px`;

		wrapper.appendChild(newDiv);
	}
}

createGrid(input);