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
    var DOMstrings = {
        add_type: '.add__type',
        add_desc: '.add__description',
        add_value: '.add__value',
        add_btn: '.add__btn'
    }
    
    return {
        getDOMstrings: DOMstrings,
        getData: function(){
            // return the object with all the input data
            return {
                type: document.querySelector(DOMstrings.add_type).value,
                description: document.querySelector(DOMstrings.add_desc).value,
                value: document.querySelector(DOMstrings.add_value).value
            }
        }
    };
})();

// Controlling UI and Business logic
// This controller knows about budget module and UI module
var controller = (function(budgetCtrl,UICtrl){
    var DOMs = UICtrl.getDOMstrings;
    // all the events goes here
    var allEvents = function(){
        // 1.Take input from form
        var input;
        input = UICtrl.getData();
        console.log(input);
        // 2.Add item in data

        // 3.Show the data in UI
    }  
    // mouse cick event
    document.querySelector(DOMs.add_btn).addEventListener('click',allEvents);
    // key press on anywhere in the documents
    document.addEventListener('keypress',function(event){
        // key must be enter key or return key
        if(event.keyCode === 13 || event.which === 13)
        allEvents();
    });

})(budgetController,UIController);