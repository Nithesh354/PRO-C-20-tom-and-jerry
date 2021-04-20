var cat,mouse,catimg1,mouseimg1,mouseimg2,mouseimg3,garden,gardimg,catimg2,catimg3

function preload() {
    //load the images here
    mouseimg1=loadAnimation("images/mouse4.png")
    mouseimg2=loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseimg3=loadAnimation("images/mouse1.png")
    gardimg=loadImage("images/garden.png")
    catimg1=loadAnimation("images/cat1.png")
    catimg2=loadAnimation("images/cat2.png","images/cat3.png")
    catimg3=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(500,500);
    //create tom and jerry sprites here
    garden=createSprite(250,250)
    garden.addImage(gardimg)
    garden.scale=0.7
    cat=createSprite(400,400)
    cat.addAnimation("tom",catimg1)
    cat.debug=false
    cat.scale=0.1
    
    mouse=createSprite(100,400)
    mouse.addAnimation("jerry",mouseimg1)
    mouse.debug=false
    mouse.scale=0.1
   

}

function draw() {

    background("green");
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<mouse.width/2+cat.width/2&&
        mouse.x-cat.x<mouse.width/2+cat.width/2&&
        cat.y-mouse.y<mouse.height/2+cat.height/2&&
        mouse.y-cat.y<mouse.height/2+cat.height/2){
    
            cat.addAnimation("catfriend",catimg3)
            cat.changeAnimation("catfriend")
            
            mouse.addAnimation("mousefriend",mouseimg3)
            mouse.changeAnimation("mousefriend")
        }
     
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode===RIGHT_ARROW){
     mouse.addAnimation("mousetease",mouseimg2)
     mouse.changeAnimation("mousetease")
     
 }
 

 if(keyCode===LEFT_ARROW){
    cat.addAnimation("cattease",catimg2)
   cat.changeAnimation("cattease")
    
    cat.x=cat.x-65
} 

}
