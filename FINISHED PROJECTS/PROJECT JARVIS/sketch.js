function isWebBLEAvailable(){
  if (!navigator.bluetooth){
    console.log("Bluetooth is not available")
    return false
  }
  return true
}
document.getElementById('kk').addEventListener('click',function() {
  navigator.bluetooth.requestDevice({ acceptAllDevices:true})
  .then(device => {
    // Set up event listener for when device gets disconnected.
    device.addEventListener('gattserverdisconnected', onDisconnected);

    // Attempts to connect to remote GATT Server.
    return device.gatt.disconnect();
  })
  .then(servers => { /* … */ })
  .catch(error => { console.error(error); });
  
  function onDisconnected(event) {
    const device = event.target;
    console.log(` ${device.name} is disconnected.`);
  }
  
})
function getDeviceInfo(){
  var opt ={
  acceptAllDevices: true 
  }
  console.log("BEL");
  navigator.bluetooth.requestDevice(opt).then(device => {
  
   
   dd = document.createElement('div');
   dd.id = "king";
dd.innerText = `Device: ${device.name}
Gatt ${device.gatt}

Id: ${device.id}

`
document.getElementById('cir10').appendChild(dd)
console.log(device);
  })
  
}
document.getElementById('play').addEventListener('click',e => {
  window.open('https://code.whitehatjr.com/s/dashboard', '_blank', "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")


})
document.querySelector('#Josua').addEventListener('click',function(e){

if (isWebBLEAvailable()){
  getDeviceInfo()
 
}

})
document.querySelector('#Josua').addEventListener('mouseover',function(e){
  document.querySelector('#Josua').style.backgroundColor = 'violet';
});
document.querySelector('#Josua').addEventListener('mouseout',function(e){
  document.querySelector('#Josua').style.backgroundColor = 'aqua';
})
let se =
Age = [];
rany = "ww"
const microphone = document.querySelector('.talks')
microphone.addEventListener("click",function(){
  window.open('http://127.0.0.1:5500/mic/','new window','width=300,height=300')
  });
const API_KE = "c6a1a98f55164991bfd9f03fcb6856f9";
var jo = new Date();

window.addEventListener('online',function(){
  console.log("ready to fire")
  dd = 'online'
});
window.addEventListener('offline',function(){
  console.log("stop to fire");
  dd = 'offline'
});
document.addEventListener("freeze",function(){
  console.log("freezed")
});
document.getElementById('Google').addEventListener('click',function(){
  window.open('https://www.google.co.in/', '_blank', "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")

});
document.getElementById('Google').addEventListener('mouseover',function(){
  
  document.getElementById('Google').style.backgroundColor = 'yellow';

});
document.getElementById('Google').addEventListener('mouseout',function(){
  
  document.getElementById('Google').style.backgroundColor = 'aqua';

});
document.getElementById('Link').addEventListener('click',function(){
  window.open('https://www.linkedin.com/feed/', '_blank', "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")

});
document.getElementById('Link').addEventListener('mouseover',function(){
  
  document.getElementById('Link').style.backgroundColor = 'green';

});
document.getElementById('Link').addEventListener('mouseout',function(){
  
  document.getElementById('Link').style.backgroundColor = 'aqua';

})
document.getElementById('Mail').addEventListener('click',function(){
  window.open('https://mail.google.com/mail/u/0/', '_blank', "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")

})
document.getElementById('Mail').addEventListener('mouseover',function(){
  
  document.getElementById('Mail').style.backgroundColor = 'grey';

})
document.getElementById('Mail').addEventListener('mouseout',function(){
  
  document.getElementById('Mail').style.backgroundColor = 'aqua';

})

document.getElementById('Youtube').addEventListener('mouseover',function(){
  
  document.getElementById('Youtube').style.backgroundColor = 'red';

})
document.getElementById('Youtube').addEventListener('mouseout',function(){
  
  document.getElementById('Youtube').style.backgroundColor = 'aqua';

})

