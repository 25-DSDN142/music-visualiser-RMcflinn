var cols = 11;
var rows = 11;
let driver = 1; 
let angle = 0;
let angle2 = 0;
let angle3 = 0;
let speed = 0.04
let speed2 = 0.02
let speed3 = 0.

let maxPoints = 0
let direction = 1;

let r = 150; 
let petals = 5 ;

// Array of colors for the grid to flash
let colourArray = [
  [255, 100, 100, 50], // Semi-transparent red, //
  [100, 100, 255, 50], // Semi-transparent blue
  [255, 255, 100, 50], // Semi-transparent yellow
  [255, 100, 255, 50]  // Semi-transparent magenta
];

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(13, 49);
  angleMode(DEGREES);
  translate(300, 300);
  noStroke();

    let squareWidth = width / cols;
    let squareHeight = height / rows;
    driver++;
  
  

let smoothedDrum = lerp(0, drum, 0.3); // Smooths rapid jumps
let scaleAmount = map(smoothedDrum, 0, 400, 0.75, 4);
scale(scaleAmount);


//-------------------------------------------------


for (let i = 0; i < petals; i++) {
  let offset = (360 / petals) * i; // evenly spaced offset
  let a = (angle + offset);  
  let x = r * cos(a);
  let y = r * sin(a);

  noStroke();
  fill(114, 87, 179, 200);

  // main outward line 
  push();
  translate(x, y);  
  rotate(-10 + a);  
  ellipse(-40, 140, 300, 5);
  pop();

  // high outside line
  push();
  translate(x, y);  
  rotate(-80 + a); 
  ellipse(-50, 120, 110, 5);
  pop();

  // main petal 
  push(); 
  translate(x, y);  
  rotate(10 + a);
  ellipse(0, 0, 150, 60);
  pop();

  // main petal detail
  push(); 
  translate(x, y);  
  rotate(-30 + a); 
  ellipse(0, 40, 130, 40);
  pop();

  // blue centre petal 
  push();
  translate(x, y);  
  rotate(70 + a); 
  // ellipse(-70, 40, 70, 70);
  pop();

  angle += 0.2;
}


//* MIDDLE LAYER ---------------------------------------------
push();
for (let i = 0; i < petals; i++) {
  let offset = (360 / petals) * i; 
  let a = (angle2 + offset) + 30;            
  let x = r * cos(a);
  let y = r * sin(a);

  fill(209, 82, 156, 80);

  // pink centre petal
  push();
  translate(x, y);  
  rotate(40 + a); 
  ellipse(-10, 40, 70, 70);
  pop();

  // centre hexagon lines 
  push();
  translate(x, y);  
  rotate(0 + a); 
  ellipse(-30, 0, 140, 5);
  pop();
//------------------------//
  fill(235, 192, 94, 150);

  // middle petal
  push();
  translate(x, y);  
  rotate(0 + a); 
  ellipse(-70, 0, 120, 65);
  pop();

  // outer small dot
  push();
  translate(x, y);  
  rotate(0 + a); 
  ellipse(30, 20, 20, 5);
  pop();

  // yellow lines
  push();
  translate(x, y);  
  rotate(-30 + a); 
  ellipse(0, 120, 110, 10);
  pop();

  angle2 += (speed3 + other/ 400);


  //* INNER LAYER --------------------------------------------
  for (let i = 0; i < petals; i++) {
    let offset = (360 / petals) * i; 
    let a = (angle3 + offset) + 60;            
    let x = r * cos(a);
    let y = r * sin(a);

    fill(240, 211, 146, 100);

    // long centre lines
    push();
    translate(x, y);  
    rotate(10 + a); 
    ellipse(-70, 40, 110, 45);
    pop();

    // centre top line
    push(); 
    translate(x, y);  
    rotate(-10 + a); 
    ellipse(-90, 40, 85, 5);
    pop();

    // centre outer small dots 
    push();
    translate(x, y);  
    rotate(-40 + a); 
    ellipse(-170, 30, 10, 10);
    pop();

    angle3 += (speed2 + other/ 1500);
  }


  //* INNER MOST LAYER ---------------------------------------
  for (let i = 0; i < petals; i++) {
    let offset = (360 / petals) * i; 
    let a = (angle + offset) + 60;            
    let x = r * cos(a);
    let y = r * sin(a);

    fill(259, 150);

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









//spiral-------------------------------------

push();
  strokeWeight(10);
  stroke(240, 211, 146, 1);
  
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

  maxPoints += 0.5 * direction;
  if (maxPoints > 2000) {
    maxPoints = 2000;
    direction = -1; // inward
  } else if (maxPoints < 0) {
    maxPoints = 0;
    direction = 1; // outward
  }

  // i want to map the spiral going in/ out to the bars of the song 
//-----------------------------------------------------



  push();
  resetMatrix(); // Reset transformations to draw grid in canvas coordinates
  let flashThreshold = map(vocal, 0, 60, 0.05, 0.02); // Adjusted for slower flashing

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * squareWidth;
      let y = j * squareHeight;

      // Random colors based on flashThreshold
      if (random() < flashThreshold) {
        let colorIndex = floor(random(colourArray.length));
        fill(colourArray[colorIndex]);
      } else {
        fill(8, 13, 49, 0);}

      noStroke();
      rect(x, y, squareWidth, squareHeight);
    }
  }
  pop();
}




















































    

    
//whiskers-------------------------------------------------





/*
    for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * squareWidth;
      let y = j * squareHeight;

      // Each square can be colored based on music input
      let c = color(50, 50, 50); // default neutral colour

      // Example: map "drum" energy to red intensity
      let r = map(250, 119, 170, drum);
      let g = map(250, 236, 119, vocal);
      let b = map(250, 156, 140, bass );

      // Add randomness (so not all squares react the same way)
      if (random() < 0.5) { // 5% chance this frame
        c = color(r);


       fill(255, 10); // semi-transparent overlay
        rect(x, y, squareWidth, squareHeight);

// Add noisy speckles
for (let n = 0; n < 100; n++) {
  let px = x + random(squareWidth);
  let py = y + random(squareHeight);
  stroke(r, g, b, 100); // use mapped colours but transparent
  point(px, py);
}


      fill(c);
      noStroke();
      rect(x, y, squareWidth, squareHeight);
    }
  }
    }




  //-----------------------------------------

  /*stroke(1);
  strokeWeight(2);
  noFill();
  for (var k = 0; k <= cols; k++) {
    line(k * squareWidth, 0, k * squareWidth, height);
  }
  
  
  for (var j = 0; j <= rows; j++) {
    line(0, j * squareHeight, width, j * squareHeight);
  }
  
  */ 


//-----------------------------------------------------------
/*
if(counter > 25){
push();
   seconds = counter / 60
    // if(counter >=50)

    fill(5, 235, 237, 50);
    stroke(250);
    strokeWeight(2);

    for(var i = 0; i < 5; i++){
        beginShape()
         for (var i = 0; i < 360; i++){
        var rad = map(sin(i * (seconds + other)), 3, 5, 100, 200)
        var c = rad * cos(i)
        var k = rad * sin(i)
        vertex(c, k)
    }
    endShape(CLOSE)
   rotate((seconds + other))
} 
pop();
}*/

}
