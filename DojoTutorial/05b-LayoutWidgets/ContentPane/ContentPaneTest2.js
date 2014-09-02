require(["dijit/layout/ContentPane", 
         "dojo/domReady!"
         ], function(ContentPane){
    new ContentPane({
      content:"<p>Hi, this is ContentPane with Programmatic.</p>",
      style:"height:125px"
    }, "targetID").startup();
});
