(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[69],{269:function(e,n,t){"use strict";var o=t(17),a=t.n(o)()((function(e){return e[1]}));a.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #fff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #fff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eee;\n    border: 1px solid #eee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system,\r BlinkMacSystemFont,\r "Segoe UI",\r "Roboto",\r "Oxygen",\r "Ubuntu",\r "Cantarell",\r "Fira Sans",\r "Droid Sans",\r "Helvetica Neue",\r sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),n.a=a},270:function(e,n,t){"use strict";var o,a=t(105),i=t.n(a),l=t(1),r=t.n(l),d=t(16),b=t.n(d),p=t(269),c=0,u={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=p.a.locals||{},s.use=function(){return c++||(o=b()(p.a,u)),s},s.unuse=function(){c>0&&!--c&&(o(),o=null)};var f=s,g=t(12),m=t(2);n.a=e=>(Object(l.useLayoutEffect)(()=>(f.use(),()=>{f.unuse()}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(i.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:g.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help)))},541:function(e,n,t){"use strict";t.r(n);var o=t(270),a=t(2),i=t(12),l=t(1),r=t.n(l),d=t(11),b=t(23),p=t(74),c=t(14),u=t(52),s=t(21),f=t(33),g=t(13),m=t(53),_=t(44),x=t(19),h=t(25),v=t(5),w=t(6);function y(){return(y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}const O=e=>{e=e.parentProps;const[n,t]=Object(l.useState)(!1),{attributes:O,setAttributes:j,deviceType:C}=e,{align:T,textAlign:E,link:S,linkTarget:B,titleSpace:k,icon:F,iconPosition:H,iconSpace:z,iconFontSize:L,iconFontSizeMobile:A,iconFontSizeTablet:M,titleColor:P,titleHoverColor:U,prefixColor:R,prefixHoverColor:I,iconColor:N,iconHoverColor:V,borderStyle:G,borderWidth:W,borderRadius:D,borderColor:J,borderHoverColor:q,backgroundType:K,backgroundColor:Q,backgroundHoverColor:X,gradientColor1:Y,gradientColor2:Z,gradientLocation1:$,gradientLocation2:ee,gradientType:ne,gradientAngle:te,backgroundOpacity:oe,backgroundHoverOpacity:ae,titleFontFamily:ie,titleFontWeight:le,titleFontSubset:re,titleFontSize:de,titleFontSizeType:be,titleFontSizeTablet:pe,titleFontSizeMobile:ce,titleLineHeightType:ue,titleLineHeight:se,titleLineHeightTablet:fe,titleLineHeightMobile:ge,titleTag:me,prefixFontFamily:_e,prefixFontWeight:xe,prefixFontSubset:he,prefixFontSize:ve,prefixFontSizeType:we,prefixFontSizeTablet:ye,prefixFontSizeMobile:Oe,prefixLineHeightType:je,prefixLineHeight:Ce,prefixLineHeightTablet:Te,prefixLineHeightMobile:Ee,paddingBtnUnit:Se,spacingLink:Be,mobilePaddingBtnUnit:ke,tabletPaddingBtnUnit:Fe,paddingBtnTop:He,paddingBtnBottom:ze,paddingBtnLeft:Le,paddingBtnRight:Ae,paddingBtnTopTablet:Me,paddingBtnRightTablet:Pe,paddingBtnBottomTablet:Ue,paddingBtnLeftTablet:Re,paddingBtnTopMobile:Ie,paddingBtnRightMobile:Ne,paddingBtnBottomMobile:Ve,paddingBtnLeftMobile:Ge}=O;let We,De;if(!0===We){const e={google:{families:[ie+(le?":"+le:"")]}};We=r.a.createElement(p.a,{config:e})}if(!0===De){const e={google:{families:[_e+(xe?":"+xe:"")]}};De=r.a.createElement(p.a,{config:e})}const Je=n&&r.a.createElement(w.Popover,{position:"bottom center",onClose:()=>t(!1)},r.a.createElement(v.__experimentalLinkControl,{value:{url:S,opensInNewTab:B},onChange:({url:e="",opensInNewTab:n})=>{j({link:e}),j({linkTarget:n}),j({linkTarget:n})}}));return r.a.createElement(l.Suspense,{fallback:Object(d.a)()},r.a.createElement(v.BlockControls,null,r.a.createElement(v.BlockAlignmentToolbar,{value:T,onChange:e=>{j({align:e})},controls:["left","center","right","full"]}),r.a.createElement(w.ToolbarGroup,null,r.a.createElement(w.ToolbarButton,{icon:"admin-links",name:"link",title:Object(a.__)("Link","ultimate-addons-for-gutenberg"),onClick:()=>t(!0)}))),Je,r.a.createElement(v.InspectorControls,null,r.a.createElement(u.a,null,r.a.createElement(s.b,s.a.general,r.a.createElement(r.a.Fragment,null,r.a.createElement(w.PanelBody,{title:Object(a.__)("Content"),initialOpen:!0},r.a.createElement(x.a,{setAttributes:j,label:Object(a.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:E,label:"textAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:r.a.createElement(w.Icon,{icon:Object(i.a)("fa fa-align-left")}),tooltip:Object(a.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:r.a.createElement(w.Icon,{icon:Object(i.a)("fa fa-align-center")}),tooltip:Object(a.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:r.a.createElement(w.Icon,{icon:Object(i.a)("fa fa-align-right")}),tooltip:Object(a.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0})),r.a.createElement(w.PanelBody,{title:Object(a.__)("Heading"),initialOpen:!1},r.a.createElement(x.a,{setAttributes:j,label:Object(a.__)("Tag","ultimate-addons-for-gutenberg"),data:{value:me,label:"titleTag"},options:[{value:"h1",label:Object(a.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(a.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(a.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(a.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(a.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(a.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(a.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(a.__)("P","ultimate-addons-for-gutenberg")}]}))),r.a.createElement(w.PanelBody,{title:Object(a.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(o.a,{label:Object(a.__)("Icon","ultimate-addons-for-gutenberg"),value:F,onChange:e=>j({icon:e})}),""!==F&&r.a.createElement(r.a.Fragment,null,r.a.createElement(x.a,{setAttributes:j,label:Object(a.__)("Position","ultimate-addons-for-gutenberg"),data:{value:H,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"before",label:Object(a.__)("Before Text","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(a.__)("After Text","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("After Text","ultimate-addons-for-gutenberg")}]}),r.a.createElement(g.a,{label:Object(a.__)("Gap Between Icon And Text","ultimate-addons-for-gutenberg"),setAttributes:j,value:z,onChange:e=>j({iconSpace:e}),min:0,max:50,displayUnit:!1}),r.a.createElement(m.a,{label:Object(a.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:L,label:"iconFontSize"},tablet:{value:M,label:"iconFontSizeTablet"},mobile:{value:A,label:"iconFontSizeMobile"}},min:0,max:500,displayUnit:!1,setAttributes:j})))),r.a.createElement(s.b,s.a.style,r.a.createElement(w.PanelBody,{title:Object(a.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!0},r.a.createElement(g.a,{label:Object(a.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:j,value:k,onChange:e=>j({titleSpace:e}),min:0,max:20,displayUnit:!1}),r.a.createElement(b.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:j,loadGoogleFonts:{value:We,label:"loadTitleGoogleFonts"},fontFamily:{value:ie,label:"titleFontFamily"},fontWeight:{value:le,label:"titleFontWeight"},fontSubset:{value:re,label:"titleFontSubset"},fontSizeType:{value:be,label:"titleFontSizeType"},fontSize:{value:de,label:"titleFontSize"},fontSizeMobile:{value:ce,label:"titleFontSizeMobile"},fontSizeTablet:{value:pe,label:"titleFontSizeTablet"},lineHeightType:{value:ue,label:"titleLineHeightType"},lineHeight:{value:se,label:"titleLineHeight"},lineHeightMobile:{value:ge,label:"titleLineHeightMobile"},lineHeightTablet:{value:fe,label:"titleLineHeightTablet"}}),r.a.createElement(h.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:r.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:P||"",onColorChange:e=>j({titleColor:e})}),hover:r.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:U||"",onColorChange:e=>j({titleHoverColor:e})}),disableBottomSeparator:!0})),r.a.createElement(w.PanelBody,{title:Object(a.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(b.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:j,loadGoogleFonts:{value:De,label:"loadPrefixGoogleFonts"},fontFamily:{value:_e,label:"prefixFontFamily"},fontWeight:{value:xe,label:"prefixFontWeight"},fontSubset:{value:he,label:"prefixFontSubset"},fontSizeType:{value:we,label:"prefixFontSizeType"},fontSize:{value:ve,label:"prefixFontSize"},fontSizeMobile:{value:Oe,label:"prefixFontSizeMobile"},fontSizeTablet:{value:ye,label:"prefixFontSizeTablet"},lineHeightType:{value:je,label:"prefixLineHeightType"},lineHeight:{value:Ce,label:"prefixLineHeight"},lineHeightMobile:{value:Ee,label:"prefixLineHeightMobile"},lineHeightTablet:{value:Te,label:"prefixLineHeightTablet"}}),r.a.createElement(h.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:r.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:R||"",onColorChange:e=>j({prefixColor:e})}),hover:r.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:I||"",onColorChange:e=>j({prefixHoverColor:e})}),disableBottomSeparator:!0})),""!==F&&r.a.createElement(w.PanelBody,{title:Object(a.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(h.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:r.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:N||"",onColorChange:e=>j({iconColor:e})}),hover:r.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:V||"",onColorChange:e=>j({iconHoverColor:e})}),disableBottomSeparator:!0})),r.a.createElement(w.PanelBody,{title:Object(a.__)("Background"),initialOpen:!1},r.a.createElement(x.a,{setAttributes:j,label:Object(a.__)("Type","ultimate-addons-for-gutenberg"),data:{value:K,label:"backgroundType"},className:"uagb-multi-button-alignment-control",options:[{value:"transparent",label:Object(a.__)("Transparent","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Transparent","ultimate-addons-for-gutenberg")},{value:"color",label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(a.__)("Gradient","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Gradient","ultimate-addons-for-gutenberg")}]}),"color"===K&&r.a.createElement(r.a.Fragment,null,r.a.createElement(h.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Q||"",onColorChange:e=>j({backgroundColor:e})}),r.a.createElement(g.a,{label:Object(a.__)("Opacity","ultimate-addons-for-gutenberg"),setAttributes:j,value:oe,onChange:e=>j({backgroundOpacity:e}),min:0,max:100,displayUnit:!1})),hover:r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:X||"",onColorChange:e=>j({backgroundHoverColor:e})}),r.a.createElement(g.a,{label:Object(a.__)("Opacity","ultimate-addons-for-gutenberg"),setAttributes:j,value:ae,onChange:e=>j({backgroundHoverOpacity:e}),min:0,max:100,displayUnit:!1})),disableBottomSeparator:!0})),"gradient"===K&&r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,{label:Object(a.__)("Color 1","ultimate-addons-for-gutenberg"),colorValue:Z||"",onColorChange:e=>j({gradientColor2:e})}),r.a.createElement(c.a,{label:Object(a.__)("Color 2","ultimate-addons-for-gutenberg"),colorValue:Y||"",onColorChange:e=>j({gradientColor1:e})}),r.a.createElement(x.a,{setAttributes:j,label:Object(a.__)("Type","ultimate-addons-for-gutenberg"),data:{value:ne,label:"gradientType"},className:"uagb-multi-button-alignment-control",options:[{value:"linear",label:Object(a.__)("Linear","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Linear","ultimate-addons-for-gutenberg")},{value:"radial",label:Object(a.__)("Radial","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Radial","ultimate-addons-for-gutenberg")}]}),r.a.createElement(g.a,{label:Object(a.__)("Location 1","ultimate-addons-for-gutenberg"),setAttributes:j,value:$,onChange:e=>j({gradientLocation1:e}),min:0,max:100,displayUnit:!1}),r.a.createElement(g.a,{label:Object(a.__)("Location 2","ultimate-addons-for-gutenberg"),setAttributes:j,value:ee,onChange:e=>j({gradientLocation2:e}),min:0,max:100,displayUnit:!1}),r.a.createElement(g.a,{label:Object(a.__)("Opacity","ultimate-addons-for-gutenberg"),setAttributes:j,value:oe,onChange:e=>j({backgroundOpacity:e}),min:0,max:100,displayUnit:!1}),"linear"===ne&&r.a.createElement(g.a,{label:Object(a.__)("Angle","ultimate-addons-for-gutenberg"),setAttributes:j,value:te,onChange:e=>j({gradientAngle:e}),min:0,max:360,displayUnit:!1}))),r.a.createElement(w.PanelBody,{title:Object(a.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},r.a.createElement(_.a,{setAttributes:j,borderStyle:{value:G,label:"borderStyle",title:Object(a.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:W,label:"borderWidth",title:Object(a.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:D,label:"borderRadius",title:Object(a.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:J,label:"borderColor",title:Object(a.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:q,label:"borderHoverColor",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),r.a.createElement(w.PanelBody,{title:Object(a.__)("Spacing"),initialOpen:!1},r.a.createElement(f.a,y({},e,{label:Object(a.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:He,label:"paddingBtnTop"},valueRight:{value:Ae,label:"paddingBtnRight"},valueBottom:{value:ze,label:"paddingBtnBottom"},valueLeft:{value:Le,label:"paddingBtnLeft"},valueTopTablet:{value:Me,label:"paddingBtnTopTablet"},valueRightTablet:{value:Pe,label:"paddingBtnRightTablet"},valueBottomTablet:{value:Ue,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:Re,label:"paddingBtnLeftTablet"},valueTopMobile:{value:Ie,label:"paddingBtnTopMobile"},valueRightMobile:{value:Ne,label:"paddingBtnRightMobile"},valueBottomMobile:{value:Ve,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:Ge,label:"paddingBtnLeftMobile"},unit:{value:Se,label:"paddingBtnUnit"},mUnit:{value:ke,label:"mobilePaddingBtnUnit"},tUnit:{value:Fe,label:"tabletPaddingBtnUnit"},deviceType:C,attributes:O,setAttributes:j,link:{value:Be,label:"spacingLink"},units:[{name:Object(a.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(a.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})))),r.a.createElement(s.b,y({},s.a.advance,{parentProps:e})))),We,De)};n.default=r.a.memo(O)}}]);