const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var basketballPlayerImg, courtImg, hoopImg, basketballImg;
var basketballPlayer, basketball;
var ground;

function preload() {
  basketballImg = loadImage("Images/basketball.png");
  basketballPlayerImg = loadImage("Images/basketball-player.png");
  courtImg = loadImage("Images/Court.png");
  hoopImg = loadImage("Images/hoop-2.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,10);

  var options ={
    isStatic :true
  }
  
  basketballPlayer = Bodies.rectangle(width/4, height/2, 100, 200, options);
  World.add(world, basketballPlayer);
  
  /*basketballPlayer = createSprite(400, 400, 10, 10);
  basketballPlayer.addImage("player", basketballPlayerImg);
  basketballPlayer.scale = 0.19*/

  basketball = new Basketball(basketballPlayer.position.x +30, basketballPlayer.position.y + 20);
}
function draw() {
  background(courtImg);
  Engine.update(engine);
  ground.display();
  //imageMode(CENTER);
  image(basketballPlayerImg, basketballPlayer.position.x, basketballPlayer.position.y, 100, 200);
  //drawSprites();
  basketball.display();
}

function keyReleased() {
  if (keyCode === UP_ARROW) {
    basketball.shoot();
  }
}