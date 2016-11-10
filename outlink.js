/* outlink.js: external link handling - https://github.com/communicatehealth/outlink.js (MIT) */
(function () {

    "use strict";

    // Capture site name for use in exceptions, alt/title attributes
    var currentSite = "this site";
    if (location.hostname !== "") {
        currentSite = location.hostname.replace("www.", "");
    }

    // Collect non-.gov external links, with exclusions
    var externalLinks = $("a[href^='http']").not($("a[href*='.gov'], .outlink-ignore, a[href*='" + currentSite + "']"));

    // Collect .gov external links, with exclusions
    var govLinks = $("a[href*='.gov']").not($(".outlink-ignore, a[href*='" + currentSite + "']"));

    // Loop non-.gov external links and apply treatment
    $.each(externalLinks, function ( index, value ) {
        var $this = $(this);
        $(this).attr({
            target: "_blank",
            rel: "noopener noreferrer"
        });

        // if link contains an image, do not append icon
        if ($this[0].innerHTML.indexOf('<img') === -1) {
            $(this).append("<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAQAAACIaFaMAAAAPUlEQVR4AWMgHUz4D4FgdgOQBYVIEggphATzBEYMCZhqrEahCTcAIRaJBggb3agGFOdi8wJZEpgQvwTJAADRrod38NnIHQAAAABJRU5ErkJggg==\" style=\"padding-left: .25em;\" alt=\"External Link: You are leaving " + currentSite + "\" title=\"External Link: You are leaving " + currentSite + "\">");
        }
    });

    // Loop .gov links and apply treatment
    $.each(govLinks, function ( index, value ) {
        $(this).attr({
            target: "_blank",
            rel: "noopener noreferrer"
        });
    });

})(this);
