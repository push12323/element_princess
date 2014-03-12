var finalScreenBackground;
var calenderBg;
var princessContainer;
var princes1;
var princes2;
var princes3;
var princes4;
var princes5;
var princes6;
var princes7;
var princes8;
var closeBtn;
var princesText;
var princesTextArray;

function finalScreen(){
	//bring up the Start screen
	princesTextArray = ["YOU ARE A WATER PRINCESS","YOU ARE A EARTH PRINCESS","YOU ARE A FIRE PRINCESS","YOU ARE A AIR PRINCESS","YOU ARE A ICE PRINCESS","YOU ARE A SUN PRINCESS","YOU ARE A MOON PRINCESS","YOU ARE A STAR PRINCESS"];

	loadFinalScreen();
}

function loadFinalScreen(){
	//create background DisplayObject
	finalScreenBackground = new createjs.Bitmap("assets/game_background.jpg");
	finalScreenBackground.x = finalScreenBackground.y = 0;
	
	//place Play Button
	calenderBg = new createjs.Bitmap("assets/calender_bg.png");
	calenderBg.x = 21; //x coord
	calenderBg.y = 50; //y coord
	
	var heading_txt =  new createjs.Text("That's it for today!", "35px Times New Roman Bold", "#FFF"); 
	heading_txt.x = 225;
	heading_txt.y = 40;
	heading_txt.color = "#fff";
	heading_txt.textAlign = "left";
	heading_txt.textBaseline = "alphabetic";
	
	var message_txt =  new createjs.Text("Take the quiz again \n tomorrow and see \n what type of princess \n you will be for the day!", "21px Times New Roman", "#FFF"); 
	message_txt.x = 640;
	message_txt.y = 190;
	message_txt.color = "#fff";
	message_txt.textAlign = "center";
	message_txt.textBaseline = "alphabetic";
	
	//place Play Button
	var crownImage = new createjs.Bitmap("assets/crown_img.png");
	crownImage.x = 570; //x coord
	crownImage.y = 280; //y coord
	
	//place Play Button
	/*logoButton = new createjs.Bitmap("assets/girls_logo_img.png");
	logoButton.x = 21; //x coord
	logoButton.y = 524; //y coord
	//logoButton.addEventListener("click", logoClickHandler);
	logoButton.addEventListener("mouseover", logoEffectsMouseover);
	logoButton.addEventListener("mouseout", logoEffectsMouseout);*/
	
	//place Play Button
	mainMenuButton = new createjs.Bitmap("assets/main_menu_btn_img.png");
	mainMenuButton.x = 507; //x coord
	mainMenuButton.y = 524; //y coord
	mainMenuButton.addEventListener("click", mainMenuClickHandler);
	mainMenuButton.addEventListener("mouseover", mainMenuEffectsMouseover);
	mainMenuButton.addEventListener("mouseout", mainMenuEffectsMouseout);	
	
	//place More Games Button
	moreGamesButton = new createjs.Bitmap("assets/more_btn.png");
	moreGamesButton.x = 280; //x coord
	moreGamesButton.y = 555; //y coord
	moreGamesButton.addEventListener("click", moreGamesClickHandler);
	moreGamesButton.addEventListener("mouseover", moreGamesEffectsMouseover);
	moreGamesButton.addEventListener("mouseout", moreGamesEffectsMouseout);	
	
	
	princessContainer = new createjs.Container(); 
	princessContainer.x = 174;
	princessContainer.y = 5;
	princessContainer.alpha = 0;
	stage.addChild(princessContainer);
	
	
	princes1 = new createjs.Bitmap("assets/princes1.png");
	princes1.x = 0;
	princes1.y = 0;
	princessContainer.addChild(princes1);
	
	princes2 = new createjs.Bitmap("assets/princes2.png");
	princes2.x = 0;
	princes2.y = 0;
	princessContainer.addChild(princes2);
	
	princes3 = new createjs.Bitmap("assets/princes3.png");
	princes3.x = 0;
	princes3.y = 0;
	princessContainer.addChild(princes3);
	
	princes4 = new createjs.Bitmap("assets/princes4.png");
	princes4.x = 0;
	princes4.y = 0;
	princessContainer.addChild(princes4);
	
	princes5 = new createjs.Bitmap("assets/princes5.png");
	princes5.x = 0;
	princes5.y = 0;
	princessContainer.addChild(princes5);
	
	princes6 = new createjs.Bitmap("assets/princes6.png");
	princes6.x = 0;
	princes6.y = 0;
	princessContainer.addChild(princes6);
	
	princes7 = new createjs.Bitmap("assets/princes7.png");
	princes7.x = 0;
	princes7.y = 0;
	princessContainer.addChild(princes7);
	
	princes8 = new createjs.Bitmap("assets/princes8.png");
	princes8.x = 0;
	princes8.y = 0;
	princessContainer.addChild(princes8);
	
	closeBtn = new createjs.Bitmap("assets/closeBtn.png");
	closeBtn.x = 395;
	closeBtn.y = 25;
	princessContainer.addChild(closeBtn);
	closeBtn.addEventListener("click", closeBtnClickHandler);
	closeBtn.addEventListener("mouseover", closeBtnOverHandler);
	
	princesText = new createjs.Text("", "23px Times New Roman Bold", "#FFF");
	princesText.x = 225;
	princesText.y = 540;
	princesText.textAlign = "center";
	princessContainer.addChild(princesText);
	
	for(var i=0; i< princessContainer.children.length; i++)
	{
		princessContainer.children[i].alpha = 0;		
	}	
	
	//add children to the draw list in the correct order
	stage.addChild(finalScreenBackground, heading_txt, message_txt, mainMenuButton, calenderBg, crownImage, moreGamesButton);
	
	changedate();
	
	stage.update(); //Draw
}

function closeBtnClickHandler(event)
{
	playSound("button_click");
	stage.removeChild(princessContainer);
}
function closeBtnOverHandler(event)
{
	playSound("button_over");
}

function showCalenderPrinces(_currPrinces)
{
	stage.addChild(princessContainer);
	
	for(var i=0; i< princessContainer.children.length; i++)
	{
		princessContainer.alpha = 1;
		princessContainer.children[i].alpha = 0;
		princessContainer.children[_currPrinces].alpha = 1;		
	}
	closeBtn.alpha = 1;
	princesText.alpha = 1;
	princesText.text = princesTextArray[_currPrinces];
	
	stage.update(); //Draw
}


function mainMenuEffectsMouseover(event){
		playSound("button_over");
		event.target.image.src = "assets/main_menu_btn_over_img.png";
		document.body.style.cursor='pointer';
		stage.update();
}


function mainMenuEffectsMouseout(event){
		
		event.target.image.src = "assets/main_menu_btn_img.png";
		document.body.style.cursor='default';
		stage.update();
}


function mainMenuClickHandler(event){
	playSound("button_click");
	cleanupFinalScreen();
	splashScreen();
	
}

function moreGamesClickHandler(event){
	playSound("button_click");
	openMoreGamesLink();
}

function moreGamesEffectsMouseover(event){
		playSound("button_over");
		event.target.image.src = "assets/more_btn_over.png";
		document.body.style.cursor='pointer';
		stage.update();
}


function moreGamesEffectsMouseout(event){
		
		event.target.image.src = "assets/more_btn.png";
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

function logoClickHandler(event){
	playSound("button_click");
	//cleanupFinalScreen()
	//introductionScreen();	
}



///////////////////////////CLEAN UP/////////////////////////////////////////

function cleanupFinalScreen(){	//clean slate to add the pets screen to

	stage.removeAllChildren();
	stage.removeAllEventListeners();
}