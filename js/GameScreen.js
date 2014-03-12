var gameBackground;
var stageWidth;
var stageHeight;
var choiceCount;
var optionsObject;
var currPair;
var attempts;

//contstants


function loadMainGame(){
	
	stageWidth = document.getElementById("gameCanvas").width;
	stageHeight = document.getElementById("gameCanvas").height;
	attempts = 10;
	optionsObject = [{item1:"pair1",item2:"pair1"},{item1:"pair2",item2:"pair2"},{item1:"pair3",item2:"pair3"},{item1:"pair4",item2:"pair4"},{item1:"pair5",item2:"pair5"},{item1:"pair6",item2:"pair6"},{item1:"pair7",item2:"pair7"},{item1:"pair8",item2:"pair8"},{item1:"pair9",item2:"pair9"},{item1:"pair10",item2:"pair10"}];
	
	showGameScreen(); //initialise the visual elements
}

function showGameScreen(){
	
	//set framerate
	createjs.Ticker.setFPS(50);
	createjs.Ticker.init();	//reset the clock to zero
	createjs.Ticker.addEventListener("tick", tickHandler);	//call update on every frame
	
	//create background DisplayObject
	gameBackground = new createjs.Bitmap("assets/game_background.jpg");
	gameBackground.x = gameBackground.y = 0;
	
	
	var gameLogoImage = new createjs.Bitmap("assets/game_screen_logo.png");
	gameLogoImage.x = 81;
	gameLogoImage.y = 7;
	
	//place Container Sprites
	conatainerSprite1 = new createjs.BitmapAnimation(ssContainer1);
	conatainerSprite1.x = 132;
	conatainerSprite1.y = 190;
	conatainerSprite1.gotoAndStop(0);
	conatainerSprite1.addEventListener("mouseover", conatainerSprite1Over);
	conatainerSprite1.addEventListener("mouseout", conatainerSprite1Out);
	conatainerSprite1.addEventListener("click", conatainerSprite1Click);
	
	conatainerSprite2 = new createjs.BitmapAnimation(ssContainer2);
	conatainerSprite2.x = 405;
	conatainerSprite2.y = 190;
	conatainerSprite2.gotoAndStop(0);
	conatainerSprite2.addEventListener("mouseover", conatainerSprite2Over);
	conatainerSprite2.addEventListener("mouseout", conatainerSprite2Out);
	conatainerSprite2.addEventListener("click", conatainerSprite1Click);
	
	//place Container Sprites
	border1 = new createjs.Bitmap("assets/high_border.png");
	border1.x = 128;
	border1.y = 188;
	border1.visible = false;
	
	//place Container Sprites
	border2 = new createjs.Bitmap("assets/high_border.png");
	border2.x = 401;
	border2.y = 188;
	border2.visible = false;
	
	//place Play Button
	/*logoButton = new createjs.Bitmap("assets/girls_logo_img.png");
	logoButton.x = 250; //x coord
	logoButton.y = 524; //y coord
	//logoButton.addEventListener("click", logoClickHandler);
	logoButton.addEventListener("mouseover", logoEffectsMouseover);
	logoButton.addEventListener("mouseout", logoEffectsMouseout);*/
	
	choice_txt =  new createjs.Text("Choice : "+1+"/10", "28px Times New Roman", "#000"); 
	choice_txt.x = 380;
	choice_txt.y = 145;
	choice_txt.color = "#fff";
	choice_txt.textAlign = "center";
	choice_txt.textBaseline = "alphabetic";
	
	initGame();
	
	
	//Add Background instance to stage display list.
	stage.addChild(gameBackground, gameLogoImage, conatainerSprite1, conatainerSprite2, choice_txt, border1, border2);
	stage.update();
	
}

function conatainerSprite1Over(event)
{
	playSound("button_over");
    border1.visible = true;
}
function conatainerSprite1Out(event)
{
    border1.visible = false;
}

function conatainerSprite2Over(event)
{
	playSound("button_over");
    border2.visible = true;
}
function conatainerSprite2Out(event)
{
    border2.visible = false;
}
function conatainerSprite1Click(event)
{
    
	playSound("button_click");
	
	attempts--;
	choice_txt.text = "Choice : "+String(11-(attempts))+"/10";
	
	if(attempts > 0)
	{
		currPair = getRandomElementOf(optionsObject);
		showPair(currPair);
	}
	else
	{
		cleanupGameScreen();
		resultScreen();
	}
}

function initGame()
{
	currPair = getRandomElementOf(optionsObject);
	
	
	showPair(currPair);
}

function showPair(_pair)
{
	console.log(currPair);
	conatainerSprite1.gotoAndStop(_pair.item1);
	conatainerSprite2.gotoAndStop(_pair.item2);
}


function getRandomElementOf(array)
{
	var idx = Math.floor(Math.random() * array.length);
	var obj = array[idx];
	optionsObject.splice(idx, 1);
	
	console.log("currPair  :: "+obj);
	return obj;			
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


//this is event hadler function gets called 50 times in a second
function tickHandler(e)	//called each frame
{			
	stage.update();
}
//handles animation
function handleAnimations()
{
	
}

///////////////////////////CLEAN UP/////////////////////////////////////////

function cleanupGameScreen(){	//clean slate to add the pets screen to

	stage.removeAllChildren();
	stage.removeAllEventListeners();
}