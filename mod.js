// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function e(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}var r=e();var t=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function a(e,r){return null!=e&&i.call(e,r)}var n="function"==typeof Symbol?Symbol:void 0,o="function"==typeof n?n.toStringTag:"";var c=r&&"symbol"==typeof Symbol.toStringTag?function(e){var r,i,n;if(null==e)return t.call(e);i=e[o],r=a(e,o);try{e[o]=void 0}catch(r){return t.call(e)}return n=t.call(e),r?e[o]=i:delete e[o],n}:function(e){return t.call(e)};var s=Array.isArray?Array.isArray:function(e){return"[object Array]"===c(e)};function l(e){return"object"==typeof e&&null!==e&&!s(e)}var p=/./,u="function"==typeof Object.defineProperty?Object.defineProperty:null;var f=Object.defineProperty;function g(e){return"number"==typeof e}function d(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function h(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+d(a):d(a)+e,i&&(e="-"+e)),e}var w=String.prototype.toLowerCase,b=String.prototype.toUpperCase;function v(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!g(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=h(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=h(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===b.call(e.specifier)?b.call(t):w.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function y(e){return"string"==typeof e}var m=Math.abs,_=String.prototype.toLowerCase,E=String.prototype.toUpperCase,k=String.prototype.replace,x=/e\+(\d)$/,S=/e-(\d)$/,j=/^(\d+)$/,V=/^(\d+)e/,T=/\.0$/,$=/\.0*e/,F=/(\..*[^0])0*e/;function A(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!g(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":m(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=k.call(t,F,"$1e"),t=k.call(t,$,"e"),t=k.call(t,T,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=k.call(t,x,"e+0$1"),t=k.call(t,S,"e-0$1"),e.alternate&&(t=k.call(t,j,"$1."),t=k.call(t,V,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===E.call(e.specifier)?E.call(t):_.call(t)}function I(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function C(e,r,t){var i=r-e.length;return i<0?e:e=t?e+I(i):I(i)+e}var R=String.fromCharCode,O=isNaN,P=Array.isArray;function Z(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function W(e){var r,t,i,a,n,o,c,s,l;if(!P(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(y(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Z(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,O(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,O(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=v(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!O(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=O(n)?String(i.arg):R(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=A(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=h(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=C(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var G=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function N(e){var r,t,i,a;for(t=[],a=0,i=G.exec(e);i;)(r=e.slice(a,G.lastIndex-i[0].length)).length&&t.push(r),t.push(L(i)),a=G.lastIndex,i=G.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function U(e){return"string"==typeof e}function X(e){var r,t;if(!U(e))throw new TypeError(X("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[N(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return W.apply(null,r)}var B,M=Object.prototype,z=M.toString,q=M.__defineGetter__,D=M.__defineSetter__,H=M.__lookupGetter__,J=M.__lookupSetter__;B=function(){try{return u({},"x",{}),!0}catch(e){return!1}}()?f:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===z.call(e))throw new TypeError(X("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===z.call(t))throw new TypeError(X("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(H.call(e,r)||J.call(e,r)?(i=e.__proto__,e.__proto__=M,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&q&&q.call(e,r,t.get),o&&D&&D.call(e,r,t.set),e};var K=B;function Q(e,r,t){K(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function Y(e){return"boolean"==typeof e}var ee=e();function re(){return ee&&"symbol"==typeof Symbol.toStringTag}var te=Object.prototype.toString;var ie="function"==typeof Symbol?Symbol:void 0,ae="function"==typeof ie?ie.toStringTag:"";var ne=re()?function(e){var r,t,i;if(null==e)return te.call(e);t=e[ae],r=a(e,ae);try{e[ae]=void 0}catch(r){return te.call(e)}return i=te.call(e),r?e[ae]=t:delete e[ae],i}:function(e){return te.call(e)},oe=Boolean,ce=Boolean.prototype.toString;var se=re();function le(e){return"object"==typeof e&&(e instanceof oe||(se?function(e){try{return ce.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===ne(e)))}function pe(e){return Y(e)||le(e)}function ue(){return new Function("return this;")()}Q(pe,"isPrimitive",Y),Q(pe,"isObject",le);var fe="object"==typeof self?self:null,ge="object"==typeof window?window:null,de="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},he="object"==typeof de?de:null,we="object"==typeof globalThis?globalThis:null;var be=function(e){if(arguments.length){if(!Y(e))throw new TypeError(X("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return ue()}if(we)return we;if(fe)return fe;if(ge)return ge;if(he)return he;throw new Error("unexpected error. Unable to resolve global object.")}(),ve=be.document&&be.document.childNodes,ye=Int8Array;var me=e();var _e=Object.prototype.toString;var Ee="function"==typeof Symbol?Symbol:void 0,ke="function"==typeof Ee?Ee.toStringTag:"";var xe=me&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,i;if(null==e)return _e.call(e);t=e[ke],r=a(e,ke);try{e[ke]=void 0}catch(r){return _e.call(e)}return i=_e.call(e),r?e[ke]=t:delete e[ke],i}:function(e){return _e.call(e)},Se="function"==typeof Object.defineProperty?Object.defineProperty:null;var je=Object.defineProperty;function Ve(e){return"number"==typeof e}function Te(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function $e(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+Te(a):Te(a)+e,i&&(e="-"+e)),e}var Fe=String.prototype.toLowerCase,Ae=String.prototype.toUpperCase;function Ie(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!Ve(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=$e(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=$e(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Ae.call(e.specifier)?Ae.call(t):Fe.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Ce(e){return"string"==typeof e}var Re=Math.abs,Oe=String.prototype.toLowerCase,Pe=String.prototype.toUpperCase,Ze=String.prototype.replace,We=/e\+(\d)$/,Ge=/e-(\d)$/,Le=/^(\d+)$/,Ne=/^(\d+)e/,Ue=/\.0$/,Xe=/\.0*e/,Be=/(\..*[^0])0*e/;function Me(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!Ve(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Re(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=Ze.call(t,Be,"$1e"),t=Ze.call(t,Xe,"e"),t=Ze.call(t,Ue,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=Ze.call(t,We,"e+0$1"),t=Ze.call(t,Ge,"e-0$1"),e.alternate&&(t=Ze.call(t,Le,"$1."),t=Ze.call(t,Ne,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Pe.call(e.specifier)?Pe.call(t):Oe.call(t)}function ze(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function qe(e,r,t){var i=r-e.length;return i<0?e:e=t?e+ze(i):ze(i)+e}var De=String.fromCharCode,He=isNaN,Je=Array.isArray;function Ke(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Qe(e){var r,t,i,a,n,o,c,s,l;if(!Je(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Ce(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Ke(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,He(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,He(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Ie(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!He(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=He(n)?String(i.arg):De(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Me(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=$e(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=qe(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ye=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function er(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function rr(e){var r,t,i,a;for(t=[],a=0,i=Ye.exec(e);i;)(r=e.slice(a,Ye.lastIndex-i[0].length)).length&&t.push(r),t.push(er(i)),a=Ye.lastIndex,i=Ye.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function tr(e){return"string"==typeof e}function ir(e){var r,t;if(!tr(e))throw new TypeError(ir("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[rr(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Qe.apply(null,r)}var ar,nr=Object.prototype,or=nr.toString,cr=nr.__defineGetter__,sr=nr.__defineSetter__,lr=nr.__lookupGetter__,pr=nr.__lookupSetter__;ar=function(){try{return Se({},"x",{}),!0}catch(e){return!1}}()?je:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===or.call(e))throw new TypeError(ir("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===or.call(t))throw new TypeError(ir("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(lr.call(e,r)||pr.call(e,r)?(i=e.__proto__,e.__proto__=nr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&cr&&cr.call(e,r,t.get),o&&sr&&sr.call(e,r,t.set),e};var ur=ar;function fr(){return/^\s*function\s*([^(]*)/i}var gr=/^\s*function\s*([^(]*)/i;!function(e,r,t){ur(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(fr,"REGEXP",gr);var dr="function"==typeof Object.defineProperty?Object.defineProperty:null;var hr=Object.defineProperty;function wr(e){return"number"==typeof e}function br(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function vr(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+br(a):br(a)+e,i&&(e="-"+e)),e}var yr=String.prototype.toLowerCase,mr=String.prototype.toUpperCase;function _r(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!wr(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=vr(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=vr(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===mr.call(e.specifier)?mr.call(t):yr.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Er(e){return"string"==typeof e}var kr=Math.abs,xr=String.prototype.toLowerCase,Sr=String.prototype.toUpperCase,jr=String.prototype.replace,Vr=/e\+(\d)$/,Tr=/e-(\d)$/,$r=/^(\d+)$/,Fr=/^(\d+)e/,Ar=/\.0$/,Ir=/\.0*e/,Cr=/(\..*[^0])0*e/;function Rr(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!wr(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":kr(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=jr.call(t,Cr,"$1e"),t=jr.call(t,Ir,"e"),t=jr.call(t,Ar,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=jr.call(t,Vr,"e+0$1"),t=jr.call(t,Tr,"e-0$1"),e.alternate&&(t=jr.call(t,$r,"$1."),t=jr.call(t,Fr,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===Sr.call(e.specifier)?Sr.call(t):xr.call(t)}function Or(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Pr(e,r,t){var i=r-e.length;return i<0?e:e=t?e+Or(i):Or(i)+e}var Zr=String.fromCharCode,Wr=isNaN,Gr=Array.isArray;function Lr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function Nr(e){var r,t,i,a,n,o,c,s,l;if(!Gr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Er(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=Lr(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,Wr(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,Wr(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=_r(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!Wr(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=Wr(n)?String(i.arg):Zr(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=Rr(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=vr(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Pr(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ur=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Xr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Br(e){var r,t,i,a;for(t=[],a=0,i=Ur.exec(e);i;)(r=e.slice(a,Ur.lastIndex-i[0].length)).length&&t.push(r),t.push(Xr(i)),a=Ur.lastIndex,i=Ur.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function Mr(e){return"string"==typeof e}function zr(e){var r,t;if(!Mr(e))throw new TypeError(zr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Br(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return Nr.apply(null,r)}var qr,Dr=Object.prototype,Hr=Dr.toString,Jr=Dr.__defineGetter__,Kr=Dr.__defineSetter__,Qr=Dr.__lookupGetter__,Yr=Dr.__lookupSetter__;qr=function(){try{return dr({},"x",{}),!0}catch(e){return!1}}()?hr:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===Hr.call(e))throw new TypeError(zr("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Hr.call(t))throw new TypeError(zr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(Qr.call(e,r)||Yr.call(e,r)?(i=e.__proto__,e.__proto__=Dr,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Jr&&Jr.call(e,r,t.get),o&&Kr&&Kr.call(e,r,t.set),e};var et=qr;function rt(e){return null!==e&&"object"==typeof e}function tt(e){var r,t,i,a;if(("Object"===(t=xe(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(i=e.constructor).name)return i.name;if(r=gr.exec(i.toString()))return r[1]}return rt(a=e)&&(a._isBuffer||a.constructor&&"function"==typeof a.constructor.isBuffer&&a.constructor.isBuffer(a))?"Buffer":t}!function(e,r,t){et(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}(rt,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(zr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var t,i;if(!s(r))return!1;if(0===(t=r.length))return!1;for(i=0;i<t;i++)if(!1===e(r[i]))return!1;return!0}}(rt));var it="function"==typeof p||"object"==typeof ye||"function"==typeof ve?function(e){return tt(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?tt(e).toLowerCase():r};function at(e){return"function"===it(e)}var nt="function"==typeof Object.defineProperty?Object.defineProperty:null;var ot=Object.defineProperty;function ct(e){return"number"==typeof e}function st(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function lt(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+st(a):st(a)+e,i&&(e="-"+e)),e}var pt=String.prototype.toLowerCase,ut=String.prototype.toUpperCase;function ft(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!ct(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=lt(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=lt(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===ut.call(e.specifier)?ut.call(t):pt.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function gt(e){return"string"==typeof e}var dt=Math.abs,ht=String.prototype.toLowerCase,wt=String.prototype.toUpperCase,bt=String.prototype.replace,vt=/e\+(\d)$/,yt=/e-(\d)$/,mt=/^(\d+)$/,_t=/^(\d+)e/,Et=/\.0$/,kt=/\.0*e/,xt=/(\..*[^0])0*e/;function St(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!ct(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":dt(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=bt.call(t,xt,"$1e"),t=bt.call(t,kt,"e"),t=bt.call(t,Et,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=bt.call(t,vt,"e+0$1"),t=bt.call(t,yt,"e-0$1"),e.alternate&&(t=bt.call(t,mt,"$1."),t=bt.call(t,_t,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===wt.call(e.specifier)?wt.call(t):ht.call(t)}function jt(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function Vt(e,r,t){var i=r-e.length;return i<0?e:e=t?e+jt(i):jt(i)+e}var Tt=String.fromCharCode,$t=isNaN,Ft=Array.isArray;function At(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function It(e){var r,t,i,a,n,o,c,s,l;if(!Ft(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(gt(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=At(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,$t(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,$t(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=ft(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!$t(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=$t(n)?String(i.arg):Tt(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=St(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=lt(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=Vt(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var Ct=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Rt(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ot(e){var r,t,i,a;for(t=[],a=0,i=Ct.exec(e);i;)(r=e.slice(a,Ct.lastIndex-i[0].length)).length&&t.push(r),t.push(Rt(i)),a=Ct.lastIndex,i=Ct.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function Pt(e){return"string"==typeof e}function Zt(e){var r,t;if(!Pt(e))throw new TypeError(Zt("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[Ot(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return It.apply(null,r)}var Wt,Gt=Object.prototype,Lt=Gt.toString,Nt=Gt.__defineGetter__,Ut=Gt.__defineSetter__,Xt=Gt.__lookupGetter__,Bt=Gt.__lookupSetter__;Wt=function(){try{return nt({},"x",{}),!0}catch(e){return!1}}()?ot:function(e,r,t){var i,a,n,o;if("object"!=typeof e||null===e||"[object Array]"===Lt.call(e))throw new TypeError(Zt("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===Lt.call(t))throw new TypeError(Zt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((a="value"in t)&&(Xt.call(e,r)||Bt.call(e,r)?(i=e.__proto__,e.__proto__=Gt,delete e[r],e[r]=t.value,e.__proto__=i):e[r]=t.value),n="get"in t,o="set"in t,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&Nt&&Nt.call(e,r,t.get),o&&Ut&&Ut.call(e,r,t.set),e};var Mt=Wt;function zt(e){return"number"==typeof e}function qt(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function Dt(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+qt(a):qt(a)+e,i&&(e="-"+e)),e}var Ht=String.prototype.toLowerCase,Jt=String.prototype.toUpperCase;function Kt(e){var r,t,i;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(t=e.arg,i=parseInt(t,10),!isFinite(i)){if(!zt(t))throw new Error("invalid integer. Value: "+t);i=0}return i<0&&("u"===e.specifier||10!==r)&&(i=4294967295+i+1),i<0?(t=(-i).toString(r),e.precision&&(t=Dt(t,e.precision,e.padRight)),t="-"+t):(t=i.toString(r),i||e.precision?e.precision&&(t=Dt(t,e.precision,e.padRight)):t="",e.sign&&(t=e.sign+t)),16===r&&(e.alternate&&(t="0x"+t),t=e.specifier===Jt.call(e.specifier)?Jt.call(t):Ht.call(t)),8===r&&e.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function Qt(e){return"string"==typeof e}var Yt=Math.abs,ei=String.prototype.toLowerCase,ri=String.prototype.toUpperCase,ti=String.prototype.replace,ii=/e\+(\d)$/,ai=/e-(\d)$/,ni=/^(\d+)$/,oi=/^(\d+)e/,ci=/\.0$/,si=/\.0*e/,li=/(\..*[^0])0*e/;function pi(e){var r,t,i=parseFloat(e.arg);if(!isFinite(i)){if(!zt(e.arg))throw new Error("invalid floating-point number. Value: "+t);i=e.arg}switch(e.specifier){case"e":case"E":t=i.toExponential(e.precision);break;case"f":case"F":t=i.toFixed(e.precision);break;case"g":case"G":Yt(i)<1e-4?((r=e.precision)>0&&(r-=1),t=i.toExponential(r)):t=i.toPrecision(e.precision),e.alternate||(t=ti.call(t,li,"$1e"),t=ti.call(t,si,"e"),t=ti.call(t,ci,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return t=ti.call(t,ii,"e+0$1"),t=ti.call(t,ai,"e-0$1"),e.alternate&&(t=ti.call(t,ni,"$1."),t=ti.call(t,oi,"$1.e")),i>=0&&e.sign&&(t=e.sign+t),t=e.specifier===ri.call(e.specifier)?ri.call(t):ei.call(t)}function ui(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}function fi(e,r,t){var i=r-e.length;return i<0?e:e=t?e+ui(i):ui(i)+e}var gi=String.fromCharCode,di=isNaN,hi=Array.isArray;function wi(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function bi(e){var r,t,i,a,n,o,c,s,l;if(!hi(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",c=1,s=0;s<e.length;s++)if(Qt(i=e[s]))o+=i;else{if(r=void 0!==i.precision,!(i=wi(i)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+i+"`.");for(i.mapping&&(c=i.mapping),t=i.flags,l=0;l<t.length;l++)switch(a=t.charAt(l)){case" ":i.sign=" ";break;case"+":i.sign="+";break;case"-":i.padRight=!0,i.padZeros=!1;break;case"0":i.padZeros=t.indexOf("-")<0;break;case"#":i.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===i.width){if(i.width=parseInt(arguments[c],10),c+=1,di(i.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+i.width+"`.");i.width<0&&(i.padRight=!0,i.width=-i.width)}if(r&&"*"===i.precision){if(i.precision=parseInt(arguments[c],10),c+=1,di(i.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+i.precision+"`.");i.precision<0&&(i.precision=1,r=!1)}switch(i.arg=arguments[c],i.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(i.padZeros=!1),i.arg=Kt(i);break;case"s":i.maxWidth=r?i.precision:-1;break;case"c":if(!di(i.arg)){if((n=parseInt(i.arg,10))<0||n>127)throw new Error("invalid character code. Value: "+i.arg);i.arg=di(n)?String(i.arg):gi(n)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(i.precision=6),i.arg=pi(i);break;default:throw new Error("invalid specifier: "+i.specifier)}i.maxWidth>=0&&i.arg.length>i.maxWidth&&(i.arg=i.arg.substring(0,i.maxWidth)),i.padZeros?i.arg=Dt(i.arg,i.width||i.precision,i.padRight):i.width&&(i.arg=fi(i.arg,i.width,i.padRight)),o+=i.arg||"",c+=1}return o}var vi=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function yi(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function mi(e){var r,t,i,a;for(t=[],a=0,i=vi.exec(e);i;)(r=e.slice(a,vi.lastIndex-i[0].length)).length&&t.push(r),t.push(yi(i)),a=vi.lastIndex,i=vi.exec(e);return(r=e.slice(a)).length&&t.push(r),t}function _i(e){return"string"==typeof e}function Ei(e){var r,t,i;if(!_i(e))throw new TypeError(Ei("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=mi(e),(t=new Array(arguments.length))[0]=r,i=1;i<t.length;i++)t[i]=arguments[i];return bi.apply(null,t)}function ki(e,r,t){if(!l(e))throw new TypeError(Ei("invalid argument. First argument must be an object. Value: `%s`.",e));if(!at(t))throw new TypeError(Ei("invalid argument. Third argument must be a function. Value: `%s`.",t));!function(e,r,t){if(!l(e))throw new TypeError(Zt("invalid argument. First argument must be an object. Value: `%s`.",e));if(!l(t))throw new TypeError(Zt("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if(!at(t.value))throw new TypeError(Zt("invalid argument. The `value` property of the property descriptor must be a function. Value: `%s`.",t.value));function i(i){t.value=i,Mt(e,r,t)}t={configurable:void 0!==t.configurable&&t.configurable,enumerable:void 0!==t.enumerable&&t.enumerable,writable:void 0!==t.writable&&t.writable,value:t.value},Mt(e,r,{configurable:!0,enumerable:t.enumerable,get:function(){var r=t.value.call(e);return i(r),r},set:t.writable?i:void 0})}(e,r,{configurable:!0,enumerable:!0,writable:!1,value:t})}export{ki as default};
//# sourceMappingURL=mod.js.map
