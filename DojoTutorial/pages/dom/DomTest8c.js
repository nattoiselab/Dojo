require([ "dojo/dom-style", 
          "dojo/dom", 
          "dojo/on", 
          "dojo/domReady!" ],
		function(style, dom, on) {
			on(dom.byId("command"), "click", function() {
				var backgroundColor = style.set("example", "backgroundColor",
						"green");
				dom.byId("output").innerHTML = "example.backgroundColor: "
						+ backgroundColor;
		});
});
