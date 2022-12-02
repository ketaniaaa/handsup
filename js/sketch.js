let video;

let label = "sign something...";

let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/7PUIE53qV/';

function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}


function setup() {
  createCanvas(640, 520);

  video = createCapture(VIDEO);
  video.hide();
  
  classifyVideo();
}


function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(2);

  image(video, 0, 0);

  
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  
  let emoji = "A";
  if (label == "B") {
    emoji = "B";
  } else if (label == "C") {
    emoji = "C";
  } else if (label == "D") {
    emoji = "D";
  }
  else if (label == "E") {
    emoji = "E";
  }
  else if (label == "F") {
    emoji = "F";
  }
  else if (label == "G") {
    emoji = "G";
  } else if (label == "H") {
    emoji = "H";
  } else if (label == "I") {
    emoji = "I";
  } else if (label == "L") {
    emoji = "L";
  } else if (label == "K") {
    emoji = "K";
  } else if (label == "M") {
    emoji = "M";
  } else if (label == "O") {
    emoji = "O";
  } else if (label == "Q") {
    emoji = "Q";
  } else if (label == "Y") {
    emoji = "Y";
  }

  
  textSize(256);
  text(emoji, width / 2, height / 2);
}


function gotResults(error, results) {
  
  if (error) {
    console.error(error);
    return;
  }

  label = results[0].label;
  classifyVideo();
}