(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[92],{204:function(e,t,a){"use strict";var n,o,l=a(21),i=a.n(l),r=a(205),u=a.n(r),c=a(2);if(void 0===s)var s=[];const d=e=>{const[t,a]=Object(c.useState)([]);Object(c.useEffect)(()=>{r()},[]),Object(c.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&r()},[e]);const n=()=>{a({status:"loading"})},o=e=>{s.includes(e)||s.push(e)},l=()=>{a({status:"active"})},i=()=>{a({status:"inactive"})},r=()=>{s.includes(e.config.google.families[0])||(u.a.load({...e.config,loading:n,active:l,inactive:i}),o(e.config.google.families[0]));const t=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==t.length||0!==a.length){const r=(t[0]||a[0]).getElementsByTagName("iframe")[0];r&&(u.a.load({...e.config,loading:n,active:l,inactive:i,context:null==r?void 0:r.contentWindow}),o(e.config.google.families[0]))}},{children:d}=e;return d||null};d.propTypes={config:null===(n=i.a.object)||void 0===n?void 0:n.isRequired,children:i.a.element,onStatus:null===(o=i.a.func)||void 0===o?void 0:o.isRequired},d.defaultProps={onStatus:()=>{}},t.a=d},205:function(e,t,a){var n;!function(){function o(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var c=!!window.FontFace;function s(e,t,a,n){if(t=e.c.createElement(t),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?t.style.cssText=a[o]:t.setAttribute(o,a[o]));return n&&t.appendChild(e.c.createTextNode(n)),t}function d(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,i=0;i<n.length;i+=1)if(t[o]===n[i]){l=!0;break}l||n.push(t[o])}for(t=[],o=0;o<n.length;o+=1){for(l=!1,i=0;i<a.length;i+=1)if(n[o]===a[i]){l=!0;break}l||t.push(n[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var a=e.className.split(/\s+/),n=0,o=a.length;n<o;n++)if(a[n]==t)return!0;return!1}function h(e,t,a){function n(){r&&o&&l&&(r(i),r=null)}t=s(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,i=null,r=a||null;c?(t.onload=function(){o=!0,n()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),n()}):setTimeout((function(){o=!0,n()}),0),d(e,"head",t)}function m(e,t,a,n){var o=e.c.getElementsByTagName("head")[0];if(o){var l=s(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function O(e){this.a=e||"-"}function j(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function w(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function T(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function C(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function E(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new O("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),b(e.f,a,n)}H(e,"inactive")}function H(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,T(a)):e.h[t]())}function k(){this.c={}}function A(e,t){this.c=e,this.f=t,this.a=s(this.c,"span",{"aria-hidden":"true"},this.f)}function P(e){d(e.c,"body",e.a)}function L(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+w(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function x(e,t,a,n,o,l){this.g=e,this.j=t,this.a=n,this.c=a,this.f=o||3e3,this.h=l||void 0}function z(e,t,a,n,o,l,i){this.v=e,this.B=t,this.c=a,this.a=n,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new A(this.c,this.s),this.h=new A(this.c,this.s),this.j=new A(this.c,this.s),this.m=new A(this.c,this.s),e=L(e=new j(this.a.c+",serif",T(this.a))),this.g.a.style.cssText=e,e=L(e=new j(this.a.c+",sans-serif",T(this.a))),this.h.a.style.cssText=e,e=L(e=new j("serif",T(this.a))),this.j.a.style.cssText=e,e=L(e=new j("sans-serif",T(this.a))),this.m.a.style.cssText=e,P(this.g),P(this.h),P(this.j),P(this.m)}O.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},x.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,o){!function l(){r()-a>=t.f?o():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+w(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,a){o=setTimeout(a,t.f)}));Promise.race([l,n]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var I={D:"serif",C:"sans-serif"},M=null;function N(){if(null===M){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);M=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return M}function R(e,t,a){for(var n in I)if(I.hasOwnProperty(n)&&t===e.f[I[n]]&&a===e.f[I[n]])return!0;return!1}function D(e,t){setTimeout(i((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),t(this.a)}),e),0)}function B(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(a=n===t.f.serif&&o===t.f["sans-serif"])||(a=N()&&R(t,n,o)),a?r()-t.A>=t.w?N()&&R(t,n,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?D(t,t.v):D(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):D(t,t.v)}(this)};var W=null;function V(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&b(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),H(e,"active")):F(e.a))}function G(e){this.j=e,this.a=new k,this.h=0,this.f=this.g=!0}function U(e,t,a,n,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=n||{};if(0===a.length&&l)F(t.a);else{t.f+=a.length,l&&(t.j=l);var u,c=[];for(u=0;u<a.length;u++){var s=a[u],d=r[s.c],g=t.a,f=s;if(g.g&&b(g.f,[g.a.c("wf",f.c,T(f).toString(),"loading")]),H(g,"fontloading",f),g=null,null===W)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);W=f?42<parseInt(f[1],10):!h}else W=!1;g=W?new x(i(t.g,t),i(t.h,t),t.c,s,t.s,d):new z(i(t.g,t),i(t.h,t),t.c,s,t.s,e,d),c.push(g)}for(u=0;u<c.length;u++)c[u].start()}}),0)}function $(e,t){this.c=e,this.a=t}function q(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}B.prototype.g=function(e){var t=this.a;t.g&&b(t.f,[t.a.c("wf",e.c,T(e).toString(),"active")],[t.a.c("wf",e.c,T(e).toString(),"loading"),t.a.c("wf",e.c,T(e).toString(),"inactive")]),H(t,"fontactive",e),this.m=!0,V(this)},B.prototype.h=function(e){var t=this.a;if(t.g){var a=f(t.f,t.a.c("wf",e.c,T(e).toString(),"active")),n=[],o=[t.a.c("wf",e.c,T(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,T(e).toString(),"inactive")),b(t.f,n,o)}H(t,"fontinactive",e),V(this)},G.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],o=a.timeout;!function(e){e.g&&b(e.f,[e.a.c("wf","loading")]),H(e,"loading")}(t),n=function(e,t,a){var n,o=[];for(n in t)if(t.hasOwnProperty(n)){var l=e.c[n];l&&o.push(l(t[n],a))}return o}(e.a,a,e.c);var l=new B(e.c,t,o);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){U(e,l,t,a,n)}))}(this,new E(this.c,e),e)},$.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(o["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(o["__mti_fntLst"+a]){var n,l=o["__mti_fntLst"+a](),i=[];if(l)for(var r=0;r<l.length;r++){var u=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,i.push(new j(u,n))):i.push(new j(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},q.prototype.load=function(e){var t,a,n=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new p;for(t=0,a=n.length;t<a;t++)h(this.c,n[t],v(i));var r=[];for(t=0,a=o.length;t<a;t++)if((n=o[t].split(":"))[1])for(var u=n[1].split(","),c=0;c<u.length;c+=1)r.push(new j(n[0],u[c]));else r.push(new j(n[0]));_(i,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,n=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var o=t[n].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(n,o);var l=new X(o);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),o=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var i;if(i=[],r=n[1])for(var r,u=(r=r.split(",")).length,c=0;c<u;c++){var s;if((s=r[c]).match(/^[\w-]+$/))if(null==(d=ee.exec(s.toLowerCase())))s="";else{if(s=null==(s=d[2])||""==s?"n":Z[s],null==(d=d[1])||""==d)d="4";else var d=Y[d]||(isNaN(d)?"4":d.substr(0,1));s=[s,d].join("")}else s="";s&&i.push(s)}0<i.length&&(l=i),3==n.length&&(i=[],0<(n=(n=n[2])?n.split(","):i).length&&(n=Q[n[0]])&&(e.c[o]=n))}for(e.c[o]||(n=Q[o])&&(e.c[o]=n),n=0;n<l.length;n+=1)e.a.push(new j(o,l[n]))}}(l),h(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),_(t,(function(){e(l.a,l.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],o=0;o<t.length;o+=2)for(var l=t[o],i=t[o+1],r=0;r<i.length;r++)n.push(new j(l,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var o=0,l=a.fonts.length;o<l;++o){var i=a.fonts[o];n.a.push(new j(i.name,C("font-weight:"+i.weight+";font-style:"+i.style)))}e(n.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new G(window);le.a.c.custom=function(e,t){return new q(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new $(t,e)},le.a.c.typekit=function(e,t){return new ne(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(n=function(){return ie}.call(t,a,t,e))||(e.exports=n)}()},206:function(e,t,a){"use strict";var n=a(1),o=a(7),l=a(5),i=a(0),r=a.n(i),u=a(8);t.a=e=>{const{onSelectImage:t,backgroundImage:a,onRemoveImage:i,showVideoInput:c,label:s,disableRemove:d=!1,allow:g=["image"]}=e;let b,f=Object(n.__)("Image","ultimate-addons-for-gutenberg"),h=Object(n.__)("Select Image","ultimate-addons-for-gutenberg"),m=Object(n.__)("Change Image","ultimate-addons-for-gutenberg"),p=["image"];c&&(f=Object(n.__)("Video","ultimate-addons-for-gutenberg"),h=Object(n.__)("Select Video","ultimate-addons-for-gutenberg"),m=Object(n.__)("Change Video","ultimate-addons-for-gutenberg"),p=["video"],b=u.a.video_placeholder),f=s||f,f=!1===s?s:f,"Lottie Animation"===s&&(h=Object(n.__)("Select Lottie Animation","ultimate-addons-for-gutenberg"),m=Object(n.__)("Change Lottie Animation","ultimate-addons-for-gutenberg"),p=g,b=u.a.lottie);const v=e=>r.a.createElement("div",{className:"spectra-media-control__button spectra-media-control__button--"+e},u.a[e]);return r.a.createElement(o.BaseControl,{className:"spectra-media-control",id:"uagb-option-selector-"+s,label:f},r.a.createElement("div",{className:"spectra-media-control__wrapper",style:{backgroundImage:!b&&(null==a?void 0:a.url)&&`url("${(e=>{let t=e;switch(/(?:\.([^.]+))?$/.exec(String(t))[1]){case"json":t="";break;case"avi":case"mpg":case"mp4":case"m4v":case"mov":case"ogv":case"vtt":case"wmv":case"3gp":case"3g2":t=""}return t})(null==a?void 0:a.url)}")`}},b&&(null==a?void 0:a.url)&&r.a.createElement("div",{className:"spectra-media-control__icon"},b),r.a.createElement(l.MediaUpload,{title:h,onSelect:t,allowedTypes:p,value:a,render:e=>{let{open:t}=e;return(e=>{const t=null!=a&&a.url?"replace":"add";return r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--"+t,onClick:e},"add"===t?v(t):r.a.createElement("div",{className:"uag-control-label"},m))})(t)}}),!d&&(null==a?void 0:a.url)&&r.a.createElement("button",{className:"spectra-media-control__clickable spectra-media-control__clickable--close",onClick:i},v("close"))),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},217:function(e,t,a){"use strict";function n(e){const t=[];for(const a in e)if(e.hasOwnProperty(a)){const e={value:a,label:a};t.push(e)}return t}a.d(t,"a",(function(){return n}))},498:function(e,t,a){"use strict";a.r(t),a.d(t,"removeFromArray",(function(){return w}));var n=a(38),o=a(204),l=a(1),i=a(0),r=a.n(i),u=a(10),c=a(5),s=a(18),d=a(81),g=a(29),b=a(206),f=a(37),h=a(22),m=a(25),p=a(217),v=a(13),_=a(7),y=a(17);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let j=[{value:"thumbnail",label:Object(l.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(l.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(l.__)("Large","ultimate-addons-for-gutenberg")}];const w=(e,t)=>e.filter(e=>Array.isArray(t)?!t.includes(e):e!==t),T=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{enableSchema:w,itemType:T,itemSubtype:S,sku:C,identifier:E,identifierType:F,offerType:H,offerCurrency:k,offerStatus:A,offerPrice:P,offerExpiry:L,datepublish:x,ctaLink:z,ctaTarget:I,brand:M,headingTag:N,mainimage:R,imgSize:D,showFeature:B,showAuthor:W,starColor:V,descColor:G,titleColor:U,contentColor:$,headFontFamily:q,headFontWeight:J,headFontSizeType:K,headFontSize:X,headFontSizeMobile:Q,headFontSizeTablet:Y,headLineHeightType:Z,headLineHeight:ee,headLineHeightMobile:te,headLineHeightTablet:ae,headLoadGoogleFonts:ne,subHeadFontFamily:oe,subHeadFontWeight:le,subHeadFontSize:ie,subHeadFontSizeType:re,subHeadFontSizeMobile:ue,subHeadFontSizeTablet:ce,subHeadLineHeight:se,subHeadLineHeightType:de,subHeadLineHeightMobile:ge,subHeadLineHeightTablet:be,subHeadLoadGoogleFonts:fe,contentLoadGoogleFonts:he,contentFontFamily:me,contentFontWeight:pe,contentFontSizeType:ve,contentLineHeightType:_e,contentFontSize:ye,contentFontSizeTablet:Oe,contentFontSizeMobile:je,contentLineHeight:we,contentLineHeightTablet:Te,contentLineHeightMobile:Se,topPadding:Ce,bottomPadding:Ee,rightPadding:Fe,leftPadding:He,paddingTopMobile:ke,paddingBottomMobile:Ae,paddingRightMobile:Pe,paddingLeftMobile:Le,paddingTopTablet:xe,paddingBottomTablet:ze,paddingRightTablet:Ie,paddingLeftTablet:Me,spacingLink:Ne,paddingUnit:Re,mobilePaddingUnit:De,tabletPaddingUnit:Be,authorColor:We,summaryColor:Ve,starActiveColor:Ge,starOutlineColor:Ue,enableDescription:$e,enableImage:qe,overallAlignment:Je,isbn:Ke,bookAuthorName:Xe,reviewPublisher:Qe,provider:Ye,appCategory:Ze,operatingSystem:et,datecreated:tt,directorname:at,headTransform:nt,headDecoration:ot,subHeadTransform:lt,subHeadDecoration:it,contentTransform:rt,contentDecoration:ut,headFontStyle:ct,subHeadFontStyle:st,contentFontStyle:dt}=t,gt=e=>{a({itemType:e}),"Movie"===T&&a({enableImage:!0}),"Course"===T&&a({enableDescription:!0}),pt.hasOwnProperty(T)&&pt[T].includes(S)||a({itemSubtype:"None"})};let bt,ft,ht;if(!0===ne){const e={google:{families:[q+(J?":"+J:"")]}};ft=r.a.createElement(o.a,{config:e})}if(!0===fe){const e={google:{families:[oe+(le?":"+le:"")]}};ht=r.a.createElement(o.a,{config:e})}if(!0===he){const e={google:{families:[me+(pe?":"+pe:"")]}};bt=r.a.createElement(o.a,{config:e})}let mt;const pt={Book:[{value:"Audiobook",label:Object(l.__)("Audio book","ultimate-addons-for-gutenberg")}],Product:[{value:"IndividualProduct",label:Object(l.__)("Individual Product","ultimate-addons-for-gutenberg")},{value:"ProductCollection",label:Object(l.__)("Product Collection","ultimate-addons-for-gutenberg")},{value:"ProductGroup",label:Object(l.__)("Product Group","ultimate-addons-for-gutenberg")},{value:"ProductModel",label:Object(l.__)("Product Model","ultimate-addons-for-gutenberg")},{value:"SomeProducts",label:Object(l.__)("Some Products","ultimate-addons-for-gutenberg")},{value:"Vehicle",label:Object(l.__)("Vehicle","ultimate-addons-for-gutenberg")}],SoftwareApplication:[{value:"MobileApplication",label:Object(l.__)("Mobile Application","ultimate-addons-for-gutenberg")},{value:"VideoGame",label:Object(l.__)("Video Game","ultimate-addons-for-gutenberg")},{value:"WebApplication",label:Object(l.__)("Web Application","ultimate-addons-for-gutenberg")}]};switch(T){default:break;case"Book":mt=r.a.createElement(r.a.Fragment,null,r.a.createElement(_.TextControl,{label:Object(l.__)("ISBN","ultimate-addons-for-gutenberg"),value:Ke,onChange:e=>a({isbn:e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),r.a.createElement(_.TextControl,{label:Object(l.__)("Book author name","ultimate-addons-for-gutenberg"),value:Xe,onChange:e=>a({bookAuthorName:e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}));break;case"Course":mt=r.a.createElement(r.a.Fragment,null,r.a.createElement(_.TextControl,{label:Object(l.__)("Provider","ultimate-addons-for-gutenberg"),value:Ye,onChange:e=>a({provider:e})}));break;case"SoftwareApplication":mt=r.a.createElement(r.a.Fragment,null,r.a.createElement(_.TextControl,{label:Object(l.__)("Application Category","ultimate-addons-for-gutenberg"),value:Ze,onChange:e=>a({appCategory:e})}),r.a.createElement(_.TextControl,{label:Object(l.__)("Operating System","ultimate-addons-for-gutenberg"),value:et,onChange:e=>a({operatingSystem:e})}));break;case"Movie":mt=r.a.createElement(r.a.Fragment,null,r.a.createElement(_.TextControl,{label:Object(l.__)("Director Name","ultimate-addons-for-gutenberg"),value:at,onChange:e=>a({directorname:e})}),r.a.createElement("h2",null,Object(l.__)("Date of create")),r.a.createElement(_.DateTimePicker,{currentDate:tt,onChange:e=>a({datecreated:e}),is12Hour:!0}))}return r.a.createElement(i.Suspense,{fallback:Object(u.a)()},r.a.createElement(c.InspectorControls,null,r.a.createElement(d.a,null,r.a.createElement(g.b,g.a.general,(R&&R.sizes&&(j=Object(p.a)(R.sizes)),r.a.createElement(y.a,{title:Object(l.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(h.a,{setAttributes:a,label:Object(l.__)("Review Title Tag","ultimate-addons-for-gutenberg"),data:{value:N,label:"headingTag"},options:[{value:"h1",label:Object(l.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(l.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(l.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(l.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(l.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(l.__)("H6","ultimate-addons-for-gutenberg")}]}),r.a.createElement(h.a,{setAttributes:a,label:Object(l.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:Je,label:"overallAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:r.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-left")}),tooltip:Object(l.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:r.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-center")}),tooltip:Object(l.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:r.a.createElement(_.Icon,{icon:Object(v.a)("fa fa-align-right")}),tooltip:Object(l.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),r.a.createElement(_.ToggleControl,{label:Object(l.__)("Enable Schema Support","ultimate-addons-for-gutenberg"),checked:w,onChange:()=>a({enableSchema:!w})}),r.a.createElement(_.ToggleControl,{label:Object(l.__)("Show Review Description","ultimate-addons-for-gutenberg"),checked:$e,onChange:()=>a({enableDescription:!$e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),r.a.createElement(_.ToggleControl,{label:Object(l.__)("Show Review Author","ultimate-addons-for-gutenberg"),checked:W,onChange:()=>a({showAuthor:!W}),help:Object(l.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),r.a.createElement(_.ToggleControl,{label:Object(l.__)("Show Ratings","ultimate-addons-for-gutenberg"),checked:B,onChange:()=>a({showFeature:!B}),help:Object(l.__)("Note: Add feature/section ratings separately.","ultimate-addons-for-gutenberg")}),r.a.createElement(_.ToggleControl,{label:Object(l.__)("Show Review Image","ultimate-addons-for-gutenberg"),checked:qe,onChange:()=>a({enableImage:!qe}),help:Object(l.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),r.a.createElement("h2",null,Object(l.__)("Link")),r.a.createElement(_.TextControl,{value:z,onChange:e=>a({ctaLink:e})}),r.a.createElement(_.ToggleControl,{label:Object(l.__)("Open in new window","ultimate-addons-for-gutenberg"),checked:I,onChange:()=>{a({ctaTarget:!I})}}))),!0===qe&&r.a.createElement(y.a,{title:Object(l.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{onSelectImage:e=>{e&&e.url&&e.type&&"image"===e.type?a({mainimage:e}):a({mainimage:null})},backgroundImage:R,onRemoveImage:()=>{a({mainimage:""})}}),R&&"null"!==R&&"null"!==R.url&&""!==R.url&&r.a.createElement(m.a,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),data:{value:D,label:"imgSize"},setAttributes:a,options:j}))),(()=>{if(!0===w)return r.a.createElement(y.a,{title:Object(l.__)("Schema","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(m.a,{label:Object(l.__)("Item Type","ultimate-addons-for-gutenberg"),data:{value:T},onChange:gt,options:[{value:"Book",label:Object(l.__)("Book","ultimate-addons-for-gutenberg")},{value:"Course",label:Object(l.__)("Course","ultimate-addons-for-gutenberg")},{value:"Movie",label:Object(l.__)("Movie","ultimate-addons-for-gutenberg")},{value:"Product",label:Object(l.__)("Product","ultimate-addons-for-gutenberg")},{value:"SoftwareApplication",label:Object(l.__)("Software Application","ultimate-addons-for-gutenberg")}]}),pt.hasOwnProperty(T)&&r.a.createElement(m.a,{label:Object(l.__)("Item Subtype","ultimate-addons-for-gutenberg"),data:{value:S,label:"itemSubtype"},setAttributes:a,options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},...pt[T]]}),mt,r.a.createElement(_.TextControl,{label:Object(l.__)("Review Publisher","ultimate-addons-for-gutenberg"),value:Qe,onChange:e=>a({reviewPublisher:e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),r.a.createElement("h2",null,Object(l.__)("Date Of Publish","ultimate-addons-for-gutenberg")),r.a.createElement(_.DateTimePicker,{className:"uagb-date-picker",currentDate:x,onChange:e=>a({datepublish:e}),is12Hour:!0}),["Product","SoftwareApplication"].includes(T)&&r.a.createElement(r.a.Fragment,null,["Product"].includes(T)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_.TextControl,{label:Object(l.__)("Brand","ultimate-addons-for-gutenberg"),value:M,onChange:e=>a({brand:e})}),r.a.createElement(_.TextControl,{label:Object(l.__)("SKU","ultimate-addons-for-gutenberg"),value:C,onChange:e=>a({sku:e})}),r.a.createElement(_.TextControl,{label:Object(l.__)("Identifier","ultimate-addons-for-gutenberg"),value:E,onChange:e=>a({identifier:e})}),r.a.createElement(m.a,{label:Object(l.__)("Identifier Type","ultimate-addons-for-gutenberg"),data:{value:F,label:"identifierType"},setAttributes:a,options:["nsn","mpn","gtin8","gtin12","gtin13","gtin14","gtin"].map(e=>({label:e.toUpperCase(),value:e}))})),["Product","SoftwareApplication"].includes(T)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_.TextControl,{label:Object(l.__)("Offer Currency","ultimate-addons-for-gutenberg"),value:k,onChange:e=>a({offerCurrency:e})})),"Offer"===H&&r.a.createElement(r.a.Fragment,null,r.a.createElement(_.TextControl,{label:Object(l.__)("Offer Price","ultimate-addons-for-gutenberg"),value:P,onChange:e=>a({offerPrice:e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),r.a.createElement(m.a,{label:Object(l.__)("Offer Status","ultimate-addons-for-gutenberg"),data:{value:A,label:"offerStatus"},setAttributes:e.setAttributes,options:[{value:"https://schema.org/Discontinued",label:Object(l.__)("Discontinued","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStock",label:Object(l.__)("In Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStoreOnly",label:Object(l.__)("In Store Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/LimitedAvailability",label:Object(l.__)("Limited Availability","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OnlineOnly",label:Object(l.__)("Online Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OutOfStock",label:Object(l.__)("Out Of Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreOrder",label:Object(l.__)("Pre Order","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreSale",label:Object(l.__)("Pre Sale","ultimate-addons-for-gutenberg")},{value:"https://schema.org/SoldOut",label:Object(l.__)("Sold Out","ultimate-addons-for-gutenberg")}]}),r.a.createElement("h2",null,Object(l.__)("Price Valid Until","ultimate-addons-for-gutenberg")),r.a.createElement(_.DateTimePicker,{className:"uagb-date-picker",currentDate:L,onChange:e=>a({offerExpiry:e}),is12Hour:!0}))))})()),r.a.createElement(g.b,g.a.style,r.a.createElement(y.a,{title:Object(l.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(s.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:U,onColorChange:e=>a({titleColor:e})}),r.a.createElement(n.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:a,loadGoogleFonts:{value:ne,label:"headLoadGoogleFonts"},fontFamily:{value:q,label:"headFontFamily"},fontWeight:{value:J,label:"headFontWeight"},fontStyle:{value:ct,label:"headFontStyle"},transform:{value:nt,label:"headTransform"},decoration:{value:ot,label:"headDecoration"},fontSizeType:{value:K,label:"headFontSizeType"},fontSize:{value:X,label:"headFontSize"},fontSizeMobile:{value:Q,label:"headFontSizeMobile"},fontSizeTablet:{value:Y,label:"headFontSizeTablet"},lineHeightType:{value:Z,label:"headLineHeightType"},lineHeight:{value:ee,label:"headLineHeight"},lineHeightMobile:{value:te,label:"headLineHeightMobile"},lineHeightTablet:{value:ae,label:"headLineHeightTablet"}})),$e&&r.a.createElement(y.a,{title:Object(l.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},!0===$e&&r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:G,onColorChange:e=>a({descColor:e})}),r.a.createElement(n.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:a,loadGoogleFonts:{value:fe,label:"subHeadLoadGoogleFonts"},fontFamily:{value:oe,label:"subHeadFontFamily"},fontWeight:{value:le,label:"subHeadFontWeight"},fontStyle:{value:st,label:"subHeadFontStyle"},transform:{value:lt,label:"subHeadTransform"},decoration:{value:it,label:"subHeadDecoration"},fontSizeType:{value:re,label:"subHeadFontSizeType"},fontSize:{value:ie,label:"subHeadFontSize"},fontSizeMobile:{value:ue,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ce,label:"subHeadFontSizeTablet"},lineHeightType:{value:de,label:"subHeadLineHeightType"},lineHeight:{value:se,label:"subHeadLineHeight"},lineHeightMobile:{value:ge,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:be,label:"subHeadLineHeightTablet"}}))),!0===W&&r.a.createElement(y.a,{title:Object(l.__)("Author","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:We,onColorChange:e=>a({authorColor:e})}))),!0===B&&r.a.createElement(y.a,{title:Object(l.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(r.a.Fragment,null,r.a.createElement(s.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:$,onColorChange:e=>a({contentColor:e})}))),r.a.createElement(y.a,{title:Object(l.__)("Summary","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(s.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ve,onColorChange:e=>a({summaryColor:e})}),r.a.createElement(n.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:a,loadGoogleFonts:{value:he,label:"contentLoadGoogleFonts"},fontFamily:{value:me,label:"contentFontFamily"},fontWeight:{value:pe,label:"contentFontWeight"},fontStyle:{value:dt,label:"contentFontStyle"},transform:{value:rt,label:"contentTransform"},decoration:{value:ut,label:"contentDecoration"},fontSizeType:{value:ve,label:"contentFontSizeType"},fontSize:{value:ye,label:"contentFontSize"},fontSizeMobile:{value:je,label:"contentFontSizeMobile"},fontSizeTablet:{value:Oe,label:"contentFontSizeTablet"},lineHeightType:{value:_e,label:"contentLineHeightType"},lineHeight:{value:we,label:"contentLineHeight"},lineHeightMobile:{value:Se,label:"contentLineHeightMobile"},lineHeightTablet:{value:Te,label:"contentLineHeightTablet"}})),r.a.createElement(y.a,{title:Object(l.__)("Star","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(s.a,{label:Object(l.__)("Active Color","ultimate-addons-for-gutenberg"),colorValue:V,onColorChange:e=>a({starColor:e})}),r.a.createElement(s.a,{label:Object(l.__)("Inactive Color","ultimate-addons-for-gutenberg"),colorValue:Ge,onColorChange:e=>a({starActiveColor:e})}),r.a.createElement(s.a,{label:Object(l.__)("Outline Color","ultimate-addons-for-gutenberg"),colorValue:Ue,onColorChange:e=>a({starOutlineColor:e})})),r.a.createElement(y.a,{title:Object(l.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(f.a,O({},e,{label:Object(l.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ce,label:"topPadding"},valueRight:{value:Fe,label:"rightPadding"},valueBottom:{value:Ee,label:"bottomPadding"},valueLeft:{value:He,label:"leftPadding"},valueTopTablet:{value:xe,label:"paddingTopTablet"},valueRightTablet:{value:Ie,label:"paddingRightTablet"},valueBottomTablet:{value:ze,label:"paddingBottomTablet"},valueLeftTablet:{value:Me,label:"paddingLeftTablet"},valueTopMobile:{value:ke,label:"paddingTopMobile"},valueRightMobile:{value:Pe,label:"paddingRightMobile"},valueBottomMobile:{value:Ae,label:"paddingBottomMobile"},valueLeftMobile:{value:Le,label:"paddingLeftMobile"},unit:{value:Re,label:"paddingUnit"},mUnit:{value:De,label:"mobilePaddingUnit"},tUnit:{value:Be,label:"tabletPaddingUnit"},attributes:t,setAttributes:a,link:{value:Ne,label:"spacingLink"}})))),r.a.createElement(g.b,O({},g.a.advance,{parentProps:e})))),ft,ht,bt)};t.default=r.a.memo(T)}}]);