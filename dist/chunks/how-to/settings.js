(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[60],{208:function(e,t,a){"use strict";var n,i,l=a(21),o=a.n(l),r=a(209),s=a.n(r),c=a(2);if(void 0===u)var u=[];const g=e=>{const[t,a]=Object(c.useState)([]);Object(c.useEffect)(()=>{r()},[]),Object(c.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&r()},[e]);const n=()=>{a({status:"loading"})},i=e=>{u.includes(e)||u.push(e)},l=()=>{a({status:"active"})},o=()=>{a({status:"inactive"})},r=()=>{u.includes(e.config.google.families[0])||(s.a.load({...e.config,loading:n,active:l,inactive:o}),i(e.config.google.families[0]));const t=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==t.length||0!==a.length){const r=(t[0]||a[0]).getElementsByTagName("iframe")[0];r&&(s.a.load({...e.config,loading:n,active:l,inactive:o,context:null==r?void 0:r.contentWindow}),i(e.config.google.families[0]))}},{children:g}=e;return g||null};g.propTypes={config:null===(n=o.a.object)||void 0===n?void 0:n.isRequired,children:o.a.element,onStatus:null===(i=o.a.func)||void 0===i?void 0:i.isRequired},g.defaultProps={onStatus:()=>{}},t.a=g},209:function(e,t,a){var n;!function(){function i(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function o(e,t,a){return(o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function u(e,t,a,n){if(t=e.c.createElement(t),a)for(var i in a)a.hasOwnProperty(i)&&("style"==i?t.style.cssText=a[i]:t.setAttribute(i,a[i]));return n&&t.appendChild(e.c.createTextNode(n)),t}function g(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function h(e){e.parentNode&&e.parentNode.removeChild(e)}function d(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var l=!1,o=0;o<n.length;o+=1)if(t[i]===n[o]){l=!0;break}l||n.push(t[i])}for(t=[],i=0;i<n.length;i+=1){for(l=!1,o=0;o<a.length;o+=1)if(n[i]===a[o]){l=!0;break}l||t.push(n[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var a=e.className.split(/\s+/),n=0,i=a.length;n<i;n++)if(a[n]==t)return!0;return!1}function b(e,t,a){function n(){r&&i&&l&&(r(o),r=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,l=!0,o=null,r=a||null;c?(t.onload=function(){i=!0,n()},t.onerror=function(){i=!0,o=Error("Stylesheet failed to load"),n()}):setTimeout((function(){i=!0,n()}),0),g(e,"head",t)}function m(e,t,a,n){var i=e.c.getElementsByTagName("head")[0];if(i){var l=u(e,"script",{src:t}),o=!1;return l.onload=l.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&i.removeChild(l))},i.appendChild(l),setTimeout((function(){o||(o=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function S(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function T(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function j(e){return e.a+e.f}function O(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function H(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function E(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),d(e.f,a,n)}L(e,"inactive")}function L(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,j(a)):e.h[t]())}function M(){this.c={}}function k(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function C(e){g(e.c,"body",e.a)}function x(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(e.c)+";font-style:"+O(e)+";font-weight:"+e.f+"00;"}function A(e,t,a,n,i,l){this.g=e,this.j=t,this.a=n,this.c=a,this.f=i||3e3,this.h=l||void 0}function z(e,t,a,n,i,l,o){this.v=e,this.B=t,this.c=a,this.a=n,this.s=o||"BESbswy",this.f={},this.w=i||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new k(this.c,this.s),this.h=new k(this.c,this.s),this.j=new k(this.c,this.s),this.m=new k(this.c,this.s),e=x(e=new S(this.a.c+",serif",j(this.a))),this.g.a.style.cssText=e,e=x(e=new S(this.a.c+",sans-serif",j(this.a))),this.h.a.style.cssText=e,e=x(e=new S("serif",j(this.a))),this.j.a.style.cssText=e,e=x(e=new S("sans-serif",j(this.a))),this.m.a.style.cssText=e,C(this.g),C(this.h),C(this.j),C(this.m)}w.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},A.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,i){!function l(){r()-a>=t.f?i():e.fonts.load(function(e){return O(e)+" "+e.f+"00 300px "+T(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(l,25)}),(function(){i()}))}()})),i=null,l=new Promise((function(e,a){i=setTimeout(a,t.f)}));Promise.race([l,n]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var I={D:"serif",C:"sans-serif"},N=null;function W(){if(null===N){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return N}function G(e,t,a){for(var n in I)if(I.hasOwnProperty(n)&&t===e.f[I[n]]&&a===e.f[I[n]])return!0;return!1}function D(e,t){setTimeout(o((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),t(this.a)}),e),0)}function P(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(a=n===t.f.serif&&i===t.f["sans-serif"])||(a=W()&&G(t,n,i)),a?r()-t.A>=t.w?W()&&G(t,n,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?D(t,t.v):D(t,t.B):function(t){setTimeout(o((function(){e(this)}),t),50)}(t):D(t,t.v)}(this)};var U=null;function B(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&d(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),L(e,"active")):F(e.a))}function R(e){this.j=e,this.a=new M,this.h=0,this.f=this.g=!0}function V(e,t,a,n,i){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,r=n||{};if(0===a.length&&l)F(t.a);else{t.f+=a.length,l&&(t.j=l);var s,c=[];for(s=0;s<a.length;s++){var u=a[s],g=r[u.c],h=t.a,f=u;if(h.g&&d(h.f,[h.a.c("wf",f.c,j(f).toString(),"loading")]),L(h,"fontloading",f),h=null,null===U)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var b=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);U=f?42<parseInt(f[1],10):!b}else U=!1;h=U?new A(o(t.g,t),o(t.h,t),t.c,u,t.s,g):new z(o(t.g,t),o(t.h,t),t.c,u,t.s,e,g),c.push(h)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function Y(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}P.prototype.g=function(e){var t=this.a;t.g&&d(t.f,[t.a.c("wf",e.c,j(e).toString(),"active")],[t.a.c("wf",e.c,j(e).toString(),"loading"),t.a.c("wf",e.c,j(e).toString(),"inactive")]),L(t,"fontactive",e),this.m=!0,B(this)},P.prototype.h=function(e){var t=this.a;if(t.g){var a=f(t.f,t.a.c("wf",e.c,j(e).toString(),"active")),n=[],i=[t.a.c("wf",e.c,j(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,j(e).toString(),"inactive")),d(t.f,n,i)}L(t,"fontinactive",e),B(this)},R.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],i=a.timeout;!function(e){e.g&&d(e.f,[e.a.c("wf","loading")]),L(e,"loading")}(t),n=function(e,t,a){var n,i=[];for(n in t)if(t.hasOwnProperty(n)){var l=e.c[n];l&&i.push(l(t[n],a))}return i}(e.a,a,e.c);var l=new P(e.c,t,i);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){V(e,l,t,a,n)}))}(this,new E(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var i=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(i["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(i["__mti_fntLst"+a]){var n,l=i["__mti_fntLst"+a](),o=[];if(l)for(var r=0;r<l.length;r++){var s=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,o.push(new S(s,n))):o.push(new S(s))}e(o)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,n=this.a.urls||[],i=this.a.families||[],l=this.a.testStrings||{},o=new p;for(t=0,a=n.length;t<a;t++)b(this.c,n[t],v(o));var r=[];for(t=0,a=i.length;t<a;t++)if((n=i[t].split(":"))[1])for(var s=n[1].split(","),c=0;c<s.length;c+=1)r.push(new S(n[0],s[c]));else r.push(new S(n[0]));_(o,(function(){e(r,l)}))};var J="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,n=new Y(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var i=t[n].split(":");3==i.length&&e.f.push(i.pop());var l="";2==i.length&&""!=i[1]&&(l=":"),e.a.push(i.join(l))}}(n,i);var l=new K(i);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),i=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var o;if(o=[],r=n[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(g=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=g[2])||""==u?"n":Z[u],null==(g=g[1])||""==g)g="4";else var g=Q[g]||(isNaN(g)?"4":g.substr(0,1));u=[u,g].join("")}else u="";u&&o.push(u)}0<o.length&&(l=o),3==n.length&&(o=[],0<(n=(n=n[2])?n.split(","):o).length&&(n=X[n[0]])&&(e.c[i]=n))}for(e.c[i]||(n=X[i])&&(e.c[i]=n),n=0;n<l.length;n+=1)e.a.push(new S(i,l[n]))}}(l),b(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),_(t,(function(){e(l.a,l.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],i=0;i<t.length;i+=2)for(var l=t[i],o=t[i+1],r=0;r<o.length;r++)n.push(new S(l,o[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var i=0,l=a.fonts.length;i<l;++i){var o=a.fonts[i];n.a.push(new S(o.name,H("font-weight:"+o.weight+";font-style:"+o.style)))}e(n.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new R(window);le.a.c.custom=function(e,t){return new $(t,e)},le.a.c.fontdeck=function(e,t){return new ie(t,e)},le.a.c.monotype=function(e,t){return new q(t,e)},le.a.c.typekit=function(e,t){return new ne(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var oe={load:o(le.load,le)};void 0===(n=function(){return oe}.call(t,a,t,e))||(e.exports=n)}()},210:function(e,t,a){"use strict";var n=a(1),i=a(8),l=a(5),o=a(0),r=a.n(o),s=a(7);t.a=e=>{const{onSelectImage:t,backgroundImage:a,onRemoveImage:o,showVideoInput:c,label:u,disableRemove:g=!1,allow:h=["image"]}=e;let d,f=Object(n.__)("Image","ultimate-addons-for-gutenberg"),b=Object(n.__)("Select Image","ultimate-addons-for-gutenberg"),m=Object(n.__)("Change Image","ultimate-addons-for-gutenberg"),p=["image"];c&&(f=Object(n.__)("Video","ultimate-addons-for-gutenberg"),b=Object(n.__)("Select Video","ultimate-addons-for-gutenberg"),m=Object(n.__)("Change Video","ultimate-addons-for-gutenberg"),p=["video"],d=s.a.video_placeholder),f=u||f,f=!1===u?u:f,"Lottie Animation"===u&&(b=Object(n.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),m=Object(n.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),p=h,d=s.a.lottie);const v=e=>r.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},s.a[e]);return r.a.createElement(i.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+u,label:f},r.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!d&&(null==a?void 0:a.url)&&`url("${(e=>{let t=e;switch(/(?:\.([^.]+))?$/.exec(String(t))[1]){case"json":t="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":t=""}return t})(null==a?void 0:a.url)}")`}},d&&(null==a?void 0:a.url)&&r.a.createElement("div",{className:"spectra-media-control__icon"},d),r.a.createElement(l.MediaUpload,{title:b,onSelect:t,allowedTypes:p,value:a,render:e=>{let{open:t}=e;return(e=>{const t=null!=a&&a.url?"replace":"add";return r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+t,onClick:e},"add"===t?v(t):r.a.createElement("div",{className:"uag-control-label"},m))})(t)}}),!g&&(null==a?void 0:a.url)&&r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:o},v("close"))),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},221:function(e,t,a){"use strict";function n(e){const t=[];for(const a in e)if(e.hasOwnProperty(a)){const e={value:a,label:a};t.push(e)}return t}a.d(t,"a",(function(){return n}))},494:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(10),o=a(208),r=a(38),s=(a(130),a(1)),c=a(5),u=a(17),g=a(80),h=a(30),d=a(20),f=a(210),b=a(221),m=a(13),p=a(8),v=a(22),_=a(24),y=a(26),w=a(3),S=a(18);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let j=[{value:"thumbnail",label:Object(s.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(s.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(s.__)("Large","ultimate-addons-for-gutenberg")}];const O=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,attributes:{overallAlignment:O,showEstcost:H,showTotaltime:E,showMaterials:F,showTools:L,showTotaltimecolor:M,tools_count:k,material_count:C,tools:x,materials:A,mainimage:z,imgSize:I,headingColor:N,subHeadingColor:W,headingTag:G,headFontFamily:D,headFontWeight:P,headFontSizeType:U,headFontSize:B,headFontSizeMobile:R,headFontSizeTablet:V,headLineHeightType:q,headLineHeight:$,headLineHeightMobile:Y,headLineHeightTablet:J,subHeadFontFamily:K,subHeadFontWeight:X,subHeadFontSize:Q,subHeadFontSizeType:Z,subHeadFontSizeMobile:ee,subHeadFontSizeTablet:te,subHeadLineHeight:ae,subHeadLineHeightType:ne,subHeadLineHeightMobile:ie,subHeadLineHeightTablet:le,headLoadGoogleFonts:oe,subHeadLoadGoogleFonts:re,priceFontSizeType:se,priceFontSize:ce,priceFontSizeTablet:ue,priceFontSizeMobile:ge,priceFontFamily:he,priceFontWeight:de,priceLineHeightType:fe,priceLineHeight:be,priceLineHeightTablet:me,priceLineHeightMobile:pe,priceLoadGoogleFonts:ve,timeSpace:_e,costSpace:ye,row_gap:we,rowGapTablet:Se,rowGapMobile:Te,step_gap:je,timeInHours:Oe,timeInDays:He,timeInMonths:Ee,timeInYears:Fe,timeInMins:Le,time:Me,priceFontStyle:ke,priceTransform:Ce,priceDecoration:xe,headFontStyle:Ae,headTransform:ze,headDecoration:Ie,subHeadFontStyle:Ne,subHeadTransform:We,subHeadDecoration:Ge,headLetterSpacing:De,headLetterSpacingTablet:Pe,headLetterSpacingMobile:Ue,headLetterSpacingType:Be,priceLetterSpacing:Re,priceLetterSpacingTablet:Ve,priceLetterSpacingMobile:qe,priceLetterSpacingType:$e,subHeadLetterSpacing:Ye,subHeadLetterSpacingTablet:Je,subHeadLetterSpacingMobile:Ke,subHeadLetterSpacingType:Xe}}=e;z&&z.sizes&&(j=Object(b.a)(z.sizes));const Qe=Le||Me;let Ze,et,tt;if(!0===oe){const e={google:{families:[D+(P?":"+P:"")]}};Ze=i.a.createElement(o.a,{config:e})}if(!0===re){const e={google:{families:[K+(X?":"+X:"")]}};et=i.a.createElement(o.a,{config:e})}if(!0===ve){const e={google:{families:[he+(de?":"+de:"")]}};tt=i.a.createElement(o.a,{config:e})}return i.a.createElement(n.Suspense,{fallback:Object(l.a)()},i.a.createElement(c.InspectorControls,null,i.a.createElement(g.a,null,i.a.createElement(h.b,h.a.general,i.a.createElement(S.a,{title:Object(s.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(v.a,{setAttributes:a,label:Object(s.__)("Tag","ultimate-addons-for-gutenberg"),data:{value:G,label:"headingTag"},options:[{value:"h1",label:Object(s.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(s.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(s.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(s.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(s.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(s.__)("H6","ultimate-addons-for-gutenberg")}]}),i.a.createElement(v.a,{setAttributes:a,label:Object(s.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:O,label:"overallAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(p.Icon,{icon:Object(m.a)("fa fa-align-left")}),tooltip:Object(s.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(p.Icon,{icon:Object(m.a)("fa fa-align-center")}),tooltip:Object(s.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(p.Icon,{icon:Object(m.a)("fa fa-align-right")}),tooltip:Object(s.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),i.a.createElement(S.a,{title:Object(s.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(f.a,{onSelectImage:e=>{e&&e.url&&e.type&&"image"===e.type?a({mainimage:e}):a({mainimage:null})},backgroundImage:z,onRemoveImage:()=>{a({mainimage:""})}}),z&&"null"!==z.url&&""!==z.url&&i.a.createElement(y.a,{label:Object(s.__)("Image Size","ultimate-addons-for-gutenberg"),data:{value:I,label:"imgSize"},setAttributes:a,options:j})),i.a.createElement(S.a,{title:Object(s.__)("Time","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Total Time","ultimate-addons-for-gutenberg"),checked:E,onChange:()=>a({showTotaltime:!E}),help:Object(s.__)("Note: Time is recommended field for schema. It should be ON","ultimate-addons-for-gutenberg")}),E&&i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{label:Object(s.__)("Years","ultimate-addons-for-gutenberg"),setAttributes:a,value:Fe,data:{value:Fe,label:"timeInYears"},min:1,max:10,displayUnit:!1}),i.a.createElement(d.a,{label:Object(s.__)("Months","ultimate-addons-for-gutenberg"),setAttributes:a,value:Ee,data:{value:Ee,label:"timeInMonths"},min:1,max:12,displayUnit:!1}),i.a.createElement(d.a,{label:Object(s.__)("Days","ultimate-addons-for-gutenberg"),setAttributes:a,value:He,data:{value:He,label:"timeInDays"},min:1,max:31,displayUnit:!1}),i.a.createElement(d.a,{label:Object(s.__)("Hours","ultimate-addons-for-gutenberg"),setAttributes:a,value:Oe,data:{value:Oe,label:"timeInHours"},min:1,max:24,displayUnit:!1}),i.a.createElement(d.a,{label:Object(s.__)("Minutes","ultimate-addons-for-gutenberg"),setAttributes:a,value:Qe,data:{value:Le,label:"timeInMins"},min:1,max:60,displayUnit:!1}))),i.a.createElement(S.a,{title:Object(s.__)("Cost","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Estimated Cost","ultimate-addons-for-gutenberg"),checked:H,onChange:()=>a({showEstcost:!H}),help:Object(s.__)("Note: Cost is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),i.a.createElement(p.ExternalLink,{href:"https://en.wikipedia.org/wiki/List_of_circulating_currencies"},Object(s.__)("Click here to find your countrys ISO code.","ultimate-addons-for-gutenberg"))),i.a.createElement(S.a,{title:Object(s.__)("Tools","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Tools","ultimate-addons-for-gutenberg"),checked:L,onChange:()=>a({showTools:!L}),help:Object(s.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),L&&i.a.createElement(d.a,{label:Object(s.__)("Number of Tools","ultimate-addons-for-gutenberg"),setAttributes:a,value:k,data:{value:k,label:"tools_count"},onChange:e=>{const t=[...x],n=Object(w.b)(e,"tools_count","how-to");if(t.length<n){const e=Math.abs(n-t.length);for(let a=0;a<e;a++)t.push({add_required_tools:"- A Computer"+(t.length+1)});a({tools:t})}else{const e=Math.abs(n-t.length),i=t;for(let t=0;t<e;t++)i.pop();a({tools:i})}a({tools_count:n})},min:1,max:50,displayUnit:!1})),i.a.createElement(S.a,{title:Object(s.__)("Materials","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Materials","ultimate-addons-for-gutenberg"),checked:F,onChange:()=>a({showMaterials:!F}),help:Object(s.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),F&&i.a.createElement(d.a,{label:Object(s.__)("Number of Materials","ultimate-addons-for-gutenberg"),setAttributes:a,value:C,data:{value:C,label:"material_count"},onChange:e=>{const t=[...A],n=Object(w.b)(e,"material_count","how-to");if(t.length<n){const e=Math.abs(n-t.length);for(let a=0;a<e;a++)t.push({add_required_materials:"- A WordPress Website"+(t.length+1)});a({materials:t})}else{const e=Math.abs(n-t.length),i=t;for(let t=0;t<e;t++)i.pop();a({materials:i})}a({material_count:n})},min:1,max:50,displayUnit:!1}))),i.a.createElement(h.b,h.a.style,i.a.createElement(S.a,{title:Object(s.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(u.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:N||"",data:{value:N,label:"headingColor"},setAttributes:a}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:oe,label:"headLoadGoogleFonts"},fontFamily:{value:D,label:"headFontFamily"},fontWeight:{value:P,label:"headFontWeight"},fontStyle:{value:Ae,label:"headFontStyle"},transform:{value:ze,label:"headTransform"},decoration:{value:Ie,label:"headDecoration"},fontSizeType:{value:U,label:"headFontSizeType"},fontSize:{value:B,label:"headFontSize"},fontSizeMobile:{value:R,label:"headFontSizeMobile"},fontSizeTablet:{value:V,label:"headFontSizeTablet"},lineHeightType:{value:q,label:"headLineHeightType"},lineHeight:{value:$,label:"headLineHeight"},lineHeightMobile:{value:Y,label:"headLineHeightMobile"},lineHeightTablet:{value:J,label:"headLineHeightTablet"},letterSpacing:{value:De,label:"headLetterSpacing"},letterSpacingTablet:{value:Pe,label:"headLetterSpacingTablet"},letterSpacingMobile:{value:Ue,label:"headLetterSpacingMobile"},letterSpacingType:{value:Be,label:"headLetterSpacingType"}})),i.a.createElement(S.a,{title:Object(s.__)("Secondary Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(u.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",data:{value:M,label:"showTotaltimecolor"},setAttributes:a}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:ve,label:"priceLoadGoogleFonts"},fontFamily:{value:he,label:"priceFontFamily"},fontWeight:{value:de,label:"priceFontWeight"},fontStyle:{value:ke,label:"priceFontStyle"},transform:{value:Ce,label:"priceTransform"},decoration:{value:xe,label:"priceDecoration"},fontSizeType:{value:se,label:"priceFontSizeType"},fontSize:{value:ce,label:"priceFontSize"},fontSizeMobile:{value:ge,label:"priceFontSizeMobile"},fontSizeTablet:{value:ue,label:"priceFontSizeTablet"},lineHeightType:{value:fe,label:"priceLineHeightType"},lineHeight:{value:be,label:"priceLineHeight"},lineHeightMobile:{value:pe,label:"priceLineHeightMobile"},lineHeightTablet:{value:me,label:"priceLineHeightTablet"},letterSpacing:{value:Re,label:"priceLetterSpacing"},letterSpacingTablet:{value:Ve,label:"priceLetterSpacingTablet"},letterSpacingMobile:{value:qe,label:"priceLetterSpacingMobile"},letterSpacingType:{value:$e,label:"priceLetterSpacingType"}})),i.a.createElement(S.a,{title:Object(s.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(u.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:W||"",data:{value:W,label:"subHeadingColor"},setAttributes:a}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:re,label:"subHeadLoadGoogleFonts"},fontFamily:{value:K,label:"subHeadFontFamily"},fontWeight:{value:X,label:"subHeadFontWeight"},fontStyle:{value:Ne,label:"subHeadFontStyle"},transform:{value:We,label:"subHeadTransform"},decoration:{value:Ge,label:"subHeadDecoration"},fontSizeType:{value:Z,label:"subHeadFontSizeType"},fontSize:{value:Q,label:"subHeadFontSize"},fontSizeMobile:{value:ee,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:te,label:"subHeadFontSizeTablet"},lineHeightType:{value:ne,label:"subHeadLineHeightType"},lineHeight:{value:ae,label:"subHeadLineHeight"},lineHeightMobile:{value:ie,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:le,label:"subHeadLineHeightTablet"},letterSpacing:{value:Ye,label:"subHeadLetterSpacing"},letterSpacingTablet:{value:Je,label:"subHeadLetterSpacingTablet"},letterSpacingMobile:{value:Ke,label:"subHeadLetterSpacingMobile"},letterSpacingType:{value:Xe,label:"subHeadLetterSpacingType"}})),i.a.createElement(S.a,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},E&&i.a.createElement(d.a,{label:Object(s.__)("Time Margin","ultimate-addons-for-gutenberg"),setAttributes:a,value:_e,data:{value:_e,label:"timeSpace"},min:0,max:50,displayUnit:!1}),H&&i.a.createElement(d.a,{label:Object(s.__)("Cost Margin","ultimate-addons-for-gutenberg"),setAttributes:a,value:ye,data:{value:ye,label:"costSpace"},min:0,max:50,displayUnit:!1}),i.a.createElement(_.a,{label:Object(s.__)("Row Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:we,label:"row_gap"},tablet:{value:Se,label:"rowGapTablet"},mobile:{value:Te,label:"rowGapMobile"}},min:0,max:200,displayUnit:!1,setAttributes:a}),i.a.createElement(d.a,{label:Object(s.__)("Gap Between Steps","ultimate-addons-for-gutenberg"),setAttributes:a,value:je,data:{value:je,label:"step_gap"},min:0,max:200,displayUnit:!1}))),i.a.createElement(h.b,T({},h.a.advance,{parentProps:e})))),Ze,et,tt)};t.default=i.a.memo(O)}}]);