require(["dojo/on",
         "dojo/dom",
       //  "dijit/registry",
         "dojo/domReady!"
         ], 
function(on,
		 dom
		 //, registry
  		){ 
	on.emit(myBijit, "myCustomEvent", {"someField": 123});
	}
);
