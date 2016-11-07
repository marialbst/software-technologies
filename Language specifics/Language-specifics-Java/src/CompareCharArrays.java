import java.util.Arrays;
import java.util.Scanner;

public class CompareCharArrays {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        String[] chars1 = scan.nextLine().split(" ");
        String[] chars2 = scan.nextLine().split(" ");

        if(chars1.length > chars2.length){
            System.out.println(String.join("",  chars2));
            System.out.println(String.join("", chars1));
        }
        else if(chars1.length < chars2.length){
            System.out.println(String.join("", chars1));
            System.out.println(String.join("",  chars2));
        }
        else{
            for(int i = 0; i < chars1.length; i++){
                if(chars1[i].equals(chars2[i])){
                    if(i == chars1.length - 1){
                        System.out.println(String.join("",  chars1));
                        System.out.println(String.join("", chars2));
                    }
                }
                else if(chars1[i].compareTo(chars2[i]) < 0){
                    System.out.println(String.join("",  chars1));
                    System.out.println(String.join("", chars2));
                    break;
                }
                else if(chars1[i].compareTo(chars2[i]) > 0){
                    System.out.println(String.join("",  chars2));
                    System.out.println(String.join("", chars1));
                    break;
                }
            }
        }
    }
}

