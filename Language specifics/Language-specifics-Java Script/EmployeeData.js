function solve(arr){
    let firstName=arr[0];
    let lastName=arr[1];
    let age=arr[2];
    let gender=arr[3];
    let personalID=arr[4];
    let employeeID=arr[5];

    console.log("First name: "+firstName);
    console.log("Last name: "+lastName);
    console.log("Age: "+age);
    console.log("Gender: "+gender);
    console.log("Personal ID: "+personalID);
    console.log("Unique Employee number: "+employeeID);
}

solve(["Amanda","Jonson", "27", "f", "8306112507", "27563571"]);