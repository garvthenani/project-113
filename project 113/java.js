function preload()
{

}
function setup()
{
 canvas = createCanvas(400, 275) 
canvas.position(500, 200)
video = createCapture(VIDEO);
video.size(400, 275);
video.hide();
}
function draw()
{
image(video, 0, 0, 400, 275);
fill(123, 231, 94);
stroke(0, 255, 0);
circle(40, 40, 75);
circle(200, 40, 75);
circle(360, 40, 75);
circle(40, 235, 75);
circle(200, 235, 75);
circle(360, 235, 75);
}
function take_snapshot()
{
save('garv.png')   
}