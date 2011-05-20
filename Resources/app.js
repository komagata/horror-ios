// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();

//
// create base UI tab and root window
//
var web_win = Titanium.UI.createWindow({
    fullscreen: true,
    backgroundColor:'#fff',
    url: 'web.js'
});

var tab = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Tab 1',
    window:web_win
});

web_win.hideNavBar();
web_win.hideTabBar();
tabGroup.addTab(tab);

function init(){
  if(Titanium.Network.networkType == Titanium.Network.NETWORK_NONE){
    var alertDialog = Titanium.UI.createAlertDialog({
      title: 'エラー',
      message: "ここはなぜか、、、寒い、暗い、電波がない。\nネットワークに接続できる環境で起動してください。",
      buttonNames: ['OK']
    });
    alertDialog.show();
  } else {
    // open tab group
    tabGroup.open();
  }
}

function isiOS4Plus(){
  if (Titanium.Platform.name == 'iPhone OS'){
    var version = Titanium.Platform.version.split(".");
    var major = parseInt(version[0]);
    // can only test this support on a 3.2+ device
    if (major >= 4){
      return true;
    }
  }
  return false;
}

if (isiOS4Plus()){ 
  Titanium.App.addEventListener('resume',function(e){
    //check for network
    init();
	});
}

init();