# Overview

This is a test project template. Imagine this could be initial structure generated from our custom Yeoman generator.

## Project structure

* **src** - source files, development is done here
 * *bower_components* - 3rd party libraries managed via Bower
 * *includes* - HTML partials like head.html
 * *scss* - SCSS files
 * *js* - application JS files
 * *home.html, etc.* - HTML files composed from HTML partials
* **dist** - production / preview files are automatically generated here
* *index.html* - project index

### 3rd party libraries

3rd party libraries are managed via Bower, in this project we have:

* normalize.css
* jQuery
* modernizr
* [Colorbox](http://www.jacklmoore.com/colorbox/)

### Grunt tasks

Various Grunt libraries are used to automate the following tasks:

* Including HTML partials
* Beautifying HTML / CSS / JS code in dist folder
* Validating HTML code in dist folder
* Merging and minifying JS libraries
* Checking JS code with JSHint

## Installation

1. Install [node.js](http://nodejs.org) (skip if you have it installed already)

2. Install [Ruby](http://www.ruby-lang.org) (skip if you have it installed already)

3. Install [Sass](http://sass-lang.com/install) from the command line (skip if you have it installed already)

        gem install sass

4. Install Grunt from the command line (skip if you have it installed already)

        npm install -g grunt-cli

5. Install node packages (while in root project folder):

        npm install

6. Build the project

        grunt

7. Open your browser at [http://localhost/your_project_folder](http://localhost/your_project_folder)


## Development


To re-compile HTML / SCSS file in real time you can use watch task

    grunt watch

this will start a task that will watch for changes in files and recompile them as needed.

You can connect with a LiveReload browser extension then to enable live reloads.

To rebuild the whole project and prettify / validate files use grunt task

    grunt
