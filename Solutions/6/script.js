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

function cartTotal(carts) {
    let total = 0;

    for (const cart of carts) {
        const cartTotal = cart.products
            .filter(product => product.inStock === true)
            .reduce((sum, product) => sum + product.price, 0);

        total += cartTotal;
    }

    return total;
}

console.log(cartTotal(carts));
