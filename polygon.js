class polygon
{
  constructor(x,y,r)
  {
    var options={
        'restitution':0.9,
        'friction':0.8,
        'density': 1
    }
    this.body=Bodies.circle(x,y,r,options)
    World.add(world,this.body)
    this.radius=r;
    this.poly=loadImage("polygon.png");
  } 
  display()
  {
    
    imageMode(CENTER)
    image(this.poly,this.body.position.x,this.body.position.y,45,45)
    
  }   
}