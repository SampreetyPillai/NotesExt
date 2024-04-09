// function documentEvents() {    
    document.getElementById('ok_btn').addEventListener('click', 
      function() { 
        console.log("entered");
        var a=document.getElementById('notes'); var ti= document.getElementById('notes_title_textbox'); var text=ti.value+"\n----------------\n"+a.value;downloadTextFile(text);
    });
  
    function downloadTextFile(content) {
        console.log("starting download");
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      chrome.downloads.download({
          url: url,
          filename: 'text_content.txt',
          saveAs: true
      });
  }
    // you can add listeners for other objects ( like other buttons ) here 
//  }
const runScript = async()=>{
   chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        /*
        Gets the URL from tab in focus.
        */
        let url = tabs[0].url;
        chrome.storage.sync.get([url], function(items){
            /*
            Fetches user data(notes) from persistance storage
            */
            console.log((items[url]));
            notes = items[url]
            if(!notes)
            {
                notes = ""
            }
            document.getElementById('notes').value = notes;
        });
    });

}
document.getElementById('saveButton').onclick = function(){
    /*
    Gets Notes and saves them in persistance storage.
     */
    var notes = document.getElementById('notes').value;    
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        /*
        Gets the URL from tab in focus.
         */
        let url = tabs[0].url;
        var jsonfile = {};
        jsonfile[url] = notes;
        console.log(jsonfile)

        chrome.storage.sync.set(jsonfile, function(){
            // Notes saved
        });
    });
}

runScript()
// setInterval(function() { 
//         runScript()
// }, 500);

