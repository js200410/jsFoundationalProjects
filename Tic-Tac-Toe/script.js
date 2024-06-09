let board = [
["","",""],
["","",""],
["","",""],
]
let currentPlayer ="X"
let Xcount = 0
let Ocount=0
let xScore = document.querySelector(".Xscore")
let oScore = document.querySelector(".Oscore")
let cell = document.querySelectorAll("button")
cell.forEach(element => {
    element.addEventListener("click",handleMove)
});
function handleMove(event){
    let cell = event.target
    let[row,col] = cell.id.split("-").map(Number)
    if(board[row][col]===""){
        board[row][col] = currentPlayer
        cell.textContent = currentPlayer
       if(checkWinner(currentPlayer)){
        document.getElementById("message").innerHTML =`player ${currentPlayer} is  the WINNER <img src="https://purepng.com/public/uploads/medium/purepng.com-gold-cup-trophygolden-cupgoldtrophymedal-1421526534849oyutg.png"></img>`
         if (currentPlayer =="X"){
             Xcount+=1
             xScore.textContent = Xcount
         }
         else if (currentPlayer == "O"){
             Ocount+=1
            oScore.innerHTML = Ocount
         }
         reset()
            }
        else if(draw()){
            document.getElementById("message").textContent ='OOPS !! we got no winners, ITS A DRAW !!'
            reset()
        }
    else{
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    }
}



}
function checkWinner(player){
    for(let row=0 ; row<3;row++){
       if( board[row].every(cell=>cell===player))return true
    }
    for (let col =  0 ; col<3 ; col++){
        if(board.every(row=>row[col]===player)) return true
    }
    if  (board[0][0]==player && board[1][1]==player && board[2][2] == player ) return true
    if(board[0][2] ==player && board[1][1] == player && board[2][0]== player ) return true 
    return false
}
function reset(){
    board = [["","",""],["","",""],["","",""]]
    cell.forEach(element => element.textContent = "")
    currentPlayer = "X"


}
function draw(){
   return board.flat().every(cell=>cell != "")
}