(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[84],{209:function(t,n,e){"use strict";var i,o,a=e(20),s=e.n(a),r=e(210),c=e.n(r),l=e(2);if(void 0===f)var f=[];const h=t=>{const[n,e]=Object(l.useState)([]);Object(l.useEffect)(()=>{r()},[]),Object(l.useEffect)(()=>{const{onStatus:e,config:i}=t;void 0!==n.status&&e(n.status),i!==n.config&&r()},[t]);const i=()=>{e({status:"loading"})},o=t=>{f.includes(t)||f.push(t)},a=()=>{e({status:"active"})},s=()=>{e({status:"inactive"})},r=()=>{f.includes(t.config.google.families[0])||(c.a.load({...t.config,loading:i,active:a,inactive:s}),o(t.config.google.families[0]));const n=document.getElementsByClassName("is-tablet-preview"),e=document.getElementsByClassName("is-mobile-preview");if(0!==n.length||0!==e.length){const r=(n[0]||e[0]).getElementsByTagName("iframe")[0];r&&(c.a.load({...t.config,loading:i,active:a,inactive:s,context:null==r?void 0:r.contentWindow}),o(t.config.google.families[0]))}},{children:h}=t;return h||null};h.propTypes={config:null===(i=s.a.object)||void 0===i?void 0:i.isRequired,children:s.a.element,onStatus:null===(o=s.a.func)||void 0===o?void 0:o.isRequired},h.defaultProps={onStatus:()=>{}},n.a=h},210:function(t,n,e){var i;!function(){function o(t,n,e){return t.call.apply(t.bind,arguments)}function a(t,n,e){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(e,i),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function s(t,n,e){return(s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a).apply(null,arguments)}var r=Date.now||function(){return+new Date};function c(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var l=!!window.FontFace;function f(t,n,e,i){if(n=t.c.createElement(n),e)for(var o in e)e.hasOwnProperty(o)&&("style"==o?n.style.cssText=e[o]:n.setAttribute(o,e[o]));return i&&n.appendChild(t.c.createTextNode(i)),n}function h(t,n,e){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(e,t.lastChild)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t,n,e){n=n||[],e=e||[];for(var i=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<i.length;s+=1)if(n[o]===i[s]){a=!0;break}a||i.push(n[o])}for(n=[],o=0;o<i.length;o+=1){for(a=!1,s=0;s<e.length;s+=1)if(i[o]===e[s]){a=!0;break}a||n.push(i[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function p(t,n){for(var e=t.className.split(/\s+/),i=0,o=e.length;i<o;i++)if(e[i]==n)return!0;return!1}function d(t,n,e){function i(){r&&o&&a&&(r(s),r=null)}n=f(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,a=!0,s=null,r=e||null;l?(n.onload=function(){o=!0,i()},n.onerror=function(){o=!0,s=Error("Stylesheet failed to load"),i()}):setTimeout((function(){o=!0,i()}),0),h(t,"head",n)}function m(t,n,e,i){var o=t.c.getElementsByTagName("head")[0];if(o){var a=f(t,"script",{src:n}),s=!1;return a.onload=a.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,e&&e(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout((function(){s||(s=!0,e&&e(Error("Script load timeout")))}),i||5e3),a}return null}function v(){this.a=0,this.c=null}function w(t){return t.a++,function(){t.a--,b(t)}}function y(t,n){t.c=n,b(t)}function b(t){0==t.a&&t.c&&(t.c(),t.c=null)}function j(t){this.a=t||"-"}function _(t,n){this.c=t,this.f=4,this.a="n";var e=(n||"n4").match(/^([nio])([1-9])$/i);e&&(this.a=e[1],this.f=parseInt(e[2],10))}function x(t){var n=[];t=t.split(/,\s*/);for(var e=0;e<t.length;e++){var i=t[e].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?n.push("'"+i+"'"):n.push(i)}return n.join(",")}function k(t){return t.a+t.f}function E(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function T(t){var n=4,e="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(e=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?n=7:/[1-9]00/.test(i[1])&&(n=parseInt(i[1].substr(0,1),10)))),e+n}function S(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new j("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function F(t){if(t.g){var n=p(t.f,t.a.c("wf","active")),e=[],i=[t.a.c("wf","loading")];n||e.push(t.a.c("wf","inactive")),g(t.f,e,i)}C(t,"inactive")}function C(t,n,e){t.j&&t.h[n]&&(e?t.h[n](e.c,k(e)):t.h[n]())}function O(){this.c={}}function A(t,n){this.c=t,this.f=n,this.a=f(this.c,"span",{"aria-hidden":"true"},this.f)}function N(t){h(t.c,"body",t.a)}function W(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+x(t.c)+";font-style:"+E(t)+";font-weight:"+t.f+"00;"}function B(t,n,e,i,o,a){this.g=t,this.j=n,this.a=i,this.c=e,this.f=o||3e3,this.h=a||void 0}function L(t,n,e,i,o,a,s){this.v=t,this.B=n,this.c=e,this.a=i,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new A(this.c,this.s),this.h=new A(this.c,this.s),this.j=new A(this.c,this.s),this.m=new A(this.c,this.s),t=W(t=new _(this.a.c+",serif",k(this.a))),this.g.a.style.cssText=t,t=W(t=new _(this.a.c+",sans-serif",k(this.a))),this.h.a.style.cssText=t,t=W(t=new _("serif",k(this.a))),this.j.a.style.cssText=t,t=W(t=new _("sans-serif",k(this.a))),this.m.a.style.cssText=t,N(this.g),N(this.h),N(this.j),N(this.m)}j.prototype.c=function(t){for(var n=[],e=0;e<arguments.length;e++)n.push(arguments[e].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},B.prototype.start=function(){var t=this.c.o.document,n=this,e=r(),i=new Promise((function(i,o){!function a(){r()-e>=n.f?o():t.fonts.load(function(t){return E(t)+" "+t.f+"00 300px "+x(t.c)}(n.a),n.h).then((function(t){1<=t.length?i():setTimeout(a,25)}),(function(){o()}))}()})),o=null,a=new Promise((function(t,e){o=setTimeout(e,n.f)}));Promise.race([a,i]).then((function(){o&&(clearTimeout(o),o=null),n.g(n.a)}),(function(){n.j(n.a)}))};var P={D:"serif",C:"sans-serif"},I=null;function G(){if(null===I){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);I=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return I}function q(t,n,e){for(var i in P)if(P.hasOwnProperty(i)&&n===t.f[P[i]]&&e===t.f[P[i]])return!0;return!1}function D(t,n){setTimeout(s((function(){u(this.g.a),u(this.h.a),u(this.j.a),u(this.m.a),n(this.a)}),t),0)}function $(t,n,e){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=e}L.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(n){var e,i=n.g.a.offsetWidth,o=n.h.a.offsetWidth;(e=i===n.f.serif&&o===n.f["sans-serif"])||(e=G()&&q(n,i,o)),e?r()-n.A>=n.w?G()&&q(n,i,o)&&(null===n.u||n.u.hasOwnProperty(n.a.c))?D(n,n.v):D(n,n.B):function(n){setTimeout(s((function(){t(this)}),n),50)}(n):D(n,n.v)}(this)};var R=null;function H(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&g(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),C(t,"active")):F(t.a))}function J(t){this.j=t,this.a=new O,this.h=0,this.f=this.g=!0}function M(t,n,e,i,o){var a=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=o||null,r=i||{};if(0===e.length&&a)F(n.a);else{n.f+=e.length,a&&(n.j=a);var c,l=[];for(c=0;c<e.length;c++){var f=e[c],h=r[f.c],u=n.a,p=f;if(u.g&&g(u.f,[u.a.c("wf",p.c,k(p).toString(),"loading")]),C(u,"fontloading",p),u=null,null===R)if(window.FontFace){p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);R=p?42<parseInt(p[1],10):!d}else R=!1;u=R?new B(s(n.g,n),s(n.h,n),n.c,f,n.s,h):new L(s(n.g,n),s(n.h,n),n.c,f,n.s,t,h),l.push(u)}for(c=0;c<l.length;c++)l[c].start()}}),0)}function z(t,n){this.c=t,this.a=n}function K(t,n){this.c=t,this.a=n}function U(t,n){this.c=t||V,this.a=[],this.f=[],this.g=n||""}$.prototype.g=function(t){var n=this.a;n.g&&g(n.f,[n.a.c("wf",t.c,k(t).toString(),"active")],[n.a.c("wf",t.c,k(t).toString(),"loading"),n.a.c("wf",t.c,k(t).toString(),"inactive")]),C(n,"fontactive",t),this.m=!0,H(this)},$.prototype.h=function(t){var n=this.a;if(n.g){var e=p(n.f,n.a.c("wf",t.c,k(t).toString(),"active")),i=[],o=[n.a.c("wf",t.c,k(t).toString(),"loading")];e||i.push(n.a.c("wf",t.c,k(t).toString(),"inactive")),g(n.f,i,o)}C(n,"fontinactive",t),H(this)},J.prototype.load=function(t){this.c=new c(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,n,e){var i=[],o=e.timeout;!function(t){t.g&&g(t.f,[t.a.c("wf","loading")]),C(t,"loading")}(n),i=function(t,n,e){var i,o=[];for(i in n)if(n.hasOwnProperty(i)){var a=t.c[i];a&&o.push(a(n[i],e))}return o}(t.a,e,t.c);var a=new $(t.c,n,o);for(t.h=i.length,n=0,e=i.length;n<e;n++)i[n].load((function(n,e,i){M(t,a,n,e,i)}))}(this,new S(this.c,t),t)},z.prototype.load=function(t){var n=this,e=n.a.projectId,i=n.a.version;if(e){var o=n.c.o;m(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+e+".js"+(i?"?v="+i:""),(function(i){i?t([]):(o["__MonotypeConfiguration__"+e]=function(){return n.a},function n(){if(o["__mti_fntLst"+e]){var i,a=o["__mti_fntLst"+e](),s=[];if(a)for(var r=0;r<a.length;r++){var c=a[r].fontfamily;null!=a[r].fontStyle&&null!=a[r].fontWeight?(i=a[r].fontStyle+a[r].fontWeight,s.push(new _(c,i))):s.push(new _(c))}t(s)}else setTimeout((function(){n()}),50)}())})).id="__MonotypeAPIScript__"+e}else t([])},K.prototype.load=function(t){var n,e,i=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new v;for(n=0,e=i.length;n<e;n++)d(this.c,i[n],w(s));var r=[];for(n=0,e=o.length;n<e;n++)if((i=o[n].split(":"))[1])for(var c=i[1].split(","),l=0;l<c.length;l+=1)r.push(new _(i[0],c[l]));else r.push(new _(i[0]));y(s,(function(){t(r,a)}))};var V="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function nt(t,n){this.c=t,this.a=n}var et={Arimo:!0,Cousine:!0,Tinos:!0};function it(t,n){this.c=t,this.a=n}function ot(t,n){this.c=t,this.f=n,this.a=[]}nt.prototype.load=function(t){var n=new v,e=this.c,i=new U(this.a.api,this.a.text),o=this.a.families;!function(t,n){for(var e=n.length,i=0;i<e;i++){var o=n[i].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}(i,o);var a=new X(o);!function(t){for(var n=t.f.length,e=0;e<n;e++){var i=t.f[e].split(":"),o=i[0].replace(/\+/g," "),a=["n4"];if(2<=i.length){var s;if(s=[],r=i[1])for(var r,c=(r=r.split(",")).length,l=0;l<c;l++){var f;if((f=r[l]).match(/^[\w-]+$/))if(null==(h=tt.exec(f.toLowerCase())))f="";else{if(f=null==(f=h[2])||""==f?"n":Z[f],null==(h=h[1])||""==h)h="4";else var h=Y[h]||(isNaN(h)?"4":h.substr(0,1));f=[f,h].join("")}else f="";f&&s.push(f)}0<s.length&&(a=s),3==i.length&&(s=[],0<(i=(i=i[2])?i.split(","):s).length&&(i=Q[i[0]])&&(t.c[o]=i))}for(t.c[o]||(i=Q[o])&&(t.c[o]=i),i=0;i<a.length;i+=1)t.a.push(new _(o,a[i]))}}(a),d(e,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,e=[],i=0;i<n;i++)e.push(t.a[i].replace(/ /g,"+"));return n=t.c+"?family="+e.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(i),w(n)),y(n,(function(){t(a.a,a.c,et)}))},it.prototype.load=function(t){var n=this.a.id,e=this.c.o;n?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",(function(n){if(n)t([]);else if(e.Typekit&&e.Typekit.config&&e.Typekit.config.fn){n=e.Typekit.config.fn;for(var i=[],o=0;o<n.length;o+=2)for(var a=n[o],s=n[o+1],r=0;r<s.length;r++)i.push(new _(a,s[r]));try{e.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(i)}}),2e3):t([])},ot.prototype.load=function(t){var n=this.f.id,e=this.c.o,i=this;n?(e.__webfontfontdeckmodule__||(e.__webfontfontdeckmodule__={}),e.__webfontfontdeckmodule__[n]=function(n,e){for(var o=0,a=e.fonts.length;o<a;++o){var s=e.fonts[o];i.a.push(new _(s.name,T("font-weight:"+s.weight+";font-style:"+s.style)))}t(i.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+n+".js",(function(n){n&&t([])}))):t([])};var at=new J(window);at.a.c.custom=function(t,n){return new K(n,t)},at.a.c.fontdeck=function(t,n){return new ot(n,t)},at.a.c.monotype=function(t,n){return new z(n,t)},at.a.c.typekit=function(t,n){return new it(n,t)},at.a.c.google=function(t,n){return new nt(n,t)};var st={load:s(at.load,at)};void 0===(i=function(){return st}.call(n,e,n,t))||(t.exports=i)}()},510:function(t,n,e){"use strict";e.r(n);var i=e(209),o=e(1),a=e(0),s=e.n(a),r=e(5),c=e(7),l=e(39);const f=t=>{const{state:n,togglePreview:e,inspectorControls:a}=t;t=t.parentProps;const{attributes:f,categoriesList:h,taxonomyList:u}=t,{titleFontFamily:g,titleFontWeight:p,titleLoadGoogleFonts:d,metaFontFamily:m,metaFontWeight:v,metaLoadGoogleFonts:w,excerptFontFamily:y,excerptFontWeight:b,excerptLoadGoogleFonts:j,ctaFontFamily:_,ctaFontWeight:x,ctaLoadGoogleFonts:k}=f;let E,T,S,F;if(!0===d){const t={google:{families:[g+(p?":"+p:"")]}};E=s.a.createElement(i.a,{config:t})}if(!0===w){const t={google:{families:[m+(v?":"+v:"")]}};T=s.a.createElement(i.a,{config:t})}if(!0===j){const t={google:{families:[y+(b?":"+b:"")]}};S=s.a.createElement(i.a,{config:t})}if(!0===k){const t={google:{families:[_+(x?":"+x:"")]}};F=s.a.createElement(i.a,{config:t})}const C=[],O=[{value:"",label:Object(o.__)("All","ultimate-addons-for-gutenberg")}];return""!==u&&Object.keys(u).map(t=>C.push({value:u[t].name,label:Object(l.decodeEntities)(u[t].label)})),""!==h&&Object.keys(h).map(t=>O.push({value:h[t].id,label:Object(l.decodeEntities)(h[t].name)})),s.a.createElement(s.a.Fragment,null,a,s.a.createElement(r.BlockControls,null,(()=>{const{isEditing:t}=n;return s.a.createElement(c.ToolbarGroup,{controls:[{icon:"edit",title:Object(o.__)("Edit"),onClick:()=>e(),isActive:t}]})})()),E,T,S,F)};n.default=s.a.memo(f)}}]);