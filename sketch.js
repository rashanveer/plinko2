const Engine = Matter.Engine;
const Events = Matter.Events
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var divisions = [];
var plinkos = [];
var divisionHeight = 300
var score = 0, count = 0,gameState = "start" ;
var particle
function setup() {
  createCanvas(800,800);
  
	engine = Engine.create();
	world = engine.world;

ground1  =new Ground(width/2,height,width,20)

for(var k = 0;k<=width;k=k+80){
divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))

}
for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }
    for (var r = 50; r <=width; r=r+50) 
    {
    
       plinkos.push(new Plinko(r,175));
    }
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }
    for (var r = 50; r <=width; r=r+50) 
    {
    
       plinkos.push(new Plinko(r,375));
    }
  


Engine.run(engine);

}

function draw() {
  background("black"); 
  ground1.display();
for(var k = 0;k<divisions.length;k++){
  divisions[k].display();
}
for (var i = 0; i < plinkos.length; i++) {
     
  plinkos[i].display();
  
}


if(particle!=null)
    {
       particle.display();
        console.log(particle)
        if (particle.body.position.y>760)
        {
              if (particle.body.position.x < 300) 
              {
                  score=score+500;      
                  particle=null;
                  if ( count>= 5) gameState ="end";                          
              }


              else if (particle.body.position.x < 600 && particle.body.position.x > 301 ) 
              {
                    score = score + 100;
                    if ( count>= 5) gameState ="end";

              }
              else if (particle.body.position.x < 900 && particle.body.position.x > 601 )
              {
                    score = score + 200;
                    particle=null;
                    if ( count>= 5)  gameState ="end";

              }      
              
        }
      }
textSize(35)
  text("Score : "+score,20,40);
  fill("white");
  //text(mouseX + "," + mouseY, 20, 50);
  textSize(35)
  text(" 500 ", 5, 550);
  text(" 500 ", 80, 550);
  text(" 500 ", 160, 550);
  text(" 500 ", 240, 550);
  text(" 100 ", 320, 550);
  text(" 100 ", 400, 550);
  text(" 100 ", 480, 550);
  text(" 200 ", 560, 550);
  text(" 200 ", 640, 550);
  text(" 200 ", 720, 550);

  drawSprites();
}

function mousePressed()
{
  if(gameState!=="end")
  {
      count++;
      console.log(count)
     particle=new Particle(mouseX, 10, 10, 10); 
  }   
}





