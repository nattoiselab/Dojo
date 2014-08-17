	require(["dojo/dom",
	         "dojo/request",
	         "dojo/data/ObjectStore",
	         "dojo/store/Memory",
	         "dojo/domReady!"],
	    function(dom, request, ObjectStore, Memory){
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
	            
	            resultDiv.innerHTML = html;
	        },
	        function(error){
	            // Display the error returned
	            resultDiv.innerHTML = error;
	        });
	        
	    }
	);
