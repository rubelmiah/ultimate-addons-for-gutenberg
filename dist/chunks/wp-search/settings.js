(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[113],{199:function(e,t,a){"use strict";var o,n,l=a(37),i=a.n(l),r=a(200),u=a.n(r),s=a(2);if(void 0===d)var d=[];const b=e=>{const[t,a]=Object(s.useState)([]);Object(s.useEffect)(()=>{r()},[]),Object(s.useEffect)(()=>{const{onStatus:a,config:o}=e;void 0!==t.status&&a(t.status),o!==t.config&&r()},[e]);const o=()=>{a({status:"loading"})},n=e=>{d.includes(e)||d.push(e)},l=()=>{a({status:"active"})},i=()=>{a({status:"inactive"})},r=()=>{d.includes(e.config.google.families[0])||(u.a.load({...e.config,loading:o,active:l,inactive:i}),n(e.config.google.families[0]));const t=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==t.length||0!==a.length){const r=(t[0]||a[0]).getElementsByTagName("iframe")[0];r&&(u.a.load({...e.config,loading:o,active:l,inactive:i,context:null==r?void 0:r.contentWindow}),n(e.config.google.families[0]))}},{children:b}=e;return b||null};b.propTypes={config:null===(o=i.a.object)||void 0===o?void 0:o.isRequired,children:i.a.element,onStatus:null===(n=i.a.func)||void 0===n?void 0:n.isRequired},b.defaultProps={onStatus:()=>{}},t.a=b},200:function(e,t,a){var o;!function(){function n(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var o=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,o),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function d(e,t,a,o){if(t=e.c.createElement(t),a)for(var n in a)a.hasOwnProperty(n)&&("style"==n?t.style.cssText=a[n]:t.setAttribute(n,a[n]));return o&&t.appendChild(e.c.createTextNode(o)),t}function b(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function c(e){e.parentNode&&e.parentNode.removeChild(e)}function g(e,t,a){t=t||[],a=a||[];for(var o=e.className.split(/\s+/),n=0;n<t.length;n+=1){for(var l=!1,i=0;i<o.length;i+=1)if(t[n]===o[i]){l=!0;break}l||o.push(t[n])}for(t=[],n=0;n<o.length;n+=1){for(l=!1,i=0;i<a.length;i+=1)if(o[n]===a[i]){l=!0;break}l||t.push(o[n])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(e,t){for(var a=e.className.split(/\s+/),o=0,n=a.length;o<n;o++)if(a[o]==t)return!0;return!1}function f(e,t,a){function o(){r&&n&&l&&(r(i),r=null)}t=d(e,"link",{rel:"stylesheet",href:t,media:"all"});var n=!1,l=!0,i=null,r=a||null;s?(t.onload=function(){n=!0,o()},t.onerror=function(){n=!0,i=Error("Stylesheet failed to load"),o()}):setTimeout((function(){n=!0,o()}),0),b(e,"head",t)}function p(e,t,a,o){var n=e.c.getElementsByTagName("head")[0];if(n){var l=d(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&n.removeChild(l))},n.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),o||5e3),l}return null}function m(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,_(e)}}function w(e,t){e.c=t,_(e)}function _(e){0==e.a&&e.c&&(e.c(),e.c=null)}function x(e){this.a=e||"-"}function T(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function y(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var o=e[a].replace(/['"]/g,"");-1!=o.indexOf(" ")||/^\d/.test(o)?t.push("'"+o+"'"):t.push(o)}return t.join(",")}function B(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function j(e){var t=4,a="n",o=null;return e&&((o=e.match(/(normal|oblique|italic)/i))&&o[1]&&(a=o[1].substr(0,1).toLowerCase()),(o=e.match(/([1-9]00|normal|bold)/i))&&o[1]&&(/bold/i.test(o[1])?t=7:/[1-9]00/.test(o[1])&&(t=parseInt(o[1].substr(0,1),10)))),a+t}function C(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new x("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function O(e){if(e.g){var t=h(e.f,e.a.c("wf","active")),a=[],o=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),g(e.f,a,o)}E(e,"inactive")}function E(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,B(a)):e.h[t]())}function L(){this.c={}}function R(e,t){this.c=e,this.f=t,this.a=d(this.c,"span",{"aria-hidden":"true"},this.f)}function I(e){b(e.c,"body",e.a)}function F(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+y(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function M(e,t,a,o,n,l){this.g=e,this.j=t,this.a=o,this.c=a,this.f=n||3e3,this.h=l||void 0}function W(e,t,a,o,n,l,i){this.v=e,this.B=t,this.c=a,this.a=o,this.s=i||"BESbswy",this.f={},this.w=n||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new R(this.c,this.s),this.h=new R(this.c,this.s),this.j=new R(this.c,this.s),this.m=new R(this.c,this.s),e=F(e=new T(this.a.c+",serif",B(this.a))),this.g.a.style.cssText=e,e=F(e=new T(this.a.c+",sans-serif",B(this.a))),this.h.a.style.cssText=e,e=F(e=new T("serif",B(this.a))),this.j.a.style.cssText=e,e=F(e=new T("sans-serif",B(this.a))),this.m.a.style.cssText=e,I(this.g),I(this.h),I(this.j),I(this.m)}x.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},M.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),o=new Promise((function(o,n){!function l(){r()-a>=t.f?n():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+y(e.c)}(t.a),t.h).then((function(e){1<=e.length?o():setTimeout(l,25)}),(function(){n()}))}()})),n=null,l=new Promise((function(e,a){n=setTimeout(a,t.f)}));Promise.race([l,o]).then((function(){n&&(clearTimeout(n),n=null),t.g(t.a)}),(function(){t.j(t.a)}))};var z={D:"serif",C:"sans-serif"},H=null;function k(){if(null===H){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);H=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return H}function N(e,t,a){for(var o in z)if(z.hasOwnProperty(o)&&t===e.f[z[o]]&&a===e.f[z[o]])return!0;return!1}function A(e,t){setTimeout(i((function(){c(this.g.a),c(this.h.a),c(this.j.a),c(this.m.a),t(this.a)}),e),0)}function P(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}W.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,o=t.g.a.offsetWidth,n=t.h.a.offsetWidth;(a=o===t.f.serif&&n===t.f["sans-serif"])||(a=k()&&N(t,o,n)),a?r()-t.A>=t.w?k()&&N(t,o,n)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?A(t,t.v):A(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):A(t,t.v)}(this)};var V=null;function U(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&g(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),E(e,"active")):O(e.a))}function D(e){this.j=e,this.a=new L,this.h=0,this.f=this.g=!0}function G(e,t,a,o,n){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=n||null,r=o||{};if(0===a.length&&l)O(t.a);else{t.f+=a.length,l&&(t.j=l);var u,s=[];for(u=0;u<a.length;u++){var d=a[u],b=r[d.c],c=t.a,h=d;if(c.g&&g(c.f,[c.a.c("wf",h.c,B(h).toString(),"loading")]),E(c,"fontloading",h),c=null,null===V)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var f=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);V=h?42<parseInt(h[1],10):!f}else V=!1;c=V?new M(i(t.g,t),i(t.h,t),t.c,d,t.s,b):new W(i(t.g,t),i(t.h,t),t.c,d,t.s,e,b),s.push(c)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}P.prototype.g=function(e){var t=this.a;t.g&&g(t.f,[t.a.c("wf",e.c,B(e).toString(),"active")],[t.a.c("wf",e.c,B(e).toString(),"loading"),t.a.c("wf",e.c,B(e).toString(),"inactive")]),E(t,"fontactive",e),this.m=!0,U(this)},P.prototype.h=function(e){var t=this.a;if(t.g){var a=h(t.f,t.a.c("wf",e.c,B(e).toString(),"active")),o=[],n=[t.a.c("wf",e.c,B(e).toString(),"loading")];a||o.push(t.a.c("wf",e.c,B(e).toString(),"inactive")),g(t.f,o,n)}E(t,"fontinactive",e),U(this)},D.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var o=[],n=a.timeout;!function(e){e.g&&g(e.f,[e.a.c("wf","loading")]),E(e,"loading")}(t),o=function(e,t,a){var o,n=[];for(o in t)if(t.hasOwnProperty(o)){var l=e.c[o];l&&n.push(l(t[o],a))}return n}(e.a,a,e.c);var l=new P(e.c,t,n);for(e.h=o.length,t=0,a=o.length;t<a;t++)o[t].load((function(t,a,o){G(e,l,t,a,o)}))}(this,new C(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,o=t.a.version;if(a){var n=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(o?"?v="+o:""),(function(o){o?e([]):(n["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(n["__mti_fntLst"+a]){var o,l=n["__mti_fntLst"+a](),i=[];if(l)for(var r=0;r<l.length;r++){var u=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(o=l[r].fontStyle+l[r].fontWeight,i.push(new T(u,o))):i.push(new T(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,o=this.a.urls||[],n=this.a.families||[],l=this.a.testStrings||{},i=new m;for(t=0,a=o.length;t<a;t++)f(this.c,o[t],v(i));var r=[];for(t=0,a=n.length;t<a;t++)if((o=n[t].split(":"))[1])for(var u=o[1].split(","),s=0;s<u.length;s+=1)r.push(new T(o[0],u[s]));else r.push(new T(o[0]));w(i,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function oe(e,t){this.c=e,this.a=t}function ne(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,a=this.c,o=new J(this.a.api,this.a.text),n=this.a.families;!function(e,t){for(var a=t.length,o=0;o<a;o++){var n=t[o].split(":");3==n.length&&e.f.push(n.pop());var l="";2==n.length&&""!=n[1]&&(l=":"),e.a.push(n.join(l))}}(o,n);var l=new X(n);!function(e){for(var t=e.f.length,a=0;a<t;a++){var o=e.f[a].split(":"),n=o[0].replace(/\+/g," "),l=["n4"];if(2<=o.length){var i;if(i=[],r=o[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var d;if((d=r[s]).match(/^[\w-]+$/))if(null==(b=ee.exec(d.toLowerCase())))d="";else{if(d=null==(d=b[2])||""==d?"n":Z[d],null==(b=b[1])||""==b)b="4";else var b=Y[b]||(isNaN(b)?"4":b.substr(0,1));d=[d,b].join("")}else d="";d&&i.push(d)}0<i.length&&(l=i),3==o.length&&(i=[],0<(o=(o=o[2])?o.split(","):i).length&&(o=Q[o[0]])&&(e.c[n]=o))}for(e.c[n]||(o=Q[n])&&(e.c[n]=o),o=0;o<l.length;o+=1)e.a.push(new T(n,l[o]))}}(l),f(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],o=0;o<t;o++)a.push(e.a[o].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(o),v(t)),w(t,(function(){e(l.a,l.c,ae)}))},oe.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var o=[],n=0;n<t.length;n+=2)for(var l=t[n],i=t[n+1],r=0;r<i.length;r++)o.push(new T(l,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(o)}}),2e3):e([])},ne.prototype.load=function(e){var t=this.f.id,a=this.c.o,o=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var n=0,l=a.fonts.length;n<l;++n){var i=a.fonts[n];o.a.push(new T(i.name,j("font-weight:"+i.weight+";font-style:"+i.style)))}e(o.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new D(window);le.a.c.custom=function(e,t){return new $(t,e)},le.a.c.fontdeck=function(e,t){return new ne(t,e)},le.a.c.monotype=function(e,t){return new q(t,e)},le.a.c.typekit=function(e,t){return new oe(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(o=function(){return ie}.call(t,a,t,e))||(e.exports=o)}()},206:function(e,t,a){"use strict";var o=a(14),n=a.n(o)()((function(e){return e[1]}));n.push([e.i,'/** Box Shadow Popup CSS*/\n.uag-box-shadow-options {\n  margin-bottom: 24px;\n  position: relative; }\n  .uag-box-shadow-options .uag-box-shadow-option-actions {\n    display: flex;\n    justify-content: space-between;\n    margin: 0;\n    align-items: center; }\n    .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button {\n      margin: 0;\n      height: 28px;\n      width: 28px;\n      padding: 5px;\n      border: 1px solid #d3d3d3;\n      border-radius: 14px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button .dashicons-edit {\n        font-size: 15px;\n        line-height: 20px; }\n      .uag-box-shadow-options .uag-box-shadow-option-actions .uag-box-shadow-button:focus:not(:disabled) {\n        box-shadow: none;\n        outline: none; }\n  .uag-box-shadow-options .uagb-box-shadow-advanced {\n    border: 1px solid #d3d3d3;\n    border-radius: 3px;\n    padding: 15px;\n    margin: 10px 0;\n    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);\n    position: absolute;\n    top: 25;\n    right: 0;\n    background: #fff;\n    z-index: 99;\n    width: 100%; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced > .components-base-control {\n      margin-top: 0; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after, .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      bottom: 100%;\n      right: 8px;\n      border: solid transparent;\n      content: "";\n      height: 0;\n      width: 0;\n      position: absolute;\n      pointer-events: none; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::after {\n      right: 9px;\n      border-color: rgba(255, 255, 255, 0);\n      border-bottom-color: #fff;\n      border-width: 5px;\n      margin-left: -5px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced::before {\n      border-color: rgba(211, 211, 211, 0);\n      border-bottom-color: #d3d3d3;\n      border-width: 6px;\n      margin-left: -6px; }\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-shadow-color,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-horizontal-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-vertical-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-blur-wrap,\n    .uag-box-shadow-options .uagb-box-shadow-advanced .uagb-spread-wrap {\n      margin-bottom: 16px; }\n\n.block-editor-block-inspector .components-base-control:last-child {\n  margin-bottom: 0; }\n',""]),t.a=n},209:function(e,t,a){"use strict";var o,n=a(1),l=a(18),i=a(15),r=a(6),u=a(2),s=a(19),d=a(13),b=a.n(d),c=a(206),g=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=c.a.locals||{},f.use=function(){return g++||(o=b()(c.a,h)),f},f.unuse=function(){g>0&&!--g&&(o(),o=null)};var p=f,m=a(0),v=a.n(m);t.a=e=>{const[t,a]=Object(u.useState)(!1);Object(m.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),Object(m.useLayoutEffect)(()=>{window.addEventListener("click",(function(e){const t=document.querySelector(".uagb-box-shadow-advanced"),o=document.querySelector(".uag-box-shadow-button");var n,l,i,r;t&&(null!=t&&t.contains(e.target)||null!=o&&o.contains(e.target)||null!==(n=e.target)&&void 0!==n&&null!==(l=n.classList)&&void 0!==l&&l.contains("uagb-advanced-color-indicate")||null!==(i=e.target)&&void 0!==i&&null!==(r=i.parentElement)&&void 0!==r&&r.closest(".uagb-popover-color")||a(!1))}))},[]);const{setAttributes:o,boxShadowColor:d,boxShadowHOffset:b,boxShadowVOffset:c,boxShadowBlur:g,boxShadowSpread:h,boxShadowPosition:f}=e;let w;const _=t?"active":"";t&&(w=v.a.createElement("div",{className:"uagb-box-shadow-advanced"},v.a.createElement("div",{className:"uagb-shadow-color"},v.a.createElement(i.a,{label:d.title,colorValue:d.value,onColorChange:e=>o({[d.label]:e})})),v.a.createElement("div",{className:"uagb-horizontal-wrap"},v.a.createElement(l.a,{label:b.title,value:b.value,min:0,max:100,displayUnit:!1,setAttributes:o,data:{value:b.value,label:b.label},onChange:!1})),v.a.createElement("div",{className:"uagb-vertical-wrap"},v.a.createElement(l.a,{label:c.title,value:c.value,min:0,max:100,displayUnit:!1,setAttributes:o,data:{value:c.value,label:c.label},onChange:!1})),v.a.createElement("div",{className:"uagb-blur-wrap"},v.a.createElement(l.a,{label:g.title,value:g.value,min:0,max:100,displayUnit:!1,setAttributes:o,data:{value:g.value,label:g.label},onChange:!1})),v.a.createElement("div",{className:"uagb-spread-wrap"},v.a.createElement(l.a,{label:h.title,value:h.value,min:-100,max:100,displayUnit:!1,setAttributes:o,data:{value:h.value,label:h.label},onChange:!1})),v.a.createElement("div",{className:"uagb-shadow-type"},v.a.createElement(s.a,{setAttributes:o,label:f.title,data:{value:f.value,label:f.label},options:[{value:"outset",label:Object(n.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(n.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}))));const x=v.a.createElement("div",{className:"uag-box-shadow-option-actions"},v.a.createElement("span",{className:"uag-control-label"},Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg")),v.a.createElement(r.Button,{className:"uag-box-shadow-button","aria-pressed":t,onClick:()=>a(!t)},v.a.createElement(r.Dashicon,{icon:"edit"})));return v.a.createElement("div",{className:"components-base-control uag-box-shadow-options "+_},x,t&&w)}},210:function(e,t,a){"use strict";var o=a(14),n=a.n(o)()((function(e){return e[1]}));n.push([e.i,".uag-border-select-control .uag-border-type .components-select-control {\n  align-items: center;\n  display: grid;\n  grid-template-columns: 50% 50%; }\n\n.uag-border-select-control .uag-border-width,\n.uag-border-select-control .uag-border-radius,\n.uag-border-select-control .uag-border-color,\n.uag-border-select-control .uag-border-hv-color {\n  margin-top: 24px; }\n\n.uag-border-select-control .uag-border-radius {\n  margin-bottom: 24px; }\n",""]),t.a=n},212:function(e,t,a){"use strict";var o,n=a(1),l=a(15),i=a(6),r=a(56),u=a(55),s=a(13),d=a.n(s),b=a(210),c=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},h={};h.locals=b.a.locals||{},h.use=function(){return c++||(o=d()(b.a,g)),h},h.unuse=function(){c>0&&!--c&&(o(),o=null)};var f=h,p=a(0),m=a.n(p),v=a(37),w=a.n(v);const _={prefix:w.a.string,borderStyleLabel:w.a.string,borderWidthLabel:w.a.string,borderRadiusLabel:w.a.string,borderColorLabel:w.a.string},x={borderStyleLabel:Object(n.__)("Style","ultimate-addons-for-gutenberg"),borderWidthLabel:Object(n.__)("Width","ultimate-addons-for-gutenberg"),borderRadiusLabel:Object(n.__)("Radius","ultimate-addons-for-gutenberg"),borderColorLabel:Object(n.__)("Color","ultimate-addons-for-gutenberg"),borderHoverColorLabel:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg")},T=e=>{Object(p.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]);const{attributes:t,setAttributes:a,disabledBorderTitle:o,deviceType:s,prefix:d,borderStyleLabel:b,borderWidthLabel:c,borderRadiusLabel:g,borderColorLabel:h,borderHoverColorLabel:v}=e,w=[{name:"normal",title:Object(n.__)("Normal","ultimate-addons-for-gutenberg")}];w.push({name:"hover",title:Object(n.__)("Hover","ultimate-addons-for-gutenberg")});const _=t[d+"BorderStyle"],x=m.a.createElement(l.a,{label:h,colorValue:t[d+"BorderColor"],onColorChange:e=>a({[d+"BorderColor"]:e})}),T=m.a.createElement(l.a,{label:v,colorValue:t[d+"BorderHColor"],onColorChange:e=>a({[d+"BorderHColor"]:e})}),y=m.a.createElement(m.a.Fragment,null,!o&&m.a.createElement("h2",null,Object(n.__)("Border","ultimate-addons-for-gutenberg")),m.a.createElement("div",{className:"uag-border-type"},m.a.createElement(i.SelectControl,{label:b,labelPosition:"top",value:_,onChange:e=>a({[d+"BorderStyle"]:e}),options:[{value:"none",label:Object(n.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(n.__)("Solid","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(n.__)("Dotted","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(n.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"double",label:Object(n.__)("Double","ultimate-addons-for-gutenberg")},{value:"groove",label:Object(n.__)("Groove","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(n.__)("Inset","ultimate-addons-for-gutenberg")},{value:"outset",label:Object(n.__)("Outset","ultimate-addons-for-gutenberg")},{value:"ridge",label:Object(n.__)("Ridge","ultimate-addons-for-gutenberg")}]})),"none"!==_&&m.a.createElement("div",{className:"uag-border-width"},m.a.createElement(u.a,{label:c,valueTop:{value:t[d+"BorderTopWidth"],label:d+"BorderTopWidth"},valueRight:{value:t[d+"BorderRightWidth"],label:d+"BorderRightWidth"},valueBottom:{value:t[d+"BorderBottomWidth"],label:d+"BorderBottomWidth"},valueLeft:{value:t[d+"BorderLeftWidth"],label:d+"BorderLeftWidth"},valueTopTablet:{value:t[d+"BorderTopWidthTablet"],label:d+"BorderTopWidthTablet"},valueRightTablet:{value:t[d+"BorderRightWidthTablet"],label:d+"BorderRightWidthTablet"},valueBottomTablet:{value:t[d+"BorderBottomWidthTablet"],label:d+"BorderBottomWidthTablet"},valueLeftTablet:{value:t[d+"BorderLeftWidthTablet"],label:d+"BorderLeftWidthTablet"},valueTopMobile:{value:t[d+"BorderTopWidthMobile"],label:d+"BorderTopWidthMobile"},valueRightMobile:{value:t[d+"BorderRightWidthMobile"],label:d+"BorderRightWidthMobile"},valueBottomMobile:{value:t[d+"BorderBottomWidthMobile"],label:d+"BorderBottomWidthMobile"},valueLeftMobile:{value:t[d+"BorderLeftWidthMobile"],label:d+"BorderLeftWidthMobile"},disableUnits:!0,deviceType:s,attributes:t,setAttributes:a,link:{value:t[d+"BorderLink"],label:d+"BorderLink"}})),m.a.createElement("div",{className:"uag-border-radius"},m.a.createElement(u.a,{label:g,valueTop:{value:t[d+"BorderTopLeftRadius"],label:d+"BorderTopLeftRadius"},valueRight:{value:t[d+"BorderTopRightRadius"],label:d+"BorderTopRightRadius"},valueBottom:{value:t[d+"BorderBottomRightRadius"],label:d+"BorderBottomRightRadius"},valueLeft:{value:t[d+"BorderBottomLeftRadius"],label:d+"BorderBottomLeftRadius"},valueTopTablet:{value:t[d+"BorderTopLeftRadiusTablet"],label:d+"BorderTopLeftRadiusTablet"},valueRightTablet:{value:t[d+"BorderTopRightRadiusTablet"],label:d+"BorderTopRightRadiusTablet"},valueBottomTablet:{value:t[d+"BorderBottomRightRadiusTablet"],label:d+"BorderBottomRightRadiusTablet"},valueLeftTablet:{value:t[d+"BorderBottomLeftRadiusTablet"],label:d+"BorderBottomLeftRadiusTablet"},valueTopMobile:{value:t[d+"BorderTopLeftRadiusMobile"],label:d+"BorderTopLeftRadiusMobile"},valueRightMobile:{value:t[d+"BorderTopRightRadiusMobile"],label:d+"BorderTopRightRadiusMobile"},valueBottomMobile:{value:t[d+"BorderBottomRightRadiusMobile"],label:d+"BorderBottomRightRadiusMobile"},valueLeftMobile:{value:t[d+"BorderBottomLeftRadiusMobile"],label:d+"BorderBottomLeftRadiusMobile"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],unit:{value:t[d+"BorderRadiusUnit"],label:d+"BorderRadiusUnit"},mUnit:{value:t[d+"BorderRadiusUnitMobile"],label:d+"BorderRadiusUnitMobile"},tUnit:{value:t[d+"BorderRadiusUnitTablet"],label:d+"BorderRadiusUnitTablet"},deviceType:s,attributes:t,setAttributes:a,link:{value:t[d+"BorderRadiusLink"],label:d+"BorderRadiusLink"}})),"none"!==_&&m.a.createElement(r.a,{tabs:w,normal:x,hover:T,active:"",disableBottomSeparator:e.disableBottomSeparator}));return m.a.createElement("div",{className:"uag-border-select-control components-base-control"},y)};t.a=T,T.propTypes=_,T.defaultProps=x},508:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a(32),l=a(209),i=a(19),r=a(199),u=a(0),s=a.n(u),d=a(55),b=a(18),c=a(56),g=a(79),h=a(25),f=a(15),p=a(6),m=a(212),v=a(4),w=a(16);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e}).apply(this,arguments)}const x=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,deviceType:u}=e,{layout:x,placeholder:T,inputSize:y,textColor:B,inputBgColor:S,boxShadowColor:j,boxShadowHOffset:C,boxShadowVOffset:O,boxShadowBlur:E,boxShadowSpread:L,boxShadowPosition:R,buttonBgColor:I,buttonBgHoverColor:F,buttonIconColor:M,buttonIconHoverColor:W,buttonWidth:z,buttonWidthType:H,buttonIconSize:k,buttonIconSizeType:N,iconColor:A,iconSize:P,inputloadGoogleFonts:V,inputFontFamily:U,inputFontWeight:D,inputFontSize:G,inputFontSizeType:q,inputFontSizeTablet:$,inputFontSizeMobile:J,inputLineHeight:K,inputLineHeightType:X,inputLineHeightTablet:Q,inputLineHeightMobile:Y,inputPaddingTypeDesktop:Z,buttonType:ee,buttonText:te,buttonloadGoogleFonts:ae,buttonFontFamily:oe,buttonFontWeight:ne,buttonFontSize:le,buttonFontSizeType:ie,buttonFontSizeTablet:re,buttonFontSizeMobile:ue,buttonLineHeight:se,buttonLineHeightType:de,buttonLineHeightTablet:be,buttonTransform:ce,buttonDecoration:ge,buttonLineHeightMobile:he,buttonTextColor:fe,buttonTextHoverColor:pe,inputSizeType:me,paddingInputTop:ve,paddingInputRight:we,paddingInputBottom:_e,paddingInputLeft:xe,paddingInputTopTablet:Te,paddingInputRightTablet:ye,paddingInputBottomTablet:Be,paddingInputLeftTablet:Se,paddingInputTopMobile:je,paddingInputRightMobile:Ce,paddingInputBottomMobile:Oe,paddingInputLeftMobile:Ee,mobilePaddingInputUnit:Le,tabletPaddingInputUnit:Re,spacingLink:Ie,iconSizeType:Fe,inputTransform:Me,inputDecoration:We,inputFontStyle:ze,buttonFontStyle:He}=t;let ke,Ne;if(!0===V){const e={google:{families:[U+(D?":"+D:"")]}};ke=s.a.createElement(r.a,{config:e})}if(!0===ae){const e={google:{families:[oe+(ne?":"+ne:"")]}};Ne=s.a.createElement(r.a,{config:e})}return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.InspectorControls,null,s.a.createElement(g.a,null,s.a.createElement(h.b,h.a.general,s.a.createElement(w.a,{initialOpen:!0},s.a.createElement(i.a,{setAttributes:a,label:Object(o.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:x,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"input-button",label:"Classic"},{value:"input",label:"Minimal"}],showIcons:!1}),s.a.createElement(p.TextControl,{label:Object(o.__)("Placeholder","ultimate-addons-for-gutenberg"),value:T,onChange:e=>a({placeholder:e})}),s.a.createElement(b.a,{label:Object(o.__)("Input Width","ultimate-addons-for-gutenberg"),setAttributes:a,value:y,onChange:e=>a({inputSize:e}),min:0,max:200,units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],unit:{value:me,label:"inputSizeType"}}),"input-button"===x&&s.a.createElement(i.a,{setAttributes:a,label:Object(o.__)("Button Type","ultimate-addons-for-gutenberg"),data:{value:ee,label:"buttonType"},className:"uagb-multi-button-alignment-control",options:[{value:"icon",label:"Icon"},{value:"text",label:"Text"}],showIcons:!1}),"input-button"===x&&"text"===ee&&s.a.createElement(s.a.Fragment,null,s.a.createElement(p.TextControl,{label:"Text",value:te,onChange:e=>{a({buttonText:e})}})))),s.a.createElement(h.b,h.a.style,s.a.createElement(w.a,{title:Object(o.__)("Input Box","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(f.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:e=>a({textColor:e})}),s.a.createElement(f.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:S||"",onColorChange:e=>a({inputBgColor:e})}),s.a.createElement(m.a,{setAttributes:a,borderStyleLabel:Object(o.__)("Style","ultimate-addons-for-gutenberg"),borderWidthLabel:Object(o.__)("Width","ultimate-addons-for-gutenberg"),borderRadiusLabel:Object(o.__)("Radius","ultimate-addons-for-gutenberg"),borderColorLabel:Object(o.__)("Color","ultimate-addons-for-gutenberg"),borderHoverColorLabel:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg"),prefix:"input",attributes:t,deviceType:u,disableBottomSeparator:!0}),s.a.createElement(d.a,_({},e,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ve,label:"paddingInputTop"},valueRight:{value:we,label:"paddingInputRight"},valueBottom:{value:_e,label:"paddingInputBottom"},valueLeft:{value:xe,label:"paddingInputLeft"},valueTopTablet:{value:Te,label:"paddingInputTopTablet"},valueRightTablet:{value:ye,label:"paddingInputRightTablet"},valueBottomTablet:{value:Be,label:"paddingInputBottomTablet"},valueLeftTablet:{value:Se,label:"paddingInputLeftTablet"},valueTopMobile:{value:je,label:"paddingInputTopMobile"},valueRightMobile:{value:Ce,label:"paddingInputRightMobile"},valueBottomMobile:{value:Oe,label:"paddingInputBottomMobile"},valueLeftMobile:{value:Ee,label:"paddingInputLeftMobile"},unit:{value:Z,label:"inputPaddingTypeDesktop"},mUnit:{value:Le,label:"mobilePaddingInputUnit"},tUnit:{value:Re,label:"tabletPaddingInputUnit"},deviceType:u,attributes:t,setAttributes:a,link:{value:Ie,label:"spacingLink"},units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),s.a.createElement(n.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:V,label:"inputloadGoogleFonts"},fontFamily:{value:U,label:"inputFontFamily"},fontWeight:{value:D,label:"inputFontWeight"},fontStyle:{value:ze,label:"inputFontStyle"},fontSizeType:{value:q,label:"inputFontSizeType"},fontSize:{value:G,label:"inputFontSize"},fontSizeMobile:{value:J,label:"inputFontSizeMobile"},fontSizeTablet:{value:$,label:"inputFontSizeTablet"},lineHeightType:{value:X,label:"inputLineHeightType"},lineHeight:{value:K,label:"inputLineHeight"},lineHeightMobile:{value:Y,label:"inputLineHeightMobile"},lineHeightTablet:{value:Q,label:"inputLineHeightTablet"},transform:{value:Me,label:"inputTransform"},decoration:{value:We,label:"inputDecoration"}}),s.a.createElement(l.a,{setAttributes:a,label:Object(o.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:j,label:"boxShadowColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:C,label:"boxShadowHOffset",title:Object(o.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:O,label:"boxShadowVOffset",title:Object(o.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:E,label:"boxShadowBlur",title:Object(o.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:L,label:"boxShadowSpread",title:Object(o.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:R,label:"boxShadowPosition",title:Object(o.__)("Position","ultimate-addons-for-gutenberg")}})),"input"===x?s.a.createElement(w.a,{title:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:P,onChange:e=>{a({iconSize:e})},min:0,max:100,unit:{value:Fe,label:"iconSizeType"}}),s.a.createElement(f.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:A||"",onColorChange:e=>a({iconColor:e})}))):"",(()=>{const e=s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:I||"",onColorChange:e=>a({buttonBgColor:e})}),"text"===ee&&s.a.createElement(f.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:fe||"",onColorChange:e=>a({buttonTextColor:e})}),"icon"===ee&&s.a.createElement(f.a,{label:Object(o.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:e=>a({buttonIconColor:e})})),l=s.a.createElement(s.a.Fragment,null,s.a.createElement(f.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:F||"",onColorChange:e=>a({buttonBgHoverColor:e})}),"text"===ee&&s.a.createElement(f.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:pe||"",onColorChange:e=>a({buttonTextHoverColor:e})}),"icon"===ee&&s.a.createElement(f.a,{label:Object(o.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:W||"",onColorChange:e=>a({buttonIconHoverColor:e})}));return"input-button"===x?s.a.createElement(w.a,{title:Object(o.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(b.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:a,value:z,onChange:e=>{a({buttonWidth:e})},min:0,max:500,unit:{value:H,label:"buttonWidthType"}}),"icon"===ee&&s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{label:Object(o.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:k,onChange:e=>{a({buttonIconSize:e})},min:0,max:100,unit:{value:N,label:"buttonIconSizeType"}})),s.a.createElement(c.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:e,hover:l,disableBottomSeparator:!0}),"text"===ee&&s.a.createElement(s.a.Fragment,null,s.a.createElement(n.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:ae,label:"buttonloadGoogleFonts"},fontFamily:{value:oe,label:"buttonFontFamily"},fontWeight:{value:ne,label:"buttonFontWeight"},fontStyle:{value:He,label:"buttonFontStyle"},fontSizeType:{value:ie,label:"buttonFontSizeType"},fontSize:{value:le,label:"buttonFontSize"},fontSizeMobile:{value:ue,label:"buttonFontSizeMobile"},fontSizeTablet:{value:re,label:"buttonFontSizeTablet"},lineHeightType:{value:de,label:"buttonLineHeightType"},lineHeight:{value:se,label:"buttonLineHeight"},lineHeightMobile:{value:he,label:"buttonLineHeightMobile"},lineHeightTablet:{value:be,label:"buttonLineHeightTablet"},transform:{value:ce,label:"buttonTransform"},decoration:{value:ge,label:"buttonDecoration"}}))):""})()),s.a.createElement(h.b,_({},h.a.advance,{parentProps:e})))),ke,Ne)};t.default=s.a.memo(x)}}]);