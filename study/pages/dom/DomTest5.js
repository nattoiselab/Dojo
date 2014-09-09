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
	
	// 2nd parameter is the classes are added, no class name can be removed
	// domClass.replace(one, "c1replace");
	// console.log("1> The current Node ClassName is : " + one.className);

	// 2nd parameter is the classes are added, 3rd parameter is the classes are removed
	domClass.replace(one, "c3", "c1");
	console.log("1> The current Node ClassName is : " + one.className);

});
