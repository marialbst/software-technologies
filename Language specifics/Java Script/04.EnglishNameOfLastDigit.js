function main(arr){
	let num = arr[0];
	let lastDigWord = findLastDig(num);

	function findLastDig(num){
  		
  		let lastDig = parseInt(num.substring(num.length - 1));	
      
      	switch(lastDig){

		    case 1: return "one";
		    case 2: return "two";
		    case 3: return "three";
		    case 4: return "four";
		  	case 5: return "five";
			case 6: return "six";
		   	case 7: return "seven";
		    case 8: return "eight";
		  	case 9: return "nine";
		 	default: return "zero";
	    }
	}

	console.log(lastDigWord);
}

//main(["10"]);