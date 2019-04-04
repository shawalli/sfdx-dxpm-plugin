const path = require('path');
const almPath = path.dirname(require.resolve('salesforce-alm'));
const Alias = require(path.join(almPath, 'lib', 'alias'));

module.exports = {
    get: (result) => {
        return Alias.get('defaultusername').then(result);
    }
}