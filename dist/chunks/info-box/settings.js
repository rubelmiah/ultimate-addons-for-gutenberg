(window.webpackJsonp_ultimate_addons_for_gutenberg=window.webpackJsonp_ultimate_addons_for_gutenberg||[]).push([[16],{223:function(e,t,n){"use strict";var a=n(12),o=n.n(a)()((function(e){return e[1]}));o.push([e.i,'/*#######################################################################################*/\n/**\r\n * google-material-color v1.2.6\r\n * https://github.com/danlevan/google-material-color\r\n */\n.rfipbtn--default {\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipbtn--default:active, .rfipbtn--default:focus {\n    box-shadow: 0 1.5px 4px rgba(0, 0, 0, 0.24), 0 1.5px 6px rgba(0, 0, 0, 0.12);\n    border: 1px solid #bdbdbd; }\n  .rfipbtn--default .rfipbtn__button {\n    border: 0 none transparent;\n    border-left: 1px solid #e0e0e0;\n    background-color: #f5f5f5;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__button:hover {\n      background-color: #bdbdbd; }\n    .rfipbtn--default .rfipbtn__button:active {\n      box-shadow: inset 0 0 10px 0 #e0e0e0; }\n  .rfipbtn--default .rfipbtn__icon {\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipbtn--default .rfipbtn__icon--empty {\n      color: #e0e0e0; }\n  .rfipbtn--default .rfipbtn__del {\n    background-color: #eeeeee; }\n    .rfipbtn--default .rfipbtn__del:hover {\n      background-color: #e0e0e0; }\n    .rfipbtn--default .rfipbtn__del:focus, .rfipbtn--default .rfipbtn__del:active {\n      outline: 1px solid #e0e0e0; }\n\n.rfipdropdown--default {\n  box-shadow: 0 15px 24px rgba(0, 0, 0, 0.22), 0 19px 76px rgba(0, 0, 0, 0.3);\n  color: #424242;\n  background-color: #ffffff;\n  border: 1px solid #e0e0e0; }\n  .rfipdropdown--default input,\n  .rfipdropdown--default select {\n    color: #424242; }\n  .rfipdropdown--default .rfipcategory select {\n    background-color: #ffffff;\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipcategory select:focus, .rfipdropdown--default .rfipcategory select:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__cp {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipicons__cp:focus, .rfipdropdown--default .rfipicons__cp:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n  .rfipdropdown--default .rfipicons__left, .rfipdropdown--default .rfipicons__right {\n    background-color: #eeeeee;\n    border: 1px solid #eeeeee;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__left:hover, .rfipdropdown--default .rfipicons__right:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__left:focus, .rfipdropdown--default .rfipicons__left:active, .rfipdropdown--default .rfipicons__right:focus, .rfipdropdown--default .rfipicons__right:active {\n      border: 1px solid #bdbdbd; }\n  .rfipdropdown--default .rfipicons__ibox {\n    background-color: #f5f5f5;\n    border: 1px solid #f5f5f5;\n    color: #424242; }\n    .rfipdropdown--default .rfipicons__ibox:hover {\n      background-color: #bdbdbd;\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox:focus, .rfipdropdown--default .rfipicons__ibox:active {\n      border: 1px solid #bdbdbd; }\n    .rfipdropdown--default .rfipicons__ibox--error {\n      color: #ef9a9a; }\n  .rfipdropdown--default .rfipsearch input {\n    border: 0 none;\n    border-bottom: 1px solid #bdbdbd;\n    transition: box-shadow 250ms, border 250ms; }\n    .rfipdropdown--default .rfipsearch input:focus, .rfipdropdown--default .rfipsearch input:active {\n      border-bottom-color: #9e9e9e;\n      box-shadow: 0 1px 0 0 #9e9e9e;\n      outline: 0 none; }\n\n.rfipbtn,\n.rfipdropdown {\n  margin: 0;\n  padding: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",\r "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",\r "Helvetica Neue", sans-serif;\n  font-size: 14px;\n  line-height: 1.71429;\n  vertical-align: baseline;\n  box-sizing: border-box; }\n  .rfipbtn *,\n  .rfipdropdown * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0; }\n  .rfipbtn input,\n  .rfipbtn select,\n  .rfipdropdown input,\n  .rfipdropdown select {\n    font-size: 14px; }\n\n.rfip {\n  position: relative;\n  display: inline-block;\n  margin: 8px;\n  vertical-align: middle;\n  width: 100%; }\n\n.rfipbtn {\n  width: 100%;\n  display: flex;\n  flex-flow: row nowrap;\n  min-height: 50px;\n  border-radius: 2px;\n  cursor: pointer;\n  transition: box-shadow 250ms, border-color 250ms;\n  outline: 0 none;\n  user-select: none; }\n  .rfipbtn--open {\n    border-radius: 2px 2px 0 0; }\n  .rfipbtn__button {\n    width: 48px;\n    margin-left: auto;\n    display: flex;\n    align-items: center;\n    /* x axis center */\n    justify-content: center;\n    /* y axis center */\n    height: auto;\n    /* auto height to fix the flex */\n    transition: background 250ms, box-shadow 250ms; }\n    .rfipbtn__button i {\n      font-size: 32px;\n      transition: transform 250ms; }\n    .rfipbtn__button--open i {\n      transform: rotate(-180deg); }\n  .rfipbtn__current {\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: center;\n    flex: 0 0 86px;\n    padding: 2px; }\n  .rfipbtn--multi {\n    width: 258px; }\n    .rfipbtn--multi .rfipbtn__current {\n      flex-flow: row wrap;\n      justify-content: flex-start;\n      flex-basis: 212px;\n      align-content: center; }\n  .rfipbtn__icon {\n    margin: 2px;\n    padding: 0;\n    height: 28px;\n    width: 48px;\n    display: flex;\n    flex-flow: row nowrap;\n    align-items: center;\n    justify-content: space-between;\n    border-radius: 2px; }\n    .rfipbtn__icon--empty {\n      font-size: 14px;\n      line-height: 16px;\n      margin-left: 8px;\n      text-align: center;\n      text-transform: lowercase;\n      font-style: italic; }\n  .rfipbtn__elm {\n    display: flex;\n    height: 28px;\n    width: 28px;\n    align-items: center;\n    justify-content: center;\n    font-size: 18px; }\n    .rfipbtn__elm img,\n    .rfipbtn__elm svg {\n      height: 18px;\n      width: auto; }\n  .rfipbtn__del {\n    width: 18px;\n    display: flex;\n    height: 28px;\n    align-items: center;\n    justify-content: center;\n    transition: background-color 250ms;\n    cursor: pointer; }\n\n.rfipcategory {\n  width: 100%;\n  margin: 0 0 8px;\n  position: relative; }\n  .rfipcategory select {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px;\n    border-radius: 0;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: none;\n    /* remove default arrow */\n    transition: border 250ms, box-shadow 250ms;\n    background-color: transparent !important; }\n  .rfipcategory i {\n    position: absolute;\n    right: 2px;\n    top: 0;\n    font-size: 16px;\n    line-height: 32px;\n    z-index: -1; }\n\n.rfipdropdown {\n  width: 352px;\n  position: absolute;\n  left: 0;\n  margin-top: -1px;\n  z-index: 100000001;\n  border-radius: 0 1px 4px 4px; }\n  .rfipdropdown__selector {\n    overflow: hidden;\n    padding: 16px; }\n  .rfipdropdown.fipappear-enter-active .rfipdropdown__selector, .rfipdropdown.fipappear-exit-active .rfipdropdown__selector {\n    transition: max-height 300ms ease-out, padding 300ms ease-out;\n    padding: 16px; }\n\n.rfipicons__pager {\n  display: flex;\n  flex-flow: row nowrap;\n  height: 24px;\n  line-height: 24px;\n  align-items: center;\n  margin-bottom: 8px; }\n\n.rfipicons__num {\n  width: 100px;\n  margin-right: auto; }\n\n.rfipicons__cp {\n  width: 32px;\n  margin-right: 8px;\n  height: 24px;\n  line-height: 24px;\n  text-align: right; }\n\n.rfipicons__sp {\n  margin-right: 8px; }\n\n.rfipicons__tp {\n  margin-right: 8px; }\n\n.rfipicons__arrow {\n  margin-left: auto;\n  width: 56px;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: flex-end;\n  align-items: center;\n  height: 24px;\n  user-select: none; }\n\n.rfipicons__right {\n  margin-left: auto; }\n\n.rfipicons__left, .rfipicons__right {\n  cursor: pointer;\n  width: 24px;\n  height: 24px;\n  position: relative;\n  transition: background-color 250ms, border 250ms;\n  outline: 0 none;\n  border-radius: 2px;\n  font-size: 18px; }\n\n.rfipicons__label {\n  height: 22px;\n  width: 22px;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n  .rfipicons__label img {\n    height: 18px;\n    width: 18px; }\n\n.rfipicons__selector {\n  display: flex;\n  flex: 1 1 20%;\n  flex-flow: row wrap;\n  align-content: center;\n  justify-content: flex-start; }\n\n.rfipicons__ibox {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n  transition: background-color 250ms, border 250ms;\n  border-radius: 2px;\n  outline: 0 none;\n  font-size: 20px; }\n  .rfipicons__ibox img,\n  .rfipicons__ibox svg {\n    max-height: 24px;\n    width: auto; }\n  .rfipicons__ibox > * {\n    transform: scale(1);\n    transition: transform 250ms;\n    transform-origin: center; }\n  .rfipicons__ibox:hover > * {\n    transform: scale(1.8); }\n  .rfipicons__ibox--error {\n    text-transform: lowercase;\n    font-style: italic; }\n\n.rfipicons__icon {\n  width: 20%;\n  height: 64px;\n  padding: 1px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer; }\n  .rfipicons__icon--error {\n    display: block;\n    padding: 16px;\n    text-align: center;\n    font-size: 24px;\n    width: 100%;\n    line-height: 1; }\n\n.rfipsearch {\n  width: 100%;\n  margin: 0 0 8px; }\n  .rfipsearch input {\n    width: 100%;\n    display: block;\n    height: 32px;\n    line-height: 32px; }\n\n.components-panel .rfipdropdown,\n.components-panel .rfipdropdown.rfipdropdown--default.fipappear-enter-done {\n  left: 0;\n  width: 100%; }\n\n.components-panel .rfipicons__ibox {\n  font-size: 15px; }\n\n.components-panel .rfipicons__icon {\n  height: 40px; }\n\n.components-panel .rfipicons__ibox:hover > * {\n  -webkit-transform: scale(1.45);\n  -ms-transform: scale(1.45);\n  transform: scale(1.45); }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipbtn--default .rfipbtn__icon {\n  color: #424242;\n  height: 40px;\n  border: 0; }\n\n.rfipbtn--default .rfipbtn__del {\n  height: 7px;\n  background-color: #007cba33;\n  color: #007cba;\n  font-weight: bold;\n  padding: 8px 8px 10px 8px;\n  border-radius: 100%;\n  margin-left: 10px; }\n\n.rfipdropdown--default .rfipicons__ibox,\n.rfipdropdown--default .rfipicons__ibox:focus,\n.rfipdropdown--default .rfipicons__ibox:active,\n.rfipdropdown--default .rfipicons__ibox:hover {\n  color: #424242;\n  background-color: transparent;\n  border: 0; }\n\n.rfipdropdown--default .rfipicons__icon--selected .rfipicons__ibox svg {\n  fill: #007cba; }\n\n.rfipicons__ibox img,\n.rfipicons__ibox svg {\n  width: 16px;\n  height: 16px;\n  max-height: 24px; }\n\n.rfipicons__ibox svg {\n  fill: #585858; }\n\n/* Override default CSS - UAG */\n.uag-icon-picker .rfip {\n  margin: 4px 0 0; }\n\n.uag-icon-picker .uag-control-label {\n  padding-bottom: 4px;\n  display: block; }\n',""]),t.a=o},224:function(e,t,n){"use strict";var a,o=n(79),l=n.n(o),i=n(0),r=n.n(i),b=n(11),u=n.n(b),d=n(223),c=0,g={injectType:"lazySingletonStyleTag",attributes:{id:"uagb-editor-styles"},insert:"head",singleton:!0},p={};p.locals=d.a.locals||{},p.use=function(){return c++||(a=u()(d.a,g)),p},p.unuse=function(){c>0&&!--c&&(a(),a=null)};var s=p,f=n(8),m=n(1);t.a=function(e){return Object(i.useLayoutEffect)((function(){return s.use(),function(){s.unuse()}}),[]),r.a.createElement("div",{className:"components-base-control uag-icon-picker"},r.a.createElement("span",{className:"uag-control-label"},(null==e?void 0:e.label)||Object(m.__)("Icon","ultimate-addons-for-gutenberg")),r.a.createElement(l.a,{icons:(null==e?void 0:e.icons)||wp.UAGBSvgIcons,renderFunc:f.a,theme:"default",value:e.value,onChange:e.onChange,isMulti:e.isMulti||!1,noSelectedPlaceholder:e.noSelectedPlaceholder||Object(m.__)("Select Icon","ultimate-addons-for-gutenberg")}))}},355:function(e,t,n){"use strict";n.r(t);var a=n(224),o=n(1),l=n(0),i=n.n(l),r=n(10),b=n(76),u=n(50),d=n(78),c=n(14),g=n(75),p=n(29),s=n(77),f=n(13),m=n(80),_=n(51),h=n(38),v=n(5),x=n(3);function T(){return(T=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}$=jQuery;var S=[{value:"thumbnail",label:Object(o.__)("Thumbnail","ultimate-addons-for-gutenberg")},{value:"medium",label:Object(o.__)("Medium","ultimate-addons-for-gutenberg")},{value:"full",label:Object(o.__)("Large","ultimate-addons-for-gutenberg")}],y=function(e){var t,n,y,w,C=e=e.parentProps,F=C.setAttributes,O=C.attributes,j=C.deviceType,E=O.headingAlign,H=O.headingColor,B=O.subHeadingColor,M=O.prefixColor,z=O.prefixFontSize,L=O.prefixFontSizeType,k=O.prefixFontSizeTablet,I=O.prefixFontSizeMobile,P=O.prefixFontFamily,A=O.prefixFontWeight,W=O.prefixFontSubset,U=O.prefixLineHeightType,R=O.prefixLineHeight,D=O.prefixLineHeightTablet,G=O.prefixLineHeightMobile,V=O.prefixTextTransform,N=O.prefixTextDecoration,J=O.prefixLoadGoogleFonts,Q=O.headingTag,q=O.headFontSize,K=O.headFontSizeType,X=O.headFontSizeTablet,Y=O.headFontSizeMobile,Z=O.headFontFamily,ee=O.headFontWeight,te=O.headFontSubset,ne=O.headLineHeightType,ae=O.headLineHeight,oe=O.headLineHeightTablet,le=O.headLineHeightMobile,ie=O.headLoadGoogleFonts,re=O.subHeadFontSize,be=O.subHeadFontSizeType,ue=O.subHeadFontSizeTablet,de=O.subHeadFontSizeMobile,ce=O.subHeadFontFamily,ge=O.subHeadFontWeight,pe=O.subHeadFontSubset,se=O.subHeadLineHeightType,fe=O.subHeadLineHeight,me=O.subHeadLineHeightTablet,_e=O.subHeadLineHeightMobile,he=O.subHeadLineTransform,ve=O.subHeadLineDecoration,xe=O.subHeadLoadGoogleFonts,Te=O.separatorWidthType,Se=O.seperatorSpace,ye=O.seperatorTabletSpace,we=O.seperatorMobileSpace,Ce=O.headSpace,Fe=O.headTabletSpace,Oe=O.headMobileSpace,je=O.subHeadSpace,Ee=O.icon,He=O.iconColor,Be=O.iconSize,Me=O.iconSizeType,ze=O.iconimgPosition,Le=O.iconHover,ke=O.iconimgBorderRadius,Ie=O.iconimgBorderRadiusUnit,Pe=O.source_type,Ae=O.sourceAlign,We=O.seperatorPosition,Ue=O.seperatorStyle,Re=O.seperatorWidth,De=O.seperatorColor,Ge=O.seperatorThickness,Ve=O.thicknessUnit,Ne=O.ctaType,Je=O.ctaText,$e=O.ctaLink,Qe=O.ctaTarget,qe=O.ctaIcon,Ke=O.ctaIconPosition,Xe=O.ctaIconSpace,Ye=O.ctaIconSpaceType,Ze=O.ctaLinkColor,et=O.ctaFontSize,tt=O.ctaFontSizeType,nt=O.ctaFontSizeMobile,at=O.ctaFontSizeTablet,ot=O.ctaTextTransform,lt=O.ctaTextDecoration,it=O.ctaFontFamily,rt=O.ctaFontWeight,bt=O.ctaFontSubset,ut=O.ctaLoadGoogleFonts,dt=O.ctaBtnLinkColor,ct=O.ctaLinkHoverColor,gt=O.ctaBgHoverColor,pt=O.ctaBgColor,st=O.paddingBtnUnit,ft=O.mobilePaddingBtnUnit,mt=O.tabletPaddingBtnUnit,_t=O.paddingBtnTop,ht=O.paddingBtnBottom,vt=O.paddingBtnLeft,xt=O.paddingBtnRight,Tt=O.paddingBtnTopTablet,St=O.paddingBtnRightTablet,yt=O.paddingBtnBottomTablet,wt=O.paddingBtnLeftTablet,Ct=O.paddingBtnTopMobile,Ft=O.paddingBtnRightMobile,Ot=O.paddingBtnBottomMobile,jt=O.paddingBtnLeftMobile,Et=O.ctaBorderStyle,Ht=O.ctaBorderColor,Bt=O.ctaBorderhoverColor,Mt=O.ctaBorderWidth,zt=O.ctaBorderRadius,Lt=O.prefixSpace,kt=O.prefixTabletSpace,It=O.prefixMobileSpace,Pt=O.iconLeftMargin,At=O.iconRightMargin,Wt=O.iconTopMargin,Ut=O.iconBottomMargin,Rt=O.iconMarginTopTablet,Dt=O.iconMarginRightTablet,Gt=O.iconMarginBottomTablet,Vt=O.iconMarginLeftTablet,Nt=O.iconMarginTopMobile,Jt=O.iconMarginRightMobile,$t=O.iconMarginBottomMobile,Qt=O.iconMarginLeftMobile,qt=O.iconMarginUnit,Kt=O.iconMobilePaddingUnit,Xt=O.iconTabletPaddingUnit,Yt=O.iconImage,Zt=O.imageSize,en=O.imageWidth,tn=O.imageWidthMobile,nn=O.imageWidthTablet,an=O.imageWidthType,on=O.imageWidthUnit,ln=O.stack,rn=O.showPrefix,bn=O.showTitle,un=O.showDesc,dn=O.inheritFromTheme,cn=O.spacingLink,gn=O.headLineTransform,pn=O.headLineDecoration,sn=O.prefixSpaceUnit,fn=O.headSpaceUnit,mn=O.seperatorSpaceUnit,hn=O.subHeadSpaceUnit,vn=O.subHeadTabletSpace,xn=O.subHeadMobileSpace,Tn=function(e){var t=[];return $.each(e,(function(e){var n={value:e,label:e};t.push(n)})),t};if(Yt&&Yt.sizes&&(S=Tn(Yt.sizes)),Object(o.__)("Select Image","ultimate-addons-for-gutenberg"),Yt&&(null==Yt.url||""==Yt.url?Object(o.__)("Select Image","ultimate-addons-for-gutenberg"):Object(o.__)("Replace Image","ultimate-addons-for-gutenberg")),1==J){var Sn={google:{families:[P+(A?":"+A:"")]}};t=i.a.createElement(u.a,{config:Sn})}if(1==ie){var yn={google:{families:[Z+(ee?":"+ee:"")]}};w=i.a.createElement(u.a,{config:yn})}if(1==xe){var wn={google:{families:[ce+(ge?":"+ge:"")]}};n=i.a.createElement(u.a,{config:wn})}if(1==xe){var Cn={google:{families:[it+(rt?":"+rt:"")]}};y=i.a.createElement(u.a,{config:Cn})}return i.a.createElement(i.a.Fragment,null,("above-title"==ze||"below-title"==ze)&&i.a.createElement(v.BlockControls,{key:"controls"},i.a.createElement(v.AlignmentToolbar,{value:E,onChange:function(e){return F({headingAlign:e})}})),i.a.createElement(v.InspectorControls,null,i.a.createElement(g.a,null,i.a.createElement(p.b,p.a.general,i.a.createElement(x.PanelBody,{title:Object(o.__)("Image/Icon","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(x.SelectControl,{label:Object(o.__)("Select Position","ultimate-addons-for-gutenberg"),value:ze,onChange:function(e){return F({iconimgPosition:e})},options:[{value:"above-title",label:Object(o.__)("Above Title","ultimate-addons-for-gutenberg")},{value:"below-title",label:Object(o.__)("Below Title","ultimate-addons-for-gutenberg")},{value:"left-title",label:Object(o.__)("Left of Title","ultimate-addons-for-gutenberg")},{value:"right-title",label:Object(o.__)("Right of Title","ultimate-addons-for-gutenberg")},{value:"left",label:Object(o.__)("Left of Text and Title","ultimate-addons-for-gutenberg")},{value:"right",label:Object(o.__)("Right of Text and Title","ultimate-addons-for-gutenberg")}]}),("left"==ze||"right"==ze)&&i.a.createElement(x.SelectControl,{label:Object(o.__)("Stack on","ultimate-addons-for-gutenberg"),value:ln,options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"tablet",label:Object(o.__)("Tablet","ultimate-addons-for-gutenberg")},{value:"mobile",label:Object(o.__)("Mobile","ultimate-addons-for-gutenberg")}],help:Object(o.__)("Note: Choose on what breakpoint the Info Box will stack.","ultimate-addons-for-gutenberg"),onChange:function(e){return F({stack:e})}}),i.a.createElement(x.SelectControl,{label:Object(o.__)("Select Source","ultimate-addons-for-gutenberg"),value:Pe,onChange:function(e){return F({source_type:e})},options:[{value:"icon",label:Object(o.__)("Icon","ultimate-addons-for-gutenberg")},{value:"image",label:Object(o.__)("Image","ultimate-addons-for-gutenberg")}]}),ze&&"above-title"!==ze&&"below-title"!==ze&&i.a.createElement(x.SelectControl,{label:Object(o.__)("Vertical Alignment","ultimate-addons-for-gutenberg"),value:Ae,onChange:function(e){return F({sourceAlign:e})},options:[{value:"top",label:Object(o.__)("Top","ultimate-addons-for-gutenberg")},{value:"middle",label:Object(o.__)("Middle","ultimate-addons-for-gutenberg")}]}),"icon"==Pe&&i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{label:Object(o.__)("Icon","ultimate-addons-for-gutenberg"),value:Ee,onChange:function(e){return F({icon:e})}})),"image"==Pe&&i.a.createElement(i.a.Fragment,null,i.a.createElement(_.a,{onSelectImage:function(e){if(e&&e.url)if(e.type&&"image"===e.type){if(e.sizes){var t=Tn(e.sizes);S=t}F({iconImage:e})}else F({iconImage:null});else F({iconImage:null})},backgroundImage:Yt,onRemoveImage:function(){F({iconImage:""})}}),Yt&&"null"!==Yt.url&&""!==Yt.url&&i.a.createElement(x.SelectControl,{label:Object(o.__)("Image Size","ultimate-addons-for-gutenberg"),options:S,value:Zt,onChange:function(e){return F({imageSize:e})}}))),i.a.createElement(x.PanelBody,{title:Object(o.__)("Content","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(x.ToggleControl,{checked:rn,onChange:function(){return F({showPrefix:!rn})},label:Object(o.__)("Enable Prefix","ultimate-addons-for-gutenberg")}),i.a.createElement(x.ToggleControl,{checked:bn,onChange:function(){return F({showTitle:!bn})},label:Object(o.__)("Enable Title","ultimate-addons-for-gutenberg")}),bn&&i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{setAttributes:F,label:Object(o.__)("Title Tag","ultimate-addons-for-gutenberg"),data:{value:Q,label:"headingTag"},options:[{value:"h1",label:Object(o.__)("H1")},{value:"h2",label:Object(o.__)("H2")},{value:"h3",label:Object(o.__)("H3")},{value:"h4",label:Object(o.__)("H4")},{value:"h5",label:Object(o.__)("H5")},{value:"h6",label:Object(o.__)("H6")},{value:"p",label:Object(o.__)("P")}]})),i.a.createElement(x.ToggleControl,{checked:un,onChange:function(){return F({showDesc:!un})},label:Object(o.__)("Enable Description","ultimate-addons-for-gutenberg")})),i.a.createElement(x.PanelBody,{title:Object(o.__)("Separator","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(x.SelectControl,{label:Object(o.__)("Style"),value:Ue,onChange:function(e){return F({seperatorStyle:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"solid",label:Object(o.__)("Solid","ultimate-addons-for-gutenberg")},{value:"double",label:Object(o.__)("Double","ultimate-addons-for-gutenberg")},{value:"dashed",label:Object(o.__)("Dashed","ultimate-addons-for-gutenberg")},{value:"dotted",label:Object(o.__)("Dotted","ultimate-addons-for-gutenberg")}]}),"none"!==Ue&&i.a.createElement(x.SelectControl,{label:Object(o.__)("Position","ultimate-addons-for-gutenberg"),value:We,onChange:function(e){return F({seperatorPosition:e})},options:[{value:"after_icon",label:Object(o.__)("After Icon/Image","ultimate-addons-for-gutenberg")},{value:"after_prefix",label:Object(o.__)("After Prefix","ultimate-addons-for-gutenberg")},{value:"after_title",label:Object(o.__)("After Title","ultimate-addons-for-gutenberg")},{value:"after_desc",label:Object(o.__)("After Description","ultimate-addons-for-gutenberg")}]})),i.a.createElement(x.PanelBody,{title:Object(o.__)("Call To Action","ultimate-addons-for-gutenberg"),initialOpen:!1},i.a.createElement(x.SelectControl,{label:Object(o.__)("Type","ultimate-addons-for-gutenberg"),value:Ne,onChange:function(e){return F({ctaType:e})},options:[{value:"none",label:Object(o.__)("None","ultimate-addons-for-gutenberg")},{value:"text",label:Object(o.__)("Text","ultimate-addons-for-gutenberg")},{value:"button",label:Object(o.__)("Button","ultimate-addons-for-gutenberg")},{value:"all",label:Object(o.__)("Complete Box","ultimate-addons-for-gutenberg")}]}),("text"===Ne||"button"===Ne)&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.TextControl,{label:Object(o.__)("Text","ultimate-addons-for-gutenberg"),value:Je,onChange:function(e){return F({ctaText:e})}})),"none"!==Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.TextControl,{label:Object(o.__)("Link","ultimate-addons-for-gutenberg"),value:$e,onChange:function(e){return F({ctaLink:e})}})),"all"!==Ne&&"none"!==Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{label:Object(o.__)("Button Icon","ultimate-addons-for-gutenberg"),value:qe,onChange:function(e){return F({ctaIcon:e})}})),""!==qe&&"all"!==Ne&&"none"!==Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.SelectControl,{label:Object(o.__)("Icon Position","ultimate-addons-for-gutenberg"),value:Ke,onChange:function(e){return F({ctaIconPosition:e})},options:[{value:"before",label:Object(o.__)("Before Text","ultimate-addons-for-gutenberg")},{value:"after",label:Object(o.__)("After Text","ultimate-addons-for-gutenberg")}]}),i.a.createElement(f.a,{label:Object(o.__)("Icon Spacing","ultimate-addons-for-gutenberg"),setAttributes:F,value:Xe,onChange:function(e){return F({ctaIconSpace:e})},min:0,max:50,unit:{value:Ye,label:"ctaIconSpaceType"}})),"button"===Ne&&i.a.createElement(x.ToggleControl,{checked:dn,onChange:function(){return F({inheritFromTheme:!dn})},label:Object(o.__)("Inherit from Theme","ultimate-addons-for-gutenberg")}),"none"!==Ne&&i.a.createElement(x.ToggleControl,{checked:Qe,onChange:function(){return F({ctaTarget:!Qe})},label:Object(o.__)("Open in new Window","ultimate-addons-for-gutenberg")}))),i.a.createElement(p.b,p.a.style,i.a.createElement(i.a.Fragment,null,""!==Ee&&i.a.createElement(x.PanelBody,{title:"Icon/Image",initialOpen:!1},i.a.createElement(i.a.Fragment,null," ","icon"==Pe&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:He||"",onColorChange:function(e){return F({iconColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg"),colorValue:Le||"",onColorChange:function(e){return F({iconHover:e})}}),i.a.createElement(f.a,{label:Object(o.__)("Size","ultimate-addons-for-gutenberg"),setAttributes:F,value:Be,onChange:function(e){return F({iconSize:e})},min:0,max:300,unit:{value:Me,label:"iconSizeType"}})),"image"==Pe&&Yt&&"null"!==Yt.url&&""!==Yt.url&&i.a.createElement(i.a.Fragment,null,i.a.createElement(x.ToggleControl,{checked:an,onChange:function(){return F({imageWidthType:!an})},label:Object(o.__)("Custom Width","ultimate-addons-for-gutenberg"),help:Object(o.__)("Turn this off to inherit the natural width of Image.","ultimate-addons-for-gutenberg")}),an&&i.a.createElement(m.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),data:{desktop:{value:en,label:"imageWidth"},tablet:{value:nn,label:"imageWidthTablet"},mobile:{value:tn,label:"imageWidthMobile"}},min:0,max:500,unit:{value:on,label:"imageWidthUnit"},setAttributes:F}),i.a.createElement(f.a,{label:Object(o.__)("Rounded Corners (px)","ultimate-addons-for-gutenberg"),setAttributes:F,value:ke,onChange:function(e){return F({iconimgBorderRadius:e})},min:0,max:500,unit:{value:Ie,label:"iconimgBorderRadiusUnit"}})),i.a.createElement(s.a,T({},e,{label:Object(o.__)("Margin","ultimate-addons-for-gutenberg"),valueTop:{value:Wt,label:"iconTopMargin"},valueRight:{value:At,label:"iconRightMargin"},valueBottom:{value:Ut,label:"iconBottomMargin"},valueLeft:{value:Pt,label:"iconLeftMargin"},valueTopTablet:{value:Rt,label:"iconMarginTopTablet"},valueRightTablet:{value:Dt,label:"iconMarginRightTablet"},valueBottomTablet:{value:Gt,label:"iconMarginBottomTablet"},valueLeftTablet:{value:Vt,label:"iconMarginLeftTablet"},valueTopMobile:{value:Nt,label:"iconMarginTopMobile"},valueRightMobile:{value:Jt,label:"iconMarginRightMobile"},valueBottomMobile:{value:$t,label:"iconMarginBottomMobile"},valueLeftMobile:{value:Qt,label:"iconMarginLeftMobile"},unit:{value:qt,label:"iconMarginUnit"},mUnit:{value:Kt,label:"iconMobilePaddingUnit"},tUnit:{value:Xt,label:"iconTabletPaddingUnit"},deviceType:j,attributes:O,setAttributes:F,link:{value:cn,label:"spacingLink"}})))),rn&&i.a.createElement(x.PanelBody,{title:"Prefix",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:M||"",onColorChange:function(e){return F({prefixColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:F,loadGoogleFonts:{value:J,label:"prefixLoadGoogleFonts"},fontFamily:{value:P,label:"prefixFontFamily"},fontWeight:{value:A,label:"prefixFontWeight"},fontSubset:{value:W,label:"prefixFontSubset"},fontSizeType:{value:L,label:"prefixFontSizeType"},fontSize:{value:z,label:"prefixFontSize"},fontSizeMobile:{value:I,label:"prefixFontSizeMobile"},fontSizeTablet:{value:k,label:"prefixFontSizeTablet"},lineHeightType:{value:U,label:"prefixLineHeightType"},lineHeight:{value:R,label:"prefixLineHeight"},lineHeightMobile:{value:G,label:"prefixLineHeightMobile"},lineHeightTablet:{value:D,label:"prefixLineHeightTablet"},transform:{value:V,label:"prefixTextTransform"},decoration:{value:N,label:"prefixTextDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Lt,label:"prefixSpace"},tablet:{value:kt,label:"prefixTabletSpace"},mobile:{value:It,label:"prefixMobileSpace"}},min:0,max:50,unit:{value:sn,label:"prefixSpaceUnit"},setAttributes:F}))),bn&&i.a.createElement(x.PanelBody,{title:"Title",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:H||"",onColorChange:function(e){return F({headingColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:F,loadGoogleFonts:{value:ie,label:"headLoadGoogleFonts"},fontFamily:{value:Z,label:"headFontFamily"},fontWeight:{value:ee,label:"headFontWeight"},fontSubset:{value:te,label:"headFontSubset"},fontSizeType:{value:K,label:"headFontSizeType"},fontSize:{value:q,label:"headFontSize"},fontSizeMobile:{value:Y,label:"headFontSizeMobile"},fontSizeTablet:{value:X,label:"headFontSizeTablet"},lineHeightType:{value:ne,label:"headLineHeightType"},lineHeight:{value:ae,label:"headLineHeight"},lineHeightMobile:{value:le,label:"headLineHeightMobile"},lineHeightTablet:{value:oe,label:"headLineHeightTablet"},transform:{value:gn,label:"headLineTransform"},decoration:{value:pn,label:"headLineDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Ce,label:"headSpace"},tablet:{value:Fe,label:"headTabletSpace"},mobile:{value:Oe,label:"headMobileSpace"}},min:0,max:50,unit:{value:fn,label:"headSpaceUnit"},setAttributes:F}))),"null"!==Ue&&i.a.createElement(x.PanelBody,{title:"Separator",initialOpen:!1},i.a.createElement(i.a.Fragment,null,"none"!==Ue&&i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{label:Object(o.__)("Width","ultimate-addons-for-gutenberg"),setAttributes:F,value:Re,onChange:function(e){return F({seperatorWidth:e})},min:0,max:"%"==Te?100:500,unit:{value:Te,label:"separatorWidthType"},units:[{name:Object(o.__)("Pixel","ultimate-addons-for-gutenberg"),unitValue:"px"},{name:Object(o.__)("Em","ultimate-addons-for-gutenberg"),unitValue:"em"},{name:Object(o.__)("%","ultimate-addons-for-gutenberg"),unitValue:"%"}]}),i.a.createElement(f.a,{label:Object(o.__)("Thickness","ultimate-addons-for-gutenberg"),setAttributes:F,value:Ge,onChange:function(e){return F({seperatorThickness:e})},min:0,max:10,unit:{value:Ve,label:"thicknessUnit"}})),i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:De||"",onColorChange:function(e){return F({seperatorColor:e})}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:Se,label:"seperatorSpace"},tablet:{value:ye,label:"seperatorTabletSpace"},mobile:{value:we,label:"seperatorMobileSpace"}},min:0,max:50,unit:{value:mn,label:"seperatorSpaceUnit"},setAttributes:F}))),un&&i.a.createElement(x.PanelBody,{title:"Description",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Color","ultimate-addons-for-gutenberg"),colorValue:B||"",onColorChange:function(e){return F({subHeadingColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:F,loadGoogleFonts:{value:xe,label:"subHeadLoadGoogleFonts"},fontFamily:{value:ce,label:"subHeadFontFamily"},fontWeight:{value:ge,label:"subHeadFontWeight"},fontSubset:{value:pe,label:"subHeadFontSubset"},fontSizeType:{value:be,label:"subHeadFontSizeType"},fontSize:{value:re,label:"subHeadFontSize"},fontSizeMobile:{value:de,label:"subHeadFontSizeMobile"},fontSizeTablet:{value:ue,label:"subHeadFontSizeTablet"},lineHeightType:{value:se,label:"subHeadLineHeightType"},lineHeight:{value:fe,label:"subHeadLineHeight"},lineHeightMobile:{value:_e,label:"subHeadLineHeightMobile"},lineHeightTablet:{value:me,label:"subHeadLineHeightTablet"},transform:{value:he,label:"subHeadLineTransform"},decoration:{value:ve,label:"subHeadLineDecoration"}}),i.a.createElement(m.a,{label:Object(o.__)("Bottom Margin","ultimate-addons-for-gutenberg"),data:{desktop:{value:je,label:"subHeadSpace"},tablet:{value:vn,label:"subHeadTabletSpace"},mobile:{value:xn,label:"subHeadMobileSpace"}},min:0,max:50,unit:{value:hn,label:"subHeadSpaceUnit"},setAttributes:F}))),dn&&"text"===Ne&&i.a.createElement(x.PanelBody,{title:"CTA",initialOpen:!1},i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ze||"",onColorChange:function(e){return F({ctaLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:ct||"",onColorChange:function(e){return F({ctaLinkHoverColor:e})}}),i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:F,loadGoogleFonts:{value:ut,label:"ctaLoadGoogleFonts"},fontFamily:{value:it,label:"ctaFontFamily"},fontWeight:{value:rt,label:"ctaFontWeight"},fontSubset:{value:bt,label:"ctaFontSubset"},fontSizeType:{value:tt,label:"ctaFontSizeType"},fontSize:{value:et,label:"ctaFontSize"},fontSizeMobile:{value:nt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:at,label:"ctaFontSizeTablet"},transform:{value:ot,label:"ctaTextTransform"},decoration:{value:lt,label:"ctaTextDecoration"},disableLineHeight:!0}))),!dn&&"none"!==Ne&&"all"!==Ne&&i.a.createElement(x.PanelBody,{title:"CTA",initialOpen:!1},i.a.createElement(i.a.Fragment,null,"text"===Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Text Color","ultimate-addons-for-gutenberg"),colorValue:Ze||"",onColorChange:function(e){return F({ctaLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:ct||"",onColorChange:function(e){return F({ctaLinkHoverColor:e})}})),!dn&&"button"===Ne&&i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{label:Object(o.__)("Button Text Color","ultimate-addons-for-gutenberg"),colorValue:dt||"",onColorChange:function(e){return F({ctaBtnLinkColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Button Text Hover Color","ultimate-addons-for-gutenberg"),colorValue:ct||"",onColorChange:function(e){return F({ctaLinkHoverColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Background Color","ultimate-addons-for-gutenberg"),colorValue:pt||"",onColorChange:function(e){return F({ctaBgColor:e})}}),i.a.createElement(c.a,{label:Object(o.__)("Background Hover Color","ultimate-addons-for-gutenberg"),colorValue:gt||"",onColorChange:function(e){return F({ctaBgHoverColor:e})}})),"text"===Ne&&i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:F,loadGoogleFonts:{value:ut,label:"ctaLoadGoogleFonts"},fontFamily:{value:it,label:"ctaFontFamily"},fontWeight:{value:rt,label:"ctaFontWeight"},fontSubset:{value:bt,label:"ctaFontSubset"},fontSizeType:{value:tt,label:"ctaFontSizeType"},fontSize:{value:et,label:"ctaFontSize"},fontSizeMobile:{value:nt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:at,label:"ctaFontSizeTablet"},transform:{value:ot,label:"ctaTextTransform"},decoration:{value:lt,label:"ctaTextDecoration"},disableLineHeight:!0}),!dn&&"button"===Ne&&i.a.createElement(b.a,{label:Object(o.__)("Typography","ultimate-addons-for-gutenberg"),attributes:O,setAttributes:F,loadGoogleFonts:{value:ut,label:"ctaLoadGoogleFonts"},fontFamily:{value:it,label:"ctaFontFamily"},fontWeight:{value:rt,label:"ctaFontWeight"},fontSubset:{value:bt,label:"ctaFontSubset"},fontSizeType:{value:tt,label:"ctaFontSizeType"},fontSize:{value:et,label:"ctaFontSize"},fontSizeMobile:{value:nt,label:"ctaFontSizeMobile"},fontSizeTablet:{value:at,label:"ctaFontSizeTablet"},transform:{value:ot,label:"ctaTextTransform"},decoration:{value:lt,label:"ctaTextDecoration"},disableLineHeight:!0}),!dn&&"button"==Ne&&i.a.createElement(s.a,T({},e,{label:Object(o.__)("Button Padding","ultimate-addons-for-gutenberg"),valueTop:{value:_t,label:"paddingBtnTop"},valueRight:{value:xt,label:"paddingBtnRight"},valueBottom:{value:ht,label:"paddingBtnBottom"},valueLeft:{value:vt,label:"paddingBtnLeft"},valueTopTablet:{value:Tt,label:"paddingBtnTopTablet"},valueRightTablet:{value:St,label:"paddingBtnRightTablet"},valueBottomTablet:{value:yt,label:"paddingBtnBottomTablet"},valueLeftTablet:{value:wt,label:"paddingBtnLeftTablet"},valueTopMobile:{value:Ct,label:"paddingBtnTopMobile"},valueRightMobile:{value:Ft,label:"paddingBtnRightMobile"},valueBottomMobile:{value:Ot,label:"paddingBtnBottomMobile"},valueLeftMobile:{value:jt,label:"paddingBtnLeftMobile"},unit:{value:st,label:"paddingBtnUnit"},mUnit:{value:ft,label:"mobilePaddingBtnUnit"},tUnit:{value:mt,label:"tabletPaddingBtnUnit"},deviceType:j,attributes:O,setAttributes:F,link:{value:cn,label:"spacingLink"}})),!dn&&"button"==Ne&&i.a.createElement(d.a,{setAttributes:F,borderStyle:{value:Et,label:"ctaBorderStyle",title:Object(o.__)("Border Style","ultimate-addons-for-gutenberg")},borderWidth:{value:Mt,label:"ctaBorderWidth",title:Object(o.__)("Width","ultimate-addons-for-gutenberg")},borderRadius:{value:zt,label:"ctaBorderRadius",title:Object(o.__)("Radius","ultimate-addons-for-gutenberg")},borderColor:{value:Ht,label:"ctaBorderColor",title:Object(o.__)("Color","ultimate-addons-for-gutenberg")},borderHoverColor:{value:Bt,label:"ctaBorderhoverColor",title:Object(o.__)("Hover Color","ultimate-addons-for-gutenberg")}}))))),i.a.createElement(p.b,p.a.advance))),i.a.createElement(l.Suspense,{fallback:Object(r.a)()},t,n,y,w))};t.default=i.a.memo(y)}}]);