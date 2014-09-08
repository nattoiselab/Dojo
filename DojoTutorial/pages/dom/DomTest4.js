// Require the DOM resource
require(["dojo/dom",
         "dojo/dom-class",
         "dojo/domReady!"
	], function(dom, domClass) {
		
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
	
	//class names are added to the right side...
	domClass.add(one, "c2");

	// classes are removed from the left side...
	domClass.remove(one, "c1");
	console.log("1> The class name 'c1' of Node 'one' is removed and the current Node ClassName is : " + one.className);
});
