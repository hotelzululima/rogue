function forEach(array, callback, scope) {
    for (var i = 0; i < array.length; i++) {
        callback.call(scope, i, array[i]);
    }
};

function defaultFor(arg, val) {
    return typeof arg !== 'undefined' ? arg : val;
}
