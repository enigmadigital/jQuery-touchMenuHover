/*
 * Izilla touchMenuHover jQuery plugin v1.3
 * Allows ULs (or any element of your choice) that open on li:hover to open on tap/click on mobile platforms such as iOS, Android, WP7 etc
 *
 * Copyright (c) 2013 Izilla Partners Pty Ltd
 *
 * http://izilla.com.au
 *
 * Licensed under the MIT license
 */
;(function($) {
	$.fn.touchMenuHover = function(options) {
		var settings = $.extend({
			'childTag': 'ul',
			'closeElement': '',
			'forceiOS': false
		}, options);
		
		var $a = $(this).find('a'),
			devices = '3ds|android|bada|hpwos|iemobile|kindle fire|opera mini|opera mobi|playbook|silk',
			ios = '|ipad|ipod|iphone',
			devicesRX,
			openClass = 'touch-open',
			closeStr = 'html';
		
		if (settings['childTag'].toString().toLowerCase() != 'ul' || settings['forceiOS'])
			devices += ios;
		
		devicesRX = new RegExp(devices, 'gi');
		
		if ($a.length > 0 && devicesRX.test(navigator.userAgent)) {
			$a.each(function() {
				var $this = $(this),
					$siblings = $this.parent('li').siblings().find('a');
				$this.click(function(e) {
					var $this = $(this);
					e.stopPropagation();
					$siblings.removeClass(openClass);
					
					if (!$this.hasClass(openClass) && $this.next(settings['childTag']).length > 0) {
						e.preventDefault();
						$this.addClass(openClass);
					}
				});
			});
			
			if (settings['closeElement'].length > 1)
				closeStr += ',' + settings['closeElement'];
				
			$(closeStr).click(function() {
				$a.removeClass(openClass);
			});
		}
		return this;
	};
})(jQuery);