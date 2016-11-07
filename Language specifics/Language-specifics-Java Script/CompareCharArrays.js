function compare(input) {
    let chars1 = input[0].split(" ");
    let chars2 = input[1].split(" ");

    if(chars1.length > chars2.length){
        console.log(chars2.join(""));
        console.log(chars1.join(""));
    }
    else if(chars1.length<chars2.length){
        console.log(chars1.join(""));
        console.log(chars2.join(""));
    }
    else{
        for (let i=0; i<chars1.length; i++){
            if(chars1[i] > chars2[i]){
                console.log(chars2.join(""));
                console.log(chars1.join(""));
                break;
            }
            else if(chars1[i] < chars2[i]){
                console.log(chars1.join(""));
                console.log(chars2.join(""));
                break;
            }
            else{
                if(i === chars1.length-1) {
                    console.log(chars1.join(""));
                    console.log(chars2.join(""));
                }
            }
        }
    }
}
//compare(["a n n","a n n a"]);
//compare(["a n n a","a n"]);
//compare(["a n n","b a b"]);
compare(["a a a a a a a a a a a a a a","a a a a a a a a a a a a a b"]);