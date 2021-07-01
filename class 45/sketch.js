var ground,groundImage;

function preload(){
  groundImage=loadImage("ground1.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);

  ground= createSprite(0,0,displayWidth,displayHeight)
  ground.addImage(groundImage);
  
 
}

function draw() {
  background(0);

 
  drawSprites();
}
  
 
  