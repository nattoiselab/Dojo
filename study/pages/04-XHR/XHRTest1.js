require(["dojo/query", 
         "dojo/request/xhr",
         "dojo/dom-attr",
         "dojo/_base/lang",
         "dojo/NodeList-dom",
         "dojo/domReady!"
         ], 
function(query,
		 xhr,
		 domAttr,
		 lang
){ 
		var accountNode = query("#Account")[0];	
		var statusNode = query("#Status")[0];
    
		var nextNodeList = query("#Next");		
		var savedData = null;
		var branchIndex = 0;
		var accountIndex = 0;
		
		nextNodeList.on(
				"click",
				function(e){				
					var branch = savedData.resultSet[branchIndex];
					accountIndex ++;
					if ( accountIndex >= branch.accounts.length ){
						accountIndex = 0;
						branchIndex++;
						if ( branchIndex >= savedData.resultSet.length){
							branchIndex = 0;
						}
					}
					displayAccount();
				}
			);

		function displayAccount(){
			 var branch = savedData.resultSet[branchIndex];
			 var account = branch.accounts[accountIndex];
			 domAttr.set(accountNode, 'innerHTML', "Sort Code: " + branch.sortcode 
			                   + "; Account: " + account.id + ", " + account.name);
			 
			 var balanceNode = query("#Balance")[0];
			 
			 var substituteObject = { sortCode: branch.sortcode,
			                          accountNumber: account.id };
			 
			 xhr(lang.replace("accounts/96830134/{sortCode}/{accountNumber}.json", substituteObject), {
				 handleAs: "json"
			 }).then(function(data) {
				 domAttr.set(statusNode, 'innerHTML', "OK");
				 domAttr.set(balanceNode, 'innerHTML', data.accountInfo.balance);
			 }, function(errorResponse) {
				
				  
					if(errorResponse.response.status === 404) {
						  domAttr.set(statusNode, 'innerHTML', "Could not find account URL");
					} else {
						  domAttr.set(statusNode, 'innerHTML', "Some other account error!");
					}
			  })
		}
		
		xhr("accounts/96830134/list.json", {
		    handleAs: "json"
		  }).then(function(data){
			  savedData = data;
			  domAttr.set(statusNode, 'innerHTML', "OK");
			  displayAccount();
		  }, function(errorResponse) {
			  console.error(errorResponse);
			  
				if(errorResponse.response.status === 404) {
					  domAttr.set(statusNode, 'innerHTML', "Could not find URL");
				} else {
					  domAttr.set(statusNode, 'innerHTML', "Some other error!");
				}
		  });

});
