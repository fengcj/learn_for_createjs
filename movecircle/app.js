var gameView = new createjs.Stage("gameView");

gameView.x = 50;
gameView.y = 50;

var isMove = false;


var circle = new createjs.Shape();
circle.graphics.beginFill("#ff0000").drawCircle(0,0,40).endFill();
circle.addEventListener("click",function(event){
	if(isMove){
		isMove = false;
		alert("catch me!!");
	}else{
		;
	}

});
gameView.addChild(circle);

var text = new createjs.Text("Catch the red ball","20px Arial","#ff7700");
text.x = 40;
text.y = 60;
text.textAlign = "center"; 
gameView.addChild(text);

var playButton = new createjs.Text("Play","40px Arial","#000000");
playButton.x = 250;
playButton.y = 50;
playButton.textAlign = "center";
playButton.addEventListener("click",function(){
	isMove = true;
});
gameView.addChild(playButton);

var tick = function(event){
	if(isMove){
		if(circle.x > gameView.canvas.width){
			circle.x = 0;
		}
		circle.x = circle.x + 5;
	}
	gameView.update(event); // must have this update
}

createjs.Ticker.addEventListener("tick",tick);
createjs.Ticker.setFPS(40);
