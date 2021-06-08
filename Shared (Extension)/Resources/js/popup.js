// On options button click
document.getElementById('options-page').addEventListener('click', function () {
    browser.runtime.openOptionsPage();
});

// Get debug info
var manifestData = browser.runtime.getManifest();
browser.runtime.getPlatformInfo(function (info) {
    var debugString = `v${manifestData.version} (${info.os} ${info.arch}) - ${browser.i18n.getUILanguage()}`;
    document.getElementById('debug').innerText = debugString;
});
