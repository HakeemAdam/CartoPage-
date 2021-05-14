
var ft;
var im;
var castle;
var knife;
var lion;
var boat;
var prince;
var dagger;
var key

var map1;
var map2;
var map3;
var map4;
var map5;
var map6;



var pointer;

function preload(){
  ft = loadFont('OldEnglishFive.ttf');
  im = loadImage('001.jpg');
  castle = loadImage('003.svg');
  knife = loadImage('004.svg');
  lion=loadImage('005.svg');
  boat = loadImage('006.svg');
  prince = loadImage('007.png');
  dagger = loadImage('008.svg')
  key = loadImage('crown.svg')

  map1 = loadImage('004.jpg');
  map2 = loadImage('005.jpg');
  map3 = loadImage('006.jpg');
  map4 = loadImage('0001.jpg');
  map5 = loadImage('003_1.jpg');
  map6 = loadImage('Benin.jpg')
  pointer = loadImage('pointer.png');

}


function setup(){
	createCanvas(windowWidth, windowHeight);

  textAlign(CENTER, CENTER);
  textFont(ft, 18);
  frameRate(18);
  noCursor();
  smooth();

}
function draw(){
	background(0);

    fill(255);
    textSize(90);
    image(castle, width/2, height/2,windowWidth * 0.025,windowWidth * 0.025 )
    image(knife, width/2-50, height/2,windowWidth * 0.025,windowWidth * 0.025 )
    image(lion, width/2, height/2,windowWidth * 0.025,windowWidth * 0.025 )
    image(boat, width/2, height/2+50,windowWidth * 0.025,windowWidth * 0.025 )
    image(dagger, width/2, height/2-50,windowWidth * 0.025,windowWidth * 0.025 )
    image(key, width/2+50, height/2,windowWidth * 0.025,windowWidth * 0.025 )


  for ( i = 100; i< width; i+=500){
    push()
    translate(mouseX,mouseY)
    image(map1,frameCount % 100, 0, windowWidth * 0.25, windowHeight * 0.25);
    image(map2, frameCount % 300, map1.width,  windowWidth * 0.25, windowHeight * 0.25 );
    image(map3, frameCount % 500, 0,  windowWidth * 0.25, windowHeight * 0.25 );
    image(map4, frameCount % 700, 0,  windowWidth * 0.25, windowHeight * 0.25 );
    image(map5 ,frameCount % 900, 0,  windowWidth * 0.25, windowHeight * 0.25 );
    image(map6, frameCount % 1000, 0,  windowWidth * 0.25, windowHeight * 0.25 );
    pop()
  }

}

function mouseClicked(){
  cursor()
}
