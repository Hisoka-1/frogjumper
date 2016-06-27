'use strict';

var config = {
  pkg:  require('./package.json'),
  app: 'src',
  dist: 'dist'
};



module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    eslint: {
      files: ['src/**/*.es6', 'src/**/*.js'],
      options: {
        configFile: 'conf/eslint.json'
      }
    },

    browserify:{

      dist: {
        options: {
          transform: [
              ["babelify", { "presets": ["react","es2015"] }]
            ],
        },

        files: {
           "./dist/module.js": ["src/**/*.es6", "src/**/*.jsx"],
        },
    	},
      watch: {
          options: {
          watch:true,
          transform: [
              ["babelify", { "presets": ["react", "es2015"] }]
            ],
         },   

        files: {
           "./dist/module.js": ["src/**/*.es6", "src/**/*.jsx"],
        },
      }
    },
    watch: {
      files:['dist/module.js', 'game.html'],
      options:{
        keepAlive:true,
        livereload:true
      }
    },
    connect:{
      server:{
        options: {
          keepalive: true,
        }
      }
    },
    concurrent: {
      target1: ['connect', 'watchStart'],
      options: {
        logConcurrentOutput: true
      }
    }

  });
  require('load-grunt-tasks')(grunt); 

  //grunt.registerTask('default', ['eslint', 'browserify:dist']);
  grunt.registerTask('default', 'concurrent')
  grunt.registerTask('watchStart', ['eslint', 'browserify:watch', 'watch']);
};
