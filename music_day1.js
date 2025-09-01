/*function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(25, 30, 100); 

  // Map drum to a visible size range 
  let sunSize = map(drum, 0, 100, 20, 400); 

  // Draw the sun =
  fill(255, 200, 0); 
  noStroke(); 
  ellipse(width / 2, height / 2, sunSize, sunSize); // Center of canvas

  // 3. DEBUG: Check if drum is working 
  console.log("Drum value:", drum, "Mapped size:", sunSize);
}

*/

//-------Class-------------------------------------
/*
 background(60)
 fill(255, 255, 0)
 ellipse(300, sunY, 0);

 sunY = sunY +1;

 if(sunY > 1000){
  sunY = 0 
 }
 console.log(sunY)
 

 sunSize = drum //you can do stuff like drum*4 
 // min and max values/ mapping can also work here 


//sunSize = map(drum, 0, 100, 50, 400) 

//fill()
//ellipse(300, sunY, sunSize)

*/

/*  --------Videos-----------
Mapping: 
var col = 0;  0= black 
background(col)
col = mouseX   - maps only 250 for white, doesnt span across the whole grid

map(value(mouseX) , min(old range), maxO, min(new), maxN)
col = map(mouseX, 0, 600, 0, 250)

red = map(mouseX, 0, 600, 0, 255); - you can map the red value only 
(255, 0);



Animation:

var Xmove = 1; - outside of loop so it doesnt 

Function draw(){
 background(170); - so that it resets every time, this gets rid of tracing

 ellipse(1 + Xmove, y, Ex, Ey) - moving to 60 porisition 

 Xmove = Xmove + 1;

 if(Xmove > 200){
  Xmmove = 0;   -creates a loop instead of cutting off at end of page
 }

*/

