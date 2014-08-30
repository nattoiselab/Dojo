define([ "dojo/_base/declare", 
         "dojo/_base/lang", 
         "dijit/_WidgetBase", 
         "dijit/_TemplatedMixin",
         "dijit/_WidgetsInTemplateMixin",
         "dojo/text!customDijits/templates/AccountSelector.html",
         "dijit/registry", 
         "dojo/dom-class", 
         "dojo/on", 
         "dojo/Evented",
         "customDijits/JsonRestFilteringSelect" 
		], function(declare, 
				lang, 
				_Widget,
				_TemplatedMixin, 
				_WidgetsInTemplateMixin, 
				template, 
				registry, 
				domClass,
				on, 
				Evented) {
		return declare([ _Widget, 
	                 _TemplatedMixin,
	                 _WidgetsInTemplateMixin, 
					Evented ], {
			templateString : template,

			constructor : function() {

			},

			postCreate : function() {
				on(this.selector, "change", lang.hitch(this, function(data) {
					this.emit("accountSelected", {
						accountNumber : data
					});
				}));
			}
		});
});
