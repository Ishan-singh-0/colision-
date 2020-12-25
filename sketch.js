var fixedRect, movingRect;

function setup() {
  //Creating Canvas
  createCanvas(1200,800);

  //create a rectangle sprite
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";

  //create another rectangle sprite
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  
}

function draw() {

  //Give background black
  //Red,green,blue  RGB
  background(0,0,0);  

  //Move the moving rect with mouse in X and Y
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  //Distance between the fixed rect and moving rect will become less than addition of 
  //their widths then we can say that they are overlapping or colliding ...similarly
  //for heights
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
     && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
      && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
    
      {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  drawSprites();
}