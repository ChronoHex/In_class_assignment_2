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

// Task 3: Array Methods - Reduce
let sales = [250, 400, 150, 900, 1200];
function calculateTotalRevenue(sales){
    return sales.reduce((total, sale) => total + sale, 0)
}
console.log(calculateTotalRevenue(sales));

// Task 4: Object Manipulation
let employee = {
    name: "John Doe",
    salary: 50000,
    position: "Manager"
};

console.log(employee)

function updateSalary(employee, percentageIncrease) {
    employee.salary += employee.salary * percentageIncrease
}

updateSalary(employee, 0.1)
console.log(employee)