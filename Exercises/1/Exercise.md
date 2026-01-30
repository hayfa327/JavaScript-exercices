# Simple Calculator Function

## Functional Requirements

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
calculate(10, 5, 'add'); // Outputs: 15
calculate(10, 5, 'subtract'); // Outputs: 5
calculate(10, 5, 'multiply'); // Outputs: 50
calculate(10, 5, 'divide'); // Outputs: 2
calculate(10, 5, 'power'); // Outputs: "Invalid operation"
```
