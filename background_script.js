// JavaScript code to execute in background
function logTabAudible(tabs) {
	console.log(tabs);
}

function listener(message) {
	console.log(message);
	browser.tabs.query({ currentWindow: true }, logTabAudible);
}

browser.runtime.onMessage.addListener(listener);
