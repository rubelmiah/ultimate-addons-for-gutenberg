(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[60],{199:function(e,t,a){"use strict";var n,i,o=a(36),l=a.n(o),r=a(200),s=a.n(r),u=a(2);if(void 0===c)var c=[];const h=e=>{const[t,a]=Object(u.useState)([]);Object(u.useEffect)(()=>{l()},[]),Object(u.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&l()},[e]);const n=()=>{a({status:"loading"})},i=()=>{a({status:"active"})},o=()=>{a({status:"inactive"})},l=()=>{var t;c.includes(e.config.google.families[0])||(s.a.load({...e.config,loading:n,active:i,inactive:o}),t=e.config.google.families[0],c.includes(t)||c.push(t))},{children:r}=e;return r||null};h.propTypes={config:null===(n=l.a.object)||void 0===n?void 0:n.isRequired,children:l.a.element,onStatus:null===(i=l.a.func)||void 0===i?void 0:i.isRequired},h.defaultProps={onStatus:()=>{}},t.a=h},200:function(e,t,a){var n;!function(){function i(e,t,a){return e.call.apply(e.bind,arguments)}function o(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function l(e,t,a){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function c(e,t,a,n){if(t=e.c.createElement(t),a)for(var i in a)a.hasOwnProperty(i)&&("style"==i?t.style.cssText=a[i]:t.setAttribute(i,a[i]));return n&&t.appendChild(e.c.createTextNode(n)),t}function h(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function f(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var o=!1,l=0;l<n.length;l+=1)if(t[i]===n[l]){o=!0;break}o||n.push(t[i])}for(t=[],i=0;i<n.length;i+=1){for(o=!1,l=0;l<a.length;l+=1)if(n[i]===a[l]){o=!0;break}o||t.push(n[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(e,t){for(var a=e.className.split(/\s+/),n=0,i=a.length;n<i;n++)if(a[n]==t)return!0;return!1}function b(e,t,a){function n(){r&&i&&o&&(r(l),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,o=!0,l=null,r=a||null;u?(t.onload=function(){i=!0,n()},t.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),n()}):setTimeout((function(){i=!0,n()}),0),h(e,"head",t)}function m(e,t,a,n){var i=e.c.getElementsByTagName("head")[0];if(i){var o=c(e,"script",{src:t}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,a&&a(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout((function(){l||(l=!0,a&&a(Error("Script load timeout")))}),n||5e3),o}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function j(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function T(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function O(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function H(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function E(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=d(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),f(e.f,a,n)}C(e,"inactive")}function C(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,O(a)):e.h[t]())}function x(){this.c={}}function k(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function z(e){h(e.c,"body",e.a)}function I(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function L(e,t,a,n,i,o){this.g=e,this.j=t,this.a=n,this.c=a,this.f=i||3e3,this.h=o||void 0}function M(e,t,a,n,i,o,l){this.v=e,this.B=t,this.c=a,this.a=n,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new k(this.c,this.s),this.h=new k(this.c,this.s),this.j=new k(this.c,this.s),this.m=new k(this.c,this.s),e=I(e=new j(this.a.c+",serif",O(this.a))),this.g.a.style.cssText=e,e=I(e=new j(this.a.c+",sans-serif",O(this.a))),this.h.a.style.cssText=e,e=I(e=new j("serif",O(this.a))),this.j.a.style.cssText=e,e=I(e=new j("sans-serif",O(this.a))),this.m.a.style.cssText=e,z(this.g),z(this.h),z(this.j),z(this.m)}w.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},L.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,i){!function o(){r()-a>=t.f?i():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+T(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(o,25)}),(function(){i()}))}()})),i=null,o=new Promise((function(e,a){i=setTimeout(a,t.f)}));Promise.race([o,n]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var A={D:"serif",C:"sans-serif"},N=null;function W(){if(null===N){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return N}function G(e,t,a){for(var n in A)if(A.hasOwnProperty(n)&&t===e.f[A[n]]&&a===e.f[A[n]])return!0;return!1}function D(e,t){setTimeout(l((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),t(this.a)}),e),0)}function P(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}M.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(a=n===t.f.serif&&i===t.f["sans-serif"])||(a=W()&&G(t,n,i)),a?r()-t.A>=t.w?W()&&G(t,n,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?D(t,t.v):D(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):D(t,t.v)}(this)};var U=null;function B(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&f(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),C(e,"active")):F(e.a))}function R(e){this.j=e,this.a=new x,this.h=0,this.f=this.g=!0}function V(e,t,a,n,i){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,r=n||{};if(0===a.length&&o)F(t.a);else{t.f+=a.length,o&&(t.j=o);var s,u=[];for(s=0;s<a.length;s++){var c=a[s],h=r[c.c],g=t.a,d=c;if(g.g&&f(g.f,[g.a.c("wf",d.c,O(d).toString(),"loading")]),C(g,"fontloading",d),g=null,null===U)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var b=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);U=d?42<parseInt(d[1],10):!b}else U=!1;g=U?new L(l(t.g,t),l(t.h,t),t.c,c,t.s,h):new M(l(t.g,t),l(t.h,t),t.c,c,t.s,e,h),u.push(g)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function Y(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}P.prototype.g=function(e){var t=this.a;t.g&&f(t.f,[t.a.c("wf",e.c,O(e).toString(),"active")],[t.a.c("wf",e.c,O(e).toString(),"loading"),t.a.c("wf",e.c,O(e).toString(),"inactive")]),C(t,"fontactive",e),this.m=!0,B(this)},P.prototype.h=function(e){var t=this.a;if(t.g){var a=d(t.f,t.a.c("wf",e.c,O(e).toString(),"active")),n=[],i=[t.a.c("wf",e.c,O(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,O(e).toString(),"inactive")),f(t.f,n,i)}C(t,"fontinactive",e),B(this)},R.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],i=a.timeout;!function(e){e.g&&f(e.f,[e.a.c("wf","loading")]),C(e,"loading")}(t),n=function(e,t,a){var n,i=[];for(n in t)if(t.hasOwnProperty(n)){var o=e.c[n];o&&i.push(o(t[n],a))}return i}(e.a,a,e.c);var o=new P(e.c,t,i);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){V(e,o,t,a,n)}))}(this,new E(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var i=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(i["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(i["__mti_fntLst"+a]){var n,o=i["__mti_fntLst"+a](),l=[];if(o)for(var r=0;r<o.length;r++){var s=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(n=o[r].fontStyle+o[r].fontWeight,l.push(new j(s,n))):l.push(new j(s))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,n=this.a.urls||[],i=this.a.families||[],o=this.a.testStrings||{},l=new p;for(t=0,a=n.length;t<a;t++)b(this.c,n[t],v(l));var r=[];for(t=0,a=i.length;t<a;t++)if((n=i[t].split(":"))[1])for(var s=n[1].split(","),u=0;u<s.length;u+=1)r.push(new j(n[0],s[u]));else r.push(new j(n[0]));_(l,(function(){e(r,o)}))};var J="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,n=new Y(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var i=t[n].split(":");3==i.length&&e.f.push(i.pop());var o="";2==i.length&&""!=i[1]&&(o=":"),e.a.push(i.join(o))}}(n,i);var o=new K(i);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),i=n[0].replace(/\+/g," "),o=["n4"];if(2<=n.length){var l;if(l=[],r=n[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var c;if((c=r[u]).match(/^[\w-]+$/))if(null==(h=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=h[2])||""==c?"n":Z[c],null==(h=h[1])||""==h)h="4";else var h=Q[h]||(isNaN(h)?"4":h.substr(0,1));c=[c,h].join("")}else c="";c&&l.push(c)}0<l.length&&(o=l),3==n.length&&(l=[],0<(n=(n=n[2])?n.split(","):l).length&&(n=X[n[0]])&&(e.c[i]=n))}for(e.c[i]||(n=X[i])&&(e.c[i]=n),n=0;n<o.length;n+=1)e.a.push(new j(i,o[n]))}}(o),b(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),_(t,(function(){e(o.a,o.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],i=0;i<t.length;i+=2)for(var o=t[i],l=t[i+1],r=0;r<l.length;r++)n.push(new j(o,l[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var i=0,o=a.fonts.length;i<o;++i){var l=a.fonts[i];n.a.push(new j(l.name,H("font-weight:"+l.weight+";font-style:"+l.style)))}e(n.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new R(window);oe.a.c.custom=function(e,t){return new $(t,e)},oe.a.c.fontdeck=function(e,t){return new ie(t,e)},oe.a.c.monotype=function(e,t){return new q(t,e)},oe.a.c.typekit=function(e,t){return new ne(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var le={load:l(oe.load,oe)};void 0===(n=function(){return le}.call(t,a,t,e))||(e.exports=n)}()},201:function(e,t,a){"use strict";var n,i=a(1),o=a(6),l=a(4),r=a(0),s=a.n(r),u=a(13),c=a.n(u),h=a(202),g=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=h.a.locals||{},d.use=function(){return g++||(n=c()(h.a,f)),d},d.unuse=function(){g>0&&!--g&&(n(),n=null)};var b=d;t.a=e=>{Object(r.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]);const{onSelectImage:t,backgroundImage:a,onRemoveImage:n,showVideoInput:u,label:c}=e;let h=Object(i.__)("Image","ultimate-addons-for-gutenberg"),g=Object(i.__)("Select Image","ultimate-addons-for-gutenberg"),f=Object(i.__)("Replace Image","ultimate-addons-for-gutenberg"),d=Object(i.__)("Remove Image","ultimate-addons-for-gutenberg"),m=["image"];return u&&(h=Object(i.__)("Video","ultimate-addons-for-gutenberg"),g=Object(i.__)("Select Video","ultimate-addons-for-gutenberg"),f=Object(i.__)("Replace Video","ultimate-addons-for-gutenberg"),d=Object(i.__)("Remove Video","ultimate-addons-for-gutenberg"),m=["video"]),h=c||h,h=!1===c?c:h,s.a.createElement(o.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+c,label:h},s.a.createElement("div",{className:"uagb-bg-image"},s.a.createElement(l.MediaUpload,{title:g,onSelect:t,allowedTypes:m,value:a,render:e=>{let{open:t}=e;return s.a.createElement(o.Button,{isSecondary:!0,onClick:t},null!=a&&a.url?f:g)}}),(null==a?void 0:a.url)&&s.a.createElement(o.Button,{className:"uagb-rm-btn",onClick:n,isLink:!0,isDestructive:!0},d),e.help&&s.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},202:function(e,t,a){"use strict";var n=a(14),i=a.n(n)()((function(e){return e[1]}));i.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),t.a=i},212:function(e,t,a){"use strict";function n(e){const t=[];for(const a in e)if(e.hasOwnProperty(a)){const e={value:a,label:a};t.push(e)}return t}a.d(t,"a",(function(){return n}))},486:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(8),l=a(199),r=a(31),s=(a(125),a(1)),u=a(4),c=a(16),h=a(79),g=a(24),f=a(18),d=a(201),b=a(212),m=a(11),p=a(6),v=a(19),_=a(21),y=a(15);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let j=[{value:"thumbnail",label:Object(s.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(s.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(s.__)("Large","ultimate-addons-for-gutenberg")}];const T=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,attributes:{overallAlignment:T,showEstcost:O,showTotaltime:S,showMaterials:H,showTools:E,showTotaltimecolor:F,tools_count:C,material_count:x,tools:k,materials:z,mainimage:I,imgSize:L,headingColor:M,subHeadingColor:A,headingTag:N,headFontFamily:W,headFontWeight:G,headFontSizeType:D,headFontSize:P,headFontSizeMobile:U,headFontSizeTablet:B,headLineHeightType:R,headLineHeight:V,headLineHeightMobile:q,headLineHeightTablet:$,subHeadFontFamily:Y,subHeadFontWeight:J,subHeadFontSize:K,subHeadFontSizeType:X,subHeadFontSizeMobile:Q,subHeadFontSizeTablet:Z,subHeadLineHeight:ee,subHeadLineHeightType:te,subHeadLineHeightMobile:ae,subHeadLineHeightTablet:ne,headLoadGoogleFonts:ie,subHeadLoadGoogleFonts:oe,priceFontSizeType:le,priceFontSize:re,priceFontSizeTablet:se,priceFontSizeMobile:ue,priceFontFamily:ce,priceFontWeight:he,priceLineHeightType:ge,priceLineHeight:fe,priceLineHeightTablet:de,priceLineHeightMobile:be,priceLoadGoogleFonts:me,timeSpace:pe,costSpace:ve,row_gap:_e,rowGapTablet:ye,rowGapMobile:we,step_gap:je,timeInHours:Te,timeInDays:Oe,timeInMonths:Se,timeInYears:He,timeInMins:Ee,time:Fe,priceFontStyle:Ce,priceTransform:xe,priceDecoration:ke,headFontStyle:ze,headTransform:Ie,headDecoration:Le,subHeadFontStyle:Me,subHeadTransform:Ae,subHeadDecoration:Ne}}=e;I&&I.sizes&&(j=Object(b.a)(I.sizes));const We=Ee||Fe;let Ge,De,Pe;if(!0===ie){const e={google:{families:[W+(G?":"+G:"")]}};Ge=i.a.createElement(l.a,{config:e})}if(!0===oe){const e={google:{families:[Y+(J?":"+J:"")]}};De=i.a.createElement(l.a,{config:e})}if(!0===me){const e={google:{families:[ce+(he?":"+he:"")]}};Pe=i.a.createElement(l.a,{config:e})}return i.a.createElement(n.Suspense,{fallback:Object(o.a)()},i.a.createElement(u.BlockControls,{key:"index"},i.a.createElement(u.AlignmentToolbar,{value:T,onChange:e=>a({overallAlignment:e})})),i.a.createElement(u.InspectorControls,null,i.a.createElement(h.a,null,i.a.createElement(g.b,g.a.general,i.a.createElement(y.a,{title:Object(s.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(v.a,{setAttributes:a,label:Object(s.__)("Tag","ultimate-addons-for-gutenberg"),data:{value:N,label:"headingTag"},options:[{value:"h1",label:Object(s.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(s.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(s.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(s.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(s.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(s.__)("H6","ultimate-addons-for-gutenberg")}]}),i.a.createElement(v.a,{setAttributes:a,label:Object(s.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:T,label:"overallAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(p.Icon,{icon:Object(m.a)("fa fa-align-left")}),tooltip:Object(s.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(p.Icon,{icon:Object(m.a)("fa fa-align-center")}),tooltip:Object(s.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(p.Icon,{icon:Object(m.a)("fa fa-align-right")}),tooltip:Object(s.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),i.a.createElement(y.a,{title:Object(s.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{onSelectImage:e=>{e&&e.url&&e.type&&"image"===e.type?a({mainimage:e}):a({mainimage:null})},backgroundImage:I,onRemoveImage:()=>{a({mainimage:""})}}),I&&"null"!==I.url&&""!==I.url&&i.a.createElement(p.SelectControl,{label:Object(s.__)("Image Size","ultimate-addons-for-gutenberg"),options:j,value:L,onChange:e=>a({imgSize:e})})),i.a.createElement(y.a,{title:Object(s.__)("Time","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Total Time","ultimate-addons-for-gutenberg"),checked:S,onChange:()=>a({showTotaltime:!S}),help:Object(s.__)("Note: Time is recommended field for schema. It should be ON","ultimate-addons-for-gutenberg")}),S&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{label:Object(s.__)("Years","ultimate-addons-for-gutenberg"),setAttributes:a,value:He,onChange:e=>a({timeInYears:e}),min:1,max:10,displayUnit:!1}),i.a.createElement(f.a,{label:Object(s.__)("Months","ultimate-addons-for-gutenberg"),setAttributes:a,value:Se,onChange:e=>a({timeInMonths:e}),min:1,max:12,displayUnit:!1}),i.a.createElement(f.a,{label:Object(s.__)("Days","ultimate-addons-for-gutenberg"),setAttributes:a,value:Oe,onChange:e=>a({timeInDays:e}),min:1,max:31,displayUnit:!1}),i.a.createElement(f.a,{label:Object(s.__)("Hours","ultimate-addons-for-gutenberg"),setAttributes:a,value:Te,onChange:e=>a({timeInHours:e}),min:1,max:24,displayUnit:!1}),i.a.createElement(f.a,{label:Object(s.__)("Minutes","ultimate-addons-for-gutenberg"),setAttributes:a,value:We,onChange:e=>a({timeInMins:e}),min:1,max:60,displayUnit:!1}))),i.a.createElement(y.a,{title:Object(s.__)("Cost","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Estimated Cost","ultimate-addons-for-gutenberg"),checked:O,onChange:()=>a({showEstcost:!O}),help:Object(s.__)("Note: Cost is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),i.a.createElement(p.ExternalLink,{href:"https://en.wikipedia.org/wiki/List_of_circulating_currencies"},Object(s.__)("Click here to find your countrys ISO code.","ultimate-addons-for-gutenberg"))),i.a.createElement(y.a,{title:Object(s.__)("Tools","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Tools","ultimate-addons-for-gutenberg"),checked:E,onChange:()=>a({showTools:!E}),help:Object(s.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),E&&i.a.createElement(f.a,{label:Object(s.__)("Number of Tools","ultimate-addons-for-gutenberg"),setAttributes:a,value:C,onChange:e=>{const t=[...k];if(t.length<e){const n=Math.abs(e-t.length);for(let e=0;e<n;e++)t.push({add_required_tools:"- A Computer"+(t.length+1)});a({tools:t})}else{const n=Math.abs(e-t.length),i=t;for(let e=0;e<n;e++)i.pop();a({tools:i})}a({tools_count:e})},min:1,max:50,displayUnit:!1})),i.a.createElement(y.a,{title:Object(s.__)("Materials","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Materials","ultimate-addons-for-gutenberg"),checked:H,onChange:()=>a({showMaterials:!H}),help:Object(s.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),H&&i.a.createElement(f.a,{label:Object(s.__)("Number of Materials","ultimate-addons-for-gutenberg"),setAttributes:a,value:x,onChange:e=>{const t=[...z];if(t.length<e){const n=Math.abs(e-t.length);for(let e=0;e<n;e++)t.push({add_required_materials:"- A WordPress Website"+(t.length+1)});a({materials:t})}else{const n=Math.abs(e-t.length),i=t;for(let e=0;e<n;e++)i.pop();a({materials:i})}a({material_count:e})},min:1,max:50,displayUnit:!1}))),i.a.createElement(g.b,g.a.style,i.a.createElement(y.a,{title:Object(s.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(c.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:e=>a({headingColor:e})}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:ie,label:"headLoadGoogleFonts"},fontFamily:{value:W,label:"headFontFamily"},fontWeight:{value:G,label:"headFontWeight"},fontStyle:{value:ze,label:"headFontStyle"},transform:{value:Ie,label:"headTransform"},decoration:{value:Le,label:"headDecoration"},fontSizeType:{value:D,label:"headFontSizeType"},fontSize:{value:P,label:"headFontSize"},fontSizeMobile:{value:U,label:"headFontSizeMobile"},fontSizeTablet:{value:B,label:"headFontSizeTablet"},lineHeightType:{value:R,label:"headLineHeightType"},lineHeight:{value:V,label:"headLineHeight"},lineHeightMobile:{value:q,label:"headLineHeightMobile"},lineHeightTablet:{value:$,label:"headLineHeightTablet"}})),i.a.createElement(y.a,{title:Object(s.__)("Secondary Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(c.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:F||"",onColorChange:e=>a({showTotaltimecolor:e})}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:me,label:"priceLoadGoogleFonts"},fontFamily:{value:ce,label:"priceFontFamily"},fontWeight:{value:he,label:"priceFontWeight"},fontStyle:{value:Ce,label:"priceFontStyle"},transform:{value:xe,label:"priceTransform"},decoration:{value:ke,label:"priceDecoration"},fontSizeType:{value:le,label:"priceFontSizeType"},fontSize:{value:re,label:"priceFontSize"},fontSizeMobile:{value:ue,label:"priceFontSizeMobile"},fontSizeTablet:{value:se,label:"priceFontSizeTablet"},lineHeightType:{value:ge,label:"priceLineHeightType"},lineHeight:{value:fe,label:"priceLineHeight"},lineHeightMobile:{value:be,label:"priceLineHeightMobile"},lineHeightTablet:{value:de,label:"priceLineHeightTablet"}})),i.a.createElement(y.a,{title:Object(s.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(c.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:A||"",onColorChange:e=>a({subHeadingColor:e})}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:oe,label:"subHeadLoadGoogleFonts"},fontFamily:{value:Y,label:"subHeadFontFamily"},fontWeight:{value:J,label:"subHeadFontWeight"},fontStyle:{value:Me,label:"subHeadFontStyle"},transform:{value:Ae,label:"subHeadTransform"},decoration:{value:Ne,label:"subHeadDecoration"},fontSizeType:{value:X,label:"subHeadFontSizeType"},fontSize:{value:K,label:"subHeadFontSize"},fontSizeMobile:{value:Q,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:Z,label:"subHeadFontSizeTablet"},lineHeightType:{value:te,label:"subHeadLineHeightType"},lineHeight:{value:ee,label:"subHeadLineHeight"},lineHeightMobile:{value:ae,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:ne,label:"subHeadLineHeightTablet"}})),i.a.createElement(y.a,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},S&&i.a.createElement(f.a,{label:Object(s.__)("Time Margin","ultimate-addons-for-gutenberg"),setAttributes:a,value:pe,onChange:e=>a({timeSpace:e}),min:0,max:50,displayUnit:!1}),O&&i.a.createElement(f.a,{label:Object(s.__)("Cost Margin","ultimate-addons-for-gutenberg"),setAttributes:a,value:ve,onChange:e=>a({costSpace:e}),min:0,max:50,displayUnit:!1}),i.a.createElement(_.a,{label:Object(s.__)("Row Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:_e,label:"row_gap"},tablet:{value:ye,label:"rowGapTablet"},mobile:{value:we,label:"rowGapMobile"}},min:0,max:200,displayUnit:!1,setAttributes:a}),i.a.createElement(f.a,{label:Object(s.__)("Gap Between Steps","ultimate-addons-for-gutenberg"),setAttributes:a,value:je,onChange:e=>a({step_gap:e}),min:0,max:200,displayUnit:!1}))),i.a.createElement(g.b,w({},g.a.advance,{parentProps:e})))),Ge,De,Pe)};t.default=i.a.memo(T)}}]);