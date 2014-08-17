require(["dojo/dom", 
         "dojo/request", 
         "dojo/json",
         "dojo/_base/array", 
         "dojo/domReady!"],
    function(dom, request, JSON, arrayUtil){
        // Results will be displayed in resultDiv
        var resultDiv = dom.byId("resultDiv");
 
        // Request the JSON data from the server
        request.get("JsonTest1.json", {
            // Parse data from JSON to a JavaScript object
            handleAs: "json"
        }).then(function(data){
            // Display the data sent from the server
            var html = "<h2>JSON Data</h2>" +
                "<p>JSON encoded data:</p>" +
                "<p><code>" + JSON.stringify(data) + "</code></p>"+
                "<h3>Accessing the JSON data</h3>" +
                "<p><strong>title</strong> " + data.title + "</p>" +
                "<p><strong>items</strong> An array of items." +
                "Each item has a name and a value.  The type of " +
                "the value is shown in parentheses.</p><dl>";
 
            arrayUtil.forEach(data.items, function(item,i){
                html += "<dt>" + item.name +
                    "</dt><dd>" + item.value +
                    " (" + (typeof item.value) + ")</dd>";
            });
            html += "</dl>";
 
            resultDiv.innerHTML = html;
        },
        function(error){
            // Display the error returned
            resultDiv.innerHTML = error;
        });
    }
);
