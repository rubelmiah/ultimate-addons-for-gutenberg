(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[69],{268:function(e,n,t){"use strict";var o=t(17),a=t.n(o)()((function(e){return e[1]}));a.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),n.a=a},269:function(e,n,t){"use strict";var o,a=t(104),i=t.n(a),r=t(1),l=t.n(r),d=t(16),b=t.n(d),u=t(268),p=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},f={};f.locals=u.a.locals||{},f.use=function(){return p++||(o=b()(u.a,c)),f},f.unuse=function(){p>0&&!--p&&(o(),o=null)};var s=f,g=t(12),m=t(2);n.a=function(e){return Object(r.useLayoutEffect)((function(){return s.use(),function(){s.unuse()}}),[]),l.a.createElement("div",{className:"components-base-control uag-icon-picker"},l.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),l.a.createElement(i.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:g.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&l.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},540:function(e,n,t){"use strict";t.r(n);var o=t(269),a=t(2),i=t(12),r=t(1),l=t.n(r),d=t(11),b=t(22),u=t(73),p=t(14),c=t(51),f=t(20),s=t(32),g=t(13),m=t(52),_=t(43),h=t(18),x=t(24),v=t(4),y=t(5);function w(){return(w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function O(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var j=function(e){e=e.parentProps;var n,t,j,T,C=(j=Object(r.useState)(!1),T=2,function(e){if(Array.isArray(e))return e}(j)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var o,a,i=[],_n=!0,r=!1;try{for(t=t.call(e);!(_n=(o=t.next()).done)&&(i.push(o.value),!n||i.length!==n);_n=!0);}catch(e){r=!0,a=e}finally{try{_n||null==t.return||t.return()}finally{if(r)throw a}}return i}}(j,T)||function(e,n){if(e){if("string"==typeof e)return O(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?O(e,n):void 0}}(j,T)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),S=C[0],E=C[1],B=e,k=B.attributes,F=B.setAttributes,H=B.deviceType,z=k.align,L=k.textAlign,A=k.link,M=k.linkTarget,P=k.titleSpace,U=k.icon,I=k.iconPosition,R=k.iconSpace,N=k.iconFontSize,V=k.iconFontSizeMobile,G=k.iconFontSizeTablet,W=k.titleColor,D=k.titleHoverColor,J=k.prefixColor,$=k.prefixHoverColor,q=k.iconColor,K=k.iconHoverColor,Q=k.borderStyle,X=k.borderWidth,Y=k.borderRadius,Z=k.borderColor,ee=k.borderHoverColor,ne=(k.vPadding,k.hPadding,k.hPaddingMobile,k.vPaddingMobile,k.hPaddingTablet,k.vPaddingTablet,k.paddingType,k.backgroundType),te=k.backgroundColor,oe=k.backgroundHoverColor,ae=k.gradientColor1,ie=k.gradientColor2,re=k.gradientLocation1,le=k.gradientLocation2,de=k.gradientType,be=k.gradientAngle,ue=k.backgroundOpacity,pe=k.backgroundHoverOpacity,ce=k.titleFontFamily,fe=k.titleFontWeight,se=k.titleFontSubset,ge=k.titleFontSize,me=k.titleFontSizeType,_e=k.titleFontSizeTablet,he=k.titleFontSizeMobile,xe=k.titleLineHeightType,ve=k.titleLineHeight,ye=k.titleLineHeightTablet,we=k.titleLineHeightMobile,Oe=k.titleTag,je=k.prefixFontFamily,Te=k.prefixFontWeight,Ce=k.prefixFontSubset,Se=k.prefixFontSize,Ee=k.prefixFontSizeType,Be=k.prefixFontSizeTablet,ke=k.prefixFontSizeMobile,Fe=k.prefixLineHeightType,He=k.prefixLineHeight,ze=k.prefixLineHeightTablet,Le=k.prefixLineHeightMobile,Ae=k.paddingBtnUnit,Me=k.spacingLink,Pe=k.mobilePaddingBtnUnit,Ue=k.tabletPaddingBtnUnit,Ie=k.paddingBtnTop,Re=k.paddingBtnBottom,Ne=k.paddingBtnLeft,Ve=k.paddingBtnRight,Ge=k.paddingBtnTopTablet,We=k.paddingBtnRightTablet,De=k.paddingBtnBottomTablet,Je=k.paddingBtnLeftTablet,$e=k.paddingBtnTopMobile,qe=k.paddingBtnRightMobile,Ke=k.paddingBtnBottomMobile,Qe=k.paddingBtnLeftMobile;if(1==n){var Xe={google:{families:[ce+(fe?":"+fe:"")]}};n=l.a.createElement(u.a,{config:Xe})}if(1==t){var Ye={google:{families:[je+(Te?":"+Te:"")]}};t=l.a.createElement(u.a,{config:Ye})}var Ze=S&&l.a.createElement(y.Popover,{position:"bottom center",onClose:function(){return E(!1)}},l.a.createElement(v.__experimentalLinkControl,{value:{url:A,opensInNewTab:M},onChange:function(e){var n=e.url,t=void 0===n?"":n,o=e.opensInNewTab;F({link:t}),F({linkTarget:o}),F({linkTarget:o})}}));return l.a.createElement(r.Suspense,{fallback:Object(d.a)()},l.a.createElement(v.BlockControls,null,l.a.createElement(v.BlockAlignmentToolbar,{value:z,onChange:function(e){F({align:e})},controls:["left","center","right","full"]}),l.a.createElement(y.ToolbarGroup,null,l.a.createElement(y.ToolbarButton,{icon:"admin-links",name:"link",title:Object(a.__)("Link","ultimate-addons-for-gutenberg"),onClick:function(){return E(!0)}}))),Ze,l.a.createElement(v.InspectorControls,null,l.a.createElement(c.a,null,l.a.createElement(f.b,f.a.general,l.a.createElement(y.PanelBody,{title:Object(a.__)("Heading"),initialOpen:!0},l.a.createElement(h.a,{setAttributes:F,label:Object(a.__)("Alignment","ultimate-addons-for-gutenberg"),data:{value:L,label:"textAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:l.a.createElement(y.Icon,{icon:Object(i.a)("fa fa-align-left")}),tooltip:Object(a.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:l.a.createElement(y.Icon,{icon:Object(i.a)("fa fa-align-center")}),tooltip:Object(a.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:l.a.createElement(y.Icon,{icon:Object(i.a)("fa fa-align-right")}),tooltip:Object(a.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),l.a.createElement(h.a,{setAttributes:F,label:Object(a.__)("Tag","ultimate-addons-for-gutenberg"),data:{value:Oe,label:"titleTag"},options:[{value:"h1",label:Object(a.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(a.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(a.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(a.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(a.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(a.__)("H6","ultimate-addons-for-gutenberg")},{value:"span",label:Object(a.__)("Span","ultimate-addons-for-gutenberg")},{value:"p",label:Object(a.__)("P","ultimate-addons-for-gutenberg")}]})),l.a.createElement(y.PanelBody,{title:Object(a.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(o.a,{label:Object(a.__)("Icon","ultimate-addons-for-gutenberg"),value:U,onChange:function(e){return F({icon:e})}}),""!==U&&l.a.createElement(l.a.Fragment,null,l.a.createElement(h.a,{setAttributes:F,label:Object(a.__)("Position","ultimate-addons-for-gutenberg"),data:{value:I,label:"iconPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"before",label:Object(a.__)("Before Text","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(a.__)("After Text","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("After Text","ultimate-addons-for-gutenberg")}]}),l.a.createElement(g.a,{label:Object(a.__)("Gap Between Icon And Text","ultimate-addons-for-gutenberg"),setAttributes:F,value:R,onChange:function(e){return F({iconSpace:e})},min:0,max:50,displayUnit:!1}),l.a.createElement(m.a,{label:Object(a.__)("Size","ultimate-addons-for-gutenberg"),data:{desktop:{value:N,label:"iconFontSize"},tablet:{value:G,label:"iconFontSizeTablet"},mobile:{value:V,label:"iconFontSizeMobile"}},min:0,max:500,displayUnit:!1,setAttributes:F})))),l.a.createElement(f.b,f.a.style,l.a.createElement(y.PanelBody,{title:Object(a.__)("Heading","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(g.a,{label:Object(a.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:F,value:P,onChange:function(e){return F({titleSpace:e})},min:0,max:20,displayUnit:!1}),l.a.createElement(b.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:k,setAttributes:F,loadGoogleFonts:{value:n,label:"loadTitleGoogleFonts"},fontFamily:{value:ce,label:"titleFontFamily"},fontWeight:{value:fe,label:"titleFontWeight"},fontSubset:{value:se,label:"titleFontSubset"},fontSizeType:{value:me,label:"titleFontSizeType"},fontSize:{value:ge,label:"titleFontSize"},fontSizeMobile:{value:he,label:"titleFontSizeMobile"},fontSizeTablet:{value:_e,label:"titleFontSizeTablet"},lineHeightType:{value:xe,label:"titleLineHeightType"},lineHeight:{value:ve,label:"titleLineHeight"},lineHeightMobile:{value:we,label:"titleLineHeightMobile"},lineHeightTablet:{value:ye,label:"titleLineHeightTablet"}}),l.a.createElement(x.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(p.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:W||"",onColorChange:function(e){return F({titleColor:e})}}),hover:l.a.createElement(p.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:D||"",onColorChange:function(e){return F({titleHoverColor:e})}}),disableBottomSeparator:!0})),l.a.createElement(y.PanelBody,{title:Object(a.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(b.a,{label:Object(a.__)("Typography","ultimate-addons-for-gutenberg"),attributes:k,setAttributes:F,loadGoogleFonts:{value:t,label:"loadPrefixGoogleFonts"},fontFamily:{value:je,label:"prefixFontFamily"},fontWeight:{value:Te,label:"prefixFontWeight"},fontSubset:{value:Ce,label:"prefixFontSubset"},fontSizeType:{value:Ee,label:"prefixFontSizeType"},fontSize:{value:Se,label:"prefixFontSize"},fontSizeMobile:{value:ke,label:"prefixFontSizeMobile"},fontSizeTablet:{value:Be,label:"prefixFontSizeTablet"},lineHeightType:{value:Fe,label:"prefixLineHeightType"},lineHeight:{value:He,label:"prefixLineHeight"},lineHeightMobile:{value:Le,label:"prefixLineHeightMobile"},lineHeightTablet:{value:ze,label:"prefixLineHeightTablet"}}),l.a.createElement(x.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(p.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:J||"",onColorChange:function(e){return F({prefixColor:e})}}),hover:l.a.createElement(p.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:$||"",onColorChange:function(e){return F({prefixHoverColor:e})}}),disableBottomSeparator:!0})),""!==U&&l.a.createElement(y.PanelBody,{title:Object(a.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(x.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(p.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:q||"",onColorChange:function(e){return F({iconColor:e})}}),hover:l.a.createElement(p.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:K||"",onColorChange:function(e){return F({iconHoverColor:e})}}),disableBottomSeparator:!0})),l.a.createElement(y.PanelBody,{title:Object(a.__)("Background"),initialOpen:!1},l.a.createElement(h.a,{setAttributes:F,label:Object(a.__)("Type","ultimate-addons-for-gutenberg"),data:{value:ne,label:"backgroundType"},className:"uagb-multi-button-alignment-control",options:[{value:"transparent",label:Object(a.__)("Transparent","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Transparent","ultimate-addons-for-gutenberg")},{value:"color",label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Color","ultimate-addons-for-gutenberg")},{value:"gradient",label:Object(a.__)("Gradient","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Gradient","ultimate-addons-for-gutenberg")}]}),"color"==ne&&l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{tabs:[{name:"normal",title:Object(a.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:te||"",onColorChange:function(e){return F({backgroundColor:e})}}),l.a.createElement(g.a,{label:Object(a.__)("Opacity","ultimate-addons-for-gutenberg"),setAttributes:F,value:ue,onChange:function(e){return F({backgroundOpacity:e})},min:0,max:100,displayUnit:!1})),hover:l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{label:Object(a.__)("Color","ultimate-addons-for-gutenberg"),colorValue:oe||"",onColorChange:function(e){return F({backgroundHoverColor:e})}}),l.a.createElement(g.a,{label:Object(a.__)("Opacity","ultimate-addons-for-gutenberg"),setAttributes:F,value:pe,onChange:function(e){return F({backgroundHoverOpacity:e})},min:0,max:100,displayUnit:!1})),disableBottomSeparator:!0})),"gradient"==ne&&l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,{label:Object(a.__)("Color 1","ultimate-addons-for-gutenberg"),colorValue:ie||"",onColorChange:function(e){return F({gradientColor2:e})}}),l.a.createElement(p.a,{label:Object(a.__)("Color 2","ultimate-addons-for-gutenberg"),colorValue:ae||"",onColorChange:function(e){return F({gradientColor1:e})}}),l.a.createElement(h.a,{setAttributes:F,label:Object(a.__)("Type","ultimate-addons-for-gutenberg"),data:{value:de,label:"gradientType"},className:"uagb-multi-button-alignment-control",options:[{value:"linear",label:Object(a.__)("Linear","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Linear","ultimate-addons-for-gutenberg")},{value:"radial",label:Object(a.__)("Radial","ultimate-addons-for-gutenberg"),tooltip:Object(a.__)("Radial","ultimate-addons-for-gutenberg")}]}),l.a.createElement(g.a,{label:Object(a.__)("Location 1","ultimate-addons-for-gutenberg"),setAttributes:F,value:re,onChange:function(e){return F({gradientLocation1:e})},min:0,max:100,displayUnit:!1}),l.a.createElement(g.a,{label:Object(a.__)("Location 2","ultimate-addons-for-gutenberg"),setAttributes:F,value:le,onChange:function(e){return F({gradientLocation2:e})},min:0,max:100,displayUnit:!1}),l.a.createElement(g.a,{label:Object(a.__)("Angle","ultimate-addons-for-gutenberg"),setAttributes:F,value:be,onChange:function(e){return F({gradientAngle:e})},min:0,max:360,displayUnit:!1}),l.a.createElement(g.a,{label:Object(a.__)("Opacity","ultimate-addons-for-gutenberg"),setAttributes:F,value:ue,onChange:function(e){return F({backgroundOpacity:e})},min:0,max:100,displayUnit:!1}))),l.a.createElement(y.PanelBody,{title:Object(a.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(_.a,{setAttributes:F,borderStyle:{value:Q,label:"borderStyle",title:Object(a.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:X,label:"borderWidth",title:Object(a.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Y,label:"borderRadius",title:Object(a.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Z,label:"borderColor",title:Object(a.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:ee,label:"borderHoverColor",title:Object(a.__)("Hover","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),l.a.createElement(y.PanelBody,{title:Object(a.__)("Spacing"),initialOpen:!1},l.a.createElement(s.a,w({},e,{label:Object(a.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:Ie,label:"paddingBtnTop"},valueRight:{value:Ve,label:"paddingBtnRight"},valueBottom:{value:Re,label:"paddingBtnBottom"},valueLeft:{value:Ne,label:"paddingBtnLeft"},valueTopTablet:{value:Ge,label:"paddingBtnTopTablet"},valueRightTablet:{value:We,label:"paddingBtnRightTablet"},valueBottomTablet:{value:De,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:Je,label:"paddingBtnLeftTablet"},valueTopMobile:{value:$e,label:"paddingBtnTopMobile"},valueRightMobile:{value:qe,label:"paddingBtnRightMobile"},valueBottomMobile:{value:Ke,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:Qe,label:"paddingBtnLeftMobile"},unit:{value:Ae,label:"paddingBtnUnit"},mUnit:{value:Pe,label:"mobilePaddingBtnUnit"},tUnit:{value:Ue,label:"tabletPaddingBtnUnit"},deviceType:H,attributes:k,setAttributes:F,link:{value:Me,label:"spacingLink"},units:[{name:Object(a.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(a.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]})))),l.a.createElement(f.b,w({},f.a.advance,{parentProps:e})))),n,t)};n.default=l.a.memo(j)}}]);