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
		var li = createElement("li", player_data[i][0] + " -- " + player_data[i][1].toFixed(2));
		li.class('playerData');
		li.parent("player-list");
		li.style("font-size","24px");
	}
}

function errData(err) {
	console.log("Error!");
	console.log(err)
}