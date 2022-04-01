// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var t=function(){return e&&"symbol"==typeof Symbol.toStringTag},n=Object.prototype.toString,i=n;var a=function(r){return i.call(r)},o=Object.prototype.hasOwnProperty;var u=function(r,e){return null!=r&&o.call(r,e)},c="function"==typeof Symbol?Symbol.toStringTag:"",l=u,s=c,f=n;var v=a,p=function(r){var e,t,n;if(null==r)return f.call(r);t=r[s],e=l(r,s);try{r[s]=void 0}catch(e){return f.call(r)}return n=f.call(r),e?r[s]=t:delete r[s],n},g=t()?p:v,m=g;var d=Array.isArray?Array.isArray:function(r){return"[object Array]"===m(r)},b=d;var h=function(r){return"object"==typeof r&&null!==r&&!b(r)},w=/./,y="function"==typeof Object.defineProperty?Object.defineProperty:null;var E=function(){try{return y({},"x",{}),!0}catch(r){return!1}},j=Object.defineProperty,P=Object.prototype,_=P.toString,T=P.__defineGetter__,V=P.__defineSetter__,O=P.__lookupGetter__,x=P.__lookupSetter__;var S=function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===_.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===_.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((i="value"in t)&&(O.call(r,e)||x.call(r,e)?(n=r.__proto__,r.__proto__=P,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,e,t.get),o&&V&&V.call(r,e,t.set),r},k=j,I=S,A=E()?k:I,F=A;var R=function(r,e,t){F(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},$=R;var M=function(r){return"boolean"==typeof r},C=Boolean.prototype.toString;var N=g,B=function(r){try{return C.call(r),!0}catch(r){return!1}},G=t();var L=function(r){return"object"==typeof r&&(r instanceof Boolean||(G?B(r):"[object Boolean]"===N(r)))},Z=M,W=L;var X=$,z=function(r){return Z(r)||W(r)},U=L;X(z,"isPrimitive",M),X(z,"isObject",U);var Y="object"==typeof self?self:null,D="object"==typeof window?window:null,q=z.isPrimitive,H=function(){return new Function("return this;")()},J=Y,K=D,Q=r(Object.freeze({__proto__:null}));var rr=function(r){if(arguments.length){if(!q(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return H()}if(J)return J;if(K)return K;if(Q)return Q;throw new Error("unexpected error. Unable to resolve global object.")},er=rr(),tr=er.document&&er.document.childNodes,nr=Int8Array,ir=w,ar=tr,or=nr;var ur=function(){return"function"==typeof ir||"object"==typeof or||"function"==typeof ar};var cr=function(){return/^\s*function\s*([^(]*)/i},lr=cr;$(lr,"REGEXP",cr());var sr=lr,fr=d;var vr=function(r){return null!==r&&"object"==typeof r};$(vr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(vr));var pr=vr;var gr=g,mr=sr.REGEXP,dr=function(r){return pr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var br=function(r){var e,t,n;if(("Object"===(t=gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=mr.exec(n.toString()))return e[1]}return dr(r)?"Buffer":t},hr=br;var wr=br;var yr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?hr(r).toLowerCase():e},Er=function(r){return wr(r).toLowerCase()},jr=ur()?Er:yr;var Pr=function(r){return"function"===jr(r)},_r=h,Tr=Pr,Vr=A;var Or=function(r,e,t){if(!_r(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if(!_r(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if(!Tr(t.value))throw new TypeError("invalid argument. The `value` property of the property descriptor must be a function. Value: `"+t.value+"`.");function n(n){t.value=n,Vr(r,e,t)}t={configurable:void 0!==t.configurable&&t.configurable,enumerable:void 0!==t.enumerable&&t.enumerable,writable:void 0!==t.writable&&t.writable,value:t.value},Vr(r,e,{configurable:!0,enumerable:t.enumerable,get:function(){var e=t.value.call(r);return n(e),e},set:t.writable?n:void 0})},xr=Or;var Sr=function(r){return"string"==typeof r},kr=String.prototype.valueOf;var Ir=g,Ar=function(r){try{return kr.call(r),!0}catch(r){return!1}},Fr=t();var Rr=function(r){return"object"==typeof r&&(r instanceof String||(Fr?Ar(r):"[object String]"===Ir(r)))},$r=Sr,Mr=Rr;var Cr=$,Nr=function(r){return $r(r)||Mr(r)},Br=Rr;Cr(Nr,"isPrimitive",Sr),Cr(Nr,"isObject",Br);var Gr=Nr,Lr=Math.floor;var Zr=function(r){return Lr(r)===r},Wr=Zr;var Xr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Wr(r.length)&&r.length>=0&&r.length<=9007199254740991};var zr=function(r){return"number"==typeof r},Ur=Number,Yr=Ur.prototype.toString;var Dr=g,qr=Ur,Hr=function(r){try{return Yr.call(r),!0}catch(r){return!1}},Jr=t();var Kr=function(r){return"object"==typeof r&&(r instanceof qr||(Jr?Hr(r):"[object Number]"===Dr(r)))},Qr=zr,re=Kr;var ee=$,te=function(r){return Qr(r)||re(r)},ne=Kr;ee(te,"isPrimitive",zr),ee(te,"isObject",ne);var ie=te,ae=Number.POSITIVE_INFINITY,oe=Ur.NEGATIVE_INFINITY,ue=ae,ce=oe,le=Zr;var se=function(r){return r<ue&&r>ce&&le(r)},fe=ie.isPrimitive,ve=se;var pe=function(r){return fe(r)&&ve(r)},ge=ie.isObject,me=se;var de=function(r){return ge(r)&&me(r.valueOf())},be=pe,he=de;var we=$,ye=function(r){return be(r)||he(r)},Ee=de;we(ye,"isPrimitive",pe),we(ye,"isObject",Ee);var je=ye;var Pe=function(r){return r!=r},_e=ie.isPrimitive,Te=Pe;var Ve=function(r){return _e(r)&&Te(r)},Oe=ie.isObject,xe=Pe;var Se=function(r){return Oe(r)&&xe(r.valueOf())},ke=Ve,Ie=Se;var Ae=$,Fe=function(r){return ke(r)||Ie(r)},Re=Se;Ae(Fe,"isPrimitive",Ve),Ae(Fe,"isObject",Re);var $e=Xr,Me=je.isPrimitive,Ce=Gr.isPrimitive,Ne=Fe.isPrimitive;var Be=function(r,e,t){var n,i,a;if(!$e(r)&&!Ce(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Me(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Ce(r)){if(!Ce(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Ne(e)){for(a=i;a<n;a++)if(Ne(r[a]))return!0;return!1}for(a=i;a<n;a++)if(r[a]===e)return!0;return!1},Ge=Gr.isPrimitive;var Le=function(r){if(!Ge(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},Ze=Gr.isPrimitive;var We=function(r){if(!Ze(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Xe=Le,ze=We,Ue=Gr.isPrimitive;var Ye=function(r){return Ue(r)&&r===ze(r)&&r!==Xe(r)},De=ae,qe=oe;var He=function(r){return r==r&&r>qe&&r<De},Je=je.isPrimitive;var Ke=function(r){return Je(r)&&r>=0},Qe=je.isObject;var rt=function(r){return Qe(r)&&r.valueOf()>=0},et=Ke,tt=rt;var nt=$,it=function(r){return et(r)||tt(r)},at=rt;nt(it,"isPrimitive",Ke),nt(it,"isObject",at);var ot=it.isPrimitive,ut=Gr.isPrimitive;var ct=function(r,e){var t,n;if(!ut(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!ot(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},lt=je.isPrimitive,st=Gr.isPrimitive;var ft=ct,vt=function(r,e,t){var n,i;if(!st(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!st(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!lt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var pt=function(r,e,t){var n=!1,i=e-r.length;return i<0||(vt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+ft("0",i):ft("0",i)+r,n&&(r="-"+r)),r},gt=Ye,mt=We,dt=Le,bt=He,ht=ie.isPrimitive,wt=pt;var yt=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!bt(n)){if(!ht(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=wt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=wt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=gt(r.specifier)?mt(t):dt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Et=Gr.isPrimitive,jt=/[-\/\\^$*+?.()|[\]{}]/g;var Pt=function(r){var e,t;if(!Et(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(jt,"\\$&"):(e=(e=r.substring(1,t)).replace(jt,"\\$&"),r=r[0]+e+r.substring(t))},_t=RegExp.prototype.exec;var Tt=g,Vt=function(r){try{return _t.call(r),!0}catch(r){return!1}},Ot=t();var xt=Pt,St=Pr,kt=Gr.isPrimitive,It=function(r){return"object"==typeof r&&(r instanceof RegExp||(Ot?Vt(r):"[object RegExp]"===Tt(r)))};var At=Ye,Ft=We,Rt=Le,$t=function(r,e,t){if(!kt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(kt(e))e=xt(e),e=new RegExp(e,"g");else if(!It(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!kt(t)&&!St(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Mt=He,Ct=ie.isPrimitive,Nt=function(r){return Math.abs(r)},Bt=/e\+(\d)$/,Gt=/e-(\d)$/,Lt=/^(\d+)$/,Zt=/^(\d+)e/,Wt=/\.0$/,Xt=/\.0*e/,zt=/(\..*[^0])0*e/;var Ut=function(r){var e,t,n=parseFloat(r.arg);if(!Mt(n)){if(!Ct(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Nt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=$t(t,zt,"$1e"),t=$t(t,Xt,"e"),t=$t(t,Wt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=$t(t,Bt,"e+0$1"),t=$t(t,Gt,"e-0$1"),r.alternate&&(t=$t(t,Lt,"$1."),t=$t(t,Zt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=At(r.specifier)?Ft(t):Rt(t)},Yt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Dt=ct;var qt=Gr.isPrimitive,Ht=Be,Jt=Pe,Kt=yt,Qt=Ut,rn=function(r){var e,t,n,i,a;for(e=0,n=[],a=Yt.exec(r);a;)(t=r.slice(e,Yt.lastIndex-a[0].length)).length&&n.push(t),(i=o(a,n.length))&&n.push(i),e=Yt.lastIndex,a=Yt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function o(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},en=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Dt(" ",n):Dt(" ",n)+r},tn=pt,nn=String.fromCharCode;var an=h,on=Pr,un=xr,cn=function(r){var e,t,n,i,a,o,u,c,l;if(!qt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=rn(r),o="",u=1,c=0;c<e.length;c++)if(n=e[c],qt(n))o+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,l=0;l<t.length;l++)switch(i=t.charAt(l)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!Ht(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,Jt(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,Jt(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=Kt(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!Jt(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Jt(a)?String(n.arg):nn(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=Qt(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=tn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=en(n.arg,n.width,n.padRight)),o+=n.arg||"",u+=1}return o};var ln=function(r,e,t){if(!an(r))throw new TypeError(cn("invalid argument. First argument must be an object. Value: `%s`.",r));if(!on(t))throw new TypeError(cn("invalid argument. Third argument must be a function. Value: `%s`.",t));un(r,e,{configurable:!0,enumerable:!0,writable:!1,value:t})},sn=ln;export{sn as default};
//# sourceMappingURL=mod.js.map
