class GroundF {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(0,102,102);
      rect(pos.x, pos.y, this.width, this.height);
    }
  }