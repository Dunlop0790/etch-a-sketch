let boxCount = document.querySelector(".box-number").addEventListener('click', () => {
    let userInput = prompt("How many boxes do you want? (Enter a number between 16 and 100)", "Enter a number");
    let numBoxes = parseInt(userInput);
    
    if (isNaN(numBoxes) || numBoxes < 16 || numBoxes > 100) {
      alert("Invalid input. Please enter a number between 16 and 100.");
      return;
    }
    
    createGrid(numBoxes);
  });
  
  const boxContainer = document.getElementById('container');

  let currentColor = 'black';
  
  function createGrid(numBoxes) {
    boxContainer.innerHTML = '';
    
    let boxesPerSide = Math.floor(Math.sqrt(numBoxes));
    let boxSize = Math.floor(512 / boxesPerSide);
    
    for (let i = 0; i < boxesPerSide * boxesPerSide; i++) {
      const boxDiv = document.createElement('div');
      boxDiv.classList.add('squares');
      
      boxDiv.style.width = `${boxSize}px`;
      boxDiv.style.height = `${boxSize}px`;
      
      boxDiv.addEventListener('mouseenter', () => {
        boxDiv.style.backgroundColor = getColor();
      });

      boxContainer.appendChild(boxDiv);
    }
  }

function getColor() {
  if (currentColor === 'random') {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  }
  return currentColor;
}

const blackColorButton = document.querySelector('.black-button');
blackColorButton.addEventListener('click', () => {
  currentColor = 'black';
});
document.body.appendChild(blackColorButton);

const randomColorButton = document.querySelector('.random-color-button');
randomColorButton.addEventListener('click', () => {
  currentColor = 'random';
});
document.body.appendChild(randomColorButton);

function resetGrid() {
  const squares = document.querySelectorAll('.squares');
  squares.forEach(square => {
    square.style.backgroundColor = '';
  });
}

const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', resetGrid);

createGrid(16 * 16);
  