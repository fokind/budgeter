sap.ui.define([
	'sap/ui/core/mvc/Controller'
], function (Controller) {
	"use strict";

	return Controller.extend("fokind.budgeter.controller.Item", {
	     onInit: function() {
        this.getOwnerComponent()
          .getRouter()
          .getRoute("item")
          .attachMatched(this._onRouteMatched, this);
        this.getView().addStyleClass(
          this.getOwnerComponent().getContentDensityClass()
        );
      },
      
      _onRouteMatched: function(oEvent) {
        var oView = this.getView();
        var sId = oEvent.getParameter("arguments").id;

        oView.bindElement({
          path: "/Items('" + sId + "')"
        });
      },

      onBackPress: function() {
        this.getOwnerComponent()
          .getRouter()
          .navTo("items");
      }
	});
});