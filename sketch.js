var track,track_run
var runner,runnerImg
var leftboundary;
var rightboundary;


function preload(){
  //pre-load images
  track_run=loadImage("path.png")
  runnerImg=loadAnimation("Runner-1.png","Runner-2.png");
 
}

function setup(){
  createCanvas(300,500);
  track=createSprite(150,250)
  track.addImage(track_run)
  track.scale=1;
  track.velocityY=7;

  runner=createSprite(150,450)
  runner.addAnimation("run",runnerImg)
  runner.scale=0.05

  leftboundary=createSprite(17,250,7,500)
  rightboundary=createSprite(275,250,7,500)
  leftboundary.visible=false
  rightboundary.visible=false





  
  }
  



function draw() {
       background(0)


    if(track.y>500){
      track.y=height/2
    }
    runner.x=mouseX
    runner.collide(leftboundary)
    runner.collide(rightboundary)
  
  
    
     
    




   drawSprites();   
    
}

