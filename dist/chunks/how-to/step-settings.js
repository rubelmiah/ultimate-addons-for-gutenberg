(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[62],{202:function(t,e,n){"use strict";var i,a,o=n(27),l=n.n(o),r=n(203),s=n.n(r),c=n(2);if(void 0===u)var u=[];const f=t=>{const[e,n]=Object(c.useState)([]);Object(c.useEffect)(()=>{r()},[]),Object(c.useEffect)(()=>{const{onStatus:n,config:i}=t;void 0!==e.status&&n(e.status),i!==e.config&&r()},[t]);const i=()=>{n({status:"loading"})},a=t=>{u.includes(t)||u.push(t)},o=()=>{n({status:"active"})},l=()=>{n({status:"inactive"})},r=()=>{u.includes(t.config.google.families[0])||(s.a.load({...t.config,loading:i,active:o,inactive:l}),a(t.config.google.families[0]));const e=document.getElementsByClassName("is-tablet-preview"),n=document.getElementsByClassName("is-mobile-preview");if(0!==e.length||0!==n.length){const r=(e[0]||n[0]).getElementsByTagName("iframe")[0];r&&(s.a.load({...t.config,loading:i,active:o,inactive:l,context:null==r?void 0:r.contentWindow}),a(t.config.google.families[0]))}},{children:f}=t;return f||null};f.propTypes={config:null===(i=l.a.object)||void 0===i?void 0:i.isRequired,children:l.a.element,onStatus:null===(a=l.a.func)||void 0===a?void 0:a.isRequired},f.defaultProps={onStatus:()=>{}},e.a=f},203:function(t,e,n){var i;!function(){function a(t,e,n){return t.call.apply(t.bind,arguments)}function o(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function l(t,e,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var c=!!window.FontFace;function u(t,e,n,i){if(e=t.c.createElement(e),n)for(var a in n)n.hasOwnProperty(a)&&("style"==a?e.style.cssText=n[a]:e.setAttribute(a,n[a]));return i&&e.appendChild(t.c.createTextNode(i)),e}function f(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function g(t){t.parentNode&&t.parentNode.removeChild(t)}function h(t,e,n){e=e||[],n=n||[];for(var i=t.className.split(/\s+/),a=0;a<e.length;a+=1){for(var o=!1,l=0;l<i.length;l+=1)if(e[a]===i[l]){o=!0;break}o||i.push(e[a])}for(e=[],a=0;a<i.length;a+=1){for(o=!1,l=0;l<n.length;l+=1)if(i[a]===n[l]){o=!0;break}o||e.push(i[a])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(t,e){for(var n=t.className.split(/\s+/),i=0,a=n.length;i<a;i++)if(n[i]==e)return!0;return!1}function b(t,e,n){function i(){r&&a&&o&&(r(l),r=null)}e=u(t,"link",{rel:"stylesheet",href:e,media:"all"});var a=!1,o=!0,l=null,r=n||null;c?(e.onload=function(){a=!0,i()},e.onerror=function(){a=!0,l=Error("Stylesheet failed to load"),i()}):setTimeout((function(){a=!0,i()}),0),f(t,"head",e)}function m(t,e,n,i){var a=t.c.getElementsByTagName("head")[0];if(a){var o=u(t,"script",{src:e}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&a.removeChild(o))},a.appendChild(o),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),i||5e3),o}return null}function p(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,w(t)}}function y(t,e){t.c=e,w(t)}function w(t){0==t.a&&t.c&&(t.c(),t.c=null)}function _(t){this.a=t||"-"}function S(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function j(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var i=t[n].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?e.push("'"+i+"'"):e.push(i)}return e.join(",")}function T(t){return t.a+t.f}function F(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function O(t){var e=4,n="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?e=7:/[1-9]00/.test(i[1])&&(e=parseInt(i[1].substr(0,1),10)))),n+e}function E(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new _("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function x(t){if(t.g){var e=d(t.f,t.a.c("wf","active")),n=[],i=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),h(t.f,n,i)}k(t,"inactive")}function k(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,T(n)):t.h[e]())}function z(){this.c={}}function C(t,e){this.c=t,this.f=e,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function A(t){f(t.c,"body",t.a)}function L(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(t.c)+";font-style:"+F(t)+";font-weight:"+t.f+"00;"}function I(t,e,n,i,a,o){this.g=t,this.j=e,this.a=i,this.c=n,this.f=a||3e3,this.h=o||void 0}function N(t,e,n,i,a,o,l){this.v=t,this.B=e,this.c=n,this.a=i,this.s=l||"BESbswy",this.f={},this.w=a||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new C(this.c,this.s),this.h=new C(this.c,this.s),this.j=new C(this.c,this.s),this.m=new C(this.c,this.s),t=L(t=new S(this.a.c+",serif",T(this.a))),this.g.a.style.cssText=t,t=L(t=new S(this.a.c+",sans-serif",T(this.a))),this.h.a.style.cssText=t,t=L(t=new S("serif",T(this.a))),this.j.a.style.cssText=t,t=L(t=new S("sans-serif",T(this.a))),this.m.a.style.cssText=t,A(this.g),A(this.h),A(this.j),A(this.m)}_.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},I.prototype.start=function(){var t=this.c.o.document,e=this,n=r(),i=new Promise((function(i,a){!function o(){r()-n>=e.f?a():t.fonts.load(function(t){return F(t)+" "+t.f+"00 300px "+j(t.c)}(e.a),e.h).then((function(t){1<=t.length?i():setTimeout(o,25)}),(function(){a()}))}()})),a=null,o=new Promise((function(t,n){a=setTimeout(n,e.f)}));Promise.race([o,i]).then((function(){a&&(clearTimeout(a),a=null),e.g(e.a)}),(function(){e.j(e.a)}))};var W={D:"serif",C:"sans-serif"},B=null;function P(){if(null===B){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);B=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return B}function M(t,e,n){for(var i in W)if(W.hasOwnProperty(i)&&e===t.f[W[i]]&&n===t.f[W[i]])return!0;return!1}function R(t,e){setTimeout(l((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),e(this.a)}),t),0)}function D(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}N.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(e){var n,i=e.g.a.offsetWidth,a=e.h.a.offsetWidth;(n=i===e.f.serif&&a===e.f["sans-serif"])||(n=P()&&M(e,i,a)),n?r()-e.A>=e.w?P()&&M(e,i,a)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?R(e,e.v):R(e,e.B):function(e){setTimeout(l((function(){t(this)}),e),50)}(e):R(e,e.v)}(this)};var G=null;function V(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&h(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),k(t,"active")):x(t.a))}function H(t){this.j=t,this.a=new z,this.h=0,this.f=this.g=!0}function q(t,e,n,i,a){var o=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=a||null,r=i||{};if(0===n.length&&o)x(e.a);else{e.f+=n.length,o&&(e.j=o);var s,c=[];for(s=0;s<n.length;s++){var u=n[s],f=r[u.c],g=e.a,d=u;if(g.g&&h(g.f,[g.a.c("wf",d.c,T(d).toString(),"loading")]),k(g,"fontloading",d),g=null,null===G)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var b=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);G=d?42<parseInt(d[1],10):!b}else G=!1;g=G?new I(l(e.g,e),l(e.h,e),e.c,u,e.s,f):new N(l(e.g,e),l(e.h,e),e.c,u,e.s,t,f),c.push(g)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function $(t,e){this.c=t,this.a=e}function U(t,e){this.c=t,this.a=e}function J(t,e){this.c=t||K,this.a=[],this.f=[],this.g=e||""}D.prototype.g=function(t){var e=this.a;e.g&&h(e.f,[e.a.c("wf",t.c,T(t).toString(),"active")],[e.a.c("wf",t.c,T(t).toString(),"loading"),e.a.c("wf",t.c,T(t).toString(),"inactive")]),k(e,"fontactive",t),this.m=!0,V(this)},D.prototype.h=function(t){var e=this.a;if(e.g){var n=d(e.f,e.a.c("wf",t.c,T(t).toString(),"active")),i=[],a=[e.a.c("wf",t.c,T(t).toString(),"loading")];n||i.push(e.a.c("wf",t.c,T(t).toString(),"inactive")),h(e.f,i,a)}k(e,"fontinactive",t),V(this)},H.prototype.load=function(t){this.c=new s(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var i=[],a=n.timeout;!function(t){t.g&&h(t.f,[t.a.c("wf","loading")]),k(t,"loading")}(e),i=function(t,e,n){var i,a=[];for(i in e)if(e.hasOwnProperty(i)){var o=t.c[i];o&&a.push(o(e[i],n))}return a}(t.a,n,t.c);var o=new D(t.c,e,a);for(t.h=i.length,e=0,n=i.length;e<n;e++)i[e].load((function(e,n,i){q(t,o,e,n,i)}))}(this,new E(this.c,t),t)},$.prototype.load=function(t){var e=this,n=e.a.projectId,i=e.a.version;if(n){var a=e.c.o;m(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(i?"?v="+i:""),(function(i){i?t([]):(a["__MonotypeConfiguration__"+n]=function(){return e.a},function e(){if(a["__mti_fntLst"+n]){var i,o=a["__mti_fntLst"+n](),l=[];if(o)for(var r=0;r<o.length;r++){var s=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(i=o[r].fontStyle+o[r].fontWeight,l.push(new S(s,i))):l.push(new S(s))}t(l)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+n}else t([])},U.prototype.load=function(t){var e,n,i=this.a.urls||[],a=this.a.families||[],o=this.a.testStrings||{},l=new p;for(e=0,n=i.length;e<n;e++)b(this.c,i[e],v(l));var r=[];for(e=0,n=a.length;e<n;e++)if((i=a[e].split(":"))[1])for(var s=i[1].split(","),c=0;c<s.length;c+=1)r.push(new S(i[0],s[c]));else r.push(new S(i[0]));y(l,(function(){t(r,o)}))};var K="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var nt={Arimo:!0,Cousine:!0,Tinos:!0};function it(t,e){this.c=t,this.a=e}function at(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new p,n=this.c,i=new J(this.a.api,this.a.text),a=this.a.families;!function(t,e){for(var n=e.length,i=0;i<n;i++){var a=e[i].split(":");3==a.length&&t.f.push(a.pop());var o="";2==a.length&&""!=a[1]&&(o=":"),t.a.push(a.join(o))}}(i,a);var o=new X(a);!function(t){for(var e=t.f.length,n=0;n<e;n++){var i=t.f[n].split(":"),a=i[0].replace(/\+/g," "),o=["n4"];if(2<=i.length){var l;if(l=[],r=i[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(f=tt.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&l.push(u)}0<l.length&&(o=l),3==i.length&&(l=[],0<(i=(i=i[2])?i.split(","):l).length&&(i=Q[i[0]])&&(t.c[a]=i))}for(t.c[a]||(i=Q[a])&&(t.c[a]=i),i=0;i<o.length;i+=1)t.a.push(new S(a,o[i]))}}(o),b(n,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],i=0;i<e;i++)n.push(t.a[i].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(i),v(e)),y(e,(function(){t(o.a,o.c,nt)}))},it.prototype.load=function(t){var e=this.a.id,n=this.c.o;e?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var i=[],a=0;a<e.length;a+=2)for(var o=e[a],l=e[a+1],r=0;r<l.length;r++)i.push(new S(o,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(i)}}),2e3):t([])},at.prototype.load=function(t){var e=this.f.id,n=this.c.o,i=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var a=0,o=n.fonts.length;a<o;++a){var l=n.fonts[a];i.a.push(new S(l.name,O("font-weight:"+l.weight+";font-style:"+l.style)))}t(i.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var ot=new H(window);ot.a.c.custom=function(t,e){return new U(e,t)},ot.a.c.fontdeck=function(t,e){return new at(e,t)},ot.a.c.monotype=function(t,e){return new $(e,t)},ot.a.c.typekit=function(t,e){return new it(e,t)},ot.a.c.google=function(t,e){return new et(e,t)};var lt={load:l(ot.load,ot)};void 0===(i=function(){return lt}.call(e,n,e,t))||(t.exports=i)}()},204:function(t,e,n){"use strict";var i,a=n(1),o=n(7),l=n(5),r=n(0),s=n.n(r),c=n(15),u=n.n(c),f=n(205),g=0,h={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=f.a.locals||{},d.use=function(){return g++||(i=u()(f.a,h)),d},d.unuse=function(){g>0&&!--g&&(i(),i=null)};var b=d;e.a=t=>{Object(r.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]);const{onSelectImage:e,backgroundImage:n,onRemoveImage:i,showVideoInput:c,label:u,disableRemove:f=!1,allow:g=["image"]}=t;let h=Object(a.__)("Image","ultimate-addons-for-gutenberg"),d=Object(a.__)("Select Image","ultimate-addons-for-gutenberg"),m=Object(a.__)("Replace Image","ultimate-addons-for-gutenberg"),p=Object(a.__)("Remove Image","ultimate-addons-for-gutenberg"),v=["image"];return c&&(h=Object(a.__)("Video","ultimate-addons-for-gutenberg"),d=Object(a.__)("Select Video","ultimate-addons-for-gutenberg"),m=Object(a.__)("Replace Video","ultimate-addons-for-gutenberg"),p=Object(a.__)("Remove Video","ultimate-addons-for-gutenberg"),v=["video"]),h=u||h,h=!1===u?u:h,"Lottie Animation"===u&&(d=Object(a.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),m=Object(a.__)("Replace Lottie Animation","ultimate-addons-for-gutenberg"),p=Object(a.__)("Remove Lottie Animation","ultimate-addons-for-gutenberg"),v=g),s.a.createElement(o.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+u,label:h},s.a.createElement("div",{className:"uagb-bg-image"},s.a.createElement(l.MediaUpload,{title:d,onSelect:e,allowedTypes:v,value:n,render:t=>{let{open:e}=t;return s.a.createElement(o.Button,{isSecondary:!0,onClick:e},null!=n&&n.url?m:d)}}),!f&&(null==n?void 0:n.url)&&s.a.createElement(o.Button,{className:"uagb-rm-btn",onClick:i,isLink:!0,isDestructive:!0},p),t.help&&s.a.createElement("p",{className:"uag-control-help-notice"},t.help)))}},205:function(t,e,n){"use strict";var i=n(16),a=n.n(i)()((function(t){return t[1]}));a.push([t.i,".uagb-bg-image {\n  display: flex; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    border-radius: 2px;\n    background-color: #f0f0f0;\n    min-height: 90px;\n    padding: 8px 0;\n    text-align: center;\n    display: flex;\n    width: 100%;\n    transition: all 0.1s ease-out;\n    box-shadow: 0 0 0 0 #0085ba;\n    margin-top: 10px;\n    align-items: center;\n    justify-content: center; }\n    .uagb-bg-image .components-button.is-destructive:hover:not(:disabled) {\n      color: #710d0d;\n      box-shadow: inset 0 0 0 0 #710d0d; }\n    .uagb-bg-image .components-button.is-link.is-destructive:hover:not(:disabled) {\n      background: #f0f0f0; }\n    .uagb-bg-image .components-button.is-link.is-destructive:focus:not(:disabled) {\n      outline: none; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 0; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n\n.uag-background-image .uagb-bg-image,\n.uag-background-video .uagb-bg-image {\n  display: block; }\n  .uag-background-image .uagb-bg-image .components-button,\n  .uag-background-video .uagb-bg-image .components-button {\n    min-height: 55px; }\n  .uag-background-image .uagb-bg-image .components-button:last-child,\n  .uag-background-video .uagb-bg-image .components-button:last-child {\n    margin-left: 0;\n    margin-top: 0; }\n",""]),e.a=a},215:function(t,e,n){"use strict";function i(t){const e=[];for(const n in t)if(t.hasOwnProperty(n)){const t={value:n,label:n};e.push(t)}return e}n.d(e,"a",(function(){return i}))},492:function(t,e,n){"use strict";n.r(e);var i=n(0),a=n.n(i),o=n(1),l=n(81),r=n(28),s=n(204),c=n(5),u=n(37),f=n(202),g=n(18),h=n(215),d=n(7),b=n(17);let m=[{value:"thumbnail",label:Object(o.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")}];const p=t=>{t=t.parentProps;const{attributes:e,setAttributes:n}=t,{url:i,urlType:p,image:v,imageSize:y,urlText:w,urlFontSize:_,urlFontSizeType:S,urlFontSizeMobile:j,urlFontSizeTablet:T,urlFontFamily:F,urlFontWeight:O,urlLoadGoogleFonts:E,titleFontSize:x,titleFontSizeType:k,titleFontSizeMobile:z,titleFontSizeTablet:C,titleFontFamily:A,titleFontWeight:L,titleLoadGoogleFonts:I,descriptionFontSize:N,descriptionFontSizeType:W,descriptionFontSizeMobile:B,descriptionFontSizeTablet:P,descriptionFontFamily:M,descriptionFontWeight:R,descriptionLoadGoogleFonts:D,urlTarget:G,imgPosition:V,titleColor:H,descriptionColor:q,urlColor:$,urlFontStyle:U,urlTransform:J,urlDecoration:K,titleFontStyle:X,titleTransform:Q,titleDecoration:Y,descriptionFontStyle:Z,descriptionTransform:tt,descriptionDecoration:et}=e;let nt,it,at;if(m.map(t=>(t.label=t.label.replace(/\w/,t=>t.toUpperCase()),t)),!0===E){const t={google:{families:[F+(O?":"+O:"")]}};nt=a.a.createElement(f.a,{config:t})}if(!0===I){const t={google:{families:[A+(L?":"+L:"")]}};it=a.a.createElement(f.a,{config:t})}if(!0===D){const t={google:{families:[M+(R?":"+R:"")]}};at=a.a.createElement(f.a,{config:t})}return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.InspectorControls,null,a.a.createElement(l.a,null,a.a.createElement(r.b,r.a.general,a.a.createElement(b.a,{initialOpen:!0,title:Object(o.__)("Image","ultimate-addons-for-gutenberg")},a.a.createElement(s.a,{onSelectImage:t=>{t&&t.url&&t.type&&"image"===t.type?(t.sizes&&(m=Object(h.a)(t.sizes)),n({image:t})):n({image:null})},backgroundImage:v,onRemoveImage:()=>{n({image:""})}}),v&&"null"!==v.url&&""!==v.url&&a.a.createElement(a.a.Fragment,null,a.a.createElement(d.SelectControl,{label:Object(o.__)("Image Size","ultimate-addons-for-gutenberg"),options:m,value:y,onChange:t=>n({imageSize:t})}),a.a.createElement(d.SelectControl,{label:Object(o.__)("Select Position"),value:V,onChange:t=>n({imgPosition:t}),options:[{value:"above-title",label:Object(o.__)("Above Title")},{value:"left-title",label:Object(o.__)("Left of Title")},{value:"right-title",label:Object(o.__)("Right of Title")}]}))),a.a.createElement(b.a,{title:Object(o.__)("Add Link"),initialOpen:!1},a.a.createElement(d.SelectControl,{label:Object(o.__)("Type"),value:p,onChange:t=>n({urlType:t}),options:[{value:"text",label:Object(o.__)("Text")},{value:"all",label:Object(o.__)("Complete Box")}]}),"text"===p&&a.a.createElement(a.a.Fragment,null,a.a.createElement(d.TextControl,{label:Object(o.__)("Text"),value:w,onChange:t=>n({urlText:t})})),"none"!==p&&a.a.createElement(a.a.Fragment,null,a.a.createElement(d.TextControl,{label:Object(o.__)("Link"),value:i,onChange:t=>n({url:t})}),a.a.createElement(d.ToggleControl,{label:Object(o.__)("Open in new window"),checked:G,onChange:()=>n({urlTarget:!G})})))),a.a.createElement(r.b,r.a.style,a.a.createElement(b.a,{title:Object(o.__)("Title"),initialOpen:!0},a.a.createElement(u.a,{label:Object(o.__)("Typography"),attributes:e,setAttributes:n,loadGoogleFonts:{value:I,label:"titleLoadGoogleFonts"},fontFamily:{value:A,label:"titleFontFamily"},fontWeight:{value:L,label:"titleFontWeight"},fontStyle:{value:X,label:"titleFontStyle"},transform:{value:Q,label:"titleTransform"},decoration:{value:Y,label:"titleDecoration"},fontSizeType:{value:k,label:"titleFontSizeType"},fontSize:{value:x,label:"titleFontSize"},fontSizeMobile:{value:z,label:"titleFontSizeMobile"},fontSizeTablet:{value:C,label:"titleFontSizeTablet"},disableLineHeight:!0}),a.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:H||"",data:{value:H,label:"titleColor"},setAttributes:n})),a.a.createElement(b.a,{title:Object(o.__)("Description"),initialOpen:!1},a.a.createElement(u.a,{label:Object(o.__)("Typography"),attributes:e,setAttributes:n,loadGoogleFonts:{value:D,label:"descriptionLoadGoogleFonts"},fontFamily:{value:M,label:"descriptionFontFamily"},fontWeight:{value:R,label:"descriptionFontWeight"},fontStyle:{value:Z,label:"descriptionFontStyle"},transform:{value:tt,label:"descriptionTransform"},decoration:{value:et,label:"descriptionDecoration"},fontSizeType:{value:W,label:"descriptionFontSizeType"},fontSize:{value:N,label:"descriptionFontSize"},fontSizeMobile:{value:B,label:"descriptionFontSizeMobile"},fontSizeTablet:{value:P,label:"descriptionFontSizeTablet"},disableLineHeight:!0}),a.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:q||"",data:{value:q,label:"descriptionColor"},setAttributes:n})),"text"===p&&a.a.createElement(b.a,{title:Object(o.__)("Link"),initialOpen:!0},a.a.createElement(u.a,{label:Object(o.__)("Typography"),attributes:e,setAttributes:n,loadGoogleFonts:{value:E,label:"urlLoadGoogleFonts"},fontFamily:{value:F,label:"urlFontFamily"},fontWeight:{value:O,label:"urlFontWeight"},fontStyle:{value:U,label:"urlFontStyle"},transform:{value:J,label:"urlTransform"},decoration:{value:K,label:"urlDecoration"},fontSizeType:{value:S,label:"urlFontSizeType"},fontSize:{value:_,label:"urlFontSize"},fontSizeMobile:{value:j,label:"urlFontSizeMobile"},fontSizeTablet:{value:T,label:"urlFontSizeTablet"},disableLineHeight:!0}),a.a.createElement(g.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:$||"",data:{value:$,label:"urlColor"},setAttributes:n}))),a.a.createElement(r.b,r.a.advance))),nt,it,at)};e.default=a.a.memo(p)}}]);