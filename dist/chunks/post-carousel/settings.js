(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[78],{201:function(t,n,i){"use strict";var e,o,a=i(27),s=i.n(a),r=i(202),c=i.n(r),l=i(2);if(void 0===f)var f=[];const h=t=>{const[n,i]=Object(l.useState)([]);Object(l.useEffect)(()=>{r()},[]),Object(l.useEffect)(()=>{const{onStatus:i,config:e}=t;void 0!==n.status&&i(n.status),e!==n.config&&r()},[t]);const e=()=>{i({status:"loading"})},o=t=>{f.includes(t)||f.push(t)},a=()=>{i({status:"active"})},s=()=>{i({status:"inactive"})},r=()=>{f.includes(t.config.google.families[0])||(c.a.load({...t.config,loading:e,active:a,inactive:s}),o(t.config.google.families[0]));const n=document.getElementsByClassName("is-tablet-preview"),i=document.getElementsByClassName("is-mobile-preview");if(0!==n.length||0!==i.length){const r=(n[0]||i[0]).getElementsByTagName("iframe")[0];r&&(c.a.load({...t.config,loading:e,active:a,inactive:s,context:null==r?void 0:r.contentWindow}),o(t.config.google.families[0]))}},{children:h}=t;return h||null};h.propTypes={config:null===(e=s.a.object)||void 0===e?void 0:e.isRequired,children:s.a.element,onStatus:null===(o=s.a.func)||void 0===o?void 0:o.isRequired},h.defaultProps={onStatus:()=>{}},n.a=h},202:function(t,n,i){var e;!function(){function o(t,n,i){return t.call.apply(t.bind,arguments)}function a(t,n,i){if(!t)throw Error();if(2<arguments.length){var e=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,e),t.apply(n,i)}}return function(){return t.apply(n,arguments)}}function s(t,n,i){return(s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:a).apply(null,arguments)}var r=Date.now||function(){return+new Date};function c(t,n){this.a=t,this.o=n||t,this.c=this.o.document}var l=!!window.FontFace;function f(t,n,i,e){if(n=t.c.createElement(n),i)for(var o in i)i.hasOwnProperty(o)&&("style"==o?n.style.cssText=i[o]:n.setAttribute(o,i[o]));return e&&n.appendChild(t.c.createTextNode(e)),n}function h(t,n,i){(t=t.c.getElementsByTagName(n)[0])||(t=document.documentElement),t.insertBefore(i,t.lastChild)}function u(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t,n,i){n=n||[],i=i||[];for(var e=t.className.split(/\s+/),o=0;o<n.length;o+=1){for(var a=!1,s=0;s<e.length;s+=1)if(n[o]===e[s]){a=!0;break}a||e.push(n[o])}for(n=[],o=0;o<e.length;o+=1){for(a=!1,s=0;s<i.length;s+=1)if(e[o]===i[s]){a=!0;break}a||n.push(e[o])}t.className=n.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function p(t,n){for(var i=t.className.split(/\s+/),e=0,o=i.length;e<o;e++)if(i[e]==n)return!0;return!1}function d(t,n,i){function e(){r&&o&&a&&(r(s),r=null)}n=f(t,"link",{rel:"stylesheet",href:n,media:"all"});var o=!1,a=!0,s=null,r=i||null;l?(n.onload=function(){o=!0,e()},n.onerror=function(){o=!0,s=Error("Stylesheet failed to load"),e()}):setTimeout((function(){o=!0,e()}),0),h(t,"head",n)}function m(t,n,i,e){var o=t.c.getElementsByTagName("head")[0];if(o){var a=f(t,"script",{src:n}),s=!1;return a.onload=a.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,i&&i(null),a.onload=a.onreadystatechange=null,"HEAD"==a.parentNode.tagName&&o.removeChild(a))},o.appendChild(a),setTimeout((function(){s||(s=!0,i&&i(Error("Script load timeout")))}),e||5e3),a}return null}function v(){this.a=0,this.c=null}function w(t){return t.a++,function(){t.a--,b(t)}}function y(t,n){t.c=n,b(t)}function b(t){0==t.a&&t.c&&(t.c(),t.c=null)}function _(t){this.a=t||"-"}function j(t,n){this.c=t,this.f=4,this.a="n";var i=(n||"n4").match(/^([nio])([1-9])$/i);i&&(this.a=i[1],this.f=parseInt(i[2],10))}function x(t){var n=[];t=t.split(/,\s*/);for(var i=0;i<t.length;i++){var e=t[i].replace(/['"]/g,"");-1!=e.indexOf(" ")||/^\d/.test(e)?n.push("'"+e+"'"):n.push(e)}return n.join(",")}function k(t){return t.a+t.f}function E(t){var n="normal";return"o"===t.a?n="oblique":"i"===t.a&&(n="italic"),n}function S(t){var n=4,i="n",e=null;return t&&((e=t.match(/(normal|oblique|italic)/i))&&e[1]&&(i=e[1].substr(0,1).toLowerCase()),(e=t.match(/([1-9]00|normal|bold)/i))&&e[1]&&(/bold/i.test(e[1])?n=7:/[1-9]00/.test(e[1])&&(n=parseInt(e[1].substr(0,1),10)))),i+n}function T(t,n){this.c=t,this.f=t.o.document.documentElement,this.h=n,this.a=new _("-"),this.j=!1!==n.events,this.g=!1!==n.classes}function F(t){if(t.g){var n=p(t.f,t.a.c("wf","active")),i=[],e=[t.a.c("wf","loading")];n||i.push(t.a.c("wf","inactive")),g(t.f,i,e)}C(t,"inactive")}function C(t,n,i){t.j&&t.h[n]&&(i?t.h[n](i.c,k(i)):t.h[n]())}function N(){this.c={}}function A(t,n){this.c=t,this.f=n,this.a=f(this.c,"span",{"aria-hidden":"true"},this.f)}function O(t){h(t.c,"body",t.a)}function W(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+x(t.c)+";font-style:"+E(t)+";font-weight:"+t.f+"00;"}function B(t,n,i,e,o,a){this.g=t,this.j=n,this.a=e,this.c=i,this.f=o||3e3,this.h=a||void 0}function P(t,n,i,e,o,a,s){this.v=t,this.B=n,this.c=i,this.a=e,this.s=s||"BESbswy",this.f={},this.w=o||3e3,this.u=a||null,this.m=this.j=this.h=this.g=null,this.g=new A(this.c,this.s),this.h=new A(this.c,this.s),this.j=new A(this.c,this.s),this.m=new A(this.c,this.s),t=W(t=new j(this.a.c+",serif",k(this.a))),this.g.a.style.cssText=t,t=W(t=new j(this.a.c+",sans-serif",k(this.a))),this.h.a.style.cssText=t,t=W(t=new j("serif",k(this.a))),this.j.a.style.cssText=t,t=W(t=new j("sans-serif",k(this.a))),this.m.a.style.cssText=t,O(this.g),O(this.h),O(this.j),O(this.m)}_.prototype.c=function(t){for(var n=[],i=0;i<arguments.length;i++)n.push(arguments[i].replace(/[\W_]+/g,"").toLowerCase());return n.join(this.a)},B.prototype.start=function(){var t=this.c.o.document,n=this,i=r(),e=new Promise((function(e,o){!function a(){r()-i>=n.f?o():t.fonts.load(function(t){return E(t)+" "+t.f+"00 300px "+x(t.c)}(n.a),n.h).then((function(t){1<=t.length?e():setTimeout(a,25)}),(function(){o()}))}()})),o=null,a=new Promise((function(t,i){o=setTimeout(i,n.f)}));Promise.race([a,e]).then((function(){o&&(clearTimeout(o),o=null),n.g(n.a)}),(function(){n.j(n.a)}))};var I={D:"serif",C:"sans-serif"},L=null;function G(){if(null===L){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);L=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return L}function q(t,n,i){for(var e in I)if(I.hasOwnProperty(e)&&n===t.f[I[e]]&&i===t.f[I[e]])return!0;return!1}function D(t,n){setTimeout(s((function(){u(this.g.a),u(this.h.a),u(this.j.a),u(this.m.a),n(this.a)}),t),0)}function $(t,n,i){this.c=t,this.a=n,this.f=0,this.m=this.j=!1,this.s=i}P.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(n){var i,e=n.g.a.offsetWidth,o=n.h.a.offsetWidth;(i=e===n.f.serif&&o===n.f["sans-serif"])||(i=G()&&q(n,e,o)),i?r()-n.A>=n.w?G()&&q(n,e,o)&&(null===n.u||n.u.hasOwnProperty(n.a.c))?D(n,n.v):D(n,n.B):function(n){setTimeout(s((function(){t(this)}),n),50)}(n):D(n,n.v)}(this)};var R=null;function H(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&g(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),C(t,"active")):F(t.a))}function J(t){this.j=t,this.a=new N,this.h=0,this.f=this.g=!0}function M(t,n,i,e,o){var a=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=o||null,r=e||{};if(0===i.length&&a)F(n.a);else{n.f+=i.length,a&&(n.j=a);var c,l=[];for(c=0;c<i.length;c++){var f=i[c],h=r[f.c],u=n.a,p=f;if(u.g&&g(u.f,[u.a.c("wf",p.c,k(p).toString(),"loading")]),C(u,"fontloading",p),u=null,null===R)if(window.FontFace){p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);R=p?42<parseInt(p[1],10):!d}else R=!1;u=R?new B(s(n.g,n),s(n.h,n),n.c,f,n.s,h):new P(s(n.g,n),s(n.h,n),n.c,f,n.s,t,h),l.push(u)}for(c=0;c<l.length;c++)l[c].start()}}),0)}function z(t,n){this.c=t,this.a=n}function K(t,n){this.c=t,this.a=n}function U(t,n){this.c=t||V,this.a=[],this.f=[],this.g=n||""}$.prototype.g=function(t){var n=this.a;n.g&&g(n.f,[n.a.c("wf",t.c,k(t).toString(),"active")],[n.a.c("wf",t.c,k(t).toString(),"loading"),n.a.c("wf",t.c,k(t).toString(),"inactive")]),C(n,"fontactive",t),this.m=!0,H(this)},$.prototype.h=function(t){var n=this.a;if(n.g){var i=p(n.f,n.a.c("wf",t.c,k(t).toString(),"active")),e=[],o=[n.a.c("wf",t.c,k(t).toString(),"loading")];i||e.push(n.a.c("wf",t.c,k(t).toString(),"inactive")),g(n.f,e,o)}C(n,"fontinactive",t),H(this)},J.prototype.load=function(t){this.c=new c(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,n,i){var e=[],o=i.timeout;!function(t){t.g&&g(t.f,[t.a.c("wf","loading")]),C(t,"loading")}(n),e=function(t,n,i){var e,o=[];for(e in n)if(n.hasOwnProperty(e)){var a=t.c[e];a&&o.push(a(n[e],i))}return o}(t.a,i,t.c);var a=new $(t.c,n,o);for(t.h=e.length,n=0,i=e.length;n<i;n++)e[n].load((function(n,i,e){M(t,a,n,i,e)}))}(this,new T(this.c,t),t)},z.prototype.load=function(t){var n=this,i=n.a.projectId,e=n.a.version;if(i){var o=n.c.o;m(this.c,(n.a.api||"https://fast.fonts.net/jsapi")+"/"+i+".js"+(e?"?v="+e:""),(function(e){e?t([]):(o["__MonotypeConfiguration__"+i]=function(){return n.a},function n(){if(o["__mti_fntLst"+i]){var e,a=o["__mti_fntLst"+i](),s=[];if(a)for(var r=0;r<a.length;r++){var c=a[r].fontfamily;null!=a[r].fontStyle&&null!=a[r].fontWeight?(e=a[r].fontStyle+a[r].fontWeight,s.push(new j(c,e))):s.push(new j(c))}t(s)}else setTimeout((function(){n()}),50)}())})).id="__MonotypeAPIScript__"+i}else t([])},K.prototype.load=function(t){var n,i,e=this.a.urls||[],o=this.a.families||[],a=this.a.testStrings||{},s=new v;for(n=0,i=e.length;n<i;n++)d(this.c,e[n],w(s));var r=[];for(n=0,i=o.length;n<i;n++)if((e=o[n].split(":"))[1])for(var c=e[1].split(","),l=0;l<c.length;l+=1)r.push(new j(e[0],c[l]));else r.push(new j(e[0]));y(s,(function(){t(r,a)}))};var V="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function nt(t,n){this.c=t,this.a=n}var it={Arimo:!0,Cousine:!0,Tinos:!0};function et(t,n){this.c=t,this.a=n}function ot(t,n){this.c=t,this.f=n,this.a=[]}nt.prototype.load=function(t){var n=new v,i=this.c,e=new U(this.a.api,this.a.text),o=this.a.families;!function(t,n){for(var i=n.length,e=0;e<i;e++){var o=n[e].split(":");3==o.length&&t.f.push(o.pop());var a="";2==o.length&&""!=o[1]&&(a=":"),t.a.push(o.join(a))}}(e,o);var a=new X(o);!function(t){for(var n=t.f.length,i=0;i<n;i++){var e=t.f[i].split(":"),o=e[0].replace(/\+/g," "),a=["n4"];if(2<=e.length){var s;if(s=[],r=e[1])for(var r,c=(r=r.split(",")).length,l=0;l<c;l++){var f;if((f=r[l]).match(/^[\w-]+$/))if(null==(h=tt.exec(f.toLowerCase())))f="";else{if(f=null==(f=h[2])||""==f?"n":Z[f],null==(h=h[1])||""==h)h="4";else var h=Y[h]||(isNaN(h)?"4":h.substr(0,1));f=[f,h].join("")}else f="";f&&s.push(f)}0<s.length&&(a=s),3==e.length&&(s=[],0<(e=(e=e[2])?e.split(","):s).length&&(e=Q[e[0]])&&(t.c[o]=e))}for(t.c[o]||(e=Q[o])&&(t.c[o]=e),e=0;e<a.length;e+=1)t.a.push(new j(o,a[e]))}}(a),d(i,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var n=t.a.length,i=[],e=0;e<n;e++)i.push(t.a[e].replace(/ /g,"+"));return n=t.c+"?family="+i.join("%7C"),0<t.f.length&&(n+="&subset="+t.f.join(",")),0<t.g.length&&(n+="&text="+encodeURIComponent(t.g)),n}(e),w(n)),y(n,(function(){t(a.a,a.c,it)}))},et.prototype.load=function(t){var n=this.a.id,i=this.c.o;n?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+n+".js",(function(n){if(n)t([]);else if(i.Typekit&&i.Typekit.config&&i.Typekit.config.fn){n=i.Typekit.config.fn;for(var e=[],o=0;o<n.length;o+=2)for(var a=n[o],s=n[o+1],r=0;r<s.length;r++)e.push(new j(a,s[r]));try{i.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(e)}}),2e3):t([])},ot.prototype.load=function(t){var n=this.f.id,i=this.c.o,e=this;n?(i.__webfontfontdeckmodule__||(i.__webfontfontdeckmodule__={}),i.__webfontfontdeckmodule__[n]=function(n,i){for(var o=0,a=i.fonts.length;o<a;++o){var s=i.fonts[o];e.a.push(new j(s.name,S("font-weight:"+s.weight+";font-style:"+s.style)))}t(e.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+n+".js",(function(n){n&&t([])}))):t([])};var at=new J(window);at.a.c.custom=function(t,n){return new K(n,t)},at.a.c.fontdeck=function(t,n){return new ot(n,t)},at.a.c.monotype=function(t,n){return new z(n,t)},at.a.c.typekit=function(t,n){return new et(n,t)},at.a.c.google=function(t,n){return new nt(n,t)};var st={load:s(at.load,at)};void 0===(e=function(){return st}.call(n,i,n,t))||(t.exports=e)}()},484:function(t,n,i){"use strict";i.r(n);var e=i(0),o=i.n(e),a=i(1),s=i(10),r=i(201),c=i(5),l=i(7);const f=t=>{const{state:n,inspectorControls:i,togglePreview:f}=t;t=t.parentProps;const{attributes:h}=t,{titleFontFamily:u,titleFontWeight:g,titleLoadGoogleFonts:p,metaFontFamily:d,metaFontWeight:m,metaLoadGoogleFonts:v,excerptFontFamily:w,excerptFontWeight:y,excerptLoadGoogleFonts:b,ctaFontFamily:_,ctaFontWeight:j,ctaLoadGoogleFonts:x}=h;let k,E,S,T;if(!0===p){const t={google:{families:[u+(g?":"+g:"")]}};k=o.a.createElement(r.a,{config:t})}if(!0===v){const t={google:{families:[d+(m?":"+m:"")]}};E=o.a.createElement(r.a,{config:t})}if(!0===b){const t={google:{families:[w+(y?":"+y:"")]}};S=o.a.createElement(r.a,{config:t})}if(!0===x){const t={google:{families:[_+(j?":"+j:"")]}};T=o.a.createElement(r.a,{config:t})}return o.a.createElement(e.Suspense,{fallback:Object(s.a)()},i,o.a.createElement(c.BlockControls,null,(()=>{const{isEditing:t}=n;return o.a.createElement(l.ToolbarGroup,{controls:[{icon:"edit",title:Object(a.__)("Edit"),onClick:()=>f(),isActive:t}]})})()),k,E,S,T)};n.default=o.a.memo(f)}}]);