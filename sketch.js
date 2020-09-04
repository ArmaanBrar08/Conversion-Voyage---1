var background;
var gameState = 0;
var form;

function preload(){
  backgroundIMG = loadImage("Images/Ocean.jpg");
  thomasIMG = loadImage("Images/Thomas.png");
  mrsmithIMG = loadImage("Images/MrSmith.png");
  anchorIMG = loadImage("Images/Anchor.png");
  foodIMG = loadImage("Images/Food.jpg");
  waterIMG = loadImage("Images/Water.png");
  shipIMG = loadImage("Images/Ship.png");
}

function setup(){
  createCanvas(displayWidth, displayHeight)
  thomas = createSprite(displayWidth - 750, displayHeight - 200, 20, 20);
  thomas.addImage(thomasIMG);
  thomas.scale = 0.5
  mrSmith = createSprite(displayWidth - 900, displayHeight - 250, 20, 20);
  mrSmith.addImage(mrsmithIMG);
  mrSmith.scale = 0.4;

  form = new Form();


}

function draw(){
  if(gameState === 0){
    form.displayPlayButton();
  }

  if(gameState === 1){
    background(backgroundIMG);
    drawSprites();
    image(shipIMG, displayWidth - 1250, displayHeight - 500, 700, 550 );
    
  }

}