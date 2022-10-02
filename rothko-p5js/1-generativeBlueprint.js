let r, g, b;

function setup() {
  createCanvas(500, 500);
  
  paint()
}

function paint() {
  // -- Define the designs
  let designs = {
    1: [paintBackground, paintSquare], // design1 has 2 components
    2: [paintBackground, paintEllipse],
  }

  // -- Define the color schemes
  let colorSchemes = {
      1: [ 
          [100, 0, 0], // rgb of color1
          [0, 100, 0], // rgb of color2
          [0, 0, 100], // rgb of color n
         ],
      2: [ 
          [200, 200, 0], 
          [0, 200, 200], 
          [200, 0, 200], 
        ]
  }
  
  // -- Pick a random design and colorScheme
  const i = int(random(1, Object.keys(designs).length + 1)); // ranInt x, y-1 incl
  const j = int(random(1, Object.keys(designs).length + 1));
  let design = designs[i];
  let colorScheme = colorSchemes[j]
  
  // Loop through the components of each design
  let count = 0;
  for (let component of design) {
    // for each component select a color from the color scheme
    let curColor = colorScheme[count]
    console.log('curColor: ', curColor)
    
    r = curColor[0]
    g = curColor[1]
    b = curColor[2]
    component(r,g,b)
    
    count += 1
  }
}

// =========== component functions =================
function paintBackground(color1, color2, color3) {
  fill(color1,color2,color3, 255)
  rect(0,0,500,500)
}

function paintSquare(color1, color2, color3) {
  fill(color1,color2,color3, 255)
  rect(100,100,300,100)
}

function paintEllipse(color1, color2, color3) {
  fill(color1,color2,color3, 255)
  ellipse(200, 200, 100, 200);
}
