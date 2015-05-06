var stage = new createjs.Stage("gameView");

// in the center of the screen

/*console.log(document.body.clientWidth);
console.log(stage.canvas.width);
stage.x = (document.body.clientWidth - stage.canvas.width)/2
stage.x = 150;*/

var container = new createjs.Container();
stage.addChild(container);

var background, title, statement, price;


var backgroundImage = new Image();
backgroundImage.onload = function() {
	addBackground();
}
backgroundImage.src = "./assets/images/background.PNG";

function addBackground() {
	background = new createjs.Bitmap("./assets/images/background.PNG");

	console.log("before scale " + [background.image.width, background.image.height]);

	background.scaleX = background.scaleY = Math.max(stage.canvas.width / background.image.width, stage.canvas.height / background.image.height);

	console.log("after scale " + [background.image.width, background.image.height]);

	container.addChild(background);
}


var titleImage = new Image();
titleImage.onload = function() {
	addTitle();
	addStatement();
	addPrice();
};
titleImage.src = "./assets/images/title.png";

function addTitle() {
	title = new createjs.Bitmap("./assets/images/title.png");

	console.log(stage.canvas.width);
	console.log(title.image.width);
	console.log(title.getBounds());
	console.log(stage.canvas.width / title.image.width);

	title.x = (stage.canvas.width - title.image.width) / 2;
	container.addChild(title);
}

function addStatement() {
	statement = new createjs.Text("Copy From GameXXX", "10px Arial", "#000fff");
	statement.y = stage.canvas.height - statement.getBounds().height;
	statement.x = (stage.canvas.width - statement.getBounds().width) / 2;
	container.addChild(statement);
}

function addPrice() {
	price = new createjs.Text("2 $", "40px Arial", "#ff0000");
	price.x = (stage.canvas.width - price.getBounds().width) / 2;
	price.y = (title.getBounds().height);	
	container.addChild(price);
}



createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", stage);