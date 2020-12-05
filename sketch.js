const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var Plinko=[]
var d=[]
var b=[]
function setup() {
  createCanvas(600,600);
  engine=Engine.create()
  world=engine.world
  op_options={
    isStatic:true
  }
 
  for(var i=70;i<600;i=i+60){
    Plinko.push(new plinko(i,200))
  }
  for(var i=50;i<600;i=i+60){
    Plinko.push(new plinko(i,250))
  }
  for(var i=70;i<600;i=i+60){
    Plinko.push(new plinko(i,300))
  }
  for(var i=50;i<600;i=i+60){
    Plinko.push(new plinko(i,350))
  }
  for(var i=50;i<600;i=i+60){
    Plinko.push(new plinko(i,150))
  }
  for(var i=0;i<600;i=i+80){
  d.push(new ground(i,500))
  }
  land=Bodies.rectangle(300,600,600,10,op_options)
  World.add(world,land)
  

}

function draw() {
  Engine.update(engine)
  rectMode(CENTER)
  background("cyan");
  if(frameCount%30===0){
    b.push(new ball(random(280,320),-10))
  }
  for(var i=0;i<Plinko.length;i++){
  Plinko[i].display()
  }
  for(var i=0;i<d.length;i++){
    d[i].display()
    }
    for(var i=0;i<b.length;i++){
      b[i].display()
      }
 
  rect(land.position.x,land.position.y,600,10)
  drawSprites();
}

