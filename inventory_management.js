// Task 1 - Create an Inventory Array of Product Objects


const inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
]; //Sample Data for Inventory Initialization

// Task 2 - Create a Function to Display Product Details

function displayProductDetails (product) {
    const stockStatus = product.quantity <= product.lowStockLevel ? 'Low Stock' : 'In Stock';
    console.log(`Product: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Quantity in Stock: ${product.quantity}`);
    console.log(`Stock Status: ${stockStatus}`);
}



