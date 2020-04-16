var defaultTitle = "Yes, And ...";
var defaultContent = "The 'Yes' portion of the rule encourages the acceptance of the contributions added by others. Participants in an improvisation are encouraged to agree to proposition, fostering a sense of cooperation[1] rather than shutting down the suggestion and effectively ending the line of communication. More here https://en.wikipedia.org/wiki/Yes,_and...";

var title;
var content;

function splitLines(t) { return t.split(/\r\n|\r|\n/); }

function calReadTime(text){
	var wordCount = text.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;

    var readingTimeInMinutes = Math.floor(wordCount / 228) + 1;
    return readingTimeInMinutes + " min";
}

function autoStat() {
  	$("#words").text(content.split(" ").length);
  	$("#reading-time").text(calReadTime(content));
}

var fullscreen = false;

function openFullscreen() {
  var elem = document.documentElement;

  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

function closeFullscreen() {
  var elem = document.documentElement;

  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
}

$(function() {
	title = store.get('title') != null ? store.get('title') : defaultTitle;
	content = splitLines(store.get('content') != null ? store.get('content') : defaultContent);

  	$(".art-title").text(title);

  	for (p in content) {
	  	$("#content")
	  		.append($( "<p>" + content[p] + "</p>" ));
	}

  	$("#new-article").click(function() {
  		title = defaultTitle;
  		content = defaultContent;

        $(".art-title").text(defaultTitle);
  		$(".art-content").text(defaultContent);
    });

    $("#no-distractions").click(function() {
    	if(fullscreen) 
    		closeFullscreen();
    	else 
    		openFullscreen();

  		fullscreen = !fullscreen;
    });

	var titleEditor = new MediumEditor('.art-title');
	titleEditor.subscribe('editableInput', function (event, editorElement) {
		title = editorElement.innerText;
		store.set('title', title); 
	  	console.log("title: " + title);
	});

	var contentEditor = new MediumEditor('.art-content');
	contentEditor.subscribe('editableInput', function (event, editorElement) {
		content = editorElement.innerText;
  		store.set('content', content);
		console.log("content: " + content);
	});

  	setInterval(autoStat, 5000);
});


