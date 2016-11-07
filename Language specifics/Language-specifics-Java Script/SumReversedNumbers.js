function sumReversedNumbers(input){
    let numbers = input[0].split(' ');

    let sum = 0;

    for(let i=0; i<numbers.length; i++){
        let num =(numbers[i]);
        let reversed = parseInt(reverseNum(num));
        sum+=reversed;
    }

    console.log(sum);

    function reverseNum(num) {
        let reversed = "";

        for(let i=num.length-1;i>=0; i--) {
            reversed += num[i];
        }

        return reversed;
    }
}

//sumReversedNumbers(["123 234 12"]);
//sumReversedNumbers(["12 12 34 84 66 12"]);
//sumReversedNumbers(["120 1200 12000"]);