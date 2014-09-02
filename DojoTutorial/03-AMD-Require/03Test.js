require([ "dojo/query", 
          "dojo/_base/fx", 
          "dojo/dom",
          "dojo/dom-attr", 
          "dojox/timing", 
          "dojo/_base/lang", 
          "dojo/domReady!" ], 
		function(query, 
				fx, 
				dom, 
				domAttr, 
				timing, 
				lang) {

		var nodes = query("div");

		nodes.style({
			backgroundColor : "blue",
			opacity : 0.1,
			fontSize : "36px"
		});

		var newText = "NEWPARAGRAPH";

		var timer = new timing.Timer(5000);

		timer.onTick = function() {
			domAttr.set(dom.byId("para"), "innerHTML", newText);
		};

		timer.start();

		nodes.onclick(function(e) {
			fx.anim(e.target, {
				opacity : 1.0
			});
		});
	
});
