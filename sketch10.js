var ship,ship1;
var sea,sea1
function preload(){
ship1=loadAnimation("sea.png")
  sea1= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}

function setup(){
  
  ship=createSprite(150,190,50,200)
  ship.scale=0.25
  ship.addAnimation("sea",ship1)
  sea=createSprite(100,160,50,50)
  sea.addAnimation("floating",sea1)
sea.scale=0.25
}

function draw() {
background("white")
ship.velocityX=-5
if(ship.x<0){
ship.x=ship.width/2
}
drawSprites() 
}