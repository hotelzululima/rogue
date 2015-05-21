/// <reference path="common.js" />

// Finds all rogue elements exceeding the specified width.
function findRogueElements(width) {
    console.log('searching for rogue elements...');

    // if no width defined, use page width
    width = defaultFor(width, document.documentElement.offsetWidth);
        
    console.log('element max width: ' + width + 'px');

    // set up rogue element counter
    var count = 0;

    // select all elements in the document
    var nodeList = document.querySelectorAll('*');
    console.log('elements selected: ' + nodeList.length);

    // iterate over elements and compare element width with specified width value
    forEach(nodeList, function (index, element) {
        
        if (element.offsetWidth > width) {
            console.log('rogue element found!');

            // increase counter
            count += 1;

            //  log element details to console
            console.log("Element Id: " + element.id +
                        "\nParent: " + element.parentElement.id +
                        "\nClass: " + element.className +
                        "\nWidth: " + element.offsetWidth +
                        "\nTag: " + element.tagName +
                        "\nHeight: " + element.offsetHeight
                );

            // highlight element background
            element.style.backgroundColor = "#FF0000";

            // bring element to front
            element.style.zIndex = 99999;

            // reset element height if set to 0
            if (element.offsetHeight == 0) {
                element.style.height = "50px";
            }
        }

    });

    // display results
    if (count > 0) {
        console.log('Search Complete.\nYou have ' + count + ' rogue elements exceeding the specified width of {' + width + 'px}, these elements have been highlighted in red.');
    } else {
        console.log('Search Complete. No rogue elements have been found.')
    }
}

