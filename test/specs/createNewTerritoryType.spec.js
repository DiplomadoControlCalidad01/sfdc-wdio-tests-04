const expect = require('chai').expect;
const {credentials} = require('../../environment');
const Login = require('../pages/login.po');

describe('New Territory Type is created', () => {

    let configurationTree;
    let territoryTypesList;
    let TerritoryTypeDetails;
    let newTerritoryTypeData = {
        'label' : 'NewLabel1',
        'name' : 'NewTerritoryTypeName1',
        'description' : 'Description 1',
        'priority' : '1'
    };

    beforeEach(() => {
        configurationTree = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        configurationTree.setSearchTextField("Tipos de territorios");
        territoryTypesList = configurationTree.clickTerritoryTypeTreeBranch();
        territoryTypesList.addColumnToTerritoryTypesList();
    });

    it('Create New Type of Territory', () => {

        let newTerritoryTypeForm = territoryTypesList.clickNewTerritoryTypeButton();
        newTerritoryTypeForm.fillOutTheNewTerritoryTypeForm(newTerritoryTypeData);
        newTerritoryTypeForm.clickSaveButton();
        //configurationTree.clickTerritoryTypeTreeBranch();
        expect(territoryTypesList.isExistingTerritoryType(newTerritoryTypeData.label)).to.be.true;
    });

    afterEach( () => {
        territoryTypesList.removeColumnOfTerritoryTypeList();
        TerritoryTypeDetails = territoryTypesList.accessToTerritoryTypeDetails(newTerritoryTypeData.label);
        TerritoryTypeDetails.deleteTerritoryType();
    });
});