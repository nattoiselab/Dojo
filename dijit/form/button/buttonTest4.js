require(["dijit/form/Button", 
         "dojo/domReady!"
        ], function(Button) {
				var button = new Button({
					label: "Click Me!",
					onClick: function(){ console.log("First button was clicked! (programmatically)"); }
				}, "btn");
				button.startup();

				var button2 = new Button({
					iconClass:"dijitIconNewTask",
					showLabel:false,
					label: "Click Me!", // analogous to title when showLabel is false
					onClick: function(){ console.log("Second button was clicked! (programmatically)"); }
				}, "btn2");
				
				button2.startup();
			}
);
