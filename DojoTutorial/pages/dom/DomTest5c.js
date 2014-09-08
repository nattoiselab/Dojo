// Require the DOM resource
require(["dojo/dom",
         "dojo/dom-class",
         "dojo/on",
         "dojo/domReady!"
	], function(dom, domClass, on) {
		
	on(dom.byId("button1"), "click", function(){
	    domClass.replace("example", "newStyle", "oldStyle");
	});
});
