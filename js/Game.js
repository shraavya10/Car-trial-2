class Game {
  constructor(){

  }
//To get the information about the gameState
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
     
  }

  //To update the state
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

 
  
//Start the game by adding form and creating the players
  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
   
    Playercar = createSprite(900,200);
    Playercar.addImage("car4",car4_img);
    cars =[Playercar];
   // console.log(cars[0].x);

  }

  play(){
    form.hide();
  
    Player.getPlayerInfo();
    player.getcaratEnd();
    

        
      /*var car2x=random(300,1200);
      var car2y=random(500,1000);
     // car2.y=car2.y+2;
      car2 = createSprite(car2x,car2x);
      car2.addImage("car2",car2_img);
      var car3x=random(300,1200);
      var car3y=random(500,1000);
    //  car3.y=car3.y+2;
      car3 = createSprite(car3x,car3y);
      car3.addImage("car3",car3_img);*/
      if(player.distance % 2000==0){
        //console.log("hello!");
        //var car1x=Playercar.x;
        var car1x=random(400,800);
        //console.log(Playercar.x);
        var car1y=-2500;
    
        //var car1y=random(500,1000);
           car1 = createSprite(car1x,car1y);
          // var rand = randomNumber(1,3);
          car1.addImage("car",car1_img);
      }
     
    
    if(allPlayers !== undefined){
      background("#c68767");
      image(track,0,-displayHeight*4,displayWidth,displayHeight*5);
     
      //var display_position = 100;
     
      //index of the array
     var index = 0;

      //x and y position of the car
      var x ;
      var y;
  
      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;
       car1.velocityY=2;
       //car2.velocityY=2;
       //car.velocityY=2;
        //position the cars a little away from each other in x direction
        x = 600;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
       console.log(allPlayers[plr].distance);
     //  console.log(Playercar.y);
         cars[index-1].x = x;
        cars[index-1].y = y;
        
        if (index === player.index){
          //fill("yellow");
         // ellipse(x,y,60,60);
          //cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
      }
      if(keyIsDown(LEFT_ARROW) /*&& player.index !== null*/){
       // Playercar.x=allPlayers[plr].x-5;
        //player.positionX=Playercarx;
         player.positionX=player.positionX-5;
         Playercar.x=player.positionX;
        player.update();
        //console.log("left arrow"+Playercar.x);
      }
      if(keyIsDown(RIGHT_ARROW) /*&& player.index !== null*/){
       // Playercar.x=allPlayers[plr].x+5;
        //player.positionX=Playercarx;
      player.positionX=player.positionX+5
      Playercar.x=player.positionX;
        player.update();
       // console.log("right arrow"+Playercar.x);
        
      }
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }

    }

    //Move the car to increase the distance when up arrow key is pressed
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
   
   
    //gameState=2 when the cars cross the finish line
   if(player.distance>3800)
   {
    car1.velocityY=0;
    gameState=2;
    text("Congrulations on your safe journey",-3724,250);
    player.rank+=1;
    console.log(player.rank);
    Player.update(player.rank);
   }

    drawSprites();
  }
  //end the game and update the gameState
 end()
 {
console.log("Game Ended");
//console.log(player.rank);
game.update(2);



 } 
}
