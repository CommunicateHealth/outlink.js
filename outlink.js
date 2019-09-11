(function outlink() {
  "use strict";

  var linkClass = "outlink",
    linkClassIgnore = "outlink-ignore",
    linkIcon,
    linkIconData =
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCA3NjggNzY4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiM2NjYiIGQ9Im02NDAgNjQwaC01MTJ2LTUxMC4wOWwxMjgtMS45MXYtMTI4aC0yNTZ2NzY4aDc2OHYtMzIwaC0xMjh6bS0yNTYtNjQwIDEyOCAxMjgtMTkyIDE5MiAxMjggMTI4IDE5Mi0xOTIgMTI4IDEyOHYtMzg0eiIvPjwvc3ZnPgo=",
    linkIconStyle =
      "padding-left: 0.25rem; margin-right: 0.125rem; display: inline-block; vertical-align: middle;",
    linkIconWidth = "12",
    linkIconHeight = "12",
    linkSelector =
      "a[href^='http']:not(." +
      linkClassIgnore +
      "):not([href*='" +
      siteName +
      "'])",
    linkSelectorIcon =
      linkSelector + ":not([href*='.gov']):not([href*='.mil'])",
    linkList,
    linkListIcon,
    siteName = "this site",
    disclaimerLink = "/disclaimers",
    disclaimerContainer = document.getElementById("exit-disclaimer"),
    disclaimerBlockText,
    disclaimerInlineText,
    i;

  if (location.hostname !== "") {
    siteName = location.hostname.replace("www.", "");
  }

  disclaimerInlineText = "External Link: You are leaving " + siteName;

  disclaimerBlockText =
    '<p>This icon (<img src="' +
    linkIconData +
    '" width="' +
    linkIconWidth +
    '" height="' +
    linkIconHeight +
    '" alt="External link icon">) means that you are leaving ' +
    siteName +
    ' and entering an external website. <a href="' +
    disclaimerLink +
    '">View full disclaimer</a>.</p>';

  linkList = document.querySelectorAll(linkSelector);
  linkListIcon = document.querySelectorAll(linkSelectorIcon);

  if (linkList) {
    for (i = 0; i < linkList.length; i++) {
      addOpener(linkList[i]);
    }
  }

  if (linkListIcon) {
    if (disclaimerContainer) {
      showDisclaimer();
    }

    for (i = 0; i < linkListIcon.length; i++) {
      addIcon(linkListIcon[i]);
    }
  }

  function addOpener(element) {
    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener noreferrer");
    element.setAttribute("title", disclaimerInlineText + siteName);
  }

  function addIcon(element) {
    if (element.innerHTML.indexOf("<img") === -1) {
      linkIcon = document.createElement("img");

      linkIcon.setAttribute("src", linkIconData);
      linkIcon.setAttribute("style", linkIconStyle);
      linkIcon.setAttribute("alt", disclaimerInlineText + siteName);
      linkIcon.setAttribute("width", linkIconWidth);
      linkIcon.setAttribute("height", linkIconHeight);
      element.appendChild(linkIcon);
      element.classList.add(linkClass);
    }
  }

  function showDisclaimer() {
    disclaimerContainer.innerHTML = disclaimerBlockText;
  }
})();
