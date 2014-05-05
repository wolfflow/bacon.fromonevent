module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-coffee')
  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-mocha')
  grunt.registerTask('default', ['coffee', 'uglify'])
  grunt.registerTask('test', ['browserify','mocha'])


  grunt.initConfig({
    coffee: {
      main: {
        files: {
          'dist/bacon.fromonevent.js': 'src/bacon.fromonevent.coffee'
        }  
      }
    },

    uglify: {
      main:{
        src: 'dist/bacon.fromonevent.js',
        dest: 'dist/bacon.fromonevent.min.js'
      }
    },
    browserify:{
      'tests/bacon.fromonevent.spec.js': ['tests/bacon.fromonevent.spec.coffee'],
      options:{
        transform: ['coffeeify']
      }
    
    },
    mocha: {
      index: ['tests/index.html'],
      options: {
        run: true
      }
    }
  })
}
