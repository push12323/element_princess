// JavaScript Document

var ShowDate = function()
{
	
	this.init = function()
	{
		
	}
	
	this.showDate = function(xPos,yPos)
	{
		console.log("showDate Initialized : "+xPos);
		var dateDisplay = new createjs.Container();
		dateDisplay.x = xPos;
		dateDisplay.y = yPos; 
		
		var today = new Date();
		var currDate = today.getDate();
		var currDay = this.getTodayDay(today);
		var currMonth = this.getTodayMonth(today);
		var currYear = today.getFullYear();	
		
		var date_txt =  new createjs.Text(currDate, "30px Times New Roman", "#FFF"); 
		date_txt.x = 150; 
		date_txt.y = 45;
		date_txt.textAlign = "right";
		date_txt.textBaseline = "alphabetic";
		
		var day_txt =  new createjs.Text(currDay, "20px Times New Roman", "#FFF"); 
		day_txt.x = 120; 
		day_txt.y = 20;
		day_txt.textBaseline = "alphabetic";
		console.log(currDay);
		
		var month_txt =  new createjs.Text(currMonth, "20px Times New Roman", "#FFF"); 
		month_txt.x = 60; 
		month_txt.y = 20;
		month_txt.textBaseline = "alphabetic";
		
		var year_txt =  new createjs.Text(currYear, "20px Times New Roman", "#FFF"); 
		year_txt.x = 60; 
		year_txt.y = 45;
		year_txt.textBaseline = "alphabetic";
		
		dateDisplay.addChild(date_txt, day_txt, month_txt, year_txt);
		
		stage.addChild(dateDisplay);
	}
	
	this.getTodayDate = function()
	{
		var today = new Date();
		var currDate = today.getDate();
		var currDay = this.getTodayDay(today);
		var currMonth = this.getTodayMonth(today);
		var currYear = today.getFullYear();
		
		var todayDate = {date:currDate,day:currDay,month:currMonth,year:currYear};
		return todayDate;
	}
	
	this.getTodayDay = function(_today)
	{
		switch(_today.getDay())
		{
			case 0:
				return "Sun"
				break;
			case 1:
				return "Mon"
				break;
			case 2:
				return "Tue"
				break;
			case 3:
				return "Wed"
				break;
			case 4:
				return "Thr"
				break;
			case 5:
				return "Fri"
				break;
			case 6:
				return "Sat"
				break;
		}
	}
	
	this.getMonthName = function(_month)
	{
		switch(_month)
		{
			case 1:
				return "Jan"
				break;
			case 2:
				return "Feb"
				break;
			case 3:
				return "Mar"
				break;
			case 4:
				return "Apr"
				break;
			case 5:
				return "May"
				break;
			case 6:
				return "Jun"
				break;
			case 7:
				return "Jul"
				break;
			case 8:
				return "Aug"
				break;
			case 9:
				return "Sep"
				break;
			case 10:
				return "Oct"
				break;
			case 11:
				return "Nov"
				break;
			case 12:
				return "Dec"
				break;
		}
	}
	
	this.getFullMonthName = function(_month)
	{
		switch(_month)
		{
			case 1:
				return "January"
				break;
			case 2:
				return "February"
				break;
			case 3:
				return "March"
				break;
			case 4:
				return "April"
				break;
			case 5:
				return "May"
				break;
			case 6:
				return "June"
				break;
			case 7:
				return "July"
				break;
			case 8:
				return "August"
				break;
			case 9:
				return "September"
				break;
			case 10:
				return "October"
				break;
			case 11:
				return "November"
				break;
			case 12:
				return "December"
				break;
		}
	}
	
	this.getTodayMonth = function(_today)
	{
		switch(_today.getMonth())
		{
			case 0:
				return "Jan"
				break;
			case 1:
				return "Feb"
				break;
			case 2:
				return "Mar"
				break;
			case 3:
				return "Apr"
				break;
			case 4:
				return "May"
				break;
			case 5:
				return "Jun"
				break;
			case 6:
				return "Jul"
				break;
			case 7:
				return "Aug"
				break;
			case 8:
				return "Sep"
				break;
			case 9:
				return "Oct"
				break;
			case 10:
				return "Nov"
				break;
			case 11:
				return "Dec"
				break;
		}
	}
	
	this.init();
}

