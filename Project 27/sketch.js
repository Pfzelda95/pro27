
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var ball,ball2,ball3,ball4,ball5,ballsprite,ground;
var d1,d2,d3;
var rope1,rope2,rope3,rope4,rope5; 



function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;
	
	var options2 = {
		isStatic:false


	}
	
	 
	
	//Create the Bodies Here.
	//ground = new box(400,650,800,5,options2);

	block = new box(400,150,450,100,options2)
	ball = new Ball (200,200,250,PI*2);
	ball2 = new Ball(300,200,250,PI*2);
	ball3 = new Ball(400,200,250,PI*2);
	ball4 = new Ball(500,200,250,PI*2);
	ball5 = new Ball(600,200,250,PI*2);
	rope1 = new rope(ball.body,{x:200,y:200});
	rope2 = new rope(ball2.body,{x:300,y:200});
	rope3 = new rope(ball3.body,{x:400,y:200});
	rope4 = new rope(ball4.body,{x:500,y:200});
	rope5 = new rope(ball5.body,{x:600,y:200});


	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  
  ball.keyPressed();
  block.display();
  ball.display();
  rope1.display();
  ball2.display();
  rope2.display();
  ball3.display();
  rope3.display();
  ball4.display();
  rope4.display();
  ball5.display();
  rope5.display();
  

	//keyPressed();

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    rope1.fly();
}































