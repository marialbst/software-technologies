import java.util.Random;
import java.util.Scanner;

public class AdvertismentMessage {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        int num = Integer.parseInt(scan.nextLine());

        String[] phrases = new String[]
                {
                        "Excellent product.",
                        "Such a great product.",
                        "I always use that product.",
                        "Best product of its category.",
                        "Exceptional product.",
                        "I can’t live without this product."
                };

        String[] events = new String[]
                {
                        "Now I feel good.",
                        "I have succeeded with this product.",
                        "Makes miracles. I am happy of the results!",
                        "I cannot believe but now I feel awesome.",
                        "Try it yourself, I am very satisfied.",
                        "I feel great!"
                };

        String[] autors = new String[]
                {
                        "Diana",
                        "Petya",
                        "Stella",
                        "Elena",
                        "Katya",
                        "Iva",
                        "Annie",
                        "Eva"
                };

        String[] cities = new String[]
                {
                        "Burgas",
                        "Sofia",
                        "Plovdiv",
                        "Varna",
                        "Ruse"
                };

        Random rd = new Random();

        for (int i=0; i < num; i++){
            int phraseIndex = rd.nextInt(phrases.length);
            int eventIndex = rd.nextInt(events.length);
            int autorsIndex = rd.nextInt(autors.length);
            int cityIndex = rd.nextInt(cities.length);

            System.out.printf("%s %s %s - %s%n",
                    phrases[phraseIndex],
                    events[eventIndex],
                    autors[autorsIndex],
                    cities[cityIndex]);
        }
    }
}
