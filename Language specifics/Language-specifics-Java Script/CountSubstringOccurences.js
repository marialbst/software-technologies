function counter(input) {
    let text = input[0].toLowerCase();
    let pattern =" ";

    if(input.length > 1){
        pattern =input[1].toLowerCase();
    }
    let counter = 0;
    let index = text.indexOf(pattern);

    while(index != -1){
        counter++;
        index = text.indexOf(pattern, index+1);
    }
    console.log(counter);
}
//counter(["aaaaaa","aa"]);
//counter(["Welcome to the Software University (SoftUni)! Welcome to programming. Programming is wellness for developers, said Maxwell.","wel"]);
//counter(["Welcome To Softuni", "Java"]);
//counter(["",""]);
counter(["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."," "]);