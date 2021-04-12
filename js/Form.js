class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton('Play');
        this.greet = createElement('h2');
        this.reset = createButton('RESET');
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greet.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(displayWidth/2,0);
        
        //var input = createInput("Name");
        this.input.position(displayWidth/2,160);

        //var button = createButton('Play');
        this.button.position(displayWidth/2,250);

        this.reset.position(displayWidth/2,400);

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount+=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);

            var name = this.input.value();

            //var greet = createElement('h3');
            this.greet.position(displayWidth/2,200);
            this.greet.html("Hello " + name + "!");
        })

        this.reset.mousePressed(() => {
            game.update(0);
            player.updateCount(0);
        })
    }
}