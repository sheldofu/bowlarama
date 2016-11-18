module.exports = function(grunt) {  
 
 grunt.initConfig({

  copy: {
    main: {
      flatten: true,
      expand: true,
      src: 'views/*.html',
      dest: 'dist/',
      filter: 'isFile'
    }
  },

  sass: {                              
    dist: {                            
      options: {                       
        style: 'expanded'
      },
      files: {                         
        'dist/css/main.css': 'stylesheets/main.scss'
      }
    }
  },

  babel: {
    options: {
      sourceMap: true,
      presets: ['es2015']
    },
    dist: {
      files: {
        "dist/js/app.js": "scripts/main.js",
        "dist/js/scoreboard.js": "scripts/scoreboard.js"
      }
    }
  },

  browserSync: {
      bsFiles: {
          src : 'dist/css/*.css'
      },
      options: {
          watchTask: true,
          server: {
              baseDir: "dist/"
          }
      }
  },

  browserify: {
      'dist/js/module.js': ['dist/js/app.js'],
      'test/spec/test_module.js': ['test/spec/test.js']
  },

  watch: {
    scripts: {
      files: ['stylesheets/*.scss'],
      tasks: ['sass'],
      options: {
        spawn: false
      },
    },
  }
})

grunt.loadNpmTasks('grunt-browserify');
grunt.loadNpmTasks('grunt-browser-sync');
grunt.loadNpmTasks('grunt-babel')
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-copy');

grunt.registerTask('default', ['copy','babel','sass','browserify','browserSync','watch']);

}