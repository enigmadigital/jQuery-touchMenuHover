/*
 * Izilla touchMenuHover jQuery plugin v1.0
 * Allows uls that open on li:hover to open on tap/click on mobile platforms such as Android, WP7 etc
 *
 * Copyright (c) 2012 Izilla Partners Pty Ltd
 *
 * http://www.izilla.com.au
 *
 * Licensed under the MIT license
 *
 */
 
(function($) {
	$.fn.touchMenuHover = function() {
		
		var $a = this.find('a');
		var devices = /\b3ds|android|bada|hpwos|iemobile|kindle fire|opera mini|opera mobi|playbook|silk\b/gi;
		
		if ($a.length > 0 && devices.test(navigator.userAgent)) {
			var o = 'touch-open';
			$a.each(function(e) {
				$(this).on('click', function(e) {
					e.stopPropagation();
					$(this).parent('li').siblings().find('a').removeClass(o);
					
					if (!$(this).hasClass(o) && $(this).next('ul').length > 0) {
						e.preventDefault();
						$(this).addClass(o);
					}
				});
			});
			$('html').on('click', function() {
				$a.removeClass(o);
			});
		}
		
	};
})(jQuery);