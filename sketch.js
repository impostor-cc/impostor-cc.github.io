//var ar = [10, 50, 100, 12, 56, 88, 500, 466];
var arx = [];
var ary = [];
var amount = 100;
var seed = 10;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  noCursor();
  //strokeWeight(10);
  strokeCap(ROUND);
  angleMode(DEGREES);
  amount = (windowWidth+windowHeight)/50;
  //randomSeed(seed);

  //make array of random x and y position
  for (var i = 0; i < amount; i++) {
  	arx[i] = random(25,width-25);
	ary[i] = random(25,height-25);
  }
  print (arx[1] + ' and ' + ary[1]);
}

function arrow() {
  // make arrow shape
	strokeWeight(12);
	line(0,-20,0,0);
	line(-20,0,0,0);
	//rotate(-45);
}
function draw() {
  // put drawing code here
  background(204);
  // for loop based on array length
	for (var i = 0; i < arx.length; i++) {
		translate(arx[i],ary[i]);
		a = atan2(mouseY - ary[i], mouseX - arx[i])-45;
		rotate(a);
		arrow();
		rotate(-a);
		translate(-arx[i],-ary[i]);
  	}
  	strokeWeight(0);
  	fill(210,0,0);
  	ellipse(mouseX,mouseY,40,40)

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
function mousePressed() {
	//seed = random(0,10);
   	redraw();
}