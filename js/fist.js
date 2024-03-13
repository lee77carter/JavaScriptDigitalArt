// Art using the quad function

function setup() {
    createCanvas(600, 600);
  }
  
  function draw() {
    background("rgb(230,124,230)");
    
  // left fist
    fill("brown")
    noStroke();
    quad(45,100,60,100,65,131,50,134);
    
    fill("brown")
    noStroke();
    quad(65,95,95,85,100,148,79,148);
    
    fill("brown")
    noStroke();
    quad(100,85,120,85,125,140,105,140);
    
    fill("brown")
    noStroke();
    quad(125,95,140,95,140,130,125,130);
    
  // thumb
    fill("brown");
    noStroke();
    rect(90,140,45,20,5);
    rect(118,140,25,35,3);
    
  // palm
    fill("brown")
    noStroke();
    quad(100,170,144,170,120,200,95,200);
    quad(40,170,90,170,90,200,58,200);
    
  // middle fist
  // fingers
    fill("#795548")
    noStroke();
    quad(195,288,232,265,243,345,232,350);
    
    fill("#795548")
    noStroke();
    quad(233,258,275,250,285,348,255,350);
  
    fill("#795548")
    noStroke();
    quad(280,255,315,250,320,327,290,340);
    
    fill("#795548")
    noStroke();
    quad(320,260,350,260,340,315,325,320);
    
  // thumb
    fill("#795548");
    noStroke();
    quad(300,347,360,330,370,370,305,375);
    
    fill("#795548");
    noStroke();
    quad(332,370,370,370,373,380,335,395);
    
  // palm
    fill("#795548");
    noStroke();
    quad(300,400,373,380,335,460,240,455);
    
    fill("#795548");
    noStroke();
    quad(215,418,277,417,240,453,230,450);
    
  // right fist
    fill("#c58c85");
    noStroke();
    quad(445,101,460,100,465,131,450,134);
    
    fill("#c58c85");
    noStroke();
    quad(465,95,495,85,500,155,479,155);
    
    fill("#c58c85");
    noStroke();
    quad(500,85,520,85,525,140,505,140);  
    
    fill("#c58c85");
    noStroke();
    quad(526,95,540,95,540,130,525,130);  
    
  // thumb
    fill("#c58c85");
    noStroke();
    rect(440,135,45,20,5);
    rect(440,135,25,35,3)
    
  // palm
    fill("#c58c85");
    noStroke();
    quad(500,160,544,160,530,200,500,200);
    
    
    console.log("x", mouseX, "y", mouseY);
  }