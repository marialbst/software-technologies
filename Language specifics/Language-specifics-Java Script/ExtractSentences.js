function extract(input) {
    let query = input[0];
    let text = input[1];
    let pattern = /(\w[^.!?]*)?\b/g +query+ /\b[^.!?]*/g;

    let match = pattern.exec(text);
    let mathes = text.match(pattern);

    for(let m of mathes){
        console.log(m);
    }

}
extract(["to","Welcome to SoftUni! You will learn programming, algorithms, problem solving and software technologies. You need to allocate for study 20-30 hours weekly. Good luck! I am fan of Motorhead. To be or not to be - that is the question. TO DO OR NOT?"])