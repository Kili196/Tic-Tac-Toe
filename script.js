let game_board = [["x", "x", "o"],
                  ["o", "o", "x"],
                  ["x", "o", "x"]];

                


const checkWin = (game_board) => {
    

    //check rows
    for(let i = 0; i < game_board.length; i++){
        const firstCell = game_board[i][0];
        const secondCell = game_board[i][1];
        const thirdCell = game_board[i][2];
        if(firstCell === secondCell && secondCell === thirdCell){
            console.log("win")
        }
        else {
            console.log("draw")
        }
    }
}


checkWin(game_board)

