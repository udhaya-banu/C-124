function preload(){

}
function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,500);
canvas.position(560,100);
posenet=ml5.poseNet(video,modalLoaded);
posenet.on("pose",gotposes);
}
function modalLoaded(){
    console.log("poseNet is initialized");
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
    }
}
function draw(){
background("grey");
}