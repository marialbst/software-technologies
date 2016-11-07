import java.util.Arrays;
import java.util.Scanner;

public class SumReversedNumbers {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        int[] numbers = Arrays.stream(scan.nextLine()
                .split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();
        long result = 0L;
        for (int i = 0; i < numbers.length; i++){
            int reversedNum = NumberReverse(numbers[i]);

            result += reversedNum;
        }

        System.out.println(result);
    }

    private static int NumberReverse(int num) {
        int reversed = 0;
        while(num != 0){
            reversed *= 10;
            reversed += num%10;
            num /= 10;
        }
        return reversed;
    }
}
