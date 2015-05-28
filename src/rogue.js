/**
 * Rogue v1.1.0
 * by Enki Matt - http://github.com/enkimatt
 *
 * @license http://creativecommons.org/licenses/by/2.5/
 * - Free for use in both personal and commercial projects
 * - Attribution requires leaving author name, author link, and the license info intact
 */

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

            // bring element to front ** z-index only works on positioned elements **
            element.style.zIndex = 9999;

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

function forEach(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};

function defaultFor(arg, val) {
    return typeof arg !== 'undefined' ? arg : val;
}
