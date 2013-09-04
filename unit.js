

var Converter = function() {
	console.log("init Converter");
	this.units = [
    {"name": "cup", "numBaseUnits": 48.0},
    {"name": "tablespoon", "numBaseUnits": 3.0}
	].sort(unitSizeCompare); //rev sorted by size
	this.prettyDisplay = prettyDisplay;	

	function prettyDisplay(quantity){
		var components = quantity.split(" ");
		var numUnits = parseFloat(components[0]);
		var unitName = components[1];

		for (i= 0; i < this.units.length; ++i){ //start with largest unit and work down to smallest
			currUnit = this.units[i];
			if (numUnits >=  currUnit.numBaseUnits ){
				console.log("Selected "+currUnit.name);
				prettyQuantity=numUnits/currUnit.numBaseUnits;
				prettyUnit = currUnit.name;
			}
			return [prettyQuantity,prettyUnit].join(" ");
		}
	}

}


var unitSizeCompare  =function (a,b) {
  if (a.quantity > b.quantity)
     return -1;
  if (a.quantity < b.quantity)
    return 1;
  return 0;
}



