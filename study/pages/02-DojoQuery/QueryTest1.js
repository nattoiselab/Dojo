// Require the DOM resource
require(["dojo/dom", "dojo/domReady!"], 
	function(dom) {
     
    	function setText(node, text){
    		node = dom.byId(node);
    		node.innerHTML = text;
    	}
 
    	var one = dom.byId("one");
    	setText(one, "One has been set");
    	setText("two", "Two has been set as well");
	}
);
