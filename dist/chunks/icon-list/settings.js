(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[66],{197:function(e,t,a){"use strict";var n,i,l=a(36),o=a.n(l),r=a(198),s=a.n(r),u=a(2);if(void 0===c)var c=[];const f=e=>{const[t,a]=Object(u.useState)([]);Object(u.useEffect)(()=>{o()},[]),Object(u.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&o()},[e]);const n=()=>{a({status:"loading"})},i=()=>{a({status:"active"})},l=()=>{a({status:"inactive"})},o=()=>{var t;c.includes(e.config.google.families[0])||(s.a.load({...e.config,loading:n,active:i,inactive:l}),t=e.config.google.families[0],c.includes(t)||c.push(t))},{children:r}=e;return r||null};f.propTypes={config:null===(n=o.a.object)||void 0===n?void 0:n.isRequired,children:o.a.element,onStatus:null===(i=o.a.func)||void 0===i?void 0:i.isRequired},f.defaultProps={onStatus:()=>{}},t.a=f},198:function(e,t,a){var n;!function(){function i(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function o(e,t,a){return(o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function c(e,t,a,n){if(t=e.c.createElement(t),a)for(var i in a)a.hasOwnProperty(i)&&("style"==i?t.style.cssText=a[i]:t.setAttribute(i,a[i]));return n&&t.appendChild(e.c.createTextNode(n)),t}function f(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function h(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),i=0;i<t.length;i+=1){for(var l=!1,o=0;o<n.length;o+=1)if(t[i]===n[o]){l=!0;break}l||n.push(t[i])}for(t=[],i=0;i<n.length;i+=1){for(l=!1,o=0;o<a.length;o+=1)if(n[i]===a[o]){l=!0;break}l||t.push(n[i])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(e,t){for(var a=e.className.split(/\s+/),n=0,i=a.length;n<i;n++)if(a[n]==t)return!0;return!1}function g(e,t,a){function n(){r&&i&&l&&(r(o),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var i=!1,l=!0,o=null,r=a||null;u?(t.onload=function(){i=!0,n()},t.onerror=function(){i=!0,o=Error("Stylesheet failed to load"),n()}):setTimeout((function(){i=!0,n()}),0),f(e,"head",t)}function p(e,t,a,n){var i=e.c.getElementsByTagName("head")[0];if(i){var l=c(e,"script",{src:t}),o=!1;return l.onload=l.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&i.removeChild(l))},i.appendChild(l),setTimeout((function(){o||(o=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function m(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,w(e)}}function _(e,t){e.c=t,w(e)}function w(e){0==e.a&&e.c&&(e.c(),e.c=null)}function y(e){this.a=e||"-"}function j(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function T(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function O(e){return e.a+e.f}function C(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function S(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function x(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new y("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function E(e){if(e.g){var t=d(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),b(e.f,a,n)}k(e,"inactive")}function k(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,O(a)):e.h[t]())}function z(){this.c={}}function L(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function A(e){f(e.c,"body",e.a)}function M(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(e.c)+";font-style:"+C(e)+";font-weight:"+e.f+"00;"}function I(e,t,a,n,i,l){this.g=e,this.j=t,this.a=n,this.c=a,this.f=i||3e3,this.h=l||void 0}function P(e,t,a,n,i,l,o){this.v=e,this.B=t,this.c=a,this.a=n,this.s=o||"BESbswy",this.f={},this.w=i||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new L(this.c,this.s),this.h=new L(this.c,this.s),this.j=new L(this.c,this.s),this.m=new L(this.c,this.s),e=M(e=new j(this.a.c+",serif",O(this.a))),this.g.a.style.cssText=e,e=M(e=new j(this.a.c+",sans-serif",O(this.a))),this.h.a.style.cssText=e,e=M(e=new j("serif",O(this.a))),this.j.a.style.cssText=e,e=M(e=new j("sans-serif",O(this.a))),this.m.a.style.cssText=e,A(this.g),A(this.h),A(this.j),A(this.m)}y.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},I.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,i){!function l(){r()-a>=t.f?i():e.fonts.load(function(e){return C(e)+" "+e.f+"00 300px "+T(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(l,25)}),(function(){i()}))}()})),i=null,l=new Promise((function(e,a){i=setTimeout(a,t.f)}));Promise.race([l,n]).then((function(){i&&(clearTimeout(i),i=null),t.g(t.a)}),(function(){t.j(t.a)}))};var N={D:"serif",C:"sans-serif"},B=null;function H(){if(null===B){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);B=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return B}function F(e,t,a){for(var n in N)if(N.hasOwnProperty(n)&&t===e.f[N[n]]&&a===e.f[N[n]])return!0;return!1}function R(e,t){setTimeout(o((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),t(this.a)}),e),0)}function G(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}P.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,i=t.h.a.offsetWidth;(a=n===t.f.serif&&i===t.f["sans-serif"])||(a=H()&&F(t,n,i)),a?r()-t.A>=t.w?H()&&F(t,n,i)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?R(t,t.v):R(t,t.B):function(t){setTimeout(o((function(){e(this)}),t),50)}(t):R(t,t.v)}(this)};var W=null;function V(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&b(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),k(e,"active")):E(e.a))}function D(e){this.j=e,this.a=new z,this.h=0,this.f=this.g=!0}function Z(e,t,a,n,i){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=i||null,r=n||{};if(0===a.length&&l)E(t.a);else{t.f+=a.length,l&&(t.j=l);var s,u=[];for(s=0;s<a.length;s++){var c=a[s],f=r[c.c],h=t.a,d=c;if(h.g&&b(h.f,[h.a.c("wf",d.c,O(d).toString(),"loading")]),k(h,"fontloading",d),h=null,null===W)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var g=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);W=d?42<parseInt(d[1],10):!g}else W=!1;h=W?new I(o(t.g,t),o(t.h,t),t.c,c,t.s,f):new P(o(t.g,t),o(t.h,t),t.c,c,t.s,e,f),u.push(h)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}G.prototype.g=function(e){var t=this.a;t.g&&b(t.f,[t.a.c("wf",e.c,O(e).toString(),"active")],[t.a.c("wf",e.c,O(e).toString(),"loading"),t.a.c("wf",e.c,O(e).toString(),"inactive")]),k(t,"fontactive",e),this.m=!0,V(this)},G.prototype.h=function(e){var t=this.a;if(t.g){var a=d(t.f,t.a.c("wf",e.c,O(e).toString(),"active")),n=[],i=[t.a.c("wf",e.c,O(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,O(e).toString(),"inactive")),b(t.f,n,i)}k(t,"fontinactive",e),V(this)},D.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],i=a.timeout;!function(e){e.g&&b(e.f,[e.a.c("wf","loading")]),k(e,"loading")}(t),n=function(e,t,a){var n,i=[];for(n in t)if(t.hasOwnProperty(n)){var l=e.c[n];l&&i.push(l(t[n],a))}return i}(e.a,a,e.c);var l=new G(e.c,t,i);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){Z(e,l,t,a,n)}))}(this,new x(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var i=t.c.o;p(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(i["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(i["__mti_fntLst"+a]){var n,l=i["__mti_fntLst"+a](),o=[];if(l)for(var r=0;r<l.length;r++){var s=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,o.push(new j(s,n))):o.push(new j(s))}e(o)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,n=this.a.urls||[],i=this.a.families||[],l=this.a.testStrings||{},o=new m;for(t=0,a=n.length;t<a;t++)g(this.c,n[t],v(o));var r=[];for(t=0,a=i.length;t<a;t++)if((n=i[t].split(":"))[1])for(var s=n[1].split(","),u=0;u<s.length;u+=1)r.push(new j(n[0],s[u]));else r.push(new j(n[0]));_(o,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function U(e){this.f=e,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Y={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function ie(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new m,a=this.c,n=new J(this.a.api,this.a.text),i=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var i=t[n].split(":");3==i.length&&e.f.push(i.pop());var l="";2==i.length&&""!=i[1]&&(l=":"),e.a.push(i.join(l))}}(n,i);var l=new U(i);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),i=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var o;if(o=[],r=n[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var c;if((c=r[u]).match(/^[\w-]+$/))if(null==(f=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=f[2])||""==c?"n":Y[c],null==(f=f[1])||""==f)f="4";else var f=Q[f]||(isNaN(f)?"4":f.substr(0,1));c=[c,f].join("")}else c="";c&&o.push(c)}0<o.length&&(l=o),3==n.length&&(o=[],0<(n=(n=n[2])?n.split(","):o).length&&(n=X[n[0]])&&(e.c[i]=n))}for(e.c[i]||(n=X[i])&&(e.c[i]=n),n=0;n<l.length;n+=1)e.a.push(new j(i,l[n]))}}(l),g(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),_(t,(function(){e(l.a,l.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],i=0;i<t.length;i+=2)for(var l=t[i],o=t[i+1],r=0;r<o.length;r++)n.push(new j(l,o[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},ie.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var i=0,l=a.fonts.length;i<l;++i){var o=a.fonts[i];n.a.push(new j(o.name,S("font-weight:"+o.weight+";font-style:"+o.style)))}e(n.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new D(window);le.a.c.custom=function(e,t){return new $(t,e)},le.a.c.fontdeck=function(e,t){return new ie(t,e)},le.a.c.monotype=function(e,t){return new q(t,e)},le.a.c.typekit=function(e,t){return new ne(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var oe={load:o(le.load,le)};void 0===(n=function(){return oe}.call(t,a,t,e))||(e.exports=n)}()},528:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),o=a(197),r=a(31),s=a(1),u=a(9),c=a(4),f=a(78),h=a(24),b=a(23),d=a(19),g=a(20),p=a(27),m=a(58);const v=[{defaultAttributes:p.a},{defaultChildAttributes:m.a},{value:"preset-1",label:Object(s.__)("Preset 1","ultimate-addons-for-gutenberg"),attributes:[{label:"size",value:20},{label:"bgSize",value:""},{label:"borderRadius",value:100},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#0170B9"},{label:"icon_bg_color",value:""}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.049 19.9271C35.3483 19.0057 36.6518 19.0057 36.9511 19.9271L40.0413 29.4377C40.1752 29.8497 40.5591 30.1287 40.9924 30.1287H50.9924C51.9612 30.1287 52.3639 31.3683 51.5802 31.9377L43.49 37.8156C43.1395 38.0702 42.9928 38.5216 43.1267 38.9336L46.2169 48.4443C46.5163 49.3656 45.4618 50.1317 44.6781 49.5623L36.5878 43.6844C36.2373 43.4298 35.7627 43.4298 35.4123 43.6844L27.322 49.5623C26.5383 50.1317 25.4838 49.3656 25.7832 48.4443L28.8734 38.9336C29.0073 38.5216 28.8606 38.0702 28.5101 37.8156L20.4199 31.9377C19.6362 31.3683 20.0389 30.1287 21.0077 30.1287H31.0077C31.441 30.1287 31.8249 29.8497 31.9588 29.4377L35.049 19.9271Z" /></svg>'},{value:"preset-2",label:Object(s.__)("Preset 2","ultimate-addons-for-gutenberg"),attributes:[{label:"bgSize",value:10},{label:"size",value:20},{label:"borderRadius",value:100},{label:"border",value:0}],childAttributes:[{label:"icon_color",value:"#fff"},{label:"icon_bg_color",value:"#0170B9"}],icon:'<svg width="73" height="72" viewBox="0 0 73 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M36.5829 56C47.6286 56 56.5829 47.0457 56.5829 36C56.5829 24.9543 47.6286 16 36.5829 16C25.5372 16 16.5829 24.9543 16.5829 36C16.5829 47.0457 25.5372 56 36.5829 56ZM39.2771 31.2918L37.5339 25.9271C37.2346 25.0057 35.9312 25.0057 35.6318 25.9271L33.8887 31.2918C33.7548 31.7038 33.3709 31.9828 32.9377 31.9828H27.2968C26.3281 31.9828 25.9253 33.2224 26.7091 33.7918L31.2726 37.1074C31.6231 37.362 31.7697 37.8134 31.6358 38.2254L29.8927 43.5902C29.5934 44.5115 30.6479 45.2776 31.4316 44.7082L35.9951 41.3926C36.3456 41.138 36.8202 41.138 37.1707 41.3926L41.7342 44.7082C42.5179 45.2776 43.5724 44.5115 43.273 43.5902L41.5299 38.2254C41.3961 37.8134 41.5427 37.362 41.8932 37.1074L46.4567 33.7918C47.2404 33.2224 46.8377 31.9828 45.8689 31.9828H40.2281C39.7949 31.9828 39.4109 31.7038 39.2771 31.2918Z" /></svg>'},{value:"preset-3",label:Object(s.__)("Preset 3","ultimate-addons-for-gutenberg"),attributes:[{label:"bgSize",value:10},{label:"size",value:20},{label:"borderRadius",value:100},{label:"border",value:2}],childAttributes:[{label:"icon_color",value:"#0170B9"},{label:"icon_border_color",value:"#0170B9"},{label:"icon_bg_color",value:""}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M35.2146 25.9271C35.5139 25.0057 36.8174 25.0057 37.1167 25.9271L38.8598 31.2918C38.9937 31.7038 39.3777 31.9828 39.8109 31.9828H45.4517C46.4204 31.9828 46.8232 33.2224 46.0395 33.7918L41.476 37.1074C41.1255 37.362 40.9788 37.8134 41.1127 38.2254L42.8558 43.5902C43.1552 44.5115 42.1007 45.2776 41.317 44.7082L36.7534 41.3926C36.403 41.138 35.9284 41.138 35.5779 41.3926L31.0143 44.7082C30.2306 45.2776 29.1761 44.5115 29.4755 43.5902L31.2186 38.2254C31.3525 37.8134 31.2058 37.362 30.8553 37.1074L26.2918 33.7918C25.5081 33.2224 25.9109 31.9828 26.8796 31.9828H32.5204C32.9537 31.9828 33.3376 31.7038 33.4715 31.2918L35.2146 25.9271Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M36.1658 54C46.1069 54 54.1658 45.9411 54.1658 36C54.1658 26.0589 46.1069 18 36.1658 18C26.2246 18 18.1658 26.0589 18.1658 36C18.1658 45.9411 26.2246 54 36.1658 54ZM36.1658 56C47.2115 56 56.1658 47.0457 56.1658 36C56.1658 24.9543 47.2115 16 36.1658 16C25.1201 16 16.1658 24.9543 16.1658 36C16.1658 47.0457 25.1201 56 36.1658 56Z" /></svg>'}];var _=Object(g.applyFilters)("uag_icon_list_presets",v),w=a(119),y=a(11),j=a(6),T=a(16);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}const C=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,clientId:g}=e,{align:p,gap:m,gapTablet:v,gapMobile:C,gapType:S,inner_gap:x,innerGapTablet:E,innerGapMobile:k,innerGapType:z,stack:L,icon_layout:A,iconPosition:M,size:I,sizeType:P,sizeMobile:N,sizeTablet:B,hideLabel:H,borderRadius:F,borderRadiusTablet:R,borderRadiusMobile:G,borderRadiusType:W,bgSize:V,bgSizeType:D,bgSizeTablet:Z,bgSizeMobile:q,border:$,borderTablet:J,borderMobile:K,borderType:U,fontSize:X,fontSizeType:Q,fontSizeMobile:Y,fontSizeTablet:ee,fontFamily:te,fontWeight:ae,lineHeight:ne,lineHeightType:ie,lineHeightMobile:le,lineHeightTablet:oe,loadGoogleFonts:re,fontStyle:se,fontTransform:ue,fontDecoration:ce}=t;let fe;if(!0===re){const e={google:{families:[te+(ae?":"+ae:"")]}};fe=i.a.createElement(o.a,{config:e})}return i.a.createElement(n.Suspense,{fallback:Object(l.a)()},i.a.createElement(c.BlockControls,null,i.a.createElement(c.AlignmentToolbar,{value:p,onChange:e=>{a({align:e})},controls:["left","center","right"]})),i.a.createElement(c.InspectorControls,null,i.a.createElement(f.a,null,i.a.createElement(h.b,h.a.general,i.a.createElement(T.a,{title:Object(s.__)("Presets","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(w.a,{setAttributes:a,presets:_,presetInputType:"radioImage"})),i.a.createElement(T.a,{title:Object(s.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(d.a,{setAttributes:a,label:Object(s.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:A,label:"icon_layout"},className:"uagb-multi-button-alignment-control",options:[{value:"horizontal",label:Object(s.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(s.__)("Vertical","ultimate-addons-for-gutenberg")}],showIcons:!1}),i.a.createElement(d.a,{setAttributes:a,label:Object(s.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:p,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:i.a.createElement(j.Icon,{icon:Object(y.a)("fa fa-align-left")}),tooltip:Object(s.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:i.a.createElement(j.Icon,{icon:Object(y.a)("fa fa-align-center")}),tooltip:Object(s.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:i.a.createElement(j.Icon,{icon:Object(y.a)("fa fa-align-right")}),tooltip:Object(s.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),"horizontal"===A&&i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{setAttributes:a,label:Object(s.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:L,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(s.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(s.__)("Tablet + Mobile","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(s.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(s.__)("Note: Choose on what breakpoint the Icons will stack.","ultimate-addons-for-gutenberg")})),!H&&i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{setAttributes:a,label:Object(s.__)("Icon Alignment","ultimate-addons-for-gutenberg"),data:{value:M,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top"},{value:"middle",label:"Middle"}],showIcons:!1,help:Object(s.__)("Note: This manages the Icon Position with respect to the Label.","ultimate-addons-for-gutenberg")})),i.a.createElement(j.ToggleControl,{label:Object(s.__)("Hide Labels","ultimate-addons-for-gutenberg"),checked:H,onChange:e=>(e=>{Object(u.select)("core/block-editor").getBlocks(g).forEach(t=>{t.attributes.hideLabel=e}),a({hideLabel:e})})(e)}))),i.a.createElement(h.b,h.a.style,i.a.createElement(T.a,{title:Object(s.__)("Icon/Image","ultimate-addons-for-gutenberg"),initialOpen:!0},i.a.createElement(b.a,{label:Object(s.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:I,label:"size"},tablet:{value:B,label:"sizeTablet"},mobile:{value:N,label:"sizeMobile"}},min:0,max:200,unit:{value:P,label:"sizeType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(s.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:a}),i.a.createElement(b.a,{label:Object(s.__)("Background Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:V,label:"bgSize"},tablet:{value:Z,label:"bgSizeTablet"},mobile:{value:q,label:"bgSizeMobile"}},setAttributes:a,min:0,max:50,unit:{value:D,label:"bgSizeType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],help:Object(s.__)("Note: Background Size option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(b.a,{label:Object(s.__)("Border","ultimate-addons-for-gutenberg"),data:{desktop:{value:$,label:"border"},tablet:{value:J,label:"borderTablet"},mobile:{value:K,label:"borderMobile"}},min:0,max:10,unit:{value:U,label:"borderType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:a,help:Object(s.__)("Note: Border option is useful when one adds border color to the icons.","ultimate-addons-for-gutenberg")}),i.a.createElement(b.a,{label:Object(s.__)("Border Radius","ultimate-addons-for-gutenberg"),data:{desktop:{value:F,label:"borderRadius"},tablet:{value:R,label:"borderRadiusTablet"},mobile:{value:G,label:"borderRadiusMobile"}},min:0,max:100,unit:{value:W,label:"borderRadiusType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:a,help:Object(s.__)("Note: Border Radius option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")})),!H&&i.a.createElement(T.a,{title:Object(s.__)("Label","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(b.a,{label:Object(s.__)("Gap between Icon and Label","ultimate-addons-for-gutenberg"),data:{desktop:{value:x,label:"inner_gap"},tablet:{value:E,label:"innerGapTablet"},mobile:{value:k,label:"innerGapMobile"}},min:0,max:100,unit:{value:z,label:"innerGapType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:a}),i.a.createElement(r.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:re,label:"loadGoogleFonts"},fontFamily:{value:te,label:"fontFamily"},fontWeight:{value:ae,label:"fontWeight"},fontStyle:{value:se,label:"fontStyle"},transform:{value:ue,label:"fontTransform"},decoration:{value:ce,label:"fontDecoration"},fontSizeType:{value:Q,label:"fontSizeType"},fontSize:{value:X,label:"fontSize"},fontSizeMobile:{value:Y,label:"fontSizeMobile"},fontSizeTablet:{value:ee,label:"fontSizeTablet"},lineHeightType:{value:ie,label:"lineHeightType"},lineHeight:{value:ne,label:"lineHeight"},lineHeightMobile:{value:le,label:"lineHeightMobile"},lineHeightTablet:{value:oe,label:"lineHeightTablet"}})),i.a.createElement(T.a,{title:Object(s.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(b.a,{label:Object(s.__)("Gap between Items","ultimate-addons-for-gutenberg"),data:{desktop:{value:m,label:"gap"},tablet:{value:v,label:"gapTablet"},mobile:{value:C,label:"gapMobile"}},min:0,max:100,unit:{value:S,label:"gapType"},units:[{name:Object(s.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:a,help:Object(s.__)("Note: For better editing experience, the gap between items might look larger than applied. Viewing in frontend will show the actual results.","ultimate-addons-for-gutenberg")}))),i.a.createElement(h.b,O({},h.a.advance,{parentProps:e})))),fe)};t.default=i.a.memo(C)}}]);