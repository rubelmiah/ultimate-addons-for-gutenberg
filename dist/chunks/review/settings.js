(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[86],{242:function(e,t,a){e.exports=a(245)()},243:function(e,t,a){"use strict";var n=a(242),o=a.n(n),l=a(244),i=a.n(l),r=a(3);if(void 0===u)var u=[];const s=e=>{const[t,a]=Object(r.useState)([]);Object(r.useEffect)(()=>{s()},[]);const n=()=>{a({status:"loading"})},o=()=>{a({status:"active"})},l=()=>{a({status:"inactive"})},s=()=>{var t;u.includes(e.config.google.families[0])||(i.a.load({...e.config,loading:n,active:o,inactive:l}),t=e.config.google.families[0],u.includes(t)||u.push(t))};Object(r.useEffect)(()=>{const{onStatus:a,config:n}=e;void 0!==t.status&&a(t.status),n!==t.config&&s()},[void 0]);const{children:c}=e;return c||null};s.propTypes={config:o.a.object.isRequired,children:o.a.element,onStatus:o.a.func.isRequired},s.defaultProps={onStatus:()=>{}},t.a=s},244:function(e,t,a){var n;!function(){function o(e,t,a){return e.call.apply(e.bind,arguments)}function l(e,t,a){if(!e)throw Error();if(2<arguments.length){var n=Array.prototype.slice.call(arguments,2);return function(){var a=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(a,n),e.apply(t,a)}}return function(){return e.apply(t,arguments)}}function i(e,t,a){return(i=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}var r=Date.now||function(){return+new Date};function u(e,t){this.a=e,this.o=t||e,this.c=this.o.document}var s=!!window.FontFace;function c(e,t,a,n){if(t=e.c.createElement(t),a)for(var o in a)a.hasOwnProperty(o)&&("style"==o?t.style.cssText=a[o]:t.setAttribute(o,a[o]));return n&&t.appendChild(e.c.createTextNode(n)),t}function g(e,t,a){(e=e.c.getElementsByTagName(t)[0])||(e=document.documentElement),e.insertBefore(a,e.lastChild)}function d(e){e.parentNode&&e.parentNode.removeChild(e)}function b(e,t,a){t=t||[],a=a||[];for(var n=e.className.split(/\s+/),o=0;o<t.length;o+=1){for(var l=!1,i=0;i<n.length;i+=1)if(t[o]===n[i]){l=!0;break}l||n.push(t[o])}for(t=[],o=0;o<n.length;o+=1){for(l=!1,i=0;i<a.length;i+=1)if(n[o]===a[i]){l=!0;break}l||t.push(n[o])}e.className=t.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function f(e,t){for(var a=e.className.split(/\s+/),n=0,o=a.length;n<o;n++)if(a[n]==t)return!0;return!1}function h(e,t,a){function n(){r&&o&&l&&(r(i),r=null)}t=c(e,"link",{rel:"stylesheet",href:t,media:"all"});var o=!1,l=!0,i=null,r=a||null;s?(t.onload=function(){o=!0,n()},t.onerror=function(){o=!0,i=Error("Stylesheet failed to load"),n()}):setTimeout((function(){o=!0,n()}),0),g(e,"head",t)}function m(e,t,a,n){var o=e.c.getElementsByTagName("head")[0];if(o){var l=c(e,"script",{src:t}),i=!1;return l.onload=l.onreadystatechange=function(){i||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(i=!0,a&&a(null),l.onload=l.onreadystatechange=null,"HEAD"==l.parentNode.tagName&&o.removeChild(l))},o.appendChild(l),setTimeout((function(){i||(i=!0,a&&a(Error("Script load timeout")))}),n||5e3),l}return null}function p(){this.a=0,this.c=null}function v(e){return e.a++,function(){e.a--,y(e)}}function _(e,t){e.c=t,y(e)}function y(e){0==e.a&&e.c&&(e.c(),e.c=null)}function O(e){this.a=e||"-"}function j(e,t){this.c=e,this.f=4,this.a="n";var a=(t||"n4").match(/^([nio])([1-9])$/i);a&&(this.a=a[1],this.f=parseInt(a[2],10))}function T(e){var t=[];e=e.split(/,\s*/);for(var a=0;a<e.length;a++){var n=e[a].replace(/['"]/g,"");-1!=n.indexOf(" ")||/^\d/.test(n)?t.push("'"+n+"'"):t.push(n)}return t.join(",")}function w(e){return e.a+e.f}function S(e){var t="normal";return"o"===e.a?t="oblique":"i"===e.a&&(t="italic"),t}function C(e){var t=4,a="n",n=null;return e&&((n=e.match(/(normal|oblique|italic)/i))&&n[1]&&(a=n[1].substr(0,1).toLowerCase()),(n=e.match(/([1-9]00|normal|bold)/i))&&n[1]&&(/bold/i.test(n[1])?t=7:/[1-9]00/.test(n[1])&&(t=parseInt(n[1].substr(0,1),10)))),a+t}function E(e,t){this.c=e,this.f=e.o.document.documentElement,this.h=t,this.a=new O("-"),this.j=!1!==t.events,this.g=!1!==t.classes}function F(e){if(e.g){var t=f(e.f,e.a.c("wf","active")),a=[],n=[e.a.c("wf","loading")];t||a.push(e.a.c("wf","inactive")),b(e.f,a,n)}k(e,"inactive")}function k(e,t,a){e.j&&e.h[t]&&(a?e.h[t](a.c,w(a)):e.h[t]())}function P(){this.c={}}function H(e,t){this.c=e,this.f=t,this.a=c(this.c,"span",{"aria-hidden":"true"},this.f)}function x(e){g(e.c,"body",e.a)}function L(e){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+T(e.c)+";font-style:"+S(e)+";font-weight:"+e.f+"00;"}function A(e,t,a,n,o,l){this.g=e,this.j=t,this.a=n,this.c=a,this.f=o||3e3,this.h=l||void 0}function z(e,t,a,n,o,l,i){this.v=e,this.B=t,this.c=a,this.a=n,this.s=i||"BESbswy",this.f={},this.w=o||3e3,this.u=l||null,this.m=this.j=this.h=this.g=null,this.g=new H(this.c,this.s),this.h=new H(this.c,this.s),this.j=new H(this.c,this.s),this.m=new H(this.c,this.s),e=L(e=new j(this.a.c+",serif",w(this.a))),this.g.a.style.cssText=e,e=L(e=new j(this.a.c+",sans-serif",w(this.a))),this.h.a.style.cssText=e,e=L(e=new j("serif",w(this.a))),this.j.a.style.cssText=e,e=L(e=new j("sans-serif",w(this.a))),this.m.a.style.cssText=e,x(this.g),x(this.h),x(this.j),x(this.m)}O.prototype.c=function(e){for(var t=[],a=0;a<arguments.length;a++)t.push(arguments[a].replace(/[\W_]+/g,"").toLowerCase());return t.join(this.a)},A.prototype.start=function(){var e=this.c.o.document,t=this,a=r(),n=new Promise((function(n,o){!function l(){r()-a>=t.f?o():e.fonts.load(function(e){return S(e)+" "+e.f+"00 300px "+T(e.c)}(t.a),t.h).then((function(e){1<=e.length?n():setTimeout(l,25)}),(function(){o()}))}()})),o=null,l=new Promise((function(e,a){o=setTimeout(a,t.f)}));Promise.race([l,n]).then((function(){o&&(clearTimeout(o),o=null),t.g(t.a)}),(function(){t.j(t.a)}))};var I={D:"serif",C:"sans-serif"},M=null;function B(){if(null===M){var e=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);M=!!e&&(536>parseInt(e[1],10)||536===parseInt(e[1],10)&&11>=parseInt(e[2],10))}return M}function N(e,t,a){for(var n in I)if(I.hasOwnProperty(n)&&t===e.f[I[n]]&&a===e.f[I[n]])return!0;return!1}function R(e,t){setTimeout(i((function(){d(this.g.a),d(this.h.a),d(this.j.a),d(this.m.a),t(this.a)}),e),0)}function D(e,t,a){this.c=e,this.a=t,this.f=0,this.m=this.j=!1,this.s=a}z.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=r(),function e(t){var a,n=t.g.a.offsetWidth,o=t.h.a.offsetWidth;(a=n===t.f.serif&&o===t.f["sans-serif"])||(a=B()&&N(t,n,o)),a?r()-t.A>=t.w?B()&&N(t,n,o)&&(null===t.u||t.u.hasOwnProperty(t.a.c))?R(t,t.v):R(t,t.B):function(t){setTimeout(i((function(){e(this)}),t),50)}(t):R(t,t.v)}(this)};var W=null;function V(e){0==--e.f&&e.j&&(e.m?((e=e.a).g&&b(e.f,[e.a.c("wf","active")],[e.a.c("wf","loading"),e.a.c("wf","inactive")]),k(e,"active")):F(e.a))}function G(e){this.j=e,this.a=new P,this.h=0,this.f=this.g=!0}function U(e,t,a,n,o){var l=0==--e.h;(e.f||e.g)&&setTimeout((function(){var e=o||null,r=n||{};if(0===a.length&&l)F(t.a);else{t.f+=a.length,l&&(t.j=l);var u,s=[];for(u=0;u<a.length;u++){var c=a[u],g=r[c.c],d=t.a,f=c;if(d.g&&b(d.f,[d.a.c("wf",f.c,w(f).toString(),"loading")]),k(d,"fontloading",f),d=null,null===W)if(window.FontFace){f=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var h=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);W=f?42<parseInt(f[1],10):!h}else W=!1;d=W?new A(i(t.g,t),i(t.h,t),t.c,c,t.s,g):new z(i(t.g,t),i(t.h,t),t.c,c,t.s,e,g),s.push(d)}for(u=0;u<s.length;u++)s[u].start()}}),0)}function q(e,t){this.c=e,this.a=t}function $(e,t){this.c=e,this.a=t}function J(e,t){this.c=e||K,this.a=[],this.f=[],this.g=t||""}D.prototype.g=function(e){var t=this.a;t.g&&b(t.f,[t.a.c("wf",e.c,w(e).toString(),"active")],[t.a.c("wf",e.c,w(e).toString(),"loading"),t.a.c("wf",e.c,w(e).toString(),"inactive")]),k(t,"fontactive",e),this.m=!0,V(this)},D.prototype.h=function(e){var t=this.a;if(t.g){var a=f(t.f,t.a.c("wf",e.c,w(e).toString(),"active")),n=[],o=[t.a.c("wf",e.c,w(e).toString(),"loading")];a||n.push(t.a.c("wf",e.c,w(e).toString(),"inactive")),b(t.f,n,o)}k(t,"fontinactive",e),V(this)},G.prototype.load=function(e){this.c=new u(this.j,e.context||this.j),this.g=!1!==e.events,this.f=!1!==e.classes,function(e,t,a){var n=[],o=a.timeout;!function(e){e.g&&b(e.f,[e.a.c("wf","loading")]),k(e,"loading")}(t),n=function(e,t,a){var n,o=[];for(n in t)if(t.hasOwnProperty(n)){var l=e.c[n];l&&o.push(l(t[n],a))}return o}(e.a,a,e.c);var l=new D(e.c,t,o);for(e.h=n.length,t=0,a=n.length;t<a;t++)n[t].load((function(t,a,n){U(e,l,t,a,n)}))}(this,new E(this.c,e),e)},q.prototype.load=function(e){var t=this,a=t.a.projectId,n=t.a.version;if(a){var o=t.c.o;m(this.c,(t.a.api||"https://fast.fonts.net/jsapi")+"/"+a+".js"+(n?"?v="+n:""),(function(n){n?e([]):(o["__MonotypeConfiguration__"+a]=function(){return t.a},function t(){if(o["__mti_fntLst"+a]){var n,l=o["__mti_fntLst"+a](),i=[];if(l)for(var r=0;r<l.length;r++){var u=l[r].fontfamily;null!=l[r].fontStyle&&null!=l[r].fontWeight?(n=l[r].fontStyle+l[r].fontWeight,i.push(new j(u,n))):i.push(new j(u))}e(i)}else setTimeout((function(){t()}),50)}())})).id="__MonotypeAPIScript__"+a}else e([])},$.prototype.load=function(e){var t,a,n=this.a.urls||[],o=this.a.families||[],l=this.a.testStrings||{},i=new p;for(t=0,a=n.length;t<a;t++)h(this.c,n[t],v(i));var r=[];for(t=0,a=o.length;t<a;t++)if((n=o[t].split(":"))[1])for(var u=n[1].split(","),s=0;s<u.length;s+=1)r.push(new j(n[0],u[s]));else r.push(new j(n[0]));_(i,(function(){e(r,l)}))};var K="https://fonts.googleapis.com/css";function X(e){this.f=e,this.a=[],this.c={}}var Y={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Q={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Z={i:"i",italic:"i",n:"n",normal:"n"},ee=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function te(e,t){this.c=e,this.a=t}var ae={Arimo:!0,Cousine:!0,Tinos:!0};function ne(e,t){this.c=e,this.a=t}function oe(e,t){this.c=e,this.f=t,this.a=[]}te.prototype.load=function(e){var t=new p,a=this.c,n=new J(this.a.api,this.a.text),o=this.a.families;!function(e,t){for(var a=t.length,n=0;n<a;n++){var o=t[n].split(":");3==o.length&&e.f.push(o.pop());var l="";2==o.length&&""!=o[1]&&(l=":"),e.a.push(o.join(l))}}(n,o);var l=new X(o);!function(e){for(var t=e.f.length,a=0;a<t;a++){var n=e.f[a].split(":"),o=n[0].replace(/\+/g," "),l=["n4"];if(2<=n.length){var i;if(i=[],r=n[1])for(var r,u=(r=r.split(",")).length,s=0;s<u;s++){var c;if((c=r[s]).match(/^[\w-]+$/))if(null==(g=ee.exec(c.toLowerCase())))c="";else{if(c=null==(c=g[2])||""==c?"n":Z[c],null==(g=g[1])||""==g)g="4";else var g=Q[g]||(isNaN(g)?"4":g.substr(0,1));c=[c,g].join("")}else c="";c&&i.push(c)}0<i.length&&(l=i),3==n.length&&(i=[],0<(n=(n=n[2])?n.split(","):i).length&&(n=Y[n[0]])&&(e.c[o]=n))}for(e.c[o]||(n=Y[o])&&(e.c[o]=n),n=0;n<l.length;n+=1)e.a.push(new j(o,l[n]))}}(l),h(a,function(e){if(0==e.a.length)throw Error("No fonts to load!");if(-1!=e.c.indexOf("kit="))return e.c;for(var t=e.a.length,a=[],n=0;n<t;n++)a.push(e.a[n].replace(/ /g,"+"));return t=e.c+"?family="+a.join("%7C"),0<e.f.length&&(t+="&subset="+e.f.join(",")),0<e.g.length&&(t+="&text="+encodeURIComponent(e.g)),t}(n),v(t)),_(t,(function(){e(l.a,l.c,ae)}))},ne.prototype.load=function(e){var t=this.a.id,a=this.c.o;t?m(this.c,(this.a.api||"https://use.typekit.net")+"/"+t+".js",(function(t){if(t)e([]);else if(a.Typekit&&a.Typekit.config&&a.Typekit.config.fn){t=a.Typekit.config.fn;for(var n=[],o=0;o<t.length;o+=2)for(var l=t[o],i=t[o+1],r=0;r<i.length;r++)n.push(new j(l,i[r]));try{a.Typekit.load({events:!1,classes:!1,async:!0})}catch(e){}e(n)}}),2e3):e([])},oe.prototype.load=function(e){var t=this.f.id,a=this.c.o,n=this;t?(a.__webfontfontdeckmodule__||(a.__webfontfontdeckmodule__={}),a.__webfontfontdeckmodule__[t]=function(t,a){for(var o=0,l=a.fonts.length;o<l;++o){var i=a.fonts[o];n.a.push(new j(i.name,C("font-weight:"+i.weight+";font-style:"+i.style)))}e(n.a)},m(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(e){return e.o.location.hostname||e.a.location.hostname}(this.c)+"/"+t+".js",(function(t){t&&e([])}))):e([])};var le=new G(window);le.a.c.custom=function(e,t){return new $(t,e)},le.a.c.fontdeck=function(e,t){return new oe(t,e)},le.a.c.monotype=function(e,t){return new q(t,e)},le.a.c.typekit=function(e,t){return new ne(t,e)},le.a.c.google=function(e,t){return new te(t,e)};var ie={load:i(le.load,le)};void 0===(n=function(){return ie}.call(t,a,t,e))||(e.exports=n)}()},245:function(e,t,a){"use strict";var n=a(246);function o(){}function l(){}l.resetWarningCache=o,e.exports=function(){function e(e,t,a,o,l,i){if(i!==n){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:l,resetWarningCache:o};return a.PropTypes=a,a}},246:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},249:function(e,t,a){"use strict";var n,o=a(2),l=a(6),i=a(5),r=a(1),u=a.n(r),s=a(17),c=a.n(s),g=a(250),d=0,b={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=g.a.locals||{},f.use=function(){return d++||(n=c()(g.a,b)),f},f.unuse=function(){d>0&&!--d&&(n(),n=null)};var h=f;t.a=e=>{Object(r.useLayoutEffect)(()=>(h.use(),()=>{h.unuse()}),[]);const{onSelectImage:t,backgroundImage:a,onRemoveImage:n,showVideoInput:s,label:c}=e;let g=Object(o.__)("Image","ultimate-addons-for-gutenberg"),d=Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),b=Object(o.__)("Replace Image","ultimate-addons-for-gutenberg"),f=Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"),m=["image"];return s&&(g=Object(o.__)("Video","ultimate-addons-for-gutenberg"),d=Object(o.__)("Select Video","ultimate-addons-for-gutenberg"),b=Object(o.__)("Replace Video","ultimate-addons-for-gutenberg"),f=Object(o.__)("Remove Video","ultimate-addons-for-gutenberg"),m=["video"]),g=c||g,u.a.createElement(l.BaseControl,{className:"editor-bg-image-control",id:"uagb-option-selector-"+c,label:g},u.a.createElement("div",{className:"uagb-bg-image"},u.a.createElement(i.MediaUpload,{title:d,onSelect:t,allowedTypes:m,value:a,render:({open:e})=>u.a.createElement(l.Button,{isSecondary:!0,onClick:e},null!=a&&a.url?b:d)}),(null==a?void 0:a.url)&&u.a.createElement(l.Button,{className:"uagb-rm-btn",onClick:n,isLink:!0,isDestructive:!0},f),e.help&&u.a.createElement("p",{className:"uag-control-help-notice"},e.help)))}},250:function(e,t,a){"use strict";var n=a(18),o=a.n(n)()((function(e){return e[1]}));o.push([e.i,".uagb-bg-image {\n  border-radius: 2px;\n  background-color: #f0f0f0;\n  min-height: 90px;\n  padding: 8px 0;\n  text-align: center;\n  display: flex;\n  width: 100%;\n  transition: all 0.1s ease-out;\n  box-shadow: 0 0 0 0 #0085ba;\n  margin-top: 10px;\n  align-items: center;\n  justify-content: center; }\n  .uagb-bg-image .components-button {\n    margin: 0;\n    padding: 0; }\n  .uagb-bg-image .uagb-rm-btn {\n    margin-left: 10px; }\n\n.uagb-bg-image .components-button:focus:not(:disabled),\n.uagb-bg-image .components-button.is-secondary:hover:not(:disabled),\n.components-button.is-tertiary:hover:not(:disabled),\n.uagb-bg-image .components-button.is-secondary,\n.components-button.is-tertiary {\n  box-shadow: none; }\n",""]),t.a=o},545:function(e,t,a){"use strict";a.r(t),a.d(t,"removeFromArray",(function(){return O}));var n=a(23),o=a(243),l=a(2),i=a(1),r=a.n(i),u=a(11),s=a(5),c=a(16),g=a(63),d=a(34),b=a(249),f=a(41),h=a(21),m=a(15),p=a.n(m),v=a(6);function _(){return(_=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}let y=[{value:"thumbnail",label:Object(l.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(l.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(l.__)("Large","ultimate-addons-for-gutenberg")}];const O=(e,t)=>e.filter(e=>Array.isArray(t)?!t.includes(e):e!==t),j=e=>{e=e.parentProps;const{attributes:t,setAttributes:a}=e,{enableSchema:m,itemType:O,itemSubtype:j,sku:T,identifier:w,identifierType:S,offerType:C,offerCurrency:E,offerStatus:F,offerPrice:k,offerExpiry:P,datepublish:H,ctaLink:x,ctaTarget:L,brand:A,headingTag:z,mainimage:I,imgSize:M,showFeature:B,showAuthor:N,starColor:R,descColor:D,titleColor:W,contentColor:V,headFontFamily:G,headFontWeight:U,headFontSubset:q,headFontSizeType:$,headFontSize:J,headFontSizeMobile:K,headFontSizeTablet:X,headLineHeightType:Y,headLineHeight:Q,headLineHeightMobile:Z,headLineHeightTablet:ee,headLoadGoogleFonts:te,subHeadFontFamily:ae,subHeadFontWeight:ne,subHeadFontSubset:oe,subHeadFontSize:le,subHeadFontSizeType:ie,subHeadFontSizeMobile:re,subHeadFontSizeTablet:ue,subHeadLineHeight:se,subHeadLineHeightType:ce,subHeadLineHeightMobile:ge,subHeadLineHeightTablet:de,subHeadLoadGoogleFonts:be,contentLoadGoogleFonts:fe,contentFontFamily:he,contentFontWeight:me,contentFontSubset:pe,contentFontSizeType:ve,contentLineHeightType:_e,contentFontSize:ye,contentFontSizeTablet:Oe,contentFontSizeMobile:je,contentLineHeight:Te,contentLineHeightTablet:we,contentLineHeightMobile:Se,topPadding:Ce,bottomPadding:Ee,rightPadding:Fe,leftPadding:ke,paddingTopMobile:Pe,paddingBottomMobile:He,paddingRightMobile:xe,paddingLeftMobile:Le,paddingTopTablet:Ae,paddingBottomTablet:ze,paddingRightTablet:Ie,paddingLeftTablet:Me,spacingLink:Be,paddingUnit:Ne,mobilePaddingUnit:Re,tabletPaddingUnit:De,authorColor:We,summaryColor:Ve,starActiveColor:Ge,starOutlineColor:Ue,enableDescription:qe,enableImage:$e,overallAlignment:Je,isbn:Ke,bookAuthorName:Xe,reviewPublisher:Ye,provider:Qe,appCategory:Ze,operatingSystem:et,datecreated:tt,directorname:at}=t;let nt,ot,lt;if(!0===te){const e={google:{families:[G+(U?":"+U:"")]}};ot=r.a.createElement(o.a,{config:e})}if(!0===be){const e={google:{families:[ae+(ne?":"+ne:"")]}};lt=r.a.createElement(o.a,{config:e})}if(!0===fe){const e={google:{families:[he+(me?":"+me:"")]}};nt=r.a.createElement(o.a,{config:e})}let it;const rt={Book:[{value:"Audiobook",label:Object(l.__)("Audio book","ultimate-addons-for-gutenberg")}],Product:[{value:"IndividualProduct",label:Object(l.__)("Individual Product","ultimate-addons-for-gutenberg")},{value:"ProductCollection",label:Object(l.__)("Product Collection","ultimate-addons-for-gutenberg")},{value:"ProductGroup",label:Object(l.__)("Product Group","ultimate-addons-for-gutenberg")},{value:"ProductModel",label:Object(l.__)("Product Model","ultimate-addons-for-gutenberg")},{value:"SomeProducts",label:Object(l.__)("Some Products","ultimate-addons-for-gutenberg")},{value:"Vehicle",label:Object(l.__)("Vehicle","ultimate-addons-for-gutenberg")}],SoftwareApplication:[{value:"MobileApplication",label:Object(l.__)("Mobile Application","ultimate-addons-for-gutenberg")},{value:"VideoGame",label:Object(l.__)("Video Game","ultimate-addons-for-gutenberg")},{value:"WebApplication",label:Object(l.__)("Web Application","ultimate-addons-for-gutenberg")}]};switch(O){default:break;case"Book":it=r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("ISBN","ultimate-addons-for-gutenberg"),value:Ke,onChange:e=>a({isbn:e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),r.a.createElement(v.TextControl,{label:Object(l.__)("Book author name","ultimate-addons-for-gutenberg"),value:Xe,onChange:e=>a({bookAuthorName:e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}));break;case"Course":it=r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("Provider","ultimate-addons-for-gutenberg"),value:Qe,onChange:e=>a({provider:e})}));break;case"SoftwareApplication":it=r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("Application Category","ultimate-addons-for-gutenberg"),value:Ze,onChange:e=>a({appCategory:e})}),r.a.createElement(v.TextControl,{label:Object(l.__)("Operating System","ultimate-addons-for-gutenberg"),value:et,onChange:e=>a({operatingSystem:e})}));break;case"Movie":it=r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("Director Name","ultimate-addons-for-gutenberg"),value:at,onChange:e=>a({directorname:e})}),r.a.createElement("h2",null,Object(l.__)("Date of create")),r.a.createElement(v.DateTimePicker,{currentDate:tt,onChange:e=>a({datecreated:e}),is12Hour:!0}))}return r.a.createElement(i.Suspense,{fallback:Object(u.a)()},r.a.createElement(s.BlockControls,{key:"index"},r.a.createElement(s.AlignmentToolbar,{value:Je,onChange:e=>a({overallAlignment:e})})),r.a.createElement(s.InspectorControls,null,r.a.createElement(g.a,null,r.a.createElement(d.b,d.a.general,(I&&I.sizes&&(y=(e=>{const t=[];return p.a.each(e,(function(e){const a={value:e,label:e};t.push(a)})),t})(I.sizes)),r.a.createElement(v.PanelBody,{title:Object(l.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(h.a,{setAttributes:a,label:Object(l.__)("Review Title Tag","ultimate-addons-for-gutenberg"),data:{value:z,label:"headingTag"},options:[{value:"h1",label:Object(l.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(l.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(l.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(l.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(l.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(l.__)("H6","ultimate-addons-for-gutenberg")}]}),r.a.createElement(v.ToggleControl,{label:Object(l.__)("Enable Schema Support","ultimate-addons-for-gutenberg"),checked:m,onChange:()=>a({enableSchema:!m})}),r.a.createElement(v.ToggleControl,{label:Object(l.__)("Show Review Description","ultimate-addons-for-gutenberg"),checked:qe,onChange:()=>a({enableDescription:!qe}),help:Object(l.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),r.a.createElement(v.ToggleControl,{label:Object(l.__)("Show Review Author","ultimate-addons-for-gutenberg"),checked:N,onChange:()=>a({showAuthor:!N}),help:Object(l.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),r.a.createElement(v.ToggleControl,{label:Object(l.__)("Show Ratings","ultimate-addons-for-gutenberg"),checked:B,onChange:()=>a({showFeature:!B}),help:Object(l.__)("Note: Add feature/section ratings separately.","ultimate-addons-for-gutenberg")}),r.a.createElement(v.ToggleControl,{label:Object(l.__)("Show Review Image","ultimate-addons-for-gutenberg"),checked:$e,onChange:()=>a({enableImage:!$e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema.","ultimate-addons-for-gutenberg")}),r.a.createElement("h2",null,Object(l.__)("Link")),r.a.createElement(v.TextControl,{value:x,onChange:e=>a({ctaLink:e})}),r.a.createElement(v.ToggleControl,{label:Object(l.__)("Open in new window","ultimate-addons-for-gutenberg"),checked:L,onChange:()=>{a({ctaTarget:!L})}}))),!0===$e&&r.a.createElement(v.PanelBody,{title:Object(l.__)("Image","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,{onSelectImage:e=>{e&&e.url&&e.type&&"image"===e.type?a({mainimage:e}):a({mainimage:null})},backgroundImage:I,onRemoveImage:()=>{a({mainimage:""})}}),I&&"null"!==I&&"null"!==I.url&&""!==I.url&&r.a.createElement(v.SelectControl,{label:Object(l.__)("Size","ultimate-addons-for-gutenberg"),options:y,value:M,onChange:e=>a({imgSize:e})}))),(()=>{if(!0===m)return r.a.createElement(v.PanelBody,{title:Object(l.__)("Schema","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(v.SelectControl,{label:Object(l.__)("Item Type","ultimate-addons-for-gutenberg"),value:O,onChange:e=>{a({itemType:e}),"Movie"===O&&a({enableImage:!0}),"Course"===O&&a({enableDescription:!0}),rt.hasOwnProperty(O)&&rt[O].includes(j)||a({itemSubtype:"None"})},options:[{value:"Book",label:Object(l.__)("Book","ultimate-addons-for-gutenberg")},{value:"Course",label:Object(l.__)("Course","ultimate-addons-for-gutenberg")},{value:"Movie",label:Object(l.__)("Movie","ultimate-addons-for-gutenberg")},{value:"Product",label:Object(l.__)("Product","ultimate-addons-for-gutenberg")},{value:"SoftwareApplication",label:Object(l.__)("Software Application","ultimate-addons-for-gutenberg")}]}),rt.hasOwnProperty(O)&&r.a.createElement(v.SelectControl,{label:Object(l.__)("Item Subtype","ultimate-addons-for-gutenberg"),options:[{value:"none",label:Object(l.__)("None","ultimate-addons-for-gutenberg")},...rt[O]],value:j,onChange:e=>a({itemSubtype:e})}),it,r.a.createElement(v.TextControl,{label:Object(l.__)("Review Publisher","ultimate-addons-for-gutenberg"),value:Ye,onChange:e=>a({reviewPublisher:e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),r.a.createElement("h2",null,Object(l.__)("Date Of Publish","ultimate-addons-for-gutenberg")),r.a.createElement(v.DateTimePicker,{className:"uagb-date-picker",currentDate:H,onChange:e=>a({datepublish:e}),is12Hour:!0}),["Product","SoftwareApplication"].includes(O)&&r.a.createElement(r.a.Fragment,null,["Product"].includes(O)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("Brand","ultimate-addons-for-gutenberg"),value:A,onChange:e=>a({brand:e})}),r.a.createElement(v.TextControl,{label:Object(l.__)("SKU","ultimate-addons-for-gutenberg"),value:T,onChange:e=>a({sku:e})}),r.a.createElement(v.TextControl,{label:Object(l.__)("Identifier","ultimate-addons-for-gutenberg"),value:w,onChange:e=>a({identifier:e})}),r.a.createElement(v.SelectControl,{label:Object(l.__)("Identifier Type","ultimate-addons-for-gutenberg"),value:S,options:["nsn","mpn","gtin8","gtin12","gtin13","gtin14","gtin"].map(e=>({label:e.toUpperCase(),value:e})),onChange:e=>a({identifierType:e})})),["Product","SoftwareApplication"].includes(O)&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("Offer Currency","ultimate-addons-for-gutenberg"),value:E,onChange:e=>a({offerCurrency:e})})),"Offer"===C&&r.a.createElement(r.a.Fragment,null,r.a.createElement(v.TextControl,{label:Object(l.__)("Offer Price","ultimate-addons-for-gutenberg"),value:k,onChange:e=>a({offerPrice:e}),help:Object(l.__)("Note: This is a mandatory field for the Review schema","ultimate-addons-for-gutenberg")}),r.a.createElement(v.SelectControl,{label:Object(l.__)("Offer Status"),value:F,options:[{value:"https://schema.org/Discontinued",label:Object(l.__)("Discontinued","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStock",label:Object(l.__)("In Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/InStoreOnly",label:Object(l.__)("In Store Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/LimitedAvailability",label:Object(l.__)("Limited Availability","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OnlineOnly",label:Object(l.__)("Online Only","ultimate-addons-for-gutenberg")},{value:"https://schema.org/OutOfStock",label:Object(l.__)("Out Of Stock","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreOrder",label:Object(l.__)("Pre Order","ultimate-addons-for-gutenberg")},{value:"https://schema.org/PreSale",label:Object(l.__)("Pre Sale","ultimate-addons-for-gutenberg")},{value:"https://schema.org/SoldOut",label:Object(l.__)("Sold Out","ultimate-addons-for-gutenberg")}],onChange:t=>e.setAttributes({offerStatus:t})}),r.a.createElement("h2",null,Object(l.__)("Price Valid Until","ultimate-addons-for-gutenberg")),r.a.createElement(v.DateTimePicker,{className:"uagb-date-picker",currentDate:P,onChange:e=>a({offerExpiry:e}),is12Hour:!0}))))})()),r.a.createElement(d.b,d.a.style,r.a.createElement(v.PanelBody,{title:Object(l.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:W,onColorChange:e=>a({titleColor:e})}),r.a.createElement(n.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:a,loadGoogleFonts:{value:te,label:"headLoadGoogleFonts"},fontFamily:{value:G,label:"headFontFamily"},fontWeight:{value:U,label:"headFontWeight"},fontSubset:{value:q,label:"headFontSubset"},fontSizeType:{value:$,label:"headFontSizeType"},fontSize:{value:J,label:"headFontSize"},fontSizeMobile:{value:K,label:"headFontSizeMobile"},fontSizeTablet:{value:X,label:"headFontSizeTablet"},lineHeightType:{value:Y,label:"headLineHeightType"},lineHeight:{value:Q,label:"headLineHeight"},lineHeightMobile:{value:Z,label:"headLineHeightMobile"},lineHeightTablet:{value:ee,label:"headLineHeightTablet"}})),qe&&r.a.createElement(v.PanelBody,{title:Object(l.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},!0===qe&&r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:D,onColorChange:e=>a({descColor:e})}),r.a.createElement(n.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:a,loadGoogleFonts:{value:be,label:"subHeadLoadGoogleFonts"},fontFamily:{value:ae,label:"subHeadFontFamily"},fontWeight:{value:ne,label:"subHeadFontWeight"},fontSubset:{value:oe,label:"subHeadFontSubset"},fontSizeType:{value:ie,label:"subHeadFontSizeType"},fontSize:{value:le,label:"subHeadFontSize"},fontSizeMobile:{value:re,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ue,label:"subHeadFontSizeTablet"},lineHeightType:{value:ce,label:"subHeadLineHeightType"},lineHeight:{value:se,label:"subHeadLineHeight"},lineHeightMobile:{value:ge,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:de,label:"subHeadLineHeightTablet"}}))),!0===N&&r.a.createElement(v.PanelBody,{title:Object(l.__)("Author","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:We,onColorChange:e=>a({authorColor:e})}))),!0===B&&r.a.createElement(v.PanelBody,{title:Object(l.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:V,onColorChange:e=>a({contentColor:e})}))),r.a.createElement(v.PanelBody,{title:Object(l.__)("Summary","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(c.a,{label:Object(l.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ve,onColorChange:e=>a({summaryColor:e})}),r.a.createElement(n.a,{label:Object(l.__)("Typography","ultimate-addons-for-gutenberg"),attributes:e.attributes,setAttributes:a,loadGoogleFonts:{value:fe,label:"contentLoadGoogleFonts"},fontFamily:{value:he,label:"contentFontFamily"},fontWeight:{value:me,label:"contentFontWeight"},fontSubset:{value:pe,label:"contentFontSubset"},fontSizeType:{value:ve,label:"contentFontSizeType"},fontSize:{value:ye,label:"contentFontSize"},fontSizeMobile:{value:je,label:"contentFontSizeMobile"},fontSizeTablet:{value:Oe,label:"contentFontSizeTablet"},lineHeightType:{value:_e,label:"contentLineHeightType"},lineHeight:{value:Te,label:"contentLineHeight"},lineHeightMobile:{value:Se,label:"contentLineHeightMobile"},lineHeightTablet:{value:we,label:"contentLineHeightTablet"}})),r.a.createElement(v.PanelBody,{title:Object(l.__)("Star","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(c.a,{label:Object(l.__)("Active Color","ultimate-addons-for-gutenberg"),colorValue:R,onColorChange:e=>a({starColor:e})}),r.a.createElement(c.a,{label:Object(l.__)("Inactive Color","ultimate-addons-for-gutenberg"),colorValue:Ge,onColorChange:e=>a({starActiveColor:e})}),r.a.createElement(c.a,{label:Object(l.__)("Outline Color","ultimate-addons-for-gutenberg"),colorValue:Ue,onColorChange:e=>a({starOutlineColor:e})})),r.a.createElement(v.PanelBody,{title:Object(l.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(f.a,_({},e,{label:Object(l.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ce,label:"topPadding"},valueRight:{value:Fe,label:"rightPadding"},valueBottom:{value:Ee,label:"bottomPadding"},valueLeft:{value:ke,label:"leftPadding"},valueTopTablet:{value:Ae,label:"paddingTopTablet"},valueRightTablet:{value:Ie,label:"paddingRightTablet"},valueBottomTablet:{value:ze,label:"paddingBottomTablet"},valueLeftTablet:{value:Me,label:"paddingLeftTablet"},valueTopMobile:{value:Pe,label:"paddingTopMobile"},valueRightMobile:{value:xe,label:"paddingRightMobile"},valueBottomMobile:{value:He,label:"paddingBottomMobile"},valueLeftMobile:{value:Le,label:"paddingLeftMobile"},unit:{value:Ne,label:"paddingUnit"},mUnit:{value:Re,label:"mobilePaddingUnit"},tUnit:{value:De,label:"tabletPaddingUnit"},attributes:t,setAttributes:a,link:{value:Be,label:"spacingLink"}})))),r.a.createElement(d.b,_({},d.a.advance,{parentProps:e})))),ot,lt,nt)};t.default=r.a.memo(j)}}]);