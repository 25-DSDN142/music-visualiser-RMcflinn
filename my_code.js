let cols =10;
let rows = 10;
let driver = 1;
let angle = 0;
let angle2 = 0;
let angle3 = 0;
let speed = 0.04;
let speed2 = 0.02;
let speed3 = 0;
let maxPoints = 0;
let direction = 1;
let r = 150;
let petals = 5;

let colourArray = [
  [235, 52, 42, 80],   // Red
  [255, 255, 100, 80], // Yellow
  [255, 100, 255, 80]  // Magenta
];

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0, 49); 
  angleMode(DEGREES);
  translate(300, 300); 
  noStroke();

  // grid dimensions
  let squareWidth = width / cols;
  let squareHeight = height / rows;
  driver++;

 //drum input moves flower motif in/ out
  let smoothedDrum = lerp(0, drum, 0.3);
  let scaleAmount = map(smoothedDrum, 0, 350, 0.75, 4);
  scale(scaleAmount);

  // --- Outer Petal Layer ---
  for (let i = 0; i < petals; i++) {
    let offset = (360 / petals) * i; // Evenly spaced petals
    let a = angle + offset;
    let x = r * cos(a);
    let y = r * sin(a);

    fill(156, 141, 252, 210); 

    // Main outward line
    push();
    translate(x, y);
    rotate(-10 + a);
    ellipse(-40, 140, 300, 5);
    pop();

    // High outside line
    push();
    translate(x, y);
    rotate(-80 + a);
    ellipse(-50, 120, 110, 5);
    pop();

    // Main petal
    push();
    translate(x, y);
    rotate(10 + a);
    ellipse(0, 0, 150, 60);
    pop();

    // Main petal detail
    push();
    translate(x, y);
    rotate(-30 + a);
    ellipse(0, 40, 130, 40);
    pop();

    angle += 0.2; 
  }

  // --- Middle Petal Layer ---
  push();
  for (let i = 0; i < petals; i++) {
    let offset = (360 / petals) * i;
    let a = angle2 + offset + 30;
    let x = r * cos(a);
    let y = r * sin(a);

    fill(252, 144, 214, 80);

    // Pink center petal
    push();
    translate(x, y);
    rotate(40 + a);
    ellipse(-10, 40, 70, 70);
    pop();

    // Center hexagon lines
    push();
    translate(x, y);
    rotate(0 + a);
    ellipse(-30, 0, 140, 5);
    pop();

    fill(235, 192, 94, 150);

    // Middle petal
    push();
    translate(x, y);
    rotate(0 + a);
    ellipse(-70, 0, 120, 65);
    pop();

    // Outer small dot
    push();
    translate(x, y);
    rotate(0 + a);
    ellipse(30, 20, 20, 5);
    pop();

    // Yellow lines
    push();
    translate(x, y);
    rotate(-30 + a);
    ellipse(0, 120, 110, 10);
    pop();

    angle2 += (speed3 + other / 400); 
  }

  // --- Inner Petal Layer ---
  for (let i = 0; i < petals; i++) {
    let offset = (360 / petals) * i;
    let a = angle3 + offset + 60;
    let x = r * cos(a);
    let y = r * sin(a);

    fill(252, 234, 181, 200);

    // Long center lines
    push();
    translate(x, y);
    rotate(10 + a);
    ellipse(-70, 40, 110, 45);
    pop();

    // Center top line
    push();
    translate(x, y);
    rotate(-10 + a);
    ellipse(-90, 40, 85, 5);
    pop();

    // Center outer small dots
    push();
    translate(x, y);
    rotate(-40 + a);
    ellipse(-170, 30, 10, 10);
    pop();

    angle3 += (speed2 + other / 1500);
  }

  // --- Innermost Petal Layer ---
  for (let i = 0; i < petals; i++) {
    let offset = (360 / petals) * i;
    let a = angle + offset + 60;
    let x = r * cos(a);
    let y = r * sin(a);

    fill(250, 150); 

    push();
    translate(x, y);
    rotate(0 + a);
    ellipse(-170, 20, 40, 25);
    pop();

    push();
    translate(x, y);
    rotate(0 + a);
    ellipse(-80, 40, 10, 10);
    pop();
  }
  pop();

  // --- Spiral ---
  push();
    strokeWeight(13);
    stroke(250, 230, 226, 4);

    let spiralRadius = 0; // Start at center
    let spiralAngle = 0; // Starting angle
    let rotation = 0; // Offset

    for (let i = 0; i < maxPoints; i++) {
      let x = spiralRadius * cos(spiralAngle - rotation);
      let y = spiralRadius * sin(spiralAngle - rotation);
      point(x, y);

      spiralRadius += 0.3;
      spiralAngle += 0.7;
    }
  pop();
    
  if (counter > 450) {
     maxPoints += 3 * direction;
    if (maxPoints > 2000) {
      maxPoints = 2000;
      direction = -1; // Inward
    } else if (maxPoints < 0) {
      maxPoints = 0;
      direction = 1; // Outward
    }
    }
  
  

  // --- Grid ---
  push();
  resetMatrix();
  let flashThreshold = map(vocal, 0, 50, 0.07, 0.03);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * squareWidth;
      let y = j * squareHeight;

      if (random() < flashThreshold) {
        let colorIndex = floor(random(colourArray.length));
        fill(colourArray[colorIndex]); 
      } else {
        fill(8, 13, 49, 0); 
      }

      noStroke();
      rect(x, y, squareWidth, squareHeight);
    }
  }
  pop();
}


















































    

    

