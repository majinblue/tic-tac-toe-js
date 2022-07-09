const gameBoard = (function(){
  const boardArray = ['x','o','x','o','x','o','x','o','x']
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

  const Player = (playerName) => {
    const playerName = playerName;
  } 

  return {
    createBoard,
    boardArray: boardArray
  }

})();


gameBoard.createBoard(gameBoard.boardArray)

