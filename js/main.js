// JavaScript Document
//Shooting
    $("#leftbox").click(function(e){
$("#leftbox:hover").addClass("newcurs");


$(".help").fadeOut(1000);


        var left = document.getElementById("leftbox");
		var x = e.clientX + 'px';
        var y = e.clientY + 'px';
		var laser = document.createElement("div");
		laser.className = "laser";
		laser.setAttribute("style","top:"+y+";left:"+x+";")
		document.body.appendChild(laser);
		$(laser).velocity({left:-200},1000),function(){
		$(this).remove();
		};


    });





	

var counter = 0;

function randomRange(max,min) {
return Math.floor(Math.random() * (max-min) + min);
}

function randomRangeNoFloor(max,min) {
return Math.random() * (max-min) + min;
}

    

function init() {
//create ball


	var showScore = document.getElementById("counter");
	showScore.textContent = counter;
   
	var divball = document.createElement("div");
	var main = document.getElementById("main");

	
	divball.className = "ball";


	var ran = randomRangeNoFloor(0.5,1);
	var x_pos = randomRange(0,800);
	divball.innerHTML = "<img src='images/ufo.gif' style='transform:scale("+ran+")'>";
	divball.setAttribute("style", "top:0; left:" + x_pos +"px");
	//width:" + ran + "; height:" + ran + "
	$(".ball img").css("width:10px");
	main.appendChild(divball);
	
	
	var speed = randomRange(1000,4000);
	$(divball).velocity({top: "100vh" },speed, "linear", function(){	
		$(divball).velocity({top: randomRange(50,90) + "vh"},speed, "linear",function(){
			$(divball).remove();
		});

	});

}

setInterval(function(){init()},1000);

//Title
function showTitle(){
$(".gameTitle").show(2000);	
}

function hideTitle(){
$(".gameTitle").hide(2000);	
$(".gameCreator").slideUp(1000);
}
function nameShow(){
$(".gameCreator").slideDown(1000);	

}

function showHelp(){

$(".help").fadeIn(1000);
}



setTimeout(function(){showTitle()},2000);
setTimeout(function(){nameShow()},4000);
setTimeout(function(){hideTitle()},8000);

setTimeout(function(){showHelp()},8000);




//Generate a random number for the x position and radius size random
//create a Ball Object with radius and position parameter

//create a function that will apply gravity on the balls (jquery animate)

//create bullet object and apply it to the "right box" div.
//make an event that will fire the bullet to the right side of the screen
//create a collidor that will hit the balls object and destroy them
//create a counter that will add number after the collidor was activated.