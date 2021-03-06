const expect = require('chai').expect;
const {credentials} = require('../../environment');
const Login = require('../pages/login.po');


describe('New Territory Model is created', () => {

    let configurationTree;
    let territoryModelsList;
    let TerritoryModelDetails;
    let newTerritoryModelData = {
        'label' : 'NewLabel1',
        'name' : 'NewTerritoryModel1',
        'description' : 'Description 1'
    };

    beforeEach(() => {
        configurationTree = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        configurationTree.setSearchTextField("Modelos territoriales");
        territoryModelsList = configurationTree.clickTerritoryModelsTreeBranch();
    });

    it('Create New Model of Territory', () => {
        let newTerritoryModelForm = territoryModelsList.clickNewTerritoryModelButton();
        newTerritoryModelForm.fillOutTheNewTerritoryModelForm(newTerritoryModelData);
        newTerritoryModelForm.clickSaveButton();

        configurationTree.clickTerritoryModelsTreeBranch();
        configurationTree.setSearchTextField("Modelos territoriales");
        territoryModelsList = configurationTree.clickTerritoryModelsTreeBranch();
        expect(territoryModelsList.isExistingTerritoryModel(newTerritoryModelData.label)).to.be.true;
    });

    afterEach( () => {
        TerritoryModelDetails = territoryModelsList.accessToTerritoryModelDetails(newTerritoryModelData.label);
        TerritoryModelDetails.deleteTerritoryModel();
    });
});
