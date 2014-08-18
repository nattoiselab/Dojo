require([
    "dojo/parser",
    "dijit/form/RadioButton",
    "dijit/form/Button", // used for example purpose
    "dojo/domReady!"
], function(parser, RadioButton){
    parser.parse();
    var radioOne = new RadioButton({
        checked: true,
        value: "tea",
        name: "drink",
    }, "radioOne").startup();
});
