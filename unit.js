

var Converter = function() {
	//TODO: Create data structure of ladders of units
	//TODO: distinguish between liquid and solid measures
	this.units = [
    {"name": "cup", "numBaseUnits": 48.0},
    {"name": "tablespoon", "numBaseUnits": 3.0},
    {"name": "teaspoon", "numBaseUnits": 1.0}
	].sort(unitSizeCompare); //rev sorted by size
	this.prettyDisplay = prettyDisplay;	

	function prettyDisplay(quantity) {
		var MIN_FRAC = 0.125; //default
		var components = quantity.split(" ");
		var numUnits = parseFloat(components[0]);
		var unitName = components[1];
		var prettyQuantity = "";
		var plural = false;
		for (i= 0; i < this.units.length; ++i) { //start with largest unit and work down to smallest
			var currUnit = this.units[i];
			if (numUnits >=  currUnit.numBaseUnits * MIN_FRAC) {

				console.log("Selected unit: "+currUnit.name);
				var quantity = numUnits / currUnit.numBaseUnits;
				var prettyUnit = currUnit.name;

				if (quantity > 1) {
					prettyUnit = prettyUnit.pluralize();
				}

				if (quantity % 1 !=0) { //not round number
					console.log("fractional "+numUnits+"/"+currUnit.numBaseUnits);
					rounded = roundToNearestFrac(quantity, MIN_FRAC);
					console.log("Rounded "+rounded);
					if (rounded > 1) { //mixed number
						var whole_num = Math.floor(rounded)
						var fractional = rounded - whole_num
						prettyQuantity += String(whole_num)+" ";
					}
					else {
						whole_num = "";
						var fractional = rounded;
					}
					f = new Fraction(fractional);
					prettyQuantity += f.numerator + '/' + f.denominator;
				}
				else {
					prettyQuantity = quantity;
				}
								
				return [prettyQuantity, prettyUnit].join(" ");
			}
		}
	}
}

/*
utility functions
*/
var roundToNearestFrac = function (num, roundBy) {
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



