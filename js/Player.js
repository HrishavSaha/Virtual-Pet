class Player{
    constructor(){
        this.index = null;
        this.distance = 0;
        this.name = null;
    }
    getCount(){
        var playerCountRef = data.ref('PlayerCount');
        playerCountRef.on("value",(data) => {
            playerCount = data.val();
        })
        //playerCount.set(0);
    }
    updateCount(count){
        data.ref('/').update({
            PlayerCount:count
        });
    }
    update(){
        var playerIndex = "Player/player" + this.index;
        data.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        })
    }
    static getPlayerInfo(){
        var playerInfoRef = data.ref('Player');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}