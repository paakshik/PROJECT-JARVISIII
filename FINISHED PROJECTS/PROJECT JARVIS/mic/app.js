const Dates = new Date();
const hours = Dates.getHours();
const minutees = Dates.getMinutes();
ele2 = document.createElement("div");
timesd  = hours;
timesd2 = minutees;

/*Options given for specch recognition*/

const speechRecognition = webkitSpeechRecognition
const speechGrammerist = webkitSpeechGrammarList
const API_KEY = "f49676e4e771d9a88cb26ad40994c652"
const API_KE = 'c6a1a98f55164991bfd9f03fcb6856f9'
const API = '772f760119b5f8252fec9f78831cafcc';
const recog = new speechRecognition();
recog.interimResults = false;
recog.continuous = false
recog.maxAlternatives = 1;

const language = prompt("Please select the language that you wan to speak", "US/UK/INDIA");
if (language === "") {
    prompt("Please select the language that you want to speak", "US/UK/INDIA")
}
if (language === "US") {
    recog.lang = 'en-US';
}
if (language === "UK") {
    recog.lang = 'en-GB';
}
if (language === "INDIA") {
    recog.lang = 'en-IN';
}


const grammer = '#JSGF V1.0; grammar colors; public <color> =  black';

const speechRecoGrammerist = new speechGrammerist();
speechRecoGrammerist.addFromString(grammer, 1)
recog.grammers = speechRecoGrammerist;

const btn = document.getElementById('start')
btn.addEventListener('click', () => {
    recog.start();
    btn.style.backgroundColor = "aqua"
});

recog.onend = function(){
    console.log("Ok sir")
}
recog.onstart = function () {
    console.log("Start Speaking Paakshik");
   
}

recog.onaudiostart = function () {
    console.log('Audio capturing started');
}

recog.onaudioend = function () {
    console.log('Audio capturing stoped');
    btn.style.backgroundColor = "rgb(22,26,27)"
}

recog.onnomatch = function () {
    console.log('Speech not recognised');
}

recog.onsoundstart = function () {
    console.log('Some sound is being received');
}

recog.onsoundstop = function () {
    console.log('aound has been stopped');
}

recog.onspeechend = function () {
    console.log('Speech has stopped being detected');
}
recog.onspeechstart = function () {
    console.log('Speech has started being  detected');
}

recog.onresult = function (event) {
    btn.style.backgroundColor = 'black'

    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;

    console.log(transcript);
    console.log(`${(event.results[current][0].confidence *100)} is the confidence level`)
   event.srcElement.lang ='	af-ZA';

    editor(transcript);

}
 
