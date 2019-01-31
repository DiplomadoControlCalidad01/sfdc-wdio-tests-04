const {credentials} = require('../../environment');
const Login = require('../pages/login.po');

describe('New Type of Territory feature', () => {

    before(() => {

    });

    it('Create New Type of Territory', () => {
        let configurationTree = Login.loginAs(credentials.sysadmin.username,
            credentials.sysadmin.password);
        //let tree =header.displayConfigurationTree();
        configurationTree.setSearchTextField("Tipos de territorios");
        configurationTree.clickTerritoryTypeTreeBranch();
        browser.pause(30000);
    });

});