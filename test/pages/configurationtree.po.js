const commonActions = require('../core/CommonActions');

class ConfigurationTree {

    constructor() {
        this.configurationTree = 'div[data-aura-class="onesetupSetupNavTree"]'; //locator of tree view panel (configuration tree)
        this.searchField = 'input[data-interactive-lib-uid="3"]'; //locator of search field placed in the configurations tree pane.

    }

    setSearchTextField(searchableItem) {
        commonActions.setValue(this.searchField, searchableItem);
        browser.pause(30000);
    }
}

module.exports = ConfigurationTree;