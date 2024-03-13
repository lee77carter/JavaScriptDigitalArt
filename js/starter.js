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
    background("orange");
    
    // Rectangle background
    fill("brown");
    noStroke();
    rect(100,0,40,100);
    
    // Circle - centerpiece
    fill("gold")
    stroke("darkorange"); // color
    strokeWeight(4); // border width
    ellipse(200,200,100,100);
  
    // White Ovals - 4
    fill("darkblue")
    noStroke(); 
    ellipse(200,100,50,75);

    fill("darkgreen")
    noStroke(); 
    ellipse(100,200,75,50);

    fill("purple")
    stroke("white"); // color
    strokeWeight(1); // border width
    ellipse(100,280,160,19);

    // Rectangle foreground
    fill("lightorange");
    noStroke();
    rect(250,50,120,50);
    
    fill("black")
    noStroke(); 
    ellipse(200,300,50,75);
      
    fill("tan")
    stroke("blue"); // color
    strokeWeight(2); // border width
    ellipse(300,200,75,50);
    
    // Triangle 
    fill("gray");
    stroke("skyblue");
    strokeWeight(3);
    triangle(200,200,150,100,250,100);
    
    // Rectangle foreground
    fill("lightblue");
    stroke("brown");
    strokeWeight(2);
    rect(200,350,160,80);
    
  }