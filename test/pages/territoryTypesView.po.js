const commonActions = require('../core/CommonActions');

class TerritoryTypesView {

    constructor() {
        this.newTerritoryTypeButton = '.pbHeader .listHeader input[name="new_terr_type"]'; //this the button to trigger the form related to create new Territory Type.
        //browser.pause(30000);
        commonActions.waitForVisible(this.newTerritoryTypeButton);
    }

    clickNewTerritoryTypeButton() {
        commonActions.click(this.newTerritoryTypeButton);
        //return new NewTerritoryTypeForm();
    }
}

module.exports = TerritoryTypesView;