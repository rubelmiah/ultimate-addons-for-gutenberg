(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[50],{236:function(e,n,t){"use strict";var o=t(14),a=t.n(o)()((function(e){return e[1]}));a.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),n.a=a},237:function(e,n,t){"use strict";var o,a=t(81),l=t.n(a),i=t(0),r=t.n(i),d=t(13),b=t.n(d),p=t(236),u=0,c={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},g={};g.locals=p.a.locals||{},g.use=function(){return u++||(o=b()(p.a,c)),g},g.unuse=function(){u>0&&!--u&&(o(),o=null)};var f=g,s=t(9),m=t(1);n.a=function(e){return Object(i.useLayoutEffect)((function(){return f.use(),function(){f.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(l.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:s.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},479:function(e,n,t){"use strict";t.r(n);var o=t(1),a=t(0),l=t.n(a),i=t(10),r=t(18),d=t(237),b=t(9),p=t(51),u=t(12),c=t(36),g=t(34),f=t(26),s=t(11),m=t(35),h=t(16),_=t(17),x=t(33),v=t(4),w=t(2);function y(){return(y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}function T(e){return function(e){if(Array.isArray(e))return C(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return C(e,void 0);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?C(e,void 0):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function C(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var O=function(e){var n,t,C=e=e.parentProps,O=C.attributes,j=C.setAttributes,M=C.deviceType,k=O.align,S=O.disableBullets,E=O.makeCollapsible,P=O.initialCollapse,z=O.icon,B=O.iconColor,H=O.bulletColor,F=O.iconSize,A=O.smoothScroll,L=O.smoothScrollOffset,D=O.smoothScrollDelay,I=O.scrollToTop,U=O.scrollToTopColor,W=O.scrollToTopBgColor,R=O.customWidth,V=O.widthDesktop,G=O.widthTablet,N=O.widthMobile,J=O.widthTypeMobile,K=O.widthTypeTablet,$=O.widthTypeDesktop,q=O.tColumnsDesktop,Q=O.tColumnsTablet,X=O.tColumnsMobile,Y=O.backgroundColor,Z=O.linkColor,ee=O.linkHoverColor,ne=O.headingColor,te=O.paddingTypeMobile,oe=O.paddingTypeTablet,ae=O.paddingTypeDesktop,le=O.topPadding,ie=O.rightPadding,re=O.bottomPadding,de=O.leftPadding,be=O.topPaddingTablet,pe=O.rightPaddingTablet,ue=O.bottomPaddingTablet,ce=O.leftPaddingTablet,ge=O.topPaddingMobile,fe=O.rightPaddingMobile,se=O.bottomPaddingMobile,me=O.leftPaddingMobile,he=O.marginLink,_e=O.paddingLink,xe=O.headingBottom,ve=O.contentPaddingDesktop,we=O.contentPaddingTablet,ye=O.contentPaddingMobile,Te=O.contentPaddingTypeMobile,Ce=O.contentPaddingTypeTablet,Oe=O.contentPaddingTypeDesktop,je=O.topMargin,Me=O.rightMargin,ke=O.bottomMargin,Se=O.leftMargin,Ee=O.topMarginTablet,Pe=O.rightMarginTablet,ze=O.bottomMarginTablet,Be=O.leftMarginTablet,He=O.topMarginMobile,Fe=O.rightMarginMobile,Ae=O.bottomMarginMobile,Le=O.leftMarginMobile,De=O.marginTypeMobile,Ie=O.marginTypeTablet,Ue=O.marginTypeDesktop,We=O.borderStyle,Re=O.borderWidth,Ve=O.borderRadius,Ge=O.borderColor,Ne=O.borderHoverColor,Je=O.loadGoogleFonts,Ke=O.fontFamily,$e=O.fontWeight,qe=O.fontSubset,Qe=O.fontSize,Xe=O.fontSizeType,Ye=O.fontSizeTablet,Ze=O.fontSizeMobile,en=O.lineHeightType,nn=O.lineHeight,tn=O.lineHeightTablet,on=O.lineHeightMobile,an=O.headingLoadGoogleFonts,ln=O.headingFontFamily,rn=O.headingFontWeight,dn=O.headingFontSubset,bn=O.headingFontSize,pn=O.headingFontSizeType,un=O.headingFontSizeTablet,cn=O.headingFontSizeMobile,gn=O.headingLineHeightType,fn=O.headingLineHeight,sn=O.headingLineHeightTablet,mn=O.headingLineHeightMobile,hn=O.mappingHeaders,xn=O.headingAlignment;if(1==Je){var vn={google:{families:[Ke+($e?":"+$e:"")]}};n=l.a.createElement(p.a,{config:vn})}if(1==an){var wn={google:{families:[ln+(rn?":"+rn:"")]}};t=l.a.createElement(p.a,{config:wn})}var yn="%"==$?100:1e3,Tn="%"==K?100:1e3,Cn="%"==J?100:1e3;return l.a.createElement(a.Suspense,{fallback:Object(i.a)()},l.a.createElement(v.BlockControls,null,l.a.createElement(v.BlockAlignmentToolbar,{value:k,onChange:function(e){j({align:e})},controls:["left","center","right"]})),l.a.createElement(v.InspectorControls,null,l.a.createElement(m.a,null,l.a.createElement(h.b,h.a.general,l.a.createElement(w.PanelBody,{title:Object(o.__)("General","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement("h2",null,Object(o.__)("Select the heading to consider when generating the table","ultimate-addons-for-gutenberg")),hn.map((function(e,n){return l.a.createElement(w.PanelRow,{key:n},l.a.createElement("label",{htmlFor:"ub_toggle_h".concat(n+1)},"H".concat(n+1)),l.a.createElement(w.ToggleControl,{id:"ub_toggle_h".concat(n+1),checked:e,onChange:function(){return j({mappingHeaders:[].concat(T(hn.slice(0,n)),[!hn[n]],T(hn.slice(n+1)))})}}))}))),l.a.createElement(w.PanelBody,{title:Object(o.__)("Scroll","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(w.ToggleControl,{label:Object(o.__)("Smooth Scroll","ultimate-addons-for-gutenberg"),checked:A,help:Object(o.__)("This will be in action only in Front End.","ultimate-addons-for-gutenberg"),onChange:function(){return j({smoothScroll:!A})}}),A&&l.a.createElement(l.a.Fragment,null,l.a.createElement(s.a,{label:Object(o.__)("Smooth Scroll Offset (px)","ultimate-addons-for-gutenberg"),setAttributes:j,value:L,onChange:function(e){return j({smoothScrollOffset:e})},min:0,max:1e3,displayUnit:!1}),l.a.createElement(s.a,{label:Object(o.__)("Smooth Scroll Offset (px)","ultimate-addons-for-gutenberg"),setAttributes:j,value:D,onChange:function(e){return j({smoothScrollDelay:e})},min:100,max:5e3,displayUnit:!1})),l.a.createElement(w.ToggleControl,{label:Object(o.__)("Show Scroll To Top","ultimate-addons-for-gutenberg"),checked:I,help:Object(o.__)("This will add a scroll to top arrow at the bottom of page.","ultimate-addons-for-gutenberg"),onChange:function(){return j({scrollToTop:!I})}})),l.a.createElement(w.PanelBody,{title:Object(o.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(_.a,{setAttributes:j,label:Object(o.__)("Title Alignment","ultimate-addons-for-gutenberg"),data:{value:xn,label:"headingAlignment"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:l.a.createElement(w.Icon,{icon:Object(b.a)("fa fa-align-left")}),tooltip:Object(o.__)("Left","ultimate-addons-for-gutenberg")},{value:"center",icon:l.a.createElement(w.Icon,{icon:Object(b.a)("fa fa-align-center")}),tooltip:Object(o.__)("Center","ultimate-addons-for-gutenberg")},{value:"right",icon:l.a.createElement(w.Icon,{icon:Object(b.a)("fa fa-align-right")}),tooltip:Object(o.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),l.a.createElement(w.ToggleControl,{label:Object(o.__)("Disable Bullet Points","ultimate-addons-for-gutenberg"),checked:S,onChange:function(){return j({disableBullets:!S})}}),l.a.createElement(c.a,{label:Object(o.__)("Gap Between Lists","ultimate-addons-for-gutenberg"),data:{desktop:{value:ve,label:"contentPaddingDesktop",unit:{value:Oe,label:"contentPaddingTypeDesktop"}},tablet:{value:we,label:"contentPaddingTablet",unit:{value:Ce,label:"contentPaddingTypeTablet"}},mobile:{value:ye,label:"contentPaddingMobile",unit:{value:Te,label:"contentPaddingTypeMobile"}}},min:0,max:100,units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],setAttributes:j}),l.a.createElement(w.ToggleControl,{label:Object(o.__)("Make Content Collapsible","ultimate-addons-for-gutenberg"),checked:E,onChange:function(){return j({makeCollapsible:!E})}}),E&&l.a.createElement(l.a.Fragment,null,l.a.createElement(w.ToggleControl,{label:Object(o.__)("Keep Collapsed Initially","ultimate-addons-for-gutenberg"),checked:P,onChange:function(){return j({initialCollapse:!P})}}),l.a.createElement(d.a,{label:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),value:z,onChange:function(e){return j({icon:e})}}),l.a.createElement(s.a,{label:Object(o.__)("Icon Size","ultimate-addons-for-gutenberg"),setAttributes:j,value:F,onChange:function(e){return j({iconSize:e})},min:0,max:300,displayUnit:!1})),l.a.createElement(w.ToggleControl,{label:Object(o.__)("Custom Width","ultimate-addons-for-gutenberg"),checked:R,onChange:function(){return j({customWidth:!R})},help:Object(o.__)("Table's width will be auto if this is kept off.","ultimate-addons-for-gutenberg")}),R&&l.a.createElement(c.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:V,label:"widthDesktop",unit:{value:$,label:"widthTypeDesktop"},min:0,max:yn},tablet:{value:G,label:"widthTablet",unit:{value:K,label:"widthTypeTablet"},min:0,max:Tn},mobile:{value:N,label:"widthMobile",unit:{value:J,label:"widthTypeMobile"},min:0,max:Cn}},units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}],setAttributes:j}),l.a.createElement(c.a,{label:Object(o.__)("Columns","ultimate-addons-for-gutenberg"),data:{desktop:{value:q,label:"tColumnsDesktop"},tablet:{value:Q,label:"tColumnsTablet"},mobile:{value:X,label:"tColumnsMobile"}},min:1,max:10,displayUnit:!1,setAttributes:j}))),l.a.createElement(h.b,h.a.style,l.a.createElement(w.PanelBody,{title:Object(o.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!0},l.a.createElement(s.a,{label:Object(o.__)("Bottom Space","ultimate-addons-for-gutenberg"),setAttributes:j,value:xe,onChange:function(e){return j({headingBottom:e})},min:0,max:50,displayUnit:!1}),l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ne||"",onColorChange:function(e){return j({headingColor:e})}}),l.a.createElement(r.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:j,loadGoogleFonts:{value:an,label:"headingLoadGoogleFonts"},fontFamily:{value:ln,label:"headingFontFamily"},fontWeight:{value:rn,label:"headingFontWeight"},fontSubset:{value:dn,label:"headingFontSubset"},fontSizeType:{value:pn,label:"headingFontSizeType"},fontSize:{value:bn,label:"headingFontSize"},fontSizeMobile:{value:cn,label:"headingFontSizeMobile"},fontSizeTablet:{value:un,label:"headingFontSizeTablet"},lineHeightType:{value:gn,label:"headingLineHeightType"},lineHeight:{value:fn,label:"headingLineHeight"},lineHeightMobile:{value:mn,label:"headingLineHeightMobile"},lineHeightTablet:{value:sn,label:"headingLineHeightTablet"}})),l.a.createElement(w.PanelBody,{title:Object(o.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(x.a,{tabs:[{name:"normal",title:Object(o.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(o.__)("Hover","ultimate-addons-for-gutenberg")}],normal:l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Z||"",onColorChange:function(e){return j({linkColor:e})}}),hover:l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:ee||"",onColorChange:function(e){return j({linkHoverColor:e})}})}),l.a.createElement(r.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:j,loadGoogleFonts:{value:Je,label:"loadGoogleFonts"},fontFamily:{value:Ke,label:"fontFamily"},fontWeight:{value:$e,label:"fontWeight"},fontSubset:{value:qe,label:"fontSubset"},fontSizeType:{value:Xe,label:"fontSizeType"},fontSize:{value:Qe,label:"fontSize"},fontSizeMobile:{value:Ze,label:"fontSizeMobile"},fontSizeTablet:{value:Ye,label:"fontSizeTablet"},lineHeightType:{value:en,label:"lineHeightType"},lineHeight:{value:nn,label:"lineHeight"},lineHeightMobile:{value:on,label:"lineHeightMobile"},lineHeightTablet:{value:tn,label:"lineHeightTablet"}})),!S&&l.a.createElement(w.PanelBody,{title:Object(o.__)("Bullet Points","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:H||"",onColorChange:function(e){return j({bulletColor:e})}})),E&&l.a.createElement(w.PanelBody,{title:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:function(e){return j({iconColor:e})}})),I&&l.a.createElement(w.PanelBody,{title:Object(o.__)("Scroll To Top","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{label:Object(o.__)("Icon Color","ultimate-addons-for-gutenberg"),colorValue:U||"",onColorChange:function(e){return j({scrollToTopColor:e})}}),l.a.createElement(u.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:W||"",onColorChange:function(e){return j({scrollToTopBgColor:e})}}))),l.a.createElement(w.PanelBody,{title:Object(o.__)("Background","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(u.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Y||"",onColorChange:function(e){return j({backgroundColor:e})}})),l.a.createElement(w.PanelBody,{title:Object(o.__)("Border","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(g.a,{setAttributes:j,borderStyle:{value:We,label:"borderStyle",title:Object(o.__)("Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Re,label:"borderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:Ve,label:"borderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Ge,label:"borderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Ne,label:"borderHoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")},disableBottomSeparator:!0})),l.a.createElement(w.PanelBody,{title:Object(o.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},l.a.createElement(f.a,y({},e,{label:Object(o.__)("Padding","ultimate-addons-for-gutenberg"),valueTop:{value:le,label:"topPadding"},valueRight:{value:ie,label:"rightPadding"},valueBottom:{value:re,label:"bottomPadding"},valueLeft:{value:de,label:"leftPadding"},valueTopTablet:{value:be,label:"topPaddingTablet"},valueRightTablet:{value:pe,label:"rightPaddingTablet"},valueBottomTablet:{value:ue,label:"bottomPaddingTablet"},valueLeftTablet:{value:ce,label:"leftPaddingTablet"},valueTopMobile:{value:ge,label:"topPaddingMobile"},valueRightMobile:{value:fe,label:"rightPaddingMobile"},valueBottomMobile:{value:se,label:"bottomPaddingMobile"},valueLeftMobile:{value:me,label:"leftPaddingMobile"},unit:{value:ae,label:"paddingTypeDesktop"},mUnit:{value:te,label:"paddingTypeMobile"},tUnit:{value:oe,label:"paddingTypeTablet"},deviceType:M,attributes:O,setAttributes:j,link:{value:_e,label:"paddingLink"}})),l.a.createElement(f.a,y({},e,{label:Object(o.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:je,label:"topMargin"},valueRight:{value:Me,label:"rightMargin"},valueBottom:{value:ke,label:"bottomMargin"},valueLeft:{value:Se,label:"leftMargin"},valueTopTablet:{value:Ee,label:"topMarginTablet"},valueRightTablet:{value:Pe,label:"rightMarginTablet"},valueBottomTablet:{value:ze,label:"bottomMarginTablet"},valueLeftTablet:{value:Be,label:"leftMarginTablet"},valueTopMobile:{value:He,label:"topMarginMobile"},valueRightMobile:{value:Fe,label:"rightMarginMobile"},valueBottomMobile:{value:Ae,label:"bottomMarginMobile"},valueLeftMobile:{value:Le,label:"leftMarginMobile"},unit:{value:Ue,label:"marginTypeDesktop"},mUnit:{value:De,label:"marginTypeMobile"},tUnit:{value:Ie,label:"marginTypeTablet"},deviceType:M,attributes:O,setAttributes:j,link:{value:he,label:"marginLink"}})))),l.a.createElement(h.b,h.a.advance))),n,t)};n.default=l.a.memo(O)}}]);