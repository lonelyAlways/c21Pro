var wall,thickness;
var bullet,speed,weight;

function setup() {
  createCanvas(1600, 400);
  
  bullet=createSprite(50,200,60,20)

  wall=createSprite(1200,200,40,190)
  wall.shapeColor="grey"
}

function draw(){
  background(0)
  edges=createEdgeSprites()
  text(mouseX+","+mouseY,mouseX,mouseY)
  
  bullet.velocityX=5

  speed=random(223,321);
  weight=random(30,52)
  thickness=random(23,83)
     
  if(bullet.collide(wall)){
    wall.thickness=random(23,83)
    wall.shapeColor=random("green","red")
  }
  drawSprites();
}




