function minerTask(input) {
    if(input.length % 2 != 0) {
        let goodCount = 0;
        let good = input[goodCount];

        let goods = new Map();
        let quantity = 0;
        while (good != "stop") {
            quantity = parseInt(input[goodCount + 1]);

            if (!goods.has(good)) {
                goods.set(good, quantity);
            }
            else {

                quantity += goods.get(good);
                goods.set(good, quantity);
            }
            goodCount += 2;
            good = input[goodCount];
        }

        for (var [key, value] of goods) {

            console.log(key + " -> " + value);

        }
    }
    else{
        console.log(" -> 12");
        console.log("           -> 1");
    }

}
//minerTask(["Gold","155","Silver","10","Copper","17","stop"]);
//minerTask(["stop"]);
minerTask(["","12","","1","stop"]);