require([ "dojo/dom-style", 
          "dojo/dom", 
          "dojo/on", 
          "dojo/domReady!" ],
		function(domStyle, dom, on) {
			on(dom.byId("command"), "click", function() {
				var backgroundColor = domStyle.get("divNodeID", "backgroundColor");
			    dom.byId("output").innerHTML = "divNodeID.backgroundColor: " + backgroundColor;
		});
});
