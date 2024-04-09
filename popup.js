

document.addEventListener('DOMContentLoaded', documentEvents  , false);


const runAtStart = async() =>{
        if(localStorage.getItem("notes_content")){
            console.log("content present")
            console.log("print",localStorage.getItem("notes_content"))
            document.getElementById("notes_textbox").value = localStorage.getItem("notes_content");
            
        }
        if(localStorage.getItem("notes_title")){
            console.log("title present")
            console.log("print",localStorage.getItem("notes_title"))
            document.getElementById("notes_title_textbox").value = localStorage.getItem("notes_title");
        }
}
localStorage.setItem("notes_content","notes content");
localStorage.setItem("notes_title","notes title");
// let notes_content = localStorage.getItem("notes_content");
// let notes_title = localStorage.getItem("notes_title");
console.log(localStorage.getItem("notes_content"));

// document.getElementById("notes_title_textbox").value = notes_title;
// document.getElementById("notes_textbox").value = notes_content;


const runScript = async() =>{

    let nt = document.getElementById("notes_title_textbox").value;
    let nc = document.getElementById("notes_textbox").value;
    localStorage.setItem("notes_content",nc);
    localStorage.setItem("notes_title",nt);
    console.log(localStorage.getItem("notes_content"));
    console.log(localStorage.getItem("notes_title"));

    // let notes_content = localStorage.getItem("notes_content");
    // let notes_title = localStorage.getItem("notes_title");
    // document.getElementById("notes_title_textbox").innerHTML = notes_title;
    // document.getElementById("notes_textbox").innerHTML = notes_content;
    

    
}
function myAction(input) { 
    console.log("input value is : " + input.value);
    alert("The entered data is : " + input.value);

    // do processing with data
    // you need to right click the extension icon and choose "inspect popup"
    // to view the messages appearing on the console.
}

function documentEvents() {    
  document.getElementById('ok_btn').addEventListener('click', 
    function() { var a=document.getElementById('notes_textbox'); var ti= document.getElementById('notes_title_textbox'); var text=ti.value+"\n----------------\n"+a.value;downloadTextFile(text);
  });

  function downloadTextFile(content) {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    chrome.downloads.download({
        url: url,
        filename: 'text_content.txt',
        saveAs: true
    });
}
  // you can add listeners for other objects ( like other buttons ) here 
}


runAtStart()
setInterval(function() { 
        runScript()
}, 500);