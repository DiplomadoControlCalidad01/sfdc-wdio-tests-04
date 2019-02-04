const  commonActions = require('../core/CommonActions');
const NewTerritoryModelForm = require('./newTerritoryModelForm.po');
const TerritoryModelDetails = require('./territoryModelDetails.po');

class TerritoryModelsList {

    constructor() {
        this.newTerritoryModelButton = 'input[name="newTerritoryModel"]';
    }

    clickNewTerritoryModelButton(){
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        commonActions.click(this.newTerritoryModelButton);
        return new NewTerritoryModelForm;
    }

    isExistingTerritoryModel(territoryModel) {
        commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        return browser.isExisting('//a[contains(text(), "' + territoryModel + '")]');
    }

    accessToTerritoryModelDetails(territoryModelLabel) {
        //commonActions.switchToFrame('//iframe[contains(@id, "vfFrameId_")]');
        commonActions.click('//a[contains(text(), "' + territoryModelLabel + '")]');
        return new TerritoryModelDetails;
    }
}

module.exports = TerritoryModelsList;