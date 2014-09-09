require([ "dojo/dom-style", 
          "dojo/dom", 
          "dojo/on", 
          "dojo/domReady!" ],
		function(style, dom, on) {
			on(dom.byId("command"), "click", function() {
				var backgroundColor = style.set("divNodeID", "backgroundColor",
						"green");
				dom.byId("output").innerHTML = "divNodeID.backgroundColor: "
						+ backgroundColor;
		});
});
