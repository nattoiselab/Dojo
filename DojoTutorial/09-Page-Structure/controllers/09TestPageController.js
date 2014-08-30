define([ "dojo/_base/declare", 
         "dojo/ready", 
         "dojo/on", 
         "dojo/_base/lang",
		"dijit/registry", 
		"dijit/_WidgetBase", 
		"dojo/request/xhr"
		], 
		function(declare, 
				ready, 
				on, 
				lang, 
				registry, 
				_WidgetBase, 
				xhr) {
	/**
	 * 09TestController - Page level controller for the page.
	 * 
	 * This controller synchronizes the data between multiple widgets on the page.
	 * 
	 */
	return declare("09TestPageController", 
			[ _WidgetBase ], {
		/**
		 * Variables
		 * 
		 * _xxx is private variables
		 */
		_accountSelector : null,
		_accountMetadata : null,
		_accountRecommendations : null, 

		/**
		 * @constructor for the page controller.
		 * 
		 * CAN BE REMOVED unless any specific action is required while object creation.
		 */
		constructor : function() {
			ready(lang.hitch(this, this.init));
			console.log("09TestPageController constructor() is committed.");
		},

		/**
		 * LifeCycle method called by the base controller.
		 * 
		 * CAN BE REMOVED unless any specific init processing is required.
		 * 
		 * * Notes: Dojo lifecycle: destroyAllHandlers, postCreate may be omitted here.
		 * 
		 */
		init : function() {
			this.inherited(arguments);
			console.log("09TestPageController init() is committed.");

			// Initialize the bijits.
			this._accountSelector = registry.byId("accountSelector");
			this._accountMetadata = registry.byId("accountMetadata");
			this._accountRecommendations = registry.byId("accountRecommendations");

			this._accountRecommendations.set('balanceAlert', 100);
			
			on(this._accountSelector, "accountSelected", lang.hitch(this,
					function(event) {
						xhr("09/accounts/" + event.accountNumber + ".json", {
							handleAs : "json"
						}).then(lang.hitch(this, function(data) {
							this._accountMetadata.setAccountData(data);
							this._accountRecommendations.set('balance', data.balance);
						}));
					}));
		}
		/**
		 * * Notes: Dojo lifecycle: initEventHandlers, initComplete may be omitted here.
		 */
	});
});
