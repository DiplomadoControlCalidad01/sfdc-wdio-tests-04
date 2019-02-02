const {url} = require ('../../environment');
const commonActions = require('../core/CommonActions');
const Header = require('../pages/header.po');
const ConfigurationTree = require('./configurationTree.po');

class Login{

    constructor(){
        this.userNameTextField = '#username';
        this.userPasswordtextField = '#password';
        this.loginButton = '#Login';

        browser.url(url);
        commonActions.waitForVisible('#theloginform');
    }

    setUserNameTextField(username) {
        commonActions.setValue(this.userNameTextField, username);
    }

    setUserPasswordTextFiled(password){
        commonActions.setValue(this.userPasswordtextField, password);
    }

    clickLoginButton() {
        commonActions.click(this.loginButton);
    }

    static loginAs(username, password) {
        let login = new Login();
        login.setUserNameTextField(username);
        login.setUserPasswordTextFiled(password);
        login.clickLoginButton();
        return new ConfigurationTree;
    }
}

module.exports = Login;