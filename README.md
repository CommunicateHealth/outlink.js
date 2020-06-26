# outlink.js

External link handling

- External site links (outside of current domain) show icon, disclaimer, and open in new window/tab
- Explicit notice of new window/tab behavior is read aloud by assistive technology to satisfy [WCAG 2.1 – 3.3.2 On Input](https://www.w3.org/TR/WCAG21/#on-input)
- Adds `rel="noopener noreferrer"` to link tags for security and performance improvements:
  - [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/)
    > If `window.opener` is set, a page can trigger a navigation in the opener regardless of security origin.
  - [The performance benefits of rel=noopener](https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/)
    > Linking to another page using `target="_blank"` will run the new page on same process as your page. If the new page is executing expensive JS, your page's performance may suffer.
- Disclaimer text and alt text pulls in current domain name (with fallback to "this site")
- Inlined external link icon as SVG
- Vanilla JavaScript, no dependencies
- Adds `class="outlink"` to all processed links
- Looks for `class="outlink-ignore"` on link tag to skip processing

## Demo page

[https://communicatehealth.github.io/outlink.js/](https://communicatehealth.github.io/outlink.js/)
