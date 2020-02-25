sap.ui.define([
	'sap/ui/core/mvc/Controller'
], function (Controller) {
	"use strict";

	return Controller.extend("fokind.budgeter.controller.Items", {
		onAddPress: function() {
		    var oList = this.byId("items");
		    var oBinding = oList.getBinding("items");
		    var oContext = oBinding.create({
		        id: "0",
		        name: "new 1",
		        amount: 0
		    })
		},
		
		onItemPress: function(oEvent) {
		    this.getOwnerComponent().getRouter().navTo("item", {
		        id: "0"
		    });
		}
	});
});