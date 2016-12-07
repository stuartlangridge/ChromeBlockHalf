chrome.webRequest.onBeforeRequest.addListener(
  function(info) {
    var cancel = false;
    if (Math.random() < 0.5) {
      console.log("blocked " + info.url);
      cancel = true;
    } else {
      console.log("didn't block " + info.url);
    }
    return {cancel: cancel};
  },
  // filters
  {
    urls: ["https://*/*", "http://*/*"],
    types: ["script", "stylesheet"]
  },
  // extraInfoSpec
  ["blocking"]);
