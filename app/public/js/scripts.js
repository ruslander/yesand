var title = "Yes, And";
var content = "The 'Yes' portion of the rule encourages the acceptance of the contributions added by others. Participants in an improvisation are encouraged to agree to proposition, fostering a sense of cooperation[1] rather than shutting down the suggestion and effectively ending the line of communication. More here https://en.wikipedia.org/wiki/Yes,_and...";

function autoSave() {

  	$("#saved").text(new Date().toLocaleTimeString())
  	$("#words").text(content.split(" ").length)

  	store.set('title', title); 
  	store.set('content', content)
}

$(function() {
	var recTitle = store.get('title') != null ? store.get('title') : title;
	var recContent = store.get('content') != null ? store.get('content') : content;

  	$(".art-title").text(recTitle)
  	$(".art-content").text(recContent)

	var titleEditor = new MediumEditor('.art-title');
	titleEditor.subscribe('editableInput', function (event, editorElement) {
		title = editorElement.innerText;
	  	console.log("title: " + title)
	});

	var contentEditor = new MediumEditor('.art-content');
	contentEditor.subscribe('editableInput', function (event, editorElement) {
		content = editorElement.innerText;
		console.log("body: " + content)
	});

  	setInterval(autoSave, 5000);
});


