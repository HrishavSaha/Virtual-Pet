var pet, dog, happyDog;
var data;
var foodS, foodStock;

function preload(){
  dog = loadImage("Dog.png");
  happyDog = loadImage("happydog.png")
}

function setup() {
	createCanvas(500,500);
  data = firebase.database();

  pet = createSprite(250,250);
  pet.addImage(dog);
  pet.scale = 0.15;

  foodStock = data.ref('food');
  foodStock.on("value", readStock);
  foodStock.set(20)
  
}


function draw() {  
  background(46, 139, 87);

  fill("white");
  text("Press Up Arrow Key to give Dog milk", 150,20);
  text("Press Down Arrow Key to make him sit", 142,40);

  if(foodS !== undefined){
    
    text("Milk Bottles: " + foodS, 200, 80);

    if(foodS > 0){
      if(keyWentDown(UP_ARROW)){
        writeStock(foodS);
        pet.addImage(happyDog);
      }
    }

    if(keyWentDown(DOWN_ARROW)){
      pet.addImage(dog);
    }
    
  }

  drawSprites();
}

function readStock(dat){
  foodS = dat.val();
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
