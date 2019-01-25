const commonActions = require('../core/CommonActions');

const AppLauncherModal = require('../pages/appLauncherModal.po');

class Header {

    constructor() {
        this.appLaucherButton = '.salesforceIdentityAppLauncherHeader';
        commonActions.waitForVisible('.slds-global-header');
        commonActions.waitForVisible('.branding-userProfile-button');
    }

    clickAppLauncherButton()  {
        commonActions.click(this.appLaucherButton);
        return new AppLauncherModal();
    }

}

module.exports = Header;
