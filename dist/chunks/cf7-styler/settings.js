(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[14],{199:function(e,t,a){"use strict";var l,o,i=a(25),n=a.n(i),r=a(200),s=a.n(r),u=a(2);if(void 0===g)var g=[];const d=e=>{const[t,a]=Object(u.useState)([]);Object(u.useEffect)(()=>{r()},[]),Object(u.useEffect)(()=>{const{onStatus:a,config:l}=e;void 0!==t.status&&a(t.status),l!==t.config&&r()},[e]);const l=()=>{a({status:"loading"})},o=e=>{g.includes(e)||g.push(e)},i=()=>{a({status:"active"})},n=()=>{a({status:"inactive"})},r=()=>{g.includes(e.config.google.families[0])||(s.a.load({...e.config,loading:l,active:i,inactive:n}),o(e.config.google.families[0]));const t=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==t.length||0!==a.length){const r=(t[0]||a[0]).getElementsByTagName("iframe")[0];r&&(s.a.load({...e.config,loading:l,active:i,inactive:n,context:null==r?void 0:r.contentWindow}),o(e.config.google.families[0]))}},{children:d}=e;return d||null};d.propTypes={config:null===(l=n.a.object)||void 0===l?void 0:l.isRequired,children:n.a.element,onStatus:null===(o=n.a.func)||void 0===o?void 0:o.isRequired},d.defaultProps={onStatus:()=>{}},t.a=d},200:function(e,t,a){var l;!function(){function o(e,t,a){return e.call.apply(e.bind,arguments)}function i(e,t,a){if(!e)throw Error();if(2<arguments.length){var l=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,l),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function n(e,t,a){return(n=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:i).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var u=!!window.FontFace;function g(e,t,a,l){if(t=e.c.createElement(t),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?t.style.cssText=a[o]:t.setAttribute(o,a[o]));return l&&t.appendChild(e.c.createTextNode(l)),t}function d(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function c(e,t,a){t=t||[],a=a||[];for(var l=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var i=!1,n=0;n<l.length;n+=1)if(t[o]===l[n]){i=!0;break}i||l.push(t[o])}for(t=[],o=0;o<l.length;o+=1){for(i=!1,n=0;n<a.length;n+=1)if(l[o]===a[n]){i=!0;break}i||t.push(l[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var a=e.className.split(/\s+/),l=0,o=a.length;l<o;l++)if(a[l]==t)return!0;return!1}function h(e,t,a){function l(){r&&o&&i&&(r(n),r=null)}t=g(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,i=!0,n=null,r=a||null;u?(t.onload=function(){o=!0,l()},t.onerror=function(){o=!0,n=Error("Stylesheet failed to load"),l()}):setTimeout((function(){o=!0,l()}),0),d(e,"head",t)}function m(e,t,a,l){var o=e.c.getElementsByTagName("head")[0];if(o){var i=g(e,"script",{src:t}),n=!1;return i.onload=i.onreadystatechange=function(){n||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(n=!0,a&&a(null),i.onload=i.onreadystatechange=null,"HEAD"==i.parentNode.tagName&&o.removeChild(i))},o.appendChild(i),setTimeout((function(){n||(n=!0,a&&a(Error("Script load timeout")))}),l||5e3),i}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function T(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function _(e){this.a=e||"-"}function C(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function S(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var l=e[a].replace(/['"]/g,"");-1!=l.indexOf(" ")||/^\d/.test(l)?t.push("'"+l+"'"):t.push(l)}return t.join(",")}function M(e){return e.a+e.f}function k(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function F(e){var t=4,a="n",l=null;return e&&((l=e.match(/(normal|oblique|italic)/i))&&l[1]&&(a=l[1].substr(0,1).toLowerCase()),(l=e.match(/([1-9]00|normal|bold)/i))&&l[1]&&(/bold/i.test(l[1])?t=7:/[1-9]00/.test(l[1])&&(t=parseInt(l[1].substr(0,1),10)))),a+t}function j(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new _("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function B(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),a=[],l=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),c(e.f,a,l)}L(e,"inactive")}function L(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,M(a)):e.h[t]())}function P(){this.c={}}function E(e,t){this.c=e,this.f=t,this.a=g(this.c,"span",{"aria-hidden":"true"},this.f)}function O(e){d(e.c,"body",e.a)}function w(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+S(e.c)+";font-style:"+k(e)+";font-weight:"+e.f+"00;"}function H(e,t,a,l,o,i){this.g=e,this.j=t,this.a=l,this.c=a,this.f=o||3e3,this.h=i||void 0}function z(e,t,a,l,o,i,n){this.v=e,this.B=t,this.c=a,this.a=l,this.s=n||"BESbswy",this.f={},this.w=o||3e3,this.u=i||null,this.m=this.j=this.h=this.g=null,this.g=new E(this.c,this.s),this.h=new E(this.c,this.s),this.j=new E(this.c,this.s),this.m=new E(this.c,this.s),e=w(e=new C(this.a.c+",serif",M(this.a))),this.g.a.style.cssText=e,e=w(e=new C(this.a.c+",sans-serif",M(this.a))),this.h.a.style.cssText=e,e=w(e=new C("serif",M(this.a))),this.j.a.style.cssText=e,e=w(e=new C("sans-serif",M(this.a))),this.m.a.style.cssText=e,O(this.g),O(this.h),O(this.j),O(this.m)}_.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},H.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),l=new Promise((function(l,o){!function i(){r()-a>=t.f?o():e.fonts.load(function(e){return k(e)+" "+e.f+"00 300px "+S(e.c)}(t.a),t.h).then((function(e){1<=e.length?l():setTimeout(i,25)}),(function(){o()}))}()})),o=null,i=new Promise((function(e,a){o=setTimeout(a,t.f)}));Promise.race([i,l]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var x={D:"serif",C:"sans-serif"},R=null;function D(){if(null===R){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);R=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return R}function A(e,t,a){for(var l in x)if(x.hasOwnProperty(l)&&t===e.f[x[l]]&&a===e.f[x[l]])return!0;return!1}function W(e,t){setTimeout(n((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function V(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,l=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(a=l===t.f.serif&&o===t.f["sans-serif"])||(a=D()&&A(t,l,o)),a?r()-t.A>=t.w?D()&&A(t,l,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?W(t,t.v):W(t,t.B):function(t){setTimeout(n((function(){e(this)}),t),50)}(t):W(t,t.v)}(this)};var I=null;function N(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&c(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),L(e,"active")):B(e.a))}function G(e){this.j=e,this.a=new P,this.h=0,this.f=this.g=!0}function U(e,t,a,l,o){var i=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=l||{};if(0===a.length&&i)B(t.a);else{t.f+=a.length,i&&(t.j=i);var s,u=[];for(s=0;s<a.length;s++){var g=a[s],d=r[g.c],b=t.a,f=g;if(b.g&&c(b.f,[b.a.c("wf",f.c,M(f).toString(),"loading")]),L(b,"fontloading",f),b=null,null===I)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);I=f?42<parseInt(f[1],10):!h}else I=!1;b=I?new H(n(t.g,t),n(t.h,t),t.c,g,t.s,d):new z(n(t.g,t),n(t.h,t),t.c,g,t.s,e,d),u.push(b)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}V.prototype.g=function(e){var t=this.a;t.g&&c(t.f,[t.a.c("wf",e.c,M(e).toString(),"active")],[t.a.c("wf",e.c,M(e).toString(),"loading"),t.a.c("wf",e.c,M(e).toString(),"inactive")]),L(t,"fontactive",e),this.m=!0,N(this)},V.prototype.h=function(e){var t=this.a;if(t.g){var a=f(t.f,t.a.c("wf",e.c,M(e).toString(),"active")),l=[],o=[t.a.c("wf",e.c,M(e).toString(),"loading")];a||l.push(t.a.c("wf",e.c,M(e).toString(),"inactive")),c(t.f,l,o)}L(t,"fontinactive",e),N(this)},G.prototype.load=function(e){this.c=new s(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var l=[],o=a.timeout;!function(e){e.g&&c(e.f,[e.a.c("wf","loading")]),L(e,"loading")}(t),l=function(e,t,a){var l,o=[];for(l in t)if(t.hasOwnProperty(l)){var i=e.c[l];i&&o.push(i(t[l],a))}return o}(e.a,a,e.c);var i=new V(e.c,t,o);for(e.h=l.length,t=0,a=l.length;t<a;t++)l[t].load((function(t,a,l){U(e,i,t,a,l)}))}(this,new j(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,l=t.a.version;if(a){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(l?"?v="+l:""),(function(l){l?e([]):(o["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(o["__mti_fntLst"+a]){var l,i=o["__mti_fntLst"+a](),n=[];if(i)for(var r=0;r<i.length;r++){var s=i[r].fontfamily;null!=i[r].fontStyle&&null!=i[r].fontWeight?(l=i[r].fontStyle+i[r].fontWeight,n.push(new C(s,l))):n.push(new C(s))}e(n)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,l=this.a.urls||[],o=this.a.families||[],i=this.a.testStrings||{},n=new p;for(t=0,a=l.length;t<a;t++)h(this.c,l[t],v(n));var r=[];for(t=0,a=o.length;t<a;t++)if((l=o[t].split(":"))[1])for(var s=l[1].split(","),u=0;u<s.length;u+=1)r.push(new C(l[0],s[u]));else r.push(new C(l[0]));T(n,(function(){e(r,i)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function le(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,l=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var a=t.length,l=0;l<a;l++){var o=t[l].split(":");3==o.length&&e.f.push(o.pop());var i="";2==o.length&&""!=o[1]&&(i=":"),e.a.push(o.join(i))}}(l,o);var i=new X(o);!function(e){for(var t=e.f.length,a=0;a<t;a++){var l=e.f[a].split(":"),o=l[0].replace(/\+/g," "),i=["n4"];if(2<=l.length){var n;if(n=[],r=l[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var g;if((g=r[u]).match(/^[\w-]+$/))if(null==(d=ee.exec(g.toLowerCase())))g="";else{if(g=null==(g=d[2])||""==g?"n":Z[g],null==(d=d[1])||""==d)d="4";else var d=Y[d]||(isNaN(d)?"4":d.substr(0,1));g=[g,d].join("")}else g="";g&&n.push(g)}0<n.length&&(i=n),3==l.length&&(n=[],0<(l=(l=l[2])?l.split(","):n).length&&(l=Q[l[0]])&&(e.c[o]=l))}for(e.c[o]||(l=Q[o])&&(e.c[o]=l),l=0;l<i.length;l+=1)e.a.push(new C(o,i[l]))}}(i),h(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],l=0;l<t;l++)a.push(e.a[l].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(l),v(t)),T(t,(function(){e(i.a,i.c,ae)}))},le.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var l=[],o=0;o<t.length;o+=2)for(var i=t[o],n=t[o+1],r=0;r<n.length;r++)l.push(new C(i,n[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(l)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,a=this.c.o,l=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var o=0,i=a.fonts.length;o<i;++o){var n=a.fonts[o];l.a.push(new C(n.name,F("font-weight:"+n.weight+";font-style:"+n.style)))}e(l.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var ie=new G(window);ie.a.c.custom=function(e,t){return new $(t,e)},ie.a.c.fontdeck=function(e,t){return new oe(t,e)},ie.a.c.monotype=function(e,t){return new q(t,e)},ie.a.c.typekit=function(e,t){return new le(t,e)},ie.a.c.google=function(e,t){return new te(t,e)};var ne={load:n(ie.load,ie)};void 0===(l=function(){return ne}.call(t,a,t,e))||(e.exports=l)}()},498:function(e,t,a){"use strict";a.r(t);var l=a(0),o=a.n(l),i=a(1),n=a(9),r=a(199),s=a(34),u=a(77),g=a(17),d=a(79),b=a(26),c=a(33),f=a(19),h=a(20),m=a(56),p=a(12),v=a(24),T=a(4),y=a(6),_=a(16);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const S=e=>{e=e.parentProps;const{setAttributes:t,attributes:a,deviceType:S}=e,{formId:M,align:k,fieldStyle:F,fieldBgColor:j,fieldLabelColor:B,fieldInputColor:L,fieldBorderStyle:P,fieldBorderWidth:E,fieldBorderRadius:O,fieldBorderColor:w,fieldBorderFocusColor:H,buttonAlignment:z,buttonTextColor:x,buttonBgColor:R,buttonTextHoverColor:D,buttonBgHoverColor:A,buttonBorderStyle:W,buttonBorderWidth:V,buttonBorderRadius:I,buttonBorderColor:N,buttonBorderHoverColor:G,fieldSpacing:U,fieldSpacingTablet:q,fieldSpacingMobile:$,fieldLabelSpacing:J,fieldLabelSpacingTablet:K,fieldLabelSpacingMobile:X,labelFontSize:Q,labelFontSizeType:Y,labelFontSizeTablet:Z,labelFontSizeMobile:ee,labelFontFamily:te,labelFontWeight:ae,labelLineHeightType:le,labelLineHeight:oe,labelLineHeightTablet:ie,labelLineHeightMobile:ne,labelLoadGoogleFonts:re,inputFontSize:se,inputFontSizeType:ue,inputFontSizeTablet:ge,inputFontSizeMobile:de,inputFontFamily:be,inputFontWeight:ce,inputLineHeightType:fe,inputLineHeight:he,inputLineHeightTablet:me,inputLineHeightMobile:pe,inputLoadGoogleFonts:ve,buttonFontSize:Te,buttonFontSizeType:ye,buttonFontSizeTablet:_e,buttonFontSizeMobile:Ce,buttonFontFamily:Se,buttonFontWeight:Me,buttonLineHeightType:ke,buttonLineHeight:Fe,buttonLineHeightTablet:je,buttonLineHeightMobile:Be,buttonLoadGoogleFonts:Le,enableOveride:Pe,radioCheckSize:Ee,radioCheckSizeTablet:Oe,radioCheckSizeMobile:we,radioCheckBgColor:He,radioCheckSelectColor:ze,radioCheckLableColor:xe,radioCheckBorderColor:Re,radioCheckBorderWidth:De,radioCheckBorderWidthTablet:Ae,radioCheckBorderWidthMobile:We,radioCheckBorderWidthUnit:Ve,radioCheckBorderRadius:Ie,radioCheckFontSize:Ne,radioCheckFontSizeType:Ge,radioCheckFontSizeTablet:Ue,radioCheckFontSizeMobile:qe,radioCheckFontFamily:$e,radioCheckFontWeight:Je,radioCheckLineHeightType:Ke,radioCheckLineHeight:Xe,radioCheckLineHeightTablet:Qe,radioCheckLineHeightMobile:Ye,radioCheckLoadGoogleFonts:Ze,validationMsgPosition:et,validationMsgColor:tt,validationMsgBgColor:at,enableHighlightBorder:lt,highlightBorderColor:ot,validationMsgFontSize:it,validationMsgFontSizeType:nt,validationMsgFontSizeTablet:rt,validationMsgFontSizeMobile:st,validationMsgFontFamily:ut,validationMsgFontWeight:gt,validationMsgLineHeightType:dt,validationMsgLineHeight:bt,validationMsgLineHeightTablet:ct,validationMsgLineHeightMobile:ft,validationMsgLoadGoogleFonts:ht,successMsgColor:mt,successMsgBgColor:pt,successMsgBorderColor:vt,errorMsgColor:Tt,errorMsgBgColor:yt,errorMsgBorderColor:_t,msgBorderSize:Ct,msgBorderSizeUnit:St,msgBorderRadius:Mt,msgFontSize:kt,msgFontSizeType:Ft,msgFontSizeTablet:jt,msgFontSizeMobile:Bt,msgFontFamily:Lt,msgFontWeight:Pt,msgLineHeightType:Et,msgLineHeight:Ot,msgLineHeightTablet:wt,msgLineHeightMobile:Ht,msgLoadGoogleFonts:zt,radioCheckBorderRadiusType:xt,msgBorderRadiusType:Rt,fieldBorderRadiusType:Dt,buttonBorderRadiusType:At,messageTopPaddingDesktop:Wt,messageRightPaddingDesktop:Vt,messageBottomPaddingDesktop:It,messageLeftPaddingDesktop:Nt,messageTopPaddingTablet:Gt,messageRightPaddingTablet:Ut,messageBottomPaddingTablet:qt,messageLeftPaddingTablet:$t,messageTopPaddingMobile:Jt,messageRightPaddingMobile:Kt,messageBottomPaddingMobile:Xt,messageLeftPaddingMobile:Qt,messagePaddingTypeDesktop:Yt,messagePaddingTypeTablet:Zt,messagePaddingTypeMobile:ea,messageSpacingLink:ta,buttonTopPaddingDesktop:aa,buttonRightPaddingDesktop:la,buttonBottomPaddingDesktop:oa,buttonLeftPaddingDesktop:ia,buttonTopPaddingTablet:na,buttonRightPaddingTablet:ra,buttonBottomPaddingTablet:sa,buttonLeftPaddingTablet:ua,buttonTopPaddingMobile:ga,buttonRightPaddingMobile:da,buttonBottomPaddingMobile:ba,buttonLeftPaddingMobile:ca,buttonPaddingTypeDesktop:fa,buttonPaddingTypeTablet:ha,buttonPaddingTypeMobile:ma,buttonSpacingLink:pa,fieldTopPaddingDesktop:va,fieldRightPaddingDesktop:Ta,fieldBottomPaddingDesktop:ya,fieldLeftPaddingDesktop:_a,fieldTopPaddingTablet:Ca,fieldRightPaddingTablet:Sa,fieldBottomPaddingTablet:Ma,fieldLeftPaddingTablet:ka,fieldTopPaddingMobile:Fa,fieldRightPaddingMobile:ja,fieldBottomPaddingMobile:Ba,fieldLeftPaddingMobile:La,fieldPaddingTypeDesktop:Pa,fieldPaddingTypeMobile:Ea,fieldPaddingTypeTablet:Oa,fieldSpacingLink:wa,labelFontStyle:Ha,labelTransform:za,labelDecoration:xa,inputFontStyle:Ra,inputTransform:Da,inputDecoration:Aa,buttonFontStyle:Wa,buttonTransform:Va,buttonDecoration:Ia,radioCheckFontStyle:Na,radioCheckTransform:Ga,radioCheckDecoration:Ua,validationMsgFontStyle:qa,validationMsgTransform:$a,validationMsgDecoration:Ja,msgFontStyle:Ka,msgTransform:Xa,msgDecoration:Qa}=a;let Ya,Za,el,tl,al,ll;if(!0===re){const e={google:{families:[te+(ae?":"+ae:"")]}};el=o.a.createElement(r.a,{config:e})}if(!0===ve){const e={google:{families:[be+(ce?":"+ce:"")]}};Ya=o.a.createElement(r.a,{config:e})}if(!0===Le){const e={google:{families:[Se+(Me?":"+Me:"")]}};Za=o.a.createElement(r.a,{config:e})}if(!0===Ze){const e={google:{families:[$e+(Je?":"+Je:"")]}};tl=o.a.createElement(r.a,{config:e})}if(!0===ht){const e={google:{families:[ut+(gt?":"+gt:"")]}};al=o.a.createElement(r.a,{config:e})}if(!0===zt){const e={google:{families:[Lt+(Pt?":"+Pt:"")]}};ll=o.a.createElement(r.a,{config:e})}const ol=o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{label:Object(i.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:x,onColorChange:e=>t({buttonTextColor:e})}),o.a.createElement(g.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:R,onColorChange:e=>t({buttonBgColor:e})})),il=o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{label:Object(i.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:D,onColorChange:e=>t({buttonTextHoverColor:e})}),o.a.createElement(g.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:A,onColorChange:e=>t({buttonBgHoverColor:e})})),nl=o.a.createElement(_.a,{title:Object(i.__)("General","ultimate-addons-for-gutenberg")},o.a.createElement(y.SelectControl,{label:Object(i.__)("Select Form","ultimate-addons-for-gutenberg"),value:M,onChange:e=>{if(!e)return t({isHtml:!1}),void t({formId:null});t({isHtml:!1}),t({formId:e})},options:uagb_blocks_info.cf7_forms}),o.a.createElement(h.a,{setAttributes:t,label:Object(i.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:k,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(y.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(i.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(y.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(i.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(y.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(i.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),rl=o.a.createElement(_.a,{title:Object(i.__)("Field","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(h.a,{setAttributes:t,label:Object(i.__)("Style","ultimate-addons-for-gutenberg"),data:{value:F,label:"fieldStyle"},options:[{value:"box",label:Object(i.__)("Box","ultimate-addons-for-gutenberg")},{value:"underline",label:Object(i.__)("Underline","ultimate-addons-for-gutenberg")}]})),sl=o.a.createElement(_.a,{title:Object(i.__)("Radio & Checkbox","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(y.ToggleControl,{label:Object(i.__)("Override Current Style","ultimate-addons-for-gutenberg"),checked:Pe,onChange:()=>t({enableOveride:!Pe})})),ul=o.a.createElement(_.a,{title:Object(i.__)("Success/Error Message","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"uagb-settings-notice"},Object(i.__)("Note: This styling can be only seen at frontend","ultimate-addons-for-gutenberg")),o.a.createElement(h.a,{setAttributes:t,label:Object(i.__)("Validation Message Position","ultimate-addons-for-gutenberg"),data:{value:et,label:"validationMsgPosition"},options:[{value:"default",label:Object(i.__)("Default","ultimate-addons-for-gutenberg")},{value:"bottom_right",label:Object(i.__)("Bottom Right Side of Field","ultimate-addons-for-gutenberg")}]}),o.a.createElement(y.ToggleControl,{label:Object(i.__)("Highlight Borders","ultimate-addons-for-gutenberg"),checked:lt,onChange:()=>t({enableHighlightBorder:!lt})})),gl=o.a.createElement(_.a,{title:Object(i.__)("Submit Button","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(h.a,{setAttributes:t,label:Object(i.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:z,label:"buttonAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(y.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(i.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(y.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(i.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(y.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(i.__)("Right","ultimate-addons-for-gutenberg")},{value:"justify",icon:o.a.createElement(y.Icon,{icon:Object(p.a)("fa fa-align-justify")}),tooltip:Object(i.__)("Justified","ultimate-addons-for-gutenberg")}],showIcons:!0})),dl=o.a.createElement(_.a,{title:Object(i.__)("Label & Input","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(g.a,{label:Object(i.__)("Label Color","ultimate-addons-for-gutenberg"),colorValue:B,onColorChange:e=>t({fieldLabelColor:e})}),o.a.createElement(s.a,{label:Object(i.__)("Label Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:re,label:"labelLoadGoogleFonts"},fontFamily:{value:te,label:"labelFontFamily"},fontWeight:{value:ae,label:"labelFontWeight"},fontStyle:{value:Ha,label:"labelFontStyle"},transform:{value:za,label:"labelTransform"},decoration:{value:xa,label:"labelDecoration"},fontSizeType:{value:Y,label:"labelFontSizeType"},fontSize:{value:Q,label:"labelFontSize"},fontSizeMobile:{value:ee,label:"labelFontSizeMobile"},fontSizeTablet:{value:Z,label:"labelFontSizeTablet"},lineHeightType:{value:le,label:"labelLineHeightType"},lineHeight:{value:oe,label:"labelLineHeight"},lineHeightMobile:{value:ne,label:"labelLineHeightMobile"},lineHeightTablet:{value:ie,label:"labelLineHeightTablet"}}),o.a.createElement(g.a,{label:Object(i.__)("Input Color","ultimate-addons-for-gutenberg"),colorValue:L,onColorChange:e=>t({fieldInputColor:e})}),o.a.createElement(s.a,{label:Object(i.__)("Input Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:ve,label:"inputLoadGoogleFonts"},fontFamily:{value:be,label:"inputFontFamily"},fontWeight:{value:ce,label:"inputFontWeight"},fontStyle:{value:Ra,label:"inputFontStyle"},transform:{value:Da,label:"inputTransform"},decoration:{value:Aa,label:"inputDecoration"},fontSizeType:{value:ue,label:"inputFontSizeType"},fontSize:{value:se,label:"inputFontSize"},fontSizeMobile:{value:de,label:"inputFontSizeMobile"},fontSizeTablet:{value:ge,label:"inputFontSizeTablet"},lineHeightType:{value:fe,label:"inputLineHeightType"},lineHeight:{value:he,label:"inputLineHeight"},lineHeightMobile:{value:pe,label:"inputLineHeightMobile"},lineHeightTablet:{value:me,label:"inputLineHeightTablet"}}),o.a.createElement(g.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:j,onColorChange:e=>t({fieldBgColor:e})}),o.a.createElement(v.a,{label:Object(i.__)("Label & Input Gap","ultimate-addons-for-gutenberg"),data:{desktop:{value:J,label:"fieldLabelSpacing"},tablet:{value:K,label:"fieldLabelSpacingTablet"},mobile:{value:X,label:"fieldLabelSpacingMobile"}},min:0,max:30,displayUnit:!1,setAttributes:t})),bl=o.a.createElement(_.a,{title:Object(i.__)("Field","ultimate-addons-for-gutenberg"),initialOpen:!0},"box"===F&&o.a.createElement(u.a,{disabledBorderTitle:!1,setAttributes:t,prefix:"field",attributes:a,deviceType:S,disableBottomSeparator:!0}),o.a.createElement(v.a,{label:Object(i.__)("Fields Space","ultimate-addons-for-gutenberg"),data:{desktop:{value:U,label:"fieldSpacing"},tablet:{value:q,label:"fieldSpacingTablet"},mobile:{value:$,label:"fieldSpacingMobile"}},min:0,max:50,displayUnit:!1,setAttributes:t}),o.a.createElement(c.a,C({},e,{label:Object(i.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:va,label:"fieldTopPaddingDesktop"},valueRight:{value:Ta,label:"fieldRightPaddingDesktop"},valueBottom:{value:ya,label:"fieldBottomPaddingDesktop"},valueLeft:{value:_a,label:"fieldLeftPaddingDesktop"},valueTopTablet:{value:Ca,label:"fieldTopPaddingTablet"},valueRightTablet:{value:Sa,label:"fieldRightPaddingTablet"},valueBottomTablet:{value:Ma,label:"fieldBottomPaddingTablet"},valueLeftTablet:{value:ka,label:"fieldLeftPaddingTablet"},valueTopMobile:{value:Fa,label:"fieldTopPaddingMobile"},valueRightMobile:{value:ja,label:"fieldRightPaddingMobile"},valueBottomMobile:{value:Ba,label:"fieldBottomPaddingMobile"},valueLeftMobile:{value:La,label:"fieldLeftPaddingMobile"},unit:{value:Pa,label:"fieldPaddingTypeDesktop"},mUnit:{value:Ea,label:"fieldPaddingTypeMobile"},tUnit:{value:Oa,label:"fieldPaddingTypeTablet"},attributes:a,setAttributes:t,link:{value:wa,label:"fieldSpacingLink"}}))),cl=o.a.createElement(_.a,{title:Object(i.__)("Radio & Checkbox","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(v.a,{label:Object(i.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:Ee,label:"radioCheckSize"},tablet:{value:Oe,label:"radioCheckSizeTablet"},mobile:{value:we,label:"radioCheckSizeMobile"}},min:0,max:50,displayUnit:!1,setAttributes:t}),o.a.createElement(g.a,{label:Object(i.__)("Label Color","ultimate-addons-for-gutenberg"),colorValue:xe,onColorChange:e=>t({radioCheckLableColor:e})}),o.a.createElement(s.a,{label:Object(i.__)("Label Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:Ze,label:"radioCheckLoadGoogleFonts"},fontFamily:{value:$e,label:"radioCheckFontFamily"},fontWeight:{value:Je,label:"radioCheckFontWeight"},fontStyle:{value:Na,label:"radioCheckFontStyle"},transform:{value:Ga,label:"radioCheckTransform"},decoration:{value:Ua,label:"radioCheckDecoration"},fontSizeType:{value:Ge,label:"radioCheckFontSizeType"},fontSize:{value:Ne,label:"radioCheckFontSize"},fontSizeMobile:{value:qe,label:"radioCheckFontSizeMobile"},fontSizeTablet:{value:Ue,label:"radioCheckFontSizeTablet"},lineHeightType:{value:Ke,label:"radioCheckLineHeightType"},lineHeight:{value:Xe,label:"radioCheckLineHeight"},lineHeightMobile:{value:Ye,label:"radioCheckLineHeightMobile"},lineHeightTablet:{value:Qe,label:"radioCheckLineHeightTablet"}}),o.a.createElement(g.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:He,onColorChange:e=>t({radioCheckBgColor:e})}),o.a.createElement(g.a,{label:Object(i.__)("Selected Color","ultimate-addons-for-gutenberg"),colorValue:ze,onColorChange:e=>t({radioCheckSelectColor:e})}),"none"!==P&&o.a.createElement(o.a.Fragment,null,o.a.createElement(v.a,{label:Object(i.__)("Border Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:De,label:"radioCheckBorderWidth"},tablet:{value:Ae,label:"radioCheckBorderWidthTablet"},mobile:{value:We,label:"radioCheckBorderWidthMobile"}},min:0,max:50,unit:{value:Ve,label:"radioCheckBorderWidthUnit"},units:[{name:Object(i.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}],setAttributes:t}),o.a.createElement(g.a,{label:Object(i.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Re,onColorChange:e=>t({radioCheckBorderColor:e})})),o.a.createElement(f.a,{label:Object(i.__)("Checkbox Rounded Corners","ultimate-addons-for-gutenberg"),setAttributes:t,value:Ie,onChange:e=>t({radioCheckBorderRadius:e}),min:0,max:100,unit:{value:xt,label:"radioCheckBorderRadiusType"},units:[{name:Object(i.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(i.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})),fl=o.a.createElement(_.a,{title:Object(i.__)("Submit Button","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(m.a,{tabs:[{name:"normal",title:Object(i.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(i.__)("Hover","ultimate-addons-for-gutenberg")}],normal:ol,hover:il,disableBottomSeparator:!1}),o.a.createElement(u.a,{setAttributes:t,prefix:"button",attributes:a,deviceType:S,disableBottomSeparator:!0,disabledBorderTitle:!1}),o.a.createElement(s.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:Le,label:"buttonLoadGoogleFonts"},fontFamily:{value:Se,label:"buttonFontFamily"},fontWeight:{value:Me,label:"buttonFontWeight"},fontStyle:{value:Wa,label:"buttonFontStyle"},transform:{value:Va,label:"buttonTransform"},decoration:{value:Ia,label:"buttonDecoration"},fontSizeType:{value:ye,label:"buttonFontSizeType"},fontSize:{value:Te,label:"buttonFontSize"},fontSizeMobile:{value:Ce,label:"buttonFontSizeMobile"},fontSizeTablet:{value:_e,label:"buttonFontSizeTablet"},lineHeightType:{value:ke,label:"buttonLineHeightType"},lineHeight:{value:Fe,label:"buttonLineHeight"},lineHeightMobile:{value:Be,label:"buttonLineHeightMobile"},lineHeightTablet:{value:je,label:"buttonLineHeightTablet"}}),o.a.createElement(c.a,C({},e,{label:Object(i.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:aa,label:"buttonTopPaddingDesktop"},valueRight:{value:la,label:"buttonRightPaddingDesktop"},valueBottom:{value:oa,label:"buttonBottomPaddingDesktop"},valueLeft:{value:ia,label:"buttonLeftPaddingDesktop"},valueTopTablet:{value:na,label:"buttonTopPaddingTablet"},valueRightTablet:{value:ra,label:"buttonRightPaddingTablet"},valueBottomTablet:{value:sa,label:"buttonBottomPaddingTablet"},valueLeftTablet:{value:ua,label:"buttonLeftPaddingTablet"},valueTopMobile:{value:ga,label:"buttonTopPaddingMobile"},valueRightMobile:{value:da,label:"buttonRightPaddingMobile"},valueBottomMobile:{value:ba,label:"buttonBottomPaddingMobile"},valueLeftMobile:{value:ca,label:"buttonLeftPaddingMobile"},unit:{value:fa,label:"buttonPaddingTypeDesktop"},mUnit:{value:ma,label:"buttonPaddingTypeMobile"},tUnit:{value:ha,label:"buttonPaddingTypeTablet"},attributes:a,setAttributes:t,link:{value:pa,label:"buttonSpacingLink"}}))),hl=o.a.createElement(_.a,{title:Object(i.__)("Success/Error Message","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement("p",{className:"uagb-settings-notice"},Object(i.__)("Note: This styling can be only seen at frontend","ultimate-addons-for-gutenberg")),o.a.createElement(g.a,{label:Object(i.__)("Validation Message Color","ultimate-addons-for-gutenberg"),colorValue:tt,onColorChange:e=>t({validationMsgColor:e})}),o.a.createElement(s.a,{label:Object(i.__)("Validation Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:ht,label:"validationMsgLoadGoogleFonts"},fontFamily:{value:ut,label:"validationMsgFontFamily"},fontWeight:{value:gt,label:"validationMsgFontWeight"},fontStyle:{value:qa,label:"validationMsgFontStyle"},transform:{value:$a,label:"validationMsgTransform"},decoration:{value:Ja,label:"validationMsgDecoration"},fontSizeType:{value:nt,label:"validationMsgFontSizeType"},fontSize:{value:it,label:"validationMsgFontSize"},fontSizeMobile:{value:st,label:"validationMsgFontSizeMobile"},fontSizeTablet:{value:rt,label:"validationMsgFontSizeTablet"},lineHeightType:{value:dt,label:"validationMsgLineHeightType"},lineHeight:{value:bt,label:"validationMsgLineHeight"},lineHeightMobile:{value:ft,label:"validationMsgLineHeightMobile"},lineHeightTablet:{value:ct,label:"validationMsgLineHeightTablet"}}),"bottom_right"===et&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{label:Object(i.__)("Message Background Color","ultimate-addons-for-gutenberg"),colorValue:at,onColorChange:e=>t({validationMsgBgColor:e})})),lt&&o.a.createElement(o.a.Fragment,null,o.a.createElement(g.a,{label:Object(i.__)("Highlight Border Color","ultimate-addons-for-gutenberg"),colorValue:ot,onColorChange:e=>t({highlightBorderColor:e})})),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(i.__)("Success/Error Message","ultimate-addons-for-gutenberg")),o.a.createElement(s.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:t,loadGoogleFonts:{value:zt,label:"msgLoadGoogleFonts"},fontFamily:{value:Lt,label:"msgFontFamily"},fontWeight:{value:Pt,label:"msgFontWeight"},fontStyle:{value:Ka,label:"msgFontStyle"},transform:{value:Xa,label:"msgTransform"},decoration:{value:Qa,label:"msgDecoration"},fontSizeType:{value:Ft,label:"msgFontSizeType"},fontSize:{value:kt,label:"msgFontSize"},fontSizeMobile:{value:Bt,label:"msgFontSizeMobile"},fontSizeTablet:{value:jt,label:"msgFontSizeTablet"},lineHeightType:{value:Et,label:"msgLineHeightType"},lineHeight:{value:Ot,label:"msgLineHeight"},lineHeightMobile:{value:Ht,label:"msgLineHeightMobile"},lineHeightTablet:{value:wt,label:"msgLineHeightTablet"}}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(i.__)("Success Message","ultimate-addons-for-gutenberg")),o.a.createElement(g.a,{label:Object(i.__)("Color","ultimate-addons-for-gutenberg"),colorValue:mt,onColorChange:e=>t({successMsgColor:e})}),o.a.createElement(g.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:pt,onColorChange:e=>t({successMsgBgColor:e})}),o.a.createElement(g.a,{label:Object(i.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:vt,onColorChange:e=>t({successMsgBorderColor:e})}),o.a.createElement("hr",{className:"uagb-editor__separator"}),o.a.createElement("h2",null,Object(i.__)("Error Message","ultimate-addons-for-gutenberg")),o.a.createElement(g.a,{label:Object(i.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Tt,onColorChange:e=>t({errorMsgColor:e})}),o.a.createElement(g.a,{label:Object(i.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:yt,onColorChange:e=>t({errorMsgBgColor:e})}),o.a.createElement(g.a,{label:Object(i.__)("Border Color","ultimate-addons-for-gutenberg"),colorValue:_t,onColorChange:e=>t({errorMsgBorderColor:e})}),o.a.createElement(f.a,{label:Object(i.__)("Border Width","ultimate-addons-for-gutenberg"),setAttributes:t,value:Ct,onChange:e=>t({msgBorderSize:e}),min:0,max:50,unit:{value:St,label:"msgBorderSizeUnit"},units:[{name:Object(i.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"}]}),o.a.createElement(f.a,{label:Object(i.__)("Border Radius","ultimate-addons-for-gutenberg"),setAttributes:t,value:Mt,onChange:e=>t({msgBorderRadius:e}),min:0,max:100,unit:{value:Rt,label:"msgBorderRadiusType"},units:[{name:Object(i.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(i.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),o.a.createElement(c.a,C({},e,{label:Object(i.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Wt,label:"messageTopPaddingDesktop"},valueRight:{value:Vt,label:"messageRightPaddingDesktop"},valueBottom:{value:It,label:"messageBottomPaddingDesktop"},valueLeft:{value:Nt,label:"messageLeftPaddingDesktop"},valueTopTablet:{value:Gt,label:"messageTopPaddingTablet"},valueRightTablet:{value:Ut,label:"messageRightPaddingTablet"},valueBottomTablet:{value:qt,label:"messageBottomPaddingTablet"},valueLeftTablet:{value:$t,label:"messageLeftPaddingTablet"},valueTopMobile:{value:Jt,label:"messageTopPaddingMobile"},valueRightMobile:{value:Kt,label:"messageRightPaddingMobile"},valueBottomMobile:{value:Xt,label:"messageBottomPaddingMobile"},valueLeftMobile:{value:Qt,label:"messageLeftPaddingMobile"},unit:{value:Yt,label:"messagePaddingTypeDesktop"},mUnit:{value:ea,label:"messagePaddingTypeMobile"},tUnit:{value:Zt,label:"messagePaddingTypeTablet"},attributes:a,setAttributes:t,link:{value:ta,label:"messageSpacingLink"}})));return o.a.createElement(l.Suspense,{fallback:Object(n.a)()},o.a.createElement(T.BlockControls,{key:"controls"},o.a.createElement(T.AlignmentToolbar,{value:k,onChange:e=>t({align:e})})),o.a.createElement(T.InspectorControls,null,o.a.createElement(d.a,null,o.a.createElement(b.b,b.a.general,nl,rl,sl,gl,ul),o.a.createElement(b.b,b.a.style,bl,dl,Pe&&cl,fl,hl),o.a.createElement(b.b,C({},b.a.advance,{parentProps:e})))),Ya,Za,el,tl,al,ll)};t.default=o.a.memo(S)}}]);