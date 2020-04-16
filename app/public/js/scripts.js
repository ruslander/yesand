var title = "";
var content = "";



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



function autoSave() {
  	var d = new Date();
  	var t = d.toLocaleTimeString();
  	document.getElementById("saved").innerHTML = t;

  	store('title', title); 
  	store('body', content)

  	document.getElementById('words').innerHTML = content.split(" ").length;
}

setInterval(autoSave, 5000);