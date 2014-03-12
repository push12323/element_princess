// JavaScript Document
function CloudAnimation()
{
	var speed = 1;
	var wind = 0;
	var movieWidth = 400;
	var movieHeight = 600;
	var cloudArray;
	
	this.init = function()
	{
		cloudArray = [];
	}
	
	this.addCloud = function(numberOfFlakes)
	{
		for (var i = 0; i < numberOfFlakes; i++) 
		{
			/*var g = new createjs.Graphics();
			g.setStrokeStyle(1);
			g.beginFill(createjs.Graphics.getRGB(255,255,255));
			g.drawCircle(0,0,3);*/
			
			//var tempFlake = new createjs.Shape(g);
			var tempFlake = new createjs.Bitmap("assets/cloud_img.png");
			//variables that will modify the falling snow
			tempFlake.r = 1+Math.random()*speed;
			tempFlake.k = -Math.PI+Math.random()*Math.PI;
			tempFlake.rad = 0;			
			
			//giving each snowflake unique characteristics
			var randomScale = (Math.random()*0.8)+0.2;
			tempFlake.scaleX = randomScale;
			tempFlake.scaleY = randomScale
			//tempFlake.alpha = Math.random()*1;
			tempFlake.x = Math.random()*movieWidth;
			tempFlake.y = Math.random()*movieHeight;
			
			cloudArray.push(tempFlake);			
			
			animationContainer.addChild(tempFlake);
		}
	}
	
	this.animateCloud = function()
	{
		for(var i = 0; i < cloudArray.length; i++)
		{
			var currFlake = cloudArray[i];
			//update flake position
			currFlake.rad += (currFlake.k / 180) * Math.PI;
			//currFlake.x -= Math.cos(currFlake.rad)+wind;
			currFlake.y += speed;
			//currFlake.alpha -= 0.01;
			
			//if flake out of bounds, move to other side of screen
			if (currFlake.y >= movieHeight) {
				currFlake.y = -5;
			}
			if (currFlake.x >= movieWidth) 
			{
				currFlake.x = 1
			}
			if (currFlake.x <= 0) 
			{
				currFlake.x = movieWidth - 1;
			}			
		}		
	}
	
	this.init();
}

