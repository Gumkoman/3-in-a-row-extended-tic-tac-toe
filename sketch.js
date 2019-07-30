let board = [
  ['', '', '','',''],
  ['', '', '','',''],
  ['', '', '','',''],
  ['', '', '','',''],
  ['', '', '','',''],
];

let aviable = [
  ['1', '1', '1','1','1'],
  ['1', '1', '1','1','1'],
  ['1', '1', '1','1','1'],
  ['1', '1', '1','1','1'],
  ['1', '1', '1','1','1'],
];


let players = ['X', 'O'];

let player = "X";

let currentPlayer = "O";

let winner ="";

function setup() {
  createCanvas(500 , 500);
  line(width/5, 0, width/5, height);
  line(width*2/5, 0, width*2/5, height);
  line(width*3/5, 0, width*3/5, height);
  line(width*4/5, 0, width*4/5, height);
  line(0,height/5,width, height/5);
  line(0,height*2/5, width,height*2/5);
  line(0,height*3/5, width,height*3/5);
  line(0,height*4/5, width,height*4/5);
  strokeWeight(4);
}

function draw() {

  drawgame();
  checkWinner();
  textSize(32);
  if(winner!=""){
    text("And the winner is: "+winner+" congratz!",10,200);
    noLoop();
  }
}

function checkWinner(){
//horizontal
  for(let i=0;i<5;i++){
    for(let j=0;j<3;j++){
      if(equals3(board[i][j],board[i][j+1],board[i][j+2])){
        console.log("winner"+board[i][j]);
        winner=board[i][j];
      }
    }
  }
// diagonal left right
  for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
      if(equals3(board[i][j],board[i+1][j+1],board[i+2][j+2])){
        console.log("wygrankoo"+board[i][j]);
        winner=board[i][j];
      }
    }
  }

// diagonal right left
  for(let i=0;i<3;i++){
    for(let j=4;j>1;j--){
      if(equals3(board[i][j],board[i+1][j-1],board[i+2][j-2])){
        console.log("wygrankoo"+board[i][j]);
        winner=board[i][j];
      }
    }
  }
//vertical
  for(let i=0;i<3;i++){
    for(let j=0;j<5;j++){
      if(equals3(board[i][j],board[i+1][j],board[i+2][j])){
        console.log("winner"+board[i][j]);
        winner=board[i][j];
      }
    }
  }
}


function equals3(a, b, c) {
  return (a == b && b == c && a != '');
}

function mousePressed() {
   let mx = mouseX;
   //console.log("clicked");

   if((mx>0)&&(mx<100)){
    pushObject(0);
   }
   if((mx>100)&&(mx<200)){
    pushObject(1);
   }
   if((mx>200)&&(mx<300)){
    pushObject(2);
   }
   if((mx>300)&&(mx<400)){
    pushObject(3);
   }
   if((mx>400)&&(mx<500)){
    pushObject(4);
   }



 }

function pushObject(parameter){
  for(let jj=4;jj>-1;jj--){
    //console.log(jj);
    if(aviable[jj][parameter]==1){
      aviable[jj][parameter]=0;
      board[jj][parameter]=currentPlayer;
      swapPlayer();
      break;
    }
  }
}

function swapPlayer(){

  if(currentPlayer=="X"){
    currentPlayer="O";
  }else{
    currentPlayer="X";
  }
}

function drawgame(){
  for (let j = 0; j < 5; j++) {
    for (let i = 0; i < 5; i++) {
      player=board[j][i];
      //console.log(player);
      if(player==players[0]){
        line(i*100,j*100,i*100+100,j*100+100);
        line(i*100,j*100+100,i*100+100,j*100);
      }
      if (player==players[1]){
        ellipse(i*100+50,j*100+50,100);
      }
    }
  }

}
