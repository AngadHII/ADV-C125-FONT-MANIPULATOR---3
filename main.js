difference = 0;
leftWrist = 0;
rightWrist  = 0; 

function preload(){

}

function setup(){
    video = createCapture(VIDEO);
    video.size(450,400);
    video.position(150,200);

    canvas = createCanvas(450,450);
    canvas.position(800,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('poseNet has been intialised.')
}

function draw(){
background("#6C91C2");
textSize(difference);
fill('#FFE787');
text("Angad", 50, 400);
document.getElementById("font_span").innerHTML = "Font Size: "+difference+" px";
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);

    leftWrist = results[0].pose.leftWrist.x;
    rightWrist = results[0].pose.rightWrist.x;
    console.log("leftWrist Coordinates: "+leftWrist);
    console.log("rightWrist Coordinates: "+rightWrist);

    difference = floor(leftWrist - rightWrist);
    console.log("Difference: "+difference);
}
}