var issimg,iss
var move,moveimg
var work,workimg
var brush,brushing
var eat,eatimg

function preload(){
issimg = loadImage("iss.png")
workimg = loadAnimations("gym1.png","gym2.png")
moveimg = loadImage("move.png");
brushimg = loadImage("brush.png")
eatimg = loadImage("eat.png")
}


function setup() {
  createCanvas(800,400);
 iss = createSprite(400, 200, 50, 50);
 iss.addImage("iss",issimg)
 iss.scale = 0.2

move = createSprite(400,200,50,50)
move.addImage("move",moveimg)
move.scale = 0.1


}

function draw() {
  background(255,255,255);  
  drawSprites();

  if(keyDown("UP_ARROW")){
move.addAnimation("work",workimg)
move.changeAnimation("work",workimg)
  }
  if(keyDown("RIGHT_ARROW")){
    move.addAnimation("eat",eatimg)
    move.changeAnimation("eat",eatimg)
      }

      if(keyDown("LEFT_ARROW")){
        move.addAnimation("bath",bathimg)
        move.changeAnimation("bath",bathimg)
          }
          if(keyDown("DOWN_ARROW")){
            move.addAnimation("brush",brushimg)
            move.changeAnimation("brush",brushimg)
              }
                    

}