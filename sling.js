class sling{
    constructor(body,point)
    {
        var options={
            bodyA:body,
            pointB:point,
            stiffness:0.4,
            length:10
        }
        this.you=Matter.Constraint.create(options)
        World.add(world,this.you)
        this.point=point
    }
    display()
    {
        if(this.you.bodyA != null)
      {
        strokeWeight(5)
        line(this.you.bodyA.position.x,this.you.bodyA.position.y,this.point.x,this.point.y)      
      }
    }
    fly()
    {
        this.you.bodyA=null;
    }

    attach(why)
    {
     this.you.bodyA=why
    }
}