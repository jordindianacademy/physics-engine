const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground;


function setup() {
  createCanvas(400,400);
engine=Engine.create();
world=engine.world;
var rust={
restitution:1

}
ball=Bodies.circle(200,100,20,rust)
World.add(world,ball)
var options={
isStatic:true,

}

ground=Bodies.rectangle(200,380,400,20,options);
World.add(world,ground);
console.log(ground);


  
}

function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);  
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}