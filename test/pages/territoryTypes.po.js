const commonActions = require('../core/CommonActions');

class TerritoryTypes {

    constructor() {
        this.newTerritoryTypeButton = 'input[name="new_terr_type"]' //this the button to trigger the form related to create new Territory Type.
    }

    clickNewTerritoryTypebutton() {
        commonActions.click(this.newTerritoryTypeButton);
    }
}

module.exports = TerritoryTypes;