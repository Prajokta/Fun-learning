var runningBoy ,boy;
var road ,roadImg;


function preload()
{
	runningBoy= loadAnimation("boy1.png","boy2.png","boy3.png","boy4.png");
	roadImg = loadImage("road.jpg");



	
}

function setup() {
	createCanvas(1000, 600);
	road =  createSprite(500,400);
road.addImage(roadImg);
road.scale=3.5;
road.velocityX = -5

boy= createSprite(100,300);
boy.addAnimation("running",runningBoy)




	
	//Create the Bodies Here.


	
}  



function draw() {
  rectMode(CENTER);
  background("white");

  if(road.x<0){
	  road.x =  road.width/2;


  }
  
  drawSprites();
 
}



