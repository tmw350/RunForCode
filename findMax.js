var testArray = [5, 4, 6, 9, 11, 10, 8, 0, 3];
var maxVal = testArray[0];
for (var arrayPosition = 0; arrayPosition < testArray.length; arrayPosition++) {
	var currentValue = testArray[arrayPosition];
	if (currentValue > maxVal) {
		maxVal = currentValue;
	}
}
console.log("The maximum value is: " + maxVal);
