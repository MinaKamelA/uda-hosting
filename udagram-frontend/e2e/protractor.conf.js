// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  // capabilities: {
  //   'browserName': 'ChromeHeadlessNoSandbox',
  //   'chromeOptions': {
  //     'args': ['no-sandbox']
  //   }
  // },
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
          'args': ['no-sandbox', 'headless', 'disable-dev-shm-usage']
        }
  },
  directConnect: true,
  baseUrl: 'Udagramapi-env.eba-yh72ejkg.us-east-1.elasticbeanstalk.com',//'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
  }
};
