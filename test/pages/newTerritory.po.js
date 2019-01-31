const commonActions = require('../core/CommonActions');

class NewTerritory {

    constructor() {
        this.labelTextField = '#Name';
        this.territoryNameTextField = '#DeveloperName';
        this.territoryTypeTextField = '#Territory2Type';
        this.parentTerritoryTextField = '#parent_name';
        this.descriptionTextField = '#Description';
        this.saveButton = '.pbHeader #topButtonRow input[name="save"]';

        setLabelTextField(label){
            commonActions.setValue(this.labelTextField, label)
        }

        setTerritoryNameTextField(territoryName){
            commonActions.setValue(this.territoryNameTextField, territoryName);
        }

        setTerritoryTypeTextField(territoryType){
            commonActions.setValue(this.territoryTypeTextField, territoryType);
        }

        setParentTerritoryTextField(parentTerritory){
            commonActions.setValue(this.parentTerritoryTextField, parentTerritory);
        }

        setDescriptionTextField(description) {
            commonActionsl.setValue(this.descriptionTextField, description);
        }

        clickSaveButton(){
            commonActions.click(this.saveButton);
        }
    }
}