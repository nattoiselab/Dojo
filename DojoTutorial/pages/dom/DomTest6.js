require(["dojo/dom-class", 
         "dojo/dom", 
         "dojo/on", 
         "dojo/domReady!"
         ], function(domClass, dom, on){
	
	on(dom.byId("button1"), "click", function(){
		domClass.toggle("example1", "style1");
	});
});
