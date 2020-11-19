var tower,towerImage;
var door,doorImage,doorGroup;
var climber,climberImage,climberGroup;
var block,blockGroup;
var ghost,ghostImage;
var gameState="PLAY";

function preload(){
  towerImage=loadImage("tower.png");
  doorImage=loadImage("door.png");
  climberImage=loadImage("climber.png");
  ghostImage=loadImage("ghost-standing.png")
}

function setup(){
  createCanvas(600,600);
  tower=createSprite(300,300);
  tower.addImage(towerImage);
  tower.velocityY=2;
  
  ghost=createSprite(150,200);
  ghost.addImage(ghostImage);
  ghost.scale=0.5;
  
  doorGroup=new Group();
  climberGroup=new Group();
  blockGroup=new Group();
}


function draw(){
  if(gameState==="PLAY"){
  if(tower.y>400){
    tower.y=300;
  }
  
  if(keyDown("right")){
    ghost.x=ghost.x+2;
  }
  
   
  if(keyDown("left")){
    ghost.x=ghost.x-2;
  }
  spawnDoors();
    if(climberGroup.isTouching(ghost)){
      ghost.velocityY=0;
    }
    
     if(blockGroup.isTouching(ghost)){
       ghost.destroy();
       gameState="END";
     
    }
  
  }
 drawSprites();
  
  if(gameState==="END"){
    background(0);
    fill("green");
    textSize(30);
    text("game Over",200,200);
  }
}



function spawnDoors(){
  if(frameCount%200===0){
    door=createSprite(200,46);
    door.addImage(doorImage);
    door.velocityY=2;
    door.x=Math.round(random(120,400));
    doorGroup. add(door);
    
    climber=createSprite(200,100);
    climber.addImage(climberImage);
    climber.velocityY=2;
    climber.x=door.x;
    climberGroup.add(climber);
    
    block=createSprite(200,80);
    block.width=climber.width;
    block.height=2;
    block.x=door.x;
    block.velocityY=2;
    block.debug=true;
    blockGroup.add(block);
    
    ghost.depth=door.depth;
    ghost.depth=ghost.depth+1;
    
    
    
  }
  
}