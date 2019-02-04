const commonActions = require('../core/CommonActions');

class TerritoryModelDetails {

    constructor() {
        this.deleteButton = '.pbHeader #topButtonRow input[name="del"]'; //locator of button to delete the current Territory Type displayed
        commonActions.waitForVisible(this.deleteButton);
    }

    deleteTerritoryModel() {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        //.split-right .oneWorkspaceCollection div[class="active oneWorkspace"] div[class="wsTabset wsTabBarHidden oneConsoleTabset"] section[class="tabContent active oneConsoleTab"] .oneWorkspaceTabWrapper div[class="windowViewMode-maximized active lafPageHost"] div[class="slds-brand-band slds-brand-band_cover slds-brand-band_medium slds-template_default forceBrandBand"] .slds-template__container #setupComponent .setupcontent .oneAlohaPage .content
        commonActions.click(this.deleteButton);
        browser.Accept;
    }
}

module.exports = TerritoryModelDetails;