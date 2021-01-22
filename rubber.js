class Rubber{
    constructor(x,y,radius){
        var options = {
            restitution :0.3,
            friction : 5,
            density : 1,
            isStatic : false
        }

        this.body = Bodies.circle(x,y,radius,options);
        World.add(world,this.body);

        this.radius = radius;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("green");
        ellipseMode(CENTER);
        ellipse(0,0,this.width);
        pop();
    }
}