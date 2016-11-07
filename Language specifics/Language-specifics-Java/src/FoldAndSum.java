import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;

public class FoldAndSum {
    public static void main(String[] args) {
        Scanner scanner=new Scanner(System.in);

        String input = scanner.nextLine();
        //String[] inputArr = input.split("\\s+");
        int[] numbers = Arrays.stream(input.split("\\s+"))
                .mapToInt(Integer::parseInt)
                .toArray();

        int k = numbers.length/4;

        ArrayList<Integer> firstArr = new ArrayList<Integer>();
        ArrayList<Integer> secondArr = new ArrayList<Integer>();
        ArrayList<Integer> resultArr = new ArrayList<Integer>();

        for (int i=k-1; i >= 0; i--){
            firstArr.add(numbers[i]);
        }
        for(int i=k; i < 3*k; i++){
            secondArr.add(numbers[i]);
        }
        for (int i=4*k-1; i>=3*k; i-- ){
            firstArr.add(numbers[i]);
        }

        for (int i=0; i<2*k; i++){
            int result = firstArr.get(i) + secondArr.get(i);
            resultArr.add(result);

            System.out.print(result + " ");
            //System.out.printf("%d", result + " ");
        }



        //System.out.println(resultArr.toString());


    }
}
