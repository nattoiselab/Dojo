require([ "dijit/form/FilteringSelect", 
          "dojo/store/Memory", 
          "dojo/json",
          "dojo/text!./06/currencies.json", 
          "dojo/ready" 
		], function(FilteringSelect, Memory, json, currencies, ready) {

	ready(function() {
		// create store instance referencing data from currencies.json
		var currencyStore = new Memory({
			idProperty : "abbreviation",
			data : json.parse(currencies)
		});

		// create FilteringSelect widget, populating its options from the store
		var select = new FilteringSelect({
			name : "currencySelect",
			placeHolder : "Select curency",
			store : currencyStore,
			/*
			onChange : function(val) {
				document.getElementById("value").innerHTML = val;
				document.getElementById("displayedValue").innerHTML = this
						.get("displayedValue");
			}
			*/
		}, "currencySelect");
		select.startup();
	});
});
