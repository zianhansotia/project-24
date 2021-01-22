class Ground{
    constructor(x,y,width){
        var options = {
            'isStatic': true
        }
        this.body = Bodies.rectangle(x,y,width,15,options);
        World.add(world,this.body);

        this.width = width;
        this.height = 15;
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("black");
        rect(pos.x,pos.y,this.width,15);
    }
}