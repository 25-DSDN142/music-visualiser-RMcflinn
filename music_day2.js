var cols = 20;
var rows = 20;
let driver = 1; 
let angle = 0;
let r = 150; 
let petals = 6;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(163, 233, 240);
    //let squareWidth = width / cols;
   // let squareHeight = height / rows;
    //driver++



   //angleMode(DEGREES);
   stroke(255);
   strokeWeight(4);
    noFill();
    translate(300, 300);
    circle(0, 0, r * 2);

    strokeWeight(32);
    stroke(252, 238, 35);
    let x = r * cos(angle);
    let y = r * sin(angle);



 // loop through petals
  for (let i = 0; i < petals; i++) {
    let offset = (360 / petals) * i;  // evenly spaced offset
    let a = angle + offset;              // angle for this ellipse
    let x = r * cos(a);
    let y = r * sin(a);

    push();
    fill(252, 238, 35, 150);
    noStroke();
    translate(x, y);  
    rotate(10 + a); // tangent to circle (facing inward)
    ellipse(0, 0, 150, 20); 
    pop();
  }

  



  

 noStroke();
fill(252, 238, 35, 180, 50);
for (let i = 0; i < 5; i++) {
  let offset = i * 15;
  let ox = r * cos(angle - offset * 0.5);
  let oy = r * sin(angle - offset * 0.5);
  ellipse(ox, oy, 20 - i*3, 20 - i*3);
}



    //point(x, y);

    angle += 0.5; //speed of rotation + vocal input
     //speed of expansion + bass input




}





















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


*/




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
   seconds = counter / 62
    // if(counter >=50){
    translate(width/2, height/2);

    angleMode(DEGREES);

    fill(5, 235, 237, 50);
    stroke(250);
    strokeWeight(2);

    for(var n = 0; n < 5; n++){
        beginShape()
         for (var r = 0; r < 360; r++){
        var rad = map(sin(r * (seconds + other)), 3, 5, 100, 200)
        var x = rad * cos(r)
        var y = rad * sin(r)
        vertex(x, y)
    }
    endShape(CLOSE)
   rotate((seconds + other))
} 
pop();
}

*/
