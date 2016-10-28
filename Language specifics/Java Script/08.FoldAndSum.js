function foldAndSum(input){
	let numbers = input[0].split(' ');
  	let k = numbers.length / 4;
 
  	let firstArr = [];
  	let secondArr = [];
  	let resultArr = [];
  
  	for(var i = k-1; i >= 0; i--){

  		firstArr.push(numbers[i]);
  	}
  	for(var i = k; i < 3*k; i++){

  		secondArr.push(numbers[i]);
    }
  	for(var i = 4*k-1; i >= 3*k; i--){

  		firstArr.push(numbers[i]);
  	}

	for(var j = 0; j < 2*k; j++){

	  	var num1 = Number(firstArr[j]);
	    var num2 = Number(secondArr[j]);
	    resultArr.push(num1 + num2);
	}
  
	console.log(resultArr.join(" "));
}

//foldAndSum("5 2 3 6");