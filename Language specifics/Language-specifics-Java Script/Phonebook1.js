function phoneBook(input) {
    let count = 0;
    let commands = input[count].split(" ");
    let phoneBook = new Map();


    while(commands[0] != "END"){

        if(commands[0]=='A'){
            let name = commands[1];
            let phone = commands[2];

            phoneBook.set(name,phone);
            //console.log(phoneBook.get(name));
        }
        else if(commands[0]=='S'){
            let name = commands[1];
            let hasName = false;
            if(phoneBook.has(name)){
                console.log(name + " -> " + phoneBook.get(name));
            }
            else{
                console.log("Contact "+name+" does not exist.");
            }
        }
        count++;
        commands = input[count].split(" ");
    }
}

//phoneBook(["A Nakov 0888080808","S Mariika","S Nakov","END"]);
//phoneBook(["A Nakov +359888001122","A RoYaL(Ivan) 666","A Gero 5559393",
//    "A Simo 02/987665544","S Simo","S simo","S RoYaL","S RoYaL(Ivan)","END"]);
//phoneBook(["A Misho +359883123","A Misho 02/3123","S Misho","END"]);
phoneBook(["S nak","A nak 123","S nak","A nak 234","A nak 345","S nak","END"]);
phoneBook(["S Misho","A Misho +359883123","A Misho 02/3123","S Misho",
    "A Maria +359999999","S Maria","A Maria 02/3763272","A Misho 999999999",
    "S Maria","END"]);
phoneBook(["S Pepi","END"]);
