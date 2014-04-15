/* ==========================================================================

    Project: Project Template Test
    Author: XHTMLized.com
    Last updated: Tue Apr 15 2014 19:03:57

   ========================================================================== */

(function($) {

  'use strict';

  var App = {

    /**
     * Init Function
     */
    init: function() {
      App.jQueryVersion();
      App.initColorbox();
    },

    /**
     * Output jQuery version
     */
    jQueryVersion: function() {
      console.log('Running jQuery %s', $().jquery);
    },

    initColorbox: function() {
      $(".colorbox").colorbox();
    }

  };

  $(function() {
    App.init();
  });

})(jQuery);
