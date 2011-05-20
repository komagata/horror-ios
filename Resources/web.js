var win = Titanium.UI.currentWindow;

var web = Ti.UI.createWebView();
var home_url = "http://terrible.heroku.com/index.html";

web.url = home_url;

win.add(web);