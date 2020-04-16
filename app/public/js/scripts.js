var defaultTitle = "Yes, And ...";
var defaultContent = "The 'Yes' portion of the rule encourages the acceptance of the contributions added by others. Participants in an improvisation are encouraged to agree to proposition, fostering a sense of cooperation[1] rather than shutting down the suggestion and effectively ending the line of communication. More here https://en.wikipedia.org/wiki/Yes,_and...";

var title;
var content;

function calReadTime(text){
	var wordCount = text.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;

    var readingTimeInMinutes = Math.floor(wordCount / 228) + 1;
    return readingTimeInMinutes + " min";
}

function autoSave() {

  	$("#saved").text(new Date().toLocaleTimeString());
  	$("#words").text(content.split(" ").length);
  	$("#reading-time").text(calReadTime(content));

  	store.set('title', title); 
  	store.set('content', content);
}

$(function() {
	title = store.get('title') != null ? store.get('title') : defaultTitle;
	content = store.get('content') != null ? store.get('content') : defaultContent;

  	$(".art-title").text(title);
  	$(".art-content").text(content);

  	$("#new-article").click(function() {
  		title = defaultTitle;
  		content = defaultContent;

        $(".art-title").text(defaultTitle);
  		$(".art-content").text(defaultContent);
    });

	var titleEditor = new MediumEditor('.art-title');
	titleEditor.subscribe('editableInput', function (event, editorElement) {
		title = editorElement.innerText;
	  	console.log("title: " + title);
	});

	var contentEditor = new MediumEditor('.art-content');
	contentEditor.subscribe('editableInput', function (event, editorElement) {
		content = editorElement.innerText;
		console.log("body: " + content);
	});

  	setInterval(autoSave, 5000);
});


