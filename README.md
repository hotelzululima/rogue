# Rogue
Rogue tracks down and highlights elements exceeding a ***specified*** width.

This can help in troubleshooting horizontal scrollbar issues. 

#### Installation ####

Rogue can be installed via the [Nuget Package Manager](https://www.nuget.org/packages/Rogue/) by using the following command

    PM> Install-Package Rogue 
    
Once installed, add the following to the head section or before the closing body tag of your page.
```html
<script src="scripts/rogue.js"></script>
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


