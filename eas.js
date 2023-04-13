//  Creating elements
const container = document.createElement("div");

// Putting elements into DOM
container.classList.add("container");
document.querySelector("body").appendChild(container);
// Creating all the squares and appending them to container element
for (i = 0; i < 256; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  document.querySelector(".container").appendChild(square);
}
// Event of hovering
document.querySelectorAll(".square").forEach((square) => {
  square.addEventListener("mouseover", changeColor);
});

// color change function
function changeColor(e) {
  e.target.classList.add("hovered");
}

// Button to create board
const button = document.querySelector("button");

button.addEventListener("click", newBoard);

// New board Function
function newBoard() {
  let boardSize = prompt("How big of a board?(How many squares)");
  if (boardSize > 100) {
    boardSize = prompt("Please pick a number smaller than one hundred");
    parseFloat(boardSize);
  } else {
    parseFloat(boardSize);
  }
  const selectContainer = document.getElementsByClassName("container");
  while (selectContainer[0].firstChild) {
    selectContainer[0].removeChild(selectContainer[0].firstChild);
  }
  const boardSizeSquared = boardSize * boardSize;
  for (i = 0; i < boardSizeSquared; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    document.querySelector(".container").appendChild(square);
  }
  const boardSizeWidth = (1 / boardSize) * 100;
  document.querySelectorAll(".square").forEach((e) => {
    e.style.width = `${boardSizeWidth}%`;
    e.style.height = `${boardSizeWidth}%`;
    e.addEventListener("mouseover", changeColor);
  });
}
