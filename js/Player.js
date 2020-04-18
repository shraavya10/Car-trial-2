class Player {
  constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    this.rank=null;
    this.positionX=900;
    this.positionY=200;
  }
//to get the information on the playerCount
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

//update the count
  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
//To update the name and distance of the player
  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance,
      positionX:this.positionX,
      positionY:this.positionY

    });
  }

  //to get all the players' information using a static function
  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayers = data.val();
    })
  }
  getcaratEnd(){
 // var caratEndref=database.ref('caratEnd');
  database.ref('caratEnd').on("value",(data)=>{
this.rank=data.val();

  })

}
 static update(data){
    database.ref('/').update({
    caratEnd:data

    })


    


  }
}
