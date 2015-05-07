var stage = new createjs.Stage("gameView");

// in the center of the screen

/*console.log(document.body.clientWidth);
console.log(stage.canvas.width);
stage.x = (document.body.clientWidth - stage.canvas.width)/2
stage.x = 150;*/

var container = new createjs.Container();
stage.addChild(container);

var background, title, statement, price,increaseButon,decreaseButton;


/*var backgroundImage = new Image();
backgroundImage.onload = function() {
	addBackground();
}
backgroundImage.src = "./assets/images/background.PNG";




var titleImage = new Image();
titleImage.onload = function() {
	addTitle();
	addStatement();
	addPrice();
};
titleImage.src = "./assets/images/title.png";*/


function addBackground() {
	background = new createjs.Bitmap("./assets/images/background.PNG");

	console.log("before scale " + [background.image.width, background.image.height]);

	background.scaleX = background.scaleY = Math.max(stage.canvas.width / background.image.width, stage.canvas.height / background.image.height);

	console.log("after scale " + [background.image.width, background.image.height]);

	container.addChild(background);
}


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
	console.log("in addPrice " + title.getBounds());
	price.y = title.getBounds().height;	
	container.addChild(price);
}

function addIncreaseButtonAndDecreaseButton(){

	var listener = function(event){
	//	console.log(event.target);
		var priceNum = Number(price.text.substr(0,price.text.length-1));
	//	console.log(typeof priceNum);

	//// TODO less hard core and priceNum may be some certain Number ,like 2 5 8 10
		if(event.target.text === "+"){
			price.text = priceNum + 1 + " $";
		}else{
			if(priceNum == 0){
				price.text = 0 + " $"; 
			}else{
				price.text = priceNum - 1 + " $"; 
			}
			
		}
	}

	increaseButon = new createjs.Text("+","40px Arial","#00ff00");
	increaseButon.x = title.x;
	increaseButon.y = title.getBounds().height;


	decreaseButton = new createjs.Text("-","40px Arial","#0000ff");
	decreaseButton.x = title.x + title.getBounds().width - decreaseButton.getBounds().width;
	decreaseButton.y = title.getBounds().height;

	increaseButon.addEventListener("click",listener);
	decreaseButton.addEventListener("click",listener);

	container.addChild(increaseButon);
	container.addChild(decreaseButton);
}

function onPreLoadComplete(){
	addBackground();
	addTitle();
	addStatement();
	addPrice();
	addIncreaseButtonAndDecreaseButton();
}

var preLoadManifest = [
	{
		id: "background",
		src: "./assets/images/background.PNG"
	},{
		id: "title",
		src: "./assets/images/title.png"		
	}
];


var preLoader = new createjs.LoadQueue(false);  // must set to be false when just run the index.html
preLoader.on("complete",onPreLoadComplete);
preLoader.loadManifest(preLoadManifest);





createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick", stage);