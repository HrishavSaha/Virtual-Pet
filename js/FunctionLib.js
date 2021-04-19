function readStock(data){
    foodS = data.val();
  }
  
  function writeStock(x){
  
    if(x<=0){
      x=0
    }else{
      x = x - 1;
    }
    data.ref('/').update({
      food:x
    })
  }
  
  function getStock(x){
  
    if(x>=20){
      x=20
    }else{
      x = x + 1;
    }
    data.ref('/').update({
      food:x
    })
  }
  
  function readStance(data){
    postemp = data.val();
  }
  
  function writeStance(y){
    data.ref('/').update({
      stance:y
    })
    if(y === 0){
      pet.addImage(dog);
    }else if(y === 1){
      pet.addImage(happyDog);
    }
  }
  
  function readState(data){
    gameStateTemp = data.val();
  }
  
  function writeState(x){
    data.ref('/').update({
      GameState:x
    })
  }
  
  async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    console.log(responseJSON.datetime);
  
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,16);
  }