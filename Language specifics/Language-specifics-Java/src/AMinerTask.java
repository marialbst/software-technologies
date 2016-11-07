import java.util.LinkedHashMap;
import java.util.Map;
import java.util.Scanner;

public class AMinerTask {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        String input = scan.nextLine();

        LinkedHashMap<String, Integer> goods = new LinkedHashMap<String,Integer>();

        while(!input.equals("stop")){
            String typeOfGood = input;
            int quantity = Integer.parseInt(scan.nextLine());

            if(!goods.containsKey(typeOfGood)){
                goods.put(typeOfGood, quantity);
            }
            else{
                quantity += goods.get(typeOfGood);
                goods.put(typeOfGood, quantity);
            }
            input = scan.nextLine();
        }

        for (Map.Entry<String,Integer> val : goods.entrySet()) {
            String key = val.getKey();
            int value = val.getValue();
            System.out.printf("%s -> %d%n", key, value);
        }
    }
}
