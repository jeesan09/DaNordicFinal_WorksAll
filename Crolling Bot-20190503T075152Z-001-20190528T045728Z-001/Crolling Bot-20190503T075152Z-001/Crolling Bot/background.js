

console.log("background script is running");


chrome.browserAction.onClicked.addListener(MyCallback);



function MyCallback(){



   console.log("its working");


}