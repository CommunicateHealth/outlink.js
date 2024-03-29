# outlink.js

External link handling

Demo page: [https://communicatehealth.github.io/outlink.js/](https://communicatehealth.github.io/outlink.js/)

## Install

```
npm install @communicatehealth/outlink.js
```

## About

- External site links (outside of current domain) show icon, disclaimer, and optionally open in new window/tab
- Explicit notice of new window/tab behavior is read aloud by assistive technology to satisfy [WCAG 2.1 – 3.3.2 On Input](https://www.w3.org/TR/WCAG21/#on-input)
- Adds `rel="noopener noreferrer"` to link tags for security and performance improvements:
  - [About rel=noopener](https://mathiasbynens.github.io/rel-noopener/)
    > If `window.opener` is set, a page can trigger a navigation in the opener regardless of security origin.
  - [The performance benefits of rel=noopener](https://jakearchibald.com/2016/performance-benefits-of-rel-noopener/)
    > Linking to another page using `target="_blank"` will run the new page on same process as your page. If the new page is executing expensive JS, your page's performance may suffer.
  - [[MDN]Link types: noreferrer](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types/noreferrer)
    > instructs the browser, when navigating to the target resource, to omit the Referer header and otherwise leak no referrer information
- Disclaimer text and alt text pulls in current domain name (with fallback to "this site")
- Inlined external link icon as SVG
- Vanilla JavaScript, no dependencies
- Adds `class="outlink"` to all processed links
- Looks for `class="outlink-ignore"` on link tag to skip processing
- Adding hex color value as `data-icon-color="#f012be` attribute on link will change color of external link icon to fuchsia
- Adding size value as `data-icon-size="16"` attribute on link will change the size of external link icon to 16px x 16px

## On the use of the `title` attribute

Several accessibility testing tools will flag the use of the `title` attribute by this script as an issue.
- [WebAIM WAVE](https://wave.webaim.org/) shows an alert for "Redundant title text"
- [ARC Toolkit](https://www.tpgi.com/arc-platform/arc-toolkit/) shows a warning for "`title` on non-interactive element"

This script conditionally injects an external link icon, with alt text of "This link is external to `{URL}`." This is available to the Accessibility Object Model and to assistive technology. 

![External link HTML code generated by outlink.js](https://user-images.githubusercontent.com/1215760/203572364-b77b333e-f266-4f54-b1ce-31d5a02c2079.jpg)

With alt text alone, sighted users, navigating with a mouse or pointer device, do not see the external link icon's text description. To provide context in this modality, this script also uses the `title` attribute with the same value as the alt attribute. This leads to two outcomes:
1. Sighted users, navigating with mouse can hover over the external link icon to see a tooltip of This link is external to `{URL}`."
2. Assistive technology that reads the `title` attribute may result in users encountering "This link is external to `{URL}`." twice

Using [TPGi's article "Using the HTML title attribute – updated March 2020"](https://www.tpgi.com/using-the-html-title-attribute-updated/) as a reference, this approach is not preventing assistive technology from finding the description. 

An alternative approach could be to create a bespoke tooltip that pulls the alt text value into a dynamically-generated element that is hidden from assistive technology. This would avoid use of the `title` attribute. This would also grow the size and scope of this library and introduce additional namespace, testing, and styling considerations.
