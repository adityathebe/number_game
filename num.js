var Num = function(x,y,k) {
	this.radius = 40;
	this.color = 'yellow';
	this.key = k;
	this.done = false;

	this.show = function(){
		fill(this.color);
		ellipse(x, y, this.radius, this.radius);
		fill(0);
		text(this.key,x,y);
	}

	this.clicked = function(mX, mY, val) {
		if(Math.abs(x-mX) <= this.radius/2 && Math.abs(mY-y) <= this.radius/2) {
			if(val == this.key) {
				this.color = 'red';
				counter++;
				if(val == 25) {
					generateCircles();
					counter = 1;
				}
			}
		}
	}
}