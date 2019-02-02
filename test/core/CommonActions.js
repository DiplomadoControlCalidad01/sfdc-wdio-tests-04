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

    static switchToFrame(frameLocator){
        browser.waitForExist(frameLocator);
        let my_frame = browser.element(frameLocator).value;
        browser.frame(my_frame);
    }
}

module.exports = CommonActions;