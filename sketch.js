
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var angle1=60;
var angle2=120;
var angle3=180;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.

var plane_options=
{
	isStatic: true	
}

var block1_options=
{
	isStatic: true	
}

var block2_options=
{
	isStatic: true	
}

plane = Bodies.rectangle(200,400,200,20,plane_options);
World.add(world, plane);

block1 = Bodies.rectangle(100,250,75,20,block1_options);
World.add(world, block1);

block2 = Bodies.rectangle(300,250,75,20,block2_options);
World.add(world, block2);

rotator1 = Bodies.rectangle(200,150,75,20,block2_options);
World.add(world, rotator1);

rotator2 = Bodies.rectangle(200,150,75,20,block2_options);
World.add(world, rotator2);

rotator3 = Bodies.rectangle(200,150,75,20,block2_options);
World.add(world, rotator3);

var particle1_options = {
  restitution: 0.4,
  frictionAir:0.02
}
particle1= Bodies.circle(220,10,10,particle1_options);
  World.add(world,particle1);


var particle2_options = {
  restitution: 0.4,
  frictionAir:0.02
}
particle2 = Bodies.circle(220,10,10,particle2_options);
  World.add(world,particle2);


var particle3_options = {
  restitution: 0.4,
  frictionAir:0.02
}
particle3 = Bodies.circle(220,10,10,particle3_options);
  World.add(world,particle3);


var particle4_options = {
  restitution: 0.4,
  frictionAir:0.02
}
particle4 = Bodies.circle(220,10,10,particle4_options);
  World.add(world,particle4);


var particle5_options = {
  restitution: 0.4,
  frictionAir:0.02
}
particle5 = Bodies.circle(220,10,10,particle5_options);
  World.add(world,particle5);



	Engine.run(engine);
	rectMode(CENTER);
  ellipseMode(RADIUS);
    
}


function draw() 
{
  background(51);
  background("purple")

  Engine.update(engine)

  Matter.Body.rotate(rotator1,angle1)
  push();
  translate(rotator1.position.x,rotator1.position.y)
  rotate(angle1);
  rect(0,0,150,20);
  pop();

  angle1+=5.0;

  Matter.Body.rotate(rotator2,angle2)
  push();
  translate(rotator2.position.x,rotator2.position.y)
  rotate(angle2);
  rect(0,0,150,20);
  pop();

  angle2+=5.0;

  Matter.Body.rotate(rotator3,angle3)
  push();
  translate(rotator3.position.x,rotator3.position.y)
  rotate(angle3);
  rect(0,0,150,20);
  pop();

  angle3+=5.0;


  rect(plane.position.x,plane.position.y,400,20);
  
  rect(block2.position.x,block2.position.y,75,20);

  rect(block1.position.x,block1.position.y,75,20);

  ellipse(particle1.position.x,particle1.position.y,10);

  ellipse(particle2.position.x,particle2.position.y,10);

  ellipse(particle3.position.x,particle3.position.y,10);

  ellipse(particle4.position.x,particle4.position.y,10);

  ellipse(particle5.position.x,particle5.position.y,10);
 
  drawSprites();

  
}



