describe("Converter", function() {
  describe("prettyDisplay()", function() {
    var converter = new Converter();

    examples = [
      { "input": "48 teaspoon", "output": "1 cup" },
      { "input": "24 teaspoon", "output": "1/2 cup" },
      { "input": "23 teaspoon", "output": "3/8 cup" },
      { "input": "72 teaspoon", "output": "1 1/2 cups" },
      { "input": "3 teaspoon",  "output": "1 tablespoon" },
      { "input": "2 teaspoon",  "output": "5/8 tablespoon" }
    ]

    examples.forEach(function(example) {
      description = "converts '" + example["input"] + "' to '" + example["output"] + "'";
      it(description, function() {
        result = converter.prettyDisplay(example["input"]);
        expect(result).toBe(example["output"]);
      });
    });
  });
});

describe("unitSizeCompare()", function() {
  it("returns -1 if a's quantity is greater than b's quantity", function() {
    expect(unitSizeCompare({ "quantity": 5 }, { "quantity": 3 })).toBe(-1);
  });

  it("returns 1 if a's quantity is less than b's quantity", function() {
    expect(unitSizeCompare({ "quantity": 2 }, { "quantity": 7 })).toBe(1);
  });

  it("returns 0 if a's quantity is equal to b's quantity", function() {
    expect(unitSizeCompare({ "quantity": 4 }, { "quantity": 4 })).toBe(0);
  });
});
