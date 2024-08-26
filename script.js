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
        boxDiv.style.backgroundColor = 'black';
      });
      
      boxContainer.appendChild(boxDiv);
    }
  }
  
  createGrid(16 * 16);
  