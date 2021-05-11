const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var graveyardimg;
var zombie, zombie2, zombie3 ;
var axe1, slingshot; 
var hero;
var ground;
var gameState = "onsling";
var score = 0;


function preload(){
	graveyardimg=loadImage("JS/Graveyard.jpg");

}

function setup() {
	createCanvas(1200,400);
	

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	zombie = new Zombie(200,height-40,100,200);

	farmer = new Hero(1000,270,200,200)

	axe1 = new axe(800,300,100,100);

	slingshot = new rope(axe1.body,{x:800, y:300});

	Engine.run(engine);
}


function draw() {
  ground.display();
  background(graveyardimg);

  ground.display();
  zombie.display();
  farmer.display();
  axe1.display();
  slingshot.display();

    }

function mouseDragged(){
  //  if (gameState!=="launched"){
    Matter.Body.setPosition(axe1.body, {x: mouseX , y: mouseY});
    //}
 }

 function mouseReleased(){
    slingshot.fly();
    //gameState = "launched";
}
function keyPressed(){
    if(keyCode === 32){
       // axe1.trajectory=[];
        Matter.Body.setPosition(axe1.body, {x:800, y:300});
        slingshot.attach(axe1.body);
    }
}
