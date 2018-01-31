# outlink.js

External link handling

* Not bound to click event
* Requires jQuery
* Inlined external link icon (base64 = no image dependencies)
* Alt and title attributes pull in current domain name (with fallback)
* External sites links open in new window/tab **with** disclaimer and icon.
* External .gov or .mil links to open in new window/tab **without** disclaimer or icon.
* Added ```rel="noopener noreferrer"``` to prevent external site from manipulating ```window.opener``` object. [About rel=noopener article](https://mathiasbynens.github.io/rel-noopener/)

## Demo page

[https://communicatehealth.github.io/outlink.js/](https://communicatehealth.github.io/outlink.js/)
