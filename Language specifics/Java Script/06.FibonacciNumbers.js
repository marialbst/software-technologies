function main(input){

	let num = parseInt(input);
	let fibN = findFibN(num);

	function findFibN(num){
	    let fib0 = 1;
	    let fib1 = 1;

	    if(num < 2){
	    	return fib0;
	    }
    	else{
	    	let fibN = 0;

	      	for(var i = 2; i <=num; i++){
		        fibN = fib0 + fib1;
		        fib0 = fib1;
		        fib1 = fibN;
    		}
    	return fibN;

  		}
	}
  	
  	console.log(fibN);
}

//main("5");
