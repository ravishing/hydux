!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.persist=e():(t.hydux=t.hydux||{},t.hydux.persist=e())}("undefined"!=typeof self?self:this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=17)}({1:function(t,e,n){"use strict";function r(t,e){for(var n=Object.keys(e),r=n.length;r--;){var o=n[r];t[o]=e[o]}return t}function o(t,e){return r(r(a(t)?{}:new t.constructor,t),e)}function u(t,e,n){var r=a(n)?{}:new n.constructor;return 0===t.length?e:(r[t[0]]=1<t.length?u(t.slice(1),e,n[t[0]]):e,o(n,r))}function i(t,e){for(var n=t.length,r=0;r<n;r++)e=e[t[r]];return e}function c(t){return"function"==typeof t}Object.defineProperty(e,"__esModule",{value:!0});var f=function(t){return void 0!==t&&null!==t},a=function(t){return!f(t.constructor)||t.constructor===Object};e.set=r,e.merge=o,e.setDeep=u,e.get=i,e.isFn=c,e.noop=function(t){return t}},17:function(t,e,n){"use strict";function r(t){void 0===t&&(t={});var e,n=t.store,r=void 0===n?localStorage:n,i=t.serialize,c=void 0===i?JSON.stringify:i,f=t.deserialize,a=void 0===f?JSON.parse:f,s=t.debounce,p=void 0===s?50:s,l=t.key,d=void 0===l?"hydux-persist":l;return function(t){return function(n){return t(o({},n,{init:function(){var t=n.init();t instanceof Array||(t=[t,u.default.none]);var e=r.getItem(d);return e&&(t[0]=a(e)),[t[0],t[1]]},onUpdate:function(t){n.onUpdate&&n.onUpdate(t),e&&clearTimeout(e);var o=function(){return r.setItem(d,c(t.nextAppState))};e=setTimeout(o,p)}}))}}}var o=this&&this.__assign||Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++){e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t};Object.defineProperty(e,"__esModule",{value:!0});var u=n(2);e.default=r},2:function(t,e,n){"use strict";function r(t,e,n,r){return t?(u.isFn(e)&&(r=n,n=e,e=void 0),[function(o){try{var u=t(e);u&&n&&n(u)}catch(t){r&&r(t)}}]):[]}function o(t,e,n,r){return t?(u.isFn(e)&&(r=n,n=e,e=void 0),[function(o){t(e).then(n).catch(r)}]):[]}Object.defineProperty(e,"__esModule",{value:!0});var u=n(1);e.default={none:[],ofPromise:o,ofFn:r,ofSub:function(t){return[t]},batch:function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Array.prototype.concat;return n.apply([],n.apply([],t))},map:function(t,e){return e.map(function(e){return function(n){return e(t(n))}})}}}})});
//# sourceMappingURL=hydux.persist.js.map