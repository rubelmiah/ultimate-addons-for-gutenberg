(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[66],{198:function(e,t,n){"use strict";var a,i,o=n(35),l=n.n(o),r=n(199),s=n.n(r),u=n(2);if(void 0===c)var c=[];const f=e=>{const[t,n]=Object(u.useState)([]);Object(u.useEffect)(()=>{l()},[]),Object(u.useEffect)(()=>{const{onStatus:n,config:a}=e;void 0!==t.status&&n(t.status),a!==t.config&&l()},[e]);const a=()=>{n({status:"loading"})},i=()=>{n({status:"active"})},o=()=>{n({status:"inactive"})},l=()=>{var t;c.includes(e.config.google.families[0])||(s.a.load({...e.config,loading:a,active:i,inactive:o}),t=e.config.google.families[0],c.includes(t)||c.push(t))},{children:r}=e;return r||null};f.propTypes={config:null===(a=l.a.object)||void 0===a?void 0:a.isRequired,children:l.a.element,onStatus:null===(i=l.a.func)||void 0===i?void 0:i.isRequired},f.defaultProps={onStatus:()=>{}},t.a=f},199:function(e,t,n){var a;!function(){function i(e,t,n){return e.call.apply(e.bind,arguments)}function o(e,t,n){if(!e)throw Error();if(2<arguments.length){var a=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,a),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function l(e,t,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function c(e,t,n,a){if(t=e.c.createElement(t),n)for(var i in n)n.hasOwnProperty(i)&&("style"==i?t.style.cssText=n[i]:t.setAttribute(i,n[i]));return a&&t.appendChild(e.c.createTextNode(a)),t}function f(e,t,n){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(n,e.lastChild)}function h(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t,n){t=t||[],n=n||[];for(var a=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var o=!1,l=0;l<a.length;l+=1)if(t[i]===a[l]){o=!0;break}o||a.push(t[i])}for(t=[],i=0;i<a.length;i+=1){for(o=!1,l=0;l<n.length;l+=1)if(a[i]===n[l]){o=!0;break}o||t.push(a[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(e,t){for(var n=e.className.split(/\s+/),a=0,i=n.length;a<i;a++)if(n[a]==t)return!0;return!1}function g(e,t,n){function a(){r&&i&&o&&(r(l),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,o=!0,l=null,r=n||null;u?(t.onload=function(){i=!0,a()},t.onerror=function(){i=!0,l=Error("Stylesheet failed to load"),a()}):setTimeout((function(){i=!0,a()}),0),f(e,"head",t)}function p(e,t,n,a){var i=e.c.getElementsByTagName("head")[0];if(i){var o=c(e,"script",{src:t}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&i.removeChild(o))},i.appendChild(o),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),a||5e3),o}return null}function m(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,_(e)}}function w(e,t){e.c=t,_(e)}function _(e){0==e.a&&e.c&&(e.c(),e.c=null)}function y(e){this.a=e||"-"}function j(e,t){this.c=e,this.f=4,this.a="n";var n=(t||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function C(e){var t=[];e=e.split(/,\s*/);for(var n=0;n<e.length;n++){var a=e[n].replace(/['"]/g,"");-1!=a.indexOf(" ")||/^\d/.test(a)?t.push("'"+a+"'"):t.push(a)}return t.join(",")}function O(e){return e.a+e.f}function T(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function S(e){var t=4,n="n",a=null;return e&&((a=e.match(/(normal|oblique|italic)/i))&&a[1]&&(n=a[1].substr(0,1).toLowerCase()),(a=e.match(/([1-9]00|normal|bold)/i))&&a[1]&&(/bold/i.test(a[1])?t=7:/[1-9]00/.test(a[1])&&(t=parseInt(a[1].substr(0,1),10)))),n+t}function x(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new y("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function E(e){if(e.g){var t=d(e.f,e.a.c("wf","active")),n=[],a=[e.a.c("wf","loading")];t||n.push(e.a.c("wf","inactive")),b(e.f,n,a)}k(e,"inactive")}function k(e,t,n){e.j&&e.h[t]&&(n?e.h[t](n.c,O(n)):e.h[t]())}function L(){this.c={}}function z(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function A(e){f(e.c,"body",e.a)}function I(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+C(e.c)+";font-style:"+T(e)+";font-weight:"+e.f+"00;"}function M(e,t,n,a,i,o){this.g=e,this.j=t,this.a=a,this.c=n,this.f=i||3e3,this.h=o||void 0}function N(e,t,n,a,i,o,l){this.v=e,this.B=t,this.c=n,this.a=a,this.s=l||"BESbswy",this.f={},this.w=i||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new z(this.c,this.s),this.h=new z(this.c,this.s),this.j=new z(this.c,this.s),this.m=new z(this.c,this.s),e=I(e=new j(this.a.c+",serif",O(this.a))),this.g.a.style.cssText=e,e=I(e=new j(this.a.c+",sans-serif",O(this.a))),this.h.a.style.cssText=e,e=I(e=new j("serif",O(this.a))),this.j.a.style.cssText=e,e=I(e=new j("sans-serif",O(this.a))),this.m.a.style.cssText=e,A(this.g),A(this.h),A(this.j),A(this.m)}y.prototype.c=function(e){for(var t=[],n=0;n<arguments.length;n++)t.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},M.prototype.start=function(){var e=this.c.o.document,t=this,n=r(),a=new Promise((function(a,i){!function o(){r()-n>=t.f?i():e.fonts.load(function(e){return T(e)+" "+e.f+"00 300px "+C(e.c)}(t.a),t.h).then((function(e){1<=e.length?a():setTimeout(o,25)}),(function(){i()}))}()})),i=null,o=new Promise((function(e,n){i=setTimeout(n,t.f)}));Promise.race([o,a]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var B={D:"serif",C:"sans-serif"},H=null;function P(){if(null===H){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);H=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return H}function F(e,t,n){for(var a in B)if(B.hasOwnProperty(a)&&t===e.f[B[a]]&&n===e.f[B[a]])return!0;return!1}function R(e,t){setTimeout(l((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),t(this.a)}),e),0)}function W(e,t,n){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=n}N.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var n,a=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(n=a===t.f.serif&&i===t.f["sans-serif"])||(n=P()&&F(t,a,i)),n?r()-t.A>=t.w?P()&&F(t,a,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?R(t,t.v):R(t,t.B):function(t){setTimeout(l((function(){e(this)}),t),50)}(t):R(t,t.v)}(this)};var G=null;function D(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&b(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),k(e,"active")):E(e.a))}function U(e){this.j=e,this.a=new L,this.h=0,this.f=this.g=!0}function Z(e,t,n,a,i){var o=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,r=a||{};if(0===n.length&&o)E(t.a);else{t.f+=n.length,o&&(t.j=o);var s,u=[];for(s=0;s<n.length;s++){var c=n[s],f=r[c.c],h=t.a,d=c;if(h.g&&b(h.f,[h.a.c("wf",d.c,O(d).toString(),"loading")]),k(h,"fontloading",d),h=null,null===G)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);G=d?42<parseInt(d[1],10):!g}else G=!1;h=G?new M(l(t.g,t),l(t.h,t),t.c,c,t.s,f):new N(l(t.g,t),l(t.h,t),t.c,c,t.s,e,f),u.push(h)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function V(e,t){this.c=e,this.a=t}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e||J,this.a=[],this.f=[],this.g=t||""}W.prototype.g=function(e){var t=this.a;t.g&&b(t.f,[t.a.c("wf",e.c,O(e).toString(),"active")],[t.a.c("wf",e.c,O(e).toString(),"loading"),t.a.c("wf",e.c,O(e).toString(),"inactive")]),k(t,"fontactive",e),this.m=!0,D(this)},W.prototype.h=function(e){var t=this.a;if(t.g){var n=d(t.f,t.a.c("wf",e.c,O(e).toString(),"active")),a=[],i=[t.a.c("wf",e.c,O(e).toString(),"loading")];n||a.push(t.a.c("wf",e.c,O(e).toString(),"inactive")),b(t.f,a,i)}k(t,"fontinactive",e),D(this)},U.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,n){var a=[],i=n.timeout;!function(e){e.g&&b(e.f,[e.a.c("wf","loading")]),k(e,"loading")}(t),a=function(e,t,n){var a,i=[];for(a in t)if(t.hasOwnProperty(a)){var o=e.c[a];o&&i.push(o(t[a],n))}return i}(e.a,n,e.c);var o=new W(e.c,t,i);for(e.h=a.length,t=0,n=a.length;t<n;t++)a[t].load((function(t,n,a){Z(e,o,t,n,a)}))}(this,new x(this.c,e),e)},V.prototype.load=function(e){var t=this,n=t.a.projectId,a=t.a.version;if(n){var i=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(a?"?v="+a:""),(function(a){a?e([]):(i["__MonotypeConfiguration__"+n]=function(){return t.a},function t(){if(i["__mti_fntLst"+n]){var a,o=i["__mti_fntLst"+n](),l=[];if(o)for(var r=0;r<o.length;r++){var s=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(a=o[r].fontStyle+o[r].fontWeight,l.push(new j(s,a))):l.push(new j(s))}e(l)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+n}else e([])},q.prototype.load=function(e){var t,n,a=this.a.urls||[],i=this.a.families||[],o=this.a.testStrings||{},l=new m;for(t=0,n=a.length;t<n;t++)g(this.c,a[t],v(l));var r=[];for(t=0,n=i.length;t<n;t++)if((a=i[t].split(":"))[1])for(var s=a[1].split(","),u=0;u<s.length;u+=1)r.push(new j(a[0],s[u]));else r.push(new j(a[0]));w(l,(function(){e(r,o)}))};var J="https://fonts.googleapis.com/css";function K(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Y={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ne={Arimo:!0,Cousine:!0,Tinos:!0};function ae(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,n=this.c,a=new $(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var n=t.length,a=0;a<n;a++){var i=t[a].split(":");3==i.length&&e.f.push(i.pop());var o="";2==i.length&&""!=i[1]&&(o=":"),e.a.push(i.join(o))}}(a,i);var o=new K(i);!function(e){for(var t=e.f.length,n=0;n<t;n++){var a=e.f[n].split(":"),i=a[0].replace(/\+/g," "),o=["n4"];if(2<=a.length){var l;if(l=[],r=a[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var c;if((c=r[u]).match(/^[\w-]+$/))if(null==(f=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=f[2])||""==c?"n":Y[c],null==(f=f[1])||""==f)f="4";else var f=Q[f]||(isNaN(f)?"4":f.substr(0,1));c=[c,f].join("")}else c="";c&&l.push(c)}0<l.length&&(o=l),3==a.length&&(l=[],0<(a=(a=a[2])?a.split(","):l).length&&(a=X[a[0]])&&(e.c[i]=a))}for(e.c[i]||(a=X[i])&&(e.c[i]=a),a=0;a<o.length;a+=1)e.a.push(new j(i,o[a]))}}(o),g(n,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,n=[],a=0;a<t;a++)n.push(e.a[a].replace(/ /g,"+"));return t=e.c+"?family="+n.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(a),v(t)),w(t,(function(){e(o.a,o.c,ne)}))},ae.prototype.load=function(e){var t=this.a.id,n=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){t=n.Typekit.config.fn;for(var a=[],i=0;i<t.length;i+=2)for(var o=t[i],l=t[i+1],r=0;r<l.length;r++)a.push(new j(o,l[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(a)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,n=this.c.o,a=this;t?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[t]=function(t,n){for(var i=0,o=n.fonts.length;i<o;++i){var l=n.fonts[i];a.a.push(new j(l.name,S("font-weight:"+l.weight+";font-style:"+l.style)))}e(a.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var oe=new U(window);oe.a.c.custom=function(e,t){return new q(t,e)},oe.a.c.fontdeck=function(e,t){return new ie(t,e)},oe.a.c.monotype=function(e,t){return new V(t,e)},oe.a.c.typekit=function(e,t){return new ae(t,e)},oe.a.c.google=function(e,t){return new te(t,e)};var le={load:l(oe.load,oe)};void 0===(a=function(){return le}.call(t,n,t,e))||(e.exports=a)}()},528:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(8),l=n(198),r=n(31),s=n(1),u=n(9),c=n(4),f=n(80),h=n(24),b=n(18),d=n(21),g=n(19),p=n(20),m=n(27),v=n(55);const w=[{defaultAttributes:m.a},{defaultChildAttributes:v.a},{value:"preset-1",label:Object(s.__)("Preset 1","ultimate-addons-for-gutenberg"),attributes:[{label:"size",value:20},{label:"bgSize",value:""},{label:"borderRadius",value:100},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#0170B9"},{label:"icon_bg_color",value:""}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.049 19.9271C35.3483 19.0057 36.6518 19.0057 36.9511 19.9271L40.0413 29.4377C40.1752 29.8497 40.5591 30.1287 40.9924 30.1287H50.9924C51.9612 30.1287 52.3639 31.3683 51.5802 31.9377L43.49 37.8156C43.1395 38.0702 42.9928 38.5216 43.1267 38.9336L46.2169 48.4443C46.5163 49.3656 45.4618 50.1317 44.6781 49.5623L36.5878 43.6844C36.2373 43.4298 35.7627 43.4298 35.4123 43.6844L27.322 49.5623C26.5383 50.1317 25.4838 49.3656 25.7832 48.4443L28.8734 38.9336C29.0073 38.5216 28.8606 38.0702 28.5101 37.8156L20.4199 31.9377C19.6362 31.3683 20.0389 30.1287 21.0077 30.1287H31.0077C31.441 30.1287 31.8249 29.8497 31.9588 29.4377L35.049 19.9271Z" /></svg>'},{value:"preset-2",label:Object(s.__)("Preset 2","ultimate-addons-for-gutenberg"),attributes:[{label:"bgSize",value:10},{label:"size",value:20},{label:"borderRadius",value:100},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#fff"},{label:"icon_bg_color",value:"#0170B9"}],icon:'<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.5829 56C47.6286 56 56.5829 47.0457 56.5829 36C56.5829 24.9543 47.6286 16 36.5829 16C25.5372 16 16.5829 24.9543 16.5829 36C16.5829 47.0457 25.5372 56 36.5829 56ZM39.2771 31.2918L37.5339 25.9271C37.2346 25.0057 35.9312 25.0057 35.6318 25.9271L33.8887 31.2918C33.7548 31.7038 33.3709 31.9828 32.9377 31.9828H27.2968C26.3281 31.9828 25.9253 33.2224 26.7091 33.7918L31.2726 37.1074C31.6231 37.362 31.7697 37.8134 31.6358 38.2254L29.8927 43.5902C29.5934 44.5115 30.6479 45.2776 31.4316 44.7082L35.9951 41.3926C36.3456 41.138 36.8202 41.138 37.1707 41.3926L41.7342 44.7082C42.5179 45.2776 43.5724 44.5115 43.273 43.5902L41.5299 38.2254C41.3961 37.8134 41.5427 37.362 41.8932 37.1074L46.4567 33.7918C47.2404 33.2224 46.8377 31.9828 45.8689 31.9828H40.2281C39.7949 31.9828 39.4109 31.7038 39.2771 31.2918Z" /></svg>'},{value:"preset-3",label:Object(s.__)("Preset 3","ultimate-addons-for-gutenberg"),attributes:[{label:"bgSize",value:10},{label:"size",value:20},{label:"borderRadius",value:100},{label:"border",value:2}],childAttributes:[{label:"icon_color",value:"#0170B9"},{label:"icon_border_color",value:"#0170B9"},{label:"icon_bg_color",value:""}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.2146 25.9271C35.5139 25.0057 36.8174 25.0057 37.1167 25.9271L38.8598 31.2918C38.9937 31.7038 39.3777 31.9828 39.8109 31.9828H45.4517C46.4204 31.9828 46.8232 33.2224 46.0395 33.7918L41.476 37.1074C41.1255 37.362 40.9788 37.8134 41.1127 38.2254L42.8558 43.5902C43.1552 44.5115 42.1007 45.2776 41.317 44.7082L36.7534 41.3926C36.403 41.138 35.9284 41.138 35.5779 41.3926L31.0143 44.7082C30.2306 45.2776 29.1761 44.5115 29.4755 43.5902L31.2186 38.2254C31.3525 37.8134 31.2058 37.362 30.8553 37.1074L26.2918 33.7918C25.5081 33.2224 25.9109 31.9828 26.8796 31.9828H32.5204C32.9537 31.9828 33.3376 31.7038 33.4715 31.2918L35.2146 25.9271Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M36.1658 54C46.1069 54 54.1658 45.9411 54.1658 36C54.1658 26.0589 46.1069 18 36.1658 18C26.2246 18 18.1658 26.0589 18.1658 36C18.1658 45.9411 26.2246 54 36.1658 54ZM36.1658 56C47.2115 56 56.1658 47.0457 56.1658 36C56.1658 24.9543 47.2115 16 36.1658 16C25.1201 16 16.1658 24.9543 16.1658 36C16.1658 47.0457 25.1201 56 36.1658 56Z" /></svg>'}];var _=Object(p.applyFilters)("uag_icon_list_presets",w),y=n(120),j=n(11),C=n(6),O=n(15);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}const S=e=>{e=e.parentProps;const{attributes:t,setAttributes:n,clientId:p}=e,{align:m,gap:v,gapTablet:w,gapMobile:S,inner_gap:x,innerGapTablet:E,innerGapMobile:k,stack:L,icon_layout:z,iconPosition:A,size:I,sizeType:M,sizeMobile:N,sizeTablet:B,hideLabel:H,borderRadius:P,borderRadiusTablet:F,borderRadiusMobile:R,bgSize:W,border:G,borderTablet:D,borderMobile:U,fontSize:Z,fontSizeType:V,fontSizeMobile:q,fontSizeTablet:$,fontFamily:J,fontWeight:K,lineHeight:X,lineHeightType:Q,lineHeightMobile:Y,lineHeightTablet:ee,loadGoogleFonts:te,fontStyle:ne,fontTransform:ae,fontDecoration:ie}=t;let oe;if(!0===te){const e={google:{families:[J+(K?":"+K:"")]}};oe=i.a.createElement(l.a,{config:e})}return i.a.createElement(a.Suspense,{fallback:Object(o.a)()},i.a.createElement(c.BlockControls,null,i.a.createElement(c.AlignmentToolbar,{value:m,onChange:e=>{n({align:e})},controls:["left","center","right"]})),i.a.createElement(c.InspectorControls,null,i.a.createElement(f.a,null,i.a.createElement(h.b,h.a.general,i.a.createElement(O.a,{title:Object(s.__)("Presets","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(y.a,{setAttributes:n,presets:_,presetInputType:"radioImage"})),i.a.createElement(O.a,{title:Object(s.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(g.a,{setAttributes:n,label:Object(s.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:z,label:"icon_layout"},className:"uagb-multi-button-alignment-control",options:[{value:"horizontal",label:Object(s.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(s.__)("Vertical","ultimate-addons-for-gutenberg")}],showIcons:!1}),i.a.createElement(g.a,{setAttributes:n,label:Object(s.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:m,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(C.Icon,{icon:Object(j.a)("fa fa-align-left")}),tooltip:Object(s.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(C.Icon,{icon:Object(j.a)("fa fa-align-center")}),tooltip:Object(s.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(C.Icon,{icon:Object(j.a)("fa fa-align-right")}),tooltip:Object(s.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),"horizontal"===z&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{setAttributes:n,label:Object(s.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:L,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(s.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(s.__)("Tablet + Mobile","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(s.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(s.__)("Note: Choose on what breakpoint the Icons will stack.","ultimate-addons-for-gutenberg")})),!H&&i.a.createElement(i.a.Fragment,null,i.a.createElement(g.a,{setAttributes:n,label:Object(s.__)("Icon Alignment","ultimate-addons-for-gutenberg"),data:{value:A,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top"},{value:"middle",label:"Middle"}],showIcons:!1,help:Object(s.__)("Note: This manages the Icon Position with respect to the Label.","ultimate-addons-for-gutenberg")})),i.a.createElement(C.ToggleControl,{label:Object(s.__)("Hide Labels","ultimate-addons-for-gutenberg"),checked:H,onChange:e=>(e=>{Object(u.select)("core/block-editor").getBlocks(p).forEach(t=>{t.attributes.hideLabel=e}),n({hideLabel:e})})(e)}))),i.a.createElement(h.b,h.a.style,i.a.createElement(O.a,{title:Object(s.__)("Icon/Image","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{label:Object(s.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:I,label:"size"},tablet:{value:B,label:"sizeTablet"},mobile:{value:N,label:"sizeMobile"}},min:0,max:200,unit:{value:M,label:"sizeType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(s.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:n}),i.a.createElement(b.a,{label:Object(s.__)("Background Size (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:W,onChange:e=>n({bgSize:e}),min:0,max:50,displayUnit:!1,help:Object(s.__)("Note: Background Size option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(d.a,{label:Object(s.__)("Border (px)","ultimate-addons-for-gutenberg"),data:{desktop:{value:G,label:"border"},tablet:{value:D,label:"borderTablet"},mobile:{value:U,label:"borderMobile"}},min:0,max:10,displayUnit:!1,setAttributes:n,help:Object(s.__)("Note: Border option is useful when one adds border color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(d.a,{label:Object(s.__)("Border Radius (px)","ultimate-addons-for-gutenberg"),data:{desktop:{value:P,label:"borderRadius"},tablet:{value:F,label:"borderRadiusTablet"},mobile:{value:R,label:"borderRadiusMobile"}},min:0,max:100,displayUnit:!1,setAttributes:n,help:Object(s.__)("Note: Border Radius option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")})),!H&&i.a.createElement(O.a,{title:Object(s.__)("Label","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{label:Object(s.__)("Gap between Icon and Label (px)","ultimate-addons-for-gutenberg"),data:{desktop:{value:x,label:"inner_gap"},tablet:{value:E,label:"innerGapTablet"},mobile:{value:k,label:"innerGapMobile"}},min:0,max:100,displayUnit:!1,setAttributes:n}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:n,loadGoogleFonts:{value:te,label:"loadGoogleFonts"},fontFamily:{value:J,label:"fontFamily"},fontWeight:{value:K,label:"fontWeight"},fontStyle:{value:ne,label:"fontStyle"},transform:{value:ae,label:"fontTransform"},decoration:{value:ie,label:"fontDecoration"},fontSizeType:{value:V,label:"fontSizeType"},fontSize:{value:Z,label:"fontSize"},fontSizeMobile:{value:q,label:"fontSizeMobile"},fontSizeTablet:{value:$,label:"fontSizeTablet"},lineHeightType:{value:Q,label:"lineHeightType"},lineHeight:{value:X,label:"lineHeight"},lineHeightMobile:{value:Y,label:"lineHeightMobile"},lineHeightTablet:{value:ee,label:"lineHeightTablet"}})),i.a.createElement(O.a,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(d.a,{label:Object(s.__)("Gap between Items (px)","ultimate-addons-for-gutenberg"),data:{desktop:{value:v,label:"gap"},tablet:{value:w,label:"gapTablet"},mobile:{value:S,label:"gapMobile"}},min:0,max:100,displayUnit:!1,setAttributes:n,help:Object(s.__)("Note: For better editing experience, the gap between items might look larger than applied. Viewing in frontend will show the actual results.","ultimate-addons-for-gutenberg")}))),i.a.createElement(h.b,T({},h.a.advance,{parentProps:e})))),oe)};t.default=i.a.memo(S)}}]);