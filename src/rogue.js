// Finds all rouge elements exceeding the page width.
function findRogueElements() {

    var docWidth = document.documentElement.offsetWidth;
    var count = 0;

    [].forEach.call(document.querySelectorAll('*'),
      function (element) {
          if (element.offsetWidth > docWidth) {
              count += 1;

              console.log("Element Id: " + element.id +
                          "\nParent: " + element.parentElement.id +
                          "\nClass: " + element.className +
                          "\nWidth: " + element.offsetWidth +
                          "\nTag: " + element.tagName +
                          "\nHeight: " + element.offsetHeight
                  );

              //set element background to highlight
              element.style.backgroundColor = "#FF0000";
              
              //bring element to front
              element.style.zIndex = 99999;

              //reset element height if set to 0
              if (element.offsetHeight == 0) {
                  element.style.height = "50px";
              }
          }
      }
    );

    if (count > 0) {
        alert('You have ' + count + ' rogue elements exceeding your page width, these elements have been highlighted.');
    }
}

