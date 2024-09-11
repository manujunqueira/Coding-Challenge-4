// Task 1 - Create an Inventory Array of Product Objects


const inventory = [
    { name: 'Laptop', price: 1200, quantity: 10, lowStockLevel: 3 },
    { name: 'Smartphone', price: 800, quantity: 5, lowStockLevel: 2 },
    { name: 'Tablet', price: 400, quantity: 7, lowStockLevel: 1 },
    { name: 'Headphones', price: 100, quantity: 15, lowStockLevel: 5 },
    { name: 'Smartwatch', price: 250, quantity: 3, lowStockLevel: 1 }
]; //Sample Data for Inventory Initialization

// Task 2 - Create a Function to Display Product Details

function displayProductDetails (product) { //the finction takes product object and logs the information below based on "lowStockLevel"
    const stockStatus = product.quantity <= product.lowStockLevel ? 'Low Stock' : 'In Stock'; //chose ternary operator
    console.log(`Product: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Quantity in Stock: ${product.quantity}`);
    console.log(`Stock Status: ${stockStatus}`);
}

// Task 3 - Create a Function to Update Product Stock After Sales

function updateStock (product, unitsSold) { // Check if the unitsSold exceeds the available stock
    if (unitsSold > product.quantity) {
        console.log(`Transaction Error: Insufficient stock for ${product.name}. Only ${product.quantity} units available.`);
        return; // Exit the function if there is insufficient stock
    }

// Deduct the unitsSold from the available stock - if condition was not met
    product.quantity -= unitsSold;

    if (product.quantity === 0) { // Check if the product is now out of stock
        console.log(`Stock Update: ${product.name} is now out of stock.`);
    } 
    else if (product.quantity <= product.lowStockLevel){ // Check if the product is now at or below the low stock level
        console.log(`Stock Update: ${product.name} is now on low stock. Remaining quantity: ${product.quantity}.`); 
    }
    else {// If the product still has sufficient stock
        console.log(`Stock Update: ${product.name} stock successfully updated. Remaining quantity: ${product.quantity}.`);
    }
}

