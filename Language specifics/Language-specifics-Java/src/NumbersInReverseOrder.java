import java.util.Scanner;

public class NumbersInReverseOrder {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        String someNum = console.nextLine();

        String result = Reversed(someNum);

        System.out.println(result);
    }

    private static String Reversed(String num) {
        StringBuilder result = new StringBuilder();
        result.append(num);
        result.reverse();

        return result.toString();
    }
}
