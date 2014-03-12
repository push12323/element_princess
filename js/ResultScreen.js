var resultBackground;
var resultArray;
var randomNumber;
var resultscreenDesc;
var dateContainer;
var princes_name_txt;
var princes_desc_txt;
var princesImage;
var todayPrinces;
var snowManager;
var animationContainer;
var moreGamesButton;

function resultScreen(){
	//bring up the Start screen
	
	randomNumber = Math.floor(Math.random()*8);
	//randomNumber = 5;
	resultArray = [];
	
	resultArray[0] = {bg:"assets/resultscreen_princes1_bg.png", image:"assets/resultscreen_princes1.png", desc:"You are a water princess. You are a calm and kind person, but you can also be a little shy at times. You like to swim and in the summer you can easily be found around the sea. You love to collect all kinds of different sea shells.", title:"YOU ARE A WATER PRINCESS"};
	resultArray[1] = {bg:"assets/resultscreen_princes2_bg.png", image:"assets/resultscreen_princes2.png", desc:"You are a earth princess. You love nature and animals and you are very friendly to other people. In your free time you like to spend some time in the forest.", title:"YOU ARE A EARTH PRINCESS"};
	resultArray[2] = {bg:"assets/resultscreen_princes3_bg.png", image:"assets/resultscreen_princes3.png", desc:"You are a fire Princess. You are very smart and outspoken. When you want something you are sure you are going to get it. In your free time you like to do extreme sports like", title:"YOU ARE A FIRE PRINCESS"};
	resultArray[3] = {bg:"assets/resultscreen_princes4_bg.png", image:"assets/resultscreen_princes4.png", desc:"You are an air princess. You are really open minded and really focused on your goals in life. In your free time you like to spend your time reading comic books, you have an energy to make one feel good.", title:"YOU ARE A AIR PRINCESS"};
	resultArray[4] = {bg:"assets/resultscreen_princes5_bg.jpg", image:"assets/resultscreen_princes5.png", desc:"You are an ice princess. People think that you can be kill at sometimes, but deep down inside you are a very sensitive person. It's just hard for you to express yourself in the right way sometimes. When you are with friends you are the one that's hiding, but still laughing in the background.", title:"YOU ARE A ICE PRINCESS"};
	resultArray[5] = {bg:"assets/resultscreen_princes6_bg.jpg", image:"assets/resultscreen_princes6.png", desc:"You are a sun princess. You are very serious, sensitive and kind. You have a high appreciation for beauty and you are very open minded. In your free time you like to be original and creative.", title:"YOU ARE A SUN PRINCESS"};
	resultArray[6] = {bg:"assets/resultscreen_princes7_bg.png", image:"assets/resultscreen_princes7.png", desc:"You are a moon princess. You are quit and calm as an person. But when you get to do something you really love you can be a really outgoing person and you can get all excited. Friends love to hang out with you!", title:"YOU ARE A MOON PRINCESS"};
	resultArray[7] = {bg:"assets/resultscreen_princes8_bg.png", image:"assets/resultscreen_princes8.png", desc:"You are a star princess. You are really fun to hang around with. You live by the moment and you love new experiences. You love to be the center of attention when you are with friends and they don't mind that, they like that about you.", title:"YOU ARE A STAR PRINCESS"};
	
	loadResultScreen();
}
	
	

