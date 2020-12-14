var car,wall;
var speed, weight; 

function setup() {
  createCanvas(1600, 400);
  speed=random(223,321)
  b=createSprite(50, 200, 50,50);   
  b.velocityX = speed;
  b.shapeColor=color(255);
 
  weight=random(30,52)
  thicknes=random(22,83)
  wall=createSprite(1200,200, thicknes, height/2)
  wall.shapeColor=color(80,80,80)
}

function draw() {
  background(220);

  if(hasCollided(b,wall))
  {
  	b.velocityX=0;
  	var damage=0.5 * weight * speed* speed/(thicknes *thicknes *thicknes);
if(damage>10) { wall.shapeColor=color(255,0,0); } if(damage<10) { wall.shapeColor=color(0,255,0); }

  }  
  
  drawSprites();
 
}
function hasCollided(lbullet, lwall) { bulletRightEdge=lbullet.x +lbullet.width; wallLeftEdge=lwall.x; if (bulletRightEdge>=wallLeftEdge) { return true } return false; }

