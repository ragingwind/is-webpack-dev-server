'use strict';

module.exports = process.mainModule && /webpack-dev-server.js$/.test(process.mainModule.filename) &&
    process.argv.find(arg => /webpack-dev-server$/.test(arg)) !== undefined;
