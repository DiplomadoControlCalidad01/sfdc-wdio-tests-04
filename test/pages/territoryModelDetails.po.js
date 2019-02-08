const commonActions = require('../core/CommonActions');

class TerritoryModelDetails {

    constructor() {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        this.deleteButton = '.pbHeader #topButtonRow input[name="del"]'; //locator of button to delete the current Territory Type displayed
        this.confirmDeleteTerritoryModelButton = 'div[class="dialog default modal medium uiDialog sfaDialog aloha_sales_tm2Territory2AsyncHelper slideUp"] .buttons button[title="Click to confirm"]';
        browser.pause(2000);
    }

    deleteTerritoryModel() {
        commonActions.click(this.deleteButton);
        commonActions.click(this.confirmDeleteTerritoryModelButton);
        browser.pause(20000);

    }
}

module.exports = TerritoryModelDetails;