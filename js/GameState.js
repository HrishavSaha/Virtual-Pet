class GameState{
    constructor(){
        this.FTD = createButton('Feed the Dog');
        this.HD = createButton("Add Milk");
        this.HD.position(displayWidth/1.35, 150);
        this.HD.hide();
        this.BM = createButton('Bathe Me');
        this.IS = createButton('I am Sleepy');
        this.LP = createButton("Let's Play");
        this.LPIP = createButton("Let's Play In Park");
        //game = 0;
        //game2 = 0;
    }
    display(){
        console.log(game);

        if(gameStateTemp === 0){
            this.FTD.position(displayWidth/1.5,150);
            this.FTD.mousePressed(() => {
                writeStock(foodS);
                lastFed = hour;
                postemp = 1;
                writeStance(postemp);
                writeState(2);
            })
        }else if(gameStateTemp === 1){
            getStock(foodS);
            writeState(2);
        }else if(gameStateTemp === 2){
            this.BM.position(450, 100);
            this.BM.mousePressed(() => {
                writeState(3);
            })

            this.IS.position(450, 125);
            this.IS.mousePressed(() => {
                writeState(4);
            })

            this.LP.position(450, 150);
            this.LP.mousePressed(() => {
                writeState(5);
            })
            
            this.LPIP.position(450, 175);
            this.LPIP.mousePressed(() => {
                writeState(6);
            })
        }else if(gameStateTemp === 3){
            pet.addImage(dog);
            imageMode(CENTER);
            washroom = image(washroomImage, displayWidth/2, displayHeight/2);
            this.HD.show();
            this.HD.mousePressed(() => {
                writeState(1);
                this.HD.hide();
            })
        }else if(gameStateTemp === 4){
            pet.addImage(dog);
            imageMode(CENTER);
            bedroom = image(bedroomImage, displayWidth/2, displayHeight/2);
            this.HD.show();
            this.HD.mousePressed(() => {
                writeState(1);
                this.HD.hide();
            })
        }else if(gameStateTemp === 5){
            pet.addImage(dog);
            imageMode(CENTER);
            livingroom = image(livingroomImage, displayWidth/2, displayHeight/2);
            this.HD.show();
            this.HD.mousePressed(() => {
                writeState(1);
                this.HD.hide();
            })
        }else if(gameStateTemp === 6){
            pet.addImage(dog);
            imageMode(CENTER);
            garden = image(gardenImage, displayWidth/2, displayHeight/2);
            this.HD.show();
            this.HD.mousePressed(() => {
                writeState(1);
                this.HD.hide();
            })
        }
    }
    
}