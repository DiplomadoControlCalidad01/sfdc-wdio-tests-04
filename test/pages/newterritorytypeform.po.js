
const commonActions = require('../core/CommonActions');

class NewTerritoryType {

    constructor() {
        this.labelTextField = '';
        this.territoryTypeNameTextField = '';
        this.descriptionTextField = '';
        this.priorityTextField = '';
        this.saveButton = 'input[tabindex="5"]'; //locator of Save button.
    }

    setLabelTextField(label) {
        commonActions.setValue(this.labelTextField, label);
    }

    setTerritoryTypeNameTextField(territoryTypeName) {
        commonActions.setValue(this.territoryTypeNameTextField, territoryTypeName)
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