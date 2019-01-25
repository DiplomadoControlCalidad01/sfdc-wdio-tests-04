const {url} = require('../../environment');

const commonActions = require('../core/CommonActions');

const Header = require('../pages/header.po');

class Login {

    constructor() {
        this.usernameTextField = '#username';
        this.passwordTextField = '#password';
        this.loginButton = '#Login';

        browser.url(url);
        commonActions.waitForVisible('#theloginform');
    }

    setUsernameTextField(username) {
        commonActions.setValue(this.usernameTextField, username);
    }

    setPasswordTextField(password) {
        commonActions.setValue(this.passwordTextField, password);
    }

    clickLoginButton() {
        commonActions.click(this.loginButton);
    }

    static loginAs(username, password) {
        let login = new Login();
        login.setUsernameTextField(username);
        login.setPasswordTextField(password);
        login.clickLoginButton();
        return new Header();
    }

}

module.exports = Login;
