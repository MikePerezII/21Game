// initialization
var count = 0; //where the game begins
var steps = 0; // 1 2 or 3
var game = []; //numbers counted
var player = ""; //person whose turn it is
var loser = "nobody"; //decides loser

do {// end at 21
	// call continug function for user
	player = "You";
	steps = prompt("Starting at "+count+", how many steps do you count (1-3)");
	count = counting(player,count,steps);
	// call counting function for computer, at 2 steps each time
	player = "I";
	steps = getRandomInt(1,3); // temporary
	console.log(steps);
	count = counting(player,count,steps);
}
while (count<21);
alert ("21, "+loser+" lost!"); // temporary

// count and display function
function counting(player,current,steps){
	game = [];
	for (index = 0;index<steps;index++) {
		game[index]=current+index+1;
		if (game[index]>=21){
			loser=player;
		}
	}
	if (loser=="nobody"){
		alert(player+": "+game);
	}
	current=parseInt(current)+parseInt(steps);
	return current;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}