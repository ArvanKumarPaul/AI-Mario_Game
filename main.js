img = "";
noseX = "";
noseY = "";
MarioX = "325";
MarioY = "325";

function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {

	video = createCapture(VIDEO);
	video.size(600,400);
	canvas = createCanvas(1240,336);
	canvas.parent('#myCanvas')
	instializeInSetup(mario);
	poseNet = ml5.poseNet(video,modelLoaded);
	poseNet.on('pose',gotPoses);

}

function draw() {

	game();

	if(noseX > 300) {

      MarioX = MarioX + 1;

	}

	image(img,MarioX,MarioY,30,60);

	if(noseX < 300) {

		MarioX = MarioX - 1;
  
	}

    image(img,MarioX,MarioY,30,60);

	if(noseY < 150) {

		MarioY = MarioY - 1;
  
	}

    image(img,MarioX,MarioY,30,60);
  
}

function modelLoaded() {

  console.log("Model Loaded!");

}

function gotPoses(results) {

  if(results.length>0) {

    noseX = results[0].pose.nose.x;
	noseY = results[0].pose.nose.y;
	console.log("Nose X = "+noseX+", Nose Y = "+noseY);

  }

}






