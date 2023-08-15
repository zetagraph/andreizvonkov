---
title: Using Chrome’s Local Overrides for design and performance optimizations
date: '2018-07-12'
description: Chrome (65) DevTools has a great new feature called Local Overrides. It allows overriding CSS, JS and DOM on any live site.
---

Chrome (65) DevTools has a great new feature called **Local Overrides**. It allows overriding CSS, JS and DOM on any live site.

We use DevTools to tweak styles, test layout changes right in the browser all the time. With Local Overrides we can keep these changes even if live page reloads.

Projects might have variety of dependencies that can take a while to set up. There could be a mismatch of content and images on local and live environments. Local Overrides allows you to tweak styles and test performance right on the live site.

### Enabling Local Overrides

Open the **Sources** panel and select the **Overrides** tab.

![](https://cdn-images-1.medium.com/max/2614/1*YOcKteNHIlZNStc6mndOOQ.jpeg)

**Select a directory** where you want to save your changes and allow Chrome to access it.

![](https://cdn-images-1.medium.com/max/2614/1*dCf92sygUiPd0-LzLvhOZw.jpeg)

Make sure **Local Overrides **is \*\*\*\*checked. Network tab should show an indicator.

![](https://cdn-images-1.medium.com/max/2828/1*ted-Jn7vKC9EKtH0gMIxHA.jpeg)

You can start modifying CSS in the styles panel or trough the sources panel. All changes will be saved to a local copy of live site’s CSS.

![](https://cdn-images-1.medium.com/max/2828/1*Jbyfa9Ve7FhNzZ8S7ZfVMg.jpeg)

You can also see a diff of your local modifications by Opening the Changes panel (⌘ ⇧ P).

![](https://cdn-images-1.medium.com/max/2828/1*xMFrnBFjQpzZFiwdPAnjUg.jpeg)

### Performance Optimizations with Local Overrides

Local Overrides can also help with **Performance Optimization**. You can test loading order of scripts, update HTML and assets right in the live environments. Check out [these](https://youtu.be/UOn0b5kn3jk) [short](https://youtu.be/yRrrL0Mg1pM) videos by Harry Roberts and Umar Hansa. They show practical examples of how Local Overrides can help improve performance.

Local Overrides allows you to update CSS, JS, and HTML of any live site in real time even if page reloads. Changes are saved in local files and override live environment. Local Overrides is great for quick style and layout tweaks as well as testing of site’s performance.
