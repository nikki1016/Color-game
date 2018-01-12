document.querySelector(".jumbotron").style.background = "steelblue";

var numColors = 6;

var pickedColor= setColor();


var mainColor = document.getElementById("maincolor");
mainColor.textContent = pickedColor;

var color = generateBlocks(pickedColor,6);

var blocks = document.querySelectorAll(".blocks");
var stat = document.getElementById("message")
for(var i=0; i< blocks.length; i++){
	if(color[i]){
		blocks[i].style.background = color[i];
		//add event listener
		blocks[i].addEventListener("click", function(){
			if(pickedColor === this.style.background){
					//alert("correct");
				stat.textContent = "CORRECT"
				document.querySelector(".jumbotron").style.background = pickedColor;
				document.getElementById("newgame").textContent = "Play Again!";
				for(var j=0; j <blocks.length; j++){
					blocks[j].style.background = pickedColor;
				}
			}
			else{
				this.style.background= "#232323"
				stat.textContent = "TRY AGAIN"
			}
		});
	}
	else{
		blocks[i].style.display = "none";
	}
}


var reset = document.getElementById("newgame");

reset.addEventListener("click", function(){
	document.querySelector(".jumbotron").style.background = "blue";
	document.getElementById("newgame").textContent = "NEW GAME!";
	stat.textContent = "";
	pickedColor= setColor();
	mainColor.textContent = pickedColor;

	color = generateBlocks(pickedColor,numColors);
	for(var i=0; i< blocks.length; i++){
		if(color[i]){
			blocks[i].style.background = color[i];
			blocks[i].style.display = "block";
		//add event listener
			blocks[i].addEventListener("click", function(){
				if(pickedColor === this.style.background){
						//alert("correct");
					stat.textContent = "CORRECT"
					document.querySelector(".jumbotron").style.background = pickedColor;
					document.getElementById("newgame").textContent = "Play Again!";
					for(var j=0; j <blocks.length; j++){
						blocks[j].style.background = pickedColor;
					}
				}
				else{
					this.style.background= "#232323"
					stat.textContent = "TRY AGAIN"
				}
			});
		}
		else{
			blocks[i].style.display = "none";
		}
	}

});

var easy = document.getElementById("easy");
easy.addEventListener("click", function(){
	document.querySelector(".jumbotron").style.background = "blue";
	document.getElementById("newgame").textContent = "NEW GAME!";
	stat.textContent = "";
	easy.classList.add("selected");
	hard.classList.remove("selected");
	document.getElementById("newgame").textContent = "NEW GAME!";
	numColors = 3;
	pickedColor= setColor();
	mainColor.textContent = pickedColor;

	color = generateBlocks(pickedColor,numColors);

	for(var i=0; i< blocks.length; i++){
		if(color[i]){
			blocks[i].style.background = color[i];
		//add event listener
			blocks[i].addEventListener("click", function(){
				if(pickedColor === this.style.background){
						//alert("correct");
					stat.textContent = "CORRECT"
					document.querySelector(".jumbotron").style.background = pickedColor;
					document.getElementById("newgame").textContent = "Play Again!";
					for(var j=0; j <blocks.length; j++){
						blocks[j].style.background = pickedColor;
					}
				}
				else{
					this.style.background= "#232323"
					stat.textContent = "TRY AGAIN"
				}
			});
		}
		else{
			blocks[i].style.display = "none";
		}
	}
})

var hard = document.getElementById("hard");
hard.addEventListener("click", function(){
	document.querySelector(".jumbotron").style.background = "blue";
	document.getElementById("newgame").textContent = "NEW GAME!";
	stat.textContent = "";
	hard.classList.add("selected");
	easy.classList.remove("selected");
	document.getElementById("newgame").textContent = "NEW GAME!";
	numColors = 6;
	pickedColor= setColor();
	mainColor.textContent = pickedColor;

	color = generateBlocks(pickedColor,6);

	for(var i=0; i< blocks.length; i++){
			blocks[i].style.background = color[i];
			blocks[i].style.display = "block";
		//add event listener
			blocks[i].addEventListener("click", function(){
				if(pickedColor === this.style.background){
						//alert("correct");
					stat.textContent = "CORRECT"
					document.querySelector(".jumbotron").style.background = pickedColor;
					document.getElementById("newgame").textContent = "Play Again!";
					for(var j=0; j <blocks.length; j++){
						blocks[j].style.background = pickedColor;
					}
				}
				else{
					this.style.background= "#232323"
					stat.textContent = "TRY AGAIN"
				}
			});
		
	}
})



function setColor(){
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var yellow = Math.floor(Math.random()*256);
	var col = "rgb("+red+", "+green+", "+yellow+")";
	return col;
}

function generateBlocks(col,numColor){
	var color = ["rgb(255, 0, 0)"]
	for(var i=0; i< numColor; i++)
		color[i]= setColor();
	var correctBlock = Math.floor(Math.random()*numColors);
	color[correctBlock] = col;
	return color;

}