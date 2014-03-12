var stage;
var loadingBackground;
var percentageDisplay;
var loader;
var loadingTextDisplay;
var stageWidth;
var stageHeight;
var gameLogo;
var gameSoundBtn;
function preload(){
	
	//Create a stage by getting a reference to the canvas
	stage = new createjs.Stage("gameCanvas");
	stage.enableMouseOver([frequency=50]); //enables use of mouse over events, match framerate with frequency
	createjs.Touch.enable(stage);
	
	stageWidth = document.getElementById("gameCanvas").width;
	stageHeight = document.getElementById("gameCanvas").height;
	
	rescaleToScreenSize();
	
	window.addEventListener('resize', rescaleToScreenSize, false);
	
	//place Preloader Background
	loadingBackground = new createjs.Bitmap("assets/loading_background.jpg");
	loadingBackground.x = loadingBackground.y = 0;
	
	//place Loading Bar
	loadingBar = new createjs.BitmapAnimation(ssLoadingBar);
	loadingBar.x = 190;
	loadingBar.y = 280;
	loadingBar.gotoAndStop(0);	
	stage.addChild(loadingBackground,loadingBar);
	
	loadingTextDisplay = new createjs.Text("Loading", "25px Times New Roman Bold", "#FFF");
	loadingTextDisplay.x = 350;
	loadingTextDisplay.y = 240;
	stage.addChild(loadingTextDisplay);
	
	//Percentage Display
	percentageDisplay = new createjs.Text("", "15px Times New Roman Bold", "#FFF");
	percentageDisplay.text = "";
	percentageDisplay.x = 390;
	percentageDisplay.y = 300;
	stage.addChild(percentageDisplay);
	
	stage.update();
	
	var manifest = [
                {src:"assets/game_background.jpg", id:"game_background"},
				{src:"assets/splashscreen.jpg", id:"splashscreen"},
				{src:"assets/girls_logo_img.png", id:"girls_logo_img"},
				{src:"assets/intropage_01.jpg", id:"intropage_01"},
				{src:"assets/intropage_02.jpg", id:"intropage_02"},
				{src:"assets/intropage_03.jpg", id:"intropage_03"},
				{src:"assets/intropage_04.jpg", id:"intropage_04"},
				{src:"assets/btn_image.png", id:"btn_image"},
				{src:"assets/sound_btn.png", id:"sound_btn"},
				{src:"assets/sound_mute_btn.png", id:"sound_mute_btn"},
				{src:"assets/start_btn_img.png", id:"start_btn_img"},
				{src:"assets/start_btn_over_img.png", id:"start_btn_over_img"},
				{src:"assets/add_to_site_btn.png", id:"add_to_site_btn"},
				{src:"assets/add_to_site_btn_over.png", id:"add_to_site_btn_over"},
				{src:"assets/game_screen_logo.png", id:"game_screen_logo"},
				{src:"assets/container1.png", id:"container1"},
				{src:"assets/container2.png", id:"container2"},
				{src:"assets/high_border.png", id:"high_border"},
				{src:"assets/resultscreen_princes1.png", id:"resultscreen_princes1"},
				{src:"assets/resultscreen_princes1_bg.png", id:"resultscreen_princes1_bg"},
				{src:"assets/resultscreen_princes2.png", id:"resultscreen_princes2"},
				{src:"assets/resultscreen_princes2_bg.png", id:"resultscreen_princes2_bg"},
				{src:"assets/resultscreen_princes3.png", id:"resultscreen_princes3"},
				{src:"assets/resultscreen_princes3_bg.png", id:"resultscreen_princes3_bg"},
				{src:"assets/resultscreen_princes4.png", id:"resultscreen_princes4"},
				{src:"assets/resultscreen_princes3_bg.png", id:"resultscreen_princes3_bg"},
				{src:"assets/resultscreen_princes5.png", id:"resultscreen_princes5"},
				{src:"assets/resultscreen_princes5_bg.jpg", id:"resultscreen_princes5_bg"},
				{src:"assets/resultscreen_princes6.png", id:"resultscreen_princes6"},
				{src:"assets/resultscreen_princes6_bg.jpg", id:"resultscreen_princes6_bg"},
				{src:"assets/resultscreen_princes6_bg.png", id:"resultscreen_princes6_bg"},
				{src:"assets/resultscreen_princes7.png", id:"resultscreen_princes7"},
				{src:"assets/resultscreen_princes7_bg.png", id:"resultscreen_princes7_bg"},
				{src:"assets/resultscreen_princes8.png", id:"resultscreen_princes8"},
				{src:"assets/resultscreen_princes8_bg.png", id:"resultscreen_princes8_bg"},
				{src:"assets/resultscreen_img1.png", id:"resultscreen_img1"},
				{src:"assets/play_btn_img.png", id:"play_btn_img"},
				{src:"assets/play_btn_over_img.png", id:"play_btn_over_img"},
				{src:"assets/play_again_btn_img.png", id:"play_again_btn_img"},
				{src:"assets/play_again_btn_over_img.png", id:"play_again_btn_over_img"},
				{src:"assets/main_menu_btn_img.png", id:"main_menu_btn_img"},
				{src:"assets/main_menu_btn_over_img.png", id:"main_menu_btn_over_img"},
				{src:"assets/more_btn.png", id:"more_btn"},
				{src:"assets/more_btn_over.png", id:"more_btn_over"},
				{src:"assets/calender_bg.png", id:"calender_bg"},
				{src:"assets/calender_princes1.png", id:"calender_princes1"},
				{src:"assets/calender_princes2.png", id:"calender_princes2"},
				{src:"assets/calender_princes3.png", id:"calender_princes3"},
				{src:"assets/calender_princes4.png", id:"calender_princes4"},
				{src:"assets/calender_princes5.png", id:"calender_princes5"},
				{src:"assets/calender_princes6.png", id:"calender_princes6"},
				{src:"assets/calender_princes7.png", id:"calender_princes7"},
				{src:"assets/calender_princes8.png", id:"calender_princes8"},
				{src:"assets/princes1.png", id:"princes1"},
				{src:"assets/princes2.png", id:"princes2"},
				{src:"assets/princes3.png", id:"princes3"},
				{src:"assets/princes4.png", id:"princes4"},
				{src:"assets/princes5.png", id:"princes5"},
				{src:"assets/princes6.png", id:"princes6"},
				{src:"assets/princes7.png", id:"princes7"},
				{src:"assets/princes8.png", id:"princes8"},				
				{src:"assets/princes5_glow.png", id:"princes5_glow"},
				{src:"assets/princes6_bg_sprite.png", id:"princes6_bg_sprite"},				
				{src:"assets/closeBtn.png", id:"closeBtn"},
				{src:"assets/cloud_img.png", id:"cloud_img"},
				{src:"assets/crown_img.png", id:"crown_img"},
				{src:"assets/date_display_bg.png", id:"date_display_bg"},				
				{src:"assets/fire_animation.png", id:"fire_animation"},
				{src:"assets/fire_particle.png", id:"fire_particle"},
				{src:"assets/flower.png", id:"flower"},
				{src:"assets/game_screen_logo.png", id:"game_screen_logo"},
				{src:"assets/logo_img.png", id:"logo_img"},
				{src:"assets/high_border.png", id:"high_border1"},
				{src:"assets/high_border.jpg", id:"high_border2"},
				{src:"assets/star_blink_animation.png", id:"star_blink_animation"},
				{src:"assets/star_sprite.png", id:"star_sprite"},
				{src:"assets/water_princess_bubble.png", id:"water_princess_bubble"},				
				{src:"sounds/btn_on_click_01.wav|sounds/btn_on_click_01.ogg|sounds/btn_on_click_01.mp3", id:"button_click"},
				{src:"sounds/btn_rollover_02.wav|sounds/btn_rollover_02.ogg|sounds/btn_rollover_02.mp3", id:"button_over"},
				{src:"sounds/loop_03.wav|sounds/loop_03.ogg|sounds/loop_03.mp3", id:"background_sound"}
            ];

	loader = new createjs.LoadQueue(true);
	loader.installPlugin(createjs.Sound);
	
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", allAssetsLoaded);
	loader.loadManifest(manifest);
	stage.autoClear = false;
			
}


