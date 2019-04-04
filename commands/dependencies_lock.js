const path = require('path');

(function () {
    'use strict';

    module.exports = {
        topic: 'dependencies',
        command: 'lock',
        description: 'Lock dependencies from a target environment.',
        help: 'help text for dxpm:dependencies:lock',
        flags: [
            {
                name: 'targetusername',
                char: 'u',
                description: 'username or alias for the target org; overrides default target org',
                hasValue: true,
                required: false
            },
            {
                name: 'lockfile',
                char: 'l',
                description: 'path of lock-file; defaults to dependencies.lock',
                hasValue: true,
                required: false
            }
        ],
        run(context) {
            // Flags
            var targetusername = context.flags.targetusername;
            let lockfile = context.flags.lockfile;

            if (lockfile === null) {
                lockfile = path.resolve('dependencies.lock');
            }

            git.Repository.open('.').then(function (repo) {
                gitops.diffNameStatus(repo, head_commitish, tail_commitish)
                    .catch(function (error) {
                        console.log(error);
                    }).then(function (files) {
                        console.log(files);
                        console.log("*******");
                        files = mdapi.filter_mdapiignore(files);
                        console.log(files);
                        console.log("*******");
                        files = mdapi.filter_srcdir(files, "src");
                        console.log(files);
                    });
            });
        }
    };
}());