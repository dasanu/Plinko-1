const Engine=Matter.Engine;
const World=Matter.World;
const Events=Matter.Events;
const Bodies=Matter.Bodies;

var particles=[];
var plinkos=[];
var divisions=[];
var divisionsHeight=300;
var score=0;

function setup() {
  createCanvas(700,700);
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,height,width,20);

  for (var k=0;k<=width;k=k+80){
    divisions.push(new Divisions(k,height-divisionsHeight/2,10,divisionsHeight));   
  }

  for (var j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175));
  }

  for (var j=75;j<=width;j=j+50){
    plinkos.push(new Plinko(j,275));
  }

  for (var j=50;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,375));
  }
}

function draw() {
  background("black"); 
  //textSize(20);
  //text("Score:",+score,20,30);
  Engine.update(engine);
  ground.display();

  for (var a=0;a<plinkos.length;a++){
    plinkos[a].display();
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(100,700),10,10));
    score++;
  }

  for (var j=0;j<particles.length;j++){
    particles[j].display();
  }

  for (var k=0;k<divisions.length;k++){
    divisions[k].display();
  }
  drawSprites();
}