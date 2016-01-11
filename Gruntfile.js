'use strict';

var config = {
  pkg:  require('./package.json'),
  app: 'src',
  dist: 'dist'
};


module.exports = function(grunt) {


  // Project configuration.
  grunt.initConfig({
    // Metadata.
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
	config: config,
	pkg: config.pkg,
	bower: grunt.file.readJSON('./.bowerrc'),
	
	
    concat: {
      dist: {
		options: {
			banner: '<%= banner %>',
			stripBanners: true
      },
        src: ['src/<%= pkg.name %>.js'],
        dest: 'dist/<%= pkg.name %>.js'
      },
	htmldist: {src: 'src/<%= pkg.name %>.html', dest: 'dist/<%= pkg.name %>.html'}
    },
    uglify: {
      options: {
        banner: '<%= banner %>'
      },
      dist: {
		files: {
          '<%= config.dist %>/js/lib.min.js': [
            '<%= bower.directory %>/jquery/dist/jquery.js',
			'<%= bower.directory %>/createjs-collection/index.js',
          ],
		  '<%= concat.dist.dest %>': [ 
		    'dist/<%= pkg.name %>.min.js']
        }
      },
    },
    nodeunit: {
      files: ['test/**/*_test.js']
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },                                                           
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib: {
        options: {
          jshintrc: 'src/.jshintrc'
        },
        src: ['src/**/*.js']
      },
      test: {
        src: ['test/**/*.js']
      },
    },
    watch: {
      gruntfile: {
        files: ['<%= jshint.gruntfile.src %>'],
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: '<%= jshint.lib.src %>',
        tasks: ['jshint:lib', 'nodeunit']
      },
      test: {
        files: '<%= jshint.test.src %>',
        tasks: ['jshint:test', 'nodeunit']
      },
	  srcchanged: {
        files: ['src/*'],
		tasks: ['concat'],
        options:{
			livereload:true
		}
      }
    },
	 connect: {
      all: {
        options:{
          port: 9000,
          hostname: "0.0.0.0",
          // Prevents Grunt to close just after the task (starting the server) completes
          // This will be removed later as `watch` will take care of that
          keepalive: true
        }
      }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit', 'concat', 'uglify']);
  grunt.registerTask('server',['connect']);
};
