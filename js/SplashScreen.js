var background;
var playButton;
var logoButton;
var isPlayedToday;
var princesGameCache;
var playedDays;
var playerPrinces;
var todayDate;
var todayPrinces;
var dateDisplay;

function splashScreen(){
	
	//create background DisplayObject
	background = new createjs.Bitmap("assets/splashscreen.jpg");
	background.x = background.y = 0;
	
    //Add Background instance to stage display list.
	stage.addChild(background);
	
	//initiate timer properties
	createjs.Ticker.setFPS(50);		//set the framerate to 50
	createjs.Ticker.addEventListener("tick", splashScreenTick);		//call update on every frame
	
	dateDisplay = new ShowDate();
	
	todayDate = dateDisplay.getTodayDate();
	todayPrinces = "";
	
	//localStorage.clear();
	
	isPlayedToday = false;
	
	if(localStorage.princesGameHistory)
	{
		princesGameCache = localStorage.getItem('princesGameHistory');
		var data = JSON.parse(princesGameCache);
		playedDays = data.days;
		playerPrinces = data.princes;
		console.log(playerPrinces);
		
		isPlayedToday = searchArray(todayDate,playedDays);		
		
		if(isPlayedToday)
		{
			console.log("Already Played");
		}
		else
		{
			/*playedDays.push(todayDate);
			playerPrinces.push(todayAward);
			princesGameCache = {days:playedDays, princes:playerAwards};
			localStorage.setItem('princesGameHistory', JSON.stringify(princesGameCache));*/
		}
	}
	else
	{
		//console.log("princesGameCache Not Avail");
		playedDays = [];
		playerPrinces = [];
		/*playedDays.push(todayDate);
		playerPrinces.push(todayAward);
		princesGameCache = {days:playedDays, princes:playerPrinces};
		localStorage.setItem('princesGameHistory', JSON.stringify(princesGameCache));		*/
	}
	
	console.log(data);
	//bring up the Start screen
	loadSplashScreen();
}

function searchArray(nameKey, myArray){
    for (var i=0; i < myArray.length; i++) {
        if (myArray[i].date === nameKey.date && myArray[i].month === nameKey.month && myArray[i].year === nameKey.year) {
			//isPlayedToday = true;
			//console.log("searchArray : "+ isPlayedToday);
            return true;
        }
    }
}

function loadSplashScreen(){
	
	//place Play Button
	dateContainer = new createjs.Bitmap("assets/date_display_bg.png");
	dateContainer.x = 575; //x coord
	dateContainer.y = 239; //y coord
	
	//place Play Button
	playButton = new createjs.Bitmap("assets/play_btn_img.png");
	playButton.x = 508; //x coord
	playButton.y = 362; //y coord
	playButton.addEventListener("click", playClickHandler);
	playButton.addEventListener("mouseover", playEffectsMouseover);
	playButton.addEventListener("mouseout", playEffectsMouseout);
	
	//place Play Button
	/*logoButton = new createjs.Bitmap("assets/girls_logo_img.png");
	logoButton.x = 508; //x coord
	logoButton.y = 447; //y coord
	logoButton.addEventListener("click", openLogoLink);
	logoButton.addEventListener("mouseover", logoEffectsMouseover);
	logoButton.addEventListener("mouseout", logoEffectsMouseout);*/
	
	//place Play Button
	addSiteButton = new createjs.Bitmap("assets/add_to_site_btn.png");
	addSiteButton.x = 288; //x coord
	addSiteButton.y = 555; //y coord
	addSiteButton.addEventListener("click", addSiteClickHandler);
	addSiteButton.addEventListener("mouseover", addSiteEffectsMouseover);
	addSiteButton.addEventListener("mouseout", addSiteEffectsMouseout);
	
	//place Play Button
	moreGamesButton = new createjs.Bitmap("assets/more_btn.png");
	moreGamesButton.x = 580; //x coord
	moreGamesButton.y = 555; //y coord
	moreGamesButton.addEventListener("click", moreGamesClickHandler);
	moreGamesButton.addEventListener("mouseover", moreGamesEffectsMouseover);
	moreGamesButton.addEventListener("mouseout", moreGamesEffectsMouseout);	
	
	var starAnimContainer = new createjs.Container();
	starAnimContainer.x = 0;
	starAnimContainer.y = 0;
	stage.addChild(starAnimContainer);
	
	var ssStar = new createjs.BitmapAnimation(ssStarAnimation2);
	ssStar.x = 226;
	ssStar.y = 41;
	ssStar.gotoAndPlay(40);
	starAnimContainer.addChild(ssStar);
	
	var starSprite1 = ssStar.clone();
	starSprite1.x = 323;
	starSprite1.y = -8;
	starSprite1.gotoAndPlay(1);
	starAnimContainer.addChild(starSprite1);
	
	var starSprite2 = ssStar.clone();
	starSprite2.x = 505;
	starSprite2.y = 65;
	starSprite2.gotoAndPlay(55);
	starAnimContainer.addChild(starSprite2);
	
	var starSprite3 = ssStar.clone();
	starSprite3.x = 60;
	starSprite3.y = 300;
	starSprite3.gotoAndPlay(30);
	starAnimContainer.addChild(starSprite3);
	
	var starSprite4 = ssStar.clone();
	starSprite4.x = 342;
	starSprite4.y = 323;
	starSprite4.gotoAndPlay(0);
	starAnimContainer.addChild(starSprite4);
	
	//add children to the draw list in the correct order
	stage.addChild(dateContainer, playButton, moreGamesButton);
	
	dateDisplay.showDate(535,270);
	
	stage.update(); //Draw
}

/////////////////////BUTTON CLICK HANDELERS//////////////////////////////////


function playClickHandler(event){
	
	playSound("button_click");
	cleanupStartScreen();
	stage.update(); 
	if(isPlayedToday)
	{
		console.log("Already Played");
		
		finalScreen();
	}
	else
	{
		introductionScreen();
	}
	
}

function logoClickHandler(event){
	playSound("button_click");
	openLogoLink();
}

function addSiteClickHandler(event){
	playSound("button_click");
	openAddToSiteLink();
}

function moreGamesClickHandler(event){
	playSound("button_click");
	openMoreGamesLink();
}


////////////////////BUTTON EFECT HANDELERS//////////////////////////////////

function playEffectsMouseover(event){
		playSound("button_over");
		event.target.image.src = "assets/play_btn_over_img.png";
		document.body.style.cursor='pointer';
		stage.update();
}


function playEffectsMouseout(event){
		
		event.target.image.src = "assets/play_btn_img.png";
		document.body.style.cursor='default';
		stage.update();
}

function addSiteEffectsMouseover(event){
		playSound("button_over");
		event.target.image.src = "assets/add_to_site_btn_over.png";
		document.body.style.cursor='pointer';
		stage.update();
}


function addSiteEffectsMouseout(event){
		
		event.target.image.src = "assets/add_to_site_btn.png";
		document.body.style.cursor='default';
		stage.update();
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


///////////////////////////TIMER ANIMATIONS/////////////////////////////////

function splashScreenTick(){
	
	
	stage.update();

}

///////////////////////////CLEAN UP/////////////////////////////////////////

function cleanupStartScreen(){	//clean slate to add the pets screen to

	stage.removeAllChildren();
	stage.removeAllEventListeners();
	//createjs.Ticker.removeEventListener("tick", splashScreenTick);		

}







