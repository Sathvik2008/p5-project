function preload(){
}
function setup(){
canvas=createCanvas(640, 480);
canvas.position(110, 250);
video=createCapture(VIDEO);
video.hide();
}
function draw(){
image(video, 0, 0, 420, 300);
fill(255, 0, 0);
circle(30, 32, 60);
circle(390, 32, 60);
circle(30, 270, 60);
circle(390, 270, 60);
fill(0, 255, 0);
rect(17, 60, 25, 182);
rect(377, 60, 25, 182);
rect(60, 20, 300, 25);
rect(60, 260, 300, 25);
}
function take_snapshot(){
save('birthday_picture');
}