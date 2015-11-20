$(function () {
$.ig.loader({
	        scriptPath: "http://staging.igniteui.local/15-2/IgniteUI/js/",
	        cssPath: "http://staging.igniteui.local/15-2/IgniteUI/css/",
	        resources: "igGrid.Sorting"
	    });

	    $.ig.loader(function () {
	        $("#grid").igGrid({
	            autoGenerateColumns: false,
	            columns: [
					{ headerText: "ID", key: "ProductID", dataType: "number" },
					{ headerText: "Name", key: "Name", dataType: "string" },
					{ headerText: "Number", key: "ProductNumber", dataType: "string" },
					{ headerText: "Cost", key: "StandardCost", dataType: "number" }
	            ],
	            dataSource: adventureWorks,
	            height: "400px",
	            features: [
				{
				    name: "Sorting",
				    type: "local",
				    mode: "multiple"
				}
	            ]
	        });
	    });
});