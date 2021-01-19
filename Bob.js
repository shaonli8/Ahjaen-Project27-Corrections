class Bob {
    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution:1,
            friction:0,
            frictionAir:0,
            density:1.5
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x, this.y, this.r, options)
        World.add(world, this.body);
    }
    display()
    {
        var paperpos=this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        ellipseMode(RADIUS)
        strokeWeight(3);
        fill(255,0,255)
        ellipse(0,0,this.r,this.r)
        pop()

    }
}