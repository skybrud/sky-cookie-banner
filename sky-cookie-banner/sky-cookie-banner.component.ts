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

			$cookies.put('cookiesEnabled', 1);
			this.disabled = !$cookies.get('cookiesEnabled');

			this.close = function() {
				this.active = false;
				$cookies.put('hideCookieBanner', 1);
			}
		}
})();
