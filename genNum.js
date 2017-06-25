
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