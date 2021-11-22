class Basketball {
    constructor (x,y){
        this.x = x
        this.y = y
        this.r = 30;
        var options = {
            isStatic: false,
            restitution: 0.2
        }

        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("Images/basketball.png");
        World.add(world, this.body);
    }

    shoot() {
        console.log(this.body.angle)
        var newAngle = this.body.angle + 28;
        newAngle = newAngle *(3.14/180)
        var velocity = p5.Vector.fromAngle(newAngle);
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.setVelocity(this.body, {
          x: velocity.x *(-180/3.14), y: velocity.y * (-100)});
      }


    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.r, this.r);
        pop();
    }
}