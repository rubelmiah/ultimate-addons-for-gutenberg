(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[102],{269:function(e,n,t){"use strict";var a=t(17),o=t.n(a)()((function(e){return e[1]}));o.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),n.a=o},270:function(e,n,t){"use strict";var a,o=t(105),i=t.n(o),l=t(1),r=t.n(l),b=t(16),c=t.n(b),d=t(269),u=0,s={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return u++||(a=c()(d.a,s)),p},p.unuse=function(){u>0&&!--u&&(a(),a=null)};var g=p,f=t(12),m=t(2);n.a=function(e){return Object(l.useLayoutEffect)((function(){return g.use(),function(){g.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(i.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}),e.help&&r.a.createElement("p",{className:"uag-control-help-notice"},e.help))}},523:function(e,n,t){"use strict";t.r(n);var a=t(1),o=t.n(a),i=t(2),l=t(270),r=t(12),b=t(11),c=t(22),d=t(74),u=t(52),s=t(20),p=t(14),g=t(13),f=t(33),m=t(18),_=t(75),h=t(25),x=t(5),v=t(6);function w(){return(w=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var y=[{value:"thumbnail",label:Object(i.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(i.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(i.__)("Large","ultimate-addons-for-gutenberg")}],S=function(e){var n,t,S,j=e=e.parentProps,O=j.setAttributes,T=j.attributes,F=j.deviceType,E=T.align,M=T.tag,z=T.titleColor,L=T.prefixColor,k=T.descColor,C=T.titleFontFamily,H=T.titleFontWeight,I=T.titleFontSubset,U=T.titleFontSizeType,B=T.titleFontSize,A=T.titleFontSizeMobile,N=T.titleFontSizeTablet,R=T.titleLineHeightType,P=T.titleLineHeight,W=T.titleLineHeightMobile,G=T.titleLineHeightTablet,V=T.prefixFontFamily,q=T.prefixFontWeight,D=T.prefixFontSubset,J=T.prefixFontSizeType,K=T.prefixFontSize,Q=T.prefixFontSizeMobile,X=T.prefixFontSizeTablet,Y=T.prefixLineHeightType,Z=T.prefixLineHeight,ee=T.prefixLineHeightMobile,ne=T.prefixLineHeightTablet,te=T.descFontFamily,ae=T.descFontWeight,oe=T.descFontSubset,ie=T.descFontSizeType,le=T.descFontSize,re=T.descFontSizeMobile,be=T.descFontSizeTablet,ce=T.descLineHeightType,de=T.descLineHeight,ue=T.descLineHeightMobile,se=T.descLineHeightTablet,pe=T.socialFontSize,ge=T.socialFontSizeType,fe=T.socialFontSizeMobile,me=T.socialFontSizeTablet,_e=T.titleLoadGoogleFonts,he=T.prefixLoadGoogleFonts,xe=T.descLoadGoogleFonts,ve=T.image,we=T.imgStyle,ye=T.imgAlign,Se=T.imgSize,je=T.imgWidth,Oe=T.imgPosition,Te=T.titleSpace,Fe=T.descSpace,Ee=T.prefixSpace,Me=T.twitterIcon,ze=T.fbIcon,Le=T.linkedinIcon,ke=T.pinIcon,Ce=T.twitterLink,He=T.fbLink,Ie=T.linkedinLink,Ue=T.pinLink,Be=T.socialColor,Ae=T.socialHoverColor,Ne=T.socialSpace,Re=T.socialTarget,Pe=T.socialEnable,We=T.stack,Ge=T.imageLeftMargin,Ve=T.imageRightMargin,qe=T.imageTopMargin,De=T.imageBottomMargin,Je=T.imageMarginTopTablet,$e=T.imageMarginRightTablet,Ke=T.imageMarginBottomTablet,Qe=T.imageMarginLeftTablet,Xe=T.imageMarginTopMobile,Ye=T.imageMarginRightMobile,Ze=T.imageMarginBottomMobile,en=T.imageMarginLeftMobile,nn=T.imageMarginUnit,tn=T.tabletImageMarginUnit,an=T.mobileImageMarginUnit,on=T.spacingLink,ln=function(e){var n=[];return $.each(e,(function(e){var t={value:e,label:e};n.push(t)})),n};if(ve&&ve.sizes&&(y=ln(ve.sizes)),Object(i.__)("Select Image","ultimate-addons-for-gutenberg"),ve&&(null==ve.url||""==ve.url?Object(i.__)("Select Image","ultimate-addons-for-gutenberg"):Object(i.__)("Replace Image","ultimate-addons-for-gutenberg")),1==_e){var rn={google:{families:[C+(H?":"+H:"")]}};n=o.a.createElement(d.a,{config:rn})}if(1==he){var bn={google:{families:[V+(q?":"+q:"")]}};t=o.a.createElement(d.a,{config:bn})}if(1==xe){var cn={google:{families:[te+(ae?":"+ae:"")]}};S=o.a.createElement(d.a,{config:cn})}return o.a.createElement(o.a.Fragment,null,"above"==Oe&&o.a.createElement(x.BlockControls,{key:"controls"},o.a.createElement(x.AlignmentToolbar,{value:E,onChange:function(e){return O({align:e})}})),o.a.createElement(x.InspectorControls,null,o.a.createElement(u.a,null,o.a.createElement(s.b,s.a.general,o.a.createElement(v.PanelBody,null,o.a.createElement(m.a,{setAttributes:O,label:Object(i.__)("Title Tag","ultimate-addons-for-gutenberg"),data:{value:M,label:"tag"},options:[{value:"h1",label:Object(i.__)("H1","ultimate-addons-for-gutenberg")},{value:"h2",label:Object(i.__)("H2","ultimate-addons-for-gutenberg")},{value:"h3",label:Object(i.__)("H3","ultimate-addons-for-gutenberg")},{value:"h4",label:Object(i.__)("H4","ultimate-addons-for-gutenberg")},{value:"h5",label:Object(i.__)("H5","ultimate-addons-for-gutenberg")},{value:"h6",label:Object(i.__)("H6","ultimate-addons-for-gutenberg")}]}),o.a.createElement(_.a,{onSelectImage:function(e){if(e&&e.url)if(e.type&&"image"===e.type){if(e.sizes){var n=ln(e.sizes);y=n}O({image:e})}else O({image:null});else O({image:null})},backgroundImage:ve,onRemoveImage:function(){O({image:""})}}),ve&&o.a.createElement(m.a,{setAttributes:O,label:Object(i.__)("Image Position","ultimate-addons-for-gutenberg"),data:{value:Oe,label:"imgPosition"},className:"uagb-multi-button-alignment-control",options:[{value:"left",icon:o.a.createElement(v.Icon,{icon:Object(r.a)("fa fa-align-left")}),tooltip:Object(i.__)("Left","ultimate-addons-for-gutenberg")},{value:"above",icon:o.a.createElement(v.Icon,{icon:Object(r.a)("fa fa-align-center")}),tooltip:Object(i.__)("Top","ultimate-addons-for-gutenberg")},{value:"right",icon:o.a.createElement(v.Icon,{icon:Object(r.a)("fa fa-align-right")}),tooltip:Object(i.__)("Right","ultimate-addons-for-gutenberg")}],showIcons:!0}),"above"!=Oe&&ve&&o.a.createElement(m.a,{setAttributes:O,label:Object(i.__)("Stack On","ultimate-addons-for-gutenberg"),data:{value:We,label:"stack"},className:"uagb-multi-button-alignment-control",options:[{value:"none",label:Object(i.__)("None","ultimate-addons-for-gutenberg"),tooltip:Object(i.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(i.__)("Tablet","ultimate-addons-for-gutenberg"),tooltip:Object(i.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(i.__)("Mobile","ultimate-addons-for-gutenberg"),tooltip:Object(i.__)("Mobile","ultimate-addons-for-gutenberg")}]}),ve&&o.a.createElement(m.a,{setAttributes:O,label:Object(i.__)("Image Style","ultimate-addons-for-gutenberg"),data:{value:we,label:"imgStyle"},className:"uagb-multi-button-alignment-control",options:[{value:"normal",label:Object(i.__)("Normal","ultimate-addons-for-gutenberg"),tooltip:Object(i.__)("Normal","ultimate-addons-for-gutenberg")},{value:"circle",label:Object(i.__)("Circle","ultimate-addons-for-gutenberg"),tooltip:Object(i.__)("Circle","ultimate-addons-for-gutenberg")},{value:"square",label:Object(i.__)("Square","ultimate-addons-for-gutenberg"),tooltip:Object(i.__)("Square","ultimate-addons-for-gutenberg")}]}),Oe&&"above"!==Oe&&ve&&o.a.createElement(m.a,{setAttributes:O,label:Object(i.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),data:{value:ye,label:"imgAlign"},className:"uagb-multi-button-alignment-control",options:[{value:"top",label:Object(i.__)("Top","ultimate-addons-for-gutenberg"),tooltip:Object(i.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(i.__)("Middle","ultimate-addons-for-gutenberg"),tooltip:Object(i.__)("Middle","ultimate-addons-for-gutenberg")}]}),ve&&o.a.createElement(o.a.Fragment,null,o.a.createElement(v.SelectControl,{label:Object(i.__)("Size","ultimate-addons-for-gutenberg"),options:y,value:Se,onChange:function(e){return O({imgSize:e})}}),o.a.createElement(g.a,{label:Object(i.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:O,value:je,onChange:function(e){return O({imgWidth:e})},min:0,max:500,displayUnit:!1}))),o.a.createElement(v.PanelBody,{title:Object(i.__)("Social Links","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(v.ToggleControl,{label:Object(i.__)("Enable Social Links","ultimate-addons-for-gutenberg"),checked:Pe,onChange:function(){return O({socialEnable:!Pe})}}),Pe&&o.a.createElement(o.a.Fragment,null,o.a.createElement(v.ToggleControl,{label:Object(i.__)("Open Links in New Window","ultimate-addons-for-gutenberg"),checked:Re,onChange:function(){return O({socialTarget:!Re})}}),o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Twitter","ultimate-addons-for-gutenberg")),o.a.createElement(l.a,{label:Object(i.__)("Icon","ultimate-addons-for-gutenberg"),value:Me,onChange:function(e){return O({twitterIcon:e})}}),Me&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),o.a.createElement(v.TextControl,{value:Ce,onChange:function(e){return O({twitterLink:e})},placeholder:Object(i.__)("Enter Twitter URL","ultimate-addons-for-gutenberg")})),o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Facebook","ultimate-addons-for-gutenberg")),o.a.createElement(l.a,{label:Object(i.__)("Icon","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return O({fbIcon:e})}}),ze&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),o.a.createElement(v.TextControl,{value:He,onChange:function(e){return O({fbLink:e})},placeholder:Object(i.__)("Enter Facebook URL","ultimate-addons-for-gutenberg")})),o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("LinkedIn","ultimate-addons-for-gutenberg")),o.a.createElement(l.a,{label:Object(i.__)("Icon","ultimate-addons-for-gutenberg"),value:Le,onChange:function(e){return O({linkedinIcon:e})}}),Le&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),o.a.createElement(v.TextControl,{value:Ie,onChange:function(e){return O({linkedinLink:e})},placeholder:Object(i.__)("Enter LinkedIn URL","ultimate-addons-for-gutenberg")})),o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("Pinterest","ultimate-addons-for-gutenberg")),o.a.createElement(l.a,{label:Object(i.__)("Icon","ultimate-addons-for-gutenberg"),value:ke,onChange:function(e){return O({pinIcon:e})}}),ke&&o.a.createElement(o.a.Fragment,null,o.a.createElement("p",{className:"components-base-control__label"},Object(i.__)("URL","ultimate-addons-for-gutenberg")),o.a.createElement(v.TextControl,{value:Ue,onChange:function(e){return O({pinLink:e})},placeholder:Object(i.__)("Enter Pinterest URL","ultimate-addons-for-gutenberg")}))))),o.a.createElement(s.b,s.a.style,o.a.createElement(v.PanelBody,{title:Object(i.__)("Title","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(p.a,{label:Object(i.__)("Color","ultimate-addons-for-gutenberg"),colorValue:z||"",onColorChange:function(e){return O({titleColor:e})}}),o.a.createElement(c.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:T,setAttributes:O,loadGoogleFonts:{value:_e,label:"titleLoadGoogleFonts"},fontFamily:{value:C,label:"titleFontFamily"},fontWeight:{value:H,label:"titleFontWeight"},fontSubset:{value:I,label:"titleFontSubset"},fontSizeType:{value:U,label:"titleFontSizeType"},fontSize:{value:B,label:"titleFontSize"},fontSizeMobile:{value:A,label:"titleFontSizeMobile"},fontSizeTablet:{value:N,label:"titleFontSizeTablet"},lineHeightType:{value:R,label:"titleLineHeightType"},lineHeight:{value:P,label:"titleLineHeight"},lineHeightMobile:{value:W,label:"titleLineHeightMobile"},lineHeightTablet:{value:G,label:"titleLineHeightTablet"}}),o.a.createElement(g.a,{label:Object(i.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:O,value:Te,onChange:function(e){return O({titleSpace:e})},min:0,max:50,displayUnit:!1})),o.a.createElement(v.PanelBody,{title:Object(i.__)("Prefix","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(p.a,{label:Object(i.__)("Color","ultimate-addons-for-gutenberg"),colorValue:L||"",onColorChange:function(e){return O({prefixColor:e})}}),o.a.createElement(c.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:T,setAttributes:O,loadGoogleFonts:{value:he,label:"prefixLoadGoogleFonts"},fontFamily:{value:V,label:"prefixFontFamily"},fontWeight:{value:q,label:"prefixFontWeight"},fontSubset:{value:D,label:"prefixFontSubset"},fontSizeType:{value:J,label:"prefixFontSizeType"},fontSize:{value:K,label:"prefixFontSize"},fontSizeMobile:{value:Q,label:"prefixFontSizeMobile"},fontSizeTablet:{value:X,label:"prefixFontSizeTablet"},lineHeightType:{value:Y,label:"prefixLineHeightType"},lineHeight:{value:Z,label:"prefixLineHeight"},lineHeightMobile:{value:ee,label:"prefixLineHeightMobile"},lineHeightTablet:{value:ne,label:"prefixLineHeightTablet"}}),o.a.createElement(g.a,{label:Object(i.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:O,value:Ee,onChange:function(e){return O({prefixSpace:e})},min:0,max:50,displayUnit:!1})),o.a.createElement(v.PanelBody,{title:Object(i.__)("Description","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(p.a,{label:Object(i.__)("Color","ultimate-addons-for-gutenberg"),colorValue:k||"",onColorChange:function(e){return O({descColor:e})}}),o.a.createElement(c.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:T,setAttributes:O,loadGoogleFonts:{value:xe,label:"descLoadGoogleFonts"},fontFamily:{value:te,label:"descFontFamily"},fontWeight:{value:ae,label:"descFontWeight"},fontSubset:{value:oe,label:"descFontSubset"},fontSizeType:{value:ie,label:"descFontSizeType"},fontSize:{value:le,label:"descFontSize"},fontSizeMobile:{value:re,label:"descFontSizeMobile"},fontSizeTablet:{value:be,label:"descFontSizeTablet"},lineHeightType:{value:ce,label:"descLineHeightType"},lineHeight:{value:de,label:"descLineHeight"},lineHeightMobile:{value:ue,label:"descLineHeightMobile"},lineHeightTablet:{value:se,label:"descLineHeightTablet"}}),o.a.createElement(g.a,{label:Object(i.__)("Bottom Spacing","ultimate-addons-for-gutenberg"),setAttributes:O,value:Fe,onChange:function(e){return O({descSpace:e})},min:0,max:50,displayUnit:!1})),o.a.createElement(v.PanelBody,{title:Object(i.__)("Social Icons","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(c.a,{label:Object(i.__)("Typography","ultimate-addons-for-gutenberg"),attributes:T,setAttributes:O,fontSizeType:{value:ge,label:"socialFontSizeType"},fontSize:{value:pe,label:"socialFontSize"},fontSizeMobile:{value:fe,label:"socialFontSizeMobile"},fontSizeTablet:{value:me,label:"socialFontSizeTablet"},disableFontFamily:!0,disableLineHeight:!0}),o.a.createElement(g.a,{label:Object(i.__)("Inter Icon Spacing","ultimate-addons-for-gutenberg"),setAttributes:O,value:Ne,onChange:function(e){return O({socialSpace:e})},min:0,max:50,displayUnit:!1}),o.a.createElement(h.a,{tabs:[{name:"normal",title:Object(i.__)("Normal","ultimate-addons-for-gutenberg")},{name:"hover",title:Object(i.__)("Hover","ultimate-addons-for-gutenberg")}],normal:o.a.createElement(p.a,{label:Object(i.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Be||"",onColorChange:function(e){return O({socialColor:e})}}),hover:o.a.createElement(p.a,{label:Object(i.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ae||"",onColorChange:function(e){return O({socialHoverColor:e})}}),disableBottomSeparator:!0})),ve&&o.a.createElement(v.PanelBody,{title:Object(i.__)("Spacing","ultimate-addons-for-gutenberg"),initialOpen:!1},o.a.createElement(f.a,w({},e,{label:Object(i.__)("Image Margin","ultimate-addons-for-gutenberg"),valueTop:{value:qe,label:"imageTopMargin"},valueRight:{value:Ve,label:"imageRightMargin"},valueBottom:{value:De,label:"imageBottomMargin"},valueLeft:{value:Ge,label:"imageLeftMargin"},valueTopTablet:{value:Je,label:"imageMarginTopTablet"},valueRightTablet:{value:$e,label:"imageMarginRightTablet"},valueBottomTablet:{value:Ke,label:"imageMarginBottomTablet"},valueLeftTablet:{value:Qe,label:"imageMarginLeftTablet"},valueTopMobile:{value:Xe,label:"imageMarginTopMobile"},valueRightMobile:{value:Ye,label:"imageMarginRightMobile"},valueBottomMobile:{value:Ze,label:"imageMarginBottomMobile"},valueLeftMobile:{value:en,label:"imageMarginLeftMobile"},unit:{value:nn,label:"imageMarginUnit"},mUnit:{value:an,label:"mobileImageMarginUnit"},tUnit:{value:tn,label:"tabletImageMarginUnit"},deviceType:F,attributes:T,setAttributes:O,link:{value:on,label:"spacingLink"}})))),o.a.createElement(s.b,w({},s.a.advance,{parentProps:e})))),o.a.createElement(a.Suspense,{fallback:Object(b.a)()},n,t,S))};n.default=o.a.memo(S)}}]);