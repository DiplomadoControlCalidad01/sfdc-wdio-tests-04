const commonActions = require('../core/CommonActions');
const NewTerritoryType = require('../pages/newterritorytypeform.po');

class TerritoryTypes {

    constructor() {
        this.newTerritoryTypeButton = 'input[name="new_terr_type"]' //this the button to trigger the form related to create new Territory Type.
    }

    clickNewTerritoryTypeButton() {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        commonActions.click(this.newTerritoryTypeButton);
        return new NewTerritoryType;
    }

    getTerritoryType(territoryType) {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        return browser.isExisting('//a[contains(text(), "' + territoryType + '")]');
    }

}

module.exports = TerritoryTypes;