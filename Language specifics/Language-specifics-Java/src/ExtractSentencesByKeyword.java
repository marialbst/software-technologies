import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ExtractSentencesByKeyword {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String query = scan.nextLine();
        String text = scan.nextLine();

        String regex = "(\\w[^.!?]*)?\\b" + query + "\\b[^.!?]*[^.!?]";
        Pattern pattern = Pattern.compile(regex);
        Matcher matches = pattern.matcher(text);

        while (matches.find()){
            System.out.println(matches.group(0));
        }

    }
}
