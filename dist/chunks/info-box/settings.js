(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[34],{243:function(e,t,n){"use strict";var a=n(15),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=o},244:function(e,t,n){"use strict";var a,o=n(86),l=n.n(o),i=n(1),r=n.n(i),b=n(14),u=n.n(b),d=n(243),c=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return c++||(a=u()(d.a,g)),p},p.unuse=function(){c>0&&!--c&&(a(),a=null)};var s=p,f=n(11),m=n(2);t.a=function(e){return Object(i.useLayoutEffect)((function(){return s.use(),function(){s.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(l.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},373:function(e,t,n){"use strict";n.r(t);var a=n(244),o=n(2),l=n(1),i=n.n(l),r=n(12),b=n(84),u=n(57),d=n(87),c=n(17),g=n(83),p=n(35),s=n(85),f=n(16),m=n(88),_=n(58),h=n(40),v=n(4),x=n(5);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}$=jQuery;var S=[{value:"thumbnail",label:Object(o.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")}],y=function(e){var t,n,y,w,F=e=e.parentProps,O=F.setAttributes,j=F.attributes,C=F.deviceType,E=j.headingAlign,H=j.headingColor,B=j.subHeadingColor,M=j.prefixColor,z=j.prefixFontSize,L=j.prefixFontSizeType,k=j.prefixFontSizeTablet,A=j.prefixFontSizeMobile,I=j.prefixFontFamily,P=j.prefixFontWeight,W=j.prefixFontSubset,U=j.prefixLineHeightType,R=j.prefixLineHeight,D=j.prefixLineHeightTablet,G=j.prefixLineHeightMobile,V=j.prefixTextTransform,N=j.prefixTextDecoration,J=j.prefixLoadGoogleFonts,Q=j.headingTag,q=j.headFontSize,K=j.headFontSizeType,X=j.headFontSizeTablet,Y=j.headFontSizeMobile,Z=j.headFontFamily,ee=j.headFontWeight,te=j.headFontSubset,ne=j.headLineHeightType,ae=j.headLineHeight,oe=j.headLineHeightTablet,le=j.headLineHeightMobile,ie=j.headLoadGoogleFonts,re=j.subHeadFontSize,be=j.subHeadFontSizeType,ue=j.subHeadFontSizeTablet,de=j.subHeadFontSizeMobile,ce=j.subHeadFontFamily,ge=j.subHeadFontWeight,pe=j.subHeadFontSubset,se=j.subHeadLineHeightType,fe=j.subHeadLineHeight,me=j.subHeadLineHeightTablet,_e=j.subHeadLineHeightMobile,he=j.subHeadLineTransform,ve=j.subHeadLineDecoration,xe=j.subHeadLoadGoogleFonts,Te=j.separatorWidthType,Se=j.seperatorSpace,ye=j.seperatorTabletSpace,we=j.seperatorMobileSpace,Fe=j.headSpace,Oe=j.headTabletSpace,je=j.headMobileSpace,Ce=j.subHeadSpace,Ee=j.icon,He=j.iconColor,Be=j.iconSize,Me=j.iconSizeType,ze=j.iconimgPosition,Le=j.iconHover,ke=j.iconimgBorderRadius,Ae=j.iconimgBorderRadiusUnit,Ie=j.source_type,Pe=j.sourceAlign,We=j.seperatorPosition,Ue=j.seperatorStyle,Re=j.seperatorWidth,De=j.seperatorColor,Ge=j.seperatorThickness,Ve=j.thicknessUnit,Ne=j.ctaType,Je=j.ctaText,$e=j.ctaLink,Qe=j.ctaTarget,qe=j.ctaIcon,Ke=j.ctaIconPosition,Xe=j.ctaIconSpace,Ye=j.ctaIconSpaceType,Ze=j.ctaLinkColor,et=j.ctaFontSize,tt=j.ctaFontSizeType,nt=j.ctaFontSizeMobile,at=j.ctaFontSizeTablet,ot=j.ctaTextTransform,lt=j.ctaTextDecoration,it=j.ctaFontFamily,rt=j.ctaFontWeight,bt=j.ctaFontSubset,ut=j.ctaLoadGoogleFonts,dt=j.ctaBtnLinkColor,ct=j.ctaLinkHoverColor,gt=j.ctaBgHoverColor,pt=j.ctaBgColor,st=j.paddingBtnUnit,ft=j.mobilePaddingBtnUnit,mt=j.tabletPaddingBtnUnit,_t=j.paddingBtnTop,ht=j.paddingBtnBottom,vt=j.paddingBtnLeft,xt=j.paddingBtnRight,Tt=j.paddingBtnTopTablet,St=j.paddingBtnRightTablet,yt=j.paddingBtnBottomTablet,wt=j.paddingBtnLeftTablet,Ft=j.paddingBtnTopMobile,Ot=j.paddingBtnRightMobile,jt=j.paddingBtnBottomMobile,Ct=j.paddingBtnLeftMobile,Et=j.ctaBorderStyle,Ht=j.ctaBorderColor,Bt=j.ctaBorderhoverColor,Mt=j.ctaBorderWidth,zt=j.ctaBorderRadius,Lt=j.prefixSpace,kt=j.prefixTabletSpace,At=j.prefixMobileSpace,It=j.iconLeftMargin,Pt=j.iconRightMargin,Wt=j.iconTopMargin,Ut=j.iconBottomMargin,Rt=j.iconMarginTopTablet,Dt=j.iconMarginRightTablet,Gt=j.iconMarginBottomTablet,Vt=j.iconMarginLeftTablet,Nt=j.iconMarginTopMobile,Jt=j.iconMarginRightMobile,$t=j.iconMarginBottomMobile,Qt=j.iconMarginLeftMobile,qt=j.iconMarginUnit,Kt=j.iconMobilePaddingUnit,Xt=j.iconTabletPaddingUnit,Yt=j.iconImage,Zt=j.imageSize,en=j.imageWidth,tn=j.imageWidthMobile,nn=j.imageWidthTablet,an=j.imageWidthType,on=j.imageWidthUnit,ln=j.stack,rn=j.showPrefix,bn=j.showTitle,un=j.showDesc,dn=j.inheritFromTheme,cn=j.spacingLink,gn=j.paddingspacingLink,pn=j.headLineTransform,sn=j.headLineDecoration,fn=j.prefixSpaceUnit,mn=j.headSpaceUnit,hn=j.seperatorSpaceUnit,vn=j.subHeadSpaceUnit,xn=j.subHeadTabletSpace,Tn=j.subHeadMobileSpace,Sn=function(e){var t=[];return $.each(e,(function(e){var n={value:e,label:e};t.push(n)})),t};if(Yt&&Yt.sizes&&(S=Sn(Yt.sizes)),Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),Yt&&(null==Yt.url||""==Yt.url?Object(o.__)("Select Image","ultimate-addons-for-gutenberg"):Object(o.__)("Replace Image","ultimate-addons-for-gutenberg")),1==J){var yn={google:{families:[I+(P?":"+P:"")]}};t=i.a.createElement(u.a,{config:yn})}if(1==ie){var wn={google:{families:[Z+(ee?":"+ee:"")]}};w=i.a.createElement(u.a,{config:wn})}if(1==xe){var Fn={google:{families:[ce+(ge?":"+ge:"")]}};n=i.a.createElement(u.a,{config:Fn})}if(1==xe){var On={google:{families:[it+(rt?":"+rt:"")]}};y=i.a.createElement(u.a,{config:On})}return i.a.createElement(i.a.Fragment,null,("above-title"==ze||"below-title"==ze)&&i.a.createElement(v.BlockControls,{key:"controls"},i.a.createElement(v.AlignmentToolbar,{value:E,onChange:function(e){return O({headingAlign:e})}})),i.a.createElement(v.InspectorControls,null,i.a.createElement(g.a,null,i.a.createElement(p.b,p.a.general,i.a.createElement(x.PanelBody,{title:Object(o.__)("Image/Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(x.SelectControl,{label:Object(o.__)("Select Position","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return O({iconimgPosition:e})},options:[{value:"above-title",label:Object(o.__)("Above Title","ultimate-addons-for-gutenberg")},{value:"below-title",label:Object(o.__)("Below Title","ultimate-addons-for-gutenberg")},{value:"left-title",label:Object(o.__)("Left of Title","ultimate-addons-for-gutenberg")},{value:"right-title",label:Object(o.__)("Right of Title","ultimate-addons-for-gutenberg")},{value:"left",label:Object(o.__)("Left of Text and Title","ultimate-addons-for-gutenberg")},{value:"right",label:Object(o.__)("Right of Text and Title","ultimate-addons-for-gutenberg")}]}),("left"==ze||"right"==ze)&&i.a.createElement(x.SelectControl,{label:Object(o.__)("Stack on","ultimate-addons-for-gutenberg"),value:ln,options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(o.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(o.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(o.__)("Note: Choose on what breakpoint the Info Box will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return O({stack:e})}}),ze&&"above-title"!==ze&&"below-title"!==ze&&i.a.createElement(h.a,{setAttributes:O,label:Object(o.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),data:{value:Pe,label:"sourceAlign"},options:[{value:"top",label:Object(o.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(o.__)("Middle","ultimate-addons-for-gutenberg")}]}),i.a.createElement(h.a,{setAttributes:O,label:Object(o.__)("Select Source","ultimate-addons-for-gutenberg"),data:{value:Ie,label:"source_type"},options:[{value:"icon",label:Object(o.__)("Icon","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")}]}),"icon"==Ie&&i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{label:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return O({icon:e})}})),"image"==Ie&&i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,{onSelectImage:function(e){if(e&&e.url)if(e.type&&"image"===e.type){if(e.sizes){var t=Sn(e.sizes);S=t}O({iconImage:e})}else O({iconImage:null});else O({iconImage:null})},backgroundImage:Yt,onRemoveImage:function(){O({iconImage:""})}}),Yt&&"null"!==Yt.url&&""!==Yt.url&&i.a.createElement(x.SelectControl,{label:Object(o.__)("Image Size","ultimate-addons-for-gutenberg"),options:S,value:Zt,onChange:function(e){return O({imageSize:e})}}))),i.a.createElement(x.PanelBody,{title:Object(o.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(x.ToggleControl,{checked:rn,onChange:function(){return O({showPrefix:!rn})},label:Object(o.__)("Enable Prefix","ultimate-addons-for-gutenberg")}),i.a.createElement(x.ToggleControl,{checked:bn,onChange:function(){return O({showTitle:!bn})},label:Object(o.__)("Enable Title","ultimate-addons-for-gutenberg")}),bn&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{setAttributes:O,label:Object(o.__)("Title Tag","ultimate-addons-for-gutenberg"),data:{value:Q,label:"headingTag"},options:[{value:"h1",label:Object(o.__)("H1")},{value:"h2",label:Object(o.__)("H2")},{value:"h3",label:Object(o.__)("H3")},{value:"h4",label:Object(o.__)("H4")},{value:"h5",label:Object(o.__)("H5")},{value:"h6",label:Object(o.__)("H6")},{value:"p",label:Object(o.__)("P")}]})),i.a.createElement(x.ToggleControl,{checked:un,onChange:function(){return O({showDesc:!un})},label:Object(o.__)("Enable Description","ultimate-addons-for-gutenberg")})),i.a.createElement(x.PanelBody,{title:Object(o.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(x.SelectControl,{label:Object(o.__)("Style"),value:Ue,onChange:function(e){return O({seperatorStyle:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(o.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(o.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(o.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(o.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==Ue&&i.a.createElement(x.SelectControl,{label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),value:We,onChange:function(e){return O({seperatorPosition:e})},options:[{value:"after_icon",label:Object(o.__)("After Icon/Image","ultimate-addons-for-gutenberg")},{value:"after_prefix",label:Object(o.__)("After Prefix","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(o.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_desc",label:Object(o.__)("After Description","ultimate-addons-for-gutenberg")}]})),i.a.createElement(x.PanelBody,{title:Object(o.__)("Call To Action","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(x.SelectControl,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:Ne,onChange:function(e){return O({ctaType:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"text",label:Object(o.__)("Text","ultimate-addons-for-gutenberg")},{value:"button",label:Object(o.__)("Button","ultimate-addons-for-gutenberg")},{value:"all",label:Object(o.__)("Complete Box","ultimate-addons-for-gutenberg")}]}),("text"===Ne||"button"===Ne)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.TextControl,{label:Object(o.__)("Text","ultimate-addons-for-gutenberg"),value:Je,onChange:function(e){return O({ctaText:e})}})),"none"!==Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.TextControl,{label:Object(o.__)("Link","ultimate-addons-for-gutenberg"),value:$e,onChange:function(e){return O({ctaLink:e})}})),"all"!==Ne&&"none"!==Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{label:Object(o.__)("Button Icon","ultimate-addons-for-gutenberg"),value:qe,onChange:function(e){return O({ctaIcon:e})}})),""!==qe&&"all"!==Ne&&"none"!==Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.SelectControl,{label:Object(o.__)("Icon Position","ultimate-addons-for-gutenberg"),value:Ke,onChange:function(e){return O({ctaIconPosition:e})},options:[{value:"before",label:Object(o.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(o.__)("After Text","ultimate-addons-for-gutenberg")}]}),i.a.createElement(f.a,{label:Object(o.__)("Icon Spacing","ultimate-addons-for-gutenberg"),setAttributes:O,value:Xe,onChange:function(e){return O({ctaIconSpace:e})},min:0,max:50,unit:{value:Ye,label:"ctaIconSpaceType"}})),"button"===Ne&&i.a.createElement(x.ToggleControl,{checked:dn,onChange:function(){return O({inheritFromTheme:!dn})},label:Object(o.__)("Inherit from Theme","ultimate-addons-for-gutenberg")}),"none"!==Ne&&i.a.createElement(x.ToggleControl,{checked:Qe,onChange:function(){return O({ctaTarget:!Qe})},label:Object(o.__)("Open in new Window","ultimate-addons-for-gutenberg")}))),i.a.createElement(p.b,p.a.style,i.a.createElement(i.a.Fragment,null,""!==Ee&&i.a.createElement(x.PanelBody,{title:"Icon/Image",initialOpen:!1},i.a.createElement(i.a.Fragment,null," ","icon"==Ie&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:He||"",onColorChange:function(e){return O({iconColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg"),colorValue:Le||"",onColorChange:function(e){return O({iconHover:e})}}),i.a.createElement(f.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:O,value:Be,onChange:function(e){return O({iconSize:e})},min:0,max:300,unit:{value:Me,label:"iconSizeType"}})),"image"==Ie&&Yt&&"null"!==Yt.url&&""!==Yt.url&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.ToggleControl,{checked:an,onChange:function(){return O({imageWidthType:!an})},label:Object(o.__)("Custom Width","ultimate-addons-for-gutenberg"),help:Object(o.__)("Turn this off to inherit the natural width of Image.","ultimate-addons-for-gutenberg")}),an&&i.a.createElement(m.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:en,label:"imageWidth"},tablet:{value:nn,label:"imageWidthTablet"},mobile:{value:tn,label:"imageWidthMobile"}},min:0,max:500,unit:{value:on,label:"imageWidthUnit"},setAttributes:O}),i.a.createElement(f.a,{label:Object(o.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),setAttributes:O,value:ke,onChange:function(e){return O({iconimgBorderRadius:e})},min:0,max:500,unit:{value:Ae,label:"iconimgBorderRadiusUnit"}})),i.a.createElement(s.a,T({},e,{label:Object(o.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Wt,label:"iconTopMargin"},valueRight:{value:Pt,label:"iconRightMargin"},valueBottom:{value:Ut,label:"iconBottomMargin"},valueLeft:{value:It,label:"iconLeftMargin"},valueTopTablet:{value:Rt,label:"iconMarginTopTablet"},valueRightTablet:{value:Dt,label:"iconMarginRightTablet"},valueBottomTablet:{value:Gt,label:"iconMarginBottomTablet"},valueLeftTablet:{value:Vt,label:"iconMarginLeftTablet"},valueTopMobile:{value:Nt,label:"iconMarginTopMobile"},valueRightMobile:{value:Jt,label:"iconMarginRightMobile"},valueBottomMobile:{value:$t,label:"iconMarginBottomMobile"},valueLeftMobile:{value:Qt,label:"iconMarginLeftMobile"},unit:{value:qt,label:"iconMarginUnit"},mUnit:{value:Kt,label:"iconMobilePaddingUnit"},tUnit:{value:Xt,label:"iconTabletPaddingUnit"},deviceType:C,attributes:j,setAttributes:O,link:{value:cn,label:"spacingLink"}})))),rn&&i.a.createElement(x.PanelBody,{title:"Prefix",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:function(e){return O({prefixColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:O,loadGoogleFonts:{value:J,label:"prefixLoadGoogleFonts"},fontFamily:{value:I,label:"prefixFontFamily"},fontWeight:{value:P,label:"prefixFontWeight"},fontSubset:{value:W,label:"prefixFontSubset"},fontSizeType:{value:L,label:"prefixFontSizeType"},fontSize:{value:z,label:"prefixFontSize"},fontSizeMobile:{value:A,label:"prefixFontSizeMobile"},fontSizeTablet:{value:k,label:"prefixFontSizeTablet"},lineHeightType:{value:U,label:"prefixLineHeightType"},lineHeight:{value:R,label:"prefixLineHeight"},lineHeightMobile:{value:G,label:"prefixLineHeightMobile"},lineHeightTablet:{value:D,label:"prefixLineHeightTablet"},transform:{value:V,label:"prefixTextTransform"},decoration:{value:N,label:"prefixTextDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Lt,label:"prefixSpace"},tablet:{value:kt,label:"prefixTabletSpace"},mobile:{value:At,label:"prefixMobileSpace"}},min:0,max:50,unit:{value:fn,label:"prefixSpaceUnit"},setAttributes:O}))),bn&&i.a.createElement(x.PanelBody,{title:"Title",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:H||"",onColorChange:function(e){return O({headingColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:O,loadGoogleFonts:{value:ie,label:"headLoadGoogleFonts"},fontFamily:{value:Z,label:"headFontFamily"},fontWeight:{value:ee,label:"headFontWeight"},fontSubset:{value:te,label:"headFontSubset"},fontSizeType:{value:K,label:"headFontSizeType"},fontSize:{value:q,label:"headFontSize"},fontSizeMobile:{value:Y,label:"headFontSizeMobile"},fontSizeTablet:{value:X,label:"headFontSizeTablet"},lineHeightType:{value:ne,label:"headLineHeightType"},lineHeight:{value:ae,label:"headLineHeight"},lineHeightMobile:{value:le,label:"headLineHeightMobile"},lineHeightTablet:{value:oe,label:"headLineHeightTablet"},transform:{value:pn,label:"headLineTransform"},decoration:{value:sn,label:"headLineDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Fe,label:"headSpace"},tablet:{value:Oe,label:"headTabletSpace"},mobile:{value:je,label:"headMobileSpace"}},min:0,max:50,unit:{value:mn,label:"headSpaceUnit"},setAttributes:O}))),"null"!==Ue&&i.a.createElement(x.PanelBody,{title:"Separator",initialOpen:!1},i.a.createElement(i.a.Fragment,null,"none"!==Ue&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:O,value:Re,onChange:function(e){return O({seperatorWidth:e})},min:0,max:"%"==Te?100:500,unit:{value:Te,label:"separatorWidthType"},units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),i.a.createElement(f.a,{label:Object(o.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:O,value:Ge,onChange:function(e){return O({seperatorThickness:e})},min:0,max:10,unit:{value:Ve,label:"thicknessUnit"}})),i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:De||"",onColorChange:function(e){return O({seperatorColor:e})}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Se,label:"seperatorSpace"},tablet:{value:ye,label:"seperatorTabletSpace"},mobile:{value:we,label:"seperatorMobileSpace"}},min:0,max:50,unit:{value:hn,label:"seperatorSpaceUnit"},setAttributes:O}))),un&&i.a.createElement(x.PanelBody,{title:"Description",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:function(e){return O({subHeadingColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:O,loadGoogleFonts:{value:xe,label:"subHeadLoadGoogleFonts"},fontFamily:{value:ce,label:"subHeadFontFamily"},fontWeight:{value:ge,label:"subHeadFontWeight"},fontSubset:{value:pe,label:"subHeadFontSubset"},fontSizeType:{value:be,label:"subHeadFontSizeType"},fontSize:{value:re,label:"subHeadFontSize"},fontSizeMobile:{value:de,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ue,label:"subHeadFontSizeTablet"},lineHeightType:{value:se,label:"subHeadLineHeightType"},lineHeight:{value:fe,label:"subHeadLineHeight"},lineHeightMobile:{value:_e,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:me,label:"subHeadLineHeightTablet"},transform:{value:he,label:"subHeadLineTransform"},decoration:{value:ve,label:"subHeadLineDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Ce,label:"subHeadSpace"},tablet:{value:xn,label:"subHeadTabletSpace"},mobile:{value:Tn,label:"subHeadMobileSpace"}},min:0,max:50,unit:{value:vn,label:"subHeadSpaceUnit"},setAttributes:O}))),dn&&"text"===Ne&&i.a.createElement(x.PanelBody,{title:"CTA",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ze||"",onColorChange:function(e){return O({ctaLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:ct||"",onColorChange:function(e){return O({ctaLinkHoverColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:O,loadGoogleFonts:{value:ut,label:"ctaLoadGoogleFonts"},fontFamily:{value:it,label:"ctaFontFamily"},fontWeight:{value:rt,label:"ctaFontWeight"},fontSubset:{value:bt,label:"ctaFontSubset"},fontSizeType:{value:tt,label:"ctaFontSizeType"},fontSize:{value:et,label:"ctaFontSize"},fontSizeMobile:{value:nt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:at,label:"ctaFontSizeTablet"},transform:{value:ot,label:"ctaTextTransform"},decoration:{value:lt,label:"ctaTextDecoration"},disableLineHeight:!0}))),!dn&&"none"!==Ne&&"all"!==Ne&&i.a.createElement(x.PanelBody,{title:"CTA",initialOpen:!1},i.a.createElement(i.a.Fragment,null,"text"===Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ze||"",onColorChange:function(e){return O({ctaLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:ct||"",onColorChange:function(e){return O({ctaLinkHoverColor:e})}})),!dn&&"button"===Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Button Text Color","ultimate-addons-for-gutenberg"),colorValue:dt||"",onColorChange:function(e){return O({ctaBtnLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Button Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:ct||"",onColorChange:function(e){return O({ctaLinkHoverColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:pt||"",onColorChange:function(e){return O({ctaBgColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Background Hover Color","ultimate-addons-for-gutenberg"),colorValue:gt||"",onColorChange:function(e){return O({ctaBgHoverColor:e})}})),"text"===Ne&&i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:O,loadGoogleFonts:{value:ut,label:"ctaLoadGoogleFonts"},fontFamily:{value:it,label:"ctaFontFamily"},fontWeight:{value:rt,label:"ctaFontWeight"},fontSubset:{value:bt,label:"ctaFontSubset"},fontSizeType:{value:tt,label:"ctaFontSizeType"},fontSize:{value:et,label:"ctaFontSize"},fontSizeMobile:{value:nt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:at,label:"ctaFontSizeTablet"},transform:{value:ot,label:"ctaTextTransform"},decoration:{value:lt,label:"ctaTextDecoration"},disableLineHeight:!0}),!dn&&"button"===Ne&&i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:j,setAttributes:O,loadGoogleFonts:{value:ut,label:"ctaLoadGoogleFonts"},fontFamily:{value:it,label:"ctaFontFamily"},fontWeight:{value:rt,label:"ctaFontWeight"},fontSubset:{value:bt,label:"ctaFontSubset"},fontSizeType:{value:tt,label:"ctaFontSizeType"},fontSize:{value:et,label:"ctaFontSize"},fontSizeMobile:{value:nt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:at,label:"ctaFontSizeTablet"},transform:{value:ot,label:"ctaTextTransform"},decoration:{value:lt,label:"ctaTextDecoration"},disableLineHeight:!0}),!dn&&"button"==Ne&&i.a.createElement(s.a,T({},e,{label:Object(o.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:_t,label:"paddingBtnTop"},valueRight:{value:xt,label:"paddingBtnRight"},valueBottom:{value:ht,label:"paddingBtnBottom"},valueLeft:{value:vt,label:"paddingBtnLeft"},valueTopTablet:{value:Tt,label:"paddingBtnTopTablet"},valueRightTablet:{value:St,label:"paddingBtnRightTablet"},valueBottomTablet:{value:yt,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:wt,label:"paddingBtnLeftTablet"},valueTopMobile:{value:Ft,label:"paddingBtnTopMobile"},valueRightMobile:{value:Ot,label:"paddingBtnRightMobile"},valueBottomMobile:{value:jt,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:Ct,label:"paddingBtnLeftMobile"},unit:{value:st,label:"paddingBtnUnit"},mUnit:{value:ft,label:"mobilePaddingBtnUnit"},tUnit:{value:mt,label:"tabletPaddingBtnUnit"},deviceType:C,attributes:j,setAttributes:O,link:{value:gn,label:"paddingspacingLink"}})),!dn&&"button"==Ne&&i.a.createElement(d.a,{setAttributes:O,borderStyle:{value:Et,label:"ctaBorderStyle",title:Object(o.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Mt,label:"ctaBorderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:zt,label:"ctaBorderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Ht,label:"ctaBorderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Bt,label:"ctaBorderhoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")}}))))),i.a.createElement(p.b,p.a.advance))),i.a.createElement(l.Suspense,{fallback:Object(r.a)()},t,n,y,w))};t.default=i.a.memo(y)}}]);