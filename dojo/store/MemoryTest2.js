require([
    "dojo/_base/window", "dojo/store/Memory", "dijit/form/FilteringSelect", "dojo/domReady!"
], function(win, Memory, FilteringSelect){
    var testStore = new Memory({
    	data:[
    	    {id:"ENG",value:"England"},
    	    {id:"SCOT",value:"Scotland"},
    	    {id:"WAL",value:"Wales"},
    	    {id:"NI",value:"Northern Ireland"}
    	]
    });
    
	var stateStore = new Memory({
        data: [
            {name:"England", id:"ENG"},
            {name:"Scotland", id:"SCOT"},
            {name:"Wales", id:"WAL"},
            {name:"Northern Ireland", id:"NI"},
            {name:"Alabama", id:"AL"},
            {name:"Alaska", id:"AK"},
            {name:"American Samoa", id:"AS"},
            {name:"Arizona", id:"AZ"},
            {name:"Arkansas", id:"AR"},
            {name:"Armed Forces Europe", id:"AE"},
            {name:"Armed Forces Pacific", id:"AP"},
            {name:"Armed Forces the Americas", id:"AA"},
            {name:"California", id:"CA"},
            {name:"Colorado", id:"CO"},
            {name:"Connecticut", id:"CT"},
            {name:"Delaware", id:"DE"}
        ]
    });

    var filteringSelect = new FilteringSelect({
        id: "stateSelect",
        name: "state",
        //value: "ENG",
        store: testStore,
        searchAttr: "value"
        /*
        	value: "ENG",
            store: testStore,
            searchAttr: "name"
        */
    }, "stateSelect");
    filteringSelect.placeAt(win.body()).startup();
});
