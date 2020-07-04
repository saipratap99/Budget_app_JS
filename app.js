// creating modules
// modules helps us for data encapsulation
// modules returns the object
// Modules helps us to create independnt code from one another.
// Its always best practice to have modules inorder to have independet code like logic module,UI module, and controller module for controlling all others

// module works with IIFEs and Clousures
// In order to write IIFE we need anonymus function inside () and immediately called.

// budget controller all the business logic and methods goes here
var budgetController = (function(){

    // function constructors to create multiple similar objects

    var Income = function(id,desc,value){
        this.ID = id;
        this.description = desc;
        this.value = value;
    };
    
    var Expense = function(id,desc,value){
        this.ID = id;
        this.description = desc,
        this.value = value;
    };
    
    // data structure to store all items and total budget
    var data = {
        allItems:{
            inc: [],
            exp: []
        },
        total:{
            exp:0,
            inc:0
        },
        totalBudget: 0
    }

    return {
        addItem: function(type,desc,value){
            var newItem,id;

            // set id for each item in the data 
            if(data.allItems[type].length > 0)
            id = data.allItems[type][data.allItems[type].length-1].ID + 1;
            else
            id = 0;

            if(type === 'inc'){
                newItem = new Income(id,desc,value);
            }else{
                newItem = new Expense(id,desc,value);
            }

            data.allItems[type].push(newItem);
            return newItem;
        }
    }
    
})();

// using public methods of budget module

// UI controller handles all the UI changes 
// This controller doesnt know aboth other modules available
var UIController= (function(){
    var DOMstrings = {
        add_type: '.add__type',
        add_desc: '.add__description',
        add_value: '.add__value',
        add_btn: '.add__btn',
        inc_list: '.income__list',
        exp_list: '.expenses__list'
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
        },
        addItem: function(type,data){
            var html,newHtml,ele;
            if(type === 'inc'){
                ele = DOMstrings.inc_list;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            else{
                ele = DOMstrings.exp_list;
                html = '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%desc%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }

            newHtml = html.replace('%id%',data.ID).replace('%desc%',data.description).replace('%value%',data.value);
            
            document.querySelector(ele).insertAdjacentHTML('beforeend',newHtml);
        },
        clearFields: function(){
            var fields,fieldsArr;
            // select all input fields and stores as list
            fields = document.querySelectorAll(DOMstrings.add_desc + ',' + DOMstrings.add_value);
            // slice converts to array
            fieldsArr = Array.prototype.slice.call(fields);

            fieldsArr.forEach(function(curr) {
                curr.value = '';
            });

            // focus the description
            fieldsArr[0].focus();   
        }
    };
})();

// Controlling UI and Business logic
// This controller knows about budget module and UI module
var controller = (function(budgetCtrl,UICtrl){
    var DOMs = UICtrl.getDOMstrings;
    // all the events goes here
    var allEvents = function(){
        var input,newItem;
        // 1.Take input from form
        input = UICtrl.getData();
        console.log(input);
        // 2.Add item in data
        newItem = budgetCtrl.addItem(input.type,input.description,input.value);
        console.log(newItem);
        // 3.Show the data in UI
        UICtrl.addItem(input.type,newItem);
        // 4.Clear fields
        UICtrl.clearFields();
        
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