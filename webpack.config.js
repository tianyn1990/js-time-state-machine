module.exports = function (env) {

    'use strict'

    const webpack = require('webpack'),
        path = require('path'),
        glob = require('glob'),
        config = [];

    config.push({
        name: 'time-state-machine',
        library: 'TimeStateMachine',
        entry: 'app'
    });

    return config.map(function (cfg) {
        return {
            entry: cfg.entry,
            resolve: {
                modules: [path.resolve(__dirname, 'src')]
            },
            output: {
                filename: path.join('lib', cfg.name + '.js'),
                library: cfg.library,
                libraryTarget: 'umd',
                umdNamedDefine: true
            }
        };
    });
};