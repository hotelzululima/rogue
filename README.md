# Rogue
Rogue tracks down and highlights elements exceeding a ***specified*** width.

This can help in troubleshooting horizontal scrollbar issues. 

#### Installation ####

Rogue can be installed via the Nuget Package Manager by using the following command

    PM> Install-Package Rogue 
    
Once installed, add the following to the head section or before the closing body tag of your page.
```html
<script src="js/common.js"></script>
<script src="js/rogue.js"></script>
```

#### Usage ####

Find all elements exceeding the width of the page.
```javascript
$(function () {
    // get page width
    var docWidth = document.documentElement.offsetWidth;
    // track down rogue elements
    findRogueElements(docWidth);
});
```

Find all elements exceeding a certain element's width, in this case the *footer* element.
```javascript
$(function () {
    // get footer width
    var footerWidth = document.getElementById("footer");

   // track down rogue elements
   findRogueElements(footerWidth);

});
```

If **no** *width* is specified, Rogue will default to the document.offsetWidth (page width).
```javascript
$(function () {
    // track down rogue elements
    findRogueElements();
});
```
#### File Structure ####

The source is currently broken into two files, common.js and rogue.js. The common.js file contains helper functions. 
If you would prefer to have it all in one file, copy and paste the helper functions to rogue.js.
