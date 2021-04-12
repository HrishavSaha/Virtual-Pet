class Game{
    constructor(){}
    getState(){
        var gameRef = data.ref('GameState');
        gameRef.on("value", function(data){
            gameState = data.val();
        });
    }
    update(state){
        data.ref('/').update({
            GameState : state
        });
    }
    async start(){
        if(gameState === 0){
            form = new Form();
            player = new Player();

            var playerCountRef = await data.ref('PlayerCount').once("value");

            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }

            form.display();
        }
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);

        carAr = [car1,car2,car3,car4];
    }
    play(){
        form.hide();
        textSize(20);
        text("Game Started!", width/2, 200);
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var index = 0;
            var xVal = 0;
            var yVal = 0;
            //var display_position = 230;
            for(var plr in allPlayers){
                //if(plr === "player" + player.index){
                    //fill("red");
                //}else{
                    //fill("black");
                //}
                xVal += 200;
                yVal = displayHeight - allPlayers[plr].distance;
                carAr[index].x = xVal;
                carAr[index].y = yVal;
                if(index === player.index){
                    //carAr[index].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = carAr[index-1].y;
                }else{
                    //carAr[index].shapeColor = "white";
                }
                //display_position += 20;
                //textSize(15);
                //text(allPlayers[plr].name + ":" + allPlayers[plr].distance, 320, display_position);
                index += 1;
                //console.log(allPlayers[plr]);
            }
        }
        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 50;
            player.update();
        }
    }
}