/**
 * @author JungHyunKwon
 * @version 1.0.0
 */
(function() {
	var _platform = navigator.platform.toLowerCase();

	//win16, win32, win64, macintel, mac일 때
	if('win16|win32|win64|macintel|mac'.indexOf(_platform) > -1) {
		_platform = 'pc';
	}else{
		_platform = 'mobile';
	}
	
	/**
	 * @name getPlatform
	 * @since 2017-12-06
	 * @return {string}
	 */
	window.getPlatform = function() {
		return _platform;
	};
})();