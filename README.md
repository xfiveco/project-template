Usage
=====

Project is created with use of [Sass](http://sass-lang.com/) and prepared to be developed & build with [Grunt](http://gruntjs.com). It [Bower](http://bower.io) to manage project dependencies


Build
--------

To be able to utilize above tools & libraries, [Ruby](http://www.ruby-lang.org) & [node.js](http://nodejs.org) must be installed in system. After that dependecies must be installed.

1. If there is na grunt installed in the system, do so via:

  npm install -g grunt-cli

2. If there is no bower installed in the system, do so via:

        npm install -g bower

3. Install node packages (while in root project folder):

        npm install

4. Install bower dependencies (while in root project folder):

        bower install

5. Build project (while in root project folder):

        grunt

Development
-----------

During development, to re-compile SCSS file in real time you can use watch task

  grunt watch

this will start a task that will watch for changes in files and recompile them as needed.
