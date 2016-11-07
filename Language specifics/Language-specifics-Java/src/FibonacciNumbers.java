import java.math.BigInteger;
import java.util.Scanner;

public class FibonacciNumbers {
    public static void main (String[] args)	{

        Scanner console = new Scanner(System.in);
        int n = Integer.parseInt(console.nextLine());
        BigInteger fibN = Fib(n);
        System.out.println(fibN);
    }

    private static BigInteger Fib(int n) {
        BigInteger fib0 = BigInteger.valueOf(1);
        BigInteger fib1 = BigInteger.valueOf(1);
        BigInteger fibN = new BigInteger("0");
        if(n < 2){
            return fib0;
        }
        else{
            for(int i = 2; i<=n; i++)
            {
                fibN = fib0.add(fib1);
                fib0 = fib1;
                fib1 = fibN;
            }
            return fibN;
        }
    }
}
