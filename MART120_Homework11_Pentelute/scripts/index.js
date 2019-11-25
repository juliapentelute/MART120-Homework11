    var x = 50;
    var y = 50;
    var diameter = 25;
    var mousex = 0;
    var mousey = 0;
    function setup() 
    {
      createCanvas(800, 600);
    }

    function draw() 
    {
      background(0);
      fill(66,24,88);
      circle(x, y, diameter);
    
      if (x >= 300) 
      {
        x = 50;
      }

      if (keyIsDown(UP_ARROW)) 
      {
        y += 10;
      } 
      else if (keyIsDown(DOWN_ARROW)) 
      {
        y -= 10;
      }

      if (y >= 300) 
      {
        y = 50;
      }

      if (diameter < 150) 
      {
        diameter += 1;
      } 
      else if (diameter >= 150) 
      {
        diameter = 25;
      }
      ellipse(mousex, mousey, 15, 50);
     
    }

   
    function keyPressed() 
    {
      if (keyIsDown(LEFT_ARROW)) 
      {
        x += 10;
      } 
      else if (keyIsDown(RIGHT_ARROW))
      {
        x -= 10;
      }
    }

 function mousePressed()
    {
       console.log("mouse pressed");
        fill(0,244,20)
        circle(mouseX, mouseY,45)
        
    }
    function mouseClicked() 
    { 
      mousex = mouseX;
      mousey = mouseY;
    
    }