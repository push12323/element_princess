var introBackground;
var startButton;
var logoButton;
var currScreenCount;
var screenInterval;
var initialScreenInterval;

function introductionScreen(){
	
	//create background DisplayObject
	introBackground = new createjs.Bitmap("assets/game_background.jpg");
	introBackground.x = introBackground.y = 0;
	
    //Add Background instance to stage display list.
	stage.addChild(introBackground);
	
	
	currScreenCount = 1;
	screenInterval = 2000;
	initialScreenInterval = 0;
	
	//initiate timer properties
	createjs.Ticker.setFPS(50);//set the framerate to 50
	createjs.Ticker.addEventListener("tick", introScreenTick);	//call update on every frame
	
	//bring up the Start screen
	loadIntroductionScreen();
}

function loadIntroductionScreen(){
	
	var screen_txt =  new createjs.Text("How to play ?", "55px Times New Roman", "#000"); 
	screen_txt.x = 400;
	screen_txt.y = 50;
	screen_txt.color = "#fff";
	screen_txt.textAlign = "center";
	screen_txt.textBaseline = "alphabetic";
		
	var header_txt =  new createjs.Text("You'll be shown a series of images. \n Click the one's that match best with your mood today.", "22px Times New Roman", "#000"); 
	header_txt.x = 397;
	header_txt.y = 110;
	header_txt.color = "#fff";
	header_txt.textAlign = "center";
	header_txt.textBaseline = "alphabetic";
	
	//create background DisplayObject
	intropage_01 = new createjs.Bitmap("assets/intropage_01.jpg");
	intropage_01.x = intropage_01.y = 0;
	
	intropage_02 = new createjs.Bitmap("assets/intropage_02.jpg");
	intropage_02.x = intropage_02.y = 0;
	
	intropage_03 = new createjs.Bitmap("assets/intropage_03.jpg");
	intropage_03.x = intropage_03.y = 0;
	
	intropage_04 = new createjs.Bitmap("assets/intropage_04.jpg");
	intropage_04.x = intropage_04.y = 0;
	
	//place Play Button
	/*logoButton = new createjs.Bitmap("assets/girls_logo_img.png");
	logoButton.x = 21; //x coord
	logoButton.y = 524; //y coord
	//logoButton.addEventListener("click", logoClickHandler);
	logoButton.addEventListener("mouseover", logoEffectsMouseover);
	logoButton.addEventListener("mouseout", logoEffectsMouseout);*/
	
	//place Play Button
	startButton = new createjs.Bitmap("assets/start_btn_img.png");
	startButton.x = 507; //x coord
	startButton.y = 524; //y coord
	startButton.addEventListener("click", startClickHandler);
	startButton.addEventListener("mouseover", startEffectsMouseover);
	startButton.addEventListener("mouseout", startEffectsMouseout);	
	
	//add children to the draw list in the correct order
	stage.addChild(intropage_01, intropage_02, intropage_03, intropage_04, startButton);
	
	stage.update(); //Draw
}

function showSlides(time)
{
	if(time > initialScreenInterval)
	{
		fadeOutAll();
		switch(currScreenCount)
		{
			case 1:
				intropage_01.alpha = 1;
			break;
			
			case 2:
				intropage_02.alpha = 1;
			break;
			
			case 3:
				intropage_03.alpha = 1;
			break;
			
			case 4:
				intropage_04.alpha = 1;
			break;
		}
		initialScreenInterval = time + screenInterval;
		if(currScreenCount > 3)
		{
			currScreenCount = 1;
		}
		else
		{
			currScreenCount++;
		}
	}
}

function fadeOutAll()
{
	intropage_01.alpha = 0;
	intropage_02.alpha = 0;
	intropage_03.alpha = 0;
	intropage_04.alpha = 0;
}

/////////////////////BUTTON CLICK HANDELERS//////////////////////////////////


function startClickHandler(event){
	playSound("button_click");
	cleanupIntroductionScreen();
	loadMainGame();
	
}

function logoClickHandler(event){
	playSound("button_click");
	cleanupIntroductionScreen()
	//introductionScreen();
	
	
}



////////////////////BUTTON EFECT HANDELERS//////////////////////////////////

function startEffectsMouseover(event){
		playSound("button_over");
		event.target.image.src = "assets/start_btn_over_img.png";
		document.body.style.cursor='pointer';
		stage.update();
}


function startEffectsMouseout(event){
		
		event.target.image.src = "assets/start_btn_img.png";
		document.body.style.cursor='default';
		stage.update();
}


function logoEffectsMouseover(event){
		playSound("button_over");
		event.target.image.src = "assets/girls_logo_img.png";
		document.body.style.cursor='pointer';
		stage.update();
}


function logoEffectsMouseout(event){
		
		event.target.image.src = "assets/girls_logo_img.png";
		document.body.style.cursor='default';
		stage.update();
}

///////////////////////////TIMER ANIMATIONS/////////////////////////////////

function introScreenTick(e){
	
	showSlides(e.time);
	
	stage.update();

}

///////////////////////////CLEAN UP/////////////////////////////////////////

function cleanupIntroductionScreen(){	//clean slate to add the pets screen to

	stage.removeAllChildren();
	stage.removeAllEventListeners();	

}







