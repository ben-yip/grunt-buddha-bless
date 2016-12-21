/*
 * grunt-buddha
 * https://github.com/ben-yip/grunt-buddha
 *
 * Copyright (c) 2016 BenYip
 * Licensed under the MIT license.
 */

'use strict';


// 涉及到路径等操作，相关內建模块
const os = require('os'),
    path = require('path');


module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('buddha', 'Buddha shines, no bugs alive.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        // this.options() 用于获取 Gruntfile.js 中声明的 options，
        // 参数中的对象为默认值，如 Gruntfile 中有同名属性则会覆盖默认值。
        var options = this.options({
            who: 'buddha',
            commentSymbol: '//'
        });

        // 先处理字符画片段
        var
            // 各保佑神字符画文件的所在位置
            commentFilepathMap = {
                buddha: 'asset/buddha.txt',
                alpaca: 'asset/alpaca.txt'
            },

            // 用于校验是否已添加过字符画的正则
            testExistRegexMap = {
                buddha: /     o8888888o/,
                alpaca: /   ┗┓┓┏━━━━┳┓┏┛/
            },

            // 获取所选的保佑神文件的完整路径
            commentFilepath = path.join(__dirname, commentFilepathMap[options.who]),

            // 读取字符画文件
            commentContent = grunt.file.read(commentFilepath),

            // 按行分裂成数组
            lineCommentArr = commentContent.split(os.EOL);

        // 在每行内容前面加上注释符
        lineCommentArr.forEach(function (item, index, arr) {
            arr[index] = options.commentSymbol + item;
        });

        // 重新拼接内容
        commentContent = lineCommentArr.join(os.EOL);


        // Iterate over all specified file groups.
        // 如果 grunt task 是通过 registerMultiTask 注册的，
        // 无论在 Gruntfile 中使用了哪种 File Mapping Format，
        // 这里都会被转化成 File Array Format。
        // 所以这里使用 forEach 进行迭代。
        this.files.forEach(function (file) {

            // 无论在 Gruntfile 中 src 是字符串还是数组，
            // 这里的 src 都会被转换成数组形式，所以可以使用 filter 方法
            file.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).forEach(function (filepath) {
                // Read file source.
                var originalFileContent = grunt.file.read(filepath),
                    newFileContent = commentContent + os.EOL + originalFileContent;

                // 如果已经添加过，则直接返回
                if (testExistRegexMap[options.who].test(originalFileContent)) {
                    return;
                }

                //把拼接好字符画注释的文件内容写回去
                grunt.file.write(filepath, newFileContent);
            });

            // Print a success message.
            grunt.log.writeln('File "' + file.src + '" created.');
        });
    });
};
