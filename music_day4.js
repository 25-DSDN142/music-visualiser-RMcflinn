
function draw_one_frame(vocal, drum, bass, other, counter) {
background(163, 233, 240);
angleMode(DEGREES);

translate(width/2, height/2);



fill(209, 235, 237, 50);
stroke(250);
strokeWeight(2);

for(var n = 0; n < 8; n++){
    beginShape()
    for (var i = 1; i < 360; i++){
        var rad = map(sin(i * 4 + bass + frameCount), 2, 3, 100, 200)
        var x = rad * cos(i)
        var y = rad * sin(i)
        vertex(x, y)
    }
    endShape(CLOSE)
    rotate(bass + frameCount / 10)
} }

