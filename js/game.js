class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player_img);
    
    player2 = createSprite(800,500);
    player2.addImage("player2", player_img);
    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 800);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                         fill("black");
                         textSize(25);
                         text(allPlayers[plr].name ,x-25,y+25);

                         
                     }
                    
                     
                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                }
            
                 if (frameCount % 300 === 0) {
                     fruits = createSprite(random(100, 1000), 0, 100, 100);
                     fruits.velocityY = 2;
                     fruits.addImage("fruit1",fruit1_img);
                     fruits2= createSprite(random(100,1000),0,100,100)
                     fruits2.velocityY= 2
                     fruits2.addImage("fruit2", fruit2_img);
                        
                      /*   case 2: fruits.addImage("fruit1", fruit2_img);
                         break;
                         case 3: fruits.addImage("fruit1", fruit3_img);
                         break;
                         case 4: fruits.addImage("fruit1", fruit4_img);
                         break;
                         case 5: fruits.addImage("fruit1", fruit5_img);
                         break;
                     }*/
                     fruitGroup.add(fruits);
                     fruitGroup2.add(fruits2)
                     
                 }
                 if (frameCount % 300 === 0) {
                    fruits3 = createSprite(random(100, 1000), 0, 100, 100);
                    fruits3.velocityY = 3;
                    fruits3.addImage("fruit3",fruit3_img);
                    fruits4= createSprite(random(100,1000),0,100,100)
                    fruits4.velocityY= 2
                    fruits4.addImage("fruit4", fruit4_img);
                fruitGroup3.add(fruits3)
            fruitGroup4.add(fruits4)
        }
       
        if (frameCount % n === 0) {
         fruits3 = createSprite(random(100, 1000), 0, 100, 100);
         fruits3.velocityY = 3;
         fruits3.addImage("fruit3",fruit3_img);
         fruits4= createSprite(random(100,1000),0,100,100)
         fruits4.velocityY= 2
         fruits4.addImage("fruit4", fruit4_img);
     fruitGroup3.add(fruits3)
 fruitGroup4.add(fruits4)
 n= 350+n
}
if (frameCount % a === 0) {
    fruits17 = createSprite(random(100, 1000), 0, 100, 100);
    fruits17.velocityY = 3;
    fruits17.addImage("fruit3",fruit3_img);
    fruits18= createSprite(random(100,1000),0,100,100)
    fruits18.velocityY= 2
    fruits18.addImage("fruit4", fruit4_img);
fruitGroup17.add(fruits17)
fruitGroup18.add(fruits18)
a= a+ 350
}
if (frameCount % b === 0) {
    fruits19 = createSprite(random(100, 1000), 0, 100, 100);
    fruits19.velocityY = 3;
    fruits19.addImage("fruit3",fruit3_img);
    fruits20= createSprite(random(100,1000),0,100,100)
    fruits20.velocityY= 2
    fruits20.addImage("fruit4", fruit4_img);
fruitGroup19.add(fruits19)
fruitGroup20.add(fruits20)
b= b+ 250
}
if (frameCount % c === 0) {
    fruit21 = createSprite(random(100, 1000), 0, 100, 100);
    fruit21.velocityY = 2;
    fruit21.addImage("fruit7",fruit1_img);
    fruits22= createSprite(random(100,1000),0,100,100)
    fruits22.velocityY= 2
    fruits22.addImage("fruit8", fruit2_img);
    fruitGroup21.add(fruit21)
fruitGroup22.add(fruits22);
c = c+300
}
if (frameCount % d === 0) {
    fruit23 = createSprite(random(100, 1000), 0, 100, 100);
    fruit23.velocityY = 2;
    fruit23.addImage("fruit7",fruit1_img);
    fruits24= createSprite(random(100,1000),0,100,100)
    fruits24.velocityY= 2
    fruits24.addImage("fruit8", fruit2_img);
    fruitGroup23.add(fruit23)
fruitGroup24.add(fruits24);
d = d+200
}
if (frameCount % e === 0) {
    fruit25 = createSprite(random(100, 1000), 0, 100, 100);
    fruit25.velocityY = 2;
    fruit25.addImage("fruit7",fruit1_img);
    fruits26= createSprite(random(100,1000),0,100,100)
    fruits26.velocityY= 2
    fruits26.addImage("fruit8", fruit2_img);
    fruitGroup25.add(fruit25)
fruitGroup26.add(fruits26);
e= e+300
}
if (frameCount % f === 0) {
    fruits27 = createSprite(random(100, 1000), 0, 100, 100);
    fruits27.velocityY = 3;
    fruits27.addImage("fruit3",fruit3_img);
    fruits28= createSprite(random(100,1000),0,100,100)
    fruits28.velocityY= 2
    fruits28.addImage("fruit4", fruit4_img);
fruitGroup27.add(fruits27)
fruitGroup28.add(fruits28)
f= f+ 250
}
        if (frameCount % 330 === 0) {
            fruits5 = createSprite(random(100, 1000), 0, 100, 100);
            fruits5.velocityY = 3;
            fruits5.addImage("fruit5",fruit3_img);
            fruits6= createSprite(random(100,1000),0,100,100)
            fruits6.velocityY= 2
            fruits6.addImage("fruit6", fruit4_img);
        fruitGroup5.add(fruits5)
    fruitGroup6.add(fruits6)
}
if (frameCount % 320 === 0) {
    fruit7 = createSprite(random(100, 1000), 0, 100, 100);
    fruit7.velocityY = 2;
    fruit7.addImage("fruit7",fruit1_img);
    fruits8= createSprite(random(100,1000),0,100,100)
    fruits8.velocityY= 2
    fruits8.addImage("fruit8", fruit2_img);
    fruitGroup7.add(fruit7)
fruitGroup8.add(fruits8);
}
    if (frameCount % 350 === 0) {
        fruits9 = createSprite(random(100, 1000), 0, 100, 100);
        fruits9.velocityY = 3;
        fruits9.addImage("fruit9",fruit3_img);
        fruits10= createSprite(random(100,1000),0,100,100)
        fruits10.velocityY= 2
        fruits10.addImage("fruit10", fruit4_img);
    fruitGroup9.add(fruits9)
fruitGroup10.add(fruits10)
}
if (frameCount % 370 === 0) {
fruits11 = createSprite(random(100, 1000), 0, 100, 100);
fruits11.velocityY = 2;
fruits11.addImage("fruit11",fruit1_img);
fruits12= createSprite(random(100,1000),0,100,100)
fruits12.velocityY= 2
fruits12.addImage("fruit12", fruit2_img);
       

    fruitGroup11.add(fruits11);
    fruitGroup12.add(fruits12) }
                 

    if (frameCount % 420 === 0) {
        fruits13 = createSprite(random(100, 1000), 0, 100, 100);
        fruits13.velocityY = 3;
        fruits13.addImage("fruit13",fruit3_img);
        fruits14= createSprite(random(100,1000),0,100,100)
        fruits14.velocityY= 2
        fruits14.addImage("fruit10", fruit4_img);
    fruitGroup13.add(fruits13)
fruitGroup14.add(fruits14)
}

