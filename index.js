// Write your solution in this file!
//Declare Global variables
var customerName = 'bob'
const leastFavoriteCustomer = "sarah"

//Returns the customerName variable
function customerName(){
    return customerName;
}
console.log(upperCaseCustomerName1());
// modifes the customerName variable
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}
console.log(upperCaseCustomerName());

//setBestCustomer
function setBestCustomer(){
    bestCustomer = "not bob";
}
console.log(setBestCustomer());

//Overwrites the best customer
function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}
console.log(overwriteBestCustomer());

//Unsuccessfully tries to reassign the least favourite customer.
function changeLeastFavoriteCustomer(){
    return leastFavoriteCustomer = "manuel";
}
console.log(leastFavoriteCustomer());
