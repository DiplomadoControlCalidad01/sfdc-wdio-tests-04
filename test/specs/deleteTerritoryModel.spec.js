const expect = require('chai').expect;
const {credentials} = require('../../environment');
const Login = require('../pages/login.po');


describe('Territory model is deleted', () => {

    let configurationTree;
    let territoryModelsList;
    let TerritoryModelDetails;
    let territoryModelData = {
        'label' : 'Territorylabel1',
        'name' : 'TerritoryModel1',
        'description' : 'Description 1'
    };

    beforeEach(() => {
        configurationTree = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        configurationTree.setSearchTextField("Modelos territoriales");
        territoryModelsList = configurationTree.clickTerritoryModelsTreeBranch();

        let newTerritoryModelForm = territoryModelsList.clickNewTerritoryModelButton();
        newTerritoryModelForm.fillOutTheNewTerritoryModelForm(territoryModelData);
        newTerritoryModelForm.clickSaveButton();
        browser.pause(1000);
    });

    it('Delete a Territory Model', () => {
        configurationTree.clickTerritoryModelsTreeBranch();
        configurationTree.setSearchTextField("Modelos territoriales");
        territoryModelsList = configurationTree.clickTerritoryModelsTreeBranch();
        TerritoryModelDetails = territoryModelsList.accessToTerritoryModelDetails(territoryModelData.label);
        TerritoryModelDetails.deleteTerritoryModel();
        expect(territoryModelsList.isExistingTerritoryModel(territoryModelData.label)).to.be.false;
    });
});
