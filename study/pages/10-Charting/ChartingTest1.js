require([ "dojo/parser", "dojo/when", "dojo/on", "dijit/registry",
		"dojox/charting/StoreSeries", "dojox/charting/Chart",
		"dojox/charting/plot2d/Columns", "dojo/store/JsonRest",
		"dojox/charting/StoreSeries", "dojox/charting/axis2d/Default",
		"dojo/number", "dojo/domReady!"], function(parser, when, on, registry, StoreSeries, Chart,
		Columns, JsonRest, StoreSeries) {
	
	
	
	var theApp = function() {
		var chart = new Chart("chartOne");

		chart.addPlot("default", {
			type : Columns,
			gap : 1
		});

		var refreshChart = function(month) {
			var store = new JsonRest({
				target : "10/" + month + ".json"
			});
	
			chart.addSeries("Series A", new StoreSeries(store, {}, "value"));
	
			chart.addAxis("y", {
				vertical : true,
				fixLower : "major",
				fixUpper : "major"
			});
	
			when(store.query({}), function(result) {
				var chartLabels = [{ value: 0, text: "" }];
				
				for (var i = 0; i < result.length; i++) {
					chartLabels.push({ value: i + 1, text: result[i].id })
				}
		
				chart.addAxis("x", {
					labels : chartLabels
				});
		
				chart.render();
			});
		}
		
		on(registry.byId("month"), "change", function(value) {
			refreshChart(value);
		})
		
		refreshChart('11');
	};
	
	parser.parse().then(theApp);
	
});
