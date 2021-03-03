---
title: Using Lighthouse DevTools to optimize performance
date: "2018-05-22"
description: As a Front-end developer with some background in design, it pains me to see how often "design" is being understood as something separate from "functionality".
---

>  Design is not just what it looks like and feels like. Design is how it works.
– Steve Jobs

As a Front-end developer with some background in design, it pains me to see how often  "design" is being understood as something separate from "functionality".

Images, videos, graphics, fonts, animations and scrolling effects can be essential to sites we are building. Yet we should not overlook the impact these things might have on browser’s performance. Our main goal is to deliver fast and performant experiences regardless of user devices or network capability.

If we are not cautious with our choices we can end up with bloated codebases, heavy imagery, blocking styles and scripts. This can prevent the browser from delivering optimal experiences to site’s visitors, especially if they are on mobile.
>  53% of mobile users abandon sites that take longer than 3 seconds to load
[Source: Google DoubleClick blog]

### In the modern Front End development process we should be considering these as essential parts of the Design:

* Size of the DOM and assets (images/graphics)

* CSS Complexity

* Scrolling smoothness and Animation FPS

* Time to interactive, Speed of visual progress, User input response time

* Parse time, Execution time and Heap size of JavaScript
>  19 seconds is the average time a mobile web page takes to load on a 3G connection [Source: Google DoubleClick blog]



Fortunately, there are tools that identify performance issues and help address them.

## Chrome’s Lighthouse Audit

[**Lighthouse](https://github.com/GoogleChrome/lighthouse)** is an open-source, tool that provides a comprehensive set of tests for measuring the quality of web pages. It will give you tips on improving Performance, Accessibility, SEO, Best Practices and Progressive Web App (PWA).

![DevTools - Audit Panel](https://cdn-images-1.medium.com/max/4028/1*3IjOUe_2lLMr7y8_guW5jQ.png)

To use Lighthouse, right click and select "Inspect" on any webpage. You should see the "Audits" tab in your DevTools panel (Chrome 60 and up).

## Let’s focus on images

Optimizing images often yields the greatest performance improvements.
>  **Images are still the number one cause of bloat on the web**. Images take up massive amounts of internet bandwidth because they often have large file sizes.[Addy Osmani, [Software Engineer Google](https://www.linkedin.com/in/osmani)]

Lighthouse will identify images that can be optimized and sized depending on screen resolution. It will also identify images that are off screen (below the fold) and can be lazy loaded.

![](https://cdn-images-1.medium.com/max/5940/1*BohapWG4brsZlC_VqKYd_w.png)

We are not always in control of how images are being added to the site. They can be uploaded by content creators through a CMS e.g. Drupal. Our priority is to setup appropriate workflows so that the images are properly sized, use appropriate resolutions and lose any unnecessary metadata before being served to the browser.

### Using Image Optimization Tools and Processes

To manually optimize images we can use [**ImageOptim](https://imageoptim.com) **and [**SVGOMG](https://jakearchibald.github.io/svgomg)** for vectors.

![ImageOptim GUI](https://cdn-images-1.medium.com/max/2056/1*9aJ56t8rlHzkkg0TkcnblA@2x.png)

To make it easier, we can automate these optimization processes incorporating an [**Imagemin](https://github.com/imagemin/imagemin)** into our build process through [Gulp](https://www.npmjs.com/package/gulp-imagemin) or [Webpack](https://www.npmjs.com/package/imagemin-webpack-plugin).

### Properly sizing images

Use [**responsive images](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) with `<img srcset>`, `<picture>` and Media Queries to load appropriate sizes depending on device resolution.

### Using a CDN

By using a **CDN** like [Cloudinary](https://cloudinary.com/) (has a free tier), Imgix or Akamai. You will basically delegate image optimization process to these services.

### Lazy-load offscreen images

Offscreen images, e.g. images below the fold or carrousel images not in the view, should be lazy-loaded to improve page load speed and time to interactive.
>  70% of mobile pages take nearly 7 seconds for the visual content above the fold to display on the screen. [Source: Think with Google]

With the help of an [IntersectionObserver](https://developers.google.com/web/updates/2016/04/intersectionobserver) we can intelligently determine when an image in the DOM enters the visible viewport and only load images that are are actually visible. There are libraries that can easily be incorporated for this purpose: [lazysizes](https://github.com/aFarkas/lazysizes), [lozad.js](https://github.com/ApoorvSaxena/lozad.js), [blazy](https://github.com/dinbror/blazy), [yall.js](https://github.com/malchata/yall.js).

### Alternative image formats

[**WebP](https://developers.google.com/speed/webp)** is a recent image format from Google aiming to offer lower file-sizes. WebP’s compression can be 25–34% smaller than JPEG and PNG. Browser [support](https://caniuse.com/#feat=webp) is at around 74% at this point. If you are using animated GIFs consider serving them as videos <H.264/MPEG-4> as that can shave 80% or more off a GIF’s file-size.

For a very in-depth review and many other practical tips about images on the web check out the [**Essential Image Optimization](https://images.guide)** eBook by Addy Osmani

Lighthouse helps you identify issues that could slow down your website and gives you practical tips on how to address them. Optimizing images leads to a faster, cleaner and more performant web. Improve performance and you will improving design.
