function advert(input){
    let times = parseInt(input[0]);

    let  phrases = [
        "Excellent product.",
        "Such a great product.",
        "I always use that product.",
        "Best product of its category.",
        "Exceptional product.",
        "I can’t live without this product."];

    let events = [
        "Now I feel good.",
        "I have succeeded with this product.",
        "Makes miracles. I am happy of the results!",
        "I cannot believe but now I feel awesome.",
        "Try it yourself, I am very satisfied.",
        "I feel great!"];

    let autors = [
        "Diana",
        "Petya",
        "Stella",
        "Elena",
        "Katya",
        "Iva",
        "Annie",
        "Eva"];

    let cities = [
        "Burgas",
        "Sofia",
        "Plovdiv",
        "Varna",
        "Ruse"];


    for(let i=0; i<times;i++){
        let randPhrase = Math.floor((Math.random() * phrases.length));
        let randEvent = Math.floor((Math.random() * events.length));
        let randAutor = Math.floor((Math.random() * autors.length));
        let randCity = Math.floor((Math.random() * cities.length));

        console.log(phrases[randPhrase]+" "+events[randEvent]+" "+autors[randAutor]+" - "+cities[randCity]);
    }
}

advert(["5"]);