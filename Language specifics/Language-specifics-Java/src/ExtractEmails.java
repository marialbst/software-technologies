import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class ExtractEmails {

    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String text = scan.nextLine();
        String regex = "\\b(?<!\\S)(([a-z0-9\\-\\.]+@[a-z0-9\\-]+\\.[a-z]+([\\.a-z]+)?))\\b";;

        Pattern pattern = Pattern.compile(regex);
        Matcher matches = pattern.matcher(text);

        while (matches.find()){
            System.out.println(matches.group(0));
        }
    }
}
