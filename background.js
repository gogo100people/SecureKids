chrome.runtime.onInstalled.addListener(function (object) {
    let externalUrl = "https://olsite.dev/SecureKids/extension_install.html";

    if (object.reason === chrome.runtime.OnInstalledReason.INSTALL) {
        chrome.tabs.create({ url: externalUrl }, function (tab) {
            console.log("New tab launched with " + externalUrl);
        });
    }
});