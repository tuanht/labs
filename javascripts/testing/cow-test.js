"use strict";

phantom.injectJs('libs/casper-init.js');

var utils = require('utils');

// *** Begin debugger
// 
// utils.dump(casper.options);
// 
// casper.log(cow, 'debug');
// 
// casperjs test --url=http://localhost test-inspector.js --remote-debugger-port=9000
// 
// *** End debugger
// 
// var cus_mock = require('cus-mock');

// add file needed to test
phantom.injectJs('cow.js');

casper.test.begin('Cow can moo', 2, function suite(test) {
    var cow = new Cow();
    
    test.assertEquals(cow.moo(), 'moo!');
    test.assert(cow.mowed);
    test.done();
});