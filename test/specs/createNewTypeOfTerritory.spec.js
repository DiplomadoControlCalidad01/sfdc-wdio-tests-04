const {credentials} = require('../../environment');
const Login = require('../pages/login.po');

describe('New Type of Territory feature', () => {

    beforeEach(() => {

    });

    it('Create New Type of Territory', () => {
        let configurationTree = Login.loginAs(credentials.sysadmin.username,
            credentials.sysadmin.password);
        configurationTree.setSearchTextField("Tipos de territorios");
        let territoryTypes = configurationTree.clickTerritoryTypeTreeBranch();
        let newTerritoryTypeForm = territoryTypes.clickNewTerritoryTypeButton();
        newTerritoryTypeForm.setTerritoryTypeNameTextField('Name2');
        newTerritoryTypeForm.setLabelTextField('NewLabel2');
        newTerritoryTypeForm.setDescriptionTextField('Description of territory');
        newTerritoryTypeForm.setPriorityTextField('5');
        newTerritoryTypeForm.clickSaveButton();
        configurationTree.clickTerritoryTypeTreeBranch();
        console.log(territoryTypes.getTerritoryType('NewLabel2'));

        browser.pause(30000);
    });

});



//browser.alertDismiss(); alertAccept to accept the current alert for deleting.