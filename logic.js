let numOfSquares=6;
let colors =getRandomColors(numOfSquares);
let squares=document.querySelectorAll(".square");
let selectedColor=selectColor();
let headerColor=document.getElementById("headerColor");
let msgDisplay=document.querySelector("#message");
let h1=document.querySelector("h1");
let resetColor=document.querySelector("#reset");
let easyBtn=document.querySelector("#easyBtn");
let hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("active");
	easyBtn.classList.add("active");
   numOfSquares=3;
   //get 3 random colors
	colors=getRandomColors(numOfSquares);

	//select color
	selectedColor=selectColor();
	headerColor.textContent=selectedColor;

	//Display only three squares
	for(let i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display="none"
		}

	}

});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("active");
	hardBtn.classList.add("active");
   numOfSquares=6;
	 //get 6 random colors
	colors=getRandomColors(numOfSquares);

	//select color
	selectedColor=selectColor();
	headerColor.textContent=selectedColor;

	//Display only three squares
	for(let i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
		squares[i].style.display="block";
	}
});
resetColor.addEventListener("click", function(){
	//generate all random colors
	colors =getRandomColors(numOfSquares);

	//pick a new random color
	selectedColor=selectColor();

	//change headerColor to match selected color
	headerColor.textContent=selectedColor;

	//change the color of the squares
	for(let i=0;i<squares.length;i++){
		squares[i].style.background=colors[i];
	}

   h1.style.background="#232323"

})
headerColor.textContent=selectedColor;
for(let i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.background=colors[i];
     
     //add click listener to squares
	squares[i].addEventListener("click", function(){
		
		//grab color of clicked square
		let clickedColor = this.style.background;
      console.log(clickedColor,selectedColor);
		if(clickedColor === selectedColor){
			msgDisplay.textContent="Correct!";
			resetColor.textContent="Play Again?"
			changeColor(clickedColor);
			h1.style.background=clickedColor;
		}

		else{
			this.style.background="#232323";
			msgDisplay.textContent="Try Again!";
		}
	});
}

function changeColor(color){

	//loop through all squares
	
	for(let i=0;i<squares.length;i++){

		//change each color to match the given color
		squares[i].style.background=color;

	}
}

function selectColor(){
	let randomColor=Math.floor(Math.random()*colors.length);
	return colors[randomColor]; 
}

function getRandomColors(n){
	//create an array 

	const arr=[]
	// repeat n times 

	for(let i=0;i<n;i++){

	 // get random colors and insert into arr
	 arr.push(randomColors());
		

	}
return arr;
}

function randomColors(){
   //select "red" color from 0 - 255
   let r=Math.floor(Math.random() * 256);

   //select "green" color from 0 - 255

   let g=Math.floor(Math.random() * 256);

   //select "blue" color from 0-255

   let b=Math.floor(Math.random() * 256);

   return "rgb(" + r + ", " + g + ", " + b + ")";
 

} 

