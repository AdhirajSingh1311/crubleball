class Paper{
	constructor(x,y)
	{
	// assign options to the rubber ball

	var options={

   restitution:0.3,
   friction:0,
   density:1.2,
   isStatic:false,
	}
	 this.image=loadImage("paper.png");
		this.body=Bodies.rectangle(x,y,50,50,options);
        this.width=50;
        this.heighht=50;
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;	
            var angle=this.body.angle;	
			push()
			translate(pos.x, pos.y);
            rotate (angle);
			
			strokeWeight(4);
			stroke("black");
			fill("brown");
			//draw the ellipse here to display the rubber ball
			imageMode(CENTER)
			image(this.image,0,0,this.width,this.height);

			pop()
	}

}