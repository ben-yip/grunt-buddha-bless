/*
 * grunt-buddha
 * https://github.com/ben-yip/grunt-buddha
 *
 * Copyright (c) 2016 BenYip
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('buddha', 'Buddha shines, no bugs alive.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        // this.options() 用于获取 Gruntfile.js 中声明的 options，
        // 参数中的对象为默认值，如 Gruntfile 中有同名属性则会覆盖默认值。
        var options = this.options({
            //以下2个参数为GruntPlugin模板给出的
            punctuation: '.',
            separator: ', '
        });

        // Iterate over all specified file groups.
        // 如果 grunt task 是通过 registerMultiTask 注册的，
        // 无论在 Gruntfile 中使用了哪种 File Mapping Format，
        // 这里都会被转化成 File Array Format。
        // 所以这里使用 forEach 进行迭代。
        this.files.forEach(function (file) {
            // Concat specified files.
            // 无论在 Gruntfile 中 src 是字符串还是数组，
            // 这里的 src 都会被转换成数组形式，所以可以使用 filter 方法
            var src = file.src.filter(function (filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).map(function (filepath) {
                // Read file source.
                // 读取文件内容
                return grunt.file.read(filepath);
            }).join(grunt.util.normalizelf(options.separator));
            // ↑ 把读取的文件内容连起来，
            // 连接之前，把options.separator 中的换行符（实际上这里是', '）替换成系统相关的换行符
            // http://gruntjs.com/api/grunt.util#grunt.util.normalizelf

            // Handle options.
            src += options.punctuation;

            // Write the destination file.
            // 这里的 dest 为 String 类型
            grunt.file.write(file.dest, src);

            // Print a success message.
            grunt.log.writeln('File "' + file.dest + '" created.');
        });
    });

};
