/* ==========================================================================

    Project: Project Template Test
    Author: XHTMLized.com
    Last updated: Fri Apr 04 2014 14:28:31

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
