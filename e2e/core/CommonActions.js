const {explicit} = require('../../environment').timeout;

class CommonActions {

    static setValue(locator, value) {
        browser.waitForVisible(locator, explicit);
        browser.element(locator).setValue(value);
    }

    static click(locator) {
        browser.waitForVisible(locator, explicit);
        browser.element(locator).click();
    }

    static waitForVisible(locator) {
        browser.waitForVisible(locator, explicit);
    }

    static getText(locator) {
        browser.waitForVisible(locator, explicit);
        return browser.getText(locator);
    }
}

module.exports = CommonActions;
