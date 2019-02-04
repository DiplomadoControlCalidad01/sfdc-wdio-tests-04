const commonActions = require('../core/CommonActions');
const TerritoryTypes = require('./territoryTypesList.po');
const TerritoryModelsList = require('./territoryModelsList.po');

class ConfigurationTree {

    constructor() {
        //todo use regular expressions in the url
        browser.url('https://na85.lightning.force.com/lightning/setup/SetupOneHome/home');
        this.configurationTree = 'div[data-aura-class="onesetupSetupNavTree"]'; //locator of tree view panel (configuration tree).
        this.searchField = 'input[data-interactive-lib-uid="3"]'; //locator of search field placed in the configurations tree pane.
        this.territoryTypeTreeBranch = 'li[data-node-id="Territory2Types"]';
        this.territoryModelsTreeBranch = 'li[data-node-id="Territory2Models"]';
    }

    setSearchTextField(searchableItem) {
        commonActions.setValue(this.searchField, searchableItem);
    }
    clickTerritoryTypeTreeBranch() {
        commonActions.click(this.territoryTypeTreeBranch);
        return new TerritoryTypes;
    }

    clickTerritoryModelsTreeBranch() {
        commonActions.click(this.territoryModelsTreeBranch);
        return new TerritoryModelsList;
    }
}

module.exports = ConfigurationTree;