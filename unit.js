

var Converter = function() {
	//TODO: Create data structure of ladders of units
	//TODO: distinguish between liquid and soilid measures
	this.units = [
    {"name": "cup", "numBaseUnits": 48.0},
    {"name": "tablespoon", "numBaseUnits": 3.0},
    {"name": "teaspoon", "numBaseUnits": 1.0}
	].sort(unitSizeCompare); //rev sorted by size
	this.prettyDisplay = prettyDisplay;	

	function prettyDisplay(quantity){
		var MIN_FRAC = 0.125;
		var components = quantity.split(" ");
		var numUnits = parseFloat(components[0]);
		var unitName = components[1];

		for (i= 0; i < this.units.length; ++i){ //start with largest unit and work down to smallest
			currUnit = this.units[i];
			if (numUnits >=  currUnit.numBaseUnits * MIN_FRAC) {
				console.log("Selected unit: "+currUnit.name);
				prettyQuantity=numUnits/currUnit.numBaseUnits;

				if (prettyQuantity % 1 !=0) {
					console.log("fractional "+numUnits+"/"+currUnit.numBaseUnits);
					rounded = roundToNearestFrac(prettyQuantity, MIN_FRAC);
					console.log("Rounded "+rounded);
					f = new Fraction(rounded);
					prettyQuantity = f.numerator + '/' + f.denominator;
				}
				prettyUnit = currUnit.name;
				return [prettyQuantity,prettyUnit].join(" ");
			}
		}
	}
}

/*
utility functions
*/
var roundToNearestFrac = function (num,roundBy) {
	f = new Fraction(roundBy);
	if (f.numerator===1) {
		return Math.floor(num*f.denominator)/f.denominator;
	}
	else {
		return null;
	}

}

var unitSizeCompare  = function (a,b) {
  if (a.quantity > b.quantity)
     return -1;
  if (a.quantity < b.quantity)
    return 1;
  return 0;
}