window.onload = function(){
    console.log("It is done");
    
}

   
function editor(message) {
    const voice = new SpeechSynthesisUtterance();
 
    //personal questions
if (message.includes("name")) {
const names = [
    "Hello, my name is Jarvis, a prototype of Alexa.",
    "Bonjour, Paakshik my name is Jarvis.",
    "My name is Jarvis, Thank you Paakshik."
]   
const tech = names[Math.round(Math.random(1, 2))]
if (message.includes('I want to know more about you'))
        
            voice.text = tech + "J.A.R.V.I.S. (Just A Rather Very Intelligent System) is a fictional artificial intelligence that first appeared in the Marvel Cinematic Universe where he was voiced by Paul Bettany in Iron Man, Iron Man 2, The Avengers, Iron Man 3, and Avengers: Age of Ultron. The AI is based on the Marvel Comics."
     
else {
            voice.text = tech;
        }
    }
 if (message.includes('how are')) {
    const greeting = [
        'I am good , Hope that you are also good',
        'I am excellent',
        'I am very good, thank you for asking'
    
    ]
    const tech = greeting[Math.round(Math.random(0, 2))]
    voice.text = tech;
  
    }
 if (message.includes('hi')) {
    const his = [
        "Hi Paakshik",
        "Hello Paakshik"
    ]
        const tech = his[Math.round(Math.random(0, 1))]
    voice.text = tech;
    }
else if (message.includes('good afternoon')) {
    
        voice.text = "Good afternoon Paakshik";
    }

//questions about opening sites

else if (message.includes("open Viacom meet")) {
        voice.text = "Ok sir opening  Metting link , please enjoy";
        window.open('https://meet.vicom.in/', '_blank', "width=100,height=100,channelmode=yes,fullscreen=yes,status=no")
    }
    if (message.includes('translate')){
        
       
message = message.replace('please','');
message = message.replace('translate','');
console.log(message);
const translate = require('@vitalets/google-translate-api');
translate(message, {from: 'en', to: 'nl'}).then(res => {
    console.log(res);
    
}).catch(err => {
    console.error(err);
});
console.log('ss')
    }
else if (message.includes("please open WhatsApp")) {
        voice.text = "Ok sir opening Whatsapp, please study"
        window.open('https://web.whatsapp.com/', '_blank', "width=100,height=100,channelmode=yes,fullscreen=yes,status=no")
    }
else if (message.includes('open Google')) {
        window.open('https://www.google.co.in/', '_blank', "width=100,height=100,channelmode=yes,fullscreen=yes,status=no")
        voice.text = "Ok sir";
    }
else if (message.includes('open YouTube')) {
        window.open('https://www.youtube.com/', '_blank', "width=100,height=100,channelmode=yes,fullscreen=yes,status=no")
        voice.text = "Ok sir";
    }
else if (message.includes("please open white hat junior")) {
        voice.text = "Ok  sir opening whitehatjunior, please code my friends"
        window.open('https://code.whitehatjr.com/s/dashboard', '_blank', "width=100,height=100,channelmode=yes,fullscreen=yes,status=no")
    }
else if (message.includes("please open hotstar")) {
        voice.text = "Ok sir , opening Disney hotstar";
        window.open('https://www.hotstar.com/in', '_blank', "width=100,height=100,channelmode=yes,fullscreen=yes,status=no");
    }
else if (message.includes("YouTube history")) {
        voice.text = "Ok sir opening Youtube history"
        window.open("https://www.youtube.com/feed/history", '_blank', "width=100,height=100,channelmode=yes,fullscreen=yes,status=no");
    }

    // for getting time
else if (message.includes("time")) {
        
        
        const dates = new Date()
    const hour = dates.getHours();
    const minutes = dates.getMinutes();
    const time = [
        "The time is " + hour + ":" + minutes,
        "Sir the time on the clock is " + hour+ ":" + minutes,
        "Sir it is " + hour+ ":" + minutes

    ]
        
        const tech = time[Math.round(Math.random(0, 2))]
        voice.text = tech;
    }

    // for reloading the site
else if (message.includes('reload')) {
        yes = confirm("Do you want to reload the site");

        if (yes === true) {
            window.location.reload()
        }
    }

    // for setting a alarm
else if (message.includes("alarm")) {
    alarms = window.prompt("Please tell the alarm time", "Enter the time in yyyy-mm-dd hh:mm:ss");
    alarmDate = new Date(alarms);console.log(`Setting Alarm for ${alarmDate}`)
  const now = new Date();
  const timer = alarmDate - now;
        if (timer >= 0) {
            setTimeout(() => {
                console.log("Alarm is Over,thank you");
                voice.text = 'Sir alarm is over, Thank you';
            }, timer)
        }
    }
        // for getting battery 
    else if (message.includes("battery")) {
        navigator.getBattery().then(function (battery) {

            var level = Math.ceil(battery.level * 100);
            console.log("The battery levels is " + level + "%.");

        });
    }

    //questions about searching on sites

    if (message.includes("search on Google")) {
        message = message.replace("search", "");
        message = message.replace("Google", "");
        message = message.replace("Jarvis", "");
        message = message.replace("please", "");
        message = message.replace("on", "");
        voice.text = "searched " + message;
        window.open("https://www.google.com/search?query=" + message, '_blank', "width=100,height=100,channelmode=yes,fullscreen=yes,status=no");

    }

    if (message.includes("search on YouTube")) {

        message = message.replace("search", "")
        message = message.replace("YouTube", "")
        message = message.replace("Jarvis", "")
        message = message.replace("please", "")
        message = message.replace("on", "");
        voice.text = "searched " + message
        window.open("https://www.youtube.com/search?q=" + message);
    }

    if (message.includes("inter")) {
        message = message.replace("illllllnter", "")
        message = message.replace("Viacom", "")
        message = message.replace("link", "")
        message = message.replace("on", "");
        message = message.replace("meet", "");
        window.open("https://meet.vicom.in/" + message)
    }


    //calculator 
    if (message.includes('add')) {
        var answer = 0;
        message = message.replace('add', '');
        message = message.replace('the', '');
        message = message.replace('numbers', '');
        message = message.replace('and', '')
        mess = Number(message)
        console.log(mess)
        num1 = Number(window.prompt('1 number to add', 'number'));
        num2 = Number(window.prompt('2 number to add', 'number'));
        answer = Number(num1 + num2);
        voice.text = answer + "is the sum of " + num1 + " and " + num2 + ".";
    }
    if (message.includes('subtract the numbers')) {
        num1 = Number(window.prompt('1 number to subtract', 'number'));
        num2 = Number(window.prompt('2 number to subtract', 'number'));
        var answer = 0;
        answer = Number(num1 - num2);
        
        voice.text = answer + "is the difference of " + num1 + " and " + num2 + ".";
    }
    if (message.includes('multiply')) {
        voice.text = "Sir tell the first number";
        num1 = Number(window.prompt('1 number to multiply', 'number'));
        var answer = 0;
        voice.text = "Sir tell the second number";
        num2 = Number(window.prompt('2 number to multiply', 'number'));
        answer = Number(num1 * num2);
        voice.text = answer + "is the product of " + num1 + " and " + num2 + ".";
    }
    if (message.includes('divide')) {
        num1 = Number(window.prompt('1 number to divide', 'number'));
        var answer = 0;
        num2 = Number(window.prompt('1 number to divide', 'number'));
        answer = Number(num1 / num2);
        voice.text = answer + "is the quotient of " + num1 + " and " + num2 + ".";
    }
    if (message.includes('square')) {
        var answer = 0;
        number = Number(window.prompt('number to square', 'number'))
        answer = Math.sqrt(number)
        voice.text = answer + "is the square of " + number + "."
    }
   if (message.includes('cube')) {
        number = Number(window.prompt('number to cube', 'number'))
        var answer = 0;
        answer = Number(number * number);
        voice.text = answer + "is the cube of " + number + "."
    }
if (message.includes('find the minimun number')) {
        min

    }
if (message.includes('find the max number')) {
        max

    }

//music lyric finder
    if (message.includes("lyrics of song")) {
       music();
    }

// for geting all notes feature
    if (message.includes("delete all note")) {

        localStorage.clear();
        voice.text = "All the notes are deleted"
    }
    if (message.includes("tell me all my notes")) {

        voice.text = (`${localStorage["notes"]} are notes added by you.`)
    
}
    
if (message.includes('write a note')) {
        notes_generator();  
        voice.text = "Done sir."
    }

// for getting my location
    if (message.includes("please tell me location")) {
        getLocationDetails();
} 

if (message.includes("please tell me my effective type")) {
        bers = navigator.connection.effectiveType
        voice.text = "Sir your effective type is " + bers + "."
    }
    
if (message.includes("please tell me my data transfer")) {
        bers1 = navigator.connection.downlink;
        voice.text = "Sir your effective type is" + bers1 + "."
    }

//for getting weather report
    if (message.includes("show weather report")) {
        voice.text = "Ok sir am showing the weather repost on console";
        getWeatherDetails();
    }

    // for telling a joke
    if (message.includes("joke")) {
        t = generateJokes();
        voice.text = "Ok sir the joke is displayed on the console"
    }

// for getting info from wikipedia
    if (message.includes('please tell me')) {
        window.open("http://127.0.0.1:8887/Wikipedia/", "_self")
    }

//for clicking my picture
    if (message.includes('capture my image')) {
        const video = document.getElementById('video');
    const content = document.querySelector('.content');
    const canvas1 = document.getElementById('canvas');
    const errorMsg = document.getElementById('spanErrorMsg');
    const bt = document.getElementById('snap');
    const constrain = {
      audio: true,
      video: true,
      width: 1280, height: 720
    }
    
    async function init() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constrain);
        handleSuccess(stream)
    
      }
      catch {
        errorMsg.innerHTML = `navigator.getUserMedia.error:${e.toString}`
        
      }
    
    }
    function handleSuccess(stream) {
      window.stream = stream;
      video.srcObject = stream;
    }

    

    init();
    var context = canvas1.getContext('2d');
