/* ==========================================================================

    Project: Project Template Test
    Author: XHTMLized.com
    Last updated: Mon Apr 07 2014 17:41:17

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
