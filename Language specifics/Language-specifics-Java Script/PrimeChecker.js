function primeChecker(input){
    let num = Number(input);
    let isNumPrime = isPrime(num);

    function isPrime(n){
        if(n < 2){
            return false;
        }

        for(var i=2; i <= Math.sqrt(n); i++){
            if(n % i == 0 && n != i){
                return false;
            }
        }
        return true;
    }

    if(isNumPrime){
        console.log("True");
    }
    else{
        console.log("False");
    }
}

//primeChecker("4");
