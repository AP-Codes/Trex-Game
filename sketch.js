var trex, trex_running, edges;
var groundImage;
var ground;
var invisGround;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200);
  
  //creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
  //adding scale and position to trex
  trex.scale = 0.5;
  trex.x = 50
  
  //creating ground
  ground = createSprite(50, 180, 600, 5);
  ground.addAnimation("ground", groundImage);
  ground.velocityX  = -5;

  //creating invisible platform for trex to stand on
  invisGround = createSprite(50, 186, 600, 5)
  invisGround.visible = false
}


function draw(){
  //set background color 
  background("white");
  
  //logging the y position of the trex
  console.log(trex.y)
  
  //jump when space key is pressed
  if(keyDown("space")&&trex.y>150){
    trex.velocityY = -10;
  }
  
  //making the ground infinite
  if(ground.x<0){
    ground.x=ground.width/2
  }

  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  trex.collide(invisGround)
  drawSprites();


}


