var startNum = "6";
var endNum = "18";
var step = "3";

console.log(isNaN(startNum) == true || isNaN(endNum) == true || isNaN(step) == true);
console.log(startNum < 0 || endNum < 0 || step < 0);
console.log(Number(endNum) <= Number(startNum));

if (isNaN(startNum) == true || isNaN(endNum) == true || isNaN(step) == true) {
			
			// set output = "please enter a valid number"
			console.log( "Please enter a valid number")
			
		//check else if any of them are <= 0
		} else if (startNum < 0 || endNum < 0 || step < 0) {
					
			//set output = "please enter a number > 0
			console.log("Please enter a number greater than zero.");
			
		//check else if firstNum >= lastNum
		} else if (Number(endNum) <= Number(startNum)) {
					
			// set output = "Please enter a starting number that is less than the ending number.
			console.log( "Please enter a starting number that is less than the ending number.");
		
		// else - all good, go back to displayEvens()
		}else{
			
			console.log(true);
		}