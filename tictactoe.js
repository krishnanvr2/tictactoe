var readline = require('readline-sync');

var gameBoard = [];
var winnerFound = false;

function createGameBoard()
{
	for(var i=0; i < 3; i++)
	{
		gameBoard[i] = [];
	}
}


// This needs to be called on every new game.
function initialiseGameBoard()
{

	for(var i=0; i < 3; i++)
	{
		for(var j=0; j < 3; j++)
		{
			gameBoard[i][j] = 0;
		}
	}
}

function getPosition()
{
	var rowPosition = '';
	var columnPosition = '';
	var position = {player1Row: 0, player1Column : 0, player2Row: 0, player2Column : 0}

	rowPosition = readline.question("Please enter the row to place the coin of Player1? Eg. 1, 2,3 : ");
	position.player1Row = parseInt(rowPosition,10);

	columnPosition = readline.question("Please enter the column to place the coin  of Player1? Eg. 1, 2,3 : ");
	position.player1Column = parseInt(columnPosition,10);

	console.log("position.player1Row: " + position.player1Row + " position.player1Column: "  + position.player1Column + "\n");

	rowPosition = readline.question("Please enter the row to place the coin  of Player2? Eg. 1, 2,3 : ");
	position.player2Row = parseInt(rowPosition,10);

	columnPosition = readline.question("Please enter the column to place the coin  of Player2? Eg. 1, 2,3 : ");
	position.player2Column = parseInt(columnPosition,10);

	console.log("position.player2Row: " + position.player2Row + " position.player2Column: "  + position.player2Column + "\n");

	// Need to check if the other coin is placed in the location

	return  position;
}

function checkForWinner(){
	var value = 0;
	var winner = { player: 0, isWon: false}
	
	// Checking Horizontally
	for(var i=0; i < 3; i++)
	{
	    value = gameBoard[i][0];
	    if((value == gameBoard[i][1]) && (value == gameBoard[i][2])){
		   winner.player = value;
		   winner.isWon = true;
		   return winner;
	    }
	}

	// Need to check vertically
	for( i=0; i < 3; i++)
	{
	    value = gameBoard[0][i];
	    if((value == gameBoard[1][i]) && (value == gameBoard[2][i])){
		   winner.player = value;
		   winner.isWon = true;
		   return winner;
	    }
	}
	return winner;
}

// Displays the winner
function displayResults(winner){
    var winnerName = '';
     if(winner.player == 1)
          winnerName = 'Player1';
     else if(winner.player == -1)
          winnerName = 'Player2';

     console.log( winnerName + ' has won the game');
}


createGameBoard();

initialiseGameBoard();

while(!winnerFound){
	var winner;
	var count = 0;

	for(; count <=2; count++){
		var position = getPosition();

		gameBoard[position.player1Row -1][position.player1Column-1] = 1;
		gameBoard[position.player2Row -1][position.player2Column-1] = -1;

		console.log("Game board coin positions : \n");
		for(var i=0; i < 3; i++)
		{
			for(var j=0; j < 3; j++){
				console.log(gameBoard[i][j]);
			}
		}

	}

	winner = checkForWinner();
	if(winner.isWon == true){
		displayResults(winner)
		winnerFound = true;
	}
}

