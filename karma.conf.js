const webpackConfig = require('./webpack.config.js');
webpackConfig.devtool = 'inline-source-map';
webpackConfig.mode = 'development'

module.exports = (config) => {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        browsers: ['Firefox'],
        browserNoActivityTimeout: 100000,
        autoWatch: false,
        singleRun: true,
        files: [

            {pattern: 'node_modules/angular/angular.js', watched: false},
            {pattern: 'node_modules/angular-mocks/angular-mocks.js', watched: false},
            {pattern: 'node_modules/moment/min/moment.min.js', watched: false},
            {pattern: 'node_modules/jquery/jquery.js', watched: false},
            {pattern: 'node_modules/offline/offline.js', watched: false},
            {pattern: 'node_modules/lodash/lodash.js', watched: false},
            {pattern: 'node_modules/@uirouter/angularjs/release/angular-ui-router.js', watched: false},
            {pattern: 'node_modules/q/q.js', watched: false},
            {pattern: 'node_modules/ng-clip/src/ngClip.js', watched: false},
            {pattern: 'node_modules/zeroclipboard/dist/ZeroClipboard.js', watched: false},
            {pattern: 'node_modules/angular-translate/dist/angular-translate.js', watched: false},
            {pattern: 'node_modules/jasmine-jquery/lib/jasmine-jquery.js', watched: false},

            {pattern: 'test/lib/**/*.js', watched: false},
            {pattern: 'test/support/*.js', watched: false},
            {pattern: 'test/init-constants.js', watched: false},

            {pattern: 'dist/bahmni-util-commons.js', watched: false},
            {pattern: 'dist/bahmni-model-commons.js', watched: false},
            {pattern: 'dist/bahmni-auth-commons.js', watched: false},
            {pattern: 'dist/bahmni-appframework-commons.js', watched: false},
            {pattern: 'dist/bahmni-displaycontrols-commons.js', watched: false},
            {pattern: 'dist/bahmni-config-commons.js', watched: false},
            {pattern: 'dist/bahmni-domain-commons.js', watched: false},
            {pattern: 'dist/bahmni-patient-commons.js', watched: false},
            {pattern: 'dist/bahmni-uihelper-commons.js', watched: false},
            {pattern: 'test/**/*spec.js', watched: false},
        ],
        reporters: ['junit', 'progress'],

        preprocessors: {
            'src/**/*.js': ['webpack', 'sourcemap'],
        },

        webpack: webpackConfig,
        webpackMiddleware: {
            stats: 'errors-only',
        },
    });
};
