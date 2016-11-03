/* outlink.js: external link handling - https://github.com/communicatehealth/outlink.js (MIT) */
(function(){

  "use strict";

  // Get all external links on current page, with exceptions
  var externalLinks = $('a[href^="http"]').not($('a[href*=".gov"], a[href*=".mil"]'));
  var govLinks = $('a[href*=".gov"], a[href*=".mil"]');

  var currentSite = "this site";
  if (location.hostname !== "") {
    currentSite = location.hostname;
    currentSite = currentSite.replace("www.", "");
  }

  for (var i = 0; i < externalLinks.length; ++i) {
    externalLinks[i].setAttribute("target", "_blank");
    externalLinks[i].setAttribute("rel", "noopener noreferrer");
    externalLinks[i].innerHTML += "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAQAAACIaFaMAAAAPUlEQVR4AWMgHUz4D4FgdgOQBYVIEggphATzBEYMCZhqrEahCTcAIRaJBggb3agGFOdi8wJZEpgQvwTJAADRrod38NnIHQAAAABJRU5ErkJggg==\" style=\"padding-left: .25em;\" alt=\"External Link: You are leaving "+ currentSite +"\" title=\"External Link: You are leaving "+ currentSite +"\">";
  }

  for (i = 0; i < govLinks.length; ++i) {
    externalLinks[i].setAttribute("target", "_blank");
    externalLinks[i].setAttribute("rel", "noopener noreferrer");
  }

})(this);




// (function(){

//   "use strict";

//   // Get all external links on current page, with exceptions
//   var pageLinks = $('a[href^="http"]').not($('a[href*=".gov"], a[href*=".mil"], a[href*="commonmediainc.com"], a[href*="hp-dev.communicatehealth.com"], a[href*="hp-pre-prod.communicatehealth.com"], a[href*="198.102.218.58"]').not('.outbound'));


//   var pageLinks = document.getElementsByTagName("a");

//   // Get hostname to use in title text, exceptions
//

//   // Loop through page links
//   for (var i = 0; i < pageLinks.length; ++i) {
//     var currentLink = pageLinks[i].href;

//     // if href contains http(s)://, add data-link="external"
//     var validExternal = currentLink.match(/^(http|https):[\/]/g);
//     if (validExternal) {
//       pageLinks[i].setAttribute("data-link", "external");
//     }

//     // if href contains .gov, change data-link="gov"
//     if (currentLink.indexOf(".gov") > -1) {
//       pageLinks[i].setAttribute("data-link", "gov");
//     }

//     // Exceptions (clear data-link)

//     // if href contains current site, empty data-link
//     if (currentLink.indexOf(currentSite) > -1) {
//       pageLinks[i].setAttribute("data-link", "");
//     }

//     // if href contains exception, empty data-link
//     if (currentLink.indexOf("example.com") > -1) {
//       pageLinks[i].setAttribute("data-link", "");
//     }

//     // if link tag has specific class, empty data-link
//     if (pageLinks[i].className.indexOf("outlink-ignore") > -1) {
//       pageLinks[i].setAttribute("data-link", "");
//     }

//     // Apply external link treatment

//     // if data-link="gov", add target="_blank", rel="noopener noreferrer"
//     if (pageLinks[i].getAttribute("data-link") === "gov") {
//       pageLinks[i].setAttribute("data-link", "");
//       pageLinks[i].setAttribute("target", "_blank");
//       pageLinks[i].setAttribute("rel", "noopener noreferrer");
//     }

//     // if data-link="external", add target="_blank", rel="noopener noreferrer", icon
//     if (pageLinks[i].getAttribute("data-link") === "external") {
//       pageLinks[i].setAttribute("data-link", "");
//       pageLinks[i].setAttribute("target", "_blank");
//       pageLinks[i].setAttribute("rel", "noopener noreferrer");
//       pageLinks[i].innerHTML += "<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAQAAACIaFaMAAAAPUlEQVR4AWMgHUz4D4FgdgOQBYVIEggphATzBEYMCZhqrEahCTcAIRaJBggb3agGFOdi8wJZEpgQvwTJAADRrod38NnIHQAAAABJRU5ErkJggg==\" style=\"padding-left: .25em;\" alt=\"External Link: You are leaving "+ currentSite +"\" title=\"External Link: You are leaving "+ currentSite +"\">";
//     }
//   }

// })(this);







// /*
//       External Links
//     */
//     var disclaimerLink = " <a href='//www.hhs.gov/disclaimer.html' title='Exit Disclaimer'>"
//       + "<img src='//www.hhs.gov/sites/all/themes/project_h/css/images/exit_disclaimer.png' alt='exit disclaimer icon' border='0' class='icon-image'>"
//       + "</a>";

//     $("a.external-link").after(disclaimerLink);



//     var outboundLinks = {

//     init: function() {
//       /*!
//        * Get all links that are outbound and not .gov or .mil sites (unless they have the outbound class)
//        */
//       this.links = $('a[href^="http"]').not($('a[href*=".gov"], a[href*=".mil"], a[href*="commonmediainc.com"], a[href*="hp-dev.communicatehealth.com"], a[href*="hp-pre-prod.communicatehealth.com"], a[href*="198.102.218.58"]').not('.outbound'));

//       /*!
//        * Bind a click to those links
//        */
//       if(this.links.length) {
//         this.appendOutboundIcon();
//         this.links.addClass('offsite');
//         this.links.on('click', this.outboundLinkClick.bind(this));
//       }
//     },

//     template: [
//       '<div data-popup>',
//       '<div class="popup-overlay"></div>',
//       '<div class="outbound-link-popup" data-popup-for="<%- href %>">',
//       '<a class="close-button-wrapper" href="#" data-stop>Close <span class="close-button">X</span></a>',
//       '<strong>This hyperlink will direct you to a non-governmental Website or application.</strong>',
//       '<p>The appearance of external hyperlinks does not constitute endorsement by the United States Department of Health & Human Services (HHS) of the hyperlinked Website or application, or the information, products or services contained therein. Such hyperlinks are provided consistent with the intended purpose of this HHS Website. Visitors to the hyperlinked Website or application will be subject to the Website or application\'s privacy policies. These practices may be different than those of this HHS Website.</p>',
//       '<div class="pop-hr-line"></div>',
//       '<strong>You are being taken to</strong>: <a target="_blank" href="<%- href %>"><%- href %></a>',
//       '</div>',
//       '</div>'
//     ],

//     /*!
//      * append outbound link icon
//      */
//     appendOutboundIcon: function() {
//       this.links.each(function() {
//         var $this = $(this);

//         /*!
//          * append icon if there isnt already an image inside the link
//          * <a href="/2020/exitDisclaimer"></a>
//          *
//          */
//         if($this[0].innerHTML.indexOf('<img') === -1 || $this.parents('#utility_icons').length === 0) {
//           $this
//             .wrap('<span></span>')
//             .parent()
//             .append('<a class="outbound-icon" href="/2020/exitDisclaimer/"><img alt="External Web Site Policy" src="/sites/all/themes/odphp/images/external_link_wh.gif"></a>');
//         }

//       });
//     },

