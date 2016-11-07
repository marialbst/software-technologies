import java.util.LinkedHashMap;
import java.util.Scanner;

public class PhoneBook {
    public static void main(String[] args) {

        Scanner scan = new Scanner(System.in);

        String command = scan.nextLine();
        LinkedHashMap<String, String> phones = new LinkedHashMap<String, String>();
        while (!command.equals("END")){

            String[] input = command.split("\\s+");


            if(input[0].equals("A")){
                String name = input[1];
                String phone = input[2];
                phones.put(name, phone);
            }
            if(input[0].equals("S")){
                String name = input[1];
                if(phones.containsKey(name)){
                    System.out.println(name + " -> " + phones.get(name));
                }
                else{
                    System.out.println("Contact " + name + " does not exist.");
                }
            }

            command = scan.nextLine();
        }
    }
}
