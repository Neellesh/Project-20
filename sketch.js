var bg , backg;
var sleep , bath , eat , brush , gym , gym2 , drink , move;
var astro;




function preload(){

backg = loadImage("iss.png");
sleep = loadAnimation("sleep.png");
brush = loadAnimation("brush.png");
gym = loadAnimation("gym1.png","gym2.png",);
gym2 = loadAnimation("gym11.png","gym12.png")
bath = loadAnimation("bath1.png","bath2.png");
eat = loadAnimation("eat1.png","eat2.png");
drink = loadAnimation("drink1.png","drink2.png");
move = loadAnimation("move.png","move1.png");

}



function setup() {
  createCanvas(800,400);

  bg = createSprite(400,200);
  bg.addImage(backg);
  bg.scale = 0.2;

  astro = createSprite(400,200);
  astro.addAnimation("sleeping",sleep);
  astro.addAnimation("brushing",brush);
  astro.addAnimation("gyming",gym);
  astro.addAnimation("gyming2",gym2);
  astro.addAnimation("bathing",bath);
  astro.addAnimation("eating",eat);
  astro.addAnimation("drinking",drink);
  astro.addAnimation("moving",move);
  astro.scale = 0.15
  
}

function draw() {
  background(255,255,255);

 // Text( "Instructions:" ,100,50)

  if(keyDown("space")){
    astro.changeAnimation("brushing",brush);
  }

  if(keyDown("up")){
    astro.changeAnimation("gyming",gym);
  }
  
  if(keyDown("down")){
    astro.changeAnimation("gyming2",gym2);
  } 

  if(keyDown("D")){
    astro.changeAnimation("bathing",bath);
  }

  if(keyDown("right")){
    astro.changeAnimation("eating",eat);
  }

  if(keyDown("left")){
    astro.changeAnimation("drinking",drink);
  }

  if(keyDown("M")){
    astro.changeAnimation("moving",move);
  }





  drawSprites();
}