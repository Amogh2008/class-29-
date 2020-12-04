const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constriant = Matter.Constriant

var box1,box2,box3,box4,box5,box6,box7,box8
var stand,polygon,slingshot;





function setup() {

  engine = Engine.create();
	world = engine.world;


  createCanvas(800,400);
  

stand = new Stand(400,250,300,10);

box1 = new Cube(330,235,30,40);
box3 = new Cube(360,235,30,40);
box4 = new Cube(390,235,30,40);
box5 = new Cube(420,235,30,40);
box6 = new Cube(450,235,30,40);
box7 = new Cube(360,195,30,40);
box8 = new Cube(390,195,30,40);
box9 = new Cube(420,195,30,40);
box2 = new Cube(390,155,30,40);

slingshot = new SlingShot(polygon.body,{x:200, y:100});

polygon = new Cube(50,150,40,40);
  
}

function draw() {
  background(255,255,255);  

  stand.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  polygon.display();
  slingshot.display();



  drawSprites();
}