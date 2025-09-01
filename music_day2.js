function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB,100);
  background(255);
  rectMode(CENTER);
  strokeWeight(9);
  stroke( vocal, 80, 80);

  var vocalMap = map(vocal, 0, 100, 5, 70);
  var lengthOfLine = 300;
  var LineStart = 100; 
  var lineEnd = LineStart + lengthOfLine;
  stroke(vocalMap, 80, 80)
  
  //while( drumMap > 50){}
  for(var i =1; i <= vocalMap; i ++ ){  
    var lineStep = i*10;
    line(LineStart, lineStep, lineEnd, lineStep);


  }



}

