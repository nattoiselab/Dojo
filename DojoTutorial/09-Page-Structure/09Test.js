require(["dijit/registry",
         "dojo/request/xhr",
         "dojo/parser",
         "controllers/09TestPageController",
         "dojo/domReady!"
         ], 
function(registry,
		 xhr,
		 parser,
		 TestPageController09
){ 

	var myInit = function(){
				
		parser.parse();
		new TestPageController09();

	};
	parser.parse().then(myInit);

});
