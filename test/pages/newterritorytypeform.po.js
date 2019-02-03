
const commonActions = require('../core/CommonActions');

class NewTerritoryType {

    constructor() {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        this.labelTextField = '#MasterLabel';
        this.territoryTypeNameTextField = '#DeveloperName';
        this.descriptionTextField = '#Description';
        this.priorityTextField = '#Priority';
        this.saveButton = '.pbHeader #topButtonRow input[name=\'save\']'; //locator of Save button.
    }

    setLabelTextField(label) {
        commonActions.setValue(this.labelTextField, label);
    }

    setTerritoryTypeNameTextField(territoryTypeName) {
        commonActions.setValue(this.territoryTypeNameTextField, territoryTypeName);
    }

    setDescriptionTextField(description) {
        commonActions.setValue(this.descriptionTextField, description);
    }

    setPriorityTextField(priority) {
        commonActions.setValue(this.priorityTextField, priority);
    }

    fillOutTheNewTerritoryTypeForm(newTerritoryTypeData) {
        browser.pause(1000);
        this.setTerritoryTypeNameTextField(newTerritoryTypeData.name);
        browser.pause(1000);
        this.setLabelTextField(newTerritoryTypeData.label);
        browser.pause(1000);
        this.setDescriptionTextField(newTerritoryTypeData.description);
        browser.pause(1000);
        this.setPriorityTextField(newTerritoryTypeData.priority);
    }

    clickSaveButton() {
        commonActions.click(this.saveButton);
    }
}

module.exports = NewTerritoryType;