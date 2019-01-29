const commonActions = require('../core/CommonActions');
const ConfigurationTree = require('../pages/configurationtree.po');

class Header {

    constructor() {
        this.applicationConfigurationOption = '#related_setup_app_home';  //It is the locator of Application Configuration option into Configuration menu.
        this.configurationButton = '.slds-icon-utility-setup'; // It is Configuration's locator (Gear icon).
        commonActions.waitForVisible('.slds-global-header'); // It is Header bar locator.
        commonActions.waitForVisible('.branding-userProfile-button'); //It is the locator of profile icon.
    }

    clickConfigurationsButton() {
        commonActions.click(this.configurationButton);
        commonActions.waitForVisible(this.applicationConfigurationOption);
    }

    clickApplicationConfiguration() {
        commonActions.click(this.applicationConfigurationOption);
    }

    displayConfigurationTree() {
        this.clickConfigurationsButton();
        this.clickApplicationConfiguration();
        return new ConfigurationTree();
    }
}

module.exports = Header;