const gameBoard = (function(){
  const boardArray = new Array(9).fill('')
  console.log(boardArray)
  // Link our board element to a variable
  const board = document.getElementById('game-board')
  
  const createBoard = (boardArray) => {
    // Create an element for space in our board
    for (const element of boardArray) {
      console.log(element)
      const space = document.createElement('div');
      // Give each space a class for styling
      space.classList.add('space')
      const spaceContent = document.createTextNode(element)
      space.appendChild(spaceContent)
      // Append the space we created to the board
      board.append(space)
    }
  }

  const createPlayer = function(name, marker) {
    return {
      name: name,
      marker: marker,
      moves: [],
      isWinner: false
    }
  }
  
  
  return {
    createBoard,
    createPlayer,
    boardArray: boardArray
  }

})();


// Create a module to control the flow of the game
const displayController = (function(){
  const form = document.getElementById('form');
  const submit = document.getElementById('submit')
  const turnIndicator = document.getElementById('turn-indicator')
  

  let player1 = gameBoard.createPlayer('', 'X', []);
  let player2 = gameBoard.createPlayer('', 'O', [])

  submit.addEventListener('click', function(e) {
    e.preventDefault();
    // Get player one and two's names using a form
    player1.name = document.getElementById('player-1').value;
    player2.name = document.getElementById('player-2').value;
    // Hide the form after they hit the submit button and start the game!
    form.classList.add('hidden');
  })
  
  do {
    turnIndicator.textContent(`Make your move ${player1.name}`)
    document.querySelectorAll('.space').forEach(space => {
      space.addEventListener('click', function() {
        space.textContent = player1.marker
      })
    })


  } while (player1.isWinner === false && player2.isWinner === false);

  

})()


gameBoard.createBoard(gameBoard.boardArray)
displayController();



