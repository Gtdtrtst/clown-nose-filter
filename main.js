nosex = "";
nosey = "";
function preload(){
    clown_nose = loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on('pose',getPoses);
}
function snap(){
    save('clown.png');
}
function draw(){
    image(video,0,0,300,300);
    image(clown_nose,nosex,nosey,30,30);
}
function modelLoaded(){
    console.log("model is loaded");
}
function getPoses(results){
    if(results.length>0){
        console.log(results);
        nosex = results[0].pose.nose.x-15;
        nosey = results[0].pose.nose.y-15;
        console.log("nose x =" + nosex);
        console.log("nose y = "+ nosey);
    }
}