document.getElementById('Gaana').addEventListener('mouseout',function(){
  
  document.getElementById('Gaana').style.backgroundColor = 'aqua';

})
document.getElementById('Gaana').addEventListener('mouseover',function(){
  
  document.getElementById('Gaana').style.backgroundColor = 'pink';

})
document.getElementById('GoogleM').addEventListener('mouseout',function(){
  
  document.getElementById('GoogleM').style.backgroundColor = 'aqua';

})
document.getElementById('GoogleM').addEventListener('mouseover',function(){
  
  document.getElementById('GoogleM').style.backgroundColor = 'white';

})
document.getElementById('Whatsapp').addEventListener('mouseout',function(){
  
  document.getElementById('Whatsapp').style.backgroundColor = 'aqua';

})
document.getElementById('Whatsapp').addEventListener('mouseover',function(){
  
  document.getElementById('Whatsapp').style.backgroundColor = 'gold';

})
document.getElementById('Out').addEventListener('mouseout',function(){
  
  document.getElementById('Out').style.backgroundColor = 'aqua';

})
document.getElementById('Out').addEventListener('mouseover',function(){
  
  document.getElementById('Out').style.backgroundColor = 'orange';

})

document.getElementById('Gaana').addEventListener('click',function(){
  window.open('https://gaana.com/', '_blank', "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")

})
document.getElementById('Out').addEventListener('click',function(){
  window.open('https://outlook.office365.com/mail/inbox', '_blank', "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")

})
document.getElementById('GoogleM').addEventListener('click',function(){
  window.open('https://meet.google.com/?authuser=0', '_blank', "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")

})
document.getElementById('Youtube').addEventListener('click',function(){
  window.open('https://www.youtube.com/', '_blank', "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")

})
document.addEventListener("freeze",function(){
  console.log("freezed")
})

document.getElementById('Google').addEventListener('click',function(){
  window.open('https://www.google.co.in/', '_blank', "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")

})
document.getElementById('GoogleM').addEventListener('click',function(){
  window.open('https://meet.google.com/?authuser=0', '_blank', "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")

})
document.getElementById('Youtube').addEventListener('click',function(){
  window.open('https://www.youtube.com/', '_blank', "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")

})
document.getElementById('Whatsapp').addEventListener('click',function(){
  window.open('https://web.whatsapp.com/', '_blank', "width=300,height=300,channelmode=yes,fullscreen=yes,status=no")

})

Month = [];
de = document.createElement('div')
de.id = "ram";
Month[0] = 'Jan'
Month[1] = 'Feb'
Month[2] = 'Mar'
Month[4] = 'Apr'
Month[5] = 'May'
Month[6] = 'June'
Month[7] = 'July'
Month[8] = 'Aug'
Month[9] = 'Sept'
Month[10] = 'Oct'
Month[11] = 'Nov'
Month[12] = 'Dec'
n = Month[jo.getMonth()];

de.innerText = `${n} 
${jo.getDate()}/${jo.getFullYear()}
`;
setInterval(() => {
  let to = new Date();
  Month[0] = 'Jan'
  Month[1] = 'Feb'
  Month[2] = 'Mar'
  Month[4] = 'Apr'
  Month[5] = 'May'
  Month[6] = 'June'
  Month[7] = 'July'
  Month[8] = 'Aug'
  Month[9] = 'Sept'
  Month[10] = 'Oct'
  Month[11] = 'Nov'
  Month[12] = 'Dec'
 
  let n = Month[to.getMonth()];
  let dd = to.getDate();
  let yy = to.getFullYear()
  de.innerText = `${n} 
  ${dd}/${yy}
 
  `;



});
let two = document.createElement('div');
document.getElementById('cir20').appendChild(two)
two.id = 'cirs';
u =navigator.appCodeName
v = navigator.cookieEnabled;
z = navigator.javaEnabled();

two.innerText = `
AppCode:${u}
Cookie: ${v}
Java:${z}
`
setInterval(() => {let today = new Date();
  let hh = today.getHours();
  let mm = today.getMinutes();
  let ss = today.getSeconds();
 
 
  Day = [];
Day[1] = 'Monday'
Day[2] = 'Tuesday'
Day[3] = 'Wednesday'
Day[4] = 'Thursday'
Day[5] = 'Friday'
Day[6] = 'Saturday'
Day[0] = 'Sunday'
 a= Day[jo.getDay()]

 d4.innerText = `${a}
  ${hh}:${mm}:${ss}`
})


document.getElementById('cir3').appendChild(de);
d4 = document.createElement('div')
d4.id = 'rad';

document.getElementById('cir4').appendChild(d4);
const video1 = document.getElementById('video');
const content = document.querySelector('.content');
getWeatherDetails()

