/* outlink.js: external link handling - https://github.com/communicatehealth/outlink.js (MIT) */
(function(){

  "use strict";

  // Get all links on current page
  var pageLinks = document.getElementsByTagName("a");

  // Get hostname to use in title text, exceptions
  var currentSite = location.hostname;
  if (currentSite === "") {
    currentSite = "this site";
  }
  currentSite = currentSite.replace("www.", "");

  // Loop through page links
  for (var i = 0; i < pageLinks.length; ++i) {
    var currentLink = pageLinks[i].href;

    // if href contains http(s)://, add data-link="external"
    var validExternal = currentLink.match(/^(http|https):[\/]/g);
    if (validExternal) {
      pageLinks[i].setAttribute("data-link", "external");
    }

    // if href contains .gov, change data-link="gov"
    if (currentLink.indexOf(".gov") > -1) {
      pageLinks[i].setAttribute("data-link", "gov");
    }

    // Exceptions (clear data-link)

    // if href contains current site, empty data-link
    if (currentLink.indexOf(currentSite) > -1) {
      pageLinks[i].setAttribute("data-link", "");
    }

    // if href contains exception, empty data-link
    if (currentLink.indexOf("example.com") > -1) {
      pageLinks[i].setAttribute("data-link", "");
    }

    // if link tag has specific class, empty data-link
    if (pageLinks[i].className.indexOf("outlink-ignore") > -1) {
      pageLinks[i].setAttribute("data-link", "");
    }

    // Apply external link treatment

    // if data-link="gov", add target="_blank", rel="noopener noreferrer"
    if (pageLinks[i].getAttribute("data-link") === "gov") {
      pageLinks[i].setAttribute("data-link", "");
      pageLinks[i].setAttribute("target", "_blank");
      pageLinks[i].setAttribute("rel", "noopener noreferrer");
    }

    // if data-link="external", add target="_blank", rel="noopener noreferrer", icon
    if (pageLinks[i].getAttribute("data-link") === "external") {
      pageLinks[i].setAttribute("data-link", "");
      pageLinks[i].setAttribute("target", "_blank");
      pageLinks[i].setAttribute("rel", "noopener noreferrer");
      pageLinks[i].innerHTML += "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAQAAACIaFaMAAAAPUlEQVR4AWMgHUz4D4FgdgOQBYVIEggphATzBEYMCZhqrEahCTcAIRaJBggb3agGFOdi8wJZEpgQvwTJAADRrod38NnIHQAAAABJRU5ErkJggg==\" style=\"padding-left: .25em;\" alt=\"External Link: You are leaving "+ currentSite +"\" title=\"External Link: You are leaving "+ currentSite +"\">";
    }
  }

})(this);
