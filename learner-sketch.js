// Learning to draw with JavaScript //
    // Positions: (x,y,w,h) 
    // Triangle:(x1,y1,x2,y2,x3,y3)
    //   centered/middle

// Canvas
function setup() {
    createCanvas(400, 400);
  }
  // Backbround and Art
  function draw() {
    background("pink");
    
    // Rectangle background
    fill("purple");
    noStroke();
    rect(100,0,40,100);
    
    // Circle - centerpiece
    fill("gold")
    stroke("yellow"); // color
    strokeWeight(4); // border width
    ellipse(200,200,100,100);
  
    // White Ovals - 3
    fill("white")
    noStroke(); 
    ellipse(100,200,75,50);
    
    fill("white")
    noStroke(); 
    ellipse(200,300,50,75);
    
  
    fill("white")
    noStroke(); 
    ellipse(300,200,75,50);
    
    // Triangle 
    fill("yellow");
    stroke("gold");
    strokeWeight(3);
    triangle(200,200,150,100,250,100);
    
    // Rectangle foreground
    fill("lightgreen");
    noStroke();
    rect(200,300,160,80);
    
  }