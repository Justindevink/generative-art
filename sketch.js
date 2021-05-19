//https://editor.p5js.org/chjno/sketches/S1wJDPdY-
//Bliksem lijn
var x;
var y;

var opacity = 0;

function setup() { 
  //Canvas grootte is browser grootte
  createCanvas(windowWidth,windowHeight);
  
  //Beginpunt van bliksem
  x = random(0, windowWidth);
  y = random(0, 50);
    
  //fps
  frameRate(50);
  
  //Bliksem effect
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = 'rgba(0, 30, 255, .8)'

  // Bliksem kleur en dikte
  stroke('rgba(255, 255, 255, .1)');
  strokeWeight(3);
  
  //Achtergrondkleur
  background(10, 4, 60);
  
  //Iedere 3s functie fade uitvoeren
  setInterval(fade, 1500);
}

//Wanneer muis is ingedrukt, start bliksem op de positie van de muis
function draw(startX = mouseX, startY = mouseY) {
  if (mouseIsPressed) {
      lightning();
  }
  
  //Wanneer de bliksem verticaal het scherm verlaat, begint deze opnieuw met een random shadowtint en reset de strokeweight en het opsplits moment
  if (y > height) {
      drawingContext.shadowColor = 'rgba(' + random(0, 200) + ',' + random(0, 150) + ',' + random(200, 255) + ',.8)'
    
    y = startY;
    x = startX;
    strokeWeight(3);
  }
  
  //Wanneer de bliksem horizontaal het scherm verlaat, begint deze opnieuw
  if (x > windowWidth) {
    x = startX;
  } 
}

//De bliksem functie die wordt getriggerd zodra de muis is ingedrukt
function lightning() {  

  //Bepaald enigzins random de richting van de volgende lijn
  var x2 = x + random(-100, 100);
  var y2 = y + random(-20, 200);

  line(x, y, x2, y2);
  x = x2;
  y = y2;

  //Veranderd de dikte van de bliksem
  if (y >= 100) {
    strokeWeight(1 + y / 100);
  }
}

//https://editor.p5js.org/kjhollen/sketches/r1MSxWcyf
//Iedere keer .1 opacity toevoegen
function fade() {
  opacity += .1;
  stroke('rgba(255, 255, 255,' + opacity + ')')
} 
