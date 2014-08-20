require(["dojo/query", 
         "dojo/request/xhr",
         "dojo/dom-attr",
         "dojo/NodeList-dom",
         "dojo/domReady!"
         ], 
function(query,
		 xhr,
		 domAttr
){ 
	var accountNode = query("#Account")[0];	
	var statusNode = query("#Status")[0];

	var nextNodeList = query("#Next");		
	var savedData = null;
	var branchIndex = 0;
	var accountIndex = 0;

	function displayAccount(){
		 var branch = savedData.resultSet[branchIndex];
		 var account = branch.accounts[accountIndex];
		 domAttr.set(accountNode, 'innerHTML', "Sort Code: " + branch.sortcode 
		                   + "; Account: " + account.id + ", " + account.name);
	}
	
	xhr("accounts/96830134/list.json", {
	    handleAs: "json"
	  }).then(function(data){
		  // debugger;
		  savedData = data;
		  domAttr.set(statusNode, 'innerHTML', "OK");
		  displayAccount();
	  });
});
