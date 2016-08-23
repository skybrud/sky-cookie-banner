(function() {
	"use strict";

	angular.module('skyCookieBanner').component('skyCookieBanner', {
			templateUrl:'/sky-cookie-banner/sky-cookie-banner.template.html',
			controller:controller,
			bindings: {
				readMoreLink:'@',
			}
		});


		controller.$inject = ['$cookies'];
		function controller($cookies) {
			this.active = !$cookies.get('hideCookieBanner');

			// Test if cookies are enabled
			$cookies.put('cookiesEnabled', 1);
			this.disabled = !$cookies.get('cookiesEnabled');
			$cookies.remove('cookiesEnabled');

			// Close the banner and set the cookie
			this.close = function() {
				this.active = false;
				$cookies.put('hideCookieBanner', 1);
			}
		}
})();
