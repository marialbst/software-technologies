import java.util.Arrays;
import java.util.Scanner;

public class TextFilter {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String[] bannedWords = scan.nextLine().split("\\,\\s+");
        String text = scan.nextLine();

        for (String word:bannedWords) {
            char[] chars = new char[word.length()];
            Arrays.fill(chars, '*');
            String replacement = new String(chars);
            text = text.replaceAll(word, replacement);
        }

        System.out.println(text);
    }
}

