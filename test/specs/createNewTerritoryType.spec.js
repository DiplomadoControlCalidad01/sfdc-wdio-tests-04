const expect = require('chai').expect;
const {credentials} = require('../../environment');
const Login = require('../pages/login.po');

describe('New Territory Type is created', () => {

    beforeEach(() => {

    });

    it('Create New Type of Territory', () => {
        let configurationTree = Login.loginAs(credentials.sysadmin.username,
            credentials.sysadmin.password);
        configurationTree.setSearchTextField("Tipos de territorios");
        let territoryTypes = configurationTree.clickTerritoryTypeTreeBranch();
        let newTerritoryTypeForm = territoryTypes.clickNewTerritoryTypeButton();
        newTerritoryTypeForm.setTerritoryTypeNameTextField('Name9');
        newTerritoryTypeForm.setLabelTextField('NewLabel9');
        newTerritoryTypeForm.setDescriptionTextField('Description of territory');
        newTerritoryTypeForm.setPriorityTextField('5');
        newTerritoryTypeForm.clickSaveButton();
        configurationTree.clickTerritoryTypeTreeBranch();
        //console.log(territoryTypes.getTerritoryType('NewLabel6'));
        //ex
        expect(territoryTypes.getTerritoryType('NewLabel9')).to.be.true;
        //expect(accountView.getNameText()).to.equal(account.Name);
        browser.pause(30000);
    });

});



//browser.alertDismiss(); alertAccept to accept the current alert for deleting.