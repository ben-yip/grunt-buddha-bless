'use strict';

var grunt = require('grunt');

/*
 ======== A Handy Little Nodeunit Reference ========
 https://github.com/caolan/nodeunit

 Test methods:
 test.expect(numAssertions)
 test.done()
 Test assertions:
 test.ok(value, [message])
 test.equal(actual, expected, [message])
 test.notEqual(actual, expected, [message])
 test.deepEqual(actual, expected, [message])
 test.notDeepEqual(actual, expected, [message])
 test.strictEqual(actual, expected, [message])
 test.notStrictEqual(actual, expected, [message])
 test.throws(block, [error], [message])
 test.doesNotThrow(block, [error], [message])
 test.ifError(value)
 */

exports.buddha = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },

    buddha: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/buddha.js');
        var expected = grunt.file.read('test/expected/buddha_comment.js');
        test.equal(actual, expected, 'buddha comment should output successfully.');

        test.done();
    },

    alpaca: function (test) {
        test.expect(1);

        var actual = grunt.file.read('tmp/alpaca.js');
        var expected = grunt.file.read('test/expected/alpaca_comment.js');
        test.equal(actual, expected, 'alpaca comment should output successfully.');

        test.done();
    }

    // 原来模板生成的示例代码
    // default_options: function (test) {
    //     test.expect(1);
    //
    //     var actual = grunt.file.read('tmp/default_options');
    //     var expected = grunt.file.read('test/expected/default_options');
    //     test.equal(actual, expected, 'should describe what the default behavior is.');
    //
    //     test.done();
    // }
};
