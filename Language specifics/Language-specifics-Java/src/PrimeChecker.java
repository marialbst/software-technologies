import java.util.Scanner;

public class PrimeChecker {
    public static void main(String[] args) {
        Scanner console = new Scanner(System.in);
        long numToCheck = Long.parseLong(console.nextLine());

        boolean isPrime = checkPrime(numToCheck);

        if(isPrime){
            System.out.println("True");
        }
        else{
            System.out.println("False");
        }

        //System.out.println(isPrime);
    }

    private static boolean checkPrime(long numToCheck) {
        if (numToCheck < 2){
            return false;
        }

        for (int i=2; i<=Math.sqrt(numToCheck); i++){
            if(numToCheck % i == 0 && numToCheck != i){
                return false;
            }
        }
        return true;
    }
}
