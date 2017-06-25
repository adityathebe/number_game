var Num = function(x,y,k) {
	this.radius = 60;
	this.color = '#F2F8EA';
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
				this.color = '#D1D6A9';
				counter++;
				if(val == 1) {
					startTime =  new Date();
					showTime.html("");
				}
				if(val == 25) {
					endTime =  new Date();
					var timeDiff = endTime - startTime;
					gameover(timeDiff);
				}
			}
		}
	}
}