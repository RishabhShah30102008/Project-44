var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
}

function setup() {
  createCanvas(1000,500);
  system = new System();
  security = new Security();
}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen
  textSize(20);
  textAlign(CENTER);
  strokeWeight(3);
  stroke(0);
  fill("yellow");
  text("Score: " + score, 500,40)

  // Add code to display the end screen
  if(score === 3){
    background(bg2);
    text("Hurray! You unlocked the treasure", 500,40);
  }

  drawSprites()
}