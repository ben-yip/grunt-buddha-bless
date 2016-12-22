/*
 * grunt-buddha
 * https://github.com/ben-yip/grunt-buddha
 *
 * Copyright (c) 2016 BenYip
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js',
                '<%= nodeunit.tests %>'
            ],
            options: {
                jshintrc: '.jshintrc',
                reporterOutput: ''
            }
        },

        // Before generating any new files, remove any previously-created files.
        clean: {
            tests: ['tmp']
        },

        copy: {
            toTemp: {
                // 这里使用的是 compact format
                expand: true,
                cwd: 'test/fixtures/',
                src: '*',
                dest: 'tmp/'
            }
        },

        // 这里生成了与插件名称相应的task(准确来讲是同名)
        // 跑完插件的逻辑功能后，进入后续的测试任务
        // Configuration to be run (and then tested).
        buddha: {
            buddha: {
                src: 'tmp/buddha.js',
                options: {
                    who: 'buddha',  // who to bless your code: 'buddha' or 'alpaca'
                    commentSymbol: '//'
                }
            },
            alpaca: {
                src: 'tmp/alpaca.js',
                options: {
                    who: 'alpaca',
                    commentSymbol: '//'
                }
            }
        },

        // Unit tests.
        nodeunit: {
            tests: ['test/*_test.js']
        }

    });

    // 加载 tasks 目录下的文件，参数中的路径相对于 Gruntfile
    // Actually load this plugin's task(s).
    grunt.loadTasks('tasks');

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    // Whenever the "test" task is run, first clean the "tmp" dir, then run this
    // plugin's task(s), then test the result.
    grunt.registerTask('test', 'test this plugin', [
        'clean',
        'copy',
        'buddha',
        'nodeunit'
    ]);

    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'test']);

};
