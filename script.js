let game_board = [["1", "2", "3"],
                  ["6", "5", "4"],
                  ["7", "8", "9"]];


//check if all cells are full
let checkDraw = 1;




const newPlayer = function(name, type){
    return ({name: name, type: type});
}

                
const getDomElementsAndVariables = () => {
    const cells = document.getElementsByClassName("cell");
    const columns = document.getElementsByClassName("column")
    const player_1 = newPlayer("Kili", "X");
    const player_2 = newPlayer("Ai", "O");
    const currPlayer = player_1;
    return ({cells: cells, currPlayer: currPlayer, player_1, player_2, columns: columns})
}

const addCellEventListener = () => {
    const domElements = getDomElementsAndVariables();
    Array.from(domElements.cells).forEach((element) => {
            element.addEventListener("click", () => {
                if(element.innerHTML == ""){
                    element.innerHTML = domElements.currPlayer.type;
                    const gameboard_position = element.id.split("/");
                    game_board[gameboard_position[0]][gameboard_position[1]] = domElements.currPlayer.type;
                    domElements.currPlayer = domElements.currPlayer == domElements.player_1 ? domElements.player_2 : domElements.player_1;
                    checkWin(game_board)
                    checkDraw++;
                }
            })
    }) 
 
}


const init_game = () => {
    addCellEventListener();
}



const checkWin = (game_board) => {
    let isWin = false;

    //check rows
    for(let i = 0; i < 3; i++){
        const firstCell = game_board[i][0];
        const secondCell = game_board[i][1];
        const thirdCell = game_board[i][2];
        console.log(firstCell)
        console.log(secondCell)
        if(firstCell == secondCell && secondCell == thirdCell){
            console.log("hii")
        }
        else {
            isWin = false;
        }   
        
        
    
    }

    //check columns       
        if(game_board[0][0] === game_board[1][0] &&  game_board[1][0] === game_board[2][0] ){
            
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
    else if(checkDraw == 9){
        console.log("Draw")
    }


}


init_game();
