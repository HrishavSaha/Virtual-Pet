var pet, dog, happyDog;
var pos, postemp;
var data;
var foodS, foodStock;
var lastFed, hour, meridian;

function preload(){
  dog = loadImage("sprites/Dog.png");
  happyDog = loadImage("sprites/happydog.png");

  getTime();
}

function setup() {
	createCanvas(800,500);
  data = firebase.database();

  pet = createSprite(550,250);
  pet.addImage(dog);
  pet.scale = 0.15;

  foodStock = data.ref('food');
  foodStock.on("value", readStock);
  foodStock.set(20);

  pos = data.ref('stance');
  pos.on("value", readStance);
  pos.set(0);
  
  foodFunc = new Food();
}


function draw() {  
  background(46, 139, 87);

  fill("white");
  //text("Press Up Arrow Key to give Dog milk", 450,20);
  text("Press Down Arrow Key to make him sit", 442,40);
  text("Last Fed: " + lastFed,485,60);

  foodFunc.display();
  
  if(foodS !== undefined && postemp !== undefined){
    
    text("Milk Bottles: " + foodS, 500, 80);

    if(foodS > 0){
      //if(keyWentDown(UP_ARROW)){
        //writeStock(foodS);
        //postemp = 1;
        //writeStance(postemp);
        //pet.addImage(happyDog);
      //}
    }

    if(keyWentDown(DOWN_ARROW)){
      postemp = 0;
      writeStance(postemp);
      //pet.addImage(dog);
    }
    
  }

  drawSprites();
}

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

async function getTime(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();
  console.log(responseJSON.datetime);

  var datetime = responseJSON.datetime;
  hour = datetime.slice(11,16);
}