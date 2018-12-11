// document.addEventListener('click', function(e) {
//   console.log(e)
//   e = e || window.event;
//   var target = e.target || e.srcElement,
//       text = target.textContent || target.innerText;   
// });

var currPlay = 'X';
var gameOver = false;

let userClick = (e) => {
  // console.log(e.target.className);
  // console.log(e.target.innerText);
  if (e.target.innerText.toString().includes('X') || e.target.innerText.toString().includes('O')) {
    alert('You can\'t place there foo!');
  } else if (gameOver) {
    alert('Game\'s over foo!');
  } else {
    placePlay(e);
    // console.log('e in userClick', e)
    checkForWin();
  }
}

let placePlay = (e) => {
  // console.log('e in placeplay', e)
  //let place = e.target.className
  e.target.innerHTML = currPlay;
  if (currPlay === 'X') {
    currPlay = 'O';
  } else {
    currPlay = 'X';
  }
}

let checkForWin = () => {
  let board = [
    [document.getElementsByClassName("boxOne")[0].innerText,
    document.getElementsByClassName("boxTwo")[0].innerText, 
    document.getElementsByClassName("boxThree")[0].innerText],
    [document.getElementsByClassName("boxFour")[0].innerText,
    document.getElementsByClassName("boxFive")[0].innerText,
    document.getElementsByClassName("boxSix")[0].innerText],
    [document.getElementsByClassName("boxSeven")[0].innerText,
    document.getElementsByClassName("boxEight")[0].innerText,
    document.getElementsByClassName("boxNine")[0].innerText]
  ];
  // console.log(board)

  if (checkOne('X', board)) {
    gameOver = true;
    document.getElementById("status").innerHTML = "X wins! Refresh for another game.."; 
  } else if (  checkOne('O', board)) {
    gameOver = true;
    document.getElementById("status").innerHTML = "O wins! Refresh for another game.."; 
  }
}

let checkOne = (play, board) => {
  //check rows
  // console.log('first element', board[0][0].toString())
  let rowCheck = false;
  for (let i = 0; i < board.length; i++) {
    if (board[i][0].toString().includes(play) &&
    board[i][1].toString().includes(play) &&
    board[i][2].toString().includes(play)) {
      rowCheck = true;
    }
  }
  //check cols
  let colCheck = false;
  for (let j = 0; j < board.length; j++) {
    if (board[0][j].toString().includes(play) &&
    board[1][j].toString().includes(play) &&
    board[2][j].toString().includes(play)) {
      colCheck = true;
    }    
  }
  //check diags
  let diag1 = false;
  if (board[0][0].toString().includes(play) &&
  board[1][1].toString().includes(play) &&
  board[2][2].toString().includes(play)) {
    diag1 = true;
  }
  let diag2 = false;
  if (board[0][2].toString().includes(play) &&
  board[1][1].toString().includes(play) &&
  board[2][0].toString().includes(play)) {
    diag2 = true;
  }

  return rowCheck || colCheck || diag1 || diag2;
}