function preload() {

}
function setup() {
    canvas = createCanvas(397, 298);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(397, 298);
    video.hide();
}

console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Qm84XOLj-/model.json', modelLoaded);

function draw() {
    canvas.center();
    image(video, 0, 0, 397, 298);
    classifier.classify(vido, gotResult);
}

function modelLoaded() {
    console.log('Model Loaded');
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("objectName").innerHTML = results[0].label;
        document.getElementById("objectAccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}