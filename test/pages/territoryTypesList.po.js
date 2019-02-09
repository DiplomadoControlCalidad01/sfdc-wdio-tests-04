const commonActions = require('../core/CommonActions');
const NewTerritoryType = require('./newTerritoryTypeForm.po');
const EditTerritoryTypesViewForm = require('../pages/editTerritoryTypesViewForm.po,js');
const TerritoryTypeDetails = require('../pages/territoryTypeDetails.po');

class TerritoryTypesList {

    constructor() {
        this.newTerritoryTypeButton = '.pbHeader .listHeader input[name="new_terr_type"]' //this the button to trigger the form related to create new Territory Type.
        this.modifyTerritoryTypesListViewLink = '//div[@class="bFilterView"] //span[@class="fFooter"] //a[contains(text(), "Modificar")]'; //this the link related to modify the page view related to filters
        this.EditTerritoryTypesViewForm = new EditTerritoryTypesViewForm();
    }

    clickNewTerritoryTypeButton() {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        commonActions.click(this.newTerritoryTypeButton);
        return new NewTerritoryType;
    }

    isExistingTerritoryType(territoryType) {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        return browser.isExisting('//a[contains(text(), "' + territoryType + '")]');
    }

    addColumnToTerritoryTypesList() {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        commonActions.click(this.modifyTerritoryTypesListViewLink);
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        this.EditTerritoryTypesViewForm.addTerritoryTypeNameColumnToListView();
    }

    removeColumnOfTerritoryTypeList() {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        commonActions.click(this.modifyTerritoryTypesListViewLink);
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        this.EditTerritoryTypesViewForm.removeTerritoryTypeNameColumnToListView();
    }

    accessToTerritoryTypeDetails(territoryTypeName) {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        commonActions.click('//a[contains(text(), "' + territoryTypeName + '")]')
        return new TerritoryTypeDetails;
    }
}

module.exports = TerritoryTypesList;
