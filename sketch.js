var movingRect,fixedrect;

function setup() {
  createCanvas(1600,400);
   
 movingRect= createSprite (800,200,100,100);

 fixedrect= createSprite (400,200,100,100);

}

function draw() {
  
  background(0,0,0); 

  movingRect.x = World.mouseX; 
  movingRect.y = World.mouseY; 
  
  if(isTouching(movingRect, fixedrect)){ movingRect.shapeColor = "blue"; fixedrect.shapeColor = "blue"; } 
  
  else { movingRect.shapeColor = "green"; fixedrect.shapeColor = "green"; } 

  drawSprites();
}

function isTouching(object1,object2){ 
    
  if (object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2) 
  
  { return true; } 
  
  else { return false; } }

