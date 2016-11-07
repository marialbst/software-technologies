<?php
//$number = fgets(STDIN);//standarten vhod = console.readline
//$number = trim(fgets(STDIN));
//var_dump($number);
//echo $number;

$input = trim(fgets(STDIN));
//$number = intval($input);

$strLastDig = $input[strlen($input)-1];
//$intLastDig = $number % 10;

switch ($strLastDig){
    case "0":echo "zero";break;
    case "1":echo "one";break;
    case "2":echo "two";break;
    case "3":echo "three";break;
    case "4":echo "four";break;
    case "5":echo "five";break;
    case "6":echo "six";break;
    case "7":echo "seven";break;
    case "8":echo "eight";break;
    case "9":echo "nine";break;
    default:;break;
}

