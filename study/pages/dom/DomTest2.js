// Require the DOM resource
require(["dojo/dom", 
         "dojo/dom-class",
         "dojo/domReady!"
        ], function(dom, domClass){
    
	function setText(node, text){
		node = dom.byId(node);
		node.innerHTML = text;
	}
	
	/** dojo/dom resource's byId method is used to get elements from DOM
	 *  and return a DOM node object with that ID
	 *  If no matching node is found, a null value will be returned
	 *  
	 *  same as native JS: document.getElementById() method
	 */
	var one = dom.byId("one");
	
	// The setText function sets the text of a node
	setText(one, "One has been set");
	setText("two", "Two has been set as well");
	
	//class names are added to the right side...
	domClass.add(one, "c1");
	console.log("1> Class name: " + one.className);
	
	//adding one more class name for the same node
	domClass.add(one, "c2");
	console.log("2> Class name: " + one.className);
	
	//adding a class already there does nothing...
	domClass.add(one, "c2");
	console.log("3> Class name: " + one.className);
	
	//"c2 c1" NOT already there...
	domClass.add(one, "c2 c1");
	console.log("4> Class name: " + one.className);
	
	// supposed to return "true" as the class name with "c1" can be found in node id = one.
	console.log(domClass.contains(one, "c1"));

	// supposed to return "true" as the class name with "c1" can be found in node id = one.
	console.log(domClass.contains(one, "c2"));

	// supposed to return "false" as the class name with "c1" can be found in node id = one.
	console.log(domClass.contains(one, "c2 c1"));

	// supposed to return "false" as the class name with "c1" can be found in node id = one.
	console.log(domClass.contains(one, "c10"));

});
