(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[60],{190:function(e,t,n){"use strict";var a,i,o=n(35),l=n.n(o),r=n(191),s=n.n(r),u=n(2);if(void 0===c)var c=[];const h=e=>{const[t,n]=Object(u.useState)([]);Object(u.useEffect)(()=>{l()},[]),Object(u.useEffect)(()=>{const{onStatus:n,config:a}=e;void 0!==t.status&&n(t.status),a!==t.config&&l()},[e]);const a=()=>{n({status:"loading"})},i=()=>{n({status:"active"})},o=()=>{n({status:"inactive"})},l=()=>{var t;c.includes(e.config.google.families[0])||(s.a.load({...e.config,loading:a,active:i,inactive:o}),t=e.config.google.families[0],c.includes(t)||c.push(t))},{children:r}=e;return r||null};h.propTypes={config:null===(a=l.a.object)||void 0===a?void 0:a.isRequired,children:l.a.element,onStatus:null===(i=l.a.func)||void 0===i?void 0:i.isRequired},h.defaultProps={onStatus:()=>{}},t.a=h},191:function(e,t,n){var a;!function(){function i(e,t,n){return e.call.apply(e.bind,arguments)}function o(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function c(e,t,n,a){if(t=e.c.createElement(t),n)for(var i in n)n.hasOwnProperty(i)&&("style"==i?t.style.cssText=n[i]:t.setAttribute(i,n[i]));return a&&t.appendChild(e.c.createTextNode(a)),t}function h(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function g(e){e.parentNode&&e.parentNode.removeChild(e)}function f(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var o=!1,l=0;l<a.length;l+=1)if(t[i]===a[l]){o=!0;break}o||a.push(t[i])}for(t=[],i=0;i<a.length;i+=1){for(o=!1,l=0;l<n.length;l+=1)if(a[i]===n[l]){o=!0;break}o||t.push(a[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(e,t){for(var n=e.className.split(/\s+/),a=0,i=n.length;a<i;a++)if(n[a]==t)return!0;return!1}function b(e,t,n){function a(){r&&i&&o&&(r(l),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,o=!0,l=null,r=n||null;u?(t.onload=function(){i=!0,a()},t.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){i=!0,a()}),0),h(e,"head",t)}function m(e,t,n,a){var i=e.c.getElementsByTagName("head")[0];if(i){var o=c(e,"script",{src:t}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),o}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function w(e){this.a=e||"-"}function j(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function T(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function O(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function H(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function E(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new w("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=d(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),f(e.f,n,a)}C(e,"inactive")}function C(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,O(n)):e.h[t]())}function x(){this.c={}}function k(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function z(e){h(e.c,"body",e.a)}function I(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function L(e,t,n,a,i,o){this.g=e,this.j=t,this.a=a,this.c=n,this.f=i||3e3,this.h=o||void 0}function M(e,t,n,a,i,o,l){this.v=e,this.B=t,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new k(this.c,this.s),this.h=new k(this.c,this.s),this.j=new k(this.c,this.s),this.m=new k(this.c,this.s),e=I(e=new j(this.a.c+",serif",O(this.a))),this.g.a.style.cssText=e,e=I(e=new j(this.a.c+",sans-serif",O(this.a))),this.h.a.style.cssText=e,e=I(e=new j("serif",O(this.a))),this.j.a.style.cssText=e,e=I(e=new j("sans-serif",O(this.a))),this.m.a.style.cssText=e,z(this.g),z(this.h),z(this.j),z(this.m)}w.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},L.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),a=new Promise((function(a,i){!function o(){r()-n>=t.f?i():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+T(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(o,25)}),(function(){i()}))}()})),i=null,o=new Promise((function(e,n){i=setTimeout(n,t.f)}));Promise.race([o,a]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var A={D:"serif",C:"sans-serif"},N=null;function W(){if(null===N){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return N}function D(e,t,n){for(var a in A)if(A.hasOwnProperty(a)&&t===e.f[A[a]]&&n===e.f[A[a]])return!0;return!1}function P(e,t){setTimeout(l((function(){g(this.g.a),g(this.h.a),g(this.j.a),g(this.m.a),t(this.a)}),e),0)}function U(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}M.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,a=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(n=a===t.f.serif&&i===t.f["sans-serif"])||(n=W()&&D(t,a,i)),n?r()-t.A>=t.w?W()&&D(t,a,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?P(t,t.v):P(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):P(t,t.v)}(this)};var B=null;function G(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&f(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),C(e,"active")):F(e.a))}function R(e){this.j=e,this.a=new x,this.h=0,this.f=this.g=!0}function V(e,t,n,a,i){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,r=a||{};if(0===n.length&&o)F(t.a);else{t.f+=n.length,o&&(t.j=o);var s,u=[];for(s=0;s<n.length;s++){var c=n[s],h=r[c.c],g=t.a,d=c;if(g.g&&f(g.f,[g.a.c("wf",d.c,O(d).toString(),"loading")]),C(g,"fontloading",d),g=null,null===B)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var b=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);B=d?42<parseInt(d[1],10):!b}else B=!1;g=B?new L(l(t.g,t),l(t.h,t),t.c,c,t.s,h):new M(l(t.g,t),l(t.h,t),t.c,c,t.s,e,h),u.push(g)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function Y(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}U.prototype.g=function(e){var t=this.a;t.g&&f(t.f,[t.a.c("wf",e.c,O(e).toString(),"active")],[t.a.c("wf",e.c,O(e).toString(),"loading"),t.a.c("wf",e.c,O(e).toString(),"inactive")]),C(t,"fontactive",e),this.m=!0,G(this)},U.prototype.h=function(e){var t=this.a;if(t.g){var n=d(t.f,t.a.c("wf",e.c,O(e).toString(),"active")),a=[],i=[t.a.c("wf",e.c,O(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,O(e).toString(),"inactive")),f(t.f,a,i)}C(t,"fontinactive",e),G(this)},R.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],i=n.timeout;!function(e){e.g&&f(e.f,[e.a.c("wf","loading")]),C(e,"loading")}(t),a=function(e,t,n){var a,i=[];for(a in t)if(t.hasOwnProperty(a)){var o=e.c[a];o&&i.push(o(t[a],n))}return i}(e.a,n,e.c);var o=new U(e.c,t,i);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){V(e,o,t,n,a)}))}(this,new E(this.c,e),e)},q.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var i=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(i["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(i["__mti_fntLst"+n]){var a,o=i["__mti_fntLst"+n](),l=[];if(o)for(var r=0;r<o.length;r++){var s=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(a=o[r].fontStyle+o[r].fontWeight,l.push(new j(s,a))):l.push(new j(s))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},$.prototype.load=function(e){var t,n,a=this.a.urls||[],i=this.a.families||[],o=this.a.testStrings||{},l=new p;for(t=0,n=a.length;t<n;t++)b(this.c,a[t],v(l));var r=[];for(t=0,n=i.length;t<n;t++)if((a=i[t].split(":"))[1])for(var s=a[1].split(","),u=0;u<s.length;u+=1)r.push(new j(a[0],s[u]));else r.push(new j(a[0]));_(l,(function(){e(r,o)}))};var J="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,n=this.c,a=new Y(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var i=t[a].split(":");3==i.length&&e.f.push(i.pop());var o="";2==i.length&&""!=i[1]&&(o=":"),e.a.push(i.join(o))}}(a,i);var o=new K(i);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),i=a[0].replace(/\+/g," "),o=["n4"];if(2<=a.length){var l;if(l=[],r=a[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var c;if((c=r[u]).match(/^[\w-]+$/))if(null==(h=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=h[2])||""==c?"n":Z[c],null==(h=h[1])||""==h)h="4";else var h=Q[h]||(isNaN(h)?"4":h.substr(0,1));c=[c,h].join("")}else c="";c&&l.push(c)}0<l.length&&(o=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=X[a[0]])&&(e.c[i]=a))}for(e.c[i]||(a=X[i])&&(e.c[i]=a),a=0;a<o.length;a+=1)e.a.push(new j(i,o[a]))}}(o),b(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),_(t,(function(){e(o.a,o.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],i=0;i<t.length;i+=2)for(var o=t[i],l=t[i+1],r=0;r<l.length;r++)a.push(new j(o,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var i=0,o=n.fonts.length;i<o;++i){var l=n.fonts[i];a.a.push(new j(l.name,H("font-weight:"+l.weight+";font-style:"+l.style)))}e(a.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new R(window);oe.a.c.custom=function(e,t){return new $(t,e)},oe.a.c.fontdeck=function(e,t){return new ie(t,e)},oe.a.c.monotype=function(e,t){return new q(t,e)},oe.a.c.typekit=function(e,t){return new ae(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var le={load:l(oe.load,oe)};void 0===(a=function(){return le}.call(t,n,t,e))||(e.exports=a)}()},192:function(e,t,n){"use strict";var a,i=n(1),o=n(6),l=n(4),r=n(0),s=n.n(r),u=n(15),c=n.n(u),h=n(193),g=0,f={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},d={};d.locals=h.a.locals||{},d.use=function(){return g++||(a=c()(h.a,f)),d},d.unuse=function(){g>0&&!--g&&(a(),a=null)};var b=d;t.a=e=>{Object(r.useLayoutEffect)(()=>(b.use(),()=>{b.unuse()}),[]);const{onSelectImage:t,backgroundImage:n,onRemoveImage:a,showVideoInput:u,label:c}=e;let h=Object(i.__)("Image","ultimate-addons-for-gutenberg"),g=Object(i.__)("Select Image","ultimate-addons-for-gutenberg"),f=Object(i.__)("Replace Image","ultimate-addons-for-gutenberg"),d=Object(i.__)("Remove Image","ultimate-addons-for-gutenberg"),m=["image"];return u&&(h=Object(i.__)("Video","ultimate-addons-for-gutenberg"),g=Object(i.__)("Select Video","ultimate-addons-for-gutenberg"),f=Object(i.__)("Replace Video","ultimate-addons-for-gutenberg"),d=Object(i.__)("Remove Video","ultimate-addons-for-gutenberg"),m=["video"]),h=c||h,s.a.createElement(o.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+c,label:h},s.a.createElement("div",{className:"uagb-bg-image"},s.a.createElement(l.MediaUpload,{title:g,onSelect:t,allowedTypes:m,value:n,render:e=>{let{open:t}=e;return s.a.createElement(o.Button,{isSecondary:!0,onClick:t},null!=n&&n.url?f:g)}}),(null==n?void 0:n.url)&&s.a.createElement(o.Button,{className:"uagb-rm-btn",onClick:a,isLink:!0,isDestructive:!0},d),e.help&&s.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},193:function(e,t,n){"use strict";var a=n(16),i=n.n(a)()((function(e){return e[1]}));i.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),t.a=i},200:function(e,t,n){"use strict";function a(e){const t=[];for(const n in e)if(e.hasOwnProperty(n)){const e={value:n,label:n};t.push(e)}return t}n.d(t,"a",(function(){return a}))},470:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),l=n(190),r=n(31),s=(n(122),n(1)),u=n(4),c=n(14),h=n(80),g=n(24),f=n(18),d=n(192),b=n(200),m=n(11),p=n(6),v=n(19),_=n(13);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}let w=[{value:"thumbnail",label:Object(s.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(s.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(s.__)("Large","ultimate-addons-for-gutenberg")}];const j=e=>{e=e.parentProps;const{attributes:t,setAttributes:n,attributes:{overallAlignment:j,showEstcost:T,showTotaltime:O,showMaterials:S,showTools:H,showTotaltimecolor:E,tools_count:F,material_count:C,tools:x,materials:k,mainimage:z,imgSize:I,headingColor:L,subHeadingColor:M,headingTag:A,headFontFamily:N,headFontWeight:W,headFontSizeType:D,headFontSize:P,headFontSizeMobile:U,headFontSizeTablet:B,headLineHeightType:G,headLineHeight:R,headLineHeightMobile:V,headLineHeightTablet:q,subHeadFontFamily:$,subHeadFontWeight:Y,subHeadFontSize:J,subHeadFontSizeType:K,subHeadFontSizeMobile:X,subHeadFontSizeTablet:Q,subHeadLineHeight:Z,subHeadLineHeightType:ee,subHeadLineHeightMobile:te,subHeadLineHeightTablet:ne,headLoadGoogleFonts:ae,subHeadLoadGoogleFonts:ie,priceFontSizeType:oe,priceFontSize:le,priceFontSizeTablet:re,priceFontSizeMobile:se,priceFontFamily:ue,priceFontWeight:ce,priceLineHeightType:he,priceLineHeight:ge,priceLineHeightTablet:fe,priceLineHeightMobile:de,priceLoadGoogleFonts:be,timeSpace:me,costSpace:pe,row_gap:ve,step_gap:_e,timeInHours:ye,timeInDays:we,timeInMonths:je,timeInYears:Te,timeInMins:Oe,time:Se,priceFontStyle:He,priceTransform:Ee,priceDecoration:Fe,headFontStyle:Ce,headTransform:xe,headDecoration:ke,subHeadFontStyle:ze,subHeadTransform:Ie,subHeadDecoration:Le}}=e;z&&z.sizes&&(w=Object(b.a)(z.sizes));const Me=Oe||Se;let Ae,Ne,We;if(!0===ae){const e={google:{families:[N+(W?":"+W:"")]}};Ae=i.a.createElement(l.a,{config:e})}if(!0===ie){const e={google:{families:[$+(Y?":"+Y:"")]}};Ne=i.a.createElement(l.a,{config:e})}if(!0===be){const e={google:{families:[ue+(ce?":"+ce:"")]}};We=i.a.createElement(l.a,{config:e})}return i.a.createElement(a.Suspense,{fallback:Object(o.a)()},i.a.createElement(u.BlockControls,{key:"index"},i.a.createElement(u.AlignmentToolbar,{value:j,onChange:e=>n({overallAlignment:e})})),i.a.createElement(u.InspectorControls,null,i.a.createElement(h.a,null,i.a.createElement(g.b,g.a.general,i.a.createElement(_.a,{title:Object(s.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(v.a,{setAttributes:n,label:Object(s.__)("Tag","ultimate-addons-for-gutenberg"),data:{value:A,label:"headingTag"},options:[{value:"h1",label:Object(s.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(s.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(s.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(s.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(s.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(s.__)("H6","ultimate-addons-for-gutenberg")}]}),i.a.createElement(v.a,{setAttributes:n,label:Object(s.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:j,label:"overallAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(p.Icon,{icon:Object(m.a)("fa fa-align-left")}),tooltip:Object(s.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(p.Icon,{icon:Object(m.a)("fa fa-align-center")}),tooltip:Object(s.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(p.Icon,{icon:Object(m.a)("fa fa-align-right")}),tooltip:Object(s.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),i.a.createElement(_.a,{title:Object(s.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{onSelectImage:e=>{e&&e.url&&e.type&&"image"===e.type?n({mainimage:e}):n({mainimage:null})},backgroundImage:z,onRemoveImage:()=>{n({mainimage:""})}}),z&&"null"!==z.url&&""!==z.url&&i.a.createElement(p.SelectControl,{label:Object(s.__)("Image Size","ultimate-addons-for-gutenberg"),options:w,value:I,onChange:e=>n({imgSize:e})})),i.a.createElement(_.a,{title:Object(s.__)("Time","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Total Time","ultimate-addons-for-gutenberg"),checked:O,onChange:()=>n({showTotaltime:!O}),help:Object(s.__)("Note: Time is recommended field for schema. It should be ON","ultimate-addons-for-gutenberg")}),O&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{label:Object(s.__)("Years","ultimate-addons-for-gutenberg"),setAttributes:n,value:Te,onChange:e=>n({timeInYears:e}),min:1,max:10,displayUnit:!1}),i.a.createElement(f.a,{label:Object(s.__)("Months","ultimate-addons-for-gutenberg"),setAttributes:n,value:je,onChange:e=>n({timeInMonths:e}),min:1,max:12,displayUnit:!1}),i.a.createElement(f.a,{label:Object(s.__)("Days","ultimate-addons-for-gutenberg"),setAttributes:n,value:we,onChange:e=>n({timeInDays:e}),min:1,max:31,displayUnit:!1}),i.a.createElement(f.a,{label:Object(s.__)("Hours","ultimate-addons-for-gutenberg"),setAttributes:n,value:ye,onChange:e=>n({timeInHours:e}),min:1,max:24,displayUnit:!1}),i.a.createElement(f.a,{label:Object(s.__)("Minutes","ultimate-addons-for-gutenberg"),setAttributes:n,value:Me,onChange:e=>n({timeInMins:e}),min:1,max:60,displayUnit:!1}))),i.a.createElement(_.a,{title:Object(s.__)("Cost","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Estimated Cost","ultimate-addons-for-gutenberg"),checked:T,onChange:()=>n({showEstcost:!T}),help:Object(s.__)("Note: Cost is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),i.a.createElement(p.ExternalLink,{href:"https://en.wikipedia.org/wiki/List_of_circulating_currencies"},Object(s.__)("Click here to find your countrys ISO code.","ultimate-addons-for-gutenberg"))),i.a.createElement(_.a,{title:Object(s.__)("Tools","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Tools","ultimate-addons-for-gutenberg"),checked:H,onChange:()=>n({showTools:!H}),help:Object(s.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),H&&i.a.createElement(f.a,{label:Object(s.__)("Number of Tools","ultimate-addons-for-gutenberg"),setAttributes:n,value:F,onChange:e=>{const t=[...x];if(t.length<e){const a=Math.abs(e-t.length);for(let e=0;e<a;e++)t.push({add_required_tools:"- A Computer"+(t.length+1)});n({tools:t})}else{const a=Math.abs(e-t.length),i=t;for(let e=0;e<a;e++)i.pop();n({tools:i})}n({tools_count:e})},min:1,max:50,displayUnit:!1})),i.a.createElement(_.a,{title:Object(s.__)("Materials","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(p.ToggleControl,{label:Object(s.__)("Show Materials","ultimate-addons-for-gutenberg"),checked:S,onChange:()=>n({showMaterials:!S}),help:Object(s.__)("Note: This is recommended field for schema.It should be ON","ultimate-addons-for-gutenberg")}),S&&i.a.createElement(f.a,{label:Object(s.__)("Number of Materials","ultimate-addons-for-gutenberg"),setAttributes:n,value:C,onChange:e=>{const t=[...k];if(t.length<e){const a=Math.abs(e-t.length);for(let e=0;e<a;e++)t.push({add_required_materials:"- A WordPress Website"+(t.length+1)});n({materials:t})}else{const a=Math.abs(e-t.length),i=t;for(let e=0;e<a;e++)i.pop();n({materials:i})}n({material_count:e})},min:1,max:50,displayUnit:!1}))),i.a.createElement(g.b,g.a.style,i.a.createElement(_.a,{title:Object(s.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(c.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:L||"",onColorChange:e=>n({headingColor:e})}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:n,loadGoogleFonts:{value:ae,label:"headLoadGoogleFonts"},fontFamily:{value:N,label:"headFontFamily"},fontWeight:{value:W,label:"headFontWeight"},fontStyle:{value:Ce,label:"headFontStyle"},transform:{value:xe,label:"headTransform"},decoration:{value:ke,label:"headDecoration"},fontSizeType:{value:D,label:"headFontSizeType"},fontSize:{value:P,label:"headFontSize"},fontSizeMobile:{value:U,label:"headFontSizeMobile"},fontSizeTablet:{value:B,label:"headFontSizeTablet"},lineHeightType:{value:G,label:"headLineHeightType"},lineHeight:{value:R,label:"headLineHeight"},lineHeightMobile:{value:V,label:"headLineHeightMobile"},lineHeightTablet:{value:q,label:"headLineHeightTablet"}})),i.a.createElement(_.a,{title:Object(s.__)("Secondary Heading","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(c.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:E||"",onColorChange:e=>n({showTotaltimecolor:e})}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:n,loadGoogleFonts:{value:be,label:"priceLoadGoogleFonts"},fontFamily:{value:ue,label:"priceFontFamily"},fontWeight:{value:ce,label:"priceFontWeight"},fontStyle:{value:He,label:"priceFontStyle"},transform:{value:Ee,label:"priceTransform"},decoration:{value:Fe,label:"priceDecoration"},fontSizeType:{value:oe,label:"priceFontSizeType"},fontSize:{value:le,label:"priceFontSize"},fontSizeMobile:{value:se,label:"priceFontSizeMobile"},fontSizeTablet:{value:re,label:"priceFontSizeTablet"},lineHeightType:{value:he,label:"priceLineHeightType"},lineHeight:{value:ge,label:"priceLineHeight"},lineHeightMobile:{value:de,label:"priceLineHeightMobile"},lineHeightTablet:{value:fe,label:"priceLineHeightTablet"}})),i.a.createElement(_.a,{title:Object(s.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(c.a,{label:Object(s.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:e=>n({subHeadingColor:e})}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:n,loadGoogleFonts:{value:ie,label:"subHeadLoadGoogleFonts"},fontFamily:{value:$,label:"subHeadFontFamily"},fontWeight:{value:Y,label:"subHeadFontWeight"},fontStyle:{value:ze,label:"subHeadFontStyle"},transform:{value:Ie,label:"subHeadTransform"},decoration:{value:Le,label:"subHeadDecoration"},fontSizeType:{value:K,label:"subHeadFontSizeType"},fontSize:{value:J,label:"subHeadFontSize"},fontSizeMobile:{value:X,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:Q,label:"subHeadFontSizeTablet"},lineHeightType:{value:ee,label:"subHeadLineHeightType"},lineHeight:{value:Z,label:"subHeadLineHeight"},lineHeightMobile:{value:te,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:ne,label:"subHeadLineHeightTablet"}})),i.a.createElement(_.a,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},O&&i.a.createElement(f.a,{label:Object(s.__)("Time Margin","ultimate-addons-for-gutenberg"),setAttributes:n,value:me,onChange:e=>n({timeSpace:e}),min:0,max:50,displayUnit:!1}),T&&i.a.createElement(f.a,{label:Object(s.__)("Cost Margin","ultimate-addons-for-gutenberg"),setAttributes:n,value:pe,onChange:e=>n({costSpace:e}),min:0,max:50,displayUnit:!1}),i.a.createElement(f.a,{label:Object(s.__)("Row Gap","ultimate-addons-for-gutenberg"),setAttributes:n,value:ve,onChange:e=>n({row_gap:e}),min:0,max:200,displayUnit:!1}),i.a.createElement(f.a,{label:Object(s.__)("Gap Between Steps","ultimate-addons-for-gutenberg"),setAttributes:n,value:_e,onChange:e=>n({step_gap:e}),min:0,max:200,displayUnit:!1}))),i.a.createElement(g.b,y({},g.a.advance,{parentProps:e})))),Ae,Ne,We)};t.default=i.a.memo(j)}}]);