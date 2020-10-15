class Ball{
    constructor(x,y,width,height) {
        var options = {
            density:1.2,
            restitution:2,
            friction:0.3


        }
        this.body = Bodies.circle(450 , 350 ,20 ,options);
        
        
        World.add(world, this.body);

        
      }
      keyPressed(){
        if(keyCode === UP_ARROW){
           Matter.Body.applyForce(ball.body,ball.body.position,{x:-10,y:10});
           console.log("the ball is shot");
           }
          
      }


      display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(2);
        fill("blue")
       ellipse(0,0,70,70);
       pop();
        
        
        
     }
}