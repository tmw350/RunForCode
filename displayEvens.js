	function evensInterface() {
		
		// clear out any old outputs, in case user did not refresh before putting new numbers in
		document.getElementById("displayResults").innerHTML = " ";
		document.getElementById("displayNumbers").innerHTML = " ";
	
		var startNum = document.getElementById("firstNum").value;
		//console.log(startNum + " " + typeof(startNum));
		var endNum = document.getElementById("secondNum").value;
		//console.log(endNum + " " + typeof(endNum));
		var step = document.getElementById("thirdNum").value;
		//console.log(step + " " + typeof(step));
		
		//var startNum = 4;
		//var endNum = 17;
		//var step = 2;

		console.log("Any non-numbers? " + (isNaN(startNum) == true || isNaN(endNum) == true || isNaN(step) == true));
		console.log("Any negative numbers? " + (startNum < 0 || endNum < 0 || step < 0));
		console.log("Starting number higher than ending number? " + (Number(endNum) <= Number(startNum)));
	
		results = verifyInputs(startNum, endNum, step);
		

		//console.log(results);
	
		if (verifyInputs(startNum, endNum, step) == true) {
	
			console.log("Time to do some code!");
			startNum = Number(startNum);
			endNum = Number(endNum);
			step=Number(step);
			var evenDisplay = [];
			evenDisplay = getEvens(startNum, endNum, step);
			evensText = ("Here are the even numbers between " + startNum + " and " + endNum + " by " + step + "s:")
			console.log(evenDisplay);
			document.getElementById("displayResults").innerHTML = evensText;
			document.getElementById("displayNumbers").innerHTML = evenDisplay;
			
			}else{
		
			console.log(results);
			document.getElementById("displayResults").innerHTML = results;
		}
	}
		

	function verifyInputs(startNum, endNum, step) {
		if (isNaN(startNum) == true || isNaN(endNum) == true || isNaN(step) == true) {
			
			// set output = "please enter a valid number"
			console.log( "Please enter a valid number")
			return "Please enter a valid number"
			
			//check else if any of them are <= 0
			} else if (startNum < 0 || endNum < 0 || step < 0) {
					
			//set output = "please enter a number > 0
			console.log("Please enter a number greater than zero.");
			return "Please enter a number greater than zero."
			
			//check else if firstNum >= lastNum
			// needed to get Number value of the strings, not using this was comparing strings and returning wrong results
			} else if (Number(endNum) <= Number(startNum)) {
					
			// set output = "Please enter a starting number that is less than the ending number.
			console.log( "Please enter a starting number that is less than the ending number.");
			return "Please enter a starting number that is less than the ending number."
		
			// else - all good, go back to displayEvens()
			}else{
			
			console.log(true);
			return true
		}
	}
	
	function getEvens(startNum, endNum, step) {

	var test = startNum;
	var evenDisplay = [];
	var displayIndex = 0;
	
	while (test <= endNum){
		
		if (test%2 == 0) {
			console.log(test);
			evenDisplay[displayIndex] = test;
			displayIndex++;
		}
		test = step + test;
		
	}
	return evenDisplay;
	}