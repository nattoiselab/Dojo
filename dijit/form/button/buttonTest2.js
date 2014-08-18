require(["dijit/form/Button", 
         "dojo/dom", 
         "dojo/domReady!"
        ], function(Button, dom){
    
	// Create a button programmatically:
    var myButton = new Button({
        label: "Click me!",
        onClick: function(){
            // Do something:
            dom.byId("result1").innerHTML += "Thank you! ";
            console.log("Create a simple button programmatically");
        }
    }, "progButtonNode").startup();
});
