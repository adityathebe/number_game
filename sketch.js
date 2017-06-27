var num = [], numbers;
var count = 0, counter = 1;
var endTime, startTime, showTime;
var ref, database;
var playerName = "", inputfield, button, showHint;

function setup() {
	var canvas = createCanvas(500, 500);
	canvas.parent("canvas_div");
	textSize(20);
	textAlign(CENTER);
	generateCircles();
	openingScreen();	
}

function draw() {
	background(51);
	if(playerName != "") {
		for (var i = 0; i < 25; i++) {
			num[i].show();
		}		
	}
}

function gameover(timeDiff) {
	counter = 1;
	timeDiff = timeDiff / 1000;
	generateCircles();
	openingScreen();
	var data = {
		name : playerName,
		time : timeDiff
	}
	ref.push(data);
	playerName = "";
	showHint.remove();
	showTime.html(timeDiff.toFixed(2) + " sec");
}

var setName = function() {
	playerName = inputfield.value();
	inputfield.remove();
	button.remove();
	showTime.remove();
	/* == Showhint == */
	showHint = createElement("H3");
	showHint.style("font-size","30px");
	showHint.style("color","white");
	showHint.position(width/2, height/2 + 100);
	showHint.html("Press 1");
}

var openingScreen = function() {
	/* === Input Field === */
	inputfield = createInput();
	inputfield.position(width/3, height/2);
	inputfield.style("height","30px");
	inputfield.style("text-align","center");
	inputfield.style("font-size","20px");
	inputfield.attribute("placeholder","Enter your Name");
	/* === Button === */
	button = createButton('Submit');
	button.mousePressed(setName);
	button.position(width/2 + 175, height/2);
	button.class("pure-button pure-button-primary");
	/* === Time Field === */
	showTime = createElement('h1');
	showTime.style("color", "white");
	showTime.position(width/2, height/2 - 100);
}

function mousePressed() {
	for (var i = 0; i < 25; i++) {
		num[i].clicked(mouseX, mouseY, counter);
	}
}

function keyPressed()  {
	if (keyCode === ENTER)
		setName();
}