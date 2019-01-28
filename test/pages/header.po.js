const commonActions = require('../core/CommonActions');

class Header {

    constructor() {
        this.configurationButton = 'div[data-interactive-uid="3"]'; // It is Configuration's locator (Gear icon).
        this.applicationConfigurationOption = '#related_setup_app_home';  //It is the locator of Application Configuration option into Configuration menu.
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
    }
    /*clickAppLauncherButton()  {
        commonActions.click(this.appLaucherButton);
        //return new AppLauncherModal();
    }*/
}

module.exports = Header;