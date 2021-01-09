var player, playerImg;
var alienImg;
var spaceImg;
var starImg;
var score = 0;



function preload(){
    playerImg = loadImage("astronaut.png");
    spaceImg = loadImage("space.jpg");
    alienImg = loadImage("alien.png");
    starImg = loadImage("star.png");
}

function setup(){
    createCanvas(500,800);

    player = createSprite(250, 600, 50, 50);
    player.addImage(playerImg);
    player.scale = 0.15;





}

function draw(){
    background(spaceImg);

    if(keyDown(RIGHT_ARROW)){
        player.x = player.x + 4
    }

    if(keyDown(LEFT_ARROW)){
        player.x = player.x - 4        
    }    
    
    if(keyDown(UP_ARROW)){
        player.y = player.y - 4
    }

    if(keyDown(DOWN_ARROW)){
        player.y = player.y + 4
    }


    createAlien();
    createStar();
    
    drawSprites();

    fill("white");
    textSize(25)
    text("Score : " + score, 30, 30);

}

function createAlien(){
    if(frameCount%100===0){
        var alien = createSprite(200,200,70,80)
        alien.x = Math.round(random(60, 450)); 
        alien.y = Math.round(random(60, 450));
        alien.scale = 0.08;
        alien.velocityY = Math.round(random(-5,5));
        alien.velocityX = Math.round(random(-5,5));
        alien.addImage(alienImg)
    }

}

function createStar(){
    if(frameCount%70===0){
        var star = createSprite(200,200,70,80)
        star.x = Math.round(random(50, 450)); 
        star.y = Math.round(random(50, 450));
        star.scale = 0.1;
        star.velocityY = Math.round(random(-2,2));
        star.velocityX = Math.round(random(-2,2));
        star.addImage(starImg)
    }

}

