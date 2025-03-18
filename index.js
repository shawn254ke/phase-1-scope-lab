// Declare customerName in global scope
var customerName = 'bob';

// Function to uppercase the customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer variable
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declaring without 'var', 'let', or 'const' makes it global
}

// Function to overwrite bestCustomer variable
function overwriteBestCustomer(newBestCustomer) {
  bestCustomer = newBestCustomer;
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = 'someone';

// Function attempting to change leastFavoriteCustomer (should fail)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new person'; // Will throw an error since it's a constant
}
