define(["dijit/_Widget",
		"dijit/_TemplatedMixin", 
		"dijit/_WidgetsInTemplateMixin", 
		"dojo/text!customDijits/templates/AccountMetadata.html",
		"dijit/registry", 
		"dojo/dom-class",
		"dijit/form/TextBox", 
		"dijit/form/NumberTextBox", 
		"dijit/form/NumberSpinner"
		 ], function( _Widget, 
				 _TemplatedMixin, 
				 _WidgetsInTemplateMixin, 
				 template, 
				 registry, 
				 domClass) {
	return dojo.declare([dijit._Widget,
			dijit._TemplatedMixin, 
			dijit._WidgetsInTemplateMixin ], {
		
		templateString : template,

		constructor : function() {
			
		},
	
		_setAccountNameAttr: { node: "accountnameNode", type: 'attribute', attribute: 'value' },
		_setAccountNumberAttr: { node: "accountnumberNode", type: 'attribute', attribute: 'value' },
		_setSortCodeAttr: { node: "sortcodeNode", type: 'attribute', attribute: 'value' },
		
		_setBalanceAttr: function(balance) {
			this.balanceNode.set("value", balance);
			
			if(balance < 0) {
				domClass.add(this.balanceNode.domNode, "alert");
			} else {
				domClass.remove(this.balanceNode.domNode, "alert");
			}
		},
		
		setAccountData: function(data) {
			this.set("accountName", data.accountName);
			this.set("accountNumber", data.accountNumber);
			this.set("sortCode", data.sortCode);
			this.set("balance", data.balance);
		}
	});
});
