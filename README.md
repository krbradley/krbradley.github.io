# krbradley.github.io
<!-- Special tag to declare that this is an HTML document -->
<!DOCTYPE html>
<!-- Start the HTML document, using an optional specifier saying that this is an English-US page -->
<html lang="en-US">
<head>
	<title>My To-Do List</title>
	<!-- Include jQuery via a 'CDN' - Content Delivery Network -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>

	<!-- Include our local js & css files -->
	
	<link rel="stylesheet" type="text/css" href="style.css">
	<!-- 'meta' tags describe metainfo about the entire documetn. This specifies the character encoding -->
	<meta charset="UTF-8"> 
</head>
<body class="center">
	<h1>To-Do</h1>
	<em>What needs doing?</em>

	<!-- Inputs are often used inside of 'form' tags with a submit mechanism. We're not going into that here; see script.js for an added click handler -->
	<input id="taskInput" type="text" />
	<!-- Our new tasks will go here -->
	<div id="taskArea">

	</div>

	<!-- Note that we've included this at the bottom. THIS IS IMPORTANT!
	If we hadd included it in the header, the script would be evalutated
	before the various objects on the page were created, which would cause
	the event binding intructions to fail. 
	Note: You will not see a printed error for erros like this! Building
	a mental list of common possible mistakes is one of the more challenging
	aspects of web dev. -->
	<script src="script.js"></script>
</body>
</html> 
