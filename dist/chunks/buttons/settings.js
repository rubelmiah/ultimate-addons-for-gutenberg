(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[10],{199:function(t,e,a){"use strict";var n,i,l=a(35),o=a.n(l),r=a(200),s=a.n(r),u=a(2);if(void 0===c)var c=[];const f=t=>{const[e,a]=Object(u.useState)([]);Object(u.useEffect)(()=>{o()},[]),Object(u.useEffect)(()=>{const{onStatus:a,config:n}=t;void 0!==e.status&&a(e.status),n!==e.config&&o()},[t]);const n=()=>{a({status:"loading"})},i=()=>{a({status:"active"})},l=()=>{a({status:"inactive"})},o=()=>{var e;c.includes(t.config.google.families[0])||(s.a.load({...t.config,loading:n,active:i,inactive:l}),e=t.config.google.families[0],c.includes(e)||c.push(e))},{children:r}=t;return r||null};f.propTypes={config:null===(n=o.a.object)||void 0===n?void 0:n.isRequired,children:o.a.element,onStatus:null===(i=o.a.func)||void 0===i?void 0:i.isRequired},f.defaultProps={onStatus:()=>{}},e.a=f},200:function(t,e,a){var n;!function(){function i(t,e,a){return t.call.apply(t.bind,arguments)}function l(t,e,a){if(!t)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),t.apply(e,a)}}return function(){return t.apply(e,arguments)}}function o(t,e,a){return(o=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?i:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function s(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var u=!!window.FontFace;function c(t,e,a,n){if(e=t.c.createElement(e),a)for(var i in a)a.hasOwnProperty(i)&&("style"==i?e.style.cssText=a[i]:e.setAttribute(i,a[i]));return n&&e.appendChild(t.c.createTextNode(n)),e}function f(t,e,a){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(a,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t,e,a){e=e||[],a=a||[];for(var n=t.className.split(/\s+/),i=0;i<e.length;i+=1){for(var l=!1,o=0;o<n.length;o+=1)if(e[i]===n[o]){l=!0;break}l||n.push(e[i])}for(e=[],i=0;i<n.length;i+=1){for(l=!1,o=0;o<a.length;o+=1)if(n[i]===a[o]){l=!0;break}l||e.push(n[i])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function b(t,e){for(var a=t.className.split(/\s+/),n=0,i=a.length;n<i;n++)if(a[n]==e)return!0;return!1}function d(t,e,a){function n(){r&&i&&l&&(r(o),r=null)}e=c(t,"link",{rel:"stylesheet",href:e,media:"all"});var i=!1,l=!0,o=null,r=a||null;u?(e.onload=function(){i=!0,n()},e.onerror=function(){i=!0,o=Error("Stylesheet failed to load"),n()}):setTimeout((function(){i=!0,n()}),0),f(t,"head",e)}function p(t,e,a,n){var i=t.c.getElementsByTagName("head")[0];if(i){var l=c(t,"script",{src:e}),o=!1;return l.onload=l.onreadystatechange=function(){o||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(o=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&i.removeChild(l))},i.appendChild(l),setTimeout((function(){o||(o=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function v(){this.a=0,this.c=null}function m(t){return t.a++,function(){t.a--,y(t)}}function w(t,e){t.c=e,y(t)}function y(t){0==t.a&&t.c&&(t.c(),t.c=null)}function _(t){this.a=t||"-"}function T(t,e){this.c=t,this.f=4,this.a="n";var a=(e||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function j(t){var e=[];t=t.split(/,\s*/);for(var a=0;a<t.length;a++){var n=t[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?e.push("'"+n+"'"):e.push(n)}return e.join(",")}function M(t){return t.a+t.f}function S(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function O(t){var e=4,a="n",n=null;return t&&((n=t.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=t.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?e=7:/[1-9]00/.test(n[1])&&(e=parseInt(n[1].substr(0,1),10)))),a+e}function k(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new _("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function P(t){if(t.g){var e=b(t.f,t.a.c("wf","active")),a=[],n=[t.a.c("wf","loading")];e||a.push(t.a.c("wf","inactive")),g(t.f,a,n)}E(t,"inactive")}function E(t,e,a){t.j&&t.h[e]&&(a?t.h[e](a.c,M(a)):t.h[e]())}function x(){this.c={}}function A(t,e){this.c=t,this.f=e,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function I(t){f(t.c,"body",t.a)}function C(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+j(t.c)+";font-style:"+S(t)+";font-weight:"+t.f+"00;"}function L(t,e,a,n,i,l){this.g=t,this.j=e,this.a=n,this.c=a,this.f=i||3e3,this.h=l||void 0}function B(t,e,a,n,i,l,o){this.v=t,this.B=e,this.c=a,this.a=n,this.s=o||"BESbswy",this.f={},this.w=i||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new A(this.c,this.s),this.h=new A(this.c,this.s),this.j=new A(this.c,this.s),this.m=new A(this.c,this.s),t=C(t=new T(this.a.c+",serif",M(this.a))),this.g.a.style.cssText=t,t=C(t=new T(this.a.c+",sans-serif",M(this.a))),this.h.a.style.cssText=t,t=C(t=new T("serif",M(this.a))),this.j.a.style.cssText=t,t=C(t=new T("sans-serif",M(this.a))),this.m.a.style.cssText=t,I(this.g),I(this.h),I(this.j),I(this.m)}_.prototype.c=function(t){for(var e=[],a=0;a<arguments.length;a++)e.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},L.prototype.start=function(){var t=this.c.o.document,e=this,a=r(),n=new Promise((function(n,i){!function l(){r()-a>=e.f?i():t.fonts.load(function(t){return S(t)+" "+t.f+"00 300px "+j(t.c)}(e.a),e.h).then((function(t){1<=t.length?n():setTimeout(l,25)}),(function(){i()}))}()})),i=null,l=new Promise((function(t,a){i=setTimeout(a,e.f)}));Promise.race([l,n]).then((function(){i&&(clearTimeout(i),i=null),e.g(e.a)}),(function(){e.j(e.a)}))};var z={D:"serif",C:"sans-serif"},N=null;function F(){if(null===N){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);N=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return N}function H(t,e,a){for(var n in z)if(z.hasOwnProperty(n)&&e===t.f[z[n]]&&a===t.f[z[n]])return!0;return!1}function U(t,e){setTimeout(o((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),e(this.a)}),t),0)}function W(t,e,a){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=a}B.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(e){var a,n=e.g.a.offsetWidth,i=e.h.a.offsetWidth;(a=n===e.f.serif&&i===e.f["sans-serif"])||(a=F()&&H(e,n,i)),a?r()-e.A>=e.w?F()&&H(e,n,i)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?U(e,e.v):U(e,e.B):function(e){setTimeout(o((function(){t(this)}),e),50)}(e):U(e,e.v)}(this)};var R=null;function D(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&g(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),E(t,"active")):P(t.a))}function G(t){this.j=t,this.a=new x,this.h=0,this.f=this.g=!0}function q(t,e,a,n,i){var l=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=i||null,r=n||{};if(0===a.length&&l)P(e.a);else{e.f+=a.length,l&&(e.j=l);var s,u=[];for(s=0;s<a.length;s++){var c=a[s],f=r[c.c],h=e.a,b=c;if(h.g&&g(h.f,[h.a.c("wf",b.c,M(b).toString(),"loading")]),E(h,"fontloading",b),h=null,null===R)if(window.FontFace){b=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);R=b?42<parseInt(b[1],10):!d}else R=!1;h=R?new L(o(e.g,e),o(e.h,e),e.c,c,e.s,f):new B(o(e.g,e),o(e.h,e),e.c,c,e.s,t,f),u.push(h)}for(s=0;s<u.length;s++)u[s].start()}}),0)}function $(t,e){this.c=t,this.a=e}function J(t,e){this.c=t,this.a=e}function K(t,e){this.c=t||Q,this.a=[],this.f=[],this.g=e||""}W.prototype.g=function(t){var e=this.a;e.g&&g(e.f,[e.a.c("wf",t.c,M(t).toString(),"active")],[e.a.c("wf",t.c,M(t).toString(),"loading"),e.a.c("wf",t.c,M(t).toString(),"inactive")]),E(e,"fontactive",t),this.m=!0,D(this)},W.prototype.h=function(t){var e=this.a;if(e.g){var a=b(e.f,e.a.c("wf",t.c,M(t).toString(),"active")),n=[],i=[e.a.c("wf",t.c,M(t).toString(),"loading")];a||n.push(e.a.c("wf",t.c,M(t).toString(),"inactive")),g(e.f,n,i)}E(e,"fontinactive",t),D(this)},G.prototype.load=function(t){this.c=new s(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,a){var n=[],i=a.timeout;!function(t){t.g&&g(t.f,[t.a.c("wf","loading")]),E(t,"loading")}(e),n=function(t,e,a){var n,i=[];for(n in e)if(e.hasOwnProperty(n)){var l=t.c[n];l&&i.push(l(e[n],a))}return i}(t.a,a,t.c);var l=new W(t.c,e,i);for(t.h=n.length,e=0,a=n.length;e<a;e++)n[e].load((function(e,a,n){q(t,l,e,a,n)}))}(this,new k(this.c,t),t)},$.prototype.load=function(t){var e=this,a=e.a.projectId,n=e.a.version;if(a){var i=e.c.o;p(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?t([]):(i["__MonotypeConfiguration__"+a]=function(){return e.a},function e(){if(i["__mti_fntLst"+a]){var n,l=i["__mti_fntLst"+a](),o=[];if(l)for(var r=0;r<l.length;r++){var s=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,o.push(new T(s,n))):o.push(new T(s))}t(o)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+a}else t([])},J.prototype.load=function(t){var e,a,n=this.a.urls||[],i=this.a.families||[],l=this.a.testStrings||{},o=new v;for(e=0,a=n.length;e<a;e++)d(this.c,n[e],m(o));var r=[];for(e=0,a=i.length;e<a;e++)if((n=i[e].split(":"))[1])for(var s=n[1].split(","),u=0;u<s.length;u+=1)r.push(new T(n[0],s[u]));else r.push(new T(n[0]));w(o,(function(){t(r,l)}))};var Q="https://fonts.googleapis.com/css";function V(t){this.f=t,this.a=[],this.c={}}var X={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var at={Arimo:!0,Cousine:!0,Tinos:!0};function nt(t,e){this.c=t,this.a=e}function it(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new v,a=this.c,n=new K(this.a.api,this.a.text),i=this.a.families;!function(t,e){for(var a=e.length,n=0;n<a;n++){var i=e[n].split(":");3==i.length&&t.f.push(i.pop());var l="";2==i.length&&""!=i[1]&&(l=":"),t.a.push(i.join(l))}}(n,i);var l=new V(i);!function(t){for(var e=t.f.length,a=0;a<e;a++){var n=t.f[a].split(":"),i=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var o;if(o=[],r=n[1])for(var r,s=(r=r.split(",")).length,u=0;u<s;u++){var c;if((c=r[u]).match(/^[\w-]+$/))if(null==(f=tt.exec(c.toLowerCase())))c="";else{if(c=null==(c=f[2])||""==c?"n":Z[c],null==(f=f[1])||""==f)f="4";else var f=Y[f]||(isNaN(f)?"4":f.substr(0,1));c=[c,f].join("")}else c="";c&&o.push(c)}0<o.length&&(l=o),3==n.length&&(o=[],0<(n=(n=n[2])?n.split(","):o).length&&(n=X[n[0]])&&(t.c[i]=n))}for(t.c[i]||(n=X[i])&&(t.c[i]=n),n=0;n<l.length;n+=1)t.a.push(new T(i,l[n]))}}(l),d(a,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,a=[],n=0;n<e;n++)a.push(t.a[n].replace(/ /g,"+"));return e=t.c+"?family="+a.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(n),m(e)),w(e,(function(){t(l.a,l.c,at)}))},nt.prototype.load=function(t){var e=this.a.id,a=this.c.o;e?p(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){e=a.Typekit.config.fn;for(var n=[],i=0;i<e.length;i+=2)for(var l=e[i],o=e[i+1],r=0;r<o.length;r++)n.push(new T(l,o[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(n)}}),2e3):t([])},it.prototype.load=function(t){var e=this.f.id,a=this.c.o,n=this;e?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[e]=function(e,a){for(var i=0,l=a.fonts.length;i<l;++i){var o=a.fonts[i];n.a.push(new T(o.name,O("font-weight:"+o.weight+";font-style:"+o.style)))}t(n.a)},p(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var lt=new G(window);lt.a.c.custom=function(t,e){return new J(e,t)},lt.a.c.fontdeck=function(t,e){return new it(e,t)},lt.a.c.monotype=function(t,e){return new $(e,t)},lt.a.c.typekit=function(t,e){return new nt(e,t)},lt.a.c.google=function(t,e){return new et(e,t)};var ot={load:o(lt.load,lt)};void 0===(n=function(){return ot}.call(e,a,e,t))||(t.exports=n)}()},502:function(t,e,a){"use strict";a.r(e);var n=a(8),i=a(0),l=a.n(i),o=a(1),r=a(4),s=a(31),u=a(199),c=a(19),f=a(11),h=a(21),g=a(51),b=a(6),d=a(80),p=a(24),v=a(15);function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}).apply(this,arguments)}const w=t=>{t=t.parentProps;const{attributes:e,setAttributes:a}=t,{align:w,gap:y,gapTablet:_,gapMobile:T,stack:j,loadGoogleFonts:M,fontFamily:S,fontWeight:O,fontStyle:k,fontTransform:P,fontDecoration:E,alignTablet:x,alignMobile:A,fontSizeType:I,fontSize:C,fontSizeMobile:L,fontSizeTablet:B,lineHeightType:z,lineHeight:N,lineHeightMobile:F,lineHeightTablet:H,buttonSize:U,paddingUnit:W,mobilePaddingUnit:R,tabletPaddingUnit:D,paddingLink:G,topPadding:q,rightPadding:$,bottomPadding:J,leftPadding:K,topMobilePadding:Q,rightMobilePadding:V,bottomMobilePadding:X,leftMobilePadding:Y,topTabletPadding:Z,rightTabletPadding:tt,bottomTabletPadding:et,leftTabletPadding:at,topMargin:nt,rightMargin:it,bottomMargin:lt,leftMargin:ot,topMarginTablet:rt,rightMarginTablet:st,bottomMarginTablet:ut,leftMarginTablet:ct,topMarginMobile:ft,rightMarginMobile:ht,bottomMarginMobile:gt,leftMarginMobile:bt,marginType:dt,marginLink:pt}=e;let vt;if(!0===M){const t={google:{families:[S+(O?":"+O:"")]}};vt=l.a.createElement(u.a,{config:t})}return l.a.createElement(i.Suspense,{fallback:Object(n.a)()},l.a.createElement(r.BlockControls,null,l.a.createElement(b.Toolbar,{className:"uag-container-block-inserter"},l.a.createElement(r.Inserter,{clientId:t.clientId,rootClientId:t.clientId,__experimentalIsQuick:!0,position:"bottom right"}))),l.a.createElement(r.InspectorControls,null,l.a.createElement(d.a,null,l.a.createElement(p.b,p.a.general,l.a.createElement(v.a,{initialOpen:!0},l.a.createElement(c.a,{setAttributes:a,label:Object(o.__)("Overall Alignment","ultimate-addons-for-gutenberg"),data:{desktop:{value:w,label:"align"},tablet:{value:x,label:"alignTablet"},mobile:{value:A,label:"alignMobile"}},options:[{value:"left",icon:l.a.createElement(b.Icon,{icon:Object(f.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:l.a.createElement(b.Icon,{icon:Object(f.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:l.a.createElement(b.Icon,{icon:Object(f.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")},{value:"full",icon:l.a.createElement(b.Icon,{icon:Object(f.a)("fa fa-align-justify")}),tooltip:Object(o.__)("Full Width","ultimate-addons-for-gutenberg")}],showIcons:!0,responsive:!0}),l.a.createElement(c.a,{setAttributes:a,label:Object(o.__)("Stack Orientation","ultimate-addons-for-gutenberg"),data:{value:j,label:"stack"},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"desktop",label:Object(o.__)("Desktop","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(o.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(o.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(o.__)("Note: Choose on what breakpoint the buttons will stack.","ultimate-addons-for-gutenberg")}),l.a.createElement(h.a,{label:Object(o.__)("Gap Between Buttons","ultimate-addons-for-gutenberg"),data:{desktop:{value:y,label:"gap"},tablet:{value:_,label:"gapTablet"},mobile:{value:T,label:"gapMobile"}},min:0,max:200,displayUnit:!1,setAttributes:a}),l.a.createElement(b.SelectControl,{label:Object(o.__)("Button Size","ultimate-addons-for-gutenberg"),value:U,onChange:t=>a({buttonSize:t}),options:[{value:"default",label:Object(o.__)("Default","ultimate-addons-for-gutenberg")},{value:"small",label:Object(o.__)("Small","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"large",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")},{value:"extralarge",label:Object(o.__)("Extra Large","ultimate-addons-for-gutenberg")}]}))),l.a.createElement(p.b,p.a.style,l.a.createElement(v.a,{title:Object(o.__)("Text","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(s.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:a,loadGoogleFonts:{value:M,label:"loadGoogleFonts"},fontFamily:{value:S,label:"fontFamily"},fontWeight:{value:O,label:"fontWeight"},fontStyle:{value:k,label:"fontStyle"},transform:{value:P,label:"fontTransform"},decoration:{value:E,label:"fontDecoration"},fontSizeType:{value:I,label:"fontSizeType"},fontSize:{value:C,label:"fontSize"},fontSizeMobile:{value:L,label:"fontSizeMobile"},fontSizeTablet:{value:B,label:"fontSizeTablet"},lineHeightType:{value:z,label:"lineHeightType"},lineHeight:{value:N,label:"lineHeight"},lineHeightMobile:{value:F,label:"lineHeightMobile"},lineHeightTablet:{value:H,label:"lineHeightTablet"}})),l.a.createElement(v.a,{title:Object(o.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(g.a,m({},t,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:q,label:"topPadding"},valueRight:{value:$,label:"rightPadding"},valueBottom:{value:J,label:"bottomPadding"},valueLeft:{value:K,label:"leftPadding"},valueTopTablet:{value:Z,label:"topTabletPadding"},valueRightTablet:{value:tt,label:"rightTabletPadding"},valueBottomTablet:{value:et,label:"bottomTabletPadding"},valueLeftTablet:{value:at,label:"leftTabletPadding"},valueTopMobile:{value:Q,label:"topMobilePadding"},valueRightMobile:{value:V,label:"rightMobilePadding"},valueBottomMobile:{value:X,label:"bottomMobilePadding"},valueLeftMobile:{value:Y,label:"leftMobilePadding"},unit:{value:W,label:"paddingUnit"},mUnit:{value:R,label:"mobilePaddingUnit"},tUnit:{value:D,label:"tabletPaddingUnit"},attributes:e,setAttributes:a,link:{value:G,label:"paddingLink"}})),l.a.createElement(g.a,m({},t,{label:Object(o.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:nt,label:"topMargin"},valueRight:{value:it,label:"rightMargin"},valueBottom:{value:lt,label:"bottomMargin"},valueLeft:{value:ot,label:"leftMargin"},valueTopTablet:{value:rt,label:"topMarginTablet"},valueRightTablet:{value:st,label:"rightMarginTablet"},valueBottomTablet:{value:ut,label:"bottomMarginTablet"},valueLeftTablet:{value:ct,label:"leftMarginTablet"},valueTopMobile:{value:ft,label:"topMarginMobile"},valueRightMobile:{value:ht,label:"rightMarginMobile"},valueBottomMobile:{value:gt,label:"bottomMarginMobile"},valueLeftMobile:{value:bt,label:"leftMarginMobile"},unit:{value:dt,label:"marginType"},mUnit:{value:dt,label:"marginType"},tUnit:{value:dt,label:"marginType"},attributes:e,setAttributes:a,link:{value:pt,label:"marginLink"}})))),l.a.createElement(p.b,m({},p.a.advance,{parentProps:t})))),vt)};e.default=l.a.memo(w)}}]);