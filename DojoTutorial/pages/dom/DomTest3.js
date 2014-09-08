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


	domClass.contains(one, "c1"); 
	console.log("1> Node 'one' contains class 'c1' : " + domClass.contains(one, "c1") );
	
	domClass.contains(one, "c2"); 
	console.log("2> Node 'one' contains class 'c2' : " + domClass.contains(one, "c2") );
	
	domClass.contains(one, "c2 c1"); 
	console.log("3> Node 'one' contains class 'c2 c1' : " + domClass.contains(one, "c2 c1") );
	
	domClass.contains(one, "c1 c2"); 
	console.log("4> Node 'one' contains class 'c1 c2' : " + domClass.contains(one, "c1 c2") );
	
	domClass.contains(one, "c10"); 
	console.log("5> Node 'one' contains class 'c10' : " + domClass.contains(one, "c10") );
});
