(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[10],{168:function(t,e,n){"use strict";var i,a,o=n(33),s=n.n(o),r=n(169),l=n.n(r),c=n(2);if(void 0===f)var f=[];const u=t=>{const[e,n]=Object(c.useState)([]);Object(c.useEffect)(()=>{s()},[]),Object(c.useEffect)(()=>{const{onStatus:n,config:i}=t;void 0!==e.status&&n(e.status),i!==e.config&&s()},[t]);const i=()=>{n({status:"loading"})},a=()=>{n({status:"active"})},o=()=>{n({status:"inactive"})},s=()=>{var e;f.includes(t.config.google.families[0])||(l.a.load({...t.config,loading:i,active:a,inactive:o}),e=t.config.google.families[0],f.includes(e)||f.push(e))},{children:r}=t;return r||null};u.propTypes={config:null===(i=s.a.object)||void 0===i?void 0:i.isRequired,children:s.a.element,onStatus:null===(a=s.a.func)||void 0===a?void 0:a.isRequired},u.defaultProps={onStatus:()=>{}},e.a=u},169:function(t,e,n){var i;!function(){function a(t,e,n){return t.call.apply(t.bind,arguments)}function o(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function s(t,e,n){return(s=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:o).apply(null,arguments)}var r=Date.now||function(){return+new Date};function l(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var c=!!window.FontFace;function f(t,e,n,i){if(e=t.c.createElement(e),n)for(var a in n)n.hasOwnProperty(a)&&("style"==a?e.style.cssText=n[a]:e.setAttribute(a,n[a]));return i&&e.appendChild(t.c.createTextNode(i)),e}function u(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t,e,n){e=e||[],n=n||[];for(var i=t.className.split(/\s+/),a=0;a<e.length;a+=1){for(var o=!1,s=0;s<i.length;s+=1)if(e[a]===i[s]){o=!0;break}o||i.push(e[a])}for(e=[],a=0;a<i.length;a+=1){for(o=!1,s=0;s<n.length;s+=1)if(i[a]===n[s]){o=!0;break}o||e.push(i[a])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function p(t,e){for(var n=t.className.split(/\s+/),i=0,a=n.length;i<a;i++)if(n[i]==e)return!0;return!1}function d(t,e,n){function i(){r&&a&&o&&(r(s),r=null)}e=f(t,"link",{rel:"stylesheet",href:e,media:"all"});var a=!1,o=!0,s=null,r=n||null;c?(e.onload=function(){a=!0,i()},e.onerror=function(){a=!0,s=Error("Stylesheet failed to load"),i()}):setTimeout((function(){a=!0,i()}),0),u(t,"head",e)}function m(t,e,n,i){var a=t.c.getElementsByTagName("head")[0];if(a){var o=f(t,"script",{src:e}),s=!1;return o.onload=o.onreadystatechange=function(){s||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(s=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&a.removeChild(o))},a.appendChild(o),setTimeout((function(){s||(s=!0,n&&n(Error("Script load timeout")))}),i||5e3),o}return null}function v(){this.a=0,this.c=null}function b(t){return t.a++,function(){t.a--,y(t)}}function w(t,e){t.c=e,y(t)}function y(t){0==t.a&&t.c&&(t.c(),t.c=null)}function _(t){this.a=t||"-"}function j(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function k(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var i=t[n].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?e.push("'"+i+"'"):e.push(i)}return e.join(",")}function O(t){return t.a+t.f}function E(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function x(t){var e=4,n="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?e=7:/[1-9]00/.test(i[1])&&(e=parseInt(i[1].substr(0,1),10)))),n+e}function S(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new _("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function T(t){if(t.g){var e=p(t.f,t.a.c("wf","active")),n=[],i=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),g(t.f,n,i)}A(t,"inactive")}function A(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,O(n)):t.h[e]())}function C(){this.c={}}function N(t,e){this.c=t,this.f=e,this.a=f(this.c,"span",{"aria-hidden":"true"},this.f)}function F(t){u(t.c,"body",t.a)}function I(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+k(t.c)+";font-style:"+E(t)+";font-weight:"+t.f+"00;"}function P(t,e,n,i,a,o){this.g=t,this.j=e,this.a=i,this.c=n,this.f=a||3e3,this.h=o||void 0}function W(t,e,n,i,a,o,s){this.v=t,this.B=e,this.c=n,this.a=i,this.s=s||"BESbswy",this.f={},this.w=a||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new N(this.c,this.s),this.h=new N(this.c,this.s),this.j=new N(this.c,this.s),this.m=new N(this.c,this.s),t=I(t=new j(this.a.c+",serif",O(this.a))),this.g.a.style.cssText=t,t=I(t=new j(this.a.c+",sans-serif",O(this.a))),this.h.a.style.cssText=t,t=I(t=new j("serif",O(this.a))),this.j.a.style.cssText=t,t=I(t=new j("sans-serif",O(this.a))),this.m.a.style.cssText=t,F(this.g),F(this.h),F(this.j),F(this.m)}_.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},P.prototype.start=function(){var t=this.c.o.document,e=this,n=r(),i=new Promise((function(i,a){!function o(){r()-n>=e.f?a():t.fonts.load(function(t){return E(t)+" "+t.f+"00 300px "+k(t.c)}(e.a),e.h).then((function(t){1<=t.length?i():setTimeout(o,25)}),(function(){a()}))}()})),a=null,o=new Promise((function(t,n){a=setTimeout(n,e.f)}));Promise.race([o,i]).then((function(){a&&(clearTimeout(a),a=null),e.g(e.a)}),(function(){e.j(e.a)}))};var B={D:"serif",C:"sans-serif"},D=null;function L(){if(null===D){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);D=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return D}function G(t,e,n){for(var i in B)if(B.hasOwnProperty(i)&&e===t.f[B[i]]&&n===t.f[B[i]])return!0;return!1}function q(t,e){setTimeout(s((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),e(this.a)}),t),0)}function R(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}W.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function t(e){var n,i=e.g.a.offsetWidth,a=e.h.a.offsetWidth;(n=i===e.f.serif&&a===e.f["sans-serif"])||(n=L()&&G(e,i,a)),n?r()-e.A>=e.w?L()&&G(e,i,a)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?q(e,e.v):q(e,e.B):function(e){setTimeout(s((function(){t(this)}),e),50)}(e):q(e,e.v)}(this)};var $=null;function H(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&g(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),A(t,"active")):T(t.a))}function M(t){this.j=t,this.a=new C,this.h=0,this.f=this.g=!0}function z(t,e,n,i,a){var o=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=a||null,r=i||{};if(0===n.length&&o)T(e.a);else{e.f+=n.length,o&&(e.j=o);var l,c=[];for(l=0;l<n.length;l++){var f=n[l],u=r[f.c],h=e.a,p=f;if(h.g&&g(h.f,[h.a.c("wf",p.c,O(p).toString(),"loading")]),A(h,"fontloading",p),h=null,null===$)if(window.FontFace){p=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var d=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);$=p?42<parseInt(p[1],10):!d}else $=!1;h=$?new P(s(e.g,e),s(e.h,e),e.c,f,e.s,u):new W(s(e.g,e),s(e.h,e),e.c,f,e.s,t,u),c.push(h)}for(l=0;l<c.length;l++)c[l].start()}}),0)}function J(t,e){this.c=t,this.a=e}function U(t,e){this.c=t,this.a=e}function K(t,e){this.c=t||V,this.a=[],this.f=[],this.g=e||""}R.prototype.g=function(t){var e=this.a;e.g&&g(e.f,[e.a.c("wf",t.c,O(t).toString(),"active")],[e.a.c("wf",t.c,O(t).toString(),"loading"),e.a.c("wf",t.c,O(t).toString(),"inactive")]),A(e,"fontactive",t),this.m=!0,H(this)},R.prototype.h=function(t){var e=this.a;if(e.g){var n=p(e.f,e.a.c("wf",t.c,O(t).toString(),"active")),i=[],a=[e.a.c("wf",t.c,O(t).toString(),"loading")];n||i.push(e.a.c("wf",t.c,O(t).toString(),"inactive")),g(e.f,i,a)}A(e,"fontinactive",t),H(this)},M.prototype.load=function(t){this.c=new l(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var i=[],a=n.timeout;!function(t){t.g&&g(t.f,[t.a.c("wf","loading")]),A(t,"loading")}(e),i=function(t,e,n){var i,a=[];for(i in e)if(e.hasOwnProperty(i)){var o=t.c[i];o&&a.push(o(e[i],n))}return a}(t.a,n,t.c);var o=new R(t.c,e,a);for(t.h=i.length,e=0,n=i.length;e<n;e++)i[e].load((function(e,n,i){z(t,o,e,n,i)}))}(this,new S(this.c,t),t)},J.prototype.load=function(t){var e=this,n=e.a.projectId,i=e.a.version;if(n){var a=e.c.o;m(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(i?"?v="+i:""),(function(i){i?t([]):(a["__MonotypeConfiguration__"+n]=function(){return e.a},function e(){if(a["__mti_fntLst"+n]){var i,o=a["__mti_fntLst"+n](),s=[];if(o)for(var r=0;r<o.length;r++){var l=o[r].fontfamily;null!=o[r].fontStyle&&null!=o[r].fontWeight?(i=o[r].fontStyle+o[r].fontWeight,s.push(new j(l,i))):s.push(new j(l))}t(s)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+n}else t([])},U.prototype.load=function(t){var e,n,i=this.a.urls||[],a=this.a.families||[],o=this.a.testStrings||{},s=new v;for(e=0,n=i.length;e<n;e++)d(this.c,i[e],b(s));var r=[];for(e=0,n=a.length;e<n;e++)if((i=a[e].split(":"))[1])for(var l=i[1].split(","),c=0;c<l.length;c+=1)r.push(new j(i[0],l[c]));else r.push(new j(i[0]));w(s,(function(){t(r,o)}))};var V="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Q={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Y={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var nt={Arimo:!0,Cousine:!0,Tinos:!0};function it(t,e){this.c=t,this.a=e}function at(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new v,n=this.c,i=new K(this.a.api,this.a.text),a=this.a.families;!function(t,e){for(var n=e.length,i=0;i<n;i++){var a=e[i].split(":");3==a.length&&t.f.push(a.pop());var o="";2==a.length&&""!=a[1]&&(o=":"),t.a.push(a.join(o))}}(i,a);var o=new X(a);!function(t){for(var e=t.f.length,n=0;n<e;n++){var i=t.f[n].split(":"),a=i[0].replace(/\+/g," "),o=["n4"];if(2<=i.length){var s;if(s=[],r=i[1])for(var r,l=(r=r.split(",")).length,c=0;c<l;c++){var f;if((f=r[c]).match(/^[\w-]+$/))if(null==(u=tt.exec(f.toLowerCase())))f="";else{if(f=null==(f=u[2])||""==f?"n":Z[f],null==(u=u[1])||""==u)u="4";else var u=Y[u]||(isNaN(u)?"4":u.substr(0,1));f=[f,u].join("")}else f="";f&&s.push(f)}0<s.length&&(o=s),3==i.length&&(s=[],0<(i=(i=i[2])?i.split(","):s).length&&(i=Q[i[0]])&&(t.c[a]=i))}for(t.c[a]||(i=Q[a])&&(t.c[a]=i),i=0;i<o.length;i+=1)t.a.push(new j(a,o[i]))}}(o),d(n,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],i=0;i<e;i++)n.push(t.a[i].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(i),b(e)),w(e,(function(){t(o.a,o.c,nt)}))},it.prototype.load=function(t){var e=this.a.id,n=this.c.o;e?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var i=[],a=0;a<e.length;a+=2)for(var o=e[a],s=e[a+1],r=0;r<s.length;r++)i.push(new j(o,s[r]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(i)}}),2e3):t([])},at.prototype.load=function(t){var e=this.f.id,n=this.c.o,i=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var a=0,o=n.fonts.length;a<o;++a){var s=n.fonts[a];i.a.push(new j(s.name,x("font-weight:"+s.weight+";font-style:"+s.style)))}t(i.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var ot=new M(window);ot.a.c.custom=function(t,e){return new U(e,t)},ot.a.c.fontdeck=function(t,e){return new at(e,t)},ot.a.c.monotype=function(t,e){return new J(e,t)},ot.a.c.typekit=function(t,e){return new it(e,t)},ot.a.c.google=function(t,e){return new et(e,t)};var st={load:s(ot.load,ot)};void 0===(i=function(){return st}.call(e,n,e,t))||(t.exports=i)}()},424:function(t,e,n){"use strict";n.r(e);var i=n(8),a=n(0),o=n.n(a),s=n(1),r=n(4),l=n(6),c=n(29),f=n(168),u=n(22),h=n(12),g=n(11),p=n(65),d=n(23),m=n(14);function v(){return(v=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}const b=t=>{t=t.parentProps;const{attributes:e,setAttributes:n}=t,{align:b,gap:w,stack:y,loadGoogleFonts:_,fontFamily:j,fontWeight:k,fontStyle:O,fontTransform:E,fontDecoration:x}=e;let S;if(!0===_){const t={google:{families:[j+(k?":"+k:"")]}};S=o.a.createElement(f.a,{config:t})}return o.a.createElement(a.Suspense,{fallback:Object(i.a)()},o.a.createElement(r.BlockControls,null,o.a.createElement(r.BlockAlignmentToolbar,{value:b,onChange:t=>{n({align:t})},controls:["left","center","right","full"]})),o.a.createElement(r.InspectorControls,null,o.a.createElement(p.a,null,o.a.createElement(d.b,d.a.general,o.a.createElement(m.a,{initialOpen:!0},o.a.createElement(u.a,{setAttributes:n,label:Object(s.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:b,label:"align"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(l.Icon,{icon:Object(h.a)("fa fa-align-left")}),tooltip:Object(s.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:o.a.createElement(l.Icon,{icon:Object(h.a)("fa fa-align-center")}),tooltip:Object(s.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(l.Icon,{icon:Object(h.a)("fa fa-align-right")}),tooltip:Object(s.__)("Right","ultimate-addons-for-gutenberg")},{value:"full",icon:o.a.createElement(l.Icon,{icon:Object(h.a)("fa fa-align-justify")}),tooltip:Object(s.__)("Full Width","ultimate-addons-for-gutenberg")}],showIcons:!0}),o.a.createElement(u.a,{setAttributes:n,label:Object(s.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:y,label:"stack"},options:[{value:"none",label:Object(s.__)("None","ultimate-addons-for-gutenberg")},{value:"desktop",label:Object(s.__)("Desktop","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(s.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(s.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(s.__)("Note: Choose on what breakpoint the buttons will stack.","ultimate-addons-for-gutenberg")}),o.a.createElement(g.a,{label:Object(s.__)("Gap Between Buttons","ultimate-addons-for-gutenberg"),setAttributes:n,value:w,onChange:t=>n({gap:t}),min:0,max:200,displayUnit:!1}))),o.a.createElement(d.b,d.a.style,o.a.createElement(m.a,{title:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(c.a,{label:Object(s.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:n,loadGoogleFonts:{value:_,label:"loadGoogleFonts"},fontFamily:{value:j,label:"fontFamily"},fontWeight:{value:k,label:"fontWeight"},fontStyle:{value:O,label:"fontStyle"},transform:{value:E,label:"fontTransform"},decoration:{value:x,label:"fontDecoration"},disableFontSize:!0,disableLineHeight:!0}))),o.a.createElement(d.b,v({},d.a.advance,{parentProps:t})))),S)};e.default=o.a.memo(b)}}]);