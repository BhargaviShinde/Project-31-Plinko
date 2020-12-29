class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true,
          friction: 3
      }
      
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height, options);
      World.add(world, this.body);
    }
    
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill(0,102,102); 
      rect(pos.x,pos.y,this.width,this.height);
    }
  }
