const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,plane,hammer,iron,rubber,stone,stone1,stone2,stone3,stone4,stone5,stone6;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
  //iron=new Iron(40,580)
stone=new Stone(400,580)
//stone1=new Stone(420,580)
//stone2=new Stone(440,580)
//stone3=new Stone(460,580)
//stone4=new Stone(480,580)
//stone5=new Stone(500,580)
//stone6=new Stone(550,580)
//stone7=new Stone(600,580)
  

plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    //rubber = new Rubber(400,400,30);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
   // rubber.display();
 stone.display();
 /*stone1.display();
 stone2.display();
 stone3.display();
 stone4.display();
 stone5.display();
 stone6.display();
 stone7.display();*/
// iron.display()
    
 
}