define([ "dojo/_base/declare", 
         "dijit/form/FilteringSelect",
         "dojo/text!./06/currencies.json" 
         //"dojo/store/JsonRest" 
        ], function(declare, FilteringSelect, currencies) { //, JsonRest
	return declare([ FilteringSelect ], {
		_setUrlAttr : function(url) {
			this._set("url", url);
			/*
			var store = new JsonRest({
				target : this.url
			});
			*/
			// create store instance referencing data from currencies.json
			var currencyStore = new Memory({
				idProperty : "abbreviation",
				data : json.parse(currencies)
			});

			this.set("store", currencyStore);
		},

		url : ""
	});
});
