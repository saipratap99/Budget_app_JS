// creating modules
// modules helps us for data encapsulation
// modules returns the object
// Modules helps us to create independnt code from one another.
// Its always best practice to have modules inorder to have independet code like logic module,UI module, and controller module for controlling all others

// module works with IIFEs and Clousures
// In order to write IIFE we need anonymus function inside () and immediately called.

// budget controller all the business logic and methods goes here
var budgetController = (function(){
    var x = 5;
    // add and x cannot be accessed outside 
    function add(a){
        return x+a;
    }
    // publicTest can only be accessed outside of this module
    return {
        publicTest: function(b){
            return add(b);
        }
    }
})();

// using public methods of budget module
console.log(budgetController.publicTest(8)) // outputs => 13

// UI controller handles all the UI changes 
// This controller doesnt know aboth other modules available
var UIController= (function(){
    // some code
})();

// Controlling UI and Business logic
// This controller knows about budget module and UI module
var controller = (function(budgetCtrl,UICtrl){
    console.log(budgetCtrl.publicTest(9)); // => 14

})(budgetController,UIController);