const speechRec = webkitSpeechRecognition
recog = new speechRec();

recog.onstart = function(){
    console.log("Tell me what you want to search");
}
btn = document.getElementById("talk");
btn.addEventListener('click', () => {

    recog.start();
  
  });
recog.onresult = function (event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
  
    console.log(transcript);
  ediot(transcript)
  
  }
function setup() {

 
}

function draw() {
  background(220);
 
}
function ediot(message){
    const voice = new SpeechSynthesisUtterance();
if (message.includes("tell me about")){
    message = message.replace("tell");
    message = message.replace("me")
    message = message.replace("about");
 
    datas();
   
}
if (message.includes("I want to give more orders")){
    window.open("http://127.0.0.1:8887/mic/","_self")
}
    voice.volume = 1;
  voice.rate = 1;
  voice.pitch = 1;

  window.speechSynthesis.speak(voice);
}
function datas(){
    let  messages = prompt("Please tell me what do you want to know about")
 urls = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${messages}&format=json`;
loadJSON(urls,gotDatas,'jsonp');
}
function gotDatas(datae){
  var rocky =(datae.query.search[0].snippet);
  rocky = rocky.replace("(<span","");
  rocky = rocky.replace('class="searchmatch">',"")
  rocky = rocky.replace('</span>',"");
  rocky = rocky.replace("<span","")
  rocky = rocky.replace('<span class="searchmatch">',"")
 console.log(rocky)
}