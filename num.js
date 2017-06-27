var Num = function(x,y,k) {
	this.diameter = 60;
	this.color = '#F2F8EA';
	this.key = k;
	this.done = false;
	this.x = x;
	this.y = y;

	this.show = function(){
		fill(this.color);
		ellipse(x, y, this.diameter, this.diameter);
		fill(0);
		text(this.key,x,y);
	}

	this.clicked = function(mX, mY, val) {
		showHint.html("Press " + counter);
		if(dist(x,y,mX,mY) <= (this.diameter / 2)) {
			if(val == this.key) {
				this.color = '#71BA51';
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