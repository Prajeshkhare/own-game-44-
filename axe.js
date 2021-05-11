class axe{
    constructor(x,y,width, height){
      var options ={
          restitution: 0.2,
          density: 1,
          friction: 1 
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("JS/axe.png");
      this.smokeImage = loadImage("JS/smoke.png"); 
      //this.trajectory = [];
      World.add(world, this.body);
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      

      // if(this.body.velocity.x > 10 && this.body.position.x < 900){
      //   var position = [this.body.position.x, this.body.position.y];
      //   this.trajectory.push(position);
      // }
    
  
      // for(var i=0; i<this.trajectory.length; i++){
      //   image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
      // }
      pop();
    }
}