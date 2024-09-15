// Task 1 - Create an Inventory Array of Product Objects


const inventory = [
    { name: 'Stapler', price: 10, quantity: 27, lowStockLevel: 5 },
    { name: 'Pen', price: 5, quantity: 100, lowStockLevel: 15 },
    { name: 'Glue', price: 6, quantity: 33, lowStockLevel: 7 },
    { name: 'Sticky Notes', price: 15, quantity: 25, lowStockLevel: 25 },
    { name: 'Scissors', price: 20, quantity: 49, lowStockLevel: 9 }
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

// Task 4 - Create a Function to Check Low Stock Products

function checkLowStock () { // Function to check for low stock products in the inventory
console.log(`Low Stock Products:`); //header message to indicate the beginning of the low report
inventory.forEach(product => { // Iterate over each product
    if (product.quantity <= product.lowStockLevel) {  // Check if the product's quantity is less than or equal to its lowStockLevel
        console.log(`${product.name} is low in stock.`); // If true, log the product's name and indicate that it is low on stock
    }
});
}

// Task 5 - Create a Function to Calculate Total Inventory Value

function calculateInventoryValue () {
    let totalValue = 0; // Initialize a variable to keep track of the total value


    inventory.forEach(product => {
        const productValue = product.price * product.quantity; // Calculate the value of the current product by multiplying its price by its quantity

        totalValue += productValue; // Add the value of the current product to the total value
    });

    return totalValue;
}
 

// Task 6 - Create a Function to Process a Sale

function processSale (productName, unitsSold) {

    const product = inventory.find(item => item.name === productName); // Find the product in the inventory array by its name

    if (product) { // Check if the product was found
        updateStock(product, unitsSold); //If yes, call updateStock to reduce the quantity
    } 
    else {
        console.log(`Error: Product ${product.name} not found in inventory.`); // if not, log an error message
    }
}

// Test Calls
console.log("----- Display Product Details -----");
displayProductDetails(inventory[0]); // Display details of the first product (stapler)

console.log("\n----- Process a Sale (Stapler) -----");
processSale('Stapler', 4); // Process sale of 4 Staplers

console.log("\n----- Check Low Stock -----");
checkLowStock(); // Check for products that are low in stock

console.log("\n----- Calculate Inventory Value -----");
console.log(`Total Inventory Value: $${calculateInventoryValue()}`); // Calculate and log total inventory value

console.log("\n----- Process a Sale (Laptop) -----");
processSale('Stapler', 28); // Try to sell more staplers than available

console.log("\n----- Display Product Details (After Sale) -----");
displayProductDetails(inventory[0]); // Display updated details of stapler after sale

