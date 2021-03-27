class Rope{
    constructor(body1, body2, offsetX, offsetY)
    {
  
      this.offsetX = offsetX;
      this.offsetY = offsetY;
     var options={
       bodyA: body1,
       bodyB: body2,
       pointB:{x:this.offsetX, y:this.offsetY}
     }
     this.rope = Constraint.create(options);
     World.add(world, this.rope);
   }
  display(){
   var pointA = this.rope.bodyA.position;
   var pointB = this.rope.bodyB.position;
  
   strokeWeight(3);
   stroke("#8c8c8c");
  
   var Place1X = pointA.x;
   var Place1Y = pointA.y;
  
   var Place2X = pointB.x + this.offsetX;
   var Place2Y = pointB.y + this.offsetY;
   line(Place1X, Place1Y, Place2X, Place2Y); 
   }
  }