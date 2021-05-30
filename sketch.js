var backgroundImage , background ;
var ghost , ghostImage ;
var hero , heroImage; 
var tower , towerImage ; 
var form ;
var gameState = "wait"; 


function preload() {
  backgroundImage = loadImage ("images/background.png")
  towerImage = loadImage ("images/tower.png")
  heroImage = loadImage ("images/hero.jpg")
 // ghostImage = loadImage ("images/ghost.png")
}



function setup() {
  createCanvas(1200,650);
  //tower = createSprite(600, 325, 50, 50);
  //tower.addImage(towerImage);
  //tower.scale = 0.1
  
 //  ghost = createSprite(0,0,50,50)
 // ghost.addImage(ghostImage)

  //hero = createSprite(110,90,10,10)
  //hero.addImage(heroImage)
  //hero.scale = .1

 // background = createSprite (0 , 0 , 800 , 400) ; 
 // background.addImage(backgroundImage);
}


function draw() {
  //background(backgroundImage);

  if (gameState === "wait"){
    form = new Form ();
    form.display ();
  }
  if (gameState === 1){
   // form.hide();
    clear();
    background(backgroundImage)
  //  form.hide = true ;

  }

  drawSprites();
  
  
}