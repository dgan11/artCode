let r, g, b, x, y;
let width = 600;
let height = 800;
let margin = 50;
//test 1
//test 3

let palletes = {
  1: { 
    bg: {r:228, g:122, b:80},    // light orange
    "color1": {r:230, g:71, b:12}, // dark orange
    "color2": {r:226, g:43, b:27}, // blood orange
  },
  2: {
    "bg": {r:228, g:122, b:80},    // light orange
    "color1": {r:230, g:71, b:12}, // dark orange
    "color2": {r:226, g:43, b:27}, // blood orange
  }
}

let designs = {
  1: [paintBackground(), paintTopTwoThirds(),  paintBottomThird()]
}

function setup() {
  print(palletes);
  print(palletes[1].bg);
  createCanvas(width, height);
  // background(228,122,80,255)
  paintBackground()

  rectMode(CENTER);
  blendMode(BLEND);

  // rectangle 1 
  paintTopTwoThirds()
  
  // rectangle 2
  paintBottomThird()
}

function paintBackground() {
  for (i = 0; i < random(20000,30000); i++) {
      x = random(-width/10, width);
      y = random(-width/10, height);
      brushWidth = random(20,300);
      brushHeight = random(20,300)
      brushRoundness = random(0, 5)
      brushOpacity = random(3,10)
      noStroke();
      fill(251,151,109, brushOpacity)
      // fill(colorPallete[0])
      rect(x, y, brushWidth, brushHeight, brushRoundness);
    }
}

function paintTopTwoThirds() {
  	for (i = 0; i < random(30000,40000); i++) {
      x = random(margin, width - margin);
      y = random(margin, height * 2/3 - margin);
      brushWidth = random(10,100);
      brushHeight = random(5,100)
      brushRoundness = random(0, 50)
      brushOpacity = random(1,5)
      noStroke();
      // fill(r,g,b,brushOpacity)
      fill(230,71,12, brushOpacity)
      rect(x, y, brushWidth, brushHeight, brushRoundness);
    }
}

function paintBottomThird() {
    // selectRandomColor();
  	for (i = 0; i < random(30000,40000); i++) {
      x = random(margin, width - margin);
      y = random(height * 7/10 - margin, height - margin/2);
      brushWidth = random(10,100);
      brushHeight = random(5,40)
      brushRoundness = random(0, 50)
      brushOpacity = random(1,5)
      noStroke();
      // fill(r,g,b,brushOpacity)
      fill(226,43,27, brushOpacity)
      rect(x, y, brushWidth, brushHeight, brushRoundness);
    }
}

