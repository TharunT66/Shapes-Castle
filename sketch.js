function setup() {
  createCanvas(700, 500);
}

function draw() {
  background("black");
  rect(360,150,100,2000);
  fill("red");
  rect(470,200,100,1500);
  fill("orange");
  rect(580,250,100,1000);
  fill("yellow");
  rect(260,150,100,2000);
  fill("green");
  rect(140,200,100,1500);
  fill("cyan");
  rect(30,250,100,1000);
  fill("blue");
  triangle(20,250,80,200,130,250);
  fill("violet");
  triangle(140,200,190,150,240,200);
  fill("purple");
  triangle(260,150,360,50,460,150);
  fill("magenta");
  triangle(570,200,520,150,470,200);
  fill("cyan");  
  triangle(680,250,630,200,580,250);
  fill("green");  
  line(360,50,360,0);
  stroke("orange");
  strokeWeight(4);
}