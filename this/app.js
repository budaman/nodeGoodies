var Mantvydas = {
	favFood: function () {

		console.log ("this function will be called by Mantvydas object");
		console.log (this === Mantvydas); //true
	}
}

Mantvydas.favFood();

function somethingStupid () {
	console.log('this function is called by global program');
	console.log(this === global); //true
}

somethingStupid();