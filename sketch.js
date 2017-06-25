var num = [];
var numbers = [];
var count = 0;
var counter = 1;
var endTime, startTime;
var showTime;

function setup() {
	createCanvas(500, 500);
	textSize(20);
	textAlign(CENTER);
	generateCircles();
	showTime = createElement('h4');
	showTime.style("color", "white");
	showTime.style("font-size", "30px");
	showTime.position(width - 100, height - 100);
}

function draw() {
	background(51);
	for (var i = 0; i < 25; i++) {
		num[i].show();
	}
}

function mouseClicked() {
	for (var i = 0; i < 25; i++) {
		num[i].clicked(mouseX, mouseY, counter);
	}
}
