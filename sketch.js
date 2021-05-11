//https://editor.p5js.org/chjno/sketches/S1wJDPdY-
var x;
var y;

let c1,c2;

function setup() { 
  createCanvas(windowWidth,windowHeight);
  
  x = random(0, windowWidth);
  y = random(0, 50);
  
  c1 = color(9, 17, 61);
  c2 = color(20, 40, 153);
  
  frameRate(50);
  
  //Bliksem opsplitsen, werkt niet
  // lightning = new lightning();
  
  // Gradient werkt niet door function lightning
  // for(let y=0; y<height; y++){
  //   n = map(y,0,height,0,1);
  //   let newc = lerpColor(c1,c2,n);
  //   stroke(newc);
  //   line(0,y,width, y);
}

function draw() {
  if (mouseIsPressed) {
    lightning() //mss hier iets van + lightning of && lightingTwo ofzo...
  }
  
  if (y > height) {
    y = 0;
  }
  
  if (x > windowWidth) {
    x = 0;
  }
}

function lightning() {
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = 'rgba(0, 30, 255, .8)'
  //Bliksem vervagen, maakt alles heel traag..
  // filter(BLUR, 2);
  // drawingContext.opacity = .4;
 
  var x2 = x + int(random(-100, 100));
  var y2 = y + int(random(-20, 200));

  stroke(255);
  strokeWeight(3);
  fill(255);
  line(x,y,x2,y2);
  x = x2;
  y = y2;
  
  //bliksem splitsen, werkt niet
  // if (length > 1) {
  //   push()
  //       rotate(PI / 4)
  //       branch(length * 0.75)
  //   pop()
  //   push()
  //       rotate(-PI / 4)
  //       branch(length * 0.75)
  //   pop()
    
  // StrokeWeight veranderen, werkt niet
  // if(strokeWeight => 3){
  //   strokeWeight = strokeWeight - (int(1));
  // }
}

//Bliksem opsplitsen, werkt niet
// function lightningTwo() { 
//   var x3 = x2 + int(random(-100, 100));
//   var y3 = y2 + int(random(-20, 200));
  
//   stroke(255);
//   strokeWeight(3);
//   fill(255);
//   line(x2,y2,x3,y3);
//   x2 = x3;
//   y2 = y3;
// }