function loadResultScreen(){
	//create background DisplayObject
	resultBackground = new createjs.Bitmap("assets/game_background.jpg");
	resultBackground.x = resultBackground.y = 0;
	
	//set framerate
	createjs.Ticker.setFPS(50);
	createjs.Ticker.init();	//reset the clock to zero
	createjs.Ticker.addEventListener("tick", tickHandlerResultScreen);	//call update on every frame
	
	animationContainer = new createjs.Container();
	animationContainer.x = 0;
	animationContainer.y = 0;
	
	snowManager = new SnowManager();
	flowerAnimation = new FlowerAnimation();
	fireAnimation = new FireAnimation();
	glowManager = new GlowManager();
	cloudAnimation = new CloudAnimation();
	bubbleAnimation = new BubbleAnimation();
	
	/**/todayPrinces = randomNumber;
	//console.log(playerPrinces);
	playedDays.push(todayDate);
	playerPrinces.push(todayPrinces);
	princesGameCache = {days:playedDays, princes:playerPrinces};
	localStorage.setItem('princesGameHistory', JSON.stringify(princesGameCache));
	showPrinces(randomNumber);
	
	//place Play Button
	/*logoButton = new createjs.Bitmap("assets/girls_logo_img.png");
	logoButton.x = 21; //x coord
	logoButton.y = 524; //y coord
	logoButton.addEventListener("click", logoClickHandler);
	logoButton.addEventListener("mouseover", logoEffectsMouseover);
	logoButton.addEventListener("mouseout", logoEffectsMouseout);*/
	
	//place More Games Button
	moreGamesButton = new createjs.Bitmap("assets/more_btn.png");
	moreGamesButton.x = 280; //x coord
	moreGamesButton.y = 555; //y coord
	moreGamesButton.addEventListener("click", moreGamesClickHandler);
	moreGamesButton.addEventListener("mouseover", moreGamesEffectsMouseover);
	moreGamesButton.addEventListener("mouseout", moreGamesEffectsMouseout);	
	
	//place Play Button
	playAgainButton = new createjs.Bitmap("assets/play_again_btn_img.png");
	playAgainButton.x = 507; //x coord
	playAgainButton.y = 524; //y coord
	playAgainButton.addEventListener("click", playAgainClickHandler);
	playAgainButton.addEventListener("mouseover", playAgainEffectsMouseover);
	playAgainButton.addEventListener("mouseout", playAgainEffectsMouseout);	
	
	//add children to the draw list in the correct order
	stage.addChild(resultBackground, princesImageBg, animationContainer, princesImage, playAgainButton, moreGamesButton);	
	
	var dateDisplay = new ShowDate();
	dateDisplay.showDate(455,105);
	
	showAnimation();
	
	stage.update(); //Draw
}

function showPrinces(number)
{
	princesImage = new createjs.Bitmap(resultArray[number].image);
	princesImage.x = 0;
	princesImage.y = 0;
	
	princesImageBg = new createjs.Bitmap(resultArray[number].bg);
	princesImageBg.x = 0;
	princesImageBg.y = 0;	
}

function showAnimation()
{
	switch(randomNumber)
	{
		case 0:
			bubbleAnimation.addBubble(30);
		break;
		
		case 1:
			flowerAnimation.addFlower(12);
		break;
		
		case 2:
			fireAnimation.addParticle(75);
			var ssFireSprite = new createjs.BitmapAnimation(ssFireAnimation);
			ssFireSprite.x = 254;
			ssFireSprite.y = 195;
			ssFireSprite.scaleX = 0.8;
			ssFireSprite.scaleY = 0.8;
			ssFireSprite.gotoAndPlay(0);
			stage.addChild(ssFireSprite);
		break;
		
		case 3:
			glowManager.addGlow(50);
		break;
		
		case 4:
			snowManager.addSnow(50);
		break;
		
		case 5:
			//snowManager.addSnow(50);
			var ssSunBGSprite = new createjs.BitmapAnimation(ssSunBGAnimation);
			ssSunBGSprite.x = 0;
			ssSunBGSprite.y = 0;
			ssSunBGSprite.gotoAndPlay(1);
			animationContainer.addChild(ssSunBGSprite);
		break;
		
		case 6:
			cloudAnimation.addCloud(5);
		break;
		
		case 7:
			//snowManager.addSnow(50);
			var ssStarSprite = new createjs.BitmapAnimation(ssStarAnimation);
			ssStarSprite.x = 88;
			ssStarSprite.y = 115;
			ssStarSprite.scaleX = 1;
			ssStarSprite.scaleY = 1;
			ssStarSprite.gotoAndPlay(0);
			stage.addChild(ssStarSprite);
		break;
	}
}

//this is event hadler function gets called 50 times in a second
function tickHandlerResultScreen(e)	//called each frame
{			
	snowManager.animateSnow();
	flowerAnimation.animateFlower();
	fireAnimation.animateParticle();
	glowManager.animateGlow();
	cloudAnimation.animateCloud();
	bubbleAnimation.animateBubble();
	stage.update();
}

function playAgainEffectsMouseover(event){
		playSound("button_over");
		event.target.image.src = "assets/play_again_btn_over_img.png";
		document.body.style.cursor='pointer';
		stage.update();
}


function playAgainEffectsMouseout(event){
		
		event.target.image.src = "assets/play_again_btn_img.png";
		document.body.style.cursor='default';
		stage.update();
}

function playAgainClickHandler(event){
	playSound("button_click");
	cleanupGameWinScreen();
	finalScreen();
	
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
	openLogoLink();
	
}


///////////////////////////CLEAN UP/////////////////////////////////////////

function cleanupGameWinScreen(){	//clean slate to add the pets screen to

	stage.removeAllChildren();
	stage.removeAllEventListeners();
}