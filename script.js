let game_board = [["1", "2", "3"],
                  ["6", "5", "4"],
                  ["7", "8", "9"]];


//check if all cells are full
let checkDraw = 1;






const newPlayer = function(name, type){
    return ({name: name, type: type});
}


let player_1 = newPlayer("Kili", "X");
let player_2 = newPlayer("Ai", "O");


                
const getDomElementsAndVariables = () => {
    const cells = document.getElementsByClassName("cell");
    const columns = document.getElementsByClassName("column")
    const currPlayer = player_1;
    const win_screen = document.getElementsByClassName("win-screen")
    const settings_button = document.getElementById("settings");
    const dialog = document.getElementsByClassName("settings_dialog")[0];
    const clear = document.getElementById("clear");
    const player_1_input = document.getElementsByClassName("player-1-class")[0];
    const player_2_input = document.getElementsByClassName("player-2-class")[0];
    const accept_button = document.getElementsByClassName("save-form")[0];
    return ({player_1_input: player_1_input, player_2_input: player_2_input, accept_button: accept_button, clear: clear, cells: cells, currPlayer: currPlayer, player_1, player_2, columns: columns, win_screen: win_screen, settings_button: settings_button, dialog: dialog})
}

const getPlayerNames = () => {
    const domElements = getDomElementsAndVariables();
    const player_1_input = domElements.player_1_input;
    const player_2_input = domElements.player_2_input;
    const accept_button = domElements.accept_button;
    const dialog = domElements.dialog;
    
    accept_button.addEventListener("click", (e) => {
         player_1 = newPlayer(player_1_input.value, "X");
         player_2 = newPlayer(player_2_input.value, "O");
         clearGame();
         getDomElementsAndVariables().win_screen.innerHTML = "";
    })
    
    
}

const addCellEventListener = () => {
    const domElements = getDomElementsAndVariables();
    Array.from(domElements.cells).forEach((element) => {
            element.addEventListener("click", () => {
                if(element.innerHTML == ""){
                    element.innerHTML = domElements.currPlayer.type;
                    const gameboard_position = element.id.split("/");
                    game_board[gameboard_position[0]][gameboard_position[1]] = domElements.currPlayer.type;
                    console.log(domElements.currPlayer)
                    const res = checkWin(game_board, domElements.currPlayer);
                    checkDraw++;
                    if(res != null){
                        setWinScreen(domElements.win_screen[0], domElements.currPlayer)
                    }
                    domElements.currPlayer = domElements.currPlayer == player_1 ? player_2 : player_1;

                }
            })
    }) 
 
}

const settingsDialog = () => {
    const domElements = getDomElementsAndVariables();
    domElements.settings_button.addEventListener("click", () => {
        domElements.dialog[0].showModal()
    })
    getPlayerNames();
}

const init_game = () => {
    settingsDialog();
    addCellEventListener();
    getDomElementsAndVariables().clear.addEventListener("click", () => {
        clearGame();
    })
    getDomElementsAndVariables().win_screen.innerHTML = ""
}
const setWinScreen = (win_screen, player) => {
    win_screen.innerHTML = `${player.name} won!`;
}

const checkWin = (game_board, currPlayer) => {
    let isWin = false;

    //check rows
    for(let i = 0; i < 3; i++){
        const firstCell = game_board[i][0];
        const secondCell = game_board[i][1];
        const thirdCell = game_board[i][2];
       
        if(firstCell == secondCell && secondCell == thirdCell){
            isWin = true;
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
        return ({winPlayer: currPlayer.name, draw: false})
    }
    else if(checkDraw == 9){
        return ({winPlayer: "", draw: true})
    }


}

const clearGame = () => {
    game_board = [["1", "2", "3"],
                  ["6", "5", "4"],
                  ["7", "8", "9"]];
    const dom_elements = getDomElementsAndVariables();
    Array.from(dom_elements.cells).forEach((cell) => {
        cell.innerHTML = "";
    })
    getDomElementsAndVariables().win_screen.innerHTML = ""
}




init_game();
