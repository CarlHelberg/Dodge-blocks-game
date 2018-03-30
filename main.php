<html>
<head>
	<title>Bigger Maze Game</title>
	<link rel='stylesheet' type = 'text/css' href= 'Style.css'>
	<script src = "Main.js"> </script>
</head>

<body>

		<div id = "innerCanvas">
			<canvas class = "canvas" id = "mainCanvas">

			</canvas>
		</div>
		<div id = "startButtonDiv">
			<input id = "startButton" onclick= "start();" type = "button" value = "START!">
		</div>
		<div>
			<input id = "scoreBox" value = "0">
		</div>
		<script> createCharacter();</script>


</body>
</html>
