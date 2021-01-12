class Dustbin{
    constructor(x,y,width,height){
        var options = {
            isStatic : true
        }
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }
    display(){

        var pos = this.body.position;
        //rectMode(CENTER);
        fill("red");
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        //rect(pos.x,pos.y,this.width,this.height);
    }
}