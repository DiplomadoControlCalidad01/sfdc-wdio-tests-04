const commonActions = require('../core/CommonActions');

class ConfigurationTree {

    constructor() {
        browser.url('https://na85.lightning.force.com/lightning/setup/SetupOneHome/home');
        this.configurationTree = 'div[data-aura-class="onesetupSetupNavTree"]'; //locator of tree view panel (configuration tree).
        this.searchField = 'input[data-interactive-lib-uid="3"]'; //locator of search field placed in the configurations tree pane.
        this.territoryTypeTreeBranch = 'li[data-node-id="Territory2Types"]';
    }

    setSearchTextField(searchableItem) {
        commonActions.setValue(this.searchField, searchableItem);
    }
    clickTerritoryTypeTreeBranch() {
        commonActions.click(this.territoryTypeTreeBranch);
    }
}

module.exports = ConfigurationTree;