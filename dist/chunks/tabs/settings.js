(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[47],{226:function(e,t,n){"use strict";var a=n(11),l=n.n(a)()((function(e){return e[1]}));l.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=l},227:function(e,t,n){"use strict";var a,l=n(74),o=n.n(l),i=n(0),r=n.n(i),b=n(10),d=n.n(b),u=n(226),c=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=u.a.locals||{},g.use=function(){return c++||(a=d()(u.a,s)),g},g.unuse=function(){c>0&&!--c&&(a(),a=null)};var p=g,f=n(8),m=n(1);t.a=function(e){return Object(i.useLayoutEffect)((function(){return p.use(),function(){p.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(o.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},292:function(e,t,n){"use strict";var a=n(11),l=n.n(a)()((function(e){return e[1]}));l.push([e.i,"",""]),t.a=l},375:function(e,t,n){"use strict";n.r(t);var a,l=n(227),o=n(8),i=n(71),r=n(10),b=n.n(r),d=n(292),u=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=d.a.locals||{},s.use=function(){return u++||(a=b()(d.a,c)),s},s.unuse=function(){u>0&&!--u&&(a(),a=null)};var g=s,p=n(0),f=n.n(p),m=n(1),_=n(4),v=n(7),h=n(5);function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var T=function(e){Object(p.useLayoutEffect)((function(){return g.use(),function(){g.unuse()}}),[]);var t,n,a=(t=Object(h.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,o=[],_n=!0,i=!1;try{for(n=n.call(e);!(_n=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);_n=!0);}catch(e){i=!0,l=e}finally{try{_n||null==n.return||n.return()}finally{if(i)throw l}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=a[0],o=a[1],i=(e.label,e.data),r=e.setAttributes,b=e.options,d=Object(v.useSelect)((function(e){return e("core/edit-post").__experimentalGetPreviewDeviceType()}),[]),u=Object(v.useDispatch)("core/edit-post").__experimentalSetPreviewDeviceType,c={desktop:f.a.createElement("svg",{width:"8",height:"7",viewBox:"0 0 8 7",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("path",{d:"M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"})),tablet:f.a.createElement("svg",{width:"6",height:"7",viewBox:"0 0 6 7",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("path",{d:"M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"})),mobile:f.a.createElement("svg",{width:"4",height:"7",viewBox:"0 0 4 7",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("path",{d:"M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"}))},s=[{name:"Desktop",title:c.desktop,itemClass:"uagb-desktop-tab uagb-responsive-tabs"},{name:"Tablet",title:c.tablet,itemClass:"uagb-tablet-tab uagb-responsive-tabs"},{name:"Mobile",key:"mobile",title:c.mobile,itemClass:"uagb-mobile-tab uagb-responsive-tabs"}],T={};return T.Desktop=f.a.createElement(_.SelectControl,{value:i.desktop.value,onChange:function(e){return r(y({},i.desktop.label,e))},options:b.desktop}),T.Tablet=f.a.createElement(_.SelectControl,{value:i.tablet.value,onChange:function(e){return r(y({},i.tablet.label,e))},options:b.tablet||b.desktop}),T.Mobile=f.a.createElement(_.SelectControl,{value:i.mobile.value,onChange:function(e){return r(y({},i.mobile.label,e))},options:b.mobile||b.desktop}),f.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},f.a.createElement("div",{className:"uagb-size-type-field-tabs"},f.a.createElement("div",{className:"uagb-control__header"},f.a.createElement("div",{className:"uag-responsive-label-wrap"},e.label&&f.a.createElement("span",{className:"uag-control-label"},e.label),!l&&f.a.createElement(_.Button,{key:"uag-responsive-common-button",className:"uag-responsive-common-button",onClick:function(){o(!l)}},c[d.toLowerCase()]),l&&f.a.createElement(_.ButtonGroup,{className:"uagb-range-control-responsive components-tab-panel__tabs","aria-label":Object(m.__)("Device","ultimate-addons-for-gutenberg")},s.map((function(e){var t=e.name,n=e.key,a=e.title,i=e.itemClass;return f.a.createElement(_.Button,{key:n,className:"components-button components-tab-panel__tabs-item uagb-range-control-responsive-item ".concat(i).concat(t===d?" active-tab":""),"aria-pressed":d===t,onClick:function(){return u(t),void o(!l)}},a)}))))),T[d]?T[d]:T.Desktop))},w=n(33),M=n(14),B=n(72),j=n(13),O=n(73),S=n(70),C=n(28),P=n(37),k=n(3);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var L=function(e){var t,n,a,r=e=e.parentProps,b=r.attributes,d=r.setAttributes,u=(r.deviceType,b.tabsStyleD),c=b.tabsStyleM,s=b.tabsStyleT,g=b.tabActiveFrontend,p=b.tabHeaders,v=b.headerBgColor,h=b.borderStyle,y=b.borderWidth,x=b.borderRadius,L=b.borderColor,H=b.borderHoverColor,z=b.headerTextColor,R=b.activeTabBgColor,U=b.activeTabTextColor,V=b.bodyBgColor,A=b.bodyTextColor,F=b.tabTitleLeftMargin,I=b.tabTitleRightMargin,N=b.tabTitleTopMargin,D=b.tabTitleBottomMargin,Z=b.tabTitleLeftMarginTablet,G=b.tabTitleRightMarginTablet,W=b.tabTitleTopMarginTablet,J=b.tabTitleBottomMarginTablet,$=b.tabTitleLeftMarginMobile,q=b.tabTitleRightMarginMobile,K=b.tabTitleTopMarginMobile,Q=b.tabTitleBottomMarginMobile,X=b.tabTitleMarginUnit,Y=b.mobiletabTitleMarginUnit,ee=b.tablettabTitleMarginUnit,te=b.tabTitleMarginLink,ne=b.tabTitleTopPadding,ae=b.tabTitleRightPadding,le=b.tabTitleBottomPadding,oe=b.tabTitleLeftPadding,ie=b.tabTitleTopPaddingTablet,re=b.tabTitleRightPaddingTablet,be=b.tabTitleBottomPaddingTablet,de=b.tabTitleLeftPaddingTablet,ue=b.tabTitleTopPaddingMobile,ce=b.tabTitleRightPaddingMobile,se=b.tabTitleBottomPaddingMobile,ge=b.tabTitleLeftPaddingMobile,pe=b.tabTitlePaddingUnit,fe=b.mobiletabTitlePaddingUnit,me=b.tablettabTitlePaddingUnit,_e=b.tabTitlePaddingLink,ve=b.tabBodyLeftMargin,he=b.tabBodyRightMargin,ye=b.tabBodyTopMargin,xe=b.tabBodyBottomMargin,Te=b.tabBodyLeftMarginTablet,we=b.tabBodyRightMarginTablet,Me=b.tabBodyTopMarginTablet,Be=b.tabBodyBottomMarginTablet,je=b.tabBodyLeftMarginMobile,Oe=b.tabBodyRightMarginMobile,Se=b.tabBodyTopMarginMobile,Ce=b.tabBodyBottomMarginMobile,Pe=b.tabBodyMarginUnit,ke=b.mobiletabBodyMarginUnit,Ee=b.tablettabBodyMarginUnit,Le=b.tabBodyMarginLink,He=b.tabBodyTopPadding,ze=b.tabBodyRightPadding,Re=b.tabBodyBottomPadding,Ue=b.tabBodyLeftPadding,Ve=b.tabBodyTopPaddingTablet,Ae=b.tabBodyRightPaddingTablet,Fe=b.tabBodyBottomPaddingTablet,Ie=b.tabBodyLeftPaddingTablet,Ne=b.tabBodyTopPaddingMobile,De=b.tabBodyRightPaddingMobile,Ze=b.tabBodyBottomPaddingMobile,Ge=b.tabBodyLeftPaddingMobile,We=b.tabBodyPaddingUnit,Je=b.mobiletabBodyPaddingUnit,$e=b.tablettabBodyPaddingUnit,qe=b.tabBodyPaddingLink,Ke=b.titleLoadGoogleFonts,Qe=b.titleFontFamily,Xe=b.titleFontWeight,Ye=b.titleFontSubset,et=b.titleFontSizeType,tt=b.titleFontSize,nt=b.titleFontSizeMobile,at=b.titleFontSizeTablet,lt=b.titleLineHeightType,ot=b.titleLineHeight,it=b.titleLineHeightMobile,rt=b.titleLineHeightTablet,bt=b.titleTransform,dt=b.titleDecoration,ut=b.titleAlign,ct=b.tabAlign,st=b.showIcon,gt=b.icon,pt=b.iconColor,ft=b.iconPosition,mt=b.iconSpacing,_t=b.iconSize,vt=b.activeiconColor;return f.a.createElement(k.InspectorControls,null,f.a.createElement(S.a,null,f.a.createElement(C.b,C.a.general,(a={desktop:[{value:"hstyle1",label:Object(m.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(m.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(m.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(m.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(m.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(m.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(m.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(m.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(m.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(m.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],tablet:[{value:"hstyle1",label:Object(m.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(m.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(m.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(m.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(m.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(m.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(m.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(m.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(m.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(m.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],mobile:[{value:"hstyle1",label:Object(m.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(m.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(m.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(m.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(m.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(m.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(m.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(m.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(m.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(m.__)("Vertical Style 10","ultimate-addons-for-gutenberg")},{value:"stack1",label:Object(m.__)("Stack Style 11","ultimate-addons-for-gutenberg")},{value:"stack2",label:Object(m.__)("Stack Style 12","ultimate-addons-for-gutenberg")},{value:"stack3",label:Object(m.__)("Stack Style 13","ultimate-addons-for-gutenberg")},{value:"stack4",label:Object(m.__)("Stack Style 14","ultimate-addons-for-gutenberg")}]},f.a.createElement(_.PanelBody,{title:Object(m.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},f.a.createElement(T,{label:Object(m.__)("Style","ultimate-addons-for-gutenberg"),data:{desktop:{value:u,label:"tabsStyleD"},tablet:{value:s,label:"tabsStyleT"},mobile:{value:c,label:"tabsStyleM"}},options:a,setAttributes:d}))),f.a.createElement(_.PanelBody,{title:Object(m.__)("Tabs Title Settings","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(_.SelectControl,{label:Object(m.__)("Initial Open Tab","ultimate-addons-for-gutenberg"),value:g,options:p.map((function(e,t){return{value:t,label:e}})),onChange:function(e){return d({tabActiveFrontend:parseInt(e)})}}),f.a.createElement(w.a,{setAttributes:d,label:Object(m.__)("Tab Alignment","ultimate-addons-for-gutenberg"),data:{value:ct,label:"tabAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:f.a.createElement(_.Icon,{icon:Object(o.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:f.a.createElement(_.Icon,{icon:Object(o.a)("fa fa-align-center")}),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:f.a.createElement(_.Icon,{icon:Object(o.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),f.a.createElement(w.a,{setAttributes:d,label:Object(m.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:ut,label:"titleAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:f.a.createElement(_.Icon,{icon:Object(o.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:f.a.createElement(_.Icon,{icon:Object(o.a)("fa fa-align-center")}),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:f.a.createElement(_.Icon,{icon:Object(o.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),f.a.createElement(_.ToggleControl,{label:Object(m.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:st,onChange:function(){return d({showIcon:!st})}}),st&&f.a.createElement(f.a.Fragment,null,f.a.createElement(l.a,{label:Object(m.__)("Button Icon","ultimate-addons-for-gutenberg"),value:gt,onChange:function(e){return d({icon:e})}}),f.a.createElement(w.a,{setAttributes:d,label:Object(m.__)("Icon Position","ultimate-addons-for-gutenberg"),data:{value:ft,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",label:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(m.__)("Right","ultimate-addons-for-gutenberg")},{value:"top",label:Object(m.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(m.__)("Bottom","ultimate-addons-for-gutenberg")}]})))),f.a.createElement(C.b,C.a.style,(t=f.a.createElement(f.a.Fragment,null,f.a.createElement(M.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:v,onColorChange:function(e){return d({headerBgColor:e})}}),f.a.createElement(M.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:z,onColorChange:function(e){return d({headerTextColor:e})}})),n=f.a.createElement(f.a.Fragment,null,f.a.createElement(M.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:R,onColorChange:function(e){return d({activeTabBgColor:e})}}),f.a.createElement(M.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:U,onColorChange:function(e){return d({activeTabTextColor:e})}})),f.a.createElement(_.PanelBody,{title:Object(m.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(B.a,E({},e,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:N,label:"tabTitleTopMargin"},valueRight:{value:I,label:"tabTitleRightMargin"},valueBottom:{value:D,label:"tabTitleBottomMargin"},valueLeft:{value:F,label:"tabTitleLeftMargin"},valueTopTablet:{value:W,label:"tabTitleTopMarginTablet"},valueRightTablet:{value:G,label:"tabTitleRightMarginTablet"},valueBottomTablet:{value:J,label:"tabTitleBottomMarginTablet"},valueLeftTablet:{value:Z,label:"tabTitleLeftMarginTablet"},valueTopMobile:{value:K,label:"tabTitleTopMarginMobile"},valueRightMobile:{value:q,label:"tabTitleRightMarginMobile"},valueBottomMobile:{value:Q,label:"tabTitleBottomMarginMobile"},valueLeftMobile:{value:$,label:"tabTitleLeftMarginMobile"},unit:{value:X,label:"tabTitleMarginUnit"},mUnit:{value:Y,label:"mobiletabTitleMarginUnit"},tUnit:{value:ee,label:"tablettabTitleMarginUnit"},attributes:b,setAttributes:d,link:{value:te,label:"tabTitleMarginLink"}})),f.a.createElement(B.a,E({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ne,label:"tabTitleTopPadding"},valueRight:{value:ae,label:"tabTitleRightPadding"},valueBottom:{value:le,label:"tabTitleBottomPadding"},valueLeft:{value:oe,label:"tabTitleLeftPadding"},valueTopTablet:{value:ie,label:"tabTitleTopPaddingTablet"},valueRightTablet:{value:re,label:"tabTitleRightPaddingTablet"},valueBottomTablet:{value:be,label:"tabTitleBottomPaddingTablet"},valueLeftTablet:{value:de,label:"tabTitleLeftPaddingTablet"},valueTopMobile:{value:ue,label:"tabTitleTopPaddingMobile"},valueRightMobile:{value:ce,label:"tabTitleRightPaddingMobile"},valueBottomMobile:{value:se,label:"tabTitleBottomPaddingMobile"},valueLeftMobile:{value:ge,label:"tabTitleLeftPaddingMobile"},unit:{value:pe,label:"tabTitlePaddingUnit"},mUnit:{value:fe,label:"mobiletabTitlePaddingUnit"},tUnit:{value:me,label:"tablettabTitlePaddingUnit"},attributes:b,setAttributes:d,link:{value:_e,label:"tabTitlePaddingLink"}})),f.a.createElement(P.a,{tabs:[{name:"normal",title:Object(m.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(m.__)("Active","ultimate-addons-for-gutenberg")}],normal:t,active:n}),f.a.createElement(i.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:b,setAttributes:d,loadGoogleFonts:{value:Ke,label:"titleLoadGoogleFonts"},fontFamily:{value:Qe,label:"titleFontFamily"},fontWeight:{value:Xe,label:"titleFontWeight"},fontSubset:{value:Ye,label:"titleFontSubset"},fontSizeType:{value:et,label:"titleFontSizeType"},fontSize:{value:tt,label:"titleFontSize"},fontSizeMobile:{value:nt,label:"titleFontSizeMobile"},fontSizeTablet:{value:at,label:"titleFontSizeTablet"},lineHeightType:{value:lt,label:"titleLineHeightType"},lineHeight:{value:ot,label:"titleLineHeight"},lineHeightMobile:{value:it,label:"titleLineHeightMobile"},lineHeightTablet:{value:rt,label:"titleLineHeightTablet"},transform:{value:bt,label:"titleTransform"},decoration:{value:dt,label:"titleDecoration"}}))),function(){if(!st)return"";var e=f.a.createElement(M.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:pt,onColorChange:function(e){return d({iconColor:e})}}),t=f.a.createElement(M.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:vt,onColorChange:function(e){return d({activeiconColor:e})}});return f.a.createElement(_.PanelBody,{title:Object(m.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(j.a,{label:Object(m.__)("Spacing","ultimate-addons-for-gutenberg"),setAttributes:d,value:mt,onChange:function(e){return d({iconSpacing:e})},min:0,max:500,displayUnit:!1}),f.a.createElement(P.a,{tabs:[{name:"normal",title:Object(m.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(m.__)("Active","ultimate-addons-for-gutenberg")}],normal:e,active:t}),f.a.createElement(j.a,{label:Object(m.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:d,value:_t,onChange:function(e){return d({iconSize:e})},min:0,max:500,displayUnit:!1}))}(),f.a.createElement(_.PanelBody,{title:Object(m.__)("Body","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(M.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:V,onColorChange:function(e){return d({bodyBgColor:e})}}),f.a.createElement(M.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:A,onColorChange:function(e){return d({bodyTextColor:e})}}),f.a.createElement(B.a,E({},e,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:ye,label:"tabBodyTopMargin"},valueRight:{value:he,label:"tabBodyRightMargin"},valueBottom:{value:xe,label:"tabBodyBottomMargin"},valueLeft:{value:ve,label:"tabBodyLeftMargin"},valueTopTablet:{value:Me,label:"tabBodyTopMarginTablet"},valueRightTablet:{value:we,label:"tabBodyRightMarginTablet"},valueBottomTablet:{value:Be,label:"tabBodyBottomMarginTablet"},valueLeftTablet:{value:Te,label:"tabBodyLeftMarginTablet"},valueTopMobile:{value:Se,label:"tabBodyTopMarginMobile"},valueRightMobile:{value:Oe,label:"tabBodyRightMarginMobile"},valueBottomMobile:{value:Ce,label:"tabBodyBottomMarginMobile"},valueLeftMobile:{value:je,label:"tabBodyLeftMarginMobile"},unit:{value:Pe,label:"tabBodyMarginUnit"},mUnit:{value:ke,label:"mobiletabBodyMarginUnit"},tUnit:{value:Ee,label:"tablettabBodyMarginUnit"},attributes:b,setAttributes:d,link:{value:Le,label:"tabBodyMarginLink"}})),f.a.createElement(B.a,E({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:He,label:"tabBodyTopPadding"},valueRight:{value:ze,label:"tabBodyRightPadding"},valueBottom:{value:Re,label:"tabBodyBottomPadding"},valueLeft:{value:Ue,label:"tabBodyLeftPadding"},valueTopTablet:{value:Ve,label:"tabBodyTopPaddingTablet"},valueRightTablet:{value:Ae,label:"tabBodyRightPaddingTablet"},valueBottomTablet:{value:Fe,label:"tabBodyBottomPaddingTablet"},valueLeftTablet:{value:Ie,label:"tabBodyLeftPaddingTablet"},valueTopMobile:{value:Ne,label:"tabBodyTopPaddingMobile"},valueRightMobile:{value:De,label:"tabBodyRightPaddingMobile"},valueBottomMobile:{value:Ze,label:"tabBodyBottomPaddingMobile"},valueLeftMobile:{value:Ge,label:"tabBodyLeftPaddingMobile"},unit:{value:We,label:"tabBodyPaddingUnit"},mUnit:{value:Je,label:"mobiletabBodyPaddingUnit"},tUnit:{value:$e,label:"tablettabBodyPaddingUnit"},attributes:b,setAttributes:d,link:{value:qe,label:"tabBodyPaddingLink"}}))),f.a.createElement(_.PanelBody,{title:Object(m.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(O.a,{setAttributes:d,borderStyle:{value:h,label:"borderStyle",title:Object(m.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:y,label:"borderWidth",title:Object(m.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:x,label:"borderRadius",title:Object(m.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:L,label:"borderColor",title:Object(m.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:H,label:"borderHoverColor",title:Object(m.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0}))),f.a.createElement(C.b,C.a.advance)))};t.default=f.a.memo(L)}}]);