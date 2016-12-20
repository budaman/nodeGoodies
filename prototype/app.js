function User() {
	this.name = "Player",
	this.life = 100,
	this.giveLige = function giveLige(targerPlayer) {
		console.log (this.name + " gave live to " + targerPlayer.name);
		targerPlayer.life += 1;
	}
}


var Ieva = new User();
var Mantvydas = new User();

Ieva.name = "Ieva";
Mantvydas.name = "Mantvydas";

Mantvydas.giveLige(Ieva);


console.log(Ieva.name + " " + Ieva.life);

User.prototype.takeLife = function takeLife (targerPlayer) {
	targerPlayer.life -= 3;
	console.log (this.name + " made 3 damage to " + targerPlayer.name);
}

Ieva.takeLife(Mantvydas);

console.log (Mantvydas.life);

User.prototype.magic = 60;

console.log(Mantvydas.magic);