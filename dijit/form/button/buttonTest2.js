require(["dijit/form/Button", 
         "dojo/dom", 
         "dojo/domReady!"
        ], function(Button, dom){
    
	// Create a button programmatically:
    var myButton = new Button({
        label: "Click me 1!",
        onClick: function(){
            // Do something:
            dom.byId("result1").innerHTML += "Thank you! ";
            console.log("Create a simple button programmatically");
        }
    }, "progButtonNode").startup();
    
    var button = new Button({
        label: "Click Me 2!",
        onClick: function(){ console.log("First button was clicked!"); }
    }, "btn");
    button.startup();

});
