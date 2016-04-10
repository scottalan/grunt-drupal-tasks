module.exports = function(grunt) {
  grunt.initConfig({
    config: {
      "srcPaths": {
        "make": "src/project.make",
        "drupal": "src"
      },
      "domain": "project.vm",
      "packages": {
        "srcFiles": ["!sites/*/files/**", "!xmlrpc.php", "!modules/php/*"],
        "projFiles": ["README*", "bin/**"]
      },
      "phpcs": {
        "path": "vendor/bin/phpcs"
      },
      "phpmd": {
        "path": "vendor/bin/phpmd"
      },
      "drush": {
        "cmd": "vendor/bin/drush"
      },
      "behat": {
        "flags": "--tags ~@wip"
      },
      "eslint": true,
      "scripts": {
        "update": "<%= config.drush.cmd %> <%= config.alias %> features-revert-all -yv"
      }
    }
  });

  // Load all plugins and tasks defined by the grunt-drupal-tasks package.
  require('grunt-drupal-tasks')(grunt);
};