if (frameCount % 470 === 0) {
    fruits15 = createSprite(random(100, 1000), 0, 100, 100);
    fruits15.velocityY = 2;
    fruits15.addImage("fruit11",fruit1_img);
    fruits16= createSprite(random(100,1000),0,100,100)
    fruits16.velocityY= 2
    fruits16.addImage("fruit12", fruit2_img);
           
    
        fruitGroup15.add(fruits15);
        fruitGroup16.add(fruits16) }


                  if ( fruitGroup.isTouching(player1)) {
                     //fill code here, to destroy the objects.
                     fruitGroup.destroyEach();
                     score= score+1
                  }
                  if ( fruitGroup.isTouching(player2)) {
                    //fill code here, to destroy the objects.
                    fruitGroup.destroyEach();
                 
                 score2= score2 +1
                  }

                  if ( fruitGroup14.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup14.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup14.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup14.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup15.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup15.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup15.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup15.destroyEach();
                
                score2= score2 +1
                 }
    
                 if ( fruitGroup2.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup2.destroyEach();
                    score= score+1

                 }
                 if ( fruitGroup2.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup2.destroyEach();
                   score2= score2 +1

                }

                if ( fruitGroup3.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup3.destroyEach();
                    score= score+1

                 }
                 if ( fruitGroup3.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup3.destroyEach();
                   score2= score2 +1


                }
                if ( fruitGroup4.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup4.destroyEach();
                    score= score+1

                 }
                 if ( fruitGroup4.isTouching(player2)) {
                    //fill code here, to destroy the objects.
                    fruitGroup4.destroyEach();
                    score2= score2 +1

                 }

                 if ( fruitGroup5.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup5.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup5.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup5.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup6.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup6.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup6.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup6.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup7.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup7.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup7.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup7.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup8.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup8.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup8.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup8.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup9.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup9.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup9.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup9.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup10.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup10.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup10.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup10.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup11.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup11.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup11.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup11.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup12.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup12.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup12.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup12.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup13.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup13.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup13.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup13.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup16.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup16.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup16.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup16.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup17.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup17.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup17.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup17.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup18.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup18.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup18.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup18.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup19.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup19.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup19.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup19.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup20.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup20.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup20.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup20.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup21.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup21.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup21.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup21.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup22.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup22.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup22.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup22.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup23.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup23.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup23.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup23.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup24.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup24.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup24.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup24.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup25.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup25.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup25.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup25.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup26.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup26.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup26.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup26.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup27.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup27.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup27.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup27.destroyEach();
                
                score2= score2 +1
                 }
                 if ( fruitGroup28.isTouching(player1)) {
                    //fill code here, to destroy the objects.
                    fruitGroup28.destroyEach();
                    score= score+1
                 }
                 if ( fruitGroup28.isTouching(player2)) {
                   //fill code here, to destroy the objects.
                   fruitGroup28.destroyEach();
                
                score2= score2 +1
                 }
                
                
                
                
        
         

    }

    end(){
       console.log("Game Ended");
    }
}