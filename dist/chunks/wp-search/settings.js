(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[113],{208:function(t,e,a){"use strict";var n,o,l=a(21),i=a.n(l),u=a(209),r=a.n(u),s=a(2);if(void 0===c)var c=[];const b=t=>{const[e,a]=Object(s.useState)([]);Object(s.useEffect)(()=>{u()},[]),Object(s.useEffect)(()=>{const{onStatus:a,config:n}=t;void 0!==e.status&&a(e.status),n!==e.config&&u()},[t]);const n=()=>{a({status:"loading"})},o=t=>{c.includes(t)||c.push(t)},l=()=>{a({status:"active"})},i=()=>{a({status:"inactive"})},u=()=>{c.includes(t.config.google.families[0])||(r.a.load({...t.config,loading:n,active:l,inactive:i}),o(t.config.google.families[0]));const e=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==e.length||0!==a.length){const u=(e[0]||a[0]).getElementsByTagName("iframe")[0];u&&(r.a.load({...t.config,loading:n,active:l,inactive:i,context:null==u?void 0:u.contentWindow}),o(t.config.google.families[0]))}},{children:b}=t;return b||null};b.propTypes={config:null===(n=i.a.object)||void 0===n?void 0:n.isRequired,children:i.a.element,onStatus:null===(o=i.a.func)||void 0===o?void 0:o.isRequired},b.defaultProps={onStatus:()=>{}},e.a=b},209:function(t,e,a){var n;!function(){function o(t,e,a){return t.call.apply(t.bind,arguments)}function l(t,e,a){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),t.apply(e,a)}}return function(){return t.apply(e,arguments)}}function i(t,e,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var u=Date.now||function(){return+new Date};function r(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var s=!!window.FontFace;function c(t,e,a,n){if(e=t.c.createElement(e),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?e.style.cssText=a[o]:e.setAttribute(o,a[o]));return n&&e.appendChild(t.c.createTextNode(n)),e}function b(t,e,a){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(a,t.lastChild)}function d(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t,e,a){e=e||[],a=a||[];for(var n=t.className.split(/\s+/),o=0;o<e.length;o+=1){for(var l=!1,i=0;i<n.length;i+=1)if(e[o]===n[i]){l=!0;break}l||n.push(e[o])}for(e=[],o=0;o<n.length;o+=1){for(l=!1,i=0;i<a.length;i+=1)if(n[o]===a[i]){l=!0;break}l||e.push(n[o])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function p(t,e){for(var a=t.className.split(/\s+/),n=0,o=a.length;n<o;n++)if(a[n]==e)return!0;return!1}function g(t,e,a){function n(){u&&o&&l&&(u(i),u=null)}e=c(t,"link",{rel:"stylesheet",href:e,media:"all"});var o=!1,l=!0,i=null,u=a||null;s?(e.onload=function(){o=!0,n()},e.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),n()}):setTimeout((function(){o=!0,n()}),0),b(t,"head",e)}function h(t,e,a,n){var o=t.c.getElementsByTagName("head")[0];if(o){var l=c(t,"script",{src:e}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function m(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,y(t)}}function _(t,e){t.c=e,y(t)}function y(t){0==t.a&&t.c&&(t.c(),t.c=null)}function w(t){this.a=t||"-"}function S(t,e){this.c=t,this.f=4,this.a="n";var a=(e||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function T(t){var e=[];t=t.split(/,\s*/);for(var a=0;a<t.length;a++){var n=t[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?e.push("'"+n+"'"):e.push(n)}return e.join(",")}function x(t){return t.a+t.f}function j(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function O(t){var e=4,a="n",n=null;return t&&((n=t.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=t.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?e=7:/[1-9]00/.test(n[1])&&(e=parseInt(n[1].substr(0,1),10)))),a+e}function E(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new w("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function I(t){if(t.g){var e=p(t.f,t.a.c("wf","active")),a=[],n=[t.a.c("wf","loading")];e||a.push(t.a.c("wf","inactive")),f(t.f,a,n)}C(t,"inactive")}function C(t,e,a){t.j&&t.h[e]&&(a?t.h[e](a.c,x(a)):t.h[e]())}function F(){this.c={}}function A(t,e){this.c=t,this.f=e,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function k(t){b(t.c,"body",t.a)}function B(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(t.c)+";font-style:"+j(t)+";font-weight:"+t.f+"00;"}function L(t,e,a,n,o,l){this.g=t,this.j=e,this.a=n,this.c=a,this.f=o||3e3,this.h=l||void 0}function z(t,e,a,n,o,l,i){this.v=t,this.B=e,this.c=a,this.a=n,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new A(this.c,this.s),this.h=new A(this.c,this.s),this.j=new A(this.c,this.s),this.m=new A(this.c,this.s),t=B(t=new S(this.a.c+",serif",x(this.a))),this.g.a.style.cssText=t,t=B(t=new S(this.a.c+",sans-serif",x(this.a))),this.h.a.style.cssText=t,t=B(t=new S("serif",x(this.a))),this.j.a.style.cssText=t,t=B(t=new S("sans-serif",x(this.a))),this.m.a.style.cssText=t,k(this.g),k(this.h),k(this.j),k(this.m)}w.prototype.c=function(t){for(var e=[],a=0;a<arguments.length;a++)e.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},L.prototype.start=function(){var t=this.c.o.document,e=this,a=u(),n=new Promise((function(n,o){!function l(){u()-a>=e.f?o():t.fonts.load(function(t){return j(t)+" "+t.f+"00 300px "+T(t.c)}(e.a),e.h).then((function(t){1<=t.length?n():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(t,a){o=setTimeout(a,e.f)}));Promise.race([l,n]).then((function(){o&&(clearTimeout(o),o=null),e.g(e.a)}),(function(){e.j(e.a)}))};var H={D:"serif",C:"sans-serif"},N=null;function M(){if(null===N){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return N}function P(t,e,a){for(var n in H)if(H.hasOwnProperty(n)&&e===t.f[H[n]]&&a===t.f[H[n]])return!0;return!1}function W(t,e){setTimeout(i((function(){d(this.g.a),d(this.h.a),d(this.j.a),d(this.m.a),e(this.a)}),t),0)}function V(t,e,a){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=u(),function t(e){var a,n=e.g.a.offsetWidth,o=e.h.a.offsetWidth;(a=n===e.f.serif&&o===e.f["sans-serif"])||(a=M()&&P(e,n,o)),a?u()-e.A>=e.w?M()&&P(e,n,o)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?W(e,e.v):W(e,e.B):function(e){setTimeout(i((function(){t(this)}),e),50)}(e):W(e,e.v)}(this)};var R=null;function D(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&f(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),C(t,"active")):I(t.a))}function U(t){this.j=t,this.a=new F,this.h=0,this.f=this.g=!0}function q(t,e,a,n,o){var l=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=o||null,u=n||{};if(0===a.length&&l)I(e.a);else{e.f+=a.length,l&&(e.j=l);var r,s=[];for(r=0;r<a.length;r++){var c=a[r],b=u[c.c],d=e.a,p=c;if(d.g&&f(d.f,[d.a.c("wf",p.c,x(p).toString(),"loading")]),C(d,"fontloading",p),d=null,null===R)if(window.FontFace){p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);R=p?42<parseInt(p[1],10):!g}else R=!1;d=R?new L(i(e.g,e),i(e.h,e),e.c,c,e.s,b):new z(i(e.g,e),i(e.h,e),e.c,c,e.s,t,b),s.push(d)}for(r=0;r<s.length;r++)s[r].start()}}),0)}function $(t,e){this.c=t,this.a=e}function G(t,e){this.c=t,this.a=e}function J(t,e){this.c=t||K,this.a=[],this.f=[],this.g=e||""}V.prototype.g=function(t){var e=this.a;e.g&&f(e.f,[e.a.c("wf",t.c,x(t).toString(),"active")],[e.a.c("wf",t.c,x(t).toString(),"loading"),e.a.c("wf",t.c,x(t).toString(),"inactive")]),C(e,"fontactive",t),this.m=!0,D(this)},V.prototype.h=function(t){var e=this.a;if(e.g){var a=p(e.f,e.a.c("wf",t.c,x(t).toString(),"active")),n=[],o=[e.a.c("wf",t.c,x(t).toString(),"loading")];a||n.push(e.a.c("wf",t.c,x(t).toString(),"inactive")),f(e.f,n,o)}C(e,"fontinactive",t),D(this)},U.prototype.load=function(t){this.c=new r(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,a){var n=[],o=a.timeout;!function(t){t.g&&f(t.f,[t.a.c("wf","loading")]),C(t,"loading")}(e),n=function(t,e,a){var n,o=[];for(n in e)if(e.hasOwnProperty(n)){var l=t.c[n];l&&o.push(l(e[n],a))}return o}(t.a,a,t.c);var l=new V(t.c,e,o);for(t.h=n.length,e=0,a=n.length;e<a;e++)n[e].load((function(e,a,n){q(t,l,e,a,n)}))}(this,new E(this.c,t),t)},$.prototype.load=function(t){var e=this,a=e.a.projectId,n=e.a.version;if(a){var o=e.c.o;h(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?t([]):(o["__MonotypeConfiguration__"+a]=function(){return e.a},function e(){if(o["__mti_fntLst"+a]){var n,l=o["__mti_fntLst"+a](),i=[];if(l)for(var u=0;u<l.length;u++){var r=l[u].fontfamily;null!=l[u].fontStyle&&null!=l[u].fontWeight?(n=l[u].fontStyle+l[u].fontWeight,i.push(new S(r,n))):i.push(new S(r))}t(i)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+a}else t([])},G.prototype.load=function(t){var e,a,n=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new m;for(e=0,a=n.length;e<a;e++)g(this.c,n[e],v(i));var u=[];for(e=0,a=o.length;e<a;e++)if((n=o[e].split(":"))[1])for(var r=n[1].split(","),s=0;s<r.length;s+=1)u.push(new S(n[0],r[s]));else u.push(new S(n[0]));_(i,(function(){t(u,l)}))};var K="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var at={Arimo:!0,Cousine:!0,Tinos:!0};function nt(t,e){this.c=t,this.a=e}function ot(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new m,a=this.c,n=new J(this.a.api,this.a.text),o=this.a.families;!function(t,e){for(var a=e.length,n=0;n<a;n++){var o=e[n].split(":");3==o.length&&t.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),t.a.push(o.join(l))}}(n,o);var l=new X(o);!function(t){for(var e=t.f.length,a=0;a<e;a++){var n=t.f[a].split(":"),o=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var i;if(i=[],u=n[1])for(var u,r=(u=u.split(",")).length,s=0;s<r;s++){var c;if((c=u[s]).match(/^[\w-]+$/))if(null==(b=tt.exec(c.toLowerCase())))c="";else{if(c=null==(c=b[2])||""==c?"n":Z[c],null==(b=b[1])||""==b)b="4";else var b=Y[b]||(isNaN(b)?"4":b.substr(0,1));c=[c,b].join("")}else c="";c&&i.push(c)}0<i.length&&(l=i),3==n.length&&(i=[],0<(n=(n=n[2])?n.split(","):i).length&&(n=Q[n[0]])&&(t.c[o]=n))}for(t.c[o]||(n=Q[o])&&(t.c[o]=n),n=0;n<l.length;n+=1)t.a.push(new S(o,l[n]))}}(l),g(a,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,a=[],n=0;n<e;n++)a.push(t.a[n].replace(/ /g,"+"));return e=t.c+"?family="+a.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(n),v(e)),_(e,(function(){t(l.a,l.c,at)}))},nt.prototype.load=function(t){var e=this.a.id,a=this.c.o;e?h(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){e=a.Typekit.config.fn;for(var n=[],o=0;o<e.length;o+=2)for(var l=e[o],i=e[o+1],u=0;u<i.length;u++)n.push(new S(l,i[u]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(n)}}),2e3):t([])},ot.prototype.load=function(t){var e=this.f.id,a=this.c.o,n=this;e?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[e]=function(e,a){for(var o=0,l=a.fonts.length;o<l;++o){var i=a.fonts[o];n.a.push(new S(i.name,O("font-weight:"+i.weight+";font-style:"+i.style)))}t(n.a)},h(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var lt=new U(window);lt.a.c.custom=function(t,e){return new G(e,t)},lt.a.c.fontdeck=function(t,e){return new ot(e,t)},lt.a.c.monotype=function(t,e){return new $(e,t)},lt.a.c.typekit=function(t,e){return new nt(e,t)},lt.a.c.google=function(t,e){return new et(e,t)};var it={load:i(lt.load,lt)};void 0===(n=function(){return it}.call(e,a,e,t))||(t.exports=n)}()},214:function(t,e,a){"use strict";var n=a(1),o=a(20),l=a(17),i=a(7),u=a(2),r=a(22),s=a(0),c=a.n(s),b=a(9),d=a(26),f=a(23);const p=function(){for(var t=arguments.length,e=new Array(t),a=0;a<t;a++)e[a]=arguments[a];return e.filter(Boolean).join(" ")};e.a=t=>{const[e,a]=Object(u.useState)(!1);Object(s.useLayoutEffect)(()=>{window.addEventListener("click",(function(t){var e,n,o,l,i,u;const r=document.querySelector(`.active.popup-${x} .spectra-control-popup__options--action-button`),s=document.querySelector(`.active.popup-${x} .spectra-control-popup`);!r||null!=r&&r.contains(t.target)||!s||null!=s&&s.contains(t.target)||null!==(e=t.target)&&void 0!==e&&null!==(n=e.classList)&&void 0!==n&&n.contains("uagb-advanced-color-indicate")||null!==(o=t.target)&&void 0!==o&&null!==(l=o.parentElement)&&void 0!==l&&l.closest(".uagb-popover-color")||null!==(i=t.target)&&void 0!==i&&null!==(u=i.parentElement)&&void 0!==u&&u.closest(".uagb-reset")||a(!1)}))},[]);const{setAttributes:g,boxShadowColor:h,boxShadowHOffset:m,boxShadowVOffset:v,boxShadowBlur:_,boxShadowSpread:y,boxShadowPosition:w,label:S=Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),popup:T=!1,blockId:x}=t;let j;const O=e?"active":"",E=[h.label,m.label,v.label,_.label,y.label,w.label],{getSelectedBlock:I}=Object(b.select)("core/block-editor"),C=(()=>{var t;const e=(()=>{var t;const e=null===(t=I())||void 0===t?void 0:t.name.replace("uagb/","");let a=!1;return void 0!==f.a[e]&&E.forEach(t=>{if(t){var n,o;const l=void 0!==(null===(n=f.a[e][t])||void 0===n?void 0:n.default)?null===(o=f.a[e][t])||void 0===o?void 0:o.default:"";a={...a,[t]:l}}}),a})(),a=null===(t=I())||void 0===t?void 0:t.attributes;let n=!1;return E.forEach(t=>{null!=a&&a[t]&&(null==a?void 0:a[t])!==(null==e?void 0:e[t])&&(n=!0)}),n})(),F=c.a.createElement(c.a.Fragment,null,c.a.createElement(l.a,{label:h.title,colorValue:h.value,data:{value:h.value,label:h.label},setAttributes:g}),c.a.createElement(o.a,{label:m.title,value:m.value,min:-100,max:100,displayUnit:!1,setAttributes:g,data:{value:m.value,label:m.label}}),c.a.createElement(o.a,{label:v.title,value:v.value,min:-100,max:100,displayUnit:!1,setAttributes:g,data:{value:v.value,label:v.label}}),c.a.createElement(o.a,{label:_.title,value:_.value,min:0,max:100,displayUnit:!1,setAttributes:g,data:{value:_.value,label:_.label}}),c.a.createElement(o.a,{label:y.title,value:y.value,min:-100,max:100,displayUnit:!1,setAttributes:g,data:{value:y.value,label:y.label}}),c.a.createElement(r.a,{setAttributes:g,label:w.title,data:{value:w.value,label:w.label},options:[{value:"outset",label:Object(n.__)("Outset","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Outset","ultimate-addons-for-gutenberg")},{value:"inset",label:Object(n.__)("Inset","ultimate-addons-for-gutenberg"),tooltip:Object(n.__)("Inset (10px)","ultimate-addons-for-gutenberg")}],showIcons:!1}));e&&(j=c.a.createElement("div",{className:"uagb-box-shadow-advanced spectra-control-popup"},F));const A=c.a.createElement("div",{className:"spectra-control-popup__options--action-wrapper"},c.a.createElement("span",{className:"uag-control-label"},S),c.a.createElement(i.Button,{className:p("uag-box-shadow-button spectra-control-popup__options--action-button",C?"spectra-control-popup__status--updated":""),"aria-pressed":e,onClick:()=>{const t=document.querySelectorAll(".spectra-control-popup__options");if(t&&0<t.length)for(let e=0;e<t.length;e++){var n;const a=null===(n=t[e])||void 0===n?void 0:n.querySelector(".spectra-control-popup__options.active .spectra-control-popup__options--action-button");null==a||a.click()}if(a(!e),!e){var o;const t=null===(o=I())||void 0===o?void 0:o.name,e=Object(d.a)("uagSettingState"),a={...e,[t]:{...null==e?void 0:e[t],selectedSetting:".uag-box-shadow-options"}},n=Object(d.a)();n&&n.setItem("uagSettingState",JSON.stringify(a))}}},c.a.createElement(i.Dashicon,{icon:"edit"})));return T?c.a.createElement("div",{className:`components-base-control uag-box-shadow-options spectra-control-popup__options popup-${x} ${O}`},A,e&&j):c.a.createElement(c.a.Fragment,null,F)}},511:function(t,e,a){"use strict";a.r(e);var n=a(1),o=a(38),l=a(214),i=a(22),u=a(208),r=a(0),s=a.n(r),c=a(37),b=a(20),d=a(59),f=a(80),p=a(30),g=a(17),h=a(7),m=a(76),v=a(5),_=a(18);function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}const w=t=>{t=t.parentProps;const{attributes:e,setAttributes:a,deviceType:r}=t,{block_id:w,layout:S,placeholder:T,inputSize:x,textColor:j,inputBgColor:O,boxShadowColor:E,boxShadowHOffset:I,boxShadowVOffset:C,boxShadowBlur:F,boxShadowSpread:A,boxShadowPosition:k,buttonBgColor:B,buttonBgHoverColor:L,buttonIconColor:z,buttonIconHoverColor:H,buttonWidth:N,buttonWidthType:M,buttonIconSize:P,buttonIconSizeType:W,iconColor:V,iconSize:R,inputloadGoogleFonts:D,inputFontFamily:U,inputFontWeight:q,inputFontSize:$,inputFontSizeType:G,inputFontSizeTablet:J,inputFontSizeMobile:K,inputLineHeight:X,inputLineHeightType:Q,inputLineHeightTablet:Y,inputLineHeightMobile:Z,inputPaddingTypeDesktop:tt,buttonType:et,buttonText:at,buttonloadGoogleFonts:nt,buttonFontFamily:ot,buttonFontWeight:lt,buttonFontSize:it,buttonFontSizeType:ut,buttonFontSizeTablet:rt,buttonFontSizeMobile:st,buttonLineHeight:ct,buttonLineHeightType:bt,buttonLineHeightTablet:dt,buttonTransform:ft,buttonDecoration:pt,buttonLineHeightMobile:gt,buttonTextColor:ht,buttonTextHoverColor:mt,inputSizeType:vt,paddingInputTop:_t,paddingInputRight:yt,paddingInputBottom:wt,paddingInputLeft:St,paddingInputTopTablet:Tt,paddingInputRightTablet:xt,paddingInputBottomTablet:jt,paddingInputLeftTablet:Ot,paddingInputTopMobile:Et,paddingInputRightMobile:It,paddingInputBottomMobile:Ct,paddingInputLeftMobile:Ft,mobilePaddingInputUnit:At,tabletPaddingInputUnit:kt,spacingLink:Bt,iconSizeType:Lt,inputTransform:zt,inputDecoration:Ht,inputFontStyle:Nt,buttonFontStyle:Mt}=e;let Pt,Wt;if(!0===D){const t={google:{families:[U+(q?":"+q:"")]}};Pt=s.a.createElement(u.a,{config:t})}if(!0===nt){const t={google:{families:[ot+(lt?":"+lt:"")]}};Wt=s.a.createElement(u.a,{config:t})}return s.a.createElement(s.a.Fragment,null,s.a.createElement(v.InspectorControls,null,s.a.createElement(f.a,null,s.a.createElement(p.b,p.a.general,s.a.createElement(h.Notice,{status:"warning",isDismissible:!1},Object(n.__)("This block has been deprecated.","ultimate-addons-for-gutenberg")),s.a.createElement(_.a,{initialOpen:!0},s.a.createElement(i.a,{setAttributes:a,label:Object(n.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:S,label:"layout"},className:"uagb-multi-button-alignment-control",options:[{value:"input-button",label:"Classic"},{value:"input",label:"Minimal"}],showIcons:!1}),s.a.createElement(h.TextControl,{label:Object(n.__)("Placeholder","ultimate-addons-for-gutenberg"),value:T,onChange:t=>a({placeholder:t})}),s.a.createElement(b.a,{label:Object(n.__)("Input Width","ultimate-addons-for-gutenberg"),setAttributes:a,value:x,data:{value:x,label:"inputSize"},min:0,max:200,units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],unit:{value:vt,label:"inputSizeType"}}),"input-button"===S&&s.a.createElement(i.a,{setAttributes:a,label:Object(n.__)("Button Type","ultimate-addons-for-gutenberg"),data:{value:et,label:"buttonType"},className:"uagb-multi-button-alignment-control",options:[{value:"icon",label:"Icon"},{value:"text",label:"Text"}],showIcons:!1}),"input-button"===S&&"text"===et&&s.a.createElement(s.a.Fragment,null,s.a.createElement(h.TextControl,{label:"Text",value:at,onChange:t=>{a({buttonText:t})}})))),s.a.createElement(p.b,p.a.style,s.a.createElement(_.a,{title:Object(n.__)("Input Box","ultimate-addons-for-gutenberg"),initialOpen:!0,className:"uagb__url-panel-body"},s.a.createElement(g.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:j||"",data:{value:j,label:"textColor"},setAttributes:a}),s.a.createElement(g.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:O||"",data:{value:O,label:"inputBgColor"},setAttributes:a}),s.a.createElement(m.a,{setAttributes:a,borderStyleLabel:Object(n.__)("Style","ultimate-addons-for-gutenberg"),borderWidthLabel:Object(n.__)("Width","ultimate-addons-for-gutenberg"),borderRadiusLabel:Object(n.__)("Radius","ultimate-addons-for-gutenberg"),borderColorLabel:Object(n.__)("Color","ultimate-addons-for-gutenberg"),borderHoverColorLabel:Object(n.__)("Hover Color","ultimate-addons-for-gutenberg"),prefix:"input",attributes:e,deviceType:r}),s.a.createElement(c.a,y({},t,{label:Object(n.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:_t,label:"paddingInputTop"},valueRight:{value:yt,label:"paddingInputRight"},valueBottom:{value:wt,label:"paddingInputBottom"},valueLeft:{value:St,label:"paddingInputLeft"},valueTopTablet:{value:Tt,label:"paddingInputTopTablet"},valueRightTablet:{value:xt,label:"paddingInputRightTablet"},valueBottomTablet:{value:jt,label:"paddingInputBottomTablet"},valueLeftTablet:{value:Ot,label:"paddingInputLeftTablet"},valueTopMobile:{value:Et,label:"paddingInputTopMobile"},valueRightMobile:{value:It,label:"paddingInputRightMobile"},valueBottomMobile:{value:Ct,label:"paddingInputBottomMobile"},valueLeftMobile:{value:Ft,label:"paddingInputLeftMobile"},unit:{value:tt,label:"inputPaddingTypeDesktop"},mUnit:{value:At,label:"mobilePaddingInputUnit"},tUnit:{value:kt,label:"tabletPaddingInputUnit"},deviceType:r,attributes:e,setAttributes:a,link:{value:Bt,label:"spacingLink"},units:[{name:Object(n.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(n.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(n.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),s.a.createElement(o.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:D,label:"inputloadGoogleFonts"},fontFamily:{value:U,label:"inputFontFamily"},fontWeight:{value:q,label:"inputFontWeight"},fontStyle:{value:Nt,label:"inputFontStyle"},fontSizeType:{value:G,label:"inputFontSizeType"},fontSize:{value:$,label:"inputFontSize"},fontSizeMobile:{value:K,label:"inputFontSizeMobile"},fontSizeTablet:{value:J,label:"inputFontSizeTablet"},lineHeightType:{value:Q,label:"inputLineHeightType"},lineHeight:{value:X,label:"inputLineHeight"},lineHeightMobile:{value:Z,label:"inputLineHeightMobile"},lineHeightTablet:{value:Y,label:"inputLineHeightTablet"},transform:{value:zt,label:"inputTransform"},decoration:{value:Ht,label:"inputDecoration"}}),s.a.createElement(l.a,{blockId:w,setAttributes:a,label:Object(n.__)("Box Shadow","ultimate-addons-for-gutenberg"),boxShadowColor:{value:E,label:"boxShadowColor",title:Object(n.__)("Color","ultimate-addons-for-gutenberg")},boxShadowHOffset:{value:I,label:"boxShadowHOffset",title:Object(n.__)("Horizontal","ultimate-addons-for-gutenberg")},boxShadowVOffset:{value:C,label:"boxShadowVOffset",title:Object(n.__)("Vertical","ultimate-addons-for-gutenberg")},boxShadowBlur:{value:F,label:"boxShadowBlur",title:Object(n.__)("Blur","ultimate-addons-for-gutenberg")},boxShadowSpread:{value:A,label:"boxShadowSpread",title:Object(n.__)("Spread","ultimate-addons-for-gutenberg")},boxShadowPosition:{value:k,label:"boxShadowPosition",title:Object(n.__)("Position","ultimate-addons-for-gutenberg")},popup:!0})),"input"===S?s.a.createElement(_.a,{title:Object(n.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{label:Object(n.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:R,data:{value:R,label:"iconSize"},min:0,max:100,unit:{value:Lt,label:"iconSizeType"}}),s.a.createElement(g.a,{label:Object(n.__)("Color","ultimate-addons-for-gutenberg"),colorValue:V||"",data:{value:V,label:"iconColor"},setAttributes:a}))):"",(()=>{const t=s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:B||"",data:{value:B,label:"buttonBgColor"},setAttributes:a}),"text"===et&&s.a.createElement(g.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:ht||"",data:{value:ht,label:"buttonTextColor"},setAttributes:a}),"icon"===et&&s.a.createElement(g.a,{label:Object(n.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:z||"",data:{value:z,label:"buttonIconColor"},setAttributes:a})),l=s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,{label:Object(n.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:L||"",data:{value:L,label:"buttonBgHoverColor"},setAttributes:a}),"text"===et&&s.a.createElement(g.a,{label:Object(n.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:mt||"",data:{value:mt,label:"buttonTextHoverColor"},setAttributes:a}),"icon"===et&&s.a.createElement(g.a,{label:Object(n.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:H||"",data:{value:H,label:"buttonIconHoverColor"},setAttributes:a}));return"input-button"===S?s.a.createElement(_.a,{title:Object(n.__)("Button","ultimate-addons-for-gutenberg"),initialOpen:!1,className:"uagb__url-panel-body"},s.a.createElement(b.a,{label:Object(n.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:a,value:N,data:{value:N,label:"buttonWidth"},min:0,max:500,unit:{value:M,label:"buttonWidthType"}}),"text"===et&&s.a.createElement(s.a.Fragment,null,s.a.createElement(o.a,{label:Object(n.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:nt,label:"buttonloadGoogleFonts"},fontFamily:{value:ot,label:"buttonFontFamily"},fontWeight:{value:lt,label:"buttonFontWeight"},fontStyle:{value:Mt,label:"buttonFontStyle"},fontSizeType:{value:ut,label:"buttonFontSizeType"},fontSize:{value:it,label:"buttonFontSize"},fontSizeMobile:{value:st,label:"buttonFontSizeMobile"},fontSizeTablet:{value:rt,label:"buttonFontSizeTablet"},lineHeightType:{value:bt,label:"buttonLineHeightType"},lineHeight:{value:ct,label:"buttonLineHeight"},lineHeightMobile:{value:gt,label:"buttonLineHeightMobile"},lineHeightTablet:{value:dt,label:"buttonLineHeightTablet"},transform:{value:ft,label:"buttonTransform"},decoration:{value:pt,label:"buttonDecoration"}})),"icon"===et&&s.a.createElement(s.a.Fragment,null,s.a.createElement(b.a,{label:Object(n.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:a,value:P,data:{value:P,label:"buttonIconSize"},min:0,max:100,unit:{value:W,label:"buttonIconSizeType"}})),s.a.createElement(d.a,{tabs:[{name:"normal",title:Object(n.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(n.__)("Hover","ultimate-addons-for-gutenberg")}],normal:t,hover:l,disableBottomSeparator:!0})):""})()),s.a.createElement(p.b,y({},p.a.advance,{parentProps:t})))),Pt,Wt)};e.default=s.a.memo(w)}}]);