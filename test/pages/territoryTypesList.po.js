const commonActions = require('../core/CommonActions');
const NewTerritoryType = require('./newTerritoryTypeForm.po');
const EditTerritoryTypesViewForm = require('../pages/editTerritoryTypesViewForm.po,js');

class TerritoryTypesList {

    constructor() {
        this.newTerritoryTypeButton = 'input[name="new_terr_type"]' //this the button to trigger the form related to create new Territory Type.
        this.modifyTerritoryTypesListViewLink = '//div[@class="bFilterView"] //span[@class="fFooter"] //a[contains(text(), "Modificar")]'; //this the link related to modify the page view related to filters
    }

    clickNewTerritoryTypeButton() {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        commonActions.click(this.newTerritoryTypeButton);
        return new NewTerritoryType;
    }

    isExistingTerritoryType(territoryType) {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        return browser.isExisting('//a[contains(text(), "' + territoryType + '")]');
        //return browser.isExisting('//a[contains(text(), "' + territoryType + '")]');
        //a[title^="Eliminar - "][title$=" - NewLabel1"]
        ////a[contains(text(), title^="Eliminar - "][title$=" - NewLabel1"]
    }

    addColumnToTerritoryTypesList() {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        commonActions.click(this.modifyTerritoryTypesListViewLink);
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        new EditTerritoryTypesViewForm().addTerritoryTypeNameColumnToListView();
        //let EditTerritoryTypesViewForm = new EditTerritoryTypesViewForm;
        //EditTerritoryTypesViewForm.addTerritoryTypeNameColumnToListView();
    }

}

module.exports = TerritoryTypesList;
