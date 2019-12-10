# outlink.js

External link handling

- Vanilla JavaScript
- Inlined external SVG link icon
- Alt and title attributes pull in current domain name (with fallback)
- External sites links open in new window/tab **with** disclaimer and icon.
- External .gov or .mil links to open in new window/tab **without** disclaimer or icon.
- Adds `rel="noopener noreferrer"` to link tags for security and performance improvements:
  - [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/)
    > If `window.opener` is set, a page can trigger a navigation in the opener regardless of security origin.
  - [The performance benefits of rel=noopener](https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/)
    > Linking to another page using `target="_blank"` will run the new page on same process as your page. If the new page is executing expensive JS, your page's performance may suffer.
- New window/tab notice is read aloud by assistive technology to satisfy [WCAG 2.1 – 3.3.2 On Input](https://www.w3.org/TR/WCAG21/#on-input)

![Animated GIF of VoiceOver on macOS reading links formatted with outlink.js](https://user-images.githubusercontent.com/1215760/70551354-49b2dd00-1b6f-11ea-8b6b-95e2810104e6.gif)

## Demo page

[https://communicatehealth.github.io/outlink.js/](https://communicatehealth.github.io/outlink.js/)
