function censore(input) {
    let words = input[0].split(", ");
    let text = input[1];

    for(var word of words){
        let repl = "";
        for(let i = 0; i < word.length; i++){
            repl += "*";
        }

        text = text.split(word).join(repl);
    }
    console.log(text);
}
censore(["Linux, Windows","It is not Linux, it is GNU/Linux. Linux is merely the kernel, while GNU adds the functionality. Therefore we owe it to them by calling the OS GNU/Linux! Sincerely, a Windows client"]);