//--SimpleShapes by Jingyi Zhao
//P5.js Skeetch for drawing


//Global Variables
var ellipseXPos= 0;
var ellipseYpos= 300;
var ellipseDist= 100;
// Setup code goes here
function setup() {
  createCanvas(1400, 800);
  print("Starting up Simple Shapes");
  rectMode(CENTER);
  ellipseMode(CENTER);

  print("Width=" + width);
  print("Height" + height);

//Set ellipse X pos
  ellipseXPos = width -300;
 }

// Draw code goes here
function draw() {
	//do stuff with i
	let i =5;
  background(123,104,238);

//DarkRed
  fill(139,0,0);
  stroke(173,216,230);
  strokeWeight(5);
  circle(300,700,400, 300, 100);

//Pale Green and light blue 
  fill(175,238,238);
  stroke(173,216,230);
  strokeWeight(20);
  circle(500,height/2,100, 30, 20);

//Aque and green
  fill(0,206,209);
  stroke(0,255,255);
  strokeWeight(30);
  circle(500,400,50, 30, 20);

//Triangle
  fill(0,255,0);
  triangle(width/2,height/4, 300, 75, 158, 220, 186, 75);
  

//Triangle Tomato
  fill(255,99,71);
  triangle(width/2,height/4, 300, 75, 158, 220, 186, 75);


 drawEllipses();
 drawRects();
}

function drawEllipses(){
	//Ellipse
   fill(255,255,0);
   ellipse(ellipseXPos,ellipseYpos,200,80);


   //Ellipse LightCoral
   fill(240,128,128);
   ellipse(ellipseXPos,height/2+300,200,50);
}

function drawRects(){
	// Dark blue and pink
  fill(25,25,112);
  stroke(255,182,193);
  strokeWeight(5);
  rect(width/2,height/2,55,255,120);

//Mini Peach
fill(255,218,185);
  stroke(255,182,193);
  strokeWeight(2);
  rect(width/2,height/2,55,25,20);

//White and Dark blue
  fill(248,248,255);
  stroke(0,0,128);
  strokeWeight(4);
  rect(100,height/2,155,255,20);

//Pink and red
  fill(216,191,216);
  stroke(220,20,60);
  strokeWeight(6);
  rect(200,height/2,100,250,20,15,55,55);
}