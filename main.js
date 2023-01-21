nosex=0
nosey=0
function preload(){
lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}
function setup (){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()
    posenet=ml5.poseNet(video,modelloaded)
    posenet.on('pose', gotposes)
}
function draw(){
    image (video,160,160,300,300)
    image(lipstick,nosex,nosey,50,50)
}
function modelloaded(){
    console.log("posenet is loaded")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        console.log("nosex="+results[0].pose.nose.x)
        console.log("nosey="+results[0].pose.nose.y)
         nosex=results[0].pose.nose.x-20
         nosey=results[0].pose.noses.y+50
    }
}
function take_Snapshot(){
    save("myFilter.png")
}

