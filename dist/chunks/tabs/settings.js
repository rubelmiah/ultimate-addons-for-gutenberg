(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[15],{209:function(e,t,n){"use strict";var a=n(10),l=n.n(a)()((function(e){return e[1]}));l.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=l},210:function(e,t,n){"use strict";var a,l=n(72),o=n.n(l),i=n(1),r=n.n(i),b=n(9),d=n.n(b),u=n(209),c=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=u.a.locals||{},g.use=function(){return c++||(a=d()(u.a,s)),g},g.unuse=function(){c>0&&!--c&&(a(),a=null)};var p=g,f=n(11),m=n(2);t.a=function(e){return Object(i.useLayoutEffect)((function(){return p.use(),function(){p.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(o.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},216:function(e,t,n){"use strict";var a=n(10),l=n.n(a)()((function(e){return e[1]}));l.push([e.i,"",""]),t.a=l},227:function(e,t,n){"use strict";n.r(t);var a,l=n(210),o=n(11),i=n(73),r=n(9),b=n.n(r),d=n(216),u=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=d.a.locals||{},s.use=function(){return u++||(a=b()(d.a,c)),s},s.unuse=function(){u>0&&!--u&&(a(),a=null)};var g=s,p=n(1),f=n.n(p),m=n(2),_=n(3),v=n(7),h=n(4);function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var T=function(e){Object(p.useLayoutEffect)((function(){return g.use(),function(){g.unuse()}}),[]);var t,n,a=(t=Object(h.useState)(!1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,o=[],_n=!0,i=!1;try{for(n=n.call(e);!(_n=(a=n.next()).done)&&(o.push(a.value),!t||o.length!==t);_n=!0);}catch(e){i=!0,l=e}finally{try{_n||null==n.return||n.return()}finally{if(i)throw l}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?x(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=a[0],o=a[1],i=(e.label,e.data),r=e.setAttributes,b=e.options,d=Object(v.useSelect)((function(e){return e("core/edit-post").__experimentalGetPreviewDeviceType()}),[]),u=Object(v.useDispatch)("core/edit-post").__experimentalSetPreviewDeviceType,c={desktop:f.a.createElement("svg",{width:"8",height:"7",viewBox:"0 0 8 7",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("path",{d:"M7.33333 0H0.666667C0.298611 0 0 0.293945 0 0.65625V5.03125C0 5.39355 0.298611 5.6875 0.666667 5.6875H3.33333L3.11111 6.34375H2.11111C1.92639 6.34375 1.77778 6.49004 1.77778 6.67188C1.77778 6.85371 1.92639 7 2.11111 7H5.88889C6.07361 7 6.22222 6.85371 6.22222 6.67188C6.22222 6.49004 6.07361 6.34375 5.88889 6.34375H4.88889L4.66667 5.6875H7.33333C7.70139 5.6875 8 5.39355 8 5.03125V0.65625C8 0.293945 7.70139 0 7.33333 0ZM7.11111 4.8125H0.888889V0.875H7.11111V4.8125Z"})),tablet:f.a.createElement("svg",{width:"6",height:"7",viewBox:"0 0 6 7",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("path",{d:"M5 0H1C0.446667 0 0 0.390833 0 0.875V6.125C0 6.60917 0.446667 7 1 7H5C5.55333 7 6 6.60917 6 6.125V0.875C6 0.390833 5.55333 0 5 0ZM3.66667 6.41667H2.33333V6.125H3.66667V6.41667ZM5.41667 5.54167H0.583333V0.875H5.41667V5.54167Z"})),mobile:f.a.createElement("svg",{width:"4",height:"7",viewBox:"0 0 4 7",xmlns:"http://www.w3.org/2000/svg"},f.a.createElement("path",{d:"M3.33333 0H0.666667C0.297778 0 0 0.390833 0 0.875V6.125C0 6.60917 0.297778 7 0.666667 7H3.33333C3.70222 7 4 6.60917 4 6.125V0.875C4 0.390833 3.70222 0 3.33333 0ZM2.44444 6.41667H1.55556V6.125H2.44444V6.41667ZM3.61111 5.54167H0.388889V0.875H3.61111V5.54167Z"}))},s=[{name:"Desktop",title:c.desktop,itemClass:"uagb-desktop-tab uagb-responsive-tabs"},{name:"Tablet",title:c.tablet,itemClass:"uagb-tablet-tab uagb-responsive-tabs"},{name:"Mobile",key:"mobile",title:c.mobile,itemClass:"uagb-mobile-tab uagb-responsive-tabs"}],T={};return T.Desktop=f.a.createElement(_.SelectControl,{value:i.desktop.value,onChange:function(e){return r(y({},i.desktop.label,e))},options:b.desktop}),T.Tablet=f.a.createElement(_.SelectControl,{value:i.tablet.value,onChange:function(e){return r(y({},i.tablet.label,e))},options:b.tablet||b.desktop}),T.Mobile=f.a.createElement(_.SelectControl,{value:i.mobile.value,onChange:function(e){return r(y({},i.mobile.label,e))},options:b.mobile||b.desktop}),f.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},f.a.createElement("div",{className:"uagb-size-type-field-tabs"},f.a.createElement("div",{className:"uagb-control__header"},f.a.createElement("div",{className:"uag-responsive-label-wrap"},e.label&&f.a.createElement("span",{className:"uag-control-label"},e.label),!l&&f.a.createElement(_.Button,{key:"uag-responsive-common-button",className:"uag-responsive-common-button",onClick:function(){o(!l)}},c[d.toLowerCase()]),l&&f.a.createElement(_.ButtonGroup,{className:"uagb-range-control-responsive components-tab-panel__tabs","aria-label":Object(m.__)("Device","ultimate-addons-for-gutenberg")},s.map((function(e){var t=e.name,n=e.key,a=e.title,i=e.itemClass;return f.a.createElement(_.Button,{key:n,className:"components-button components-tab-panel__tabs-item uagb-range-control-responsive-item ".concat(i).concat(t===d?" active-tab":""),"aria-pressed":d===t,onClick:function(){return u(t),void o(!l)}},a)}))))),T[d]?T[d]:T.Desktop))},w=n(35),M=n(14),B=n(74),j=n(13),O=n(75),S=n(71),C=n(33),P=n(6);function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var E=function(e){var t,n=e=e.parentProps,a=n.attributes,r=n.setAttributes,b=(n.deviceType,a.tabsStyleD),d=a.tabsStyleM,u=a.tabsStyleT,c=a.tabActiveFrontend,s=a.tabHeaders,g=a.headerBgColor,p=a.borderStyle,v=a.borderWidth,h=a.borderRadius,y=a.borderColor,x=a.borderHoverColor,E=a.headerTextColor,L=a.activeTabBgColor,H=a.activeTabTextColor,z=a.bodyBgColor,R=a.bodyTextColor,U=a.tabTitleLeftMargin,V=a.tabTitleRightMargin,A=a.tabTitleTopMargin,F=a.tabTitleBottomMargin,I=a.tabTitleLeftMarginTablet,N=a.tabTitleRightMarginTablet,D=a.tabTitleTopMarginTablet,Z=a.tabTitleBottomMarginTablet,G=a.tabTitleLeftMarginMobile,W=a.tabTitleRightMarginMobile,J=a.tabTitleTopMarginMobile,$=a.tabTitleBottomMarginMobile,q=a.tabTitleMarginUnit,K=a.mobiletabTitleMarginUnit,Q=a.tablettabTitleMarginUnit,X=a.tabTitleMarginLink,Y=a.tabTitleTopPadding,ee=a.tabTitleRightPadding,te=a.tabTitleBottomPadding,ne=a.tabTitleLeftPadding,ae=a.tabTitleTopPaddingTablet,le=a.tabTitleRightPaddingTablet,oe=a.tabTitleBottomPaddingTablet,ie=a.tabTitleLeftPaddingTablet,re=a.tabTitleTopPaddingMobile,be=a.tabTitleRightPaddingMobile,de=a.tabTitleBottomPaddingMobile,ue=a.tabTitleLeftPaddingMobile,ce=a.tabTitlePaddingUnit,se=a.mobiletabTitlePaddingUnit,ge=a.tablettabTitlePaddingUnit,pe=a.tabTitlePaddingLink,fe=a.tabBodyLeftMargin,me=a.tabBodyRightMargin,_e=a.tabBodyTopMargin,ve=a.tabBodyBottomMargin,he=a.tabBodyLeftMarginTablet,ye=a.tabBodyRightMarginTablet,xe=a.tabBodyTopMarginTablet,Te=a.tabBodyBottomMarginTablet,we=a.tabBodyLeftMarginMobile,Me=a.tabBodyRightMarginMobile,Be=a.tabBodyTopMarginMobile,je=a.tabBodyBottomMarginMobile,Oe=a.tabBodyMarginUnit,Se=a.mobiletabBodyMarginUnit,Ce=a.tablettabBodyMarginUnit,Pe=a.tabBodyMarginLink,ke=a.tabBodyTopPadding,Ee=a.tabBodyRightPadding,Le=a.tabBodyBottomPadding,He=a.tabBodyLeftPadding,ze=a.tabBodyTopPaddingTablet,Re=a.tabBodyRightPaddingTablet,Ue=a.tabBodyBottomPaddingTablet,Ve=a.tabBodyLeftPaddingTablet,Ae=a.tabBodyTopPaddingMobile,Fe=a.tabBodyRightPaddingMobile,Ie=a.tabBodyBottomPaddingMobile,Ne=a.tabBodyLeftPaddingMobile,De=a.tabBodyPaddingUnit,Ze=a.mobiletabBodyPaddingUnit,Ge=a.tablettabBodyPaddingUnit,We=a.tabBodyPaddingLink,Je=a.titleLoadGoogleFonts,$e=a.titleFontFamily,qe=a.titleFontWeight,Ke=a.titleFontSubset,Qe=a.titleFontSizeType,Xe=a.titleFontSize,Ye=a.titleFontSizeMobile,et=a.titleFontSizeTablet,tt=a.titleLineHeightType,nt=a.titleLineHeight,at=a.titleLineHeightMobile,lt=a.titleLineHeightTablet,ot=a.titleTransform,it=a.titleDecoration,rt=a.titleAlign,bt=a.tabAlign,dt=a.showIcon,ut=a.icon,ct=a.iconColor,st=a.iconPosition,gt=a.iconSpacing,pt=a.iconSize,ft=a.activeiconColor;return f.a.createElement(P.InspectorControls,null,f.a.createElement(S.a,null,f.a.createElement(C.b,C.a.general,(t={desktop:[{value:"hstyle1",label:Object(m.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(m.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(m.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(m.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(m.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(m.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(m.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(m.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(m.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(m.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],tablet:[{value:"hstyle1",label:Object(m.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(m.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(m.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(m.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(m.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(m.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(m.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(m.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(m.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(m.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],mobile:[{value:"hstyle1",label:Object(m.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(m.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(m.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(m.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(m.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(m.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(m.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(m.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(m.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(m.__)("Vertical Style 10","ultimate-addons-for-gutenberg")},{value:"stack1",label:Object(m.__)("Stack Style 11","ultimate-addons-for-gutenberg")},{value:"stack2",label:Object(m.__)("Stack Style 12","ultimate-addons-for-gutenberg")},{value:"stack3",label:Object(m.__)("Stack Style 13","ultimate-addons-for-gutenberg")},{value:"stack4",label:Object(m.__)("Stack Style 14","ultimate-addons-for-gutenberg")}]},f.a.createElement(_.PanelBody,{title:Object(m.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!0},f.a.createElement(T,{label:Object(m.__)("Style","ultimate-addons-for-gutenberg"),data:{desktop:{value:b,label:"tabsStyleD"},tablet:{value:u,label:"tabsStyleT"},mobile:{value:d,label:"tabsStyleM"}},options:t,setAttributes:r}))),f.a.createElement(_.PanelBody,{title:Object(m.__)("Tabs Title Settings","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(_.SelectControl,{label:Object(m.__)("Initial Open Tab","ultimate-addons-for-gutenberg"),value:c,options:s.map((function(e,t){return{value:t,label:e}})),onChange:function(e){return r({tabActiveFrontend:parseInt(e)})}}),f.a.createElement(w.a,{setAttributes:r,label:Object(m.__)("Tab Alignment","ultimate-addons-for-gutenberg"),data:{value:bt,label:"tabAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:f.a.createElement(_.Icon,{icon:Object(o.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:f.a.createElement(_.Icon,{icon:Object(o.a)("fa fa-align-center")}),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:f.a.createElement(_.Icon,{icon:Object(o.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),f.a.createElement(w.a,{setAttributes:r,label:Object(m.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:rt,label:"titleAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:f.a.createElement(_.Icon,{icon:Object(o.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:f.a.createElement(_.Icon,{icon:Object(o.a)("fa fa-align-center")}),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:f.a.createElement(_.Icon,{icon:Object(o.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),f.a.createElement(_.ToggleControl,{label:Object(m.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:dt,onChange:function(){return r({showIcon:!dt})}}),dt&&f.a.createElement(f.a.Fragment,null,f.a.createElement(l.a,{label:Object(m.__)("Button Icon","ultimate-addons-for-gutenberg"),value:ut,onChange:function(e){return r({icon:e})}}),f.a.createElement(w.a,{setAttributes:r,label:Object(m.__)("Icon Position","ultimate-addons-for-gutenberg"),data:{value:st,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",label:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(m.__)("Right","ultimate-addons-for-gutenberg")},{value:"top",label:Object(m.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(m.__)("Bottom","ultimate-addons-for-gutenberg")}]})))),f.a.createElement(C.b,C.a.style,f.a.createElement(_.PanelBody,{title:Object(m.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(B.a,k({},e,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:A,label:"tabTitleTopMargin"},valueRight:{value:V,label:"tabTitleRightMargin"},valueBottom:{value:F,label:"tabTitleBottomMargin"},valueLeft:{value:U,label:"tabTitleLeftMargin"},valueTopTablet:{value:D,label:"tabTitleTopMarginTablet"},valueRightTablet:{value:N,label:"tabTitleRightMarginTablet"},valueBottomTablet:{value:Z,label:"tabTitleBottomMarginTablet"},valueLeftTablet:{value:I,label:"tabTitleLeftMarginTablet"},valueTopMobile:{value:J,label:"tabTitleTopMarginMobile"},valueRightMobile:{value:W,label:"tabTitleRightMarginMobile"},valueBottomMobile:{value:$,label:"tabTitleBottomMarginMobile"},valueLeftMobile:{value:G,label:"tabTitleLeftMarginMobile"},unit:{value:q,label:"tabTitleMarginUnit"},mUnit:{value:K,label:"mobiletabTitleMarginUnit"},tUnit:{value:Q,label:"tablettabTitleMarginUnit"},attributes:a,setAttributes:r,link:{value:X,label:"tabTitleMarginLink"}})),f.a.createElement(B.a,k({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Y,label:"tabTitleTopPadding"},valueRight:{value:ee,label:"tabTitleRightPadding"},valueBottom:{value:te,label:"tabTitleBottomPadding"},valueLeft:{value:ne,label:"tabTitleLeftPadding"},valueTopTablet:{value:ae,label:"tabTitleTopPaddingTablet"},valueRightTablet:{value:le,label:"tabTitleRightPaddingTablet"},valueBottomTablet:{value:oe,label:"tabTitleBottomPaddingTablet"},valueLeftTablet:{value:ie,label:"tabTitleLeftPaddingTablet"},valueTopMobile:{value:re,label:"tabTitleTopPaddingMobile"},valueRightMobile:{value:be,label:"tabTitleRightPaddingMobile"},valueBottomMobile:{value:de,label:"tabTitleBottomPaddingMobile"},valueLeftMobile:{value:ue,label:"tabTitleLeftPaddingMobile"},unit:{value:ce,label:"tabTitlePaddingUnit"},mUnit:{value:se,label:"mobiletabTitlePaddingUnit"},tUnit:{value:ge,label:"tablettabTitlePaddingUnit"},attributes:a,setAttributes:r,link:{value:pe,label:"tabTitlePaddingLink"}})),f.a.createElement(M.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:g,onColorChange:function(e){return r({headerBgColor:e})}}),f.a.createElement(M.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:E,onColorChange:function(e){return r({headerTextColor:e})}}),f.a.createElement(M.a,{label:Object(m.__)("Active Tab Background Color","ultimate-addons-for-gutenberg"),colorValue:L,onColorChange:function(e){return r({activeTabBgColor:e})}}),f.a.createElement(M.a,{label:Object(m.__)("Active Tab Text Color","ultimate-addons-for-gutenberg"),colorValue:H,onColorChange:function(e){return r({activeTabTextColor:e})}}),f.a.createElement(i.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:a,setAttributes:r,loadGoogleFonts:{value:Je,label:"titleLoadGoogleFonts"},fontFamily:{value:$e,label:"titleFontFamily"},fontWeight:{value:qe,label:"titleFontWeight"},fontSubset:{value:Ke,label:"titleFontSubset"},fontSizeType:{value:Qe,label:"titleFontSizeType"},fontSize:{value:Xe,label:"titleFontSize"},fontSizeMobile:{value:Ye,label:"titleFontSizeMobile"},fontSizeTablet:{value:et,label:"titleFontSizeTablet"},lineHeightType:{value:tt,label:"titleLineHeightType"},lineHeight:{value:nt,label:"titleLineHeight"},lineHeightMobile:{value:at,label:"titleLineHeightMobile"},lineHeightTablet:{value:lt,label:"titleLineHeightTablet"},transform:{value:ot,label:"titleTransform"},decoration:{value:it,label:"titleDecoration"}})),dt?f.a.createElement(_.PanelBody,{title:Object(m.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(j.a,{label:Object(m.__)("Spacing","ultimate-addons-for-gutenberg"),setAttributes:r,value:gt,onChange:function(e){return r({iconSpacing:e})},min:0,max:500,displayUnit:!1}),f.a.createElement(M.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ct,onColorChange:function(e){return r({iconColor:e})}}),f.a.createElement(M.a,{label:Object(m.__)("Active Color","ultimate-addons-for-gutenberg"),colorValue:ft,onColorChange:function(e){return r({activeiconColor:e})}}),f.a.createElement(j.a,{label:Object(m.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:r,value:pt,onChange:function(e){return r({iconSize:e})},min:0,max:500,displayUnit:!1})):"",f.a.createElement(_.PanelBody,{title:Object(m.__)("Body","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(M.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:z,onColorChange:function(e){return r({bodyBgColor:e})}}),f.a.createElement(M.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:R,onColorChange:function(e){return r({bodyTextColor:e})}}),f.a.createElement(B.a,k({},e,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:_e,label:"tabBodyTopMargin"},valueRight:{value:me,label:"tabBodyRightMargin"},valueBottom:{value:ve,label:"tabBodyBottomMargin"},valueLeft:{value:fe,label:"tabBodyLeftMargin"},valueTopTablet:{value:xe,label:"tabBodyTopMarginTablet"},valueRightTablet:{value:ye,label:"tabBodyRightMarginTablet"},valueBottomTablet:{value:Te,label:"tabBodyBottomMarginTablet"},valueLeftTablet:{value:he,label:"tabBodyLeftMarginTablet"},valueTopMobile:{value:Be,label:"tabBodyTopMarginMobile"},valueRightMobile:{value:Me,label:"tabBodyRightMarginMobile"},valueBottomMobile:{value:je,label:"tabBodyBottomMarginMobile"},valueLeftMobile:{value:we,label:"tabBodyLeftMarginMobile"},unit:{value:Oe,label:"tabBodyMarginUnit"},mUnit:{value:Se,label:"mobiletabBodyMarginUnit"},tUnit:{value:Ce,label:"tablettabBodyMarginUnit"},attributes:a,setAttributes:r,link:{value:Pe,label:"tabBodyMarginLink"}})),f.a.createElement(B.a,k({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ke,label:"tabBodyTopPadding"},valueRight:{value:Ee,label:"tabBodyRightPadding"},valueBottom:{value:Le,label:"tabBodyBottomPadding"},valueLeft:{value:He,label:"tabBodyLeftPadding"},valueTopTablet:{value:ze,label:"tabBodyTopPaddingTablet"},valueRightTablet:{value:Re,label:"tabBodyRightPaddingTablet"},valueBottomTablet:{value:Ue,label:"tabBodyBottomPaddingTablet"},valueLeftTablet:{value:Ve,label:"tabBodyLeftPaddingTablet"},valueTopMobile:{value:Ae,label:"tabBodyTopPaddingMobile"},valueRightMobile:{value:Fe,label:"tabBodyRightPaddingMobile"},valueBottomMobile:{value:Ie,label:"tabBodyBottomPaddingMobile"},valueLeftMobile:{value:Ne,label:"tabBodyLeftPaddingMobile"},unit:{value:De,label:"tabBodyPaddingUnit"},mUnit:{value:Ze,label:"mobiletabBodyPaddingUnit"},tUnit:{value:Ge,label:"tablettabBodyPaddingUnit"},attributes:a,setAttributes:r,link:{value:We,label:"tabBodyPaddingLink"}}))),f.a.createElement(_.PanelBody,{title:Object(m.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},f.a.createElement(O.a,{setAttributes:r,borderStyle:{value:p,label:"borderStyle",title:Object(m.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:v,label:"borderWidth",title:Object(m.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:h,label:"borderRadius",title:Object(m.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:y,label:"borderColor",title:Object(m.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:x,label:"borderHoverColor",title:Object(m.__)("Hover Color","ultimate-addons-for-gutenberg")}}))),f.a.createElement(C.b,C.a.advance)))};t.default=f.a.memo(E)}}]);