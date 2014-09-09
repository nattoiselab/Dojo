require([ "dojo/dom-style", 
          "dojo/dom", 
          "dojo/on", 
          "dojo/domReady!" ],
		function(style, dom, on) {
			on(dom.byId("command"), "click", function() {
				var backgroundColor = style.set("divNodeID1", "backgroundColor",
						"green");
				dom.byId("output1").innerHTML = "divNodeID1.backgroundColor: "
						+ backgroundColor;
				
				var divNodeStyleArr = style.set("divNodeID2", { 
						backgroundColor: "green",
					      border: "1px dashed black",
					      margin: "0.5em",
					      textAlign: "right"
					});
				dom.byId("output2").innerHTML = "divNodeStyleArr.backgroundColor: "
						+ divNodeStyleArr.backgroundColor;
				dom.byId("output2").innerHTML += "; <br/>divNodeStyleArr.border: " 
					    + divNodeStyleArr.border;
				dom.byId("output2").innerHTML += "; <br/>divNodeStyleArr.margin: " 
				    + divNodeStyleArr.margin;
				dom.byId("output2").innerHTML += "; <br/>divNodeStyleArr.textAlign: " 
				    + divNodeStyleArr.textAlign;
		});
});
