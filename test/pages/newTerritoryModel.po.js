const commonActions = require('../core/CommonActions');

class NewTerritoryModel {

    constructor() {
        this.labelTextField = '#Name';
        this.territoryModelNameTextField = '#DeveloperName';
        this.descriptionTextField = '#Description';
        this.saveButton = '.pbHeader #topButtonRow input[name=\'save\']';
    }

    setLabelTextField(label){
        commonActions.setValue(this.labelTextField, label);
    }

    setTerritoryModelNameTextField(territoryModelName) {
        commonActions.setValue(this.territoryModelNameTextField, territoryModelName)
    }

    setDescriptionTextField(description) {
        commonActions.setValue(this.descriptionTextField, description);
    }

    clickSaveButton() {
        commonActions.click(this.saveButton);
    }
}

module.exports = NewTerritoryModel;