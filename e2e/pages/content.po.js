const commonActions = require('../core/CommonActions');

class Content {

    constructor() {
        this.newButton = '//a[@title="New"]';
    }

    clickNewButton() {
        commonActions.click(this.newButton);
    }
}

module.exports = Content;
