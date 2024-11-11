		function redirectToSoundCloud() {
			const userAgent=navigator.userAgent || navigator.vendor || window.opera;
			const searchQuery=encodeURIComponent('terence tabeau');

			if (/android/i.test(userAgent)) {
				// Android device
				window.location.href=`soundcloud: //sounds:search?q=${searchQuery}`;
			}

			else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
				// iOS device
				window.location.href=`soundcloud: //sounds:search?q=${searchQuery}`;
			}

			else {
				// Other devices, open the web link
				window.location.href='https://soundcloud.com/search?q=%22terence%20tabeau%22';
			}
		}