
const commonActions = require('../core/CommonActions');

class NewTerritoryType {

    constructor() {
        browser.waitForExist('//iframe[contains(@id, "vfFrameId_")]');
        let my_frame = browser.element('//iframe[contains(@id, "vfFrameId_")]').value;
        browser.frame(my_frame);
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

    clickSaveButton() {
        commonActions.click(this.saveButton);
    }
}

module.exports = NewTerritoryType;