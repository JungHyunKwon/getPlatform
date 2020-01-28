/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	var platform = ('win16|win32|win64|macintel|mac'.indexOf(navigator.platform.toLowerCase()) > -1) ? 'pc' : 'mobile';
	
	/**
	 * @name getPlatform
	 * @since 2017-12-06
	 * @return {string}
	 */
	window.getPlatform = function() {
		return platform;
	};
})();