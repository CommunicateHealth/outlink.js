# outlink.js

External link handling

- Not bound to click event
- Vanilla JavaScript
- Inlined external link icon (base64 = no image dependencies)
- Alt and title attributes pull in current domain name (with fallback)
- External sites links open in new window/tab **with** disclaimer and icon.
- External .gov or .mil links to open in new window/tab **without** disclaimer or icon.
- Adds `rel="noopener noreferrer"` to link tags for security and performance improvements:
  - [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/)
    > If `window.opener` is set, a page can trigger a navigation in the opener regardless of security origin.
  - [The performance benefits of rel=noopener](https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/)
    > Linking to another page using `target="_blank"` will run the new page on same process as your page. If the new page is executing expensive JS, your page's performance may suffer.

## Demo page

[https://communicatehealth.github.io/outlink.js/](https://communicatehealth.github.io/outlink.js/)
