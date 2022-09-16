//Getting data from the UI
const box_game_input =document.querySelectorAll(".box_input");
const winner_decision=document.getElementsByClassName("winner");


//creating the game data (3x3 matrix board)
let grid = [];
let count = 0;
for (let i = 0; i < 3; i++) {
  grid[i] = [];

  for (let j = 0; j < 3; j++) {
    grid[i][j] = count;
    count++;
  }
}

// Adding listeners to the grid items
box_game_input.forEach((box_input, index) => {
  box_input.addEventListener("click", ()=>{
    set_coin_in_grid();});
  });

// Add images to player's input
function set_coin_in_grid(){
  for(let row = 0; row < 3; row++) {

    for(let col = 0; col <3; col++) {
      if(grid[row][col] == 1) {
        box_game_input[(row * 3) + col].classList.add("yellow_coin");
      } else if(grid[row][col] == -1) {
        box_game_input[(row * 3) + col].classList.add("red_coin");
      }
    }
  }
}






//Match winner
function match_winner(index){

  for(let i = 0; i < 3; i++) {
    let summing_rows = grid[i][0] + grid[i][1] + grid[i][2];
    let summing_columns = grid[0][i] + grid[1][i] + grid[2][i];
    if(summing_rows == 3 || summing_columns == 3) {
      // Winner is player 1
      game_ended(1);
      return
    } else if(summing_rows == -3 || summing_columns == -3) {
      // Winner is palyer 2
      game_ended(2);
      return
    }
  }

}





function game_ended(){

if (winner==1) {
  winner_decision.innerText = "The Winner is: Player 1";

}
else winner_decision.innerText = "The Winner is: Player 2";

}
