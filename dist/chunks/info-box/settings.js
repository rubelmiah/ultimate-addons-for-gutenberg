(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[63],{270:function(e,t,n){"use strict";var a=n(15),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n',""]),t.a=o},274:function(e,t,n){"use strict";var a,o=n(97),l=n.n(o),i=n(1),r=n.n(i),b=n(14),u=n.n(b),d=n(270),c=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},s={};s.locals=d.a.locals||{},s.use=function(){return c++||(a=u()(d.a,g)),s},s.unuse=function(){c>0&&!--c&&(a(),a=null)};var p=s,f=n(12),m=n(2);t.a=function(e){return Object(i.useLayoutEffect)((function(){return p.use(),function(){p.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("label",{className:"components-base-control__label uag-icon-picker__label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(l.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},515:function(e,t,n){"use strict";n.r(t);var a=n(274),o=n(2),l=n(1),i=n.n(l),r=n(10),b=n(18),u=n(51),d=n(109),c=n(17),g=n(98),s=n(39),p=n(99),f=n(16),m=n(117),_=n(5),h=n(4);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}$=jQuery;var x=[{value:"thumbnail",label:Object(o.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")}],T=function(e){var t=e=e.parentProps,n=t.setAttributes,T=t.attributes,S=t.deviceType,y=T.headingAlign,w=T.headingColor,C=T.subHeadingColor,O=T.prefixColor,j=T.prefixFontSize,F=T.prefixFontSizeType,E=T.prefixFontSizeTablet,B=T.prefixFontSizeMobile,H=T.prefixFontFamily,M=T.prefixFontWeight,z=T.prefixFontSubset,L=T.prefixLineHeightType,k=T.prefixLineHeight,I=T.prefixLineHeightTablet,P=T.prefixLineHeightMobile,W=T.prefixTextTransform,A=T.prefixTextDecoration,U=T.prefixLoadGoogleFonts,R=T.headingTag,D=T.headFontSize,G=T.headFontSizeType,V=T.headFontSizeTablet,N=T.headFontSizeMobile,J=T.headFontFamily,Q=T.headFontWeight,q=T.headFontSubset,K=T.headLineHeightType,X=T.headLineHeight,Y=T.headLineHeightTablet,Z=T.headLineHeightMobile,ee=T.headLoadGoogleFonts,te=T.subHeadFontSize,ne=T.subHeadFontSizeType,ae=T.subHeadFontSizeTablet,oe=T.subHeadFontSizeMobile,le=T.subHeadFontFamily,ie=T.subHeadFontWeight,re=T.subHeadFontSubset,be=T.subHeadLineHeightType,ue=T.subHeadLineHeight,de=T.subHeadLineHeightTablet,ce=T.subHeadLineHeightMobile,ge=T.subHeadLineTransform,se=T.subHeadLineDecoration,pe=T.subHeadLoadGoogleFonts,fe=T.separatorWidthType,me=T.seperatorSpace,_e=T.seperatorTabletSpace,he=T.seperatorMobileSpace,ve=T.headSpace,xe=T.headTabletSpace,Te=T.headMobileSpace,Se=T.subHeadSpace,ye=T.icon,we=T.iconColor,Ce=T.iconSize,Oe=T.iconSizeType,je=T.iconimgPosition,Fe=T.iconHover,Ee=T.iconimgBorderRadius,Be=T.iconimgBorderRadiusUnit,He=T.source_type,Me=T.sourceAlign,ze=T.seperatorPosition,Le=T.seperatorStyle,ke=T.seperatorWidth,Ie=T.seperatorColor,Pe=T.seperatorThickness,We=T.thicknessUnit,Ae=T.ctaType,Ue=T.ctaText,Re=T.ctaLink,De=T.ctaTarget,Ge=T.ctaIcon,Ve=T.ctaIconPosition,Ne=T.ctaIconSpace,Je=T.ctaIconSpaceType,$e=T.ctaLinkColor,Qe=T.ctaFontSize,qe=T.ctaFontSizeType,Ke=T.ctaFontSizeMobile,Xe=T.ctaFontSizeTablet,Ye=T.ctaTextTransform,Ze=T.ctaTextDecoration,et=T.ctaFontFamily,tt=T.ctaFontWeight,nt=T.ctaFontSubset,at=T.ctaLoadGoogleFonts,ot=T.ctaBtnLinkColor,lt=T.ctaLinkHoverColor,it=T.ctaBgHoverColor,rt=T.ctaBgColor,bt=T.paddingBtnUnit,ut=T.mobilePaddingBtnUnit,dt=T.tabletPaddingBtnUnit,ct=T.paddingBtnTop,gt=T.paddingBtnBottom,st=T.paddingBtnLeft,pt=T.paddingBtnRight,ft=T.paddingBtnTopTablet,mt=T.paddingBtnRightTablet,_t=T.paddingBtnBottomTablet,ht=T.paddingBtnLeftTablet,vt=T.paddingBtnTopMobile,xt=T.paddingBtnRightMobile,Tt=T.paddingBtnBottomMobile,St=T.paddingBtnLeftMobile,yt=T.ctaBorderStyle,wt=T.ctaBorderColor,Ct=T.ctaBorderhoverColor,Ot=T.ctaBorderWidth,jt=T.ctaBorderRadius,Ft=T.prefixSpace,Et=T.prefixTabletSpace,Bt=T.prefixMobileSpace,Ht=T.iconLeftMargin,Mt=T.iconRightMargin,zt=T.iconTopMargin,Lt=T.iconBottomMargin,kt=T.iconMarginTopTablet,It=T.iconMarginRightTablet,Pt=T.iconMarginBottomTablet,Wt=T.iconMarginLeftTablet,At=T.iconMarginTopMobile,Ut=T.iconMarginRightMobile,Rt=T.iconMarginBottomMobile,Dt=T.iconMarginLeftMobile,Gt=T.iconMarginUnit,Vt=T.iconMobilePaddingUnit,Nt=T.iconTabletPaddingUnit,Jt=T.iconImage,$t=T.imageSize,Qt=T.imageWidth,qt=T.imageWidthMobile,Kt=T.imageWidthTablet,Xt=T.imageWidthType,Yt=T.imageWidthUnit,Zt=T.stack,en=T.showPrefix,tn=T.showTitle,nn=T.showDesc,an=T.inheritFromTheme,on=T.spacingLink,ln=T.headLineTransform,rn=T.headLineDecoration,bn=T.prefixSpaceUnit,un=T.headSpaceUnit,dn=T.seperatorSpaceUnit,cn=T.subHeadSpaceUnit,gn=T.subHeadTabletSpace,sn=T.subHeadMobileSpace,pn=function(e){var t=[];return $.each(e,(function(e){var n={value:e,label:e};t.push(n)})),t};Jt&&Jt.sizes&&(x=pn(Jt.sizes));var fn,mn,hn,vn,xn=Object(o.__)("Select Image","ultimate-addons-for-gutenberg");if(Jt&&(xn=null==Jt.url||""==Jt.url?Object(o.__)("Select Image","ultimate-addons-for-gutenberg"):Object(o.__)("Replace Image","ultimate-addons-for-gutenberg")),1==U){var Tn={google:{families:[H+(M?":"+M:"")]}};fn=i.a.createElement(u.a,{config:Tn})}if(1==ee){var Sn={google:{families:[J+(Q?":"+Q:"")]}};vn=i.a.createElement(u.a,{config:Sn})}if(1==pe){var yn={google:{families:[le+(ie?":"+ie:"")]}};mn=i.a.createElement(u.a,{config:yn})}if(1==pe){var wn={google:{families:[et+(tt?":"+tt:"")]}};hn=i.a.createElement(u.a,{config:wn})}return i.a.createElement(i.a.Fragment,null,("above-title"==je||"below-title"==je)&&i.a.createElement(_.BlockControls,{key:"controls"},i.a.createElement(_.AlignmentToolbar,{value:y,onChange:function(e){return n({headingAlign:e})}})),i.a.createElement(_.InspectorControls,null,i.a.createElement(g.a,null,i.a.createElement(s.b,s.a.general,i.a.createElement(h.PanelBody,{title:Object(o.__)("Image/Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(h.SelectControl,{label:Object(o.__)("Select Position","ultimate-addons-for-gutenberg"),value:je,onChange:function(e){return n({iconimgPosition:e})},options:[{value:"above-title",label:Object(o.__)("Above Title","ultimate-addons-for-gutenberg")},{value:"below-title",label:Object(o.__)("Below Title","ultimate-addons-for-gutenberg")},{value:"left-title",label:Object(o.__)("Left of Title","ultimate-addons-for-gutenberg")},{value:"right-title",label:Object(o.__)("Right of Title","ultimate-addons-for-gutenberg")},{value:"left",label:Object(o.__)("Left of Text and Title","ultimate-addons-for-gutenberg")},{value:"right",label:Object(o.__)("Right of Text and Title","ultimate-addons-for-gutenberg")}]}),("left"==je||"right"==je)&&i.a.createElement(h.SelectControl,{label:Object(o.__)("Stack on","ultimate-addons-for-gutenberg"),value:Zt,options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(o.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(o.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(o.__)("Note: Choose on what breakpoint the Info Box will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return n({stack:e})}}),i.a.createElement(h.SelectControl,{label:Object(o.__)("Select Source","ultimate-addons-for-gutenberg"),value:He,onChange:function(e){return n({source_type:e})},options:[{value:"icon",label:Object(o.__)("Icon","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")}]}),je&&"above-title"!==je&&"below-title"!==je&&i.a.createElement(h.SelectControl,{label:Object(o.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),value:Me,onChange:function(e){return n({sourceAlign:e})},options:[{value:"top",label:Object(o.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(o.__)("Middle","ultimate-addons-for-gutenberg")}]}),"icon"==He&&i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{label:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),value:ye,onChange:function(e){return n({icon:e})}})),"image"==He&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.BaseControl,{className:"editor-bg-image-control",label:Object(o.__)("Image","ultimate-addons-for-gutenberg"),id:Object(o.__)("Image","ultimate-addons-for-gutenberg")},i.a.createElement("div",{className:"uagb-bg-image"},i.a.createElement(_.MediaUpload,{title:Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),onSelect:function(e){if(e&&e.url)if(e.type&&"image"===e.type){if(e.sizes){var t=pn(e.sizes);x=t}n({iconImage:e})}else n({iconImage:null});else n({iconImage:null})},allowedTypes:["image"],value:Jt,render:function(e){var t=e.open;return i.a.createElement(h.Button,{isSecondary:!0,onClick:t},xn)}})),Jt&&"null"!==Jt.url&&""!==Jt.url&&i.a.createElement(h.Button,{className:"uagb-rm-btn",onClick:function(){n({iconImage:""})},isLink:!0,isDestructive:!0},Object(o.__)("Remove Image","ultimate-addons-for-gutenberg"))),Jt&&"null"!==Jt.url&&""!==Jt.url&&i.a.createElement(h.SelectControl,{label:Object(o.__)("Image Size","ultimate-addons-for-gutenberg"),options:x,value:$t,onChange:function(e){return n({imageSize:e})}}))),i.a.createElement(h.PanelBody,{title:Object(o.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(h.ToggleControl,{checked:en,onChange:function(){return n({showPrefix:!en})},label:Object(o.__)("Enable Prefix","ultimate-addons-for-gutenberg")}),i.a.createElement(h.ToggleControl,{checked:tn,onChange:function(){return n({showTitle:!tn})},label:Object(o.__)("Enable Title","ultimate-addons-for-gutenberg")}),tn&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.SelectControl,{label:Object(o.__)("Title Tag","ultimate-addons-for-gutenberg"),value:R,onChange:function(e){return n({headingTag:e})},options:[{value:"h1",label:Object(o.__)("H1")},{value:"h2",label:Object(o.__)("H2")},{value:"h3",label:Object(o.__)("H3")},{value:"h4",label:Object(o.__)("H4")},{value:"h5",label:Object(o.__)("H5")},{value:"h6",label:Object(o.__)("H6")}]})),i.a.createElement(h.ToggleControl,{checked:nn,onChange:function(){return n({showDesc:!nn})},label:Object(o.__)("Enable Description","ultimate-addons-for-gutenberg")})),i.a.createElement(h.PanelBody,{title:Object(o.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(h.SelectControl,{label:Object(o.__)("Style"),value:Le,onChange:function(e){return n({seperatorStyle:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(o.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(o.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(o.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(o.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==Le&&i.a.createElement(h.SelectControl,{label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return n({seperatorPosition:e})},options:[{value:"after_icon",label:Object(o.__)("After Icon/Image","ultimate-addons-for-gutenberg")},{value:"after_prefix",label:Object(o.__)("After Prefix","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(o.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_desc",label:Object(o.__)("After Description","ultimate-addons-for-gutenberg")}]})),i.a.createElement(h.PanelBody,{title:Object(o.__)("Call To Action","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(h.SelectControl,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:Ae,onChange:function(e){return n({ctaType:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"text",label:Object(o.__)("Text","ultimate-addons-for-gutenberg")},{value:"button",label:Object(o.__)("Button","ultimate-addons-for-gutenberg")},{value:"all",label:Object(o.__)("Complete Box","ultimate-addons-for-gutenberg")}]}),("text"===Ae||"button"===Ae)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.TextControl,{label:Object(o.__)("Text","ultimate-addons-for-gutenberg"),value:Ue,onChange:function(e){return n({ctaText:e})}})),"none"!==Ae&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.TextControl,{label:Object(o.__)("Link","ultimate-addons-for-gutenberg"),value:Re,onChange:function(e){return n({ctaLink:e})}})),"all"!==Ae&&"none"!==Ae&&i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{label:Object(o.__)("Button Icon","ultimate-addons-for-gutenberg"),value:Ge,onChange:function(e){return n({ctaIcon:e})}})),""!==Ge&&"all"!==Ae&&"none"!==Ae&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.SelectControl,{label:Object(o.__)("Icon Position","ultimate-addons-for-gutenberg"),value:Ve,onChange:function(e){return n({ctaIconPosition:e})},options:[{value:"before",label:Object(o.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(o.__)("After Text","ultimate-addons-for-gutenberg")}]}),i.a.createElement(f.a,{label:Object(o.__)("Icon Spacing","ultimate-addons-for-gutenberg"),setAttributes:n,value:Ne,onChange:function(e){return n({ctaIconSpace:e})},min:0,max:50,unit:{value:Je,label:"ctaIconSpaceType"}})),"button"===Ae&&i.a.createElement(h.ToggleControl,{checked:an,onChange:function(){return n({inheritFromTheme:!an})},label:Object(o.__)("Inherit from Theme","ultimate-addons-for-gutenberg")}),"none"!==Ae&&i.a.createElement(h.ToggleControl,{checked:De,onChange:function(){return n({ctaTarget:!De})},label:Object(o.__)("Open in new Window","ultimate-addons-for-gutenberg")}))),i.a.createElement(s.b,s.a.style,i.a.createElement(i.a.Fragment,null,""!==ye&&i.a.createElement(h.PanelBody,{title:"Icon/Image",initialOpen:!1},i.a.createElement(i.a.Fragment,null," ","icon"==He&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:we||"",onColorChange:function(e){return n({iconColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg"),colorValue:Fe||"",onColorChange:function(e){return n({iconHover:e})}}),i.a.createElement(f.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:n,value:Ce,onChange:function(e){return n({iconSize:e})},min:0,max:300,unit:{value:Oe,label:"iconSizeType"}})),"image"==He&&Jt&&"null"!==Jt.url&&""!==Jt.url&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.ToggleControl,{checked:Xt,onChange:function(){return n({imageWidthType:!Xt})},label:Object(o.__)("Custom Width","ultimate-addons-for-gutenberg"),help:Object(o.__)("Turn this off to inherit the natural width of Image.","ultimate-addons-for-gutenberg")}),Xt&&i.a.createElement(m.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:Qt,label:"imageWidth"},tablet:{value:Kt,label:"imageWidthTablet"},mobile:{value:qt,label:"imageWidthMobile"}},min:0,max:500,unit:{value:Yt,label:"imageWidthUnit"},setAttributes:n}),i.a.createElement(f.a,{label:Object(o.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),setAttributes:n,value:Ee,onChange:function(e){return n({iconimgBorderRadius:e})},min:0,max:500,unit:{value:Be,label:"iconimgBorderRadiusUnit"}})),i.a.createElement(p.a,v({},e,{label:Object(o.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:zt,label:"iconTopMargin"},valueRight:{value:Mt,label:"iconRightMargin"},valueBottom:{value:Lt,label:"iconBottomMargin"},valueLeft:{value:Ht,label:"iconLeftMargin"},valueTopTablet:{value:kt,label:"iconMarginTopTablet"},valueRightTablet:{value:It,label:"iconMarginRightTablet"},valueBottomTablet:{value:Pt,label:"iconMarginBottomTablet"},valueLeftTablet:{value:Wt,label:"iconMarginLeftTablet"},valueTopMobile:{value:At,label:"iconMarginTopMobile"},valueRightMobile:{value:Ut,label:"iconMarginRightMobile"},valueBottomMobile:{value:Rt,label:"iconMarginBottomMobile"},valueLeftMobile:{value:Dt,label:"iconMarginLeftMobile"},unit:{value:Gt,label:"iconMarginUnit"},mUnit:{value:Vt,label:"iconMobilePaddingUnit"},tUnit:{value:Nt,label:"iconTabletPaddingUnit"},deviceType:S,attributes:T,setAttributes:n,link:{value:on,label:"spacingLink"}})))),en&&i.a.createElement(h.PanelBody,{title:"Prefix",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:O||"",onColorChange:function(e){return n({prefixColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:T,setAttributes:n,loadGoogleFonts:{value:U,label:"prefixLoadGoogleFonts"},fontFamily:{value:H,label:"prefixFontFamily"},fontWeight:{value:M,label:"prefixFontWeight"},fontSubset:{value:z,label:"prefixFontSubset"},fontSizeType:{value:F,label:"prefixFontSizeType"},fontSize:{value:j,label:"prefixFontSize"},fontSizeMobile:{value:B,label:"prefixFontSizeMobile"},fontSizeTablet:{value:E,label:"prefixFontSizeTablet"},lineHeightType:{value:L,label:"prefixLineHeightType"},lineHeight:{value:k,label:"prefixLineHeight"},lineHeightMobile:{value:P,label:"prefixLineHeightMobile"},lineHeightTablet:{value:I,label:"prefixLineHeightTablet"},transform:{value:W,label:"prefixTextTransform"},decoration:{value:A,label:"prefixTextDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Ft,label:"prefixSpace"},tablet:{value:Et,label:"prefixTabletSpace"},mobile:{value:Bt,label:"prefixMobileSpace"}},min:0,max:50,unit:{value:bn,label:"prefixSpaceUnit"},setAttributes:n}))),tn&&i.a.createElement(h.PanelBody,{title:"Title",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:w||"",onColorChange:function(e){return n({headingColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:T,setAttributes:n,loadGoogleFonts:{value:ee,label:"headLoadGoogleFonts"},fontFamily:{value:J,label:"headFontFamily"},fontWeight:{value:Q,label:"headFontWeight"},fontSubset:{value:q,label:"headFontSubset"},fontSizeType:{value:G,label:"headFontSizeType"},fontSize:{value:D,label:"headFontSize"},fontSizeMobile:{value:N,label:"headFontSizeMobile"},fontSizeTablet:{value:V,label:"headFontSizeTablet"},lineHeightType:{value:K,label:"headLineHeightType"},lineHeight:{value:X,label:"headLineHeight"},lineHeightMobile:{value:Z,label:"headLineHeightMobile"},lineHeightTablet:{value:Y,label:"headLineHeightTablet"},transform:{value:ln,label:"headLineTransform"},decoration:{value:rn,label:"headLineDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:ve,label:"headSpace"},tablet:{value:xe,label:"headTabletSpace"},mobile:{value:Te,label:"headMobileSpace"}},min:0,max:50,unit:{value:un,label:"headSpaceUnit"},setAttributes:n}))),"null"!==Le&&i.a.createElement(h.PanelBody,{title:"Separator",initialOpen:!1},i.a.createElement(i.a.Fragment,null,"none"!==Le&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:n,value:ke,onChange:function(e){return n({seperatorWidth:e})},min:0,max:"%"==fe?100:500,unit:{value:fe,label:"separatorWidthType"},units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),i.a.createElement(f.a,{label:Object(o.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:n,value:Pe,onChange:function(e){return n({seperatorThickness:e})},min:0,max:10,unit:{value:We,label:"thicknessUnit"}})),i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:Ie||"",onColorChange:function(e){return n({seperatorColor:e})}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:me,label:"seperatorSpace"},tablet:{value:_e,label:"seperatorTabletSpace"},mobile:{value:he,label:"seperatorMobileSpace"}},min:0,max:50,unit:{value:dn,label:"seperatorSpaceUnit"},setAttributes:n}))),nn&&i.a.createElement(h.PanelBody,{title:"Description",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:C||"",onColorChange:function(e){return n({subHeadingColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:T,setAttributes:n,loadGoogleFonts:{value:pe,label:"subHeadLoadGoogleFonts"},fontFamily:{value:le,label:"subHeadFontFamily"},fontWeight:{value:ie,label:"subHeadFontWeight"},fontSubset:{value:re,label:"subHeadFontSubset"},fontSizeType:{value:ne,label:"subHeadFontSizeType"},fontSize:{value:te,label:"subHeadFontSize"},fontSizeMobile:{value:oe,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ae,label:"subHeadFontSizeTablet"},lineHeightType:{value:be,label:"subHeadLineHeightType"},lineHeight:{value:ue,label:"subHeadLineHeight"},lineHeightMobile:{value:ce,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:de,label:"subHeadLineHeightTablet"},transform:{value:ge,label:"subHeadLineTransform"},decoration:{value:se,label:"subHeadLineDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Se,label:"subHeadSpace"},tablet:{value:gn,label:"subHeadTabletSpace"},mobile:{value:sn,label:"subHeadMobileSpace"}},min:0,max:50,unit:{value:cn,label:"subHeadSpaceUnit"},setAttributes:n}))),an&&"text"===Ae&&i.a.createElement(h.PanelBody,{title:"CTA",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:$e||"",onColorChange:function(e){return n({ctaLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:lt||"",onColorChange:function(e){return n({ctaLinkHoverColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:T,setAttributes:n,loadGoogleFonts:{value:at,label:"ctaLoadGoogleFonts"},fontFamily:{value:et,label:"ctaFontFamily"},fontWeight:{value:tt,label:"ctaFontWeight"},fontSubset:{value:nt,label:"ctaFontSubset"},fontSizeType:{value:qe,label:"ctaFontSizeType"},fontSize:{value:Qe,label:"ctaFontSize"},fontSizeMobile:{value:Ke,label:"ctaFontSizeMobile"},fontSizeTablet:{value:Xe,label:"ctaFontSizeTablet"},transform:{value:Ye,label:"ctaTextTransform"},decoration:{value:Ze,label:"ctaTextDecoration"},disableLineHeight:!0}))),!an&&"none"!==Ae&&"all"!==Ae&&i.a.createElement(h.PanelBody,{title:"CTA",initialOpen:!1},i.a.createElement(i.a.Fragment,null,"text"===Ae&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:$e||"",onColorChange:function(e){return n({ctaLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:lt||"",onColorChange:function(e){return n({ctaLinkHoverColor:e})}})),!an&&"button"===Ae&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Button Text Color","ultimate-addons-for-gutenberg"),colorValue:ot||"",onColorChange:function(e){return n({ctaBtnLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Button Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:lt||"",onColorChange:function(e){return n({ctaLinkHoverColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:rt||"",onColorChange:function(e){return n({ctaBgColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Background Hover Color","ultimate-addons-for-gutenberg"),colorValue:it||"",onColorChange:function(e){return n({ctaBgHoverColor:e})}})),"text"===Ae&&i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:T,setAttributes:n,loadGoogleFonts:{value:at,label:"ctaLoadGoogleFonts"},fontFamily:{value:et,label:"ctaFontFamily"},fontWeight:{value:tt,label:"ctaFontWeight"},fontSubset:{value:nt,label:"ctaFontSubset"},fontSizeType:{value:qe,label:"ctaFontSizeType"},fontSize:{value:Qe,label:"ctaFontSize"},fontSizeMobile:{value:Ke,label:"ctaFontSizeMobile"},fontSizeTablet:{value:Xe,label:"ctaFontSizeTablet"},transform:{value:Ye,label:"ctaTextTransform"},decoration:{value:Ze,label:"ctaTextDecoration"},disableLineHeight:!0}),!an&&"button"===Ae&&i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:T,setAttributes:n,loadGoogleFonts:{value:at,label:"ctaLoadGoogleFonts"},fontFamily:{value:et,label:"ctaFontFamily"},fontWeight:{value:tt,label:"ctaFontWeight"},fontSubset:{value:nt,label:"ctaFontSubset"},fontSizeType:{value:qe,label:"ctaFontSizeType"},fontSize:{value:Qe,label:"ctaFontSize"},fontSizeMobile:{value:Ke,label:"ctaFontSizeMobile"},fontSizeTablet:{value:Xe,label:"ctaFontSizeTablet"},transform:{value:Ye,label:"ctaTextTransform"},decoration:{value:Ze,label:"ctaTextDecoration"},disableLineHeight:!0}),!an&&"button"==Ae&&i.a.createElement(p.a,v({},e,{label:Object(o.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:ct,label:"paddingBtnTop"},valueRight:{value:pt,label:"paddingBtnRight"},valueBottom:{value:gt,label:"paddingBtnBottom"},valueLeft:{value:st,label:"paddingBtnLeft"},valueTopTablet:{value:ft,label:"paddingBtnTopTablet"},valueRightTablet:{value:mt,label:"paddingBtnRightTablet"},valueBottomTablet:{value:_t,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:ht,label:"paddingBtnLeftTablet"},valueTopMobile:{value:vt,label:"paddingBtnTopMobile"},valueRightMobile:{value:xt,label:"paddingBtnRightMobile"},valueBottomMobile:{value:Tt,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:St,label:"paddingBtnLeftMobile"},unit:{value:bt,label:"paddingBtnUnit"},mUnit:{value:ut,label:"mobilePaddingBtnUnit"},tUnit:{value:dt,label:"tabletPaddingBtnUnit"},deviceType:S,attributes:T,setAttributes:n,link:{value:on,label:"spacingLink"}})),!an&&"button"==Ae&&i.a.createElement(d.a,{setAttributes:n,borderStyle:{value:yt,label:"ctaBorderStyle",title:Object(o.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Ot,label:"ctaBorderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:jt,label:"ctaBorderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:wt,label:"ctaBorderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Ct,label:"ctaBorderhoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")}}))))),i.a.createElement(s.b,s.a.advance))),i.a.createElement(l.Suspense,{fallback:Object(r.a)()},fn,mn,hn,vn))};t.default=i.a.memo(T)}}]);