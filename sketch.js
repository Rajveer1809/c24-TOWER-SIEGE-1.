const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  stage1 = new Ground(900, 250, 550 , 20)
  box1 = new Box(680, 100, 40, 40);
  box2 = new Box(720, 100, 40, 40);
  box3 = new Box(760, 100, 40, 40);
  box4 = new Box(800, 100, 40, 40);
  box5 = new Box(840, 100, 40, 40);
  box6 = new Box(880, 100, 40, 40);
  box7 = new Box(920, 100, 40, 40);


  box8 = new Box(720, 80, 40, 40);
  box9 = new Box(760,80, 40, 40);
  box10 = new Box(800,80,40,40);
  box11 = new Box(840,80, 40, 40);
  box12 = new Box(880,80, 40, 40);


  box13 = new Box(760, 60, 40, 40);
  box14 = new Box(800, 60, 40, 40);
  box15 = new Box(840, 60, 40, 40);


  box16 = new Box(800, 30, 40, 40);


  //box17 = new Box(700, 100, 40, 40);
  //box18 = new Box(700, 100, 40, 40);
  //box19 = new Box(700, 100, 40, 40);
  //box20 = new Box(700, 100, 40, 40);

  ball = new Ball(200, 200, 80, 80);
  rope = new Rope(ball.body, { x: 500, y: 50 });

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
 box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
 //box17.display()
  //box18.display()
  //box19.display()
  //box20.display()
  stage1.display()

  ball.display();
  rope.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


