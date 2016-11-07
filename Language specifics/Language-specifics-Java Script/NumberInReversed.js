function main(arr){

    let num = arr[0].split("");
    let result = reverseNum(num);

    function reverseNum(num){
        var result ='';

        for(var i = num.length - 1; i>=0; i--){

            result += num[i];
        }

        return result;
    }

    console.log(result);
}

//main(["1024"]);
