import java.util.Scanner;

public class Main {

    public static void main(String[] args) {
    
        Scanner console = new Scanner(System.in);
        String hexNum = console.nextLine().substring(2);
        
        int decNum = Integer.parseInt(hexNum, 16);
        System.out.println(decNum);
    }
}