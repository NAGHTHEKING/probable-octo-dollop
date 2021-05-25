class Player{
    constructor(){
        this.index=null
        this.distance=0
        this.name=null
    }
    getcount(){
        database.ref("playercount").on("value",function(data){
            playercount=data.val()
    
        })
    
    }
    updatecount(count){
    database.ref("/").update({
        playercount:count
    })
    }
    update(  ){
        var playerindex="players/player"+this.index
    
        database.ref(playerindex).set({
            name:this.name,
            distance:this.distance

        })
    }

    static getPlayerInfo()
    {
     database.ref("players").on("value",(data)=>{
         allplayers=data.val()
     })
    }
}
 





































