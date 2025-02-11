// Task 1 working with Arrays

let products = [
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name: "Phone", price: 800, category: "Electronics"}
]
function getProductsByCategory(products, category) {
    return products.filter(product => product.category === category)
}

console.log(getProductsByCategory(products, "Electronics"));

// Task 2: Array Methods - Map

function applyDiscount(products, discountRate) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate)
    }
    ))
}

console.log(applyDiscount(products, 0.1));