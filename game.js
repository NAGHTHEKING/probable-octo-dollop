class Game{
    constructor(){
    }
getstate(){
    database.ref("gamestate").on("value",function(data){
        gamestate=data.val()

    })

}
update(state){
database.ref("/").update({
    gamestate:state
})
}

async start() {
    if(gamestate===0)
    {
        player=new Player()
        var playercountref=await database.ref("playercount").once("value")
        
        if(playercountref.exists)
        {
            playercount=playercountref.val()
            player.getcount()
        }   
        
        form=new Form()
        form.display()
    }

    car1=createSprite(100,200)
    car1.addImage("car1",carimg1)
    car2=createSprite(300,200)
    car2.addImage("car2",carimg2)
    car3=createSprite(500,200)
    car3.addImage("car3",carimg3)
    car4=createSprite(700,200)
    car4.addImage("car4",carimg4)
    cars=[car1,car2,car3,car4]


}
    play(){
        form.hide()
        text("good luck",120,100)
        Player.getPlayerInfo()
        
        if(allplayers!==undefined)
        {
            var index=0
            var x = 200
            var y =0
           
            background("#c68767")
            image(trackimg,0,-displayHeight*4,displayWidth,displayHeight*5)
            for(var plr in allplayers){
               index+=1
               x+=200
               y=height-allplayers[plr].distance
               cars[index-1].x=x
               cars[index-1].y=y
               if(index===player.index){
               // cars[index-1].shapeColor="black"
               fill("black")
               ellipse(x,y,100,100)
                camera.position.x=width/2
                camera.position.y=cars[index-1].y

               }
            }
        }
           if(keyIsDown(UP_ARROW)&&player.index!==null)
           {
            player.distance+=50;
            player.update()

           }

           if(player.distance>3500){
              gamestate=2;
              alert("GAME OVER")  
              form.resetbutton.show()     
           }
           

        drawSprites()

    }


end(){
  
console.log("game over")

}


}