bt.addEventListener('click',() =>{

context.drawImage(video,0,0,640,1280)

});

}

// for sending email
    if (message.includes("send email")) {
        Subject = prompt("Please tell the subject of te mail");
        To = prompt("Please tell the person whom you want to send")
        Body = prompt("Please tell the body of the mail")
        sendEmail(Subject, To, Body)

    }

// for getting informataion about the movie
if (message.includes("description of movie")) {
        var movie = prompt("Please tell the movie you want to search the description for ")
        var web = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${movie}`

        fetch(web).then((res) => res.json()).then((ata) => {
            console.log(ata.results[0].overview)
        })
    }
if (message.includes("popularity of movie")) {
        var movie1 = prompt("Please tell the movie you want to search the popularity for")
        var webs = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${movie1}`

        fetch(webs).then((res) => res.json()).then((ata) => {
            console.log(ata.results[0].popularity)

        })
    }
if (message.includes("prop of movie")) {
        var webs = `https://api.themoviedb.org/3/search/movie?api_key=${API}&query=${movie1}`

        fetch(webs).then((res) => res.json()).then((ata) => {
            window.open(ata.results[0].poster_path)

        })
    }

// for all type of news
    if (message.includes("tell me news")) {
        news_generator();
    }

    // for covid related news
    if (message.includes('tell me Corona')) {
corona();
}
voice.volume = 1;
voice.rate = 1;
voice.pitch = 1;

speechSynthesis.speak(voice)
}


 






































  
