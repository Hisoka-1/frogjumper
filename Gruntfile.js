'use strict';

var config = {
  pkg:  require('./package.json'),
  app: 'src',
  dist: 'dist'
};



module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
   /* // Metadata.
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> \n',
    // Task configuration.
	config: config,
	pkg: config.pkg,
	bower: grunt.file.readJSON('./.bowerrc'),
	*/
    eslint: {
      files: ['src/**/*.es6', 'src/**/*.jsx'],
      options: {
        configFile: 'conf/eslint.json'
      }
    },

    browserify:{

      dist: {
        options: {
          transform: [
            ["reactify", {"es6": true}],
              ["babelify", { "presets": ["es2015"] }]
            ],
        },

        files: {
           "./dist/module.js": ["src/js/*.es6", "src/js/*.jsx"],
        },
    	},
      watch: {
          options: {
          watch:true,
          transform: [
            ["reactify", {"es6": true}],
              ["babelify", { "presets": ["es2015"] }]
            ],
         },   

        files: {
           "./dist/module.js": ["src/js/*.es6", "src/js/*.jsx"],
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
    }

  });
  require('load-grunt-tasks')(grunt); 

  grunt.registerTask('default', ['eslint', 'browserify:dist']);
  grunt.registerTask('watchStart', ['eslint', 'browserify:watch', 'watch']);
};
