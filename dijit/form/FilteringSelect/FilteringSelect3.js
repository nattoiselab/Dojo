require(["dojo/dom", 
         "dojo/request",
         "dojo/_base/window",
         "dojo/data/ObjectStore",
         "dojo/store/Memory",
         "dojo/json",
         "dojo/_base/array",
         "dijit/form/FilteringSelect",
        // "dojo/parser",
         "dojo/domReady!"],
    function(dom, request, win, ObjectStore, Memory, JSON, arrayUtil, FilteringSelect){
        // Results will be displayed in resultDiv
        var resultDiv = dom.byId("resultDiv");
 
        // Request the JSON data from the server
        request.get("06dTest.json", {
            // Parse data from JSON to a JavaScript object
            handleAs: "json"
        }).then(function(data){
        	dataStore = new ObjectStore({ objectStore:new Memory({ data: data.items }) });
            // Display the data sent from the server
           
        	var html = "<h2>JSON Data</h2>" +
                "<p>JSON encoded data:</p>" +
                "<p><code>" + JSON.stringify(data) + "</code></p>";
                //"<p><strong>title: </strong> " + data.title + "</p><dl>";
            
            resultDiv.innerHTML = html;
            var testStore = new Memory({
            	data:[
            	    {id:"ENG",value:"England"},
            	    {id:"SCOT",value:"Scotland"},
            	    {id:"WAL",value:"Wales"},
            	    {id:"NI",value:"Northern Ireland"}
            	]
            });

            var filteringSelect = new FilteringSelect({
                id: "stateSelect",
                name: "state",
                //value: "ENG",
                store: dataStore,
                searchAttr: "value"
                /*
                	value: "ENG",
                    store: testStore,
                    searchAttr: "name"
                */
            }, "stateSelect");
            filteringSelect.placeAt(win.body()).startup();
           
        },
        function(error){
            // Display the error returned
            resultDiv.innerHTML = error;
        });
        
    }
);
