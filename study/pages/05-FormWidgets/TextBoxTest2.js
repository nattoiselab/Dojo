require([ "dijit/form/TextBox", 
          "dojo/ready" 
		], function(TextBox, ready) {

	ready(function() {
		// create FilteringSelect widget, populating its options from the store
		var myTextBox = TextBox({
			name: "firstname",
			value: "",
			placeHolder: "type in your name"
		}, "firstname");
	});
});
