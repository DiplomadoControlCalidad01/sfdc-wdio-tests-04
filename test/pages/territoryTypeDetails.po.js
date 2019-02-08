const commonActions = require('../core/CommonActions');

class TerritoryTypeDetails {

    constructor() {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        this.deleteButton = '.pbHeader #topButtonRow input[name="del"]'; //locator of button to delete the current Territory Type displayed
        commonActions.waitForVisible(this.deleteButton);
    }

    deleteTerritoryType() {
        commonActions.click(this.deleteButton);
        browser.pause(20000);
        browser.alertAccept();
        browser.pause(20000);
    }
}

module.exports = TerritoryTypeDetails;