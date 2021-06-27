class Stone{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options={
		'restitution':0,
		'friction':0.9,
		'density':12
	}
		this.x=x;
		this.y=y;
		this.width=20;
		this.height=30;
		this.body=Bodies.rectangle(this.x, this.y, width,height, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			strokeWeight(4);
			stroke("black");
			fill("green");
			//draw the ellipse here to display the rubber ball
			rectMode(CENTER)
			rect(0,0,20,30)

			pop()
	}

}