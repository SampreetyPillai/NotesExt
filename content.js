i = 0
// document.querySelector('[type="button"]').addEventListener('click',e=>{
//     console.log("button clicked")
// })
// document.addEventListener('DOMContentLoaded', documentEvents  , false);

document.getElementById("hd").innerHTML="some new text";
function documentEvents() {    
    document.getElementById('sb').addEventListener('click', 
      function() { console.log("button has been clicked");
    });
}

const runScript = async () => {
console.log("asdfgsdgf")
console.log(document.getElementById("sb"));
console.log(document.querySelector('[type="button"]'));

//  b.addEventListener('click', 
// function(){
// console.log("this is new")
// });

// "js":["content.js"],

// "content_scripts":[
//     {
//         "matches":["https://www.youtube.com/*"],
//         "js":["content.js"],
//         "run_at":"document_end"
//     }
// ]
}
// printText()
// Run every 500ms

// runScript()
// setInterval(function() { 
//     console.log("hello world")
//     runScript()
// }, 500);