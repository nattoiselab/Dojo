require(["dojo/on",
         "dojo/dom",
       //  "dijit/registry",
         "dojo/domReady!"
         ], 
function(on,
		 dom
		 //, registry
  		){ 
	on(dom.byId("myButton"), "click", function(evt){//registry.byId("myButton")
		console.log("The button was clicked!");
	}
			);
});
