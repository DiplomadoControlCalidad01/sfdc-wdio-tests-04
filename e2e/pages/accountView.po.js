const commonActions = require('../core/CommonActions');

class AccountView {

    getNameText() {
        return commonActions.getText('//span[text()="Account"]/ancestor::div[@class="slds-media__body"]/descendant::span[@data-aura-class="uiOutputText"]');
    }

    getPhoneText() {
        return commonActions.getText('.slds-page-header__detail-row .slds-form-element__static span[data-aura-class="uiOutputPhone"]');
    }

    clickDetailsTab() {
        commonActions.click('a.tabHeader[title="Details"]');
    }
}

module.exports = AccountView;