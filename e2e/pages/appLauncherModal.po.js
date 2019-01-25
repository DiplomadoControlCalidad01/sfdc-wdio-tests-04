'use strict';

const commonActions = require('../core/CommonActions');
const Content = require('../pages/content.po');

class AppLauncherModal {

    constructor() {
        commonActions.waitForVisible('.modal-container.slds-modal__container');
    }

    openItem(item) {
        commonActions.click(`a[href="/lightning/o/${item}/home"]`);
        return new Content();
    }

}

module.exports = AppLauncherModal;
