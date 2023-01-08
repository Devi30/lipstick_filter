function preload(){

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
}
function modelloaded(){
    console.log("posenet is loaded")
}
function gotposes(results){
    if(results.length>0){
        console.log(results)
        console.log("lipsx="+results[0].pose.lips.x)
        console.log("lipsy="+results[0].pose.lips.y)
    }
}
function take_Snapshot(){
    save("myFilter.png")
}