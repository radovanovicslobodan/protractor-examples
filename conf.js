exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js', '*.spec.js'],
  onPrepare: function() {
  	browser.manage().window().maximize();
  },
  capabilities: {
    browserName: 'chrome'
  }
}