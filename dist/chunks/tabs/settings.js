(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[105],{206:function(e,t,a){"use strict";var l=a(16),n=a.n(l)()((function(e){return e[1]}));n.push([e.i,'/*#######################################################################################*/\n/**\n * google-material-color v1.2.6\n * https://github.com/danlevan/google-material-color\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown .rfipicons__ibox--error {\n    color: #000;\n    text-transform: capitalize;\n    font-size: 14px;\n    font-weight: 500; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=n},207:function(e,t,a){"use strict";var l,n=a(211),o=a.n(n),i=a(0),r=a.n(i),b=a(15),d=a.n(b),u=a(206),g=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=u.a.locals||{},c.use=function(){return g++||(l=d()(u.a,s)),c},c.unuse=function(){g>0&&!--g&&(l(),l=null)};var p=c,f=a(13),v=a(1);t.a=e=>(Object(i.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(v.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(o.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:null==e?void 0:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(v.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help)))},208:function(e,t,a){"use strict";var l=a(0),n=a.n(l),o=a(7),i=a(11),r=a(68);t.a=e=>{const{label:t,data:a,setAttributes:l,options:b}=e,d=Object(i.a)(),u={};return u.Desktop=n.a.createElement(o.SelectControl,{value:a.desktop.value,onChange:e=>l({[a.desktop.label]:e}),options:b.desktop}),u.Tablet=n.a.createElement(o.SelectControl,{value:a.tablet.value,onChange:e=>l({[a.tablet.label]:e}),options:b.tablet||b.desktop}),u.Mobile=n.a.createElement(o.SelectControl,{value:a.mobile.value,onChange:e=>l({[a.mobile.label]:e}),options:b.mobile||b.desktop}),n.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},n.a.createElement("div",{className:"uagb-size-type-field-tabs"},n.a.createElement("div",{className:"uagb-control__header"},n.a.createElement(r.a,{label:t,responsive:!0})),u[d]?u[d]:u.Desktop),e.help&&n.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},522:function(e,t,a){"use strict";a.r(t);var l=a(207),n=a(13),o=a(37),i=a(208),r=a(21),b=a(18),d=a(36),u=a(79),g=a(81),s=a(28),c=a(58),p=a(27),f=a(0),v=a.n(f),m=a(1),_=a(5),h=a(7),y=a(23);const T=[{defaultAttributes:a(61).a},{value:"preset-1",label:Object(m.__)("Preset 1","ultimate-addons-for-gutenberg"),attributes:[{label:"tabsStyleD",value:"hstyle2"},{label:"tabBodyTopPadding",value:15},{label:"tabBodyRightPadding",value:15},{label:"tabBodyBottomPadding",value:15},{label:"tabBodyLeftPadding",value:0},{label:"borderColor",value:"transparent"},{label:"tabBorderTopLeftRadius",value:0},{label:"tabBorderTopRightRadius",value:0},{label:"tabBorderBottomLeftRadius",value:0},{label:"tabBorderBottomRightRadius",value:0}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M56 27H16V51H56V27ZM16 25C14.8954 25 14 25.8954 14 27V51C14 52.1046 14.8954 53 16 53H56C57.1046 53 58 52.1046 58 51V27C58 25.8954 57.1046 25 56 25H16Z" /><path d="M14 21C14 20.4477 14.4477 20 15 20H26C26.5523 20 27 20.4477 27 21C27 21.5523 26.5523 22 26 22H15C14.4477 22 14 21.5523 14 21Z" /><path d="M29 21C29 20.4477 29.4477 20 30 20H41C41.5523 20 42 20.4477 42 21C42 21.5523 41.5523 22 41 22H30C29.4477 22 29 21.5523 29 21Z" /></svg>'},{value:"preset-2",label:Object(m.__)("Preset 2","ultimate-addons-for-gutenberg"),attributes:[{label:"tabsStyleD",value:"hstyle3"},{label:"titleAlign",value:"left"},{label:"tabBodyTopPadding",value:""},{label:"tabBodyRightPadding",value:""},{label:"tabBodyBottomPadding",value:""},{label:"tabBodyLeftPadding",value:""},{label:"borderColor",value:"#E0E0E0"},{label:"tabBorderTopLeftRadius",value:0},{label:"tabBorderTopRightRadius",value:0},{label:"tabBorderBottomLeftRadius",value:0},{label:"tabBorderBottomRightRadius",value:0}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M56 27H16V51H56V27ZM14 25V51C14 52.1046 14.8954 53 16 53H56C57.1046 53 58 52.1046 58 51V27C58 25.8954 57.1046 25 56 25H14Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M25 22H16V25H25V22ZM16 20C14.8954 20 14 20.8954 14 22V27H27V22C27 20.8954 26.1046 20 25 20H16Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M40 22H31V25H40V22ZM31 20C29.8954 20 29 20.8954 29 22V27H42V22C42 20.8954 41.1046 20 40 20H31Z" /></svg>'},{value:"preset-3",label:Object(m.__)("Preset 3","ultimate-addons-for-gutenberg"),attributes:[{label:"tabsStyleD",value:"vstyle6"},{label:"titleAlign",value:"center"},{label:"tabBodyTopPadding",value:""},{label:"tabBodyRightPadding",value:""},{label:"tabBodyBottomPadding",value:""},{label:"tabBodyLeftPadding",value:""},{label:"borderColor",value:"#E0E0E0"},{label:"tabBorderTopLeftRadius",value:4},{label:"tabBorderTopRightRadius",value:4},{label:"tabBorderBottomLeftRadius",value:4},{label:"tabBorderBottomRightRadius",value:4}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M63 22H27V51H63V22ZM27 20C25.8954 20 25 20.8954 25 22V51C25 52.1046 25.8954 53 27 53H63C64.1046 53 65 52.1046 65 51V22C65 20.8954 64.1046 20 63 20H27Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M21 22H10L10 25H21V22ZM10 20C8.89543 20 8 20.8954 8 22V25C8 26.1046 8.89543 27 10 27H21C22.1046 27 23 26.1046 23 25V22C23 20.8954 22.1046 20 21 20H10Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M21 31H10L10 34H21V31ZM10 29C8.89543 29 8 29.8954 8 31V34C8 35.1046 8.89543 36 10 36H21C22.1046 36 23 35.1046 23 34V31C23 29.8954 22.1046 29 21 29H10Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M21 40H10L10 43H21V40ZM10 38C8.89543 38 8 38.8954 8 40V43C8 44.1046 8.89543 45 10 45H21C22.1046 45 23 44.1046 23 43V40C23 38.8954 22.1046 38 21 38H10Z" /></svg>'},{value:"preset-4",label:Object(m.__)("Preset 4","ultimate-addons-for-gutenberg"),attributes:[{label:"tabsStyleD",value:"vstyle8"},{label:"titleAlign",value:"center"},{label:"tabBodyTopPadding",value:""},{label:"tabBodyRightPadding",value:""},{label:"tabBodyBottomPadding",value:""},{label:"tabBodyLeftPadding",value:""},{label:"borderColor",value:"#E0E0E0"},{label:"tabBorderTopLeftRadius",value:0},{label:"tabBorderTopRightRadius",value:0},{label:"tabBorderBottomLeftRadius",value:0},{label:"tabBorderBottomRightRadius",value:0}],icon:'<svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M63 22H24V51H63V22ZM22 20V51C22 52.1046 22.8954 53 24 53H63C64.1046 53 65 52.1046 65 51V22C65 20.8954 64.1046 20 63 20H22Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M22 22H10V26H22V22ZM10 20C8.89543 20 8 20.8954 8 22V26C8 27.1046 8.89543 28 10 28H24V20H10Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M22 28H10V32H22V28ZM8 26V34H24V26H8Z" /><path fill-rule="evenodd" clip-rule="evenodd" d="M22 34H10V38H22V34ZM10 32C8.89543 32 8 32.8954 8 34V38C8 39.1046 8.89543 40 10 40H24V32H10Z" /></svg>'}];var x=Object(y.applyFilters)("uag_tabs_presets",T),B=a(125),M=a(17);function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const S=e=>{e=e.parentProps;const{attributes:t,setAttributes:a,deviceType:f}=e,{tabsStyleD:y,tabsStyleM:T,tabsStyleT:S,tabActiveFrontend:j,tabHeaders:O,headerBgColor:C,headerTextColor:P,activeTabBgColor:L,activeTabTextColor:H,bodyBgColor:E,bodyTextColor:R,tabTitleLeftMargin:V,tabTitleRightMargin:k,tabTitleTopMargin:z,tabTitleBottomMargin:U,tabTitleLeftMarginTablet:A,tabTitleRightMarginTablet:F,tabTitleTopMarginTablet:Z,tabTitleBottomMarginTablet:I,tabTitleLeftMarginMobile:N,tabTitleRightMarginMobile:D,tabTitleTopMarginMobile:G,tabTitleBottomMarginMobile:W,tabTitleMarginUnit:J,mobiletabTitleMarginUnit:q,tablettabTitleMarginUnit:K,tabTitleMarginLink:Q,tabTitleTopPadding:X,tabTitleRightPadding:Y,tabTitleBottomPadding:$,tabTitleLeftPadding:ee,tabTitleTopPaddingTablet:te,tabTitleRightPaddingTablet:ae,tabTitleBottomPaddingTablet:le,tabTitleLeftPaddingTablet:ne,tabTitleTopPaddingMobile:oe,tabTitleRightPaddingMobile:ie,tabTitleBottomPaddingMobile:re,tabTitleLeftPaddingMobile:be,tabTitlePaddingUnit:de,mobiletabTitlePaddingUnit:ue,tablettabTitlePaddingUnit:ge,tabTitlePaddingLink:se,tabBodyLeftMargin:ce,tabBodyRightMargin:pe,tabBodyTopMargin:fe,tabBodyBottomMargin:ve,tabBodyLeftMarginTablet:me,tabBodyRightMarginTablet:_e,tabBodyTopMarginTablet:he,tabBodyBottomMarginTablet:ye,tabBodyLeftMarginMobile:Te,tabBodyRightMarginMobile:xe,tabBodyTopMarginMobile:Be,tabBodyBottomMarginMobile:Me,tabBodyMarginUnit:we,mobiletabBodyMarginUnit:Se,tablettabBodyMarginUnit:je,tabBodyMarginLink:Oe,tabBodyTopPadding:Ce,tabBodyRightPadding:Pe,tabBodyBottomPadding:Le,tabBodyLeftPadding:He,tabBodyTopPaddingTablet:Ee,tabBodyRightPaddingTablet:Re,tabBodyBottomPaddingTablet:Ve,tabBodyLeftPaddingTablet:ke,tabBodyTopPaddingMobile:ze,tabBodyRightPaddingMobile:Ue,tabBodyBottomPaddingMobile:Ae,tabBodyLeftPaddingMobile:Fe,tabBodyPaddingUnit:Ze,mobiletabBodyPaddingUnit:Ie,tablettabBodyPaddingUnit:Ne,tabBodyPaddingLink:De,titleLoadGoogleFonts:Ge,titleFontFamily:We,titleFontWeight:Je,titleFontSizeType:qe,titleFontSize:Ke,titleFontSizeMobile:Qe,titleFontSizeTablet:Xe,titleLineHeightType:Ye,titleLineHeight:$e,titleLineHeightMobile:et,titleLineHeightTablet:tt,titleLetterSpacing:at,titleLetterSpacingTablet:lt,titleLetterSpacingMobile:nt,titleLetterSpacingType:ot,titleTransform:it,titleDecoration:rt,titleAlign:bt,tabAlign:dt,showIcon:ut,icon:gt,iconColor:st,iconPosition:ct,iconSpacing:pt,iconSpacingTablet:ft,iconSpacingMobile:vt,iconSize:mt,iconSizeTablet:_t,iconSizeMobile:ht,activeiconColor:yt,titleFontStyle:Tt}=t;return v.a.createElement(_.InspectorControls,null,v.a.createElement(g.a,null,v.a.createElement(s.b,s.a.general,v.a.createElement(M.a,{title:Object(m.__)("Presets","ultimate-addons-for-gutenberg"),initialOpen:!0},v.a.createElement(B.a,{setAttributes:a,presets:x,presetInputType:"radioImage"})),(()=>{const e={desktop:[{value:"hstyle1",label:Object(m.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(m.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(m.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(m.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(m.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(m.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(m.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(m.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(m.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(m.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],tablet:[{value:"hstyle1",label:Object(m.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(m.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(m.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(m.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(m.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(m.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(m.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(m.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(m.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(m.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],mobile:[{value:"hstyle1",label:Object(m.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(m.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(m.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(m.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(m.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(m.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(m.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(m.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(m.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(m.__)("Vertical Style 10","ultimate-addons-for-gutenberg")},{value:"stack1",label:Object(m.__)("Stack Style 11","ultimate-addons-for-gutenberg")},{value:"stack2",label:Object(m.__)("Stack Style 12","ultimate-addons-for-gutenberg")},{value:"stack3",label:Object(m.__)("Stack Style 13","ultimate-addons-for-gutenberg")},{value:"stack4",label:Object(m.__)("Stack Style 14","ultimate-addons-for-gutenberg")}]};return v.a.createElement(M.a,{title:Object(m.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},v.a.createElement(i.a,{label:Object(m.__)("Style","ultimate-addons-for-gutenberg"),data:{desktop:{value:y,label:"tabsStyleD"},tablet:{value:S,label:"tabsStyleT"},mobile:{value:T,label:"tabsStyleM"}},options:e,setAttributes:a}))})(),v.a.createElement(M.a,{title:Object(m.__)("Tabs Title","ultimate-addons-for-gutenberg"),initialOpen:!1},v.a.createElement(h.SelectControl,{label:Object(m.__)("Initial Open Tab","ultimate-addons-for-gutenberg"),value:j,options:O.map((e,t)=>({value:t,label:e})),onChange:e=>a({tabActiveFrontend:parseInt(e)})}),v.a.createElement(r.a,{setAttributes:a,label:Object(m.__)("Tab Alignment","ultimate-addons-for-gutenberg"),data:{value:dt,label:"tabAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:v.a.createElement(h.Icon,{icon:Object(n.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:v.a.createElement(h.Icon,{icon:Object(n.a)("fa fa-align-center")}),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:v.a.createElement(h.Icon,{icon:Object(n.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),v.a.createElement(r.a,{setAttributes:a,label:Object(m.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:bt,label:"titleAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:v.a.createElement(h.Icon,{icon:Object(n.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:v.a.createElement(h.Icon,{icon:Object(n.a)("fa fa-align-center")}),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:v.a.createElement(h.Icon,{icon:Object(n.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),v.a.createElement(h.ToggleControl,{label:Object(m.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:ut,onChange:()=>a({showIcon:!ut})}),ut&&v.a.createElement(v.a.Fragment,null,v.a.createElement(l.a,{label:Object(m.__)("Tab Icon","ultimate-addons-for-gutenberg"),value:gt,onChange:e=>a({icon:e})}),v.a.createElement(r.a,{setAttributes:a,label:Object(m.__)("Icon Position","ultimate-addons-for-gutenberg"),data:{value:ct,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",label:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(m.__)("Right","ultimate-addons-for-gutenberg")},{value:"top",label:Object(m.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(m.__)("Bottom","ultimate-addons-for-gutenberg")}]})))),v.a.createElement(s.b,s.a.style,(()=>{const l=v.a.createElement(v.a.Fragment,null,v.a.createElement(b.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:P,onColorChange:e=>a({headerTextColor:e})}),v.a.createElement(b.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:C,onColorChange:e=>a({headerBgColor:e})})),n=v.a.createElement(v.a.Fragment,null,v.a.createElement(b.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:H,onColorChange:e=>a({activeTabTextColor:e})}),v.a.createElement(b.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:L,onColorChange:e=>a({activeTabBgColor:e})}));return v.a.createElement(M.a,{title:Object(m.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},v.a.createElement(c.a,{tabs:[{name:"normal",title:Object(m.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(m.__)("Active","ultimate-addons-for-gutenberg")}],normal:l,active:n}),v.a.createElement(o.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:a,loadGoogleFonts:{value:Ge,label:"titleLoadGoogleFonts"},fontFamily:{value:We,label:"titleFontFamily"},fontWeight:{value:Je,label:"titleFontWeight"},fontStyle:{value:Tt,label:"titleFontStyle"},fontSizeType:{value:qe,label:"titleFontSizeType"},fontSize:{value:Ke,label:"titleFontSize"},fontSizeMobile:{value:Qe,label:"titleFontSizeMobile"},fontSizeTablet:{value:Xe,label:"titleFontSizeTablet"},lineHeightType:{value:Ye,label:"titleLineHeightType"},lineHeight:{value:$e,label:"titleLineHeight"},lineHeightMobile:{value:et,label:"titleLineHeightMobile"},lineHeightTablet:{value:tt,label:"titleLineHeightTablet"},letterSpacing:{value:at,label:"titleLetterSpacing"},letterSpacingTablet:{value:lt,label:"titleLetterSpacingTablet"},letterSpacingMobile:{value:nt,label:"titleLetterSpacingMobile"},letterSpacingType:{value:ot,label:"titleLetterSpacingType"},transform:{value:it,label:"titleTransform"},decoration:{value:rt,label:"titleDecoration"}}),v.a.createElement(d.a,w({},e,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:z,label:"tabTitleTopMargin"},valueRight:{value:k,label:"tabTitleRightMargin"},valueBottom:{value:U,label:"tabTitleBottomMargin"},valueLeft:{value:V,label:"tabTitleLeftMargin"},valueTopTablet:{value:Z,label:"tabTitleTopMarginTablet"},valueRightTablet:{value:F,label:"tabTitleRightMarginTablet"},valueBottomTablet:{value:I,label:"tabTitleBottomMarginTablet"},valueLeftTablet:{value:A,label:"tabTitleLeftMarginTablet"},valueTopMobile:{value:G,label:"tabTitleTopMarginMobile"},valueRightMobile:{value:D,label:"tabTitleRightMarginMobile"},valueBottomMobile:{value:W,label:"tabTitleBottomMarginMobile"},valueLeftMobile:{value:N,label:"tabTitleLeftMarginMobile"},unit:{value:J,label:"tabTitleMarginUnit"},mUnit:{value:q,label:"mobiletabTitleMarginUnit"},tUnit:{value:K,label:"tablettabTitleMarginUnit"},attributes:t,setAttributes:a,link:{value:Q,label:"tabTitleMarginLink"}})),v.a.createElement(d.a,w({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:X,label:"tabTitleTopPadding"},valueRight:{value:Y,label:"tabTitleRightPadding"},valueBottom:{value:$,label:"tabTitleBottomPadding"},valueLeft:{value:ee,label:"tabTitleLeftPadding"},valueTopTablet:{value:te,label:"tabTitleTopPaddingTablet"},valueRightTablet:{value:ae,label:"tabTitleRightPaddingTablet"},valueBottomTablet:{value:le,label:"tabTitleBottomPaddingTablet"},valueLeftTablet:{value:ne,label:"tabTitleLeftPaddingTablet"},valueTopMobile:{value:oe,label:"tabTitleTopPaddingMobile"},valueRightMobile:{value:ie,label:"tabTitleRightPaddingMobile"},valueBottomMobile:{value:re,label:"tabTitleBottomPaddingMobile"},valueLeftMobile:{value:be,label:"tabTitleLeftPaddingMobile"},unit:{value:de,label:"tabTitlePaddingUnit"},mUnit:{value:ue,label:"mobiletabTitlePaddingUnit"},tUnit:{value:ge,label:"tablettabTitlePaddingUnit"},attributes:t,setAttributes:a,link:{value:se,label:"tabTitlePaddingLink"}})))})(),(()=>{if(!ut)return"";const e=v.a.createElement(b.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:st,onColorChange:e=>a({iconColor:e})}),t=v.a.createElement(b.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:yt,onColorChange:e=>a({activeiconColor:e})});return v.a.createElement(M.a,{title:Object(m.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},v.a.createElement(p.a,{label:Object(m.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:mt,label:"iconSize"},tablet:{value:_t,label:"iconSizeTablet"},mobile:{value:ht,label:"iconSizeMobile"}},min:0,max:100,displayUnit:!1,setAttributes:a}),v.a.createElement(c.a,{tabs:[{name:"normal",title:Object(m.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(m.__)("Active","ultimate-addons-for-gutenberg")}],normal:e,active:t}),v.a.createElement(p.a,{label:Object(m.__)("Spacing","ultimate-addons-for-gutenberg"),data:{desktop:{value:pt,label:"iconSpacing"},tablet:{value:ft,label:"iconSpacingTablet"},mobile:{value:vt,label:"iconSpacingMobile"}},min:0,max:100,displayUnit:!1,setAttributes:a}))})(),v.a.createElement(M.a,{title:Object(m.__)("Body","ultimate-addons-for-gutenberg"),initialOpen:!1},v.a.createElement(b.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:R,onColorChange:e=>a({bodyTextColor:e})}),v.a.createElement(b.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:E,onColorChange:e=>a({bodyBgColor:e})}),v.a.createElement(d.a,w({},e,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:fe,label:"tabBodyTopMargin"},valueRight:{value:pe,label:"tabBodyRightMargin"},valueBottom:{value:ve,label:"tabBodyBottomMargin"},valueLeft:{value:ce,label:"tabBodyLeftMargin"},valueTopTablet:{value:he,label:"tabBodyTopMarginTablet"},valueRightTablet:{value:_e,label:"tabBodyRightMarginTablet"},valueBottomTablet:{value:ye,label:"tabBodyBottomMarginTablet"},valueLeftTablet:{value:me,label:"tabBodyLeftMarginTablet"},valueTopMobile:{value:Be,label:"tabBodyTopMarginMobile"},valueRightMobile:{value:xe,label:"tabBodyRightMarginMobile"},valueBottomMobile:{value:Me,label:"tabBodyBottomMarginMobile"},valueLeftMobile:{value:Te,label:"tabBodyLeftMarginMobile"},unit:{value:we,label:"tabBodyMarginUnit"},mUnit:{value:Se,label:"mobiletabBodyMarginUnit"},tUnit:{value:je,label:"tablettabBodyMarginUnit"},attributes:t,setAttributes:a,link:{value:Oe,label:"tabBodyMarginLink"}})),v.a.createElement(d.a,w({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ce,label:"tabBodyTopPadding"},valueRight:{value:Pe,label:"tabBodyRightPadding"},valueBottom:{value:Le,label:"tabBodyBottomPadding"},valueLeft:{value:He,label:"tabBodyLeftPadding"},valueTopTablet:{value:Ee,label:"tabBodyTopPaddingTablet"},valueRightTablet:{value:Re,label:"tabBodyRightPaddingTablet"},valueBottomTablet:{value:Ve,label:"tabBodyBottomPaddingTablet"},valueLeftTablet:{value:ke,label:"tabBodyLeftPaddingTablet"},valueTopMobile:{value:ze,label:"tabBodyTopPaddingMobile"},valueRightMobile:{value:Ue,label:"tabBodyRightPaddingMobile"},valueBottomMobile:{value:Ae,label:"tabBodyBottomPaddingMobile"},valueLeftMobile:{value:Fe,label:"tabBodyLeftPaddingMobile"},unit:{value:Ze,label:"tabBodyPaddingUnit"},mUnit:{value:Ie,label:"mobiletabBodyPaddingUnit"},tUnit:{value:Ne,label:"tablettabBodyPaddingUnit"},attributes:t,setAttributes:a,link:{value:De,label:"tabBodyPaddingLink"}}))),v.a.createElement(M.a,{title:Object(m.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},v.a.createElement(u.a,{setAttributes:a,prefix:"tab",attributes:t,deviceType:f,disableBottomSeparator:!0,disabledBorderTitle:!0}))),v.a.createElement(s.b,w({},s.a.advance,{parentProps:e}))))};t.default=v.a.memo(S)}}]);