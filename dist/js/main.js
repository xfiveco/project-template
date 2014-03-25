(function($) {

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
