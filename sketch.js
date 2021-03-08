var canvas, edges;
var music, surface1, surface2, surface3, surface4, box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(900,600);

    //create 4 different surfaces
    surface1 = createSprite(100, 550, 150, 20);
    surface1.shapeColor = "lime";

    surface2 = createSprite(350, 550, 150, 20);
    surface2.shapeColor = "orange";

    surface3 = createSprite(575, 550, 150, 20);
    surface3.shapeColor = "yellow";

    surface4 = createSprite(800, 550, 150, 20);
    surface4.shapeColor = "magenta";

    edges = createEdgeSprites();

    box = createSprite(random(20,750),80,30,30);
    
   if(box.x > 450){ 
    box.velocityY = 4;
    box.velocityX = 5;
   }
   
   if(box.x < 450){
      box.velocityY = -4;
      box.velocityX = -5;
   }

}

function draw() {
    background(rgb(245,245,245));
    //create edgeSprite
    createEdgeSprites();

    box.bounceOff(edges);

    if(surface1.isTouching(box)){
        box.bounceOff(surface1);
        box.shapeColor = "lime";
        music.play();
    
    }

    if(surface2.isTouching(box)){
        box.bounceOff(surface2);
        box.shapeColor = "orange";
        music.play();
    
    }

    if(surface3.isTouching(box)){
        music.play();
        box.bounceOff(surface3);
        box.shapeColor = "yellow";
    
    }
    
    if(box.isTouching(surface4)){
        box.velocity = 0;
        box.shapeColor = "magenta";
        music.stop();
    }

    //add condition to check if box touching surface and make it box
    drawSprites();
}
