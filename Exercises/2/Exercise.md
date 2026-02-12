# Function and Closure

## Function

### Exercise: Functional Requirements

The function must accept three parameters:

- number1 (a number)
- number2 (a number)
- operation (a string)

Supported operations:

- "add"
- "subtract"
- "multiply"
- "divide"

The function must:

- Perform the correct calculation based on the operation
- Return the result
- Return a helpful message if the operation is invalid
- The function must not prompt the user or use the DOM.
- All results must be displayed using console.log.

Example usage:

```javascript
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

calculate(10, 5, 'add'); // Outputs: 15
calculate(10, 5, 'subtract'); // Outputs: 5
calculate(10, 5, 'multiply'); // Outputs: 50
calculate(10, 5, 'divide'); // Outputs: 2
calculate(10, 5, 'power'); // Outputs: "Invalid operation"
```

## Hoisting

### Exercise: Predict the Output

Try to predict the output of each code snippet **before** running it. Then explain why.

**Snippet A:**

```javascript
// undefined because console.log came before declare the varibale 
console.log(a);  
console.log(b);                  
var a = 1;
let b = 2;
```

**Snippet B:**

```javascript
// the the first function its works (- Hello!- in the terminal)
sayHello();//undefiend 
sayGoodbye();// undefiend

function sayHello() {
    console.log('Hello!');
}

var sayGoodbye = function() {
    console.log('Goodbye!');
};
// will print sayGoodBye its not function because use (var - typeError)
```

**Snippet C:**

```javascript
// undefiend / 20 (because we declare x two times and in this case first x is undefiend )
var x = 10;

function foo() {
    console.log(x);
    var x = 20;
    console.log(x);
}

foo();
```

## Closure

### Exercise: Counter Factory

Create a function called `createCounter` that:

1. Takes a `startValue` parameter (default to 0)
2. Returns an object with three methods:
    - `increment()` - increases the count by 1 and returns the new value
    - `decrement()` - decreases the count by 1 and returns the new value
    - `getCount()` - returns the current count without changing it
3. The count should be private (not directly accessible from outside)

Example usage:

```javascript
const counter = createCounter(5);
console.log(counter.getCount()); // 5
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.getCount()); // 6

const counter2 = createCounter(); // starts at 0
console.log(counter2.getCount()); // 0

function createCounter (startValue = 0 )  {
    let count = startValue; 
    return {
      increment() {
      count++; 
      return count; 
    }, 
   
    decrement() {
      count--;
      return count;
    },

    getCount() {
      return count;
    }
  }; 
} 
```

### Exercise: The Classic Loop Problem

**Part A:** Explain why this code doesn't work as expected:

```javascript
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 1000);
}
// Expected: 1, 2, 3 (one per second)
// Actual: ???
```

**Part B:** Fix the code using a closure (without changing `var` to `let`).

**Part C:** Fix the code by using `let` instead.
