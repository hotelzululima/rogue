# Rogue
Rogue tracks down and highlights elements exceeding a ***specified*** width.

This can help in troubleshooting horizontal scrollbar issues. 

#### Usage ####

Find all elements exceeding the width of the page.

        $(function () {
            // get page width
            var docWidth = document.documentElement.offsetWidth;

            // track down rogue elements
            findRogueElements(docWidth);

        });

Find all elements exceeding a certain element's width, in this case the *footer* element.

        $(function () {
            // get footer width
            var footerWidth = document.getElementById("footer");

            // track down rogue elements
            findRogueElements(footerWidth);

        });

If **no** *width* is specified, Rogue will default to the document.offsetWidth (page width).

        $(function () {
            // track down rogue elements
            findRogueElements();
        });

#### File Structure ####

The source is currently broken into two files, common.js and rogue.js. The common.js file contains helper functions. 
If you would prefer to have it all in one file, copy and paste the helper functions to rogue.js.
