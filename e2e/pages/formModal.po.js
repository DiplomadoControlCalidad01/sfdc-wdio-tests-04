const commonActions = require('../core/CommonActions');

class Form {

    constructor() {
        this.saveButton = 'button[title="Save"]';

        commonActions.waitForVisible('.modal-container.slds-modal__container');
    }

    clickSaveButton() {
        commonActions.click(this.saveButton);
    }

}

module.exports = Form;
