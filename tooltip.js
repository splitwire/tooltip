(function( $ ) {
  $.fn.tooltip = function(options) {

    var defaults = {
      'cursor':   'pointer',
      'msg':      $(this).attr('alt')
    };
    
    
    var settings = $.extend( {}, defaults, options );
   
    $(this).css('cursor', settings.cursor);
    
    // DO ACTION
    $(this).on('mouseenter', function(event) {
      
        
      if ( $('body .dyn-tooltip').is(':visible') ) {
        $('body .dyn-tooltip').stop().fadeIn('fast');
      } else {

        var tooltip = '<div class="dyn-tooltip">' + settings.msg + '</div>';
        $('body').append(tooltip);

      }
      
      $('body .dyn-tooltip').css({
          'top':                event.pageY - ( $('body .dyn-tooltip').height() + 15 ),
          'left':               event.pageX
      });


    }).on('mousemove', function(event) {
      
      $('body .dyn-tooltip').css({
          'top':                event.pageY - ( $('body .dyn-tooltip').height() + 15 ),
          'left':               event.pageX
      });


    }).on('mouseout', function() {

      $('body .dyn-tooltip').fadeOut('fast', function() {

        $('body .dyn-tooltip').remove();

      });
    
    });
    

  }

}( jQuery ));
