 
 
 function calculate(operation, number1, number2) {
    if(operation === "add") {
        console.log(number1 + number2); 
    }else if (operation === "subtract") {
      console.log(number1 - number2)
    }else if (operation === "multiply"){
      console.log(number1 * number2)
    } else if (operation === "divide") {
      console.log(number1 / number2)
    }else {
      console.log("Invalid operation")
    }

}
calculate("add", 5, 3); // Output: 8