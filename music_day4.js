let cols = 5;
let rows = 5;
let squareWidth, squareHeight;

// This replaces draw()
function draw_one_frame(vocal, drum, bass, other, counter) {

    console.log(int(counter));
  let driver = counter; 
  push();
  //createCanvas(600, 600);
  background(163, 233, 240);
  squareWidth = width / cols;
  squareHeight = height / rows;

  // Draw grid
  stroke(255, 150);
  strokeWeight(2);
  noFill();
  randomHue1 = random(0, 255,);

  for (let i = 0; i <= cols; i++) {
    line(i * squareWidth, 0, i * squareWidth, height);}
  for (let j = 0; j <= rows; j++) {
    line(0, j * squareHeight, width, j * squareHeight);}

//twirly thing--------------------------------------------------------------------



    // if(counter >=50){
    translate(width/2, height/2);

    angleMode(DEGREES);

    fill(209, 235, 237, 50);
    stroke(250);
    strokeWeight(2);

    for(var n = 0; n < 5; n++){
        beginShape()
         for (var i = 2; i < 360; i++){
        var rad = map(sin(i * (4 + driver)), -1, 3, 10, 200)
        var x = rad * cos(i)
        var y = rad * sin(i)
        vertex(x, y)
    }
    endShape(CLOSE)
   rotate(driver / 10)
} 
pop();
    }   //different squares change color based on sound levels

// }


/*


*/  



/*  for(let c = 0; c < 100; c++) {
    let r = random()
      noStroke();
      fill(255, 0, 0, 150);
      rect(2 * squareWidth, 2 * squareHeight, squareWidth, squareHeight);

    let alphaValue = map(bass, 0, 300, 0, transparency);
    fill(255, 0, 0, alphaValue);
    rect(2 * squareWidth, 2 * squareHeight, squareWidth, squareHeight);

*/

