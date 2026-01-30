# Shopping Cart Total

Calculate the total price of all in-stock products across multiple shopping carts.

## The function must:

- Iterate over carts
- Iterate over products
- Ignore out-of-stock items
- Add up prices
- Return the total price

Example input:

```javascript
const carts = [
  {
    id: 1,
    products: [
      { name: 'Laptop', price: 1000, inStock: true },
      { name: 'Mouse', price: 50, inStock: false },
      { name: 'Keyboard', price: 120, inStock: true },
    ],
  },
  {
    id: 2,
    products: [
      { name: 'Monitor', price: 300, inStock: true },
      { name: 'HDMI Cable', price: 20, inStock: false },
    ],
  },
  {
    id: 3,
    products: [{ name: 'USB Hub', price: 40, inStock: true }],
  },
];
```

Expected output:

```javascript
calculateTotal(carts); // Outputs: 1460
```
