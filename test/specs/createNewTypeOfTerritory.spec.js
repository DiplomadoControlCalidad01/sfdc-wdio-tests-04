const {credentials} = require('../../environment');
const Login = require('../pages/login.po');

describe('New Type of Territory feature', () => {

    it('Create New Type of Territory', () => {
        let header = Login.loginAs(credentials.sysadmin.username,
            credentials.sysadmin.password);
        header.displayConfigurationTree();
    });
});