require([ "dojo/dom-style", 
          "dojo/dom", 
          "dojo/on", 
          "dojo/domReady!" ],
		function(style, dom, on) {
			on(dom.byId("command"), "click", function() {
				var node = dom.byId("example");
				var computedStyle = style.getComputedStyle(node);
				var output = "computedStyle.width: " + computedStyle.width
						+ "<br/>";
				output += "computedStyle.height: " + computedStyle.height
						+ "<br/>";
				output += "computedStyle.backgroundColor: "
						+ computedStyle.backgroundColor + "<br/>";
				dom.byId("output").innerHTML = output;
		});
});
