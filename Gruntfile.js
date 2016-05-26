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

    jshint:{
    	options:{
    		esversion: 6
    	},
    	files: ['src/**/*.es6']
    },

    mocha:{
    	test:{
    		src: ['test/**/*.html']
    	},
    	options:{
    		require: 'test/mocha-babel'
    	}
    },
    browserify:{

      dist: {
        options: {
           transform: [
              ["babelify", { "presets": ["es2015"] }]
           ]
        },
        files: {
           // if the source file has an extension of es6 then
           // we change the name of the source file accordingly.
           // The result file's extension is always .js
           "./dist/module.js": ["src/js/game.es6"]
        }
    	},
    	test:{
    		files:{
    			'test/dist/bundle.js':'test/game_test.js'
    		}
    	}
    },
    simplemocha: {
      all: {
        src: ['test/**/*.js', '**/*.spec.js']
      },
      options: {
        require: 'test/mocha-babel'
      }
    }

  
    
  });
  require('load-grunt-tasks')(grunt); 
  grunt.registerTask('default', ['jshint', 'browserify']);
};
