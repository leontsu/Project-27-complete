class Roof
{
    constructor(x,y,width,height)
    {
        var option = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height, option)
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
        fill(255);
        rectMode(CENTER);
        rect(0,0,this.width,this.height)
        pop();
    }
}