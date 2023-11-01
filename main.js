nose_x=0;
nose_y=0;

function preload() { 
    nose=loadImage("https://i.postimg.cc/1zgtyNzN/Funny-retro-hair-mustache-isolated-on-transparent-background-PNG.png");
} 

function setup() { 
    canvas = createCanvas(300, 300);
    canvas.center(); 
    video= createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
} 

function modelLoaded() {
    console.log('poseNet is initialized');
}

function draw() { 
    image(video,0,0,300,300);
    image(nose,nose_x,nose_y,30,30);
}

function gotPoses(results) {
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x-15;
        nose_y = results[0].pose.nose.y+10;
        console.log("nose x="+results[0].pose.nose.x);
        console.log("nose y="+results[0].pose.nose.y);
        console.log("nose y =" + nose_y);
        console.log("nose x =" + nose_x);
    }
}

function take_snapshot() {
     save('myFilterImage.png'); 
}