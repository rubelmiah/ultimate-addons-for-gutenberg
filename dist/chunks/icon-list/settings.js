(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[62],{242:function(t,e,n){t.exports=n(245)()},243:function(t,e,n){"use strict";var i=n(242),a=n.n(i),o=n(244),l=n.n(o),s=n(3);if(void 0===r)var r=[];const c=t=>{const[e,n]=Object(s.useState)([]);Object(s.useEffect)(()=>{c()},[]);const i=()=>{n({status:"loading"})},a=()=>{n({status:"active"})},o=()=>{n({status:"inactive"})},c=()=>{var e;r.includes(t.config.google.families[0])||(l.a.load({...t.config,loading:i,active:a,inactive:o}),e=t.config.google.families[0],r.includes(e)||r.push(e))};Object(s.useEffect)(()=>{const{onStatus:n,config:i}=t;void 0!==e.status&&n(e.status),i!==e.config&&c()},[void 0]);const{children:u}=t;return u||null};c.propTypes={config:a.a.object.isRequired,children:a.a.element,onStatus:a.a.func.isRequired},c.defaultProps={onStatus:()=>{}},e.a=c},244:function(t,e,n){var i;!function(){function a(t,e,n){return t.call.apply(t.bind,arguments)}function o(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function l(t,e,n){return(l=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:o).apply(null,arguments)}var s=Date.now||function(){return+new Date};function r(t,e){this.a=t,this.o=e||t,this.c=this.o.document}var c=!!window.FontFace;function u(t,e,n,i){if(e=t.c.createElement(e),n)for(var a in n)n.hasOwnProperty(a)&&("style"==a?e.style.cssText=n[a]:e.setAttribute(a,n[a]));return i&&e.appendChild(t.c.createTextNode(i)),e}function f(t,e,n){(t=t.c.getElementsByTagName(e)[0])||(t=document.documentElement),t.insertBefore(n,t.lastChild)}function h(t){t.parentNode&&t.parentNode.removeChild(t)}function g(t,e,n){e=e||[],n=n||[];for(var i=t.className.split(/\s+/),a=0;a<e.length;a+=1){for(var o=!1,l=0;l<i.length;l+=1)if(e[a]===i[l]){o=!0;break}o||i.push(e[a])}for(e=[],a=0;a<i.length;a+=1){for(o=!1,l=0;l<n.length;l+=1)if(i[a]===n[l]){o=!0;break}o||e.push(i[a])}t.className=e.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function d(t,e){for(var n=t.className.split(/\s+/),i=0,a=n.length;i<a;i++)if(n[i]==e)return!0;return!1}function p(t,e,n){function i(){s&&a&&o&&(s(l),s=null)}e=u(t,"link",{rel:"stylesheet",href:e,media:"all"});var a=!1,o=!0,l=null,s=n||null;c?(e.onload=function(){a=!0,i()},e.onerror=function(){a=!0,l=Error("Stylesheet failed to load"),i()}):setTimeout((function(){a=!0,i()}),0),f(t,"head",e)}function b(t,e,n,i){var a=t.c.getElementsByTagName("head")[0];if(a){var o=u(t,"script",{src:e}),l=!1;return o.onload=o.onreadystatechange=function(){l||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(l=!0,n&&n(null),o.onload=o.onreadystatechange=null,"HEAD"==o.parentNode.tagName&&a.removeChild(o))},a.appendChild(o),setTimeout((function(){l||(l=!0,n&&n(Error("Script load timeout")))}),i||5e3),o}return null}function m(){this.a=0,this.c=null}function v(t){return t.a++,function(){t.a--,y(t)}}function _(t,e){t.c=e,y(t)}function y(t){0==t.a&&t.c&&(t.c(),t.c=null)}function w(t){this.a=t||"-"}function j(t,e){this.c=t,this.f=4,this.a="n";var n=(e||"n4").match(/^([nio])([1-9])$/i);n&&(this.a=n[1],this.f=parseInt(n[2],10))}function O(t){var e=[];t=t.split(/,\s*/);for(var n=0;n<t.length;n++){var i=t[n].replace(/['"]/g,"");-1!=i.indexOf(" ")||/^\d/.test(i)?e.push("'"+i+"'"):e.push(i)}return e.join(",")}function T(t){return t.a+t.f}function S(t){var e="normal";return"o"===t.a?e="oblique":"i"===t.a&&(e="italic"),e}function x(t){var e=4,n="n",i=null;return t&&((i=t.match(/(normal|oblique|italic)/i))&&i[1]&&(n=i[1].substr(0,1).toLowerCase()),(i=t.match(/([1-9]00|normal|bold)/i))&&i[1]&&(/bold/i.test(i[1])?e=7:/[1-9]00/.test(i[1])&&(e=parseInt(i[1].substr(0,1),10)))),n+e}function k(t,e){this.c=t,this.f=t.o.document.documentElement,this.h=e,this.a=new w("-"),this.j=!1!==e.events,this.g=!1!==e.classes}function E(t){if(t.g){var e=d(t.f,t.a.c("wf","active")),n=[],i=[t.a.c("wf","loading")];e||n.push(t.a.c("wf","inactive")),g(t.f,n,i)}z(t,"inactive")}function z(t,e,n){t.j&&t.h[e]&&(n?t.h[e](n.c,T(n)):t.h[e]())}function A(){this.c={}}function C(t,e){this.c=t,this.f=e,this.a=u(this.c,"span",{"aria-hidden":"true"},this.f)}function P(t){f(t.c,"body",t.a)}function N(t){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+O(t.c)+";font-style:"+S(t)+";font-weight:"+t.f+"00;"}function I(t,e,n,i,a,o){this.g=t,this.j=e,this.a=i,this.c=n,this.f=a||3e3,this.h=o||void 0}function B(t,e,n,i,a,o,l){this.v=t,this.B=e,this.c=n,this.a=i,this.s=l||"BESbswy",this.f={},this.w=a||3e3,this.u=o||null,this.m=this.j=this.h=this.g=null,this.g=new C(this.c,this.s),this.h=new C(this.c,this.s),this.j=new C(this.c,this.s),this.m=new C(this.c,this.s),t=N(t=new j(this.a.c+",serif",T(this.a))),this.g.a.style.cssText=t,t=N(t=new j(this.a.c+",sans-serif",T(this.a))),this.h.a.style.cssText=t,t=N(t=new j("serif",T(this.a))),this.j.a.style.cssText=t,t=N(t=new j("sans-serif",T(this.a))),this.m.a.style.cssText=t,P(this.g),P(this.h),P(this.j),P(this.m)}w.prototype.c=function(t){for(var e=[],n=0;n<arguments.length;n++)e.push(arguments[n].replace(/[\W_]+/g,"").toLowerCase());return e.join(this.a)},I.prototype.start=function(){var t=this.c.o.document,e=this,n=s(),i=new Promise((function(i,a){!function o(){s()-n>=e.f?a():t.fonts.load(function(t){return S(t)+" "+t.f+"00 300px "+O(t.c)}(e.a),e.h).then((function(t){1<=t.length?i():setTimeout(o,25)}),(function(){a()}))}()})),a=null,o=new Promise((function(t,n){a=setTimeout(n,e.f)}));Promise.race([o,i]).then((function(){a&&(clearTimeout(a),a=null),e.g(e.a)}),(function(){e.j(e.a)}))};var H={D:"serif",C:"sans-serif"},F=null;function L(){if(null===F){var t=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);F=!!t&&(536>parseInt(t[1],10)||536===parseInt(t[1],10)&&11>=parseInt(t[2],10))}return F}function M(t,e,n){for(var i in H)if(H.hasOwnProperty(i)&&e===t.f[H[i]]&&n===t.f[H[i]])return!0;return!1}function W(t,e){setTimeout(l((function(){h(this.g.a),h(this.h.a),h(this.j.a),h(this.m.a),e(this.a)}),t),0)}function R(t,e,n){this.c=t,this.a=e,this.f=0,this.m=this.j=!1,this.s=n}B.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=s(),function t(e){var n,i=e.g.a.offsetWidth,a=e.h.a.offsetWidth;(n=i===e.f.serif&&a===e.f["sans-serif"])||(n=L()&&M(e,i,a)),n?s()-e.A>=e.w?L()&&M(e,i,a)&&(null===e.u||e.u.hasOwnProperty(e.a.c))?W(e,e.v):W(e,e.B):function(e){setTimeout(l((function(){t(this)}),e),50)}(e):W(e,e.v)}(this)};var U=null;function V(t){0==--t.f&&t.j&&(t.m?((t=t.a).g&&g(t.f,[t.a.c("wf","active")],[t.a.c("wf","loading"),t.a.c("wf","inactive")]),z(t,"active")):E(t.a))}function D(t){this.j=t,this.a=new A,this.h=0,this.f=this.g=!0}function G(t,e,n,i,a){var o=0==--t.h;(t.f||t.g)&&setTimeout((function(){var t=a||null,s=i||{};if(0===n.length&&o)E(e.a);else{e.f+=n.length,o&&(e.j=o);var r,c=[];for(r=0;r<n.length;r++){var u=n[r],f=s[u.c],h=e.a,d=u;if(h.g&&g(h.f,[h.a.c("wf",d.c,T(d).toString(),"loading")]),z(h,"fontloading",d),h=null,null===U)if(window.FontFace){d=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var p=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);U=d?42<parseInt(d[1],10):!p}else U=!1;h=U?new I(l(e.g,e),l(e.h,e),e.c,u,e.s,f):new B(l(e.g,e),l(e.h,e),e.c,u,e.s,t,f),c.push(h)}for(r=0;r<c.length;r++)c[r].start()}}),0)}function q(t,e){this.c=t,this.a=e}function $(t,e){this.c=t,this.a=e}function J(t,e){this.c=t||K,this.a=[],this.f=[],this.g=e||""}R.prototype.g=function(t){var e=this.a;e.g&&g(e.f,[e.a.c("wf",t.c,T(t).toString(),"active")],[e.a.c("wf",t.c,T(t).toString(),"loading"),e.a.c("wf",t.c,T(t).toString(),"inactive")]),z(e,"fontactive",t),this.m=!0,V(this)},R.prototype.h=function(t){var e=this.a;if(e.g){var n=d(e.f,e.a.c("wf",t.c,T(t).toString(),"active")),i=[],a=[e.a.c("wf",t.c,T(t).toString(),"loading")];n||i.push(e.a.c("wf",t.c,T(t).toString(),"inactive")),g(e.f,i,a)}z(e,"fontinactive",t),V(this)},D.prototype.load=function(t){this.c=new r(this.j,t.context||this.j),this.g=!1!==t.events,this.f=!1!==t.classes,function(t,e,n){var i=[],a=n.timeout;!function(t){t.g&&g(t.f,[t.a.c("wf","loading")]),z(t,"loading")}(e),i=function(t,e,n){var i,a=[];for(i in e)if(e.hasOwnProperty(i)){var o=t.c[i];o&&a.push(o(e[i],n))}return a}(t.a,n,t.c);var o=new R(t.c,e,a);for(t.h=i.length,e=0,n=i.length;e<n;e++)i[e].load((function(e,n,i){G(t,o,e,n,i)}))}(this,new k(this.c,t),t)},q.prototype.load=function(t){var e=this,n=e.a.projectId,i=e.a.version;if(n){var a=e.c.o;b(this.c,(e.a.api||"https://fast.fonts.net/jsapi")+"/"+n+".js"+(i?"?v="+i:""),(function(i){i?t([]):(a["__MonotypeConfiguration__"+n]=function(){return e.a},function e(){if(a["__mti_fntLst"+n]){var i,o=a["__mti_fntLst"+n](),l=[];if(o)for(var s=0;s<o.length;s++){var r=o[s].fontfamily;null!=o[s].fontStyle&&null!=o[s].fontWeight?(i=o[s].fontStyle+o[s].fontWeight,l.push(new j(r,i))):l.push(new j(r))}t(l)}else setTimeout((function(){e()}),50)}())})).id="__MonotypeAPIScript__"+n}else t([])},$.prototype.load=function(t){var e,n,i=this.a.urls||[],a=this.a.families||[],o=this.a.testStrings||{},l=new m;for(e=0,n=i.length;e<n;e++)p(this.c,i[e],v(l));var s=[];for(e=0,n=a.length;e<n;e++)if((i=a[e].split(":"))[1])for(var r=i[1].split(","),c=0;c<r.length;c+=1)s.push(new j(i[0],r[c]));else s.push(new j(i[0]));_(l,(function(){t(s,o)}))};var K="https://fonts.googleapis.com/css";function X(t){this.f=t,this.a=[],this.c={}}var Y={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},tt=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function et(t,e){this.c=t,this.a=e}var nt={Arimo:!0,Cousine:!0,Tinos:!0};function it(t,e){this.c=t,this.a=e}function at(t,e){this.c=t,this.f=e,this.a=[]}et.prototype.load=function(t){var e=new m,n=this.c,i=new J(this.a.api,this.a.text),a=this.a.families;!function(t,e){for(var n=e.length,i=0;i<n;i++){var a=e[i].split(":");3==a.length&&t.f.push(a.pop());var o="";2==a.length&&""!=a[1]&&(o=":"),t.a.push(a.join(o))}}(i,a);var o=new X(a);!function(t){for(var e=t.f.length,n=0;n<e;n++){var i=t.f[n].split(":"),a=i[0].replace(/\+/g," "),o=["n4"];if(2<=i.length){var l;if(l=[],s=i[1])for(var s,r=(s=s.split(",")).length,c=0;c<r;c++){var u;if((u=s[c]).match(/^[\w-]+$/))if(null==(f=tt.exec(u.toLowerCase())))u="";else{if(u=null==(u=f[2])||""==u?"n":Z[u],null==(f=f[1])||""==f)f="4";else var f=Q[f]||(isNaN(f)?"4":f.substr(0,1));u=[u,f].join("")}else u="";u&&l.push(u)}0<l.length&&(o=l),3==i.length&&(l=[],0<(i=(i=i[2])?i.split(","):l).length&&(i=Y[i[0]])&&(t.c[a]=i))}for(t.c[a]||(i=Y[a])&&(t.c[a]=i),i=0;i<o.length;i+=1)t.a.push(new j(a,o[i]))}}(o),p(n,function(t){if(0==t.a.length)throw Error("No fonts to load!");if(-1!=t.c.indexOf("kit="))return t.c;for(var e=t.a.length,n=[],i=0;i<e;i++)n.push(t.a[i].replace(/ /g,"+"));return e=t.c+"?family="+n.join("%7C"),0<t.f.length&&(e+="&subset="+t.f.join(",")),0<t.g.length&&(e+="&text="+encodeURIComponent(t.g)),e}(i),v(e)),_(e,(function(){t(o.a,o.c,nt)}))},it.prototype.load=function(t){var e=this.a.id,n=this.c.o;e?b(this.c,(this.a.api||"https://use.typekit.net")+"/"+e+".js",(function(e){if(e)t([]);else if(n.Typekit&&n.Typekit.config&&n.Typekit.config.fn){e=n.Typekit.config.fn;for(var i=[],a=0;a<e.length;a+=2)for(var o=e[a],l=e[a+1],s=0;s<l.length;s++)i.push(new j(o,l[s]));try{n.Typekit.load({events:!1,classes:!1,async:!0})}catch(t){}t(i)}}),2e3):t([])},at.prototype.load=function(t){var e=this.f.id,n=this.c.o,i=this;e?(n.__webfontfontdeckmodule__||(n.__webfontfontdeckmodule__={}),n.__webfontfontdeckmodule__[e]=function(e,n){for(var a=0,o=n.fonts.length;a<o;++a){var l=n.fonts[a];i.a.push(new j(l.name,x("font-weight:"+l.weight+";font-style:"+l.style)))}t(i.a)},b(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(t){return t.o.location.hostname||t.a.location.hostname}(this.c)+"/"+e+".js",(function(e){e&&t([])}))):t([])};var ot=new D(window);ot.a.c.custom=function(t,e){return new $(e,t)},ot.a.c.fontdeck=function(t,e){return new at(e,t)},ot.a.c.monotype=function(t,e){return new q(e,t)},ot.a.c.typekit=function(t,e){return new it(e,t)},ot.a.c.google=function(t,e){return new et(e,t)};var lt={load:l(ot.load,ot)};void 0===(i=function(){return lt}.call(e,n,e,t))||(t.exports=i)}()},245:function(t,e,n){"use strict";var i=n(246);function a(){}function o(){}o.resetWarningCache=a,t.exports=function(){function t(t,e,n,a,o,l){if(l!==i){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},246:function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},524:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),o=n(11),l=n(243),s=n(23),r=n(2),c=n(10),u=n(5),f=n(63),h=n(34),g=n(13),d=n(64),p=n(21),b=n(6);function m(){return(m=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}const v=t=>{t=t.parentProps;const{attributes:e,setAttributes:n,clientId:v}=t,{align:_,gap:y,inner_gap:w,stack:j,icon_layout:O,iconPosition:T,size:S,sizeType:x,sizeMobile:k,sizeTablet:E,hideLabel:z,borderRadius:A,bgSize:C,border:P,fontSize:N,fontSizeType:I,fontSizeMobile:B,fontSizeTablet:H,fontFamily:F,fontWeight:L,fontSubset:M,lineHeight:W,lineHeightType:R,lineHeightMobile:U,lineHeightTablet:V,loadGoogleFonts:D}=e;let G;if(!0===D){const t={google:{families:[F+(L?":"+L:"")]}};G=a.a.createElement(l.a,{config:t})}return a.a.createElement(i.Suspense,{fallback:Object(o.a)()},a.a.createElement(u.BlockControls,null,a.a.createElement(u.BlockAlignmentToolbar,{value:_,onChange:t=>{n({align:t})},controls:["left","center","right"]})),a.a.createElement(u.InspectorControls,null,a.a.createElement(f.a,null,a.a.createElement(h.b,h.a.general,a.a.createElement(b.PanelBody,{initialOpen:!0},a.a.createElement(p.a,{setAttributes:n,label:Object(r.__)("Layout","ultimate-addons-for-gutenberg"),data:{value:O,label:"icon_layout"},className:"uagb-multi-button-alignment-control",options:[{value:"horizontal",label:Object(r.__)("Horizontal","ultimate-addons-for-gutenberg"),tooltip:Object(r.__)("Horizontal","ultimate-addons-for-gutenberg")},{value:"vertical",label:Object(r.__)("Vertical","ultimate-addons-for-gutenberg"),tooltip:Object(r.__)("Vertical","ultimate-addons-for-gutenberg")}],showIcons:!1}),"horizontal"===O&&a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,{setAttributes:n,label:Object(r.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:j,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(r.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(r.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(r.__)("Tablet","ultimate-addons-for-gutenberg"),tooltip:Object(r.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(r.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(r.__)("Mobile","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(r.__)("Note: Choose on what breakpoint the Icons will stack.","ultimate-addons-for-gutenberg")})),!z&&a.a.createElement(a.a.Fragment,null,a.a.createElement(p.a,{setAttributes:n,label:Object(r.__)("Icon Alignment","ultimate-addons-for-gutenberg"),data:{value:T,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:"Top",tooltip:Object(r.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:"Middle",tooltip:Object(r.__)("Middle","ultimate-addons-for-gutenberg")}],showIcons:!1,help:Object(r.__)("Note: This manages the Icon Position with respect to the Label.","ultimate-addons-for-gutenberg")})),a.a.createElement(b.ToggleControl,{label:Object(r.__)("Hide Labels","ultimate-addons-for-gutenberg"),checked:z,onChange:t=>(t=>{Object(c.select)("core/block-editor").getBlocks(v).forEach(e=>{e.attributes.hideLabel=t}),n({hideLabel:t})})(t)}))),a.a.createElement(h.b,h.a.style,a.a.createElement(b.PanelBody,{title:Object(r.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!0},a.a.createElement(d.a,{label:Object(r.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:S,label:"size"},tablet:{value:E,label:"sizeTablet"},mobile:{value:k,label:"sizeMobile"}},min:0,max:500,unit:{value:x,label:"sizeType"},units:[{name:Object(r.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(r.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"}],setAttributes:n}),a.a.createElement(g.a,{label:Object(r.__)("Background Size (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:C,onChange:t=>n({bgSize:t}),min:0,max:500,displayUnit:!1,help:Object(r.__)("Note: Background Size option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")}),a.a.createElement(g.a,{label:Object(r.__)("Border (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:P,onChange:t=>n({border:t}),min:0,max:10,displayUnit:!1,help:Object(r.__)("Note: Border option is useful when one adds border color to the icons.","ultimate-addons-for-gutenberg")}),a.a.createElement(g.a,{label:Object(r.__)("Border Radius (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:A,onChange:t=>n({borderRadius:t}),min:0,max:500,displayUnit:!1,help:Object(r.__)("Note: Border Radius option is useful when one adds background color to the icons.","ultimate-addons-for-gutenberg")})),!z&&a.a.createElement(b.PanelBody,{title:Object(r.__)("Label","ultimate-addons-for-gutenberg"),initialOpen:!1},a.a.createElement(g.a,{label:Object(r.__)("Gap between Icon and Label (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:w,onChange:t=>n({inner_gap:t}),min:0,max:100,displayUnit:!1}),a.a.createElement(s.a,{label:Object(r.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e,setAttributes:n,loadGoogleFonts:{value:D,label:"loadGoogleFonts"},fontFamily:{value:F,label:"fontFamily"},fontWeight:{value:L,label:"fontWeight"},fontSubset:{value:M,label:"fontSubset"},fontSizeType:{value:I,label:"fontSizeType"},fontSize:{value:N,label:"fontSize"},fontSizeMobile:{value:B,label:"fontSizeMobile"},fontSizeTablet:{value:H,label:"fontSizeTablet"},lineHeightType:{value:R,label:"lineHeightType"},lineHeight:{value:W,label:"lineHeight"},lineHeightMobile:{value:U,label:"lineHeightMobile"},lineHeightTablet:{value:V,label:"lineHeightTablet"}})),a.a.createElement(b.PanelBody,{title:Object(r.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},a.a.createElement(g.a,{label:Object(r.__)("Gap between Items (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:y,onChange:t=>n({gap:t}),min:0,max:100,displayUnit:!1,help:Object(r.__)("Note: For better editing experience, the gap between items might look larger than applied. Viewing in frontend will show the actual results.","ultimate-addons-for-gutenberg")}))),a.a.createElement(h.b,m({},h.a.advance,{parentProps:t})))),G)};e.default=a.a.memo(v)}}]);