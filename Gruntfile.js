module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'css/style.css': 'css-dev/style.scss'
        }
      }
    },
    concat: {
      dist: {
        src: ['js-dev/jquery-1.1.3.1.pack.js', 'js-dev/thickbox.min.js', 'js-dev/met-international.js'],
        dest: 'js/met-international.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'js/met-international.min.js': ['js/met-international.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['js-dev/*.js', 'css-dev/style.scss'],
        tasks: ['sass', 'concat', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'watch']);

};
