const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine , world;
var gamestate , SERVE , MOTION ,END;
var chain , ball , ceiling;

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;
  ceiling = Bodies.rectangle(400 , 10 , 100 , 20 , {isStatic:true});
  ball = Bodies.circle(400 , 300 , 10 , {frictionAir:0});
  World.add(world , ball);
  chain = new Chain(ceiling , ball , 300 , 0.05 , 0);
  World.add(world , chain);
  SERVE = 0;
  MOTION = 1;
  END = 2;
  gamestate = END;

}

function draw() {
  background("skyblue"); 
  if(keyCode === 32){
    gamestate = SERVE;
    
  } 
  else if(keyCode != 32 && keyCode != 13){
    gamestate = MOTION;
    
  }
  else if(keyCode == 13){
    gamestate = END;
    
  }

  
  if(gamestate == SERVE){
    ball.position.x = mouseX;
    ball.position.y = mouseY;
  }
  else if(gamestate == END){
    ball.position.x = 400;
    ball.position.y = 300;
  }
  Engine.update(engine); 
  rectMode(CENTER);
  fill(255)
  rect(ceiling.position.x,ceiling.position.y, 100 , 20);
  circle(ball.position.x , ball.position.y , ball.radius);
  chain.display(4);
  textSize(20);
  text("Press space to place the ball . Press any key to release it." , 60 , 500);
  text("press enter to bring it back to its default location" , 60 , 550);
  
  
}