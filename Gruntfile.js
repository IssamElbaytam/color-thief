module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['src/color-thief.js']
    },
    uglify: {
      options: {
        preserveComments: 'some',
        sourceMap: false
      },
      dist: {
        files: {
          'dist/color-thief.min.js': ['src/color-thief.js']
        }
      }
    },
    watch: {
      sass: {
        files: ['examples/sass/*.sass'],
        tasks: ['compass'],
        options: {
          livereload: true,
          spawn: false
        },
      },
      test: {
        files: ['src/color-thief.js'],
        tasks: ['jshint']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ftp-deploy');


  grunt.registerTask('default', ['connect', 'watch']);
  grunt.registerTask('build', ['jshint', 'uglify']);
};
