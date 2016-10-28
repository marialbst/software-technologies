import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
    
        Scanner console = new Scanner(System.in);
        long someNum = Long.parseLong(console.nextLine());

        String result = lastDigit(someNum);

        System.out.println(result);
    }

    public static String lastDigit(long num){
        int remainder = (int) (Math.abs(num) % 10);
        switch (remainder){
            case 1: return "one";
            case 2: return "two";
            case 3: return "three";
            case 4: return "four";
            case 5: return "five";
            case 6: return "six";
            case 7: return "seven";
            case 8: return "eight";
            case 9: return "nine";
            default: return "zero";
        }
    }
}