// creating modules
// modules helps us for data encapsulation
// modules returns the object
// Modules helps us to create independnt code from one another.
// Its always best practice to have modules inorder to have independet code like logic module,UI module, and controller module for controlling all others

// module works with IIFEs and Clousures
// In order to write IIFE we need anonymus function inside () and immediately called.

// budget controller all the business logic and methods goes here
var budgetController = (function(){
    
})();

// using public methods of budget module

// UI controller handles all the UI changes 
// This controller doesnt know aboth other modules available
var UIController= (function(){
    // some code
})();

// Controlling UI and Business logic
// This controller knows about budget module and UI module
var controller = (function(budgetCtrl,UICtrl){
    
    var allEvents = function(){
        console.log("Enter and mouse is Working. ");
    }  
    
    document.querySelector('.add__btn').addEventListener('click',allEvents);
    document.addEventListener('keypress',function(event){
        if(event.keyCode === 13 || event.which === 13)
        allEvents();
    });

})(budgetController,UIController);