function getWeatherDetails() {

    navigator.geolocation.getCurrentPosition(async function (position) {
      let latitude = position.coords.latitude;
           let longitude = position.coords.longitude;
           const api_url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=f49676e4e771d9a88cb26ad40994c652&units=metric`;
           let responce = await fetch(api_url);
           let data = await responce.json();
           console.log(data);
           setInterval(() => {   ran = data.main.temp;
            rans = data.main.humidity
            rnn = data.name;
      rands = data.weather[0].description
      ranysd = data.sys.country
      rany = Math.floor(data.coord.lat);
      ranys = Math.floor(data.coord.lon);
s = navigator.appName;
q = navigator.platform;

      r = data.visibility
      ransds = data.wind.speed
      re.innerText = `Latitude : ${rany}*
      Longitude : ${ranys}*
      Country:${ranysd}
      City:${rnn}
      Device:${s}
      
      `;
      ae.innerText = `Visiblity:${r}
      Wind:${ransds}km

      `
      se.innerText = `Temprature:${ran}*
      Humidity: ${rans}
      Weather:${rands}
      Platform:   ${q}
     
     `
  
    })

      
     
      
      
     
 

      re = document.createElement('div')
      re.id = "shram";
    
      
     
      ae = document.createElement('div');
      ae.id = 'Jigus';
     
      document.getElementById('cir').appendChild(re);
      se = document.createElement('div')
      se.id = 'krish';
      
     
    document.getElementById('cir6').appendChild(ae);
       document.getElementById('cir2').appendChild(se);
       
     
  } 

)

}

//getNews();
function getNews(){

var url = `http://api.mediastack.com/v1/news?access_key=a01cb74bb4105d86e31e03aca5811465&keywords=us&countries=us&search=india`;
we = document.createElement('div');
we.id = 'reema'; 
setInterval(() => {

fetch(url)

    .then((res) => res.json())  
    .then((dataed) => {
        dataed.data.forEach(function (value) {
        value.title = value.title.replace('Terms of Use','')
        value.title = value.title.replace('Contact Us','')
        value.title = value.title.replace('About Us','')
        value.title = value.title.replace('US turmoil','')
        value.title = value.title.replace('The Onus is On Us','')
        value.title = value.title.replace('This is Us','')
       
      
            we.innerText= `${value.title}
            
            
            `
            document.getElementById('cir7').appendChild(we)
           
        })
    });
  },1000) 
  }
getBattery()
function getBattery(){
navigator.getBattery().then(((ele) => {
  var level = Math.round(ele.level * 100);
  navigator.storage.estimate().then(function(s){
    
    
    bs =s.usage/s.quota
  
    var kk = navigator.language;
    var memo = navigator.deviceMemory;
    var dd = '';
    var dsd  = navigator.connection.effectiveType
    var sdd =navigator.connection.downlink;     
  

    setInterval(() => {
if (navigator.onLine === true){
  dd = 'online'
}
if (navigator.onLine ===false){
  dd = 'offline'
}


dse.innerText = `
Online: ${dd}
    Space: ${bs}
Type: ${dsd}
`
})





ele.addEventListener('levelchange',function(e){
 
    level = Math.round(ele.level * 100);
  e4.innerText = `Battery : ${level}%${daysd}
  Language:${kk}
  RAM:${memo}GB
  Bandwitch:${sdd}`

})

daysd = ""
ele.addEventListener('chargingchange',function(e){
  console.log("change");
 
  if (ele.charging === true){
    daysd = '🔋';
    e4.innerText = `Battery : ${level}%${daysd}
    Language:${kk}
    RAM:${memo}GB
    Bandwitch:${sdd}`
  
  }
  if (ele.charging === false){
    daysd = '';
     e4.innerText = `Battery : ${level}%${daysd}
     Language:${kk}
     RAM:${memo}GB
     Bandwitch:${sdd}`
   
  }
 

});

e4  = document.createElement('div');
e4.id = 'hammer';
var kk = navigator.language;
var memo = navigator.deviceMemory;
var dd = '';
var dsd  = navigator.connection.effectiveType
var sdd =navigator.connection.downlink;
if (navigator.onLine === true){
  dd = 'online'
}
if (navigator.onLine ===false){
  dd = 'offline'
}
e4.innerText = `
Battery : ${level}%${daysd}
Language:${kk}
RAM:${memo}GB
Bandwitch:${sdd}
`
document.getElementById('cir9').appendChild(e4);
dse =document.createElement('div');
    dse.id = 'Jigu';
    dse.innerText = `Online:${dd}
    Space:${bs}
Type:${dsd}

    `
    document.getElementById('cir8').appendChild(dse);
    
})
}))
}
// console.log(rany)
 const constrains = {
   audio: false,
   video: true,
   width: 500, 
   height: 500
 }
  Promise.all([
  faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
  faceapi.nets.ageGenderNet.loadFromUri('/models'),
  faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  faceapi.nets.faceExpressionNet.loadFromUri('/models')
  ]).then(init)
const canvass = document.querySelector('#canvass');
const con = canvass.getContext('2d');
  async function init() {
    navigator.getUserMedia({video:{}},stream=>video.srcObject = stream,
       err=>console.log(err)
       )
   }
  video.addEventListener('play',async function(){
    console.log("Paakshik")
      const model = await handpose.load();
      console.warn(model) 
      setInterval(async() => {
        const predictions = await model.estimateHands(video, true);
       console.log(predictions);
       scrollTo(predictions[0].boundingBox.topLeft[1],predictions[0].boundingBox.topLeft[0]);
       
       draw(predictions,con);
       
      })
  })
   
//    const modelParams = {
//     flipHorizontal: true,   // flip e.g for video 
//     imageScaleFactor: 0.7,  // reduce input image size for gains in speed.
//     maxNumBoxes: 20,        // maximum number of boxes to detect
//     iouThreshold: 0.5,      // ioU threshold for non-max suppression
//     scoreThreshold: 0.79,    // confidence threshold for predictions.
//   }
   
//     handTrack.load(modelParams)
//     .then(lm => {
      
//  model = lm;
//  console.log("Hker")
//  setInterval(() => {model.detect(video).then(predictions => {
//   console.log('Predictions: ', predictions); 
//   model.renderPredictions(predictions, canvas, con, video);
//   console.log(predictions[0].bbox[0])
//   scrollTo(predictions[0].bbox[1],predictions[0].bbox[0]);
// });},100)
 
//     })

    
  video.addEventListener("play",async function(){
    console.log('LOADED')
       let canvas3 = faceapi.createCanvasFromMedia(video1)
        document.body.append(canvas3)
  
          console.log("SUCCESS!!")
 const labeledImage = await loadImage();

           const faceMatcher = new faceapi.FaceMatcher(labeledImage,1.0)
        
      
       const  display = {width:video1.width,height:video1.height}
       faceapi.matchDimensions(canvas3,display)
       setInterval(async() => {
        
         
           const detect = await faceapi.detectAllFaces(video1,
      new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions().withAgeAndGender().withFaceDescriptors();
     
     
         let resizeDetections = faceapi.resizeResults(detect,display);
          canvas3.getContext('2d').clearRect(0,0,canvas3.width,canvas3.height);    
                faceapi.draw.drawDetections(canvas3,resizeDetections);
          faceapi.draw.drawFaceExpressions(canvas3,resizeDetections)
faceapi.draw.drawFaceLandmarks(canvas3,resizeDetections)
        const  result   = resizeDetections.map(d=> faceMatcher.findBestMatch(d.descriptor))
         var  l1 =resizeDetections.length;
       if (l1 === 1){
            console.log(resizeDetections[0].age)
            console.log(resizeDetections[0].gender)
        }
       result.forEach((result,i) => {
      const box = resizeDetections[i].detection.box;
     const drawbox = new faceapi.draw.DrawBox(box,{label:result.toString()})
   drawbox.draw(canvas3)
       

      })
     
  // rect(detect[0].detection._box._x,detect[0].detection._box._y,detect[0].detection._box._width,detect[0].detection._box._height)
   },10)
  
  })
// // // function interpolateAgePredictions(age){
// // // Prage = [age].concat(Prage).slice(0,30)
// // // const av = Prage.reduce((total,a) => total +a) / Prage.length;
// // // return av

 

 async function loadImage(){
  const labels = ['Paakshik','Jigyasha']

   return Promise.all(

       labels.map(async label => {
         descriptions = [];
         for (i=1;i<2;i++){
 const image = await faceapi.fetchImage(`${label}/${i}.jpg`)
 const etections = await faceapi.detectSingleFace(image).withFaceLandmarks().withFaceDescriptor();
  descriptions.push(etections.descriptor)
          }
//           // fetch image data from urls and convert blob to HTMLImage element
      return new faceapi.LabeledFaceDescriptors(label,descriptions)
      })

  
  )
  
  
     }
  
// //  Inages = interpolateAgePredictions(ages)

// //    }
  


