var num = [];
var counter = 1;
var numbers = [];
var count = 0;

var genRandInt = function() {
	var temp = Math.floor(Math.random() * 25 + 1);
	if (numbers.indexOf(temp) === -1) {
		numbers.push(temp);
	} else
		genRandInt();
}

function generateCircles() {
	numbers = [];
	num = [];
	while(numbers.length < 25) {
		genRandInt();
	}
	count = 0;
	for (var i = 0; i < 5; i++) {
		for (var j = 0; j < 5; j++) {
			num.push(new Num(i*60+60, j*60+60, numbers[count++]));
		}
	}
}

function setup() {
	createCanvas(500, 500);
	textSize(20);
	textAlign(CENTER);
	generateCircles();
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
