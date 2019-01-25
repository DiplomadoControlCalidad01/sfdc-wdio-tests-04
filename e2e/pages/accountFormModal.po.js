const commonActions = require('../core/CommonActions');

const Form = require('./formModal.po');

class AccountForm extends Form {

    constructor() {
        super();
        this.nameTextField = '//span[contains(text(), "Account Name")]/parent::label/following-sibling::input';
        this.phoneTextField = '//span[contains(text(), "Phone")]/parent::label/following-sibling::input';
        this.faxTextField = '//span[contains(text(), "Fax")]/parent::label/following-sibling::input';
    }

    fillForm(accountJson) {
        let accountSteps = {
            'Name': () => commonActions.setValue(this.nameTextField, accountJson.Name),
            'Phone': () => commonActions.setValue(this.phoneTextField, accountJson.Phone),
            'Fax': () => commonActions.setValue(this.faxTextField, accountJson.Fax)
        };
        Object.keys(accountJson).forEach(key => {
            accountSteps[key].call();
        });
    }

}

module.exports = AccountForm;
