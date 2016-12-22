# grunt-buddha-bless

> Buddha shines, no bugs alive.

Add some ASCII Arts (as comment) in your src files, and wish them bless you from bugs.  
*Many optional ASCII Arts provided.*

Sample:

```js
//                   _ooOoo_
//                  o8888888o
//                  88" . "88
//                  (| -_- |)
//                  O\  =  /O
//               ____/`---'\____
//             .'  \\|     |//  `.
//            /  \\|||  :  |||//  \
//           /  _||||| -:- |||||-  \
//           |   | \\\  -  /// |   |
//           | \_|  ''\---/''  |   |
//           \  .-\__  `-`  ___/-. /
//         ___`. .'  /--.--\  `. . __
//      ."" '<  `.___\_<|>_/___.'  >'"".
//     | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//     \  \ `-.   \_ __\ /__ _/   .-` /  /
//======`-.____`-.___\_____/___.-`____.-'======
//                   `=---='
//
//^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//          佛祖保佑           永无BUG
//         God Bless        Never Crash
```

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-buddha-bless --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-buddha-bless');
```

## The "buddha" task

### Overview
In your project's Gruntfile, add a section named `buddha` to the data object passed into `grunt.initConfig()`.

**Note:** this **plugin** named 'grunt-buddha-bless' while the **task** just named 'buddha'.

```js
grunt.initConfig({
  buddha: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.who
Type: `String`  
Default value: `buddha`  
Optional value: `buddha`, `alpaca`

choose an ASCII Arts to be prepended to your src files.

#### options.commentSymbol
Type: `String`  
Default value: `//`  

Specify which comment symbol to use.

### Usage Examples

#### Default Options
In this example, the default options are used to add add a buddha ASCII Art.

```js
grunt.initConfig({
  buddha: {
    dist: 'example/*.js'
  }
});
```

#### Custom Options
In this example, custom options are used to add a alpaca ASCII Art.

```js
grunt.initConfig({
  buddha: {
    alpaca : {
        options: {
          who: 'alpaca',
          commentSymbol: '//'
        },
        src: ['example/test1.js', 'example/test2.js']
    }
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2016-12-22 &nbsp; v0.0.1 &nbsp; init
