class Food{
    constructor(){
        this.image = loadImage("sprites/Milk.png");

    }
    display(){

        
        

        var x = 100;
        var y = 295;
        for(var i = foodS;i>0;i = i - 1){

            if(i === 20){
                x = 100;
                y = 295;
            }else if(i === 15){
                x = 100;
                y = 395;
            }else if(i === 10){
                x = 100;
                y = 495;
            }else if(i === 5){
                x = 100;
                y = 595;
            }

            imageMode(CENTER);
            image(this.image,x,y,80,100);

            x = x + 80;
        }

        

        
    }
}