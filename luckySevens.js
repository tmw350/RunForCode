
function playGame() {
	var startBet = document.getElementById("startBet").value;
	startBet=Number(startBet);
	if (validateBet(startBet) == false) {
		document.getElementById("errorDisplay").innerHTML = "Please select a starting bet greater than zero";
	}else{
		var availMoney = startBet;
		var rollCountAtMaxWinnings = 0;
		var maxWinnings = 0;
		var rollCount = 0;
		var rollResult = 0;
		while (availMoney > 0) {
			rollCount+=1;
			console.log("rollCount: " + rollCount);
			rollResult = rollDice();
			console.log("rollResult: " + rollResult);
				if (rollResult == 7) {
					availMoney+=4;
					if (availMoney > maxWinnings) {
						rollCountAtMaxWinnings=rollCount;
						maxWinnings = availMoney;
					}
				}else{
					availMoney=--availMoney;
			}
		}
	}
			
	console.log("startBet: " + startBet);
	console.log("rollCount: " + rollCount);
	console.log("maxWinnings: " + maxWinnings);
	console.log("rollCountAtMaxWinnings: " + rollCountAtMaxWinnings);
	
	// create a table to display results
	var resultsString = (startBet + " " + rollCount + " " + maxWinnings + " " + rollCountAtMaxWinnings)
	
	document.getElementById("tablePrint").innerHTML = resultsString;
		
}

function validateBet(startBet) {
	if (startBet < 0) {
		return false
	}else{
		return true
	}
}

function rollDice() {
	var rollOne = Math.ceil(Math.random() * (1 + 6 - 1));
	var rollTwo = Math.ceil(Math.random() * (1 + 6 - 1));
	return rollOne + rollTwo;
}

