// Write your solution in this file!
var customerName = "bob"
const leastFavoriteCustomer = "lindsay"

function upperCaseCustomerName(){
 customerName = customerName.toUpperCase()
}

function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "not lindsay"
}

//error: Uncaught TypeError: Assignment to constant variable. 
  //at changeLeastFavoriteCustomer
