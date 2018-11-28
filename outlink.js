var currentSite = "this site";
var disclaimer = "External Link: You are leaving ";
var externalLinks;
var icon;
var j;

if (location.hostname !== "") {
  currentSite = location.hostname.replace("www.", "");
}

externalLinks = document.querySelectorAll("a[href^='http']:not(.outlink-ignore):not([href*='" + currentSite + "'])");
for (j = 0; j < externalLinks.length; j++) {
  addOpener(externalLinks[j]);
}

externalLinks = document.querySelectorAll("a[href^='http']:not([href*='.gov']):not([href*='.mil']):not(.outlink-ignore):not([href*='" +
    currentSite +
    "'])");
for (j = 0; j < externalLinks.length; j++) {
  addIcon(externalLinks[j]);
}

function addOpener(element) {
  element.setAttribute("target", "_blank");
  element.setAttribute("rel", "noopener noreferrer");
  element.setAttribute("title", disclaimer + currentSite);
}

function addIcon(element) {
  if (element.innerHTML.indexOf("<img") === -1) {
    icon = document.createElement("img");

    icon.setAttribute(
      "src",
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAQAAACIaFaMAAAAPUlEQVR4AWMgHUz4D4FgdgOQBYVIEggphATzBEYMCZhqrEahCTcAIRaJBggb3agGFOdi8wJZEpgQvwTJAADRrod38NnIHQAAAABJRU5ErkJggg=="
    );
    icon.setAttribute(
      "style",
      "padding-left: .25em; display: inline-block; vertical-align: text-bottom;"
    );
    icon.setAttribute("alt", disclaimer + currentSite);
    icon.setAttribute("title", disclaimer + currentSite);
    element.appendChild(icon);
  }
}
