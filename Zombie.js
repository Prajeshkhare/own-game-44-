class Zombie{
    constructor(x,y,width,height){

        var option = {
        restiution: 0.5,
        density: 1,
        friction: 0.5
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
        this.image = loadImage("Js/zombies.png");
        this.Visiblity = 255;
        World.add(world,this.body);


    }


    display () {
        var pos = this.body.position;
        if(this.body.speed < 3){
          var angle = this.body.angle;
          //push();
          //translate(this.body.position.x, this.body.position.y);
          //rotate(angle);
          imageMode(CENTER);
          image(this.image, this.body.position.x, this.body.position.y , this.width, this.height);
          //pop();

           }
           else{
             World.remove(world, this.body);
             push();
             this.Visiblity = this.Visiblity - 5;
             tint(255,this.Visiblity);
             image(this.image, this.body.position.x, this.body.position.y, 100, 200);
             pop();

           }
    }
    score(){
        if (this.Visiblity<0 && this.Visiblity>-1005){
          score++
        }
    
      }
}