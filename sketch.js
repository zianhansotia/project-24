
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer,ground,rock,rubber;

function preload()
{
	
}

function setup() {
	createCanvas(1200,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	hammer = new Hammer(400,350,50,80);
	ground = new Ground(400,695,1500);
	rock = new Stone(400,630,70,70);
	rubber = new Rubber(600,630,300);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightpink");
  Engine.update(engine);

  hammer.body.position.x = mouseX;
  hammer.body.position.y = mouseY;
  hammer.display();
  ground.display();            
  rock.display();
  rubber.display();
  drawSprites();
 
}



