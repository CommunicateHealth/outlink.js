/* outlink.js: external link handling - https://github.com/communicatehealth/outlink.js (MIT) */
(function () {

    "use strict";

    var currentSite = "this site";
    if (location.hostname !== "") {
        currentSite = location.hostname.replace("www.", "");
    }

    var externalLinks = $("a[href^='http']").not($("a[href*='.gov'], .outlink-ignore, a[href*='" + currentSite + "']"));

    var govLinks = $("a[href*='.gov']").not($(".outlink-ignore, a[href*='" + currentSite + "']"));

    $.each(externalLinks, function ( index, value ) {
        $(this).attr({
            target: "_blank",
            rel: "noopener noreferrer"
        }).append("<img src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAQCAQAAACIaFaMAAAAPUlEQVR4AWMgHUz4D4FgdgOQBYVIEggphATzBEYMCZhqrEahCTcAIRaJBggb3agGFOdi8wJZEpgQvwTJAADRrod38NnIHQAAAABJRU5ErkJggg==\" style=\"padding-left: .25em;\" alt=\"External Link: You are leaving " + currentSite + "\" title=\"External Link: You are leaving " + currentSite + "\">");
    });

    $.each(govLinks, function ( index, value ) {
        $(this).attr({
            target: "_blank",
            rel: "noopener noreferrer"
        });
    });

})(this);
