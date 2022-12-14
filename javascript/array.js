
/*
 Tic Tac toe game;
 a game that allows txo players to play tic tac toe
 */
// Board is the array that save all the information about game
let board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
];
let player = "x";

// the main loop of the game
while(true){
    // stringified version of board
        let boardStr = board[0].join("  ") + "\n" 
        + board[1].join("  ") + "\n" 
        + board[2].join("  ");
// Gather information from the user
        let row = +prompt("Dear user, please provide the value for the row \n \n"  +boardStr);
        let col = +prompt("Dear user, please provide the value for the column \n \n" +boardStr);
// check to mke sure that moves were really legal
        if(board[row][col] !== "_") {
            alert("not legal moves,you lose");
            break;
        }
//place "x"  or  "o" onto the board
        board[row][col] = player;
//switch players
        if(player === "x") {
            player = "o";
        }else{
            player = "x";
        }
}


