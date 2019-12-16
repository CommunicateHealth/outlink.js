(function outlink() {
  "use strict";

  var linkClass = "outlink",
    linkClassIgnore = "outlink-ignore",
    linkIcon,
    linkIconData =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCA3NjggNzY4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiM2NjYiIGQ9Im02NDAgNjQwaC01MTJ2LTUxMC4wOWwxMjgtMS45MXYtMTI4aC0yNTZ2NzY4aDc2OHYtMzIwaC0xMjh6bS0yNTYtNjQwIDEyOCAxMjgtMTkyIDE5MiAxMjggMTI4IDE5Mi0xOTIgMTI4IDEyOHYtMzg0eiIvPjwvc3ZnPgo=",
    linkIconStyle =
      "margin: 0 0.25rem; display: inline-block; vertical-align: baseline;",
    linkIconWidth = "12",
    linkIconHeight = "12",
    linkSelector =
      "a[href^='http']:not(." +
      linkClassIgnore +
      "):not([href*='" +
      siteName +
      "'])",
    linkList,
    siteName = "this site",
    disclaimerLink = "/disclaimers",
    disclaimerContainer = document.getElementById("exit-disclaimer"),
    disclaimerBlock = false,
    disclaimerTextBlock,
    disclaimerTextInline,
    i;

  if (location.hostname !== "") {
    siteName = location.hostname.replace("www.", "");
  }

  disclaimerTextInline =
    "This link is external to " +
    siteName +
    " and will open in a new browser window or tab.";

  disclaimerTextBlock =
    '<p>This icon <img src="' +
    linkIconData +
    '" width="' +
    linkIconWidth +
    '" height="' +
    linkIconHeight +
    '" alt="External link icon" style="' +
    linkIconStyle +
    '"> indicates a link that is external to ' +
    siteName +
    ' which will open in a new window or tab. <a href="' +
    disclaimerLink +
    '">View full disclaimer</a>.</p>';

  linkList = document.querySelectorAll(linkSelector);

  if (linkList) {
    for (i = 0; i < linkList.length; i++) {
      addOpener(linkList[i]);

      // do not apply icons to links with images inside
      if (linkList[i].innerHTML.indexOf("<img") === -1) {
        addIcon(linkList[i]);
        disclaimerBlock = true;
      }
    }

    // if icons are displayed on page, show disclaimer text
    if (disclaimerContainer && disclaimerBlock === true) {
      showDisclaimer();
    }
  }

  function addOpener(element) {
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener noreferrer");
  }

  function addIcon(element) {
    linkIcon = document.createElement("img");
    linkIcon.setAttribute("src", linkIconData);
    linkIcon.setAttribute("style", linkIconStyle);
    linkIcon.setAttribute("alt", disclaimerTextInline);
    linkIcon.setAttribute("title", disclaimerTextInline);
    linkIcon.setAttribute("width", linkIconWidth);
    linkIcon.setAttribute("height", linkIconHeight);
    element.appendChild(linkIcon);
    element.classList.add(linkClass);
  }

  function showDisclaimer() {
    disclaimerContainer.innerHTML = disclaimerTextBlock;
  }
})();
