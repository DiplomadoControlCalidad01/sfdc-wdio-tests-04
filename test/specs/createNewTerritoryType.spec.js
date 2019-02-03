const expect = require('chai').expect;
const {credentials} = require('../../environment');
const Login = require('../pages/login.po');

describe('New Territory Type is created', () => {

    let configurationTree;
    let territoryTypes;
    beforeEach(() => {
        configurationTree = Login.loginAs(credentials.sysadmin.username, credentials.sysadmin.password);
        configurationTree.setSearchTextField("Tipos de territorios");
        territoryTypes = configurationTree.clickTerritoryTypeTreeBranch();

        //configurationTree.clickTerritoryTypeTreeBranch();
    });

    it('Create New Type of Territory', () => {
        territoryTypes.addColumnToTerritoryTypesList();
        territoryTypes = configurationTree.clickTerritoryTypeTreeBranch();
        //territoryTypes.addColumnToTerritoryTypesList();
        //let configurationTree = Login.loginAs(credentials.sysadmin.username,
            //credentials.sysadmin.password);
        //configurationTree.setSearchTextField("Tipos de territorios");
        //let territoryTypes = configurationTree.clickTerritoryTypeTreeBranch();
        let newTerritoryTypeForm = territoryTypes.clickNewTerritoryTypeButton();
        let newTerritoryTypeData = {
            'label' : 'NewLabel1',
            'name' : 'NewTerritoryTypeName1',
            'description' : 'Description 1',
            'priority' : '1'
        };
        newTerritoryTypeForm.fillOutTheNewTerritoryTypeForm(newTerritoryTypeData);
        //newTerritoryTypeForm.setTerritoryTypeNameTextField('Name9');
        //newTerritoryTypeForm.setLabelTextField('NewLabel9');
        //newTerritoryTypeForm.setDescriptionTextField('Description of territory');
        //newTerritoryTypeForm.setPriorityTextField('5');
        newTerritoryTypeForm.clickSaveButton();
        configurationTree.clickTerritoryTypeTreeBranch();
        //console.log(territoryTypes.isExistingTerritoryType('NewLabel6'));
        //ex
        expect(territoryTypes.isExistingTerritoryType('NewLabel1')).to.be.true;
        //expect(accountView.getNameText()).to.equal(account.Name);
        browser.pause(10000);
    });

    afterEach( () => {

    });

});



//browser.alertDismiss(); alertAccept to accept the current alert for deleting.