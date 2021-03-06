// Inside `test/expressjs_test.js`
// As we had before ...
var chai = require("chai");
var expect = chai.expect;
// The star of the show!
var webdriver = require("selenium-webdriver");
// Selenium will be running all its tests through Chrome. (You could download firefox or safari as well)
var by = webdriver.By;
var chrome = require('selenium-webdriver/chrome');
// Inside `before` because we want it to happen before it tries to start any tests
before(function () {
    // Set up the chrome service
    var path = require('chromedriver').path;
    var service = new chrome.ServiceBuilder(path).build();
    chrome.setDefaultService(service);
    var builder = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome());
    // `this.driver` will be how we communicate with the browser
    this.driver = builder.build(); 
});
after(function (done) {
    // Shut off the driver once all of our tests have completed
    this.driver.quit().then(done);
});
describe("Express Repo on GitHub", function () {
    // it("can be reached", function (done) {  // NOTICE !! PASSING `done` AS PARAMETER
    //     // By default mocha will only wait 2 seconds, but it may take longer for chrome to open 
    //     // So we will set it to 10 seconds (if you have a slow computer, you may need to set it longer)
    //     this.timeout(10000);
    //     this.driver.get("https://github.com/expressjs/express").then(done);
    // });
    it("has 'expressjs/express' in the title", function (done) {
        this.timeout(10000);
        var d = this.driver;  // Because we need to use it within the closure
        d.get('http://en.wikipedia.org/wiki/Wiki');
        d.findElements(bycss('[href^="/wiki/"]')).then(function(links){
            console.log('Found', links.length, 'Wiki links.' )
            done();
        });
    });
});