// Environmental Shape Drawing Using Shapes

function setup() {
    createCanvas(400, 400); //WxH
  }
  
  // blue background
  function draw() {
    background("skyblue");
   
  // centerline
    stroke("beige");
    strokeWeight(2);
    // line(x1,y1,x2,y2)
    line(200,0,200,height);
      
  // sun
    fill("yellow");
    stroke("orange")
    strokeWeight(2);
    ellipse(100,100,100,100);
    
  // clouds
    fill("white");
    noStroke();
    ellipse(60,200,100,50);
    
    fill("lightgray");
    noStroke();
    ellipse(100,230,100,80);
    
    fill("gray");
    noStroke();
    ellipse(140,200,40,50);
    
  // green background
    fill("lightgreen");
    noStroke();
    rect(200,0,200,400);
    
  // message
    const airMessage = "Nurturing Nature is Fun!";
    fill("white");
    text(airMessage, 10,10,70,80);
    
  // treetop
    fill("green");
    noStroke();
    triangle(300,200,250,250,350,250);
    
    fill("green");
    noStroke();
    triangle(300,175,250,225,350,225);
    
    fill("green");
    noStroke();
    triangle(300,150,250,200,350,200);
    
    fill("green");
    noStroke();
    triangle(300,125,250,175,350,175);
    
  // trunk
   fill("brown");
   stroke("rgb(114,26,26)");
   strokeWeight(2);  rect(290,250,20,150,2);
    
  // grass
    fill("green");
    noStroke();
    rect(200,390,200,10);
  
  }