//Database Variables
var data;
var pos, postemp;
var foodS, foodStock;
var gameState, gameStateTemp;

//Sprite Variables
var pet, dog, happyDog;

//Time API Variables
var lastFed, hour, meridian;

//Background Variables
var bedroom, garden, livingroom, washroom;
var bedroomImage, gardenImage, livingroomImage, washroomImage;

//Flag Variables
var bg, game, game2;

//Gamestates :
//Feed The Dog - 0
//Happy Dog - 1
//Idle - 2
//Bath - 3
//Sleepy - 4
//Let's Play - 5
//Play in Park - 6

function preload(){
  //Image Load Initialisation
  dog = loadImage("sprites/Dog.png");
  happyDog = loadImage("sprites/happydog.png");

  bedroomImage = loadImage("images/Bed Room.png");
  gardenImage = loadImage("images/Garden.png");
  livingroomImage = loadImage("images/Living Room.png");
  washroomImage = loadImage("images/washroom.png");

  //Calling Time API
  getTime();
}

function setup() {
	createCanvas(displayWidth,displayHeight);

  //Assigning Database Variables
  data = firebase.database();

  foodStock = data.ref('food');
  foodStock.on("value", readStock);
  foodStock.set(20);

  pos = data.ref('stance');
  pos.on("value", readStance);
  pos.set(0);

  gameState = data.ref('GameState');
  gameState.on("value", readState);
  gameState.set(0);
  
  //Assigning Sprite Variables
  pet = createSprite(displayWidth/1.4,450);
  pet.addImage(dog);
  pet.scale = 0.8;

  //Class Variables
  stateFunc = new GameState();
  foodFunc = new Food();
}


function draw() {  
  //Dynamic Background
  background(46, 139, 87);

  fill("white");
  //text("Press Up Arrow Key to give Dog milk", 450,20);
  textAlign(CENTER);
  text("Press Down Arrow Key to make him sit", displayWidth/2.12,40);
  text("Last Fed: " + lastFed,displayWidth/2.12 ,60);

  stateFunc.display();
  foodFunc.display();
  
  if(foodS !== undefined && postemp !== undefined){
    
    text("Milk Bottles: " + foodS, displayWidth/2.12, 80);

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