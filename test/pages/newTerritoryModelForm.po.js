const commonActions = require('../core/CommonActions');

class NewTerritoryModelForm {

    constructor() {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        this.labelTextField = '#Name';
        this.territoryModelNameTextField = '#DeveloperName';
        this.descriptionTextField = '#Description';
        this.saveButton = '.pbHeader #topButtonRow input[name="save"]';
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

    fillOutTheNewTerritoryModelForm(newTerritoryModelData) {
        browser.pause(1000);
        this.setTerritoryModelNameTextField(newTerritoryModelData.name);
        browser.pause(1000);
        this.setLabelTextField(newTerritoryModelData.label);
        browser.pause(1000);
        this.setDescriptionTextField(newTerritoryModelData.description);
    }

    clickSaveButton() {
        commonActions.click(this.saveButton);
    }
}

module.exports = NewTerritoryModelForm;