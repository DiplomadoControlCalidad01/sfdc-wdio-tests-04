const commonActions = require('../core/CommonActions');
const NewTerritoryType = require('../pages/newterritorytypeform.po');

class TerritoryTypes {

    constructor() {
        this.newTerritoryTypeButton = 'input[name="new_terr_type"]' //this the button to trigger the form related to create new Territory Type.
    }

    clickNewTerritoryTypeButton() {
        /*browser.waitForExist('//iframe[contains(@id, "vfFrameId_")]');
        let my_frame = browser.element('//iframe[contains(@id, "vfFrameId_")]').value;
        browser.frame(my_frame);*/
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        commonActions.click(this.newTerritoryTypeButton);
        return new NewTerritoryType;
    }

    getTerritoryType(territoryType) {
        /*browser.waitForExist('//iframe[contains(@id, "vfFrameId_")]');
        let my_frame = browser.element('//iframe[contains(@id, "vfFrameId_")]').value;
        browser.frame(my_frame);*/
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        return browser.isExisting('//a[contains(text(), "' + territoryType + '")]');
    }

}

module.exports = TerritoryTypes;