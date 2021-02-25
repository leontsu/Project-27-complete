const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var chain1, chain2, chain3, chain4, chain5;
var bobDiameter = 40;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2,height/4,width/7,20);

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Paper(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Paper(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Paper(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Paper(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Paper(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	/*bobObject1 = new Paper(250,400,75);
	bobObject2 = new Paper(325,400,75);
	bobObject3 = new Paper(400,400,75);
	bobObject4 = new Paper(475,400,75);
	bobObject5 = new Paper(550,400,75);
*/
	chain1 = new Chain(bobObject1.body,roof.body,-bobDiameter*2,0);
	chain2 = new Chain(bobObject2.body,roof.body,-bobDiameter*1,0)
	chain3 = new Chain(bobObject3.body,roof.body,0,0)
	chain4 = new Chain(bobObject4.body,roof.body,bobDiameter*1,0)
	chain5 = new Chain(bobObject5.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(150);
  
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x:-50, y:-45})
	}
}