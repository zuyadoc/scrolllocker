// スクロールロック
function ScrollLocker() {
	var lockedScrollTop;
	var lockedScrollLeft;
	var $window = $(window);

	return {
		lock : lock,
		unlock : unlock
	};

	function lock() {
		lockedScrollTop = $window.scrollTop();
		$window.on({
			DOMMouseScroll : preventDefault,
			mousewheel : preventDefault
		});
		$window.on('scroll', onScroll);
	}

	function unlock() {
		$window.off({
			DOMMouseScroll : preventDefault,
			mousewheel : preventDefault
		});
		$window.off('scroll', onScroll);
	}

	function preventDefault(e) {
		e.preventDefault();
	}

	function onScroll() {
		if ($window.scrollTop() !== lockedScrollTop || $window.scrollLeft() !== lockedScrollLeft) {
			window.scrollTo(lockedScrollLeft, lockedScrollTop);
		}
	}
}