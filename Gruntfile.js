module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      dist: {
        src: ['src/jquery-1.1.3.1.pack.js', 'src/thickbox.min.js', 'src/met-international.js'],
        dest: 'dest/met-international.js'
      }
    },
    uglify: {
      my_target: {
        files: {
          'dest/met-international.min.js': ['dest/met-international.js']
        }
      }
    },
    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['concat', 'uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['concat', 'uglify', 'watch']);

};
