(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[100],{199:function(t,e,a){"use strict";var n,i,l=a(38),o=a.n(l),r=a(200),s=a.n(r),c=a(2);if(void 0===u)var u=[];const f=t=>{const[e,a]=Object(c.useState)([]);Object(c.useEffect)(()=>{r()},[]),Object(c.useEffect)(()=>{const{onStatus:a,config:n}=t;void 0!==e.status&&a(e.status),n!==e.config&&r()},[t]);const n=()=>{a({status:"loading"})},i=t=>{u.includes(t)||u.push(t)},l=()=>{a({status:"active"})},o=()=>{a({status:"inactive"})},r=()=>{u.includes(t.config.google.families[0])||(s.a.load({...t.config,loading:n,active:l,inactive:o}),i(t.config.google.families[0]));const e=document.getElementsByClassName("is-tablet-preview"),a=document.getElementsByClassName("is-mobile-preview");if(0!==e.length||0!==a.length){const r=(e[0]||a[0]).getElementsByTagName("iframe")[0];r&&(s.a.load({...t.config,loading:n,active:l,inactive:o,context:null==r?void 0:r.contentWindow}),i(t.config.google.families[0]))}},{children:f}=t;return f||null};f.propTypes={config:null===(n=o.a.object)||void 0===n?void 0:n.isRequired,children:o.a.element,onStatus:null===(i=o.a.func)||void 0===i?void 0:i.isRequired},f.defaultProps={onStatus:()=>{}},e.a=f},200:function(t,e,a){var n;!function(){function i(t,e,a){return t.call.apply(t.bind,arguments)}function l(t,e,a){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),t.apply(e,a)}}return function(){return t.apply(e,arguments)}}function o(t,e,a){return(o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var c=!!window.FontFace;function u(t,e,a,n){if(e=t.c.createElement(e),a)for(var i in a)a.hasOwnProperty(i)&&("style"==i?e.style.cssText=a[i]:e.setAttribute(i,a[i]));return n&&e.appendChild(t.c.createTextNode(n)),e}function f(t,e,a){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(a,t.lastChild)}function b(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t,e,a){e=e||[],a=a||[];for(var n=t.className.split(/\s+/),i=0;i<e.length;i+=1){for(var l=!1,o=0;o<n.length;o+=1)if(e[i]===n[o]){l=!0;break}l||n.push(e[i])}for(e=[],i=0;i<n.length;i+=1){for(l=!1,o=0;o<a.length;o+=1)if(n[i]===a[o]){l=!0;break}l||e.push(n[i])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function h(t,e){for(var a=t.className.split(/\s+/),n=0,i=a.length;n<i;n++)if(a[n]==e)return!0;return!1}function d(t,e,a){function n(){r&&i&&l&&(r(o),r=null)}e=u(t,"link",{rel:"stylesheet",href:e,media:"all"});var i=!1,l=!0,o=null,r=a||null;c?(e.onload=function(){i=!0,n()},e.onerror=function(){i=!0,o=Error("Stylesheet failed to load"),n()}):setTimeout((function(){i=!0,n()}),0),f(t,"head",e)}function p(t,e,a,n){var i=t.c.getElementsByTagName("head")[0];if(i){var l=u(t,"script",{src:e}),o=!1;return l.onload=l.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&i.removeChild(l))},i.appendChild(l),setTimeout((function(){o||(o=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function v(){this.a=0,this.c=null}function m(t){return t.a++,function(){t.a--,k(t)}}function y(t,e){t.c=e,k(t)}function k(t){0==t.a&&t.c&&(t.c(),t.c=null)}function T(t){this.a=t||"-"}function w(t,e){this.c=t,this.f=4,this.a="n";var a=(e||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function _(t){var e=[];t=t.split(/,\s*/);for(var a=0;a<t.length;a++){var n=t[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?e.push("'"+n+"'"):e.push(n)}return e.join(",")}function M(t){return t.a+t.f}function j(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function O(t){var e=4,a="n",n=null;return t&&((n=t.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=t.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?e=7:/[1-9]00/.test(n[1])&&(e=parseInt(n[1].substr(0,1),10)))),a+e}function E(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new T("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function S(t){if(t.g){var e=h(t.f,t.a.c("wf","active")),a=[],n=[t.a.c("wf","loading")];e||a.push(t.a.c("wf","inactive")),g(t.f,a,n)}P(t,"inactive")}function P(t,e,a){t.j&&t.h[e]&&(a?t.h[e](a.c,M(a)):t.h[e]())}function x(){this.c={}}function C(t,e){this.c=t,this.f=e,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function B(t){f(t.c,"body",t.a)}function L(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+_(t.c)+";font-style:"+j(t)+";font-weight:"+t.f+"00;"}function A(t,e,a,n,i,l){this.g=t,this.j=e,this.a=n,this.c=a,this.f=i||3e3,this.h=l||void 0}function R(t,e,a,n,i,l,o){this.v=t,this.B=e,this.c=a,this.a=n,this.s=o||"BESbswy",this.f={},this.w=i||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new C(this.c,this.s),this.h=new C(this.c,this.s),this.j=new C(this.c,this.s),this.m=new C(this.c,this.s),t=L(t=new w(this.a.c+",serif",M(this.a))),this.g.a.style.cssText=t,t=L(t=new w(this.a.c+",sans-serif",M(this.a))),this.h.a.style.cssText=t,t=L(t=new w("serif",M(this.a))),this.j.a.style.cssText=t,t=L(t=new w("sans-serif",M(this.a))),this.m.a.style.cssText=t,B(this.g),B(this.h),B(this.j),B(this.m)}T.prototype.c=function(t){for(var e=[],a=0;a<arguments.length;a++)e.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},A.prototype.start=function(){var t=this.c.o.document,e=this,a=r(),n=new Promise((function(n,i){!function l(){r()-a>=e.f?i():t.fonts.load(function(t){return j(t)+" "+t.f+"00 300px "+_(t.c)}(e.a),e.h).then((function(t){1<=t.length?n():setTimeout(l,25)}),(function(){i()}))}()})),i=null,l=new Promise((function(t,a){i=setTimeout(a,e.f)}));Promise.race([l,n]).then((function(){i&&(clearTimeout(i),i=null),e.g(e.a)}),(function(){e.j(e.a)}))};var U={D:"serif",C:"sans-serif"},z=null;function I(){if(null===z){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);z=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return z}function N(t,e,a){for(var n in U)if(U.hasOwnProperty(n)&&e===t.f[U[n]]&&a===t.f[U[n]])return!0;return!1}function F(t,e){setTimeout(o((function(){b(this.g.a),b(this.h.a),b(this.j.a),b(this.m.a),e(this.a)}),t),0)}function H(t,e,a){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=a}R.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(e){var a,n=e.g.a.offsetWidth,i=e.h.a.offsetWidth;(a=n===e.f.serif&&i===e.f["sans-serif"])||(a=I()&&N(e,n,i)),a?r()-e.A>=e.w?I()&&N(e,n,i)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?F(e,e.v):F(e,e.B):function(e){setTimeout(o((function(){t(this)}),e),50)}(e):F(e,e.v)}(this)};var G=null;function W(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&g(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),P(t,"active")):S(t.a))}function D(t){this.j=t,this.a=new x,this.h=0,this.f=this.g=!0}function q(t,e,a,n,i){var l=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=i||null,r=n||{};if(0===a.length&&l)S(e.a);else{e.f+=a.length,l&&(e.j=l);var s,c=[];for(s=0;s<a.length;s++){var u=a[s],f=r[u.c],b=e.a,h=u;if(b.g&&g(b.f,[b.a.c("wf",h.c,M(h).toString(),"loading")]),P(b,"fontloading",h),b=null,null===G)if(window.FontFace){h=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);G=h?42<parseInt(h[1],10):!d}else G=!1;b=G?new A(o(e.g,e),o(e.h,e),e.c,u,e.s,f):new R(o(e.g,e),o(e.h,e),e.c,u,e.s,t,f),c.push(b)}for(s=0;s<c.length;s++)c[s].start()}}),0)}function V(t,e){this.c=t,this.a=e}function $(t,e){this.c=t,this.a=e}function J(t,e){this.c=t||K,this.a=[],this.f=[],this.g=e||""}H.prototype.g=function(t){var e=this.a;e.g&&g(e.f,[e.a.c("wf",t.c,M(t).toString(),"active")],[e.a.c("wf",t.c,M(t).toString(),"loading"),e.a.c("wf",t.c,M(t).toString(),"inactive")]),P(e,"fontactive",t),this.m=!0,W(this)},H.prototype.h=function(t){var e=this.a;if(e.g){var a=h(e.f,e.a.c("wf",t.c,M(t).toString(),"active")),n=[],i=[e.a.c("wf",t.c,M(t).toString(),"loading")];a||n.push(e.a.c("wf",t.c,M(t).toString(),"inactive")),g(e.f,n,i)}P(e,"fontinactive",t),W(this)},D.prototype.load=function(t){this.c=new s(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,a){var n=[],i=a.timeout;!function(t){t.g&&g(t.f,[t.a.c("wf","loading")]),P(t,"loading")}(e),n=function(t,e,a){var n,i=[];for(n in e)if(e.hasOwnProperty(n)){var l=t.c[n];l&&i.push(l(e[n],a))}return i}(t.a,a,t.c);var l=new H(t.c,e,i);for(t.h=n.length,e=0,a=n.length;e<a;e++)n[e].load((function(e,a,n){q(t,l,e,a,n)}))}(this,new E(this.c,t),t)},V.prototype.load=function(t){var e=this,a=e.a.projectId,n=e.a.version;if(a){var i=e.c.o;p(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?t([]):(i["__MonotypeConfiguration__"+a]=function(){return e.a},function e(){if(i["__mti_fntLst"+a]){var n,l=i["__mti_fntLst"+a](),o=[];if(l)for(var r=0;r<l.length;r++){var s=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,o.push(new w(s,n))):o.push(new w(s))}t(o)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+a}else t([])},$.prototype.load=function(t){var e,a,n=this.a.urls||[],i=this.a.families||[],l=this.a.testStrings||{},o=new v;for(e=0,a=n.length;e<a;e++)d(this.c,n[e],m(o));var r=[];for(e=0,a=i.length;e<a;e++)if((n=i[e].split(":"))[1])for(var s=n[1].split(","),c=0;c<s.length;c+=1)r.push(new w(n[0],s[c]));else r.push(new w(n[0]));y(o,(function(){t(r,l)}))};var K="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var at={Arimo:!0,Cousine:!0,Tinos:!0};function nt(t,e){this.c=t,this.a=e}function it(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new v,a=this.c,n=new J(this.a.api,this.a.text),i=this.a.families;!function(t,e){for(var a=e.length,n=0;n<a;n++){var i=e[n].split(":");3==i.length&&t.f.push(i.pop());var l="";2==i.length&&""!=i[1]&&(l=":"),t.a.push(i.join(l))}}(n,i);var l=new X(i);!function(t){for(var e=t.f.length,a=0;a<e;a++){var n=t.f[a].split(":"),i=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var o;if(o=[],r=n[1])for(var r,s=(r=r.split(",")).length,c=0;c<s;c++){var u;if((u=r[c]).match(/^[\w-]+$/))if(null==(f=tt.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&o.push(u)}0<o.length&&(l=o),3==n.length&&(o=[],0<(n=(n=n[2])?n.split(","):o).length&&(n=Q[n[0]])&&(t.c[i]=n))}for(t.c[i]||(n=Q[i])&&(t.c[i]=n),n=0;n<l.length;n+=1)t.a.push(new w(i,l[n]))}}(l),d(a,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,a=[],n=0;n<e;n++)a.push(t.a[n].replace(/ /g,"+"));return e=t.c+"?family="+a.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(n),m(e)),y(e,(function(){t(l.a,l.c,at)}))},nt.prototype.load=function(t){var e=this.a.id,a=this.c.o;e?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){e=a.Typekit.config.fn;for(var n=[],i=0;i<e.length;i+=2)for(var l=e[i],o=e[i+1],r=0;r<o.length;r++)n.push(new w(l,o[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(n)}}),2e3):t([])},it.prototype.load=function(t){var e=this.f.id,a=this.c.o,n=this;e?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[e]=function(e,a){for(var i=0,l=a.fonts.length;i<l;++i){var o=a.fonts[i];n.a.push(new w(o.name,O("font-weight:"+o.weight+";font-style:"+o.style)))}t(n.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var lt=new D(window);lt.a.c.custom=function(t,e){return new $(e,t)},lt.a.c.fontdeck=function(t,e){return new it(e,t)},lt.a.c.monotype=function(t,e){return new V(e,t)},lt.a.c.typekit=function(t,e){return new nt(e,t)},lt.a.c.google=function(t,e){return new et(e,t)};var ot={load:o(lt.load,lt)};void 0===(n=function(){return ot}.call(e,a,e,t))||(t.exports=n)}()},485:function(t,e,a){"use strict";a.r(e);var n=a(33),i=a(199),l=a(1),o=a(4),r=a(6),s=a(79),c=a(25),u=a(16),f=a(19),b=a(20),g=a(12),h=a(0),d=a.n(h),p=a(24),v=a(55),m=a(17);function y(){return(y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}const k=t=>{t=t.parentProps;const{attributes:e,setAttributes:a,attributes:{rating:h,range:k,layout:T,layoutTablet:w,layoutMobile:_,align:M,alignTablet:j,alignMobile:O,size:E,sizeTablet:S,sizeMobile:P,gap:x,gapMobile:C,gapTablet:B,unmarkedColor:L,color:A,title:R,loadGoogleFonts:U,fontFamily:z,fontWeight:I,fontSizeType:N,fontSize:F,fontSizeMobile:H,fontSizeTablet:G,lineHeightType:W,lineHeight:D,lineHeightMobile:q,lineHeightTablet:V,titleColor:$,titleGap:J,titleGapMobile:K,titleGapTablet:X,fontStyle:Q,fontTransform:Y,fontDecoration:Z,displayTitle:tt,blockTopPadding:et,blockRightPadding:at,blockLeftPadding:nt,blockBottomPadding:it,blockTopPaddingTablet:lt,blockRightPaddingTablet:ot,blockLeftPaddingTablet:rt,blockBottomPaddingTablet:st,blockTopPaddingMobile:ct,blockRightPaddingMobile:ut,blockLeftPaddingMobile:ft,blockBottomPaddingMobile:bt,blockPaddingUnit:gt,blockPaddingUnitTablet:ht,blockPaddingUnitMobile:dt,blockPaddingLink:pt,blockTopMargin:vt,blockRightMargin:mt,blockLeftMargin:yt,blockBottomMargin:kt,blockTopMarginTablet:Tt,blockRightMarginTablet:wt,blockLeftMarginTablet:_t,blockBottomMarginTablet:Mt,blockTopMarginMobile:jt,blockRightMarginMobile:Ot,blockLeftMarginMobile:Et,blockBottomMarginMobile:St,blockMarginUnit:Pt,blockMarginUnitTablet:xt,blockMarginUnitMobile:Ct,blockMarginLink:Bt},deviceType:Lt}=t;let At;if(!0===U){const t={google:{families:[z+(I?":"+I:"")]}};At=d.a.createElement(i.a,{config:t})}let Rt=[{value:"left",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-left")}),tooltip:Object(l.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-center")}),tooltip:Object(l.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-right")}),tooltip:Object(l.__)("Right","ultimate-addons-for-gutenberg")},{value:"full",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-justify")}),tooltip:Object(l.__)("Full","ultimate-addons-for-gutenberg")}];"stack"===T&&(Rt=[{value:"left",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-left")}),tooltip:Object(l.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-center")}),tooltip:Object(l.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:d.a.createElement(r.Icon,{icon:Object(g.a)("fa fa-align-right")}),tooltip:Object(l.__)("Right","ultimate-addons-for-gutenberg")}],"full"===M&&a({align:"left"}));const Ut=d.a.createElement(m.a,null,d.a.createElement(r.ToggleControl,{label:Object(l.__)("Enable Title","ultimate-addons-for-gutenberg"),checked:tt,onChange:()=>a({displayTitle:!tt})}),d.a.createElement(b.a,{setAttributes:a,label:Object(l.__)("Range","ultimate-addons-for-gutenberg"),data:{value:k,label:"range"},options:[{value:"5",label:Object(l.__)("1-5","ultimate-addons-for-gutenberg")},{value:"10",label:Object(l.__)("1-10","ultimate-addons-for-gutenberg")}]}),d.a.createElement(f.a,{label:Object(l.__)("Rating","ultimate-addons-for-gutenberg"),setAttributes:a,value:h,onChange:t=>a({rating:t}),min:0,max:k,step:.1,displayUnit:!1}),tt&&d.a.createElement(b.a,{setAttributes:a,label:Object(l.__)("Layout","ultimate-addons-for-gutenberg"),data:{desktop:{value:T,label:"layout"},tablet:{value:w,label:"layoutTablet"},mobile:{value:_,label:"layoutMobile"}},options:[{value:"inline",label:Object(l.__)("Inline","ultimate-addons-for-gutenberg")},{value:"stack",label:Object(l.__)("Stack","ultimate-addons-for-gutenberg")}],responsive:!0}),d.a.createElement(b.a,{setAttributes:a,label:Object(l.__)("Alignment","ultimate-addons-for-gutenberg"),data:{desktop:{value:M,label:"align"},tablet:{value:j,label:"alignTablet"},mobile:{value:O,label:"alignMobile"}},options:Rt,showIcons:!0,responsive:!0})),zt=d.a.createElement(m.a,{title:Object(l.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},d.a.createElement(u.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:$,onColorChange:t=>a({titleColor:t})}),d.a.createElement(n.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:U,label:"loadGoogleFonts"},fontFamily:{value:z,label:"fontFamily"},fontWeight:{value:I,label:"fontWeight"},fontStyle:{value:Q,label:"fontStyle"},transform:{value:Y,label:"fontTransform"},decoration:{value:Z,label:"fontDecoration"},fontSizeType:{value:N,label:"fontSizeType"},fontSize:{value:F,label:"fontSize"},fontSizeMobile:{value:H,label:"fontSizeMobile"},fontSizeTablet:{value:G,label:"fontSizeTablet"},lineHeightType:{value:W,label:"lineHeightType"},lineHeight:{value:D,label:"lineHeight"},lineHeightMobile:{value:q,label:"lineHeightMobile"},lineHeightTablet:{value:V,label:"lineHeightTablet"}}),d.a.createElement(p.a,{label:Object(l.__)("Gap Between Title And Stars","ultimate-addons-for-gutenberg"),data:{desktop:{value:J,label:"titleGap"},tablet:{value:X,label:"titleGapTablet"},mobile:{value:K,label:"titleGapMobile"}},min:0,max:50,displayUnit:!1,setAttributes:a})),It=d.a.createElement(m.a,{title:Object(l.__)("Star","ultimate-addons-for-gutenberg"),initialOpen:!0},d.a.createElement(u.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:A,onColorChange:t=>a({color:t})}),d.a.createElement(u.a,{label:Object(l.__)("Unmarked Color","ultimate-addons-for-gutenberg"),colorValue:L,onColorChange:t=>a({unmarkedColor:t})}),d.a.createElement(p.a,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:E,label:"size"},tablet:{value:S,label:"sizeTablet"},mobile:{value:P,label:"sizeMobile"}},min:0,max:100,displayUnit:!1,setAttributes:a}),d.a.createElement(p.a,{label:Object(l.__)("Gap Between Stars","ultimate-addons-for-gutenberg"),data:{desktop:{value:x,label:"gap"},tablet:{value:B,label:"gapTablet"},mobile:{value:C,label:"gapMobile"}},min:0,max:100,displayUnit:!1,setAttributes:a})),Nt=d.a.createElement(m.a,{title:Object(l.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},d.a.createElement(v.a,{label:Object(l.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:et,label:"blockTopPadding"},valueRight:{value:at,label:"blockRightPadding"},valueBottom:{value:it,label:"blockBottomPadding"},valueLeft:{value:nt,label:"blockLeftPadding"},valueTopTablet:{value:lt,label:"blockTopPaddingTablet"},valueRightTablet:{value:ot,label:"blockRightPaddingTablet"},valueBottomTablet:{value:st,label:"blockBottomPaddingTablet"},valueLeftTablet:{value:rt,label:"blockLeftPaddingTablet"},valueTopMobile:{value:ct,label:"blockTopPaddingMobile"},valueRightMobile:{value:ut,label:"blockRightPaddingMobile"},valueBottomMobile:{value:bt,label:"blockBottomPaddingMobile"},valueLeftMobile:{value:ft,label:"blockLeftPaddingMobile"},unit:{value:gt,label:"blockPaddingUnit"},mUnit:{value:dt,label:"blockPaddingUnitMobile"},tUnit:{value:ht,label:"blockPaddingUnitTablet"},deviceType:Lt,attributes:e,setAttributes:a,link:{value:pt,label:"blockPaddingLink"}}),d.a.createElement(v.a,{label:Object(l.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:vt,label:"blockTopMargin"},valueRight:{value:mt,label:"blockRightMargin"},valueBottom:{value:kt,label:"blockBottomMargin"},valueLeft:{value:yt,label:"blockLeftMargin"},valueTopTablet:{value:Tt,label:"blockTopMarginTablet"},valueRightTablet:{value:wt,label:"blockRightMarginTablet"},valueBottomTablet:{value:Mt,label:"blockBottomMarginTablet"},valueLeftTablet:{value:_t,label:"blockLeftMarginTablet"},valueTopMobile:{value:jt,label:"blockTopMarginMobile"},valueRightMobile:{value:Ot,label:"blockRightMarginMobile"},valueBottomMobile:{value:St,label:"blockBottomMarginMobile"},valueLeftMobile:{value:Et,label:"blockLeftMarginMobile"},unit:{value:Pt,label:"blockMarginUnit"},mUnit:{value:Ct,label:"blockMarginUnitMobile"},tUnit:{value:xt,label:"blockMarginUnitTablet"},deviceType:Lt,attributes:e,setAttributes:a,link:{value:Bt,label:"blockMarginLink"}}));return d.a.createElement(d.a.Fragment,null,d.a.createElement(o.InspectorControls,null,d.a.createElement(s.a,{tabs:["general","style","advance"]},d.a.createElement(c.b,c.a.general,Ut),d.a.createElement(c.b,c.a.style,It,tt&&""!==R&&zt,Nt),d.a.createElement(c.b,y({},c.a.advance,{parentProps:t})))),At)};e.default=d.a.memo(k)}}]);