function allAssetsLoaded()
{
	playEselSound("background_sound", true, true, true);
	document.getElementById("sound-btn").style.display="block";
	//playEselSoundLoop("button_over", true, true, true);
	splashScreen();
}

function playSound(name)
{
	return createjs.Sound.play(name);
}


function playEselSound(name, bool_complete, bool_loop, bool_failed) 	// Play the sound using the ID created above.
{
	//return createjs.Sound.play(name);
	//var myInstance = createjs.Sound.play(name);
	var myInstance = createjs.Sound.createInstance(name);
	myInstance.play({loop:-1});    // options as object properties
	//myInstance.play(createjs.Sound.INTERRUPT_EARLY);    // options as parameters
	if(bool_complete)
	{
		myInstance.addEventListener("complete", soundhandleComplete);
	}
	if(bool_loop)
	{
		myInstance.addEventListener("loop", soundhandleLoop);
	}
	if(soundhandleFailed)
	{
		myInstance.addEventListener("failed", soundhandleFailed);
	}
}

function soundhandleComplete(event)
{
	console.log("soundhandleComplete");
	//console.log(event.target);	
}

function soundhandleLoop(event)
{
	console.log("soundhandleLoop");
	//console.log(event.target);
}

function soundhandleFailed()
{
	console.log("soundhandleFailed");
}

function muteAudio()
{
	var muted = !createjs.Sound.getMute();
    createjs.Sound.setMute(muted);
	if(muted)
	{
		document.getElementById("sound-icon").src="assets/sound_mute_btn.png";
	}
	else
	{
		document.getElementById("sound-icon").src="assets/sound_btn.png";
	}	
}

function handleFileLoad(event){
	
	var imageContainer = new createjs.Container();
	imageContainer.x = -9999;
	imageContainer.y = -9999;
	stage.addChild(imageContainer);
	if(event.item.type == "image")
	{
		var image = new createjs.Bitmap(event.item.src);
		image.x = 0;
		image.y = 0;
		imageContainer.addChild(image);
	}
	
	console.log(event.item.src + " Loaded");
	percentageDisplay.text = Math.floor(loader.progress*100);
	loadingBar.gotoAndStop(Math.floor(loader.progress*50));		//loader animation
	stage.update();
}

//this function scales canvas according to browse size 
function rescaleToScreenSize()
{
	var rescale = false;
	var xScale = 1;
	var yScale = 1;
	
	if(document.documentElement.clientWidth < stageWidth)
	{
		xScale = document.documentElement.clientWidth / stageWidth;
		rescale = true;
	}
	if(document.documentElement.clientHeight < stageHeight)
	{
		yScale = document.documentElement.clientHeight / stageHeight;
		rescale = true;
	}
	if(rescale)
	{
		var maxScale = (xScale < yScale)?xScale:yScale; 
		
		$("#gamediv").css("transform","scale("+maxScale+","+maxScale+")");
		$("#gamediv").css("transform-origin","top left");
	}
	window.scrollTo(0,0);
}

