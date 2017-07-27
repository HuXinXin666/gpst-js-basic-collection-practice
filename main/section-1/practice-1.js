'use strict';

module.exports = function collectSameElements(collectionA, collectionB) {
    var newarr = [];
    for(var i in collectionA){
        if(collectionB.indexOf(collectionA[i]) >= 0){
            newarr.push(collectionA[i]);
        }
    }
    return newarr;
}
