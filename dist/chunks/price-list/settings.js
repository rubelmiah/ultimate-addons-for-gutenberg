(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[86],{268:function(e,t,a){"use strict";var i=a(32),n=a.n(i),l=a(269),o=a.n(l),r=a(3);if(void 0===c)var c=[];const s=e=>{const[t,a]=Object(r.useState)([]);Object(r.useEffect)(()=>{s()},[]),Object(r.useEffect)(()=>{const{onStatus:a,config:i}=e;void 0!==t.status&&a(t.status),i!==t.config&&s()},[e]);const i=()=>{a({status:"loading"})},n=()=>{a({status:"active"})},l=()=>{a({status:"inactive"})},s=()=>{var t;c.includes(e.config.google.families[0])||(o.a.load({...e.config,loading:i,active:n,inactive:l}),t=e.config.google.families[0],c.includes(t)||c.push(t))},{children:u}=e;return u||null};s.propTypes={config:n.a.object.isRequired,children:n.a.element,onStatus:n.a.func.isRequired},s.defaultProps={onStatus:()=>{}},t.a=s},269:function(e,t,a){var i;!function(){function n(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,i),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function o(e,t,a){return(o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?n:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function c(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function u(e,t,a,i){if(t=e.c.createElement(t),a)for(var n in a)a.hasOwnProperty(n)&&("style"==n?t.style.cssText=a[n]:t.setAttribute(n,a[n]));return i&&t.appendChild(e.c.createTextNode(i)),t}function g(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function b(e){e.parentNode&&e.parentNode.removeChild(e)}function f(e,t,a){t=t||[],a=a||[];for(var i=e.className.split(/\s+/),n=0;n<t.length;n+=1){for(var l=!1,o=0;o<i.length;o+=1)if(t[n]===i[o]){l=!0;break}l||i.push(t[n])}for(t=[],n=0;n<i.length;n+=1){for(l=!1,o=0;o<a.length;o+=1)if(i[n]===a[o]){l=!0;break}l||t.push(i[n])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(e,t){for(var a=e.className.split(/\s+/),i=0,n=a.length;i<n;i++)if(a[i]==t)return!0;return!1}function d(e,t,a){function i(){r&&n&&l&&(r(o),r=null)}t=u(e,"link",{rel:"stylesheet",href:t,media:"all"});var n=!1,l=!0,o=null,r=a||null;s?(t.onload=function(){n=!0,i()},t.onerror=function(){n=!0,o=Error("Stylesheet failed to load"),i()}):setTimeout((function(){n=!0,i()}),0),g(e,"head",t)}function m(e,t,a,i){var n=e.c.getElementsByTagName("head")[0];if(n){var l=u(e,"script",{src:t}),o=!1;return l.onload=l.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&n.removeChild(l))},n.appendChild(l),setTimeout((function(){o||(o=!0,a&&a(Error("Script load timeout")))}),i||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,T(e)}}function _(e,t){e.c=t,T(e)}function T(e){0==e.a&&e.c&&(e.c(),e.c=null)}function y(e){this.a=e||"-"}function w(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function j(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var i=e[a].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?t.push("'"+i+"'"):t.push(i)}return t.join(",")}function S(e){return e.a+e.f}function O(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function P(e){var t=4,a="n",i=null;return e&&((i=e.match(/(normal|oblique|italic)/i))&&i[1]&&(a=i[1].substr(0,1).toLowerCase()),(i=e.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?t=7:/[1-9]00/.test(i[1])&&(t=parseInt(i[1].substr(0,1),10)))),a+t}function F(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new y("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function E(e){if(e.g){var t=h(e.f,e.a.c("wf","active")),a=[],i=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),f(e.f,a,i)}L(e,"inactive")}function L(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,S(a)):e.h[t]())}function M(){this.c={}}function C(e,t){this.c=e,this.f=t,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function H(e){g(e.c,"body",e.a)}function k(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(e.c)+";font-style:"+O(e)+";font-weight:"+e.f+"00;"}function z(e,t,a,i,n,l){this.g=e,this.j=t,this.a=i,this.c=a,this.f=n||3e3,this.h=l||void 0}function x(e,t,a,i,n,l,o){this.v=e,this.B=t,this.c=a,this.a=i,this.s=o||"BESbswy",this.f={},this.w=n||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new C(this.c,this.s),this.h=new C(this.c,this.s),this.j=new C(this.c,this.s),this.m=new C(this.c,this.s),e=k(e=new w(this.a.c+",serif",S(this.a))),this.g.a.style.cssText=e,e=k(e=new w(this.a.c+",sans-serif",S(this.a))),this.h.a.style.cssText=e,e=k(e=new w("serif",S(this.a))),this.j.a.style.cssText=e,e=k(e=new w("sans-serif",S(this.a))),this.m.a.style.cssText=e,H(this.g),H(this.h),H(this.j),H(this.m)}y.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},z.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),i=new Promise((function(i,n){!function l(){r()-a>=t.f?n():e.fonts.load(function(e){return O(e)+" "+e.f+"00 300px "+j(e.c)}(t.a),t.h).then((function(e){1<=e.length?i():setTimeout(l,25)}),(function(){n()}))}()})),n=null,l=new Promise((function(e,a){n=setTimeout(a,t.f)}));Promise.race([l,i]).then((function(){n&&(clearTimeout(n),n=null),t.g(t.a)}),(function(){t.j(t.a)}))};var A={D:"serif",C:"sans-serif"},B=null;function W(){if(null===B){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);B=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return B}function R(e,t,a){for(var i in A)if(A.hasOwnProperty(i)&&t===e.f[A[i]]&&a===e.f[A[i]])return!0;return!1}function I(e,t){setTimeout(o((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),t(this.a)}),e),0)}function G(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}x.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,i=t.g.a.offsetWidth,n=t.h.a.offsetWidth;(a=i===t.f.serif&&n===t.f["sans-serif"])||(a=W()&&R(t,i,n)),a?r()-t.A>=t.w?W()&&R(t,i,n)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?I(t,t.v):I(t,t.B):function(t){setTimeout(o((function(){e(this)}),t),50)}(t):I(t,t.v)}(this)};var N=null;function U(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&f(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),L(e,"active")):E(e.a))}function D(e){this.j=e,this.a=new M,this.h=0,this.f=this.g=!0}function V(e,t,a,i,n){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=n||null,r=i||{};if(0===a.length&&l)E(t.a);else{t.f+=a.length,l&&(t.j=l);var c,s=[];for(c=0;c<a.length;c++){var u=a[c],g=r[u.c],b=t.a,h=u;if(b.g&&f(b.f,[b.a.c("wf",h.c,S(h).toString(),"loading")]),L(b,"fontloading",h),b=null,null===N)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);N=h?42<parseInt(h[1],10):!d}else N=!1;b=N?new z(o(t.g,t),o(t.h,t),t.c,u,t.s,g):new x(o(t.g,t),o(t.h,t),t.c,u,t.s,e,g),s.push(b)}for(c=0;c<s.length;c++)s[c].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}G.prototype.g=function(e){var t=this.a;t.g&&f(t.f,[t.a.c("wf",e.c,S(e).toString(),"active")],[t.a.c("wf",e.c,S(e).toString(),"loading"),t.a.c("wf",e.c,S(e).toString(),"inactive")]),L(t,"fontactive",e),this.m=!0,U(this)},G.prototype.h=function(e){var t=this.a;if(t.g){var a=h(t.f,t.a.c("wf",e.c,S(e).toString(),"active")),i=[],n=[t.a.c("wf",e.c,S(e).toString(),"loading")];a||i.push(t.a.c("wf",e.c,S(e).toString(),"inactive")),f(t.f,i,n)}L(t,"fontinactive",e),U(this)},D.prototype.load=function(e){this.c=new c(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var i=[],n=a.timeout;!function(e){e.g&&f(e.f,[e.a.c("wf","loading")]),L(e,"loading")}(t),i=function(e,t,a){var i,n=[];for(i in t)if(t.hasOwnProperty(i)){var l=e.c[i];l&&n.push(l(t[i],a))}return n}(e.a,a,e.c);var l=new G(e.c,t,n);for(e.h=i.length,t=0,a=i.length;t<a;t++)i[t].load((function(t,a,i){V(e,l,t,a,i)}))}(this,new F(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,i=t.a.version;if(a){var n=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(i?"?v="+i:""),(function(i){i?e([]):(n["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(n["__mti_fntLst"+a]){var i,l=n["__mti_fntLst"+a](),o=[];if(l)for(var r=0;r<l.length;r++){var c=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(i=l[r].fontStyle+l[r].fontWeight,o.push(new w(c,i))):o.push(new w(c))}e(o)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,i=this.a.urls||[],n=this.a.families||[],l=this.a.testStrings||{},o=new p;for(t=0,a=i.length;t<a;t++)d(this.c,i[t],v(o));var r=[];for(t=0,a=n.length;t<a;t++)if((i=n[t].split(":"))[1])for(var c=i[1].split(","),s=0;s<c.length;s+=1)r.push(new w(i[0],c[s]));else r.push(new w(i[0]));_(o,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ie(e,t){this.c=e,this.a=t}function ne(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,i=new J(this.a.api,this.a.text),n=this.a.families;!function(e,t){for(var a=t.length,i=0;i<a;i++){var n=t[i].split(":");3==n.length&&e.f.push(n.pop());var l="";2==n.length&&""!=n[1]&&(l=":"),e.a.push(n.join(l))}}(i,n);var l=new X(n);!function(e){for(var t=e.f.length,a=0;a<t;a++){var i=e.f[a].split(":"),n=i[0].replace(/\+/g," "),l=["n4"];if(2<=i.length){var o;if(o=[],r=i[1])for(var r,c=(r=r.split(",")).length,s=0;s<c;s++){var u;if((u=r[s]).match(/^[\w-]+$/))if(null==(g=ee.exec(u.toLowerCase())))u="";else{if(u=null==(u=g[2])||""==u?"n":Z[u],null==(g=g[1])||""==g)g="4";else var g=Y[g]||(isNaN(g)?"4":g.substr(0,1));u=[u,g].join("")}else u="";u&&o.push(u)}0<o.length&&(l=o),3==i.length&&(o=[],0<(i=(i=i[2])?i.split(","):o).length&&(i=Q[i[0]])&&(e.c[n]=i))}for(e.c[n]||(i=Q[n])&&(e.c[n]=i),i=0;i<l.length;i+=1)e.a.push(new w(n,l[i]))}}(l),d(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],i=0;i<t;i++)a.push(e.a[i].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(i),v(t)),_(t,(function(){e(l.a,l.c,ae)}))},ie.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var i=[],n=0;n<t.length;n+=2)for(var l=t[n],o=t[n+1],r=0;r<o.length;r++)i.push(new w(l,o[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(i)}}),2e3):e([])},ne.prototype.load=function(e){var t=this.f.id,a=this.c.o,i=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var n=0,l=a.fonts.length;n<l;++n){var o=a.fonts[n];i.a.push(new w(o.name,P("font-weight:"+o.weight+";font-style:"+o.style)))}e(i.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new D(window);le.a.c.custom=function(e,t){return new $(t,e)},le.a.c.fontdeck=function(e,t){return new ne(t,e)},le.a.c.monotype=function(e,t){return new q(t,e)},le.a.c.typekit=function(e,t){return new ie(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var oe={load:o(le.load,le)};void 0===(i=function(){return oe}.call(t,a,t,e))||(e.exports=i)}()},537:function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),l=a(11),o=a(30),r=a(268),c=a(2),s=a(10),u=a(14),g=a(66),b=a(16),f=a(47),h=a(23),d=a(65),m=a(22),p=a(12),v=a(5),_=a(8),T=a(15);function y(){return(y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}const w=e=>{e=e.parentProps;const{setAttributes:t,attributes:a,deviceType:w}=e,{menu_item_count:j,titleSpace:S,columns:O,tcolumns:P,mcolumns:F,rowGap:E,columnGap:L,priceColor:M,descColor:C,titleColor:H,seperatorStyle:k,seperatorWidth:z,seperatorThickness:x,seperatorColor:A,priceLoadGoogleFonts:B,titleLoadGoogleFonts:W,descLoadGoogleFonts:R,titleFontSizeType:I,titleFontSize:G,titleFontSizeTablet:N,titleFontSizeMobile:U,titleFontFamily:D,titleFontWeight:V,titleFontStyle:q,titleLineHeightType:$,titleLineHeight:J,titleLineHeightTablet:K,titleLineHeightMobile:X,priceFontSizeType:Q,priceFontSize:Y,priceFontSizeTablet:Z,priceFontSizeMobile:ee,priceFontFamily:te,priceFontWeight:ae,priceFontStyle:ie,priceLineHeightType:ne,priceLineHeight:le,priceLineHeightTablet:oe,priceLineHeightMobile:re,descFontSizeType:ce,descFontSize:se,descFontSizeTablet:ue,descFontSizeMobile:ge,descFontFamily:be,descFontWeight:fe,descFontStyle:he,descLineHeightType:de,descLineHeight:me,descLineHeightTablet:pe,descLineHeightMobile:ve,headingTag:_e,imagePosition:Te,imageAlignment:ye,imageSize:we,imageWidth:je,stack:Se,imageWidthType:Oe,seperatorWidthType:Pe,rowGapType:Fe,columnGapType:Ee,titleSpaceType:Le,contentPaddingTop:Me,contentPaddingRight:Ce,contentPaddingBottom:He,contentPaddingLeft:ke,contentPaddingTopTablet:ze,contentPaddingRightTablet:xe,contentPaddingBottomTablet:Ae,contentPaddingLeftTablet:Be,contentPaddingTopMobile:We,contentPaddingRightMobile:Re,contentPaddingBottomMobile:Ie,contentPaddingLeftMobile:Ge,contentPaddingUnit:Ne,contentMobilePaddingUnit:Ue,contentTabletPaddingUnit:De,contentSpacingLink:Ve,imgPaddingTop:qe,imgPaddingRight:$e,imgPaddingBottom:Je,imgPaddingLeft:Ke,imgPaddingTopTablet:Xe,imgPaddingRightTablet:Qe,imgPaddingBottomTablet:Ye,imgPaddingLeftTablet:Ze,imgPaddingTopMobile:et,imgPaddingRightMobile:tt,imgPaddingBottomMobile:at,imgPaddingLeftMobile:it,imgPaddingUnit:nt,imgMobilePaddingUnit:lt,imgTabletPaddingUnit:ot,imgSpacingLink:rt,titleTransform:ct,titleDecoration:st,descTransform:ut,descDecoration:gt,priceTransform:bt,priceDecoration:ft}=a;let ht,dt,mt;if(!0===W){const e={google:{families:[D+(V?":"+V:"")]}};ht=n.a.createElement(r.a,{config:e})}if(!0===R){const e={google:{families:[be+(fe?":"+fe:"")]}};dt=n.a.createElement(r.a,{config:e})}if(!0===B){const e={google:{families:[te+(ae?":"+ae:"")]}};mt=n.a.createElement(r.a,{config:e})}const pt=[{value:"thumbnail",label:Object(c.__)("Thumbnail")},{value:"medium",label:Object(c.__)("Medium")},{value:"full",label:Object(c.__)("Large")}];return n.a.createElement(n.a.Fragment,null,n.a.createElement(v.InspectorControls,null,n.a.createElement(d.a,null,n.a.createElement(m.b,m.a.general,n.a.createElement(T.a,{title:Object(c.__)("General"),initialOpen:!0},n.a.createElement(g.a,{label:Object(c.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:O,label:"columns"},tablet:{value:P,label:"tcolumns"},mobile:{value:F,label:"mcolumns"}},min:1,max:Math.min(3,j),displayUnit:!1,setAttributes:t}),n.a.createElement(h.a,{setAttributes:t,label:Object(c.__)("Heading Tag","ultimate-addons-for-gutenberg"),data:{value:_e,label:"headingTag"},options:[{value:"h1",label:Object(c.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(c.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(c.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(c.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(c.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(c.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(c.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(c.__)("P","ultimate-addons-for-gutenberg")}]})),n.a.createElement(T.a,{title:Object(c.__)("Image"),initialOpen:!1},n.a.createElement(h.a,{setAttributes:t,label:Object(c.__)("Image Position","ultimate-addons-for-gutenberg"),data:{value:Te,label:"imagePosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-left")}),tooltip:Object(c.__)("Left","ultimate-addons-for-gutenberg")},{value:"top",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-center")}),tooltip:Object(c.__)("Top","ultimate-addons-for-gutenberg")},{value:"right",icon:n.a.createElement(_.Icon,{icon:Object(p.a)("fa fa-align-right")}),tooltip:Object(c.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),("left"===Te||"right"===Te)&&n.a.createElement(n.a.Fragment,null,n.a.createElement(h.a,{setAttributes:t,label:Object(c.__)("Stack on","ultimate-addons-for-gutenberg"),data:{value:Se,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:"None"},{value:"tablet",label:"Tablet"},{value:"mobile",label:"Mobile"}],help:Object(c.__)("Note: Choose on what breakpoint the Images will stack."),showIcons:!1}),n.a.createElement(h.a,{setAttributes:t,label:Object(c.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),data:{value:ye,label:"imageAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top"},{value:"middle",label:"Middle"}],showIcons:!1})),n.a.createElement(_.SelectControl,{label:Object(c.__)("Size"),options:pt,value:we,onChange:a=>{Object(s.select)("core/block-editor").getBlocks(e.clientId).forEach(e=>{e.attributes.imageSize=a}),t({imageSize:a})}}),n.a.createElement(u.a,{label:Object(c.__)("Width"),value:je,setAttributes:t,onChange:e=>t({imageWidth:e}),min:0,max:500,unit:{value:Oe,label:"imageWidthType"}}))),n.a.createElement(m.b,m.a.style,n.a.createElement(T.a,{title:Object(c.__)("Title"),initialOpen:!1},n.a.createElement(b.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:H||"",onColorChange:e=>t({titleColor:e})}),n.a.createElement(o.a,{label:Object(c.__)("Typography"),attributes:a,setAttributes:t,loadGoogleFonts:{value:W,label:"titleLoadGoogleFonts"},fontFamily:{value:D,label:"titleFontFamily"},fontWeight:{value:V,label:"titleFontWeight"},fontStyle:{value:q,label:"titleFontStyle"},fontSizeType:{value:I,label:"titleFontSizeType"},fontSize:{value:G,label:"titleFontSize"},fontSizeMobile:{value:U,label:"titleFontSizeMobile"},fontSizeTablet:{value:N,label:"titleFontSizeTablet"},lineHeightType:{value:$,label:"titleLineHeightType"},lineHeight:{value:J,label:"titleLineHeight"},lineHeightMobile:{value:X,label:"titleLineHeightMobile"},lineHeightTablet:{value:K,label:"titleLineHeightTablet"},transform:{value:ct,label:"titleTransform"},decoration:{value:st,label:"titleDecoration"}}),n.a.createElement(u.a,{label:Object(c.__)("Bottom Margin"),value:S,setAttributes:t,onChange:e=>t({titleSpace:e}),min:0,max:50,unit:{value:Le,label:"titleSpaceType"}})),n.a.createElement(T.a,{title:Object(c.__)("Separator"),initialOpen:!1},n.a.createElement(_.SelectControl,{label:Object(c.__)("Style"),value:k,onChange:e=>t({seperatorStyle:e}),options:[{value:"none",label:Object(c.__)("None")},{value:"solid",label:Object(c.__)("Solid")},{value:"dotted",label:Object(c.__)("Dotted")},{value:"dashed",label:Object(c.__)("Dashed")},{value:"double",label:Object(c.__)("Double")},{value:"groove",label:Object(c.__)("Groove")},{value:"inset",label:Object(c.__)("Inset")},{value:"outset",label:Object(c.__)("Outset")},{value:"ridge",label:Object(c.__)("Ridge")}]}),"none"!==k&&n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,{label:Object(c.__)("Width"),setAttributes:t,value:z,onChange:e=>t({seperatorWidth:e}),min:0,max:100,unit:{value:Pe,label:"seperatorWidthType"},units:[{name:Object(c.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(c.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(c.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),n.a.createElement(u.a,{label:Object(c.__)("Thickness"),setAttributes:t,value:x,onChange:e=>t({seperatorThickness:e}),min:0,max:20,displayUnit:!1}),n.a.createElement(b.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:A||"",onColorChange:e=>t({seperatorColor:e})}))),n.a.createElement(T.a,{title:Object(c.__)("Image"),initialOpen:!1},n.a.createElement(f.a,y({},e,{label:Object(c.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:qe,label:"imgPaddingTop"},valueRight:{value:$e,label:"imgPaddingRight"},valueBottom:{value:Je,label:"imgPaddingBottom"},valueLeft:{value:Ke,label:"imgPaddingLeft"},valueTopTablet:{value:Xe,label:"imgPaddingTopTablet"},valueRightTablet:{value:Qe,label:"imgPaddingRightTablet"},valueBottomTablet:{value:Ye,label:"imgPaddingBottomTablet"},valueLeftTablet:{value:Ze,label:"imgPaddingLeftTablet"},valueTopMobile:{value:et,label:"imgPaddingTopMobile"},valueRightMobile:{value:tt,label:"imgPaddingRightMobile"},valueBottomMobile:{value:at,label:"imgPaddingBottomMobile"},valueLeftMobile:{value:it,label:"imgPaddingLeftMobile"},unit:{value:nt,label:"imgPaddingUnit"},mUnit:{value:lt,label:"imgMobilePaddingUnit"},tUnit:{value:ot,label:"imgTabletPaddingUnit"},deviceType:w,attributes:a,setAttributes:t,link:{value:rt,label:"imgSpacingLink"}}))),n.a.createElement(T.a,{title:Object(c.__)("Content"),initialOpen:!1},n.a.createElement(b.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:e=>t({descColor:e})}),n.a.createElement(o.a,{label:Object(c.__)("Typography"),attributes:a,setAttributes:t,loadGoogleFonts:{value:R,label:"descLoadGoogleFonts"},fontFamily:{value:be,label:"descFontFamily"},fontWeight:{value:fe,label:"descFontWeight"},fontStyle:{value:he,label:"descFontStyle"},fontSizeType:{value:ce,label:"descFontSizeType"},fontSize:{value:se,label:"descFontSize"},fontSizeMobile:{value:ge,label:"descFontSizeMobile"},fontSizeTablet:{value:ue,label:"descFontSizeTablet"},lineHeightType:{value:de,label:"descLineHeightType"},lineHeight:{value:me,label:"descLineHeight"},lineHeightMobile:{value:ve,label:"descLineHeightMobile"},lineHeightTablet:{value:pe,label:"descLineHeightTablet"},transform:{value:ut,label:"descTransform"},decoration:{value:gt,label:"descDecoration"}})),n.a.createElement(T.a,{title:Object(c.__)("Price"),initialOpen:!1},n.a.createElement(b.a,{label:Object(c.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:e=>t({priceColor:e})}),n.a.createElement(o.a,{label:Object(c.__)("Typography"),attributes:a,setAttributes:t,loadGoogleFonts:{value:B,label:"priceLoadGoogleFonts"},fontFamily:{value:te,label:"priceFontFamily"},fontWeight:{value:ae,label:"priceFontWeight"},fontStyle:{value:ie,label:"priceFontStyle"},fontSizeType:{value:Q,label:"priceFontSizeType"},fontSize:{value:Y,label:"priceFontSize"},fontSizeMobile:{value:ee,label:"priceFontSizeMobile"},fontSizeTablet:{value:Z,label:"priceFontSizeTablet"},lineHeightType:{value:ne,label:"priceLineHeightType"},lineHeight:{value:le,label:"priceLineHeight"},lineHeightMobile:{value:re,label:"priceLineHeightMobile"},lineHeightTablet:{value:oe,label:"priceLineHeightTablet"},transform:{value:bt,label:"priceTransform"},decoration:{value:ft,label:"priceDecoration"}})),n.a.createElement(T.a,{title:Object(c.__)("Spacing"),initialOpen:!1},n.a.createElement(u.a,{label:Object(c.__)("Row Gap"),setAttributes:t,value:E,onChange:e=>t({rowGap:e}),min:0,max:50,unit:{value:Fe,label:"rowGapType"}}),n.a.createElement(u.a,{label:Object(c.__)("Column Gap"),setAttributes:t,value:L,onChange:e=>t({columnGap:e}),min:0,max:50,unit:{value:Ee,label:"columnGapType"}}),n.a.createElement(f.a,y({},e,{label:Object(c.__)("Item Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Me,label:"contentPaddingTop"},valueRight:{value:Ce,label:"contentPaddingRight"},valueBottom:{value:He,label:"contentPaddingBottom"},valueLeft:{value:ke,label:"contentPaddingLeft"},valueTopTablet:{value:ze,label:"contentPaddingTopTablet"},valueRightTablet:{value:xe,label:"contentPaddingRightTablet"},valueBottomTablet:{value:Ae,label:"contentPaddingBottomTablet"},valueLeftTablet:{value:Be,label:"contentPaddingLeftTablet"},valueTopMobile:{value:We,label:"contentPaddingTopMobile"},valueRightMobile:{value:Re,label:"contentPaddingRightMobile"},valueBottomMobile:{value:Ie,label:"contentPaddingBottomMobile"},valueLeftMobile:{value:Ge,label:"contentPaddingLeftMobile"},unit:{value:Ne,label:"contentPaddingUnit"},mUnit:{value:Ue,label:"contentMobilePaddingUnit"},tUnit:{value:De,label:"contentTabletPaddingUnit"},deviceType:w,attributes:a,setAttributes:t,link:{value:Ve,label:"contentSpacingLink"}})))),n.a.createElement(m.b,y({},m.a.advance,{parentProps:e})))),n.a.createElement(i.Suspense,{fallback:Object(l.a)()},ht,dt,mt))};t.default=n.a.memo(w)}}]);