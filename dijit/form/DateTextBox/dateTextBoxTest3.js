require(["dojo/parser", 
         "dijit/form/DateTextBox", 
         "dojo/domReady!"
        ], function(parser){
    parser.parse();
    myShortYear.constraints.fullYear = false;
    myShortYear.set('value', myShortYear.get('value')); // reformat display to short year
});
