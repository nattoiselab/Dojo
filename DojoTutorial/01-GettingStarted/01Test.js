require(["dojo/query", "dojo/_base/fx", "dojo/domReady!"], 
	function(query, fx){ 
    
		var nodes = query("div");
		
		nodes.style({
				backgroundColor: "blue",
				opacity: 0.1,
				fontSize: "36px"
			});
		
		
		
		nodes.onclick(
			function(e){
				fx.anim(e.target, { opacity: 1.0});
			}
		);
});
