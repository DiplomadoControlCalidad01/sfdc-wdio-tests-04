const  commonActions = require('../core/CommonActions');

class TerritoryType {

    constructor() {
        this.newTerritoryModelButton = 'input[name="newTerritoryModel"]';
    }

    clickNewTerritoryModelButton(){
        commonActions.click(this.newTerritoryModelButton);
    }
}

module.exports = TerritoryType;