let game_board = [["o", "x", "o"],
                  ["o", "x", "o"],
                  ["x", "o", "x"]];

                
const getDomElements = () => {
    const cells = document.getElementsByClassName("cell");
    return ({cells: cells})
}

const checkWin = (game_board) => {
    getDomElements();
    
    let isWin = false;

    //check rows
    for(let i = 0; i < 3; i++){
        const firstCell = game_board[i][0];
        const secondCell = game_board[i][1];
        const thirdCell = game_board[i][2];
        if(firstCell == secondCell && secondCell == thirdCell){
            isWin = true;
        }
    
    }

    //check columns
    console.log(game_board[0][0]);
    console.log(game_board[1][0]);
    console.log(game_board[2][0]);


    if(game_board[0][0] == game_board[1][0] &&  game_board[1][0] === game_board[2][0]){
        isWin = true;
    }
    else if(game_board[0][1] == game_board[1][1] &&  game_board[1][1] === game_board[2][1]){
        isWin = true;
    }
    else if(game_board[0][2] == game_board[1][2] &&  game_board[1][2] === game_board[2][2]){
        isWin = true;
    }


    //diagonal from left to right

    if(game_board[0][0] == game_board[1][1] && game_board[1][1] == game_board[2][2]){
        isWin = true;
    }

    //diagonal from right to left
    else if (game_board[0][2] == game_board[1][1] && game_board[1][1] == game_board[2][0]){
        isWin = true;
    }

    if(isWin == true){
        console.log("There is a winner")
    }
    else {
        console.log("Draw!!")
    }


}


checkWin(game_board)

