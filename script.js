/* Create an event handler for the 'keyup event'.
 * This event will fire whenever a pressed keyboard key is released.
 * There are similar 'keydown' and 'keypress' events. */
$('#taskInput').keyup(function(e){
	// The keycode '13' corresponds to the 'Enter' key.
    if(e.keyCode == 13)
    { 
    	// Trigger an event known as 'enterKey' that we define below.
        $(this).trigger("enterKey");
    }
});

/* Uses the 'on' function to specify an event with a custom name. This
 * "enterKey" event is manually triggered above when then enter key is
 * released */
$('#taskInput').on("enterKey",function(e){
   
   // Create a new task
   var taskName = $("#taskInput").val();
   createTask(taskName)
});

function createTask(taskName) {
	// The div that we'll add a new DOM node for the task to
	var taskArea = $('#taskArea');

	/* Append a new DOM node to taskArea. The node is one defined
	 * by the given HTML code, which we've literally typed out
	 * as a JS string! This approach will quickly become unruly in larger
	 * applications; many frameworks attempt to avoid this. */
	taskArea.append('<div class="task">'+taskName+'</div>');

	// Clear the taskInput's text by setting it's value to the empty string
	$('#taskInput').val('');

	// Not useful, just giving an example of console.log & string concat
	console.log("task name: " + taskName);
}
