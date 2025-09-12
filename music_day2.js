var cols = 20;
var rows = 20;
let driver = 1; 
let angle = 0;
let r = 150; 
let petals = 6;

function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(147, 162, 230);
    let squareWidth = width / cols;
    let squareHeight = height / rows;
    driver++

   angleMode(DEGREES);
   stroke(255);
   strokeWeight(0.1);
    noFill();
    translate(300, 300);
    circle(0, 0, r * 2);

    strokeWeight(32);
    let x = r * cos(angle);
    let y = r * sin(angle);

//-------------------------------------------------



    for (let i = 0; i < petals; i++) {
    let offset = (360 / petals) * i; // evenly spaced offset
    let a = (angle + offset);     // angle for this ellipse 
    let x = r * cos(a);
    let y = r * sin(a);

    noStroke();
    fill(106, 91, 235, 100);

    push();
    translate(x, y);  
    rotate(-10 + a);  // tangent to circle (facing inward)
    ellipse(-40, 140, 300, 5);
    pop();

    push();
    translate(x, y);  
    rotate(10 + a);
    ellipse(0, 0, 150, 30);

    pop();
  

    push();
    translate(x, y);  
    rotate(-30 + a); 
    ellipse(0, 40, 100, 30);
    pop();

   }
   
for (let i = 0; i < petals; i++) {
    let offset = (360 / petals) * i; 
    let a = (angle + offset) + 30;            
    let x = r * cos(a);
    let y = r * sin(a);
    noStroke();
    fill(106, 91, 235, 70);

    push();
    translate(x, y);  
    rotate(10 + a); 
    ellipse(-50, 0, 90, 65);
    pop();

    push();
    translate(x, y);  
    rotate(10 + a); 
    ellipse( 30, 20, 10, 5);
    pop();

    push();
    translate(x, y);  
    rotate(-110 + a); 
    ellipse( 30, 120, 110, 10);
    pop();

    push();
    translate(x, y);  
    rotate(-110 + a); 
    ellipse( 30, 120, 110, 10);
    pop();

   }



   for (let i = 0; i < petals; i++) {
    let offset = (360 / petals) * i; 
    let a = (angle + offset) + 30;            
    let x = r * cos(a);
    let y = r * sin(a);

    noStroke();
    fill(189, 83, 145, 80);
  
    push(); 
    rotate(10 + a); 
    ellipse(-30, 40, 140, 5);
    pop();

    push();
    translate(x, y);  
    rotate(10 + a); 
    ellipse(-30, 40, 80, 50);
    pop();
 

  for (let i = 0; i < petals; i++) {
    let offset = (360 / petals) * i; 
    let a = (angle + offset) + 60;            
    let x = r * cos(a);
    let y = r * sin(a);

    

    fill(141, 144, 242, 130);

    push();
    translate(x, y);  
    rotate(10 + a); 
    ellipse(-80, 40, 120, 10);
    pop();

     push();
    translate(x, y);  
    rotate(-10 + a); 
    ellipse(-80, 40, 60, 15);
    pop();

      push();
    translate(x, y);  
    rotate(-10 + a); 
    ellipse(-170, 30, 10, 10);
    pop();

  }
   for (let i = 0; i < petals; i++) {
    let offset = (360 / petals) * i; 
    let a = (angle + offset) + 60;            
    let x = r * cos(a);
    let y = r * sin(a);

    fill(189, 83, 145, 30);

    push();
    translate(x, y);  
    rotate(0 + a); 
    ellipse(-80, 40, 15, 15);
    pop();

    push();
    translate(x, y);  
    rotate(0 + a); 
    ellipse(-170, 20, 40, 25);
    pop();







   }

  }

/* for (let i = 0; i < petals2; i++) {
    let offset = (360 / petals2) * i; 
    let a = (angle + offset) + 30;            
    let x = r * cos(a);
    let y = r * sin(a);

    push();
    noStroke();
    fill(106, 91, 235, 70);
    translate(x, y);  
    rotate(40 + a); 
    ellipse(40, 0, 100, 20);
    pop();

   }
    */

    
//whiskers-------------------------------------------------
/*

for (let i = 0; i < petals2; i++) {
    let offset = (360 / petals2) * i; 
    let a = (angle + offset) + 20;            
    let x = r * cos(a);
    let y = r * sin(a);

    push();
    noStroke();
    fill(106, 91, 235, 70);
    translate(x, y);  
    rotate(20 + a); // tangent to circle (facing inward)
    ellipse(0, 40, 100, 10);
    pop();

   }

   for (let i = 0; i < petals2; i++) {
    let offset = (360 / petals2) * i; 
    let a = (angle + offset) + 10;            
    let x = r * cos(a);
    let y = r * sin(a);

    push();
    noStroke();
    fill(106, 91, 235, 70);
    translate(x, y);  
    rotate(20 + a); // tangent to circle (facing inward)
    ellipse(0, 40, 100, 10);
    pop();

   }

*/








  




/*

 noStroke();
fill(252, 150);
for (let i = 0; i < 10; i++) {
  let offset = i * 15;
  let ox = r * cos(angle - offset * 0.5);
  let oy = r * sin(angle - offset * 0.5);
  ellipse(ox, oy, 20 - i*3, 20 - i*3);
}
*/


    //point(x, y);

    angle += 0; //speed of rotation + vocal input
     //speed of expansion + bass input






























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
    // if(counter >=50){
    translate(width/2, height/2);

    angleMode(DEGREES);

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
}
*/
}
