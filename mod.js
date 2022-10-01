// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var e="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function r(){return e&&"symbol"==typeof Symbol.toStringTag}var t=Object.prototype.toString;var n=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var u=r()?function(e){var r,u,i,a,l;if(null==e)return t.call(e);u=e[o],l=o,r=null!=(a=e)&&n.call(a,l);try{e[o]=void 0}catch(r){return t.call(e)}return i=t.call(e),r?e[o]=u:delete e[o],i}:function(e){return t.call(e)};var i=Array.isArray?Array.isArray:function(e){return"[object Array]"===u(e)};function a(e){return"object"==typeof e&&null!==e&&!i(e)}var l=/./,c="function"==typeof Object.defineProperty?Object.defineProperty:null;var f,p=Object.defineProperty,b=Object.prototype,y=b.toString,s=b.__defineGetter__,v=b.__defineSetter__,d=b.__lookupGetter__,w=b.__lookupSetter__;f=function(){try{return c({},"x",{}),!0}catch(e){return!1}}()?p:function(e,r,t){var n,o,u,i;if("object"!=typeof e||null===e||"[object Array]"===y.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===y.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(d.call(e,r)||w.call(e,r)?(n=e.__proto__,e.__proto__=b,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),u="get"in t,i="set"in t,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&s&&s.call(e,r,t.get),i&&v&&v.call(e,r,t.set),e};var m=f;function g(e,r,t){m(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function j(e){return"boolean"==typeof e}var _=Boolean.prototype.toString;var h=r();function E(e){return"object"==typeof e&&(e instanceof Boolean||(h?function(e){try{return _.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===u(e)))}function S(e){return j(e)||E(e)}function T(){return new Function("return this;")()}g(S,"isPrimitive",j),g(S,"isObject",E);var O="object"==typeof self?self:null,A="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},P="object"==typeof B?B:null;var V=function(e){if(arguments.length){if(!j(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return T()}if(O)return O;if(A)return A;if(P)return P;throw new Error("unexpected error. Unable to resolve global object.")}(),x=V.document&&V.document.childNodes,C=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;function G(e){return null!==e&&"object"==typeof e}function L(e){var r,t,n,o;if(("Object"===(t=u(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=F.exec(n.toString()))return r[1]}return G(o=e)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":t}g(k,"REGEXP",F),g(G,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!i(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(G));var I="function"==typeof l||"object"==typeof C||"function"==typeof x?function(e){return L(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?L(e).toLowerCase():r};function M(e){return"function"===I(e)}function R(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}function U(e,r,t){if(!a(e))throw new TypeError(R("0jB3X",e));if(!M(t))throw new TypeError(R("0jB3Z",t));!function(e,r,t){if(!a(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if(!a(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if(!M(t.value))throw new TypeError("invalid argument. The `value` property of the property descriptor must be a function. Value: `"+t.value+"`.");function n(n){t.value=n,m(e,r,t)}t={configurable:void 0!==t.configurable&&t.configurable,enumerable:void 0!==t.enumerable&&t.enumerable,writable:void 0!==t.writable&&t.writable,value:t.value},m(e,r,{configurable:!0,enumerable:t.enumerable,get:function(){var r=t.value.call(e);return n(r),r},set:t.writable?n:void 0})}(e,r,{configurable:!0,enumerable:!0,writable:!1,value:t})}export{U as default};
//# sourceMappingURL=mod.js.map
