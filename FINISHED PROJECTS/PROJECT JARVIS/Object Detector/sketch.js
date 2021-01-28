let video2;
let detector;
let detections = [];

function preload() {
  // img = loadImage('dog_cat.jpg');
 detector = ml5.objectDetector('cocossd')
 
}
async function init() {
  navigator.getUserMedia({video:{}},stream=>video.srcObject = stream,
     err=>console.log(err)
     )
 }

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  }
  detections = results;
  detector.detect(video2, gotDetections);
}

function setup() {
  createCanvas(640, 480);
    detector.detect(video2, gotDetections);
    init();
}


function draw() {
  image(video2, 0, 0);

  for (let i = 0; i < detections.length; i++) {
    let object = detections[i];
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    noStroke();
    fill(255);
    textSize(24);
    text(object.label, object.x + 10, object.y + 24);
  }
}


function getData(error,result){
  if (error){
    console.error(error)
  }
  console.log("DONW")
  detections = result;

//console.log(result[i])
detector.detect(video2, gotDetections);
}