(function outlink () {

  "use strict";

  var currentSite = "this site",
    disclaimer = "External Link: You are leaving ",
    externalLinks,
    icon,
    j;

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

  function addOpener (element) {

    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener noreferrer");
    element.setAttribute("title", disclaimer + currentSite);

  }

  function addIcon (element) {

    if (element.innerHTML.indexOf("<img") === -1) {

      icon = document.createElement("img");

      icon.setAttribute(
        "src",
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCA3NjggNzY4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGZpbGw9IiM2NjYiIGQ9Im02NDAgNjQwaC01MTJ2LTUxMC4wOWwxMjgtMS45MXYtMTI4aC0yNTZ2NzY4aDc2OHYtMzIwaC0xMjh6bS0yNTYtNjQwIDEyOCAxMjgtMTkyIDE5MiAxMjggMTI4IDE5Mi0xOTIgMTI4IDEyOHYtMzg0eiIvPjwvc3ZnPgo="
      );
      icon.setAttribute(
        "style",
        "padding-left: .25em; display: inline-block; vertical-align: middle; width: .65em;"
      );
      icon.setAttribute("alt", disclaimer + currentSite);
      icon.setAttribute("title", disclaimer + currentSite);
      element.appendChild(icon);

    }

  }

}());
