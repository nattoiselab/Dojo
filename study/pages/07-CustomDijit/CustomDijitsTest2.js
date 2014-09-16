	require(["dojo/parser",
	         "dojo/domReady!"
	         ], 
	function(parser){ 
		var theApp = function(){
            console.log("07 App parsing complete");
		};
		
		parser.parse().then(theApp);
	});
