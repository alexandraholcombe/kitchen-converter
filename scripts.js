var gallonsToLiters = function(gallons) {
	return gallons * 3.78541;
}

var gallonsInput = parseInt(prompt("Enter a volume in gallons:"));

console.log(gallonsToLiters(gallonsInput));

var litersToGallons = function(liters) {
	return liters * .264172;
}

var litersInput = parseInt(prompt("Enter a volume in liters"));

console.log(litersToGallons(litersInput));
