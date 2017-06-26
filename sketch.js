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
	// Store Data
	var scores = data.val();
	var keys = Object.keys(scores)

	// Clear the list first
	var playersdata = selectAll('.playerData');
	for (var i = 0; i < playersdata.length; i++) {
		playersdata[i].remove();
	}

	// Sorting the data
	var player_data = []
	for (var i = 0; i < keys.length; i++) {
		player_data.push([scores[keys[i]].name, scores[keys[i]].time])
	}
	player_data.sort(function(a, b) {
	    return a[1] - b[1];
	});

	// Displaying data
	for (var i = 0; i < 10; i++) {
		var li = createElement("li", player_data[i][0] + " " + player_data[i][1]);
		li.class('playerData')
		li.parent("player-list");
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
	showTime.html(Math.round(timeDiff) + " sec")
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