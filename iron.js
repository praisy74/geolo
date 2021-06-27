class Iron{
	constructor(x,y)
	{
	// assign options to the rubber ball
	var options={
		'restitution':0.3,
		'friction':3,
		'density':30
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
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			
			strokeWeight(4);
			stroke("black");
			fill("red");
			//draw the ellipse here to display the rubber ball
			rectMode(CENTER)
			rect(0,0,this.width,this.height)

			pop()
	}

}