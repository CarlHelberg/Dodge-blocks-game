var character = {
								charX:1,
								charY:50,
								charW:20,
								charH:20,
}


function start(){
setInterval(createBlock,3000);

setInterval(score,500);
}

function score(){

var currentScore = parseInt(	document.getElementById("scoreBox").value);
		 document.getElementById("scoreBox").value = currentScore + 1;

}

function destroyBlock(){


			myBlock.clearRect(block.blockX,block.blockY,block.blockW,block.blockH);
}


function createBlock(){

	var dieRoll = Math.floor(Math.random() * 101.756) +1;
	var block = {
								blockX:320,
								blockY:dieRoll,
								blockW:50,
								blockH:50,
	}
	var myBlock = mainCanvas.getContext("2d");
	myBlock.fillStyle = "#FF0000";
	myBlock	.fillRect(block.blockX,block.blockY,block.blockW,block.blockH);

		setInterval(blockMove,16.66667);


				function blockMove(){
					myBlock.clearRect(block.blockX,block.blockY,block.blockW,block.blockH);
					block.blockX = block.blockX-1;
					myBlock.fillStyle = "#FF0000";
					myBlock = mainCanvas.getContext("2d");
					myBlock	.fillRect(block.blockX,block.blockY,block.blockW,block.blockH);
						if (character.charX < block.blockX + block.blockW  && character.charX + character.charW  > block.blockX &&
							character.charY < block.blockY + block.blockH && character.charY + character.charH > block.blockY) {
								// The objects are touching
								alert ("Your Score : " + parseInt(document.getElementById("scoreBox").value) );
								alert ("Game over");
								location.href = 'main.php';
								currentScore = "0";

						}

      }
}




function createCharacter(){
			myCharacter = mainCanvas.getContext("2d");
			myCharacter.fillStyle = "#FF0000";
			myCharacter.fillRect(character.charX,character.charY,character.charW,character.charH);
}

function destroyCharacter(){


			myCharacter.clearRect(character.charX,character.charY,character.charW,character.charH);
}



function moveRight(){
					destroyCharacter();

        			myCharacter.fillStyle = "#FF0000";
        			character.charX = character.charX + 2;
					myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
					createCharacter();

}

function moveLeft(){
					destroyCharacter();

        			myCharacter.fillStyle = "#FF0000";
        				character.charX = character.charX - 2;
					myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
					createCharacter();
}

function moveDown(){
					destroyCharacter();

        			myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY + 2;
					myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
					createCharacter();
}

function moveUp(){
					destroyCharacter();

        			myCharacter.fillStyle = "#FF0000";
        				character.charY = character.charY - 2;
					myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
					createCharacter();

}

function noMoveRight(){
	if (character.charX >=280 ){

			destroyCharacter();
					myCharacter.fillStyle = "#FF0000";
					character.charX = character.charX - 2;
			myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
			createGame();

	};
};

function noMoveUp(){
	if (character.charY < 0 ){

			destroyCharacter();
					myCharacter.fillStyle = "#FF0000";
					character.charY = character.charY + 2;
			myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
			createGame();

	};
};

function noMoveLeft(){
	if (character.charX < 0 ){

			destroyCharacter();
					myCharacter.fillStyle = "#FF0000";
					character.charX = character.charX + 2;
			myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
			createGame();

	};
};

function noMoveDown(){
	if (character.charY >= 130 ){

			destroyCharacter();
					myCharacter.fillStyle = "#FF0000";
					character.charY = character.charY - 2;
			myCharacter.fillRect(character.charX,character.charY,character.charH,character.charW);
			createGame();

	};
};



document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37:
        	moveLeft();
            break;
        case 38:
            moveUp();
            break;
        case 39:
        	moveRight();
			break;
        case 40:
            moveDown();
            break;
    }
};
