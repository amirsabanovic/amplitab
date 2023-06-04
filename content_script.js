// JavaScript to execute after page load
function update() {
	setTimeout(function() {
		browser.runtime.sendMessage({ event: "" });
	}, 0);
}

var video = document.getElementsByTagName("video")[0];

["play", "playing", "pause"].forEach(function (e) {
	video.addEventListener(e, update, false);
});
