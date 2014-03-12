var welcomeBackground;
var backButton;

function welcomeScreen(){
	
	//create background DisplayObject
	welcomeBackground = new createjs.Bitmap("assets/game_background.jpg");
	welcomeBackground.x = welcomeBackground.y = 0;
	
    //Add Background instance to stage display list.
	stage.addChild(welcomeBackground);
	
	//initiate timer properties
	createjs.Ticker.setFPS(50);//set the framerate to 50
	createjs.Ticker.addEventListener("tick", welcomeScreenTick);	//call update on every frame
	
	//bring up the Start screen
	loadWelcomeScreen();
}

function loadWelcomeScreen(){
	
	var screen_txt =  new createjs.Text("WELCOME BACK", "35px Times New Roman Bold", "#000"); 
	screen_txt.x = 395;
	screen_txt.y = 50;
	screen_txt.color = "#fff";
	screen_txt.textAlign = "center";
	screen_txt.textBaseline = "alphabetic";
	
	var screen_txt2 =  new createjs.Text("Princesses inlock so far:", "23px Times New Roman", "#000"); 
	screen_txt2.x = 395;
	screen_txt2.y = 80;
	screen_txt2.color = "#fff";
	screen_txt2.textAlign = "center";
	screen_txt2.textBaseline = "alphabetic";
	
	var screen_txt3 =  new createjs.Text("Are you ready to discover your princess mood for today?", "23px Times New Roman", "#000"); 
	screen_txt3.x = 395;
	screen_txt3.y = 490;
	screen_txt3.color = "#fff";
	screen_txt3.textAlign = "center";
	screen_txt3.textBaseline = "alphabetic";
	
	var headerImage = new createjs.Bitmap("assets/how_to_play_header.png");
	headerImage.x = 91;
	headerImage.y = 75;

	//place Play Button
	/*logoButton = new createjs.Bitmap("assets/girls_logo_img.png");
	logoButton.x = 21; //x coord
	logoButton.y = 524; //y coord
	logoButton.addEventListener("click", logoClickHandler);*/
	
	//place Play Button
	startButton = new createjs.Bitmap("assets/start_btn_img.png");
	startButton.x = 507; //x coord
	startButton.y = 524; //y coord
	startButton.addEventListener("click", startClickHandler);
	
	//add children to the draw list in the correct order
	stage.addChild(screen_txt, screen_txt2, screen_txt3, startButton);

	stage.update(); //Draw
}

/////////////////////BUTTON CLICK HANDELERS//////////////////////////////////


function startClickHandler(event){
	playSound("button_click");
	cleanupWelcomeScreen();
	loadMainGame();
	
}

function logoClickHandler(event){
	
	cleanupWelcomeScreen()
	//introductionScreen();
	
	
}




////////////////////BUTTON EFECT HANDELERS//////////////////////////////////

function backEffectsMouseover(event){
		playSound("button_over");
		event.target.image.src = "assets/backButtonHighlighted.png";
		document.body.style.cursor='pointer';
		stage.update();
}


function backEffectsMouseout(event){
		
		event.target.image.src = "assets/backButton.png";
		document.body.style.cursor='default';
		stage.update();
}

///////////////////////////TIMER ANIMATIONS/////////////////////////////////

function welcomeScreenTick(){
	
	stage.update();

}

///////////////////////////CLEAN UP/////////////////////////////////////////

function cleanupWelcomeScreen(){	//clean slate to add the pets screen to

	stage.removeAllChildren();
	stage.removeAllEventListeners();	

}







