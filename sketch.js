var canvas, backgroundImage;

var gameState = 0;
var playerCount=0;
var allPlayers;
var distance = 0;
var database;
//var playerCount=0;
var form, player, game;

 var cars;
 var car1, car2, car3, Playercar;
var track,car1_img,car2_img,car3_img,car4_img;
function preload()
{
  //Loading all images
  track=loadImage("images/track.png");
  car1_img=loadImage("images/car1.png");
  car2_img=loadImage("images/car2.png");
  car3_img=loadImage("images/car3.png");
  car4_img=loadImage("images/car4.png");
  ground=loadImage("images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  //Creating the game
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  //Updating the gameState to 1 if all the players have entered
  if(playerCount === 1){
    game.update(1);
  }
  //Clears the screen when gameState=1
  if(gameState === 1){
    clear();
    game.play();
  }
  //Game ends when gameState=2
  if(gameState===2)
  {
game.end();


  }
 
}
