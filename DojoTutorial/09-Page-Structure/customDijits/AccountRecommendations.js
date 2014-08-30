define([ "dojo/_base/declare", 
         "dojo/_base/lang", 
         "dijit/_Widget", 
         "dijit/_TemplatedMixin",
		"dijit/_WidgetsInTemplateMixin",
		"dojo/text!customDijits/templates/AccountRecommendations.html",
		"dijit/registry", 
		"dojo/dom-class", 
		"dojo/on", 
		"dojo/dom-attr" ], function(declare, 
				lang, 
				_Widget,
				_TemplatedMixin, 
				_WidgetsInTemplateMixin, 
				template, 
				registry, 
				domClass,
				on, 
				domAttr) {
	return declare([ _Widget,
	                 _TemplatedMixin,
			_WidgetsInTemplateMixin ], {
		
		templateString : template,

		constructor : function() {

		},
	
		balanceAlert: 1000,
		_balance: 0,
		
		_setBalanceAttr: function(balance) {
			this._balance = balance;
			
			if(balance > this.balanceAlert) {
				domAttr.set(this.recommendationList, "innerHTML", "Your balance (" + balance + ") is greater than the threshold we would recommend (" + this.balanceAlert + "). We suggest you move some money into another account.");
			} else {
				domAttr.set(this.recommendationList, "innerHTML", "Everything looks fine with your account.");
			}
		},
	});
});
