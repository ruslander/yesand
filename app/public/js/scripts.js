var title = new MediumEditor('.art-title');
title.subscribe('editableInput', function (event, editorElement) {
	var titleText = editorElement.innerText;
  	
  	console.log("title: " + titleText)
  	store('title', titleText); 
});

var content = new MediumEditor('.art-content');
content.subscribe('editableInput', function (event, editorElement) {
	var bodyText = editorElement.innerText;
  	
  	console.log("body: " + bodyText)
  	store('body', bodyText)
});