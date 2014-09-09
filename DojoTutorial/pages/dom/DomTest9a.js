require([ "dojo/dom-attr", 
          "dojo/dom", 
          "dojo/domReady!" 
          ], function(domAttr,
        		  	  dom) {
	var output = "";
	
	if (domAttr.has("model", "name")) {
		output += "Node 'model' has attribute name <br/>";
	} else {
		output += "Node 'model' does not have attribute name <br/>";
	}
	if (domAttr.has("model", "baz")) {
		output += "Node 'model' has attribute baz <br/>";
	} else {
		output += "Node 'model' does not have attribute baz <br/>";
	}
	if (domAttr.has("model", "foo")) {
		output += "Node 'model' has attribute foo <br/>";
	} else {
		output += "Node 'model' does not have attribute foo <br/>";
	}
	
	dom.byId("output").innerHTML = output;
});
