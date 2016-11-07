function main(arr){
    let decNum = parseInt(arr[0]);
    let hexNum = decNum.toString(16).toUpperCase();
    let binNum = decNum.toString(2);
    console.log(hexNum);
    console.log(binNum);
}

//main(["10"]);
