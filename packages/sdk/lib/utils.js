"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defer = void 0;
function defer() {
    var resolve;
    var reject;
    var promise = new Promise(function (res, rej) {
        resolve = res;
        reject = rej;
    });
    return {
        promise: promise,
        resolve: resolve,
        reject: reject
    };
}
exports.defer = defer;
