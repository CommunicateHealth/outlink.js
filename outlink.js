// outlink.js 0.7.0 - https://git.io/JJCcF
(function outlink() {
  "use strict";

  var i,
    olIcon,
    olLinkList,
    olDisclaimer,
    olIconSize,
    olIconColor,
    olSelector,
    olSiteName,
    olClass = "outlink",
    olClassIgnore = "outlink-ignore",
    olIconStyle =
      "margin: 0 0.25rem; display: inline-block; vertical-align: baseline;",
    olNewWindow = false,
    Drupal = window.Drupal;

  window.outlink = outlink;

  // Stub out Drupal.t translate method if this is used on a non-Drupal site
  if (typeof Drupal === "undefined") {
    // eslint-disable-next-line no-param-reassign
    Drupal = {};
  }
  if (typeof Drupal.t === "undefined") {
    Drupal.t = function t(text) {
      return text;
    };
  }

  // Set disclaimer text after site name is known
  if (location.hostname === "") {
    olSiteName = Drupal.t("this site");
  } else {
    olSiteName = location.hostname.replace("www.", "");
  }

  // Set CSS selector with exclusions
  olSelector =
    "a[href^='http']" +
    ":not(." +
    olClassIgnore +
    ")" +
    ":not([href*='" +
    olSiteName +
    "'])";

  olDisclaimer = Drupal.t("This link is external to ") + olSiteName;

  if (olNewWindow === true) {
    olDisclaimer += Drupal.t(" and will open in a new browser window or tab");
  }
  olDisclaimer += ".";

  // Select all links with stated selector
  olLinkList = document.querySelectorAll(olSelector);

  if (olLinkList) {
    for (i = 0; i < olLinkList.length; i++) {
      addRel(olLinkList[i]);
      if (olNewWindow === true) {
        // open all external links in new windows
        addOpener(olLinkList[i]);
      } else {
        // prevent external links from opening in new windows
        removeOpener(olLinkList[i]);
      }

      // catch icon color overrides
      olIconColor = "#6b6b6b";
      if (olLinkList[i].dataset.iconColor) {
        olIconColor = olLinkList[i].dataset.iconColor;
      }

      // catch icon size overrides
      olIconSize = 12;
      if (olLinkList[i].dataset.iconSize) {
        olIconSize = olLinkList[i].dataset.iconSize;
      }

      // do not apply icons to links with images inside
      if (olLinkList[i].innerHTML.indexOf("<img") === -1) {
        // create Base64 icon to spec
        olIcon = buildIcon(olIconColor, olIconSize);

        // add icon to link
        addIcon(olLinkList[i], olIcon, olIconSize);
      }
    }
  }

  function addOpener(element) {
    element.setAttribute("target", "_blank");
  }

  function removeOpener(element) {
    element.removeAttribute("target");
  }

  function addRel(element) {
    element.setAttribute("rel", "noopener noreferrer");
  }

  function addIcon(element, icon, size) {
    // create icon image element
    olIcon = document.createElement("img");
    olIcon.setAttribute("src", icon);
    olIcon.setAttribute("style", olIconStyle);
    olIcon.setAttribute("alt", olDisclaimer);
    olIcon.setAttribute("title", olDisclaimer);
    olIcon.setAttribute("width", size);
    olIcon.setAttribute("height", size);

    // add image inside link
    element.appendChild(olIcon);
    element.classList.add(olClass);
  }

  function buildIcon(color, size) {
    var olIconCode =
      '<svg width="' +
      size +
      '" height="' +
      size +
      '" viewBox="0 0 768 768" xmlns="http://www.w3.org/2000/svg"><path fill="' +
      color +
      '" d="m640 640h-512v-510.09l128-1.91v-128h-256v768h768v-320h-128zm-256-640 128 128-192 192 128 128 192-192 128 128v-384z"/></svg>';

    // Base64 encode SVG for increased IE/Edge support
    olIconCode = "data:image/svg+xml;base64," + btoa(olIconCode);

    return olIconCode;
  }
})();
