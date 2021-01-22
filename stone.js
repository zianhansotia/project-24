class Stone{
    constructor(x,y,width,height){
        var options = {
            friction : 1.5,
            density : 3,
            restitution : 0.1,
            isStatic : false
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);

        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}