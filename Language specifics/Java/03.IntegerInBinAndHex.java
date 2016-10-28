import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
    
        Scanner console = new Scanner(System.in);
        int someNum = Integer.parseInt(console.nextLine());

        String bin = Integer.toBinaryString(someNum);
        String hex = Integer.toHexString(someNum);

        System.out.println(hex.toUpperCase());
        System.out.println(bin);
    }
}