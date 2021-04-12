class Food{
    constructor(){
        this.image = loadImage("js/Milk.png");
        this.feed = createButton('Feed the Dog');
        this.milk = createButton('Add Milk');

    }
    display(){

        this.feed.position(800,150);
        this.milk.position(900,150);

        var x = 100;
        var y = 225;
        for(var i = foodS;i>0;i = i - 1){

            if(i === 20){
                x = 100;
                y = 225;
            }else if(i === 10){
                x = 100;
                y = 275;
            }

            imageMode(CENTER);
            image(this.image,x,y,40,50);

            x = x + 40;
        }

        this.feed.mousePressed(() => {
            writeStock(foodS);
            lastFed = hour;
            postemp = 1;
            writeStance(postemp);
        })

        this.milk.mousePressed(() => {
            getStock(foodS);
        })
    }
}