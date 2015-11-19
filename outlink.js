// Get hostname to use in alt/title text
var url = location.hostname;
if (url === "") { url = "this site"; }
url = url.replace("www.", "");

// Handle external, non-gov links (new window, disclaimer/icon)
var external = document.getElementsByClassName('external');
for (var i = 0; i < external.length; ++i) {
  var item = external[i];
  item.setAttribute("target", "_blank");
  item.innerHTML += "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAQAAACIaFaMAAAAPUlEQVR4AWMgHUz4D4FgdgOQBYVIEggphATzBEYMCZhqrEahCTcAIRaJBggb3agGFOdi8wJZEpgQvwTJAADRrod38NnIHQAAAABJRU5ErkJggg==\" style=\"padding-left: .25em;\" alt=\"External Link: You are leaving "+ url +"\" title=\"External Link: You are leaving "+ url +"\">";
}

// Handle .gov links (new window, no disclaimer)
var gov = document.getElementsByClassName('gov');
for (var i = 0; i < gov.length; ++i) {
  var item = gov[i];
  item.setAttribute("target", "_blank");
}
