(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[105],{210:function(e,t,l){"use strict";var a=l(16),n=l.n(a)()((function(e){return e[1]}));n.push([e.i,'/*#######################################################################################*/\n/**\n * google-material-color v1.2.6\n * https://github.com/danlevan/google-material-color\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-color: #9e9e9e;\n      box-shadow: 0 0 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown .rfipicons__ibox--error {\n    color: #000;\n    text-transform: capitalize;\n    font-size: 14px;\n    font-weight: 500; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=n},211:function(e,t,l){"use strict";var a,n=l(215),i=l.n(n),o=l(0),r=l.n(o),b=l(15),d=l.n(b),u=l(210),s=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},c={};c.locals=u.a.locals||{},c.use=function(){return s++||(a=d()(u.a,g)),c},c.unuse=function(){s>0&&!--s&&(a(),a=null)};var p=c,f=l(13),v=l(1);t.a=e=>(Object(o.useLayoutEffect)(()=>(p.use(),()=>{p.unuse()}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(v.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(i.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:null==e?void 0:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(v.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help)))},212:function(e,t,l){"use strict";var a=l(0),n=l.n(a),i=l(7),o=l(11),r=l(68);t.a=e=>{const{label:t,data:l,setAttributes:a,options:b}=e,d=Object(o.a)(),u={};return u.Desktop=n.a.createElement(i.SelectControl,{value:l.desktop.value,onChange:e=>a({[l.desktop.label]:e}),options:b.desktop}),u.Tablet=n.a.createElement(i.SelectControl,{value:l.tablet.value,onChange:e=>a({[l.tablet.label]:e}),options:b.tablet||b.desktop}),u.Mobile=n.a.createElement(i.SelectControl,{value:l.mobile.value,onChange:e=>a({[l.mobile.label]:e}),options:b.mobile||b.desktop}),n.a.createElement("div",{className:"components-base-control uagb-responsive-select-control"},n.a.createElement("div",{className:"uagb-size-type-field-tabs"},n.a.createElement("div",{className:"uagb-control__header"},n.a.createElement(r.a,{label:t,responsive:!0})),u[d]?u[d]:u.Desktop),e.help&&n.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},523:function(e,t,l){"use strict";l.r(t);var a=l(211),n=l(13),i=l(37),o=l(212),r=l(21),b=l(18),d=l(36),u=l(80),s=l(84),g=l(28),c=l(58),p=l(27),f=l(0),v=l.n(f),m=l(1),_=l(5),h=l(7),y=l(23);const x=[{defaultAttributes:l(62).a},{value:"preset-1",label:Object(m.__)("Preset 1","ultimate-addons-for-gutenberg"),attributes:[{label:"tabsStyleD",value:"hstyle2"},{label:"tabBodyTopPadding",value:15},{label:"tabBodyRightPadding",value:15},{label:"tabBodyBottomPadding",value:15},{label:"tabBodyLeftPadding",value:0},{label:"borderColor",value:"transparent"},{label:"borderRadius",value:0}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 138C58 136.343 59.138 135 60.5418 135H266.259C267.663 135 268.801 136.343 268.801 138C268.801 139.657 267.663 141 266.259 141H60.5418C59.138 141 58 139.657 58 138Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 159C58 157.343 59.1317 156 60.5276 156H214.24C215.636 156 216.768 157.343 216.768 159C216.768 160.657 215.636 162 214.24 162H60.5276C59.1317 162 58 160.657 58 159Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M58 113C58 111.343 59.0884 110 60.4311 110H86.5689C87.9116 110 89 111.343 89 113C89 114.657 87.9116 116 86.5689 116H60.4311C59.0884 116 58 114.657 58 113Z" fill="#B6B6B6"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M99 113C99 111.343 100.088 110 101.431 110H127.569C128.912 110 130 111.343 130 113C130 114.657 128.912 116 127.569 116H101.431C100.088 116 99 114.657 99 113Z" fill="#B6B6B6"/> <path d="M140 112.75H151.5" stroke="#B6B6B6" stroke-width="3" fill="none"/> <path d="M145.75 118.5L145.75 107" stroke="#B6B6B6" stroke-width="3" fill="none"/> </svg>'},{value:"preset-2",label:Object(m.__)("Preset 2","ultimate-addons-for-gutenberg"),attributes:[{label:"tabsStyleD",value:"hstyle3"},{label:"titleAlign",value:"left"},{label:"tabBodyTopPadding",value:""},{label:"tabBodyRightPadding",value:""},{label:"tabBodyBottomPadding",value:""},{label:"tabBodyLeftPadding",value:""},{label:"borderColor",value:"#E0E0E0"},{label:"borderRadius",value:0}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M60 144C60 142.343 61.138 141 62.5418 141H268.259C269.663 141 270.801 142.343 270.801 144C270.801 145.657 269.663 147 268.259 147H62.5418C61.138 147 60 145.657 60 144Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M60 161C60 159.343 61.1317 158 62.5276 158H216.24C217.636 158 218.768 159.343 218.768 161C218.768 162.657 217.636 164 216.24 164H62.5276C61.1317 164 60 162.657 60 161Z" fill="#D2D2D2"/> <path d="M170 112.75H181.5" stroke="#B6B6B6" stroke-width="3" fill="none"/> <path d="M175.75 118.5L175.75 107" stroke="#B6B6B6" stroke-width="3" fill="none"/> <path d="M49.75 122.75H278C279.795 122.75 281.25 124.205 281.25 126V178C281.25 179.795 279.795 181.25 278 181.25H53C51.2051 181.25 49.75 179.795 49.75 178V122.75Z" stroke="#959595" stroke-width="1.5" fill="none"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M98.05 102.5H52C51.1716 102.5 50.5 103.172 50.5 104V122.18H99.55V104C99.55 103.172 98.8784 102.5 98.05 102.5ZM52 101C50.3431 101 49 102.343 49 104V123.5H101.05V104C101.05 102.343 99.7069 101 98.05 101H52Z" fill="#959595"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M159.05 102.5H113C112.172 102.5 111.5 103.172 111.5 104V122.18H160.55V104C160.55 103.172 159.878 102.5 159.05 102.5ZM113 101C111.343 101 110 102.343 110 104V123.5H162.05V104C162.05 102.343 160.707 101 159.05 101H113Z" fill="#959595"/> </svg>'},{value:"preset-3",label:Object(m.__)("Preset 3","ultimate-addons-for-gutenberg"),attributes:[{label:"tabsStyleD",value:"vstyle6"},{label:"titleAlign",value:"center"},{label:"tabBodyTopPadding",value:""},{label:"tabBodyRightPadding",value:""},{label:"tabBodyBottomPadding",value:""},{label:"tabBodyLeftPadding",value:""},{label:"borderColor",value:"#E0E0E0"},{label:"borderRadius",value:4}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M134 130C134 128.343 135.138 127 136.542 127H252.259C253.663 127 254.801 128.343 254.801 130C254.801 131.657 253.663 133 252.259 133H136.542C135.138 133 134 131.657 134 130Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M134 144C134 142.343 135.132 141 136.528 141H210.24C211.636 141 212.768 142.343 212.768 144C212.768 145.657 211.636 147 210.24 147H136.528C135.132 147 134 145.657 134 144Z" fill="#D2D2D2"/> <rect x="115.75" y="90.75" width="157.5" height="91.5" rx="3.25" stroke="#959595" stroke-width="1.5" fill="none"/> <path d="M52.75 92.7492C52.75 91.6338 53.6369 90.75 54.7059 90.75H101.34C102.409 90.75 103.296 91.6338 103.296 92.7492V109.932C103.296 111.047 102.409 111.931 101.34 111.931H54.7059C53.6369 111.931 52.75 111.047 52.75 109.932V92.7492Z" stroke="#959595" stroke-width="1.5" fill="none"/> <path d="M52.75 120.749C52.75 119.634 53.6369 118.75 54.7059 118.75H101.34C102.409 118.75 103.296 119.634 103.296 120.749V137.932C103.296 139.047 102.409 139.931 101.34 139.931H54.7059C53.6369 139.931 52.75 139.047 52.75 137.932V120.749Z" stroke="#959595" stroke-width="1.5" fill="none"/> <path d="M52.75 148.749C52.75 147.634 53.6369 146.75 54.7059 146.75H101.34C102.409 146.75 103.296 147.634 103.296 148.749V165.932C103.296 167.047 102.409 167.931 101.34 167.931H54.7059C53.6369 167.931 52.75 167.047 52.75 165.932V148.749Z" stroke="#959595" stroke-width="1.5" fill="none"/> </svg>'},{value:"preset-4",label:Object(m.__)("Preset 4","ultimate-addons-for-gutenberg"),attributes:[{label:"tabsStyleD",value:"vstyle8"},{label:"titleAlign",value:"center"},{label:"tabBodyTopPadding",value:""},{label:"tabBodyRightPadding",value:""},{label:"tabBodyBottomPadding",value:""},{label:"tabBodyLeftPadding",value:""},{label:"borderColor",value:"#E0E0E0"},{label:"borderRadius",value:0}],icon:'<svg xmlns="http://www.w3.org/2000/svg" width="325" height="245" viewBox="0 0 325 245" fill="none"> <path d="M27 31.7987C27 29.1485 29.1527 27 31.8081 27H294.192C296.847 27 299 29.1485 299 31.7987V245H27V31.7987Z" fill="white"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M134 130C134 128.343 135.138 127 136.542 127H252.259C253.663 127 254.801 128.343 254.801 130C254.801 131.657 253.663 133 252.259 133H136.542C135.138 133 134 131.657 134 130Z" fill="#D2D2D2"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M134 144C134 142.343 135.132 141 136.528 141H210.24C211.636 141 212.768 142.343 212.768 144C212.768 145.657 211.636 147 210.24 147H136.528C135.132 147 134 145.657 134 144Z" fill="#D2D2D2"/> <rect x="115.75" y="90.75" width="157.5" height="91.5" rx="3.25" stroke="#959595" stroke-width="1.5" fill="none"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M115.55 98.5H68C67.1716 98.5 66.5 99.1716 66.5 100V116.68C66.5 117.508 67.1716 118.18 68 118.18H115.55V98.5ZM68 97C66.3431 97 65 98.3431 65 100V116.68C65 118.337 66.3431 119.68 68 119.68H116.05V97H68Z" fill="#959595"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M115.55 126.5H68C67.1716 126.5 66.5 127.172 66.5 128V144.68C66.5 145.508 67.1716 146.18 68 146.18H115.55V126.5ZM68 125C66.3431 125 65 126.343 65 128V144.68C65 146.337 66.3431 147.68 68 147.68H116.05V125H68Z" fill="#959595"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M115.55 154.5H68C67.1716 154.5 66.5 155.172 66.5 156V172.68C66.5 173.508 67.1716 174.18 68 174.18H115.55V154.5ZM68 153C66.3431 153 65 154.343 65 156V172.68C65 174.337 66.3431 175.68 68 175.68H116.05V153H68Z" fill="#959595"/> </svg>'}];var T=Object(y.applyFilters)("uag_tabs_presets",x),w=l(81),M=l(17);function B(){return(B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a])}return e}).apply(this,arguments)}const C=e=>{e=e.parentProps;const{attributes:t,setAttributes:l,deviceType:f}=e,{tabsStyleD:y,tabsStyleM:x,tabsStyleT:C,tabActiveFrontend:S,tabHeaders:j,headerBgColor:O,headerTextColor:P,activeTabBgColor:H,activeTabTextColor:k,bodyBgColor:L,bodyTextColor:E,tabTitleLeftMargin:V,tabTitleRightMargin:z,tabTitleTopMargin:R,tabTitleBottomMargin:A,tabTitleLeftMarginTablet:U,tabTitleRightMarginTablet:D,tabTitleTopMarginTablet:F,tabTitleBottomMarginTablet:Z,tabTitleLeftMarginMobile:I,tabTitleRightMarginMobile:N,tabTitleTopMarginMobile:G,tabTitleBottomMarginMobile:W,tabTitleMarginUnit:J,mobiletabTitleMarginUnit:q,tablettabTitleMarginUnit:K,tabTitleMarginLink:Q,tabTitleTopPadding:X,tabTitleRightPadding:Y,tabTitleBottomPadding:$,tabTitleLeftPadding:ee,tabTitleTopPaddingTablet:te,tabTitleRightPaddingTablet:le,tabTitleBottomPaddingTablet:ae,tabTitleLeftPaddingTablet:ne,tabTitleTopPaddingMobile:ie,tabTitleRightPaddingMobile:oe,tabTitleBottomPaddingMobile:re,tabTitleLeftPaddingMobile:be,tabTitlePaddingUnit:de,mobiletabTitlePaddingUnit:ue,tablettabTitlePaddingUnit:se,tabTitlePaddingLink:ge,tabBodyLeftMargin:ce,tabBodyRightMargin:pe,tabBodyTopMargin:fe,tabBodyBottomMargin:ve,tabBodyLeftMarginTablet:me,tabBodyRightMarginTablet:_e,tabBodyTopMarginTablet:he,tabBodyBottomMarginTablet:ye,tabBodyLeftMarginMobile:xe,tabBodyRightMarginMobile:Te,tabBodyTopMarginMobile:we,tabBodyBottomMarginMobile:Me,tabBodyMarginUnit:Be,mobiletabBodyMarginUnit:Ce,tablettabBodyMarginUnit:Se,tabBodyMarginLink:je,tabBodyTopPadding:Oe,tabBodyRightPadding:Pe,tabBodyBottomPadding:He,tabBodyLeftPadding:ke,tabBodyTopPaddingTablet:Le,tabBodyRightPaddingTablet:Ee,tabBodyBottomPaddingTablet:Ve,tabBodyLeftPaddingTablet:ze,tabBodyTopPaddingMobile:Re,tabBodyRightPaddingMobile:Ae,tabBodyBottomPaddingMobile:Ue,tabBodyLeftPaddingMobile:De,tabBodyPaddingUnit:Fe,mobiletabBodyPaddingUnit:Ze,tablettabBodyPaddingUnit:Ie,tabBodyPaddingLink:Ne,titleLoadGoogleFonts:Ge,titleFontFamily:We,titleFontWeight:Je,titleFontSizeType:qe,titleFontSize:Ke,titleFontSizeMobile:Qe,titleFontSizeTablet:Xe,titleLineHeightType:Ye,titleLineHeight:$e,titleLineHeightMobile:et,titleLineHeightTablet:tt,titleLetterSpacing:lt,titleLetterSpacingTablet:at,titleLetterSpacingMobile:nt,titleLetterSpacingType:it,titleTransform:ot,titleDecoration:rt,titleAlign:bt,tabAlign:dt,showIcon:ut,icon:st,iconColor:gt,iconPosition:ct,iconSpacing:pt,iconSpacingTablet:ft,iconSpacingMobile:vt,iconSize:mt,iconSizeTablet:_t,iconSizeMobile:ht,activeiconColor:yt,titleFontStyle:xt}=t;return v.a.createElement(_.InspectorControls,null,v.a.createElement(s.a,null,v.a.createElement(g.b,g.a.general,v.a.createElement(M.a,{title:Object(m.__)("Presets","ultimate-addons-for-gutenberg"),initialOpen:!0},v.a.createElement(w.a,{setAttributes:l,presets:T,presetInputType:"radioImage"})),(()=>{const e={desktop:[{value:"hstyle1",label:Object(m.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(m.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(m.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(m.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(m.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(m.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(m.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(m.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(m.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(m.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],tablet:[{value:"hstyle1",label:Object(m.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(m.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(m.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(m.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(m.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(m.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(m.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(m.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(m.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(m.__)("Vertical Style 10","ultimate-addons-for-gutenberg")}],mobile:[{value:"hstyle1",label:Object(m.__)("Horizontal Style 1","ultimate-addons-for-gutenberg")},{value:"hstyle2",label:Object(m.__)("Horizontal Style 2","ultimate-addons-for-gutenberg")},{value:"hstyle3",label:Object(m.__)("Horizontal Style 3","ultimate-addons-for-gutenberg")},{value:"hstyle4",label:Object(m.__)("Horizontal Style 4","ultimate-addons-for-gutenberg")},{value:"hstyle5",label:Object(m.__)("Horizontal Style 5","ultimate-addons-for-gutenberg")},{value:"vstyle6",label:Object(m.__)("Vertical Style 6","ultimate-addons-for-gutenberg")},{value:"vstyle7",label:Object(m.__)("Vertical Style 7","ultimate-addons-for-gutenberg")},{value:"vstyle8",label:Object(m.__)("Vertical Style 8","ultimate-addons-for-gutenberg")},{value:"vstyle9",label:Object(m.__)("Vertical Style 9","ultimate-addons-for-gutenberg")},{value:"vstyle10",label:Object(m.__)("Vertical Style 10","ultimate-addons-for-gutenberg")},{value:"stack1",label:Object(m.__)("Stack Style 11","ultimate-addons-for-gutenberg")},{value:"stack2",label:Object(m.__)("Stack Style 12","ultimate-addons-for-gutenberg")},{value:"stack3",label:Object(m.__)("Stack Style 13","ultimate-addons-for-gutenberg")},{value:"stack4",label:Object(m.__)("Stack Style 14","ultimate-addons-for-gutenberg")}]};return v.a.createElement(M.a,{title:Object(m.__)("Layout","ultimate-addons-for-gutenberg"),initialOpen:!1},v.a.createElement(o.a,{label:Object(m.__)("Style","ultimate-addons-for-gutenberg"),data:{desktop:{value:y,label:"tabsStyleD"},tablet:{value:C,label:"tabsStyleT"},mobile:{value:x,label:"tabsStyleM"}},options:e,setAttributes:l}))})(),v.a.createElement(M.a,{title:Object(m.__)("Tabs Title","ultimate-addons-for-gutenberg"),initialOpen:!1},v.a.createElement(h.SelectControl,{label:Object(m.__)("Initial Open Tab","ultimate-addons-for-gutenberg"),value:S,options:j.map((e,t)=>({value:t,label:e})),onChange:e=>l({tabActiveFrontend:parseInt(e)})}),v.a.createElement(r.a,{setAttributes:l,label:Object(m.__)("Tab Alignment","ultimate-addons-for-gutenberg"),data:{value:dt,label:"tabAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:v.a.createElement(h.Icon,{icon:Object(n.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:v.a.createElement(h.Icon,{icon:Object(n.a)("fa fa-align-center")}),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:v.a.createElement(h.Icon,{icon:Object(n.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),v.a.createElement(r.a,{setAttributes:l,label:Object(m.__)("Text Alignment","ultimate-addons-for-gutenberg"),data:{value:bt,label:"titleAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:v.a.createElement(h.Icon,{icon:Object(n.a)("fa fa-align-left")}),tooltip:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:v.a.createElement(h.Icon,{icon:Object(n.a)("fa fa-align-center")}),tooltip:Object(m.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:v.a.createElement(h.Icon,{icon:Object(n.a)("fa fa-align-right")}),tooltip:Object(m.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),v.a.createElement(h.ToggleControl,{label:Object(m.__)("Enable Icon","ultimate-addons-for-gutenberg"),checked:ut,onChange:()=>l({showIcon:!ut})}),ut&&v.a.createElement(v.a.Fragment,null,v.a.createElement(a.a,{label:Object(m.__)("Tab Icon","ultimate-addons-for-gutenberg"),value:st,onChange:e=>l({icon:e})}),v.a.createElement(r.a,{setAttributes:l,label:Object(m.__)("Icon Position","ultimate-addons-for-gutenberg"),data:{value:ct,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",label:Object(m.__)("Left","ultimate-addons-for-gutenberg")},{value:"right",label:Object(m.__)("Right","ultimate-addons-for-gutenberg")},{value:"top",label:Object(m.__)("Top","ultimate-addons-for-gutenberg")},{value:"bottom",label:Object(m.__)("Bottom","ultimate-addons-for-gutenberg")}]})))),v.a.createElement(g.b,g.a.style,(()=>{const a=v.a.createElement(v.a.Fragment,null,v.a.createElement(b.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:P,data:{value:P,label:"headerTextColor"},setAttributes:l}),v.a.createElement(b.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:O,data:{value:O,label:"headerBgColor"},setAttributes:l})),n=v.a.createElement(v.a.Fragment,null,v.a.createElement(b.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:k,data:{value:k,label:"activeTabTextColor"},setAttributes:l}),v.a.createElement(b.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:H,data:{value:H,label:"activeTabBgColor"},setAttributes:l}));return v.a.createElement(M.a,{title:Object(m.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},v.a.createElement(c.a,{tabs:[{name:"normal",title:Object(m.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(m.__)("Active","ultimate-addons-for-gutenberg")}],normal:a,active:n}),v.a.createElement(i.a,{label:Object(m.__)("Typography","ultimate-addons-for-gutenberg"),attributes:t,setAttributes:l,loadGoogleFonts:{value:Ge,label:"titleLoadGoogleFonts"},fontFamily:{value:We,label:"titleFontFamily"},fontWeight:{value:Je,label:"titleFontWeight"},fontStyle:{value:xt,label:"titleFontStyle"},fontSizeType:{value:qe,label:"titleFontSizeType"},fontSize:{value:Ke,label:"titleFontSize"},fontSizeMobile:{value:Qe,label:"titleFontSizeMobile"},fontSizeTablet:{value:Xe,label:"titleFontSizeTablet"},lineHeightType:{value:Ye,label:"titleLineHeightType"},lineHeight:{value:$e,label:"titleLineHeight"},lineHeightMobile:{value:et,label:"titleLineHeightMobile"},lineHeightTablet:{value:tt,label:"titleLineHeightTablet"},letterSpacing:{value:lt,label:"titleLetterSpacing"},letterSpacingTablet:{value:at,label:"titleLetterSpacingTablet"},letterSpacingMobile:{value:nt,label:"titleLetterSpacingMobile"},letterSpacingType:{value:it,label:"titleLetterSpacingType"},transform:{value:ot,label:"titleTransform"},decoration:{value:rt,label:"titleDecoration"}}),v.a.createElement(d.a,B({},e,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:R,label:"tabTitleTopMargin"},valueRight:{value:z,label:"tabTitleRightMargin"},valueBottom:{value:A,label:"tabTitleBottomMargin"},valueLeft:{value:V,label:"tabTitleLeftMargin"},valueTopTablet:{value:F,label:"tabTitleTopMarginTablet"},valueRightTablet:{value:D,label:"tabTitleRightMarginTablet"},valueBottomTablet:{value:Z,label:"tabTitleBottomMarginTablet"},valueLeftTablet:{value:U,label:"tabTitleLeftMarginTablet"},valueTopMobile:{value:G,label:"tabTitleTopMarginMobile"},valueRightMobile:{value:N,label:"tabTitleRightMarginMobile"},valueBottomMobile:{value:W,label:"tabTitleBottomMarginMobile"},valueLeftMobile:{value:I,label:"tabTitleLeftMarginMobile"},unit:{value:J,label:"tabTitleMarginUnit"},mUnit:{value:q,label:"mobiletabTitleMarginUnit"},tUnit:{value:K,label:"tablettabTitleMarginUnit"},attributes:t,setAttributes:l,link:{value:Q,label:"tabTitleMarginLink"}})),v.a.createElement(d.a,B({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:X,label:"tabTitleTopPadding"},valueRight:{value:Y,label:"tabTitleRightPadding"},valueBottom:{value:$,label:"tabTitleBottomPadding"},valueLeft:{value:ee,label:"tabTitleLeftPadding"},valueTopTablet:{value:te,label:"tabTitleTopPaddingTablet"},valueRightTablet:{value:le,label:"tabTitleRightPaddingTablet"},valueBottomTablet:{value:ae,label:"tabTitleBottomPaddingTablet"},valueLeftTablet:{value:ne,label:"tabTitleLeftPaddingTablet"},valueTopMobile:{value:ie,label:"tabTitleTopPaddingMobile"},valueRightMobile:{value:oe,label:"tabTitleRightPaddingMobile"},valueBottomMobile:{value:re,label:"tabTitleBottomPaddingMobile"},valueLeftMobile:{value:be,label:"tabTitleLeftPaddingMobile"},unit:{value:de,label:"tabTitlePaddingUnit"},mUnit:{value:ue,label:"mobiletabTitlePaddingUnit"},tUnit:{value:se,label:"tablettabTitlePaddingUnit"},attributes:t,setAttributes:l,link:{value:ge,label:"tabTitlePaddingLink"}})))})(),(()=>{if(!ut)return"";const e=v.a.createElement(b.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:gt,data:{value:gt,label:"iconColor"},setAttributes:l}),t=v.a.createElement(b.a,{label:Object(m.__)("Color","ultimate-addons-for-gutenberg"),colorValue:yt,data:{value:yt,label:"activeiconColor"},setAttributes:l});return v.a.createElement(M.a,{title:Object(m.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},v.a.createElement(p.a,{label:Object(m.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:mt,label:"iconSize"},tablet:{value:_t,label:"iconSizeTablet"},mobile:{value:ht,label:"iconSizeMobile"}},min:0,max:100,displayUnit:!1,setAttributes:l}),v.a.createElement(c.a,{tabs:[{name:"normal",title:Object(m.__)("Normal","ultimate-addons-for-gutenberg")},{name:"active",title:Object(m.__)("Active","ultimate-addons-for-gutenberg")}],normal:e,active:t}),v.a.createElement(p.a,{label:Object(m.__)("Spacing","ultimate-addons-for-gutenberg"),data:{desktop:{value:pt,label:"iconSpacing"},tablet:{value:ft,label:"iconSpacingTablet"},mobile:{value:vt,label:"iconSpacingMobile"}},min:0,max:100,displayUnit:!1,setAttributes:l}))})(),v.a.createElement(M.a,{title:Object(m.__)("Body","ultimate-addons-for-gutenberg"),initialOpen:!1},v.a.createElement(b.a,{label:Object(m.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:E,data:{value:E,label:"bodyTextColor"},setAttributes:l}),v.a.createElement(b.a,{label:Object(m.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:L,data:{value:L,label:"bodyBgColor"},setAttributes:l}),v.a.createElement(d.a,B({},e,{label:Object(m.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:fe,label:"tabBodyTopMargin"},valueRight:{value:pe,label:"tabBodyRightMargin"},valueBottom:{value:ve,label:"tabBodyBottomMargin"},valueLeft:{value:ce,label:"tabBodyLeftMargin"},valueTopTablet:{value:he,label:"tabBodyTopMarginTablet"},valueRightTablet:{value:_e,label:"tabBodyRightMarginTablet"},valueBottomTablet:{value:ye,label:"tabBodyBottomMarginTablet"},valueLeftTablet:{value:me,label:"tabBodyLeftMarginTablet"},valueTopMobile:{value:we,label:"tabBodyTopMarginMobile"},valueRightMobile:{value:Te,label:"tabBodyRightMarginMobile"},valueBottomMobile:{value:Me,label:"tabBodyBottomMarginMobile"},valueLeftMobile:{value:xe,label:"tabBodyLeftMarginMobile"},unit:{value:Be,label:"tabBodyMarginUnit"},mUnit:{value:Ce,label:"mobiletabBodyMarginUnit"},tUnit:{value:Se,label:"tablettabBodyMarginUnit"},attributes:t,setAttributes:l,link:{value:je,label:"tabBodyMarginLink"}})),v.a.createElement(d.a,B({},e,{label:Object(m.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Oe,label:"tabBodyTopPadding"},valueRight:{value:Pe,label:"tabBodyRightPadding"},valueBottom:{value:He,label:"tabBodyBottomPadding"},valueLeft:{value:ke,label:"tabBodyLeftPadding"},valueTopTablet:{value:Le,label:"tabBodyTopPaddingTablet"},valueRightTablet:{value:Ee,label:"tabBodyRightPaddingTablet"},valueBottomTablet:{value:Ve,label:"tabBodyBottomPaddingTablet"},valueLeftTablet:{value:ze,label:"tabBodyLeftPaddingTablet"},valueTopMobile:{value:Re,label:"tabBodyTopPaddingMobile"},valueRightMobile:{value:Ae,label:"tabBodyRightPaddingMobile"},valueBottomMobile:{value:Ue,label:"tabBodyBottomPaddingMobile"},valueLeftMobile:{value:De,label:"tabBodyLeftPaddingMobile"},unit:{value:Fe,label:"tabBodyPaddingUnit"},mUnit:{value:Ze,label:"mobiletabBodyPaddingUnit"},tUnit:{value:Ie,label:"tablettabBodyPaddingUnit"},attributes:t,setAttributes:l,link:{value:Ne,label:"tabBodyPaddingLink"}}))),v.a.createElement(M.a,{title:Object(m.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},v.a.createElement(u.a,{setAttributes:l,prefix:"tab",attributes:t,deviceType:f,disableBottomSeparator:!0,disabledBorderTitle:!0}))),v.a.createElement(g.b,B({},g.a.advance,{parentProps:e}))))};t.default=v.a.memo(C)}}]);