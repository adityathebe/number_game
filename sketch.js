var num = [];
var numbers = [];
var count = 0;
var counter = 1;
var endTime, startTime;
var showTime;
var ref, playerName = "", inputfield, button;
var database;

function setup() {
	createCanvas(500, 500);
	textSize(20);
	textAlign(CENTER);
	generateCircles();
	showTime = createElement('h4');
	showTime.style("color", "white");
	showTime.style("font-size", "30px");
	showTime.position(width - 100, height - 100);
	openingScreen();	

	// Firebase
	var config = {
		apiKey: "AIzaSyC1wEKxiHxT45YtdcZ-ru0Sl8muQWveLTk",
		authDomain: "numbergame-4a3a9.firebaseapp.com",
		databaseURL: "https://numbergame-4a3a9.firebaseio.com",
		projectId: "numbergame-4a3a9",
		storageBucket: "",
		messagingSenderId: "1010469096603"
  	};

	firebase.initializeApp(config);
	database = firebase.database();
	ref = database.ref('scores')
	ref.on('value', gotData, errData);
}

function gotData(data) {
	var scores = data.val();
	var keys = Object.keys(scores)
	for (var i = 0; i < keys.length; i++) {
		var k = keys[i];
		var name = scores[k].name;
		var time = scores[k].time;
		console.log(name, time);
	}
}

function errData(err) {
	console.log("Error!");
	console.log(err)
}

function draw() {
	background(51);
	if(playerName != "") {
		for (var i = 0; i < 25; i++) {
			num[i].show();
		}		
	}
}

var gameover = function(timeDiff) {
	counter = 1;
	timeDiff = timeDiff / 1000;
	showTime.html(Math.round(timeDiff % 60) + " sec")
	generateCircles();
	var data = {
		name : playerName,
		time : timeDiff
	}
	ref.push(data);
	playerName = "";
	openingScreen();
}

var setName = function() {
	playerName = inputfield.value();
	inputfield.remove();
	button.remove();
}

var openingScreen = function() {
	inputfield = createInput();
	button = createButton('submit');
	button.mousePressed(setName);
	inputfield.position(width/3, height/2);
	inputfield.style("height","30px");
	inputfield.style("text-align","center");
	inputfield.style("font-size","20px");
	button.style("height","36px");
	button.position(width/2 + 175, height/2);
}

function touchStarted() {
	for (var i = 0; i < 25; i++) {
		num[i].clicked(mouseX, mouseY, counter);
	}
}

function keyPressed() {
  if (keyCode === ENTER)
  	setName();
}