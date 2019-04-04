const dependenciesLock = require('./commands/dependencies_lock.js');
// const sourceOss = require('./commands/package_create_overlay.js');


(function () {
    'use strict';

    exports.topics = [{
        name: 'dependencies',
        description: 'commands for managing dependencies'
    }];

    exports.namespace = {
        name: 'dxpm',
        description: 'Various commands from Shawn Wallis'
    };

    exports.commands = [
        dependenciesLock
    ];

}());