let game_board = [["x", "x", "o"],
                  ["o", "x", "x"],
                  ["x", "x", "x"]];

                


const checkWin = (game_board) => {
    

    //check rows
    for(let i = 0; i < 3; i++){
        const firstCell = game_board[i][0];
        const secondCell = game_board[i][1];
        const thirdCell = game_board[i][2];
        if(firstCell === secondCell && secondCell === thirdCell){
            console.log("win")
        }
        else {
           // console.log("draw")
        }
    }

    //check columns
    console.log(game_board[0][0]);
    console.log(game_board[1][0]);
    console.log(game_board[2][0]);


    if(game_board[0][0] == game_board[1][0] &&  game_board[1][0] === game_board[2][0]){
        console.log("winnn col 1!!")
    }
    else if(game_board[0][1] == game_board[1][1] &&  game_board[1][1] === game_board[2][1]){
        console.log("winnn col 2!!")
    }
    else if(game_board[0][2] == game_board[1][2] &&  game_board[1][2] === game_board[2][2]){
        console.log("winnn col 3!!")
    }


    //diagonal 

    
}


checkWin(game_board)

