//https://editor.p5js.org/chjno/sketches/S1wJDPdY-

var x;
var y;

function setup() { 
  createCanvas(windowWidth,windowHeight);
  background(0);
  x = random(0, windowWidth);
  y = random(0, 50);
}

function draw() { 

  if (mouseIsPressed){
  var x2 = x + int(random(-100, 100));
  var y2 = y + int(random(-20, 200));
  stroke(255);
  line(x,y,x2,y2);
  x = x2;
  y = y2;
  }
}


// function draw() { 

//   if (mouseIsPressed){
//   var x2 = x + int(noise(+= 10));
//   var y2 = y + int(noise(+= 10));
//   stroke(255);
//   line(x,y,x2,y2);
//   x = x2;
//   y = y2;
//   }
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}