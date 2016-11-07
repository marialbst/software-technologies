function extractEmails(input) {
    let text = input[0];
    const pattern = /(\b|^|\s)*([a-z](?:_?[a-z0-9\-\.]+@[a-z0-9\-]+\.[a-z0-9]+([\.a-z0-9]+)?))\b/g;

    let match = pattern.exec(text);
    let mathes = text.match(pattern);
    for(let m of mathes){
        console.log(m);
    }
}

extractEmails(["Please contact us at: support@github.com."]);