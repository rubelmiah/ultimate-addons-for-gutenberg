(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[90],{192:function(e,t,a){"use strict";var n,o,l=a(34),i=a.n(l),r=a(193),u=a.n(r),s=a(2);if(void 0===c)var c=[];const g=e=>{const[t,a]=Object(s.useState)([]);Object(s.useEffect)(()=>{i()},[]),Object(s.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&i()},[e]);const n=()=>{a({status:"loading"})},o=()=>{a({status:"active"})},l=()=>{a({status:"inactive"})},i=()=>{var t;c.includes(e.config.google.families[0])||(u.a.load({...e.config,loading:n,active:o,inactive:l}),t=e.config.google.families[0],c.includes(t)||c.push(t))},{children:r}=e;return r||null};g.propTypes={config:null===(n=i.a.object)||void 0===n?void 0:n.isRequired,children:i.a.element,onStatus:null===(o=i.a.func)||void 0===o?void 0:o.isRequired},g.defaultProps={onStatus:()=>{}},t.a=g},193:function(e,t,a){var n;!function(){function o(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function c(e,t,a,n){if(t=e.c.createElement(t),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?t.style.cssText=a[o]:t.setAttribute(o,a[o]));return n&&t.appendChild(e.c.createTextNode(n)),t}function g(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function d(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,i=0;i<n.length;i+=1)if(t[o]===n[i]){l=!0;break}l||n.push(t[o])}for(t=[],o=0;o<n.length;o+=1){for(l=!1,i=0;i<a.length;i+=1)if(n[o]===a[i]){l=!0;break}l||t.push(n[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var a=e.className.split(/\s+/),n=0,o=a.length;n<o;n++)if(a[n]==t)return!0;return!1}function h(e,t,a){function n(){r&&o&&l&&(r(i),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,i=null,r=a||null;s?(t.onload=function(){o=!0,n()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),n()}):setTimeout((function(){o=!0,n()}),0),g(e,"head",t)}function m(e,t,a,n){var o=e.c.getElementsByTagName("head")[0];if(o){var l=c(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function O(e){this.a=e||"-"}function j(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function T(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function w(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function C(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function E(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new O("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),b(e.f,a,n)}H(e,"inactive")}function H(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,w(a)):e.h[t]())}function k(){this.c={}}function P(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function x(e){g(e.c,"body",e.a)}function A(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function L(e,t,a,n,o,l){this.g=e,this.j=t,this.a=n,this.c=a,this.f=o||3e3,this.h=l||void 0}function z(e,t,a,n,o,l,i){this.v=e,this.B=t,this.c=a,this.a=n,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new P(this.c,this.s),this.h=new P(this.c,this.s),this.j=new P(this.c,this.s),this.m=new P(this.c,this.s),e=A(e=new j(this.a.c+",serif",w(this.a))),this.g.a.style.cssText=e,e=A(e=new j(this.a.c+",sans-serif",w(this.a))),this.h.a.style.cssText=e,e=A(e=new j("serif",w(this.a))),this.j.a.style.cssText=e,e=A(e=new j("sans-serif",w(this.a))),this.m.a.style.cssText=e,x(this.g),x(this.h),x(this.j),x(this.m)}O.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},L.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,o){!function l(){r()-a>=t.f?o():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+T(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,a){o=setTimeout(a,t.f)}));Promise.race([l,n]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var I={D:"serif",C:"sans-serif"},M=null;function N(){if(null===M){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);M=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return M}function R(e,t,a){for(var n in I)if(I.hasOwnProperty(n)&&t===e.f[I[n]]&&a===e.f[I[n]])return!0;return!1}function D(e,t){setTimeout(i((function(){d(this.g.a),d(this.h.a),d(this.j.a),d(this.m.a),t(this.a)}),e),0)}function B(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(a=n===t.f.serif&&o===t.f["sans-serif"])||(a=N()&&R(t,n,o)),a?r()-t.A>=t.w?N()&&R(t,n,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?D(t,t.v):D(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):D(t,t.v)}(this)};var V=null;function W(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&b(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),H(e,"active")):F(e.a))}function G(e){this.j=e,this.a=new k,this.h=0,this.f=this.g=!0}function U(e,t,a,n,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=n||{};if(0===a.length&&l)F(t.a);else{t.f+=a.length,l&&(t.j=l);var u,s=[];for(u=0;u<a.length;u++){var c=a[u],g=r[c.c],d=t.a,f=c;if(d.g&&b(d.f,[d.a.c("wf",f.c,w(f).toString(),"loading")]),H(d,"fontloading",f),d=null,null===V)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);V=f?42<parseInt(f[1],10):!h}else V=!1;d=V?new L(i(t.g,t),i(t.h,t),t.c,c,t.s,g):new z(i(t.g,t),i(t.h,t),t.c,c,t.s,e,g),s.push(d)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}B.prototype.g=function(e){var t=this.a;t.g&&b(t.f,[t.a.c("wf",e.c,w(e).toString(),"active")],[t.a.c("wf",e.c,w(e).toString(),"loading"),t.a.c("wf",e.c,w(e).toString(),"inactive")]),H(t,"fontactive",e),this.m=!0,W(this)},B.prototype.h=function(e){var t=this.a;if(t.g){var a=f(t.f,t.a.c("wf",e.c,w(e).toString(),"active")),n=[],o=[t.a.c("wf",e.c,w(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,w(e).toString(),"inactive")),b(t.f,n,o)}H(t,"fontinactive",e),W(this)},G.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],o=a.timeout;!function(e){e.g&&b(e.f,[e.a.c("wf","loading")]),H(e,"loading")}(t),n=function(e,t,a){var n,o=[];for(n in t)if(t.hasOwnProperty(n)){var l=e.c[n];l&&o.push(l(t[n],a))}return o}(e.a,a,e.c);var l=new B(e.c,t,o);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){U(e,l,t,a,n)}))}(this,new E(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(o["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(o["__mti_fntLst"+a]){var n,l=o["__mti_fntLst"+a](),i=[];if(l)for(var r=0;r<l.length;r++){var u=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,i.push(new j(u,n))):i.push(new j(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,n=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new p;for(t=0,a=n.length;t<a;t++)h(this.c,n[t],v(i));var r=[];for(t=0,a=o.length;t<a;t++)if((n=o[t].split(":"))[1])for(var u=n[1].split(","),s=0;s<u.length;s+=1)r.push(new j(n[0],u[s]));else r.push(new j(n[0]));_(i,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,n=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var o=t[n].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(n,o);var l=new X(o);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),o=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var i;if(i=[],r=n[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var c;if((c=r[s]).match(/^[\w-]+$/))if(null==(g=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=g[2])||""==c?"n":Z[c],null==(g=g[1])||""==g)g="4";else var g=Y[g]||(isNaN(g)?"4":g.substr(0,1));c=[c,g].join("")}else c="";c&&i.push(c)}0<i.length&&(l=i),3==n.length&&(i=[],0<(n=(n=n[2])?n.split(","):i).length&&(n=Q[n[0]])&&(e.c[o]=n))}for(e.c[o]||(n=Q[o])&&(e.c[o]=n),n=0;n<l.length;n+=1)e.a.push(new j(o,l[n]))}}(l),h(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),_(t,(function(){e(l.a,l.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],o=0;o<t.length;o+=2)for(var l=t[o],i=t[o+1],r=0;r<i.length;r++)n.push(new j(l,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var o=0,l=a.fonts.length;o<l;++o){var i=a.fonts[o];n.a.push(new j(i.name,C("font-weight:"+i.weight+";font-style:"+i.style)))}e(n.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new G(window);le.a.c.custom=function(e,t){return new $(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new q(t,e)},le.a.c.typekit=function(e,t){return new ne(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(n=function(){return ie}.call(t,a,t,e))||(e.exports=n)}()},194:function(e,t,a){"use strict";var n,o=a(1),l=a(6),i=a(4),r=a(0),u=a.n(r),s=a(14),c=a.n(s),g=a(195),d=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=g.a.locals||{},f.use=function(){return d++||(n=c()(g.a,b)),f},f.unuse=function(){d>0&&!--d&&(n(),n=null)};var h=f;t.a=e=>{Object(r.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]);const{onSelectImage:t,backgroundImage:a,onRemoveImage:n,showVideoInput:s,label:c}=e;let g=Object(o.__)("Image","ultimate-addons-for-gutenberg"),d=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),b=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),f=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),m=["image"];return s&&(g=Object(o.__)("Video","ultimate-addons-for-gutenberg"),d=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),b=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),f=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),m=["video"]),g=c||g,u.a.createElement(l.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+c,label:g},u.a.createElement("div",{className:"uagb-bg-image"},u.a.createElement(i.MediaUpload,{title:d,onSelect:t,allowedTypes:m,value:a,render:e=>{let{open:t}=e;return u.a.createElement(l.Button,{isSecondary:!0,onClick:t},null!=a&&a.url?b:d)}}),(null==a?void 0:a.url)&&u.a.createElement(l.Button,{className:"uagb-rm-btn",onClick:n,isLink:!0,isDestructive:!0},f),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},195:function(e,t,a){"use strict";var n=a(15),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),t.a=o},203:function(e,t,a){"use strict";function n(e){const t=[];for(const a in e)if(e.hasOwnProperty(a)){const e={value:a,label:a};t.push(e)}return t}a.d(t,"a",(function(){return n}))},480:function(e,t,a){"use strict";a.r(t),a.d(t,"removeFromArray",(function(){return j}));var n=a(30),o=a(192),l=a(1),i=a(0),r=a.n(i),u=a(8),s=a(4),c=a(17),g=a(79),d=a(23),b=a(194),f=a(50),h=a(19),m=a(203),p=a(11),v=a(6),_=a(16);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let O=[{value:"thumbnail",label:Object(l.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(l.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(l.__)("Large","ultimate-addons-for-gutenberg")}];const j=(e,t)=>e.filter(e=>Array.isArray(t)?!t.includes(e):e!==t),T=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{enableSchema:j,itemType:T,itemSubtype:w,sku:S,identifier:C,identifierType:E,offerType:F,offerCurrency:H,offerStatus:k,offerPrice:P,offerExpiry:x,datepublish:A,ctaLink:L,ctaTarget:z,brand:I,headingTag:M,mainimage:N,imgSize:R,showFeature:D,showAuthor:B,starColor:V,descColor:W,titleColor:G,contentColor:U,headFontFamily:q,headFontWeight:$,headFontSizeType:J,headFontSize:K,headFontSizeMobile:X,headFontSizeTablet:Q,headLineHeightType:Y,headLineHeight:Z,headLineHeightMobile:ee,headLineHeightTablet:te,headLoadGoogleFonts:ae,subHeadFontFamily:ne,subHeadFontWeight:oe,subHeadFontSize:le,subHeadFontSizeType:ie,subHeadFontSizeMobile:re,subHeadFontSizeTablet:ue,subHeadLineHeight:se,subHeadLineHeightType:ce,subHeadLineHeightMobile:ge,subHeadLineHeightTablet:de,subHeadLoadGoogleFonts:be,contentLoadGoogleFonts:fe,contentFontFamily:he,contentFontWeight:me,contentFontSizeType:pe,contentLineHeightType:ve,contentFontSize:_e,contentFontSizeTablet:ye,contentFontSizeMobile:Oe,contentLineHeight:je,contentLineHeightTablet:Te,contentLineHeightMobile:we,topPadding:Se,bottomPadding:Ce,rightPadding:Ee,leftPadding:Fe,paddingTopMobile:He,paddingBottomMobile:ke,paddingRightMobile:Pe,paddingLeftMobile:xe,paddingTopTablet:Ae,paddingBottomTablet:Le,paddingRightTablet:ze,paddingLeftTablet:Ie,spacingLink:Me,paddingUnit:Ne,mobilePaddingUnit:Re,tabletPaddingUnit:De,authorColor:Be,summaryColor:Ve,starActiveColor:We,starOutlineColor:Ge,enableDescription:Ue,enableImage:qe,overallAlignment:$e,isbn:Je,bookAuthorName:Ke,reviewPublisher:Xe,provider:Qe,appCategory:Ye,operatingSystem:Ze,datecreated:et,directorname:tt,headTransform:at,headDecoration:nt,subHeadTransform:ot,subHeadDecoration:lt,contentTransform:it,contentDecoration:rt,headFontStyle:ut,subHeadFontStyle:st,contentFontStyle:ct}=t;let gt,dt,bt;if(!0===ae){const e={google:{families:[q+($?":"+$:"")]}};dt=r.a.createElement(o.a,{config:e})}if(!0===be){const e={google:{families:[ne+(oe?":"+oe:"")]}};bt=r.a.createElement(o.a,{config:e})}if(!0===fe){const e={google:{families:[he+(me?":"+me:"")]}};gt=r.a.createElement(o.a,{config:e})}let ft;const ht={Book:[{value:"Audiobook",label:Object(l.__)("Audio book","ultimate-addons-for-gutenberg")}],Product:[{value:"IndividualProduct",label:Object(l.__)("Individual Product","ultimate-addons-for-gutenberg")},{value:"ProductCollection",label:Object(l.__)("Product Collection","ultimate-addons-for-gutenberg")},{value:"ProductGroup",label:Object(l.__)("Product Group","ultimate-addons-for-gutenberg")},{value:"ProductModel",label:Object(l.__)("Product Model","ultimate-addons-for-gutenberg")},{value:"SomeProducts",label:Object(l.__)("Some Products","ultimate-addons-for-gutenberg")},{value:"Vehicle",label:Object(l.__)("Vehicle","ultimate-addons-for-gutenberg")}],SoftwareApplication:[{value:"MobileApplication",label:Object(l.__)("Mobile Application","ultimate-addons-for-gutenberg")},{value:"VideoGame",label:Object(l.__)("Video Game","ultimate-addons-for-gutenberg")},{value:"WebApplication",label:Object(l.__)("Web Application","ultimate-addons-for-gutenberg")}]};switch(T){default:break;case"Book":ft=r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("ISBN","ultimate-addons-for-gutenberg"),value:Je,onChange:e=>a({isbn:e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),r.a.createElement(v.TextControl,{label:Object(l.__)("Book author name","ultimate-addons-for-gutenberg"),value:Ke,onChange:e=>a({bookAuthorName:e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}));break;case"Course":ft=r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("Provider","ultimate-addons-for-gutenberg"),value:Qe,onChange:e=>a({provider:e})}));break;case"SoftwareApplication":ft=r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("Application Category","ultimate-addons-for-gutenberg"),value:Ye,onChange:e=>a({appCategory:e})}),r.a.createElement(v.TextControl,{label:Object(l.__)("Operating System","ultimate-addons-for-gutenberg"),value:Ze,onChange:e=>a({operatingSystem:e})}));break;case"Movie":ft=r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("Director Name","ultimate-addons-for-gutenberg"),value:tt,onChange:e=>a({directorname:e})}),r.a.createElement("h2",null,Object(l.__)("Date of create")),r.a.createElement(v.DateTimePicker,{currentDate:et,onChange:e=>a({datecreated:e}),is12Hour:!0}))}return r.a.createElement(i.Suspense,{fallback:Object(u.a)()},r.a.createElement(s.BlockControls,{key:"index"},r.a.createElement(s.AlignmentToolbar,{value:$e,onChange:e=>a({overallAlignment:e})})),r.a.createElement(s.InspectorControls,null,r.a.createElement(g.a,null,r.a.createElement(d.b,d.a.general,(N&&N.sizes&&(O=Object(m.a)(N.sizes)),r.a.createElement(_.a,{title:Object(l.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(h.a,{setAttributes:a,label:Object(l.__)("Review Title Tag","ultimate-addons-for-gutenberg"),data:{value:M,label:"headingTag"},options:[{value:"h1",label:Object(l.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(l.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(l.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(l.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(l.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(l.__)("H6","ultimate-addons-for-gutenberg")}]}),r.a.createElement(h.a,{setAttributes:a,label:Object(l.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:$e,label:"overallAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:r.a.createElement(v.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(l.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:r.a.createElement(v.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(l.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:r.a.createElement(v.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(l.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),r.a.createElement(v.ToggleControl,{label:Object(l.__)("Enable Schema Support","ultimate-addons-for-gutenberg"),checked:j,onChange:()=>a({enableSchema:!j})}),r.a.createElement(v.ToggleControl,{label:Object(l.__)("Show Review Description","ultimate-addons-for-gutenberg"),checked:Ue,onChange:()=>a({enableDescription:!Ue}),help:Object(l.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),r.a.createElement(v.ToggleControl,{label:Object(l.__)("Show Review Author","ultimate-addons-for-gutenberg"),checked:B,onChange:()=>a({showAuthor:!B}),help:Object(l.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),r.a.createElement(v.ToggleControl,{label:Object(l.__)("Show Ratings","ultimate-addons-for-gutenberg"),checked:D,onChange:()=>a({showFeature:!D}),help:Object(l.__)("Note: Add feature/section ratings separately.","ultimate-addons-for-gutenberg")}),r.a.createElement(v.ToggleControl,{label:Object(l.__)("Show Review Image","ultimate-addons-for-gutenberg"),checked:qe,onChange:()=>a({enableImage:!qe}),help:Object(l.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),r.a.createElement("h2",null,Object(l.__)("Link")),r.a.createElement(v.TextControl,{value:L,onChange:e=>a({ctaLink:e})}),r.a.createElement(v.ToggleControl,{label:Object(l.__)("Open in new window","ultimate-addons-for-gutenberg"),checked:z,onChange:()=>{a({ctaTarget:!z})}}))),!0===qe&&r.a.createElement(_.a,{title:Object(l.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{onSelectImage:e=>{e&&e.url&&e.type&&"image"===e.type?a({mainimage:e}):a({mainimage:null})},backgroundImage:N,onRemoveImage:()=>{a({mainimage:""})}}),N&&"null"!==N&&"null"!==N.url&&""!==N.url&&r.a.createElement(v.SelectControl,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),options:O,value:R,onChange:e=>a({imgSize:e})}))),(()=>{if(!0===j)return r.a.createElement(_.a,{title:Object(l.__)("Schema","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(v.SelectControl,{label:Object(l.__)("Item Type","ultimate-addons-for-gutenberg"),value:T,onChange:e=>{a({itemType:e}),"Movie"===T&&a({enableImage:!0}),"Course"===T&&a({enableDescription:!0}),ht.hasOwnProperty(T)&&ht[T].includes(w)||a({itemSubtype:"None"})},options:[{value:"Book",label:Object(l.__)("Book","ultimate-addons-for-gutenberg")},{value:"Course",label:Object(l.__)("Course","ultimate-addons-for-gutenberg")},{value:"Movie",label:Object(l.__)("Movie","ultimate-addons-for-gutenberg")},{value:"Product",label:Object(l.__)("Product","ultimate-addons-for-gutenberg")},{value:"SoftwareApplication",label:Object(l.__)("Software Application","ultimate-addons-for-gutenberg")}]}),ht.hasOwnProperty(T)&&r.a.createElement(v.SelectControl,{label:Object(l.__)("Item Subtype","ultimate-addons-for-gutenberg"),options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},...ht[T]],value:w,onChange:e=>a({itemSubtype:e})}),ft,r.a.createElement(v.TextControl,{label:Object(l.__)("Review Publisher","ultimate-addons-for-gutenberg"),value:Xe,onChange:e=>a({reviewPublisher:e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),r.a.createElement("h2",null,Object(l.__)("Date Of Publish","ultimate-addons-for-gutenberg")),r.a.createElement(v.DateTimePicker,{className:"uagb-date-picker",currentDate:A,onChange:e=>a({datepublish:e}),is12Hour:!0}),["Product","SoftwareApplication"].includes(T)&&r.a.createElement(r.a.Fragment,null,["Product"].includes(T)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("Brand","ultimate-addons-for-gutenberg"),value:I,onChange:e=>a({brand:e})}),r.a.createElement(v.TextControl,{label:Object(l.__)("SKU","ultimate-addons-for-gutenberg"),value:S,onChange:e=>a({sku:e})}),r.a.createElement(v.TextControl,{label:Object(l.__)("Identifier","ultimate-addons-for-gutenberg"),value:C,onChange:e=>a({identifier:e})}),r.a.createElement(v.SelectControl,{label:Object(l.__)("Identifier Type","ultimate-addons-for-gutenberg"),value:E,options:["nsn","mpn","gtin8","gtin12","gtin13","gtin14","gtin"].map(e=>({label:e.toUpperCase(),value:e})),onChange:e=>a({identifierType:e})})),["Product","SoftwareApplication"].includes(T)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("Offer Currency","ultimate-addons-for-gutenberg"),value:H,onChange:e=>a({offerCurrency:e})})),"Offer"===F&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("Offer Price","ultimate-addons-for-gutenberg"),value:P,onChange:e=>a({offerPrice:e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),r.a.createElement(v.SelectControl,{label:Object(l.__)("Offer Status"),value:k,options:[{value:"https://schema.org/Discontinued",label:Object(l.__)("Discontinued","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStock",label:Object(l.__)("In Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStoreOnly",label:Object(l.__)("In Store Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/LimitedAvailability",label:Object(l.__)("Limited Availability","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OnlineOnly",label:Object(l.__)("Online Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OutOfStock",label:Object(l.__)("Out Of Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreOrder",label:Object(l.__)("Pre Order","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreSale",label:Object(l.__)("Pre Sale","ultimate-addons-for-gutenberg")},{value:"https://schema.org/SoldOut",label:Object(l.__)("Sold Out","ultimate-addons-for-gutenberg")}],onChange:t=>e.setAttributes({offerStatus:t})}),r.a.createElement("h2",null,Object(l.__)("Price Valid Until","ultimate-addons-for-gutenberg")),r.a.createElement(v.DateTimePicker,{className:"uagb-date-picker",currentDate:x,onChange:e=>a({offerExpiry:e}),is12Hour:!0}))))})()),r.a.createElement(d.b,d.a.style,r.a.createElement(_.a,{title:Object(l.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:G,onColorChange:e=>a({titleColor:e})}),r.a.createElement(n.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:a,loadGoogleFonts:{value:ae,label:"headLoadGoogleFonts"},fontFamily:{value:q,label:"headFontFamily"},fontWeight:{value:$,label:"headFontWeight"},fontStyle:{value:ut,label:"headFontStyle"},transform:{value:at,label:"headTransform"},decoration:{value:nt,label:"headDecoration"},fontSizeType:{value:J,label:"headFontSizeType"},fontSize:{value:K,label:"headFontSize"},fontSizeMobile:{value:X,label:"headFontSizeMobile"},fontSizeTablet:{value:Q,label:"headFontSizeTablet"},lineHeightType:{value:Y,label:"headLineHeightType"},lineHeight:{value:Z,label:"headLineHeight"},lineHeightMobile:{value:ee,label:"headLineHeightMobile"},lineHeightTablet:{value:te,label:"headLineHeightTablet"}})),Ue&&r.a.createElement(_.a,{title:Object(l.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},!0===Ue&&r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:W,onColorChange:e=>a({descColor:e})}),r.a.createElement(n.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:a,loadGoogleFonts:{value:be,label:"subHeadLoadGoogleFonts"},fontFamily:{value:ne,label:"subHeadFontFamily"},fontWeight:{value:oe,label:"subHeadFontWeight"},fontStyle:{value:st,label:"subHeadFontStyle"},transform:{value:ot,label:"subHeadTransform"},decoration:{value:lt,label:"subHeadDecoration"},fontSizeType:{value:ie,label:"subHeadFontSizeType"},fontSize:{value:le,label:"subHeadFontSize"},fontSizeMobile:{value:re,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ue,label:"subHeadFontSizeTablet"},lineHeightType:{value:ce,label:"subHeadLineHeightType"},lineHeight:{value:se,label:"subHeadLineHeight"},lineHeightMobile:{value:ge,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:de,label:"subHeadLineHeightTablet"}}))),!0===B&&r.a.createElement(_.a,{title:Object(l.__)("Author","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Be,onColorChange:e=>a({authorColor:e})}))),!0===D&&r.a.createElement(_.a,{title:Object(l.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:U,onColorChange:e=>a({contentColor:e})}))),r.a.createElement(_.a,{title:Object(l.__)("Summary","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ve,onColorChange:e=>a({summaryColor:e})}),r.a.createElement(n.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:a,loadGoogleFonts:{value:fe,label:"contentLoadGoogleFonts"},fontFamily:{value:he,label:"contentFontFamily"},fontWeight:{value:me,label:"contentFontWeight"},fontStyle:{value:ct,label:"contentFontStyle"},transform:{value:it,label:"contentTransform"},decoration:{value:rt,label:"contentDecoration"},fontSizeType:{value:pe,label:"contentFontSizeType"},fontSize:{value:_e,label:"contentFontSize"},fontSizeMobile:{value:Oe,label:"contentFontSizeMobile"},fontSizeTablet:{value:ye,label:"contentFontSizeTablet"},lineHeightType:{value:ve,label:"contentLineHeightType"},lineHeight:{value:je,label:"contentLineHeight"},lineHeightMobile:{value:we,label:"contentLineHeightMobile"},lineHeightTablet:{value:Te,label:"contentLineHeightTablet"}})),r.a.createElement(_.a,{title:Object(l.__)("Star","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(c.a,{label:Object(l.__)("Active Color","ultimate-addons-for-gutenberg"),colorValue:V,onColorChange:e=>a({starColor:e})}),r.a.createElement(c.a,{label:Object(l.__)("Inactive Color","ultimate-addons-for-gutenberg"),colorValue:We,onColorChange:e=>a({starActiveColor:e})}),r.a.createElement(c.a,{label:Object(l.__)("Outline Color","ultimate-addons-for-gutenberg"),colorValue:Ge,onColorChange:e=>a({starOutlineColor:e})})),r.a.createElement(_.a,{title:Object(l.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(f.a,y({},e,{label:Object(l.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Se,label:"topPadding"},valueRight:{value:Ee,label:"rightPadding"},valueBottom:{value:Ce,label:"bottomPadding"},valueLeft:{value:Fe,label:"leftPadding"},valueTopTablet:{value:Ae,label:"paddingTopTablet"},valueRightTablet:{value:ze,label:"paddingRightTablet"},valueBottomTablet:{value:Le,label:"paddingBottomTablet"},valueLeftTablet:{value:Ie,label:"paddingLeftTablet"},valueTopMobile:{value:He,label:"paddingTopMobile"},valueRightMobile:{value:Pe,label:"paddingRightMobile"},valueBottomMobile:{value:ke,label:"paddingBottomMobile"},valueLeftMobile:{value:xe,label:"paddingLeftMobile"},unit:{value:Ne,label:"paddingUnit"},mUnit:{value:Re,label:"mobilePaddingUnit"},tUnit:{value:De,label:"tabletPaddingUnit"},attributes:t,setAttributes:a,link:{value:Me,label:"spacingLink"}})))),r.a.createElement(d.b,y({},d.a.advance,{parentProps:e})))),dt,bt,gt)};t.default=r.a.memo(T)}}]);