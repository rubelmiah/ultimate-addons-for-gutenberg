(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{377:function(e,t,a){"use strict";a.r(t);var r=a(3),n=a.n(r),l=a(28),i=a(2),o=a.n(i),c=a(10);function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var u=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,26))})),b=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,27))})),m=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,39))})),f=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,29))})),p=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,38))})),g=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,40))})),v=Object(i.lazy)((function(){return Promise.resolve().then(a.bind(null,25))})),d=function(e){var t,a=e=e.parentProps,r=a.className,d=a.attributes,y=a.setAttributes,E=d.icon,w=d.iconimgPosition,h=d.source_type,_=d.seperatorPosition,j=d.seperatorStyle,A=d.ctaType,O=d.showPrefix,P=d.showTitle,N=d.showDesc,x=d.block_id,k=t="icon"===h&&""!==E?o.a.createElement(p,{attributes:d}):o.a.createElement(g,{attributes:d}),F=_,z=o.a.createElement(f,{attributes:d}),S=!0;"after_icon"!=_||"above-title"!=w&&"below-title"!=w||(S=!1,k=o.a.createElement(o.a.Fragment,null,t,"none"!==j&&z)),"after_icon"!=_||"above-title"===w&&"below-title"===w||(F="after_title"),"below-title"==w&&"after_title"==_&&(S=!1,k=o.a.createElement(o.a.Fragment,null,"none"!==j&&z,t));var I,T=o.a.createElement(o.a.Fragment,null,"none"!==j&&"after_title"==F&&S&&z,o.a.createElement("div",{className:"uagb-ifb-text-wrap"},N&&o.a.createElement(b,{attributes:d,setAttributes:y,props:e}),"none"!==j&&"after_desc"==F&&z,o.a.createElement(m,{attributes:d,setAttributes:y}))),J=o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"uagb-ifb-title-wrap"},O&&o.a.createElement(v,{attributes:d,setAttributes:y,props:e}),"none"!==j&&"after_prefix"==F&&z,P&&o.a.createElement(u,{attributes:d,setAttributes:y,props:e}))),C=o.a.createElement("div",{className:n.a.apply(void 0,["uagb-infobox__content-wrap","all"==A?" uagb-infobox_cta-type-all":""].concat((I=Object(l.a)(d),function(e){if(Array.isArray(e))return s(e)}(I)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(I)||function(e,t){if(e){if("string"==typeof e)return s(e,void 0);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,void 0):void 0}}(I)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())))},o.a.createElement(i.Suspense,{fallback:Object(c.a)()},o.a.createElement("div",{className:"uagb-ifb-left-right-wrap"},"left"==w&&k,o.a.createElement("div",{className:"uagb-ifb-content"},"above-title"==w&&k,("above-title"==w||"below-title"==w)&&J,"below-title"==w&&k,("above-title"==w||"below-title"==w)&&T,"left-title"===w&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"uagb-ifb-left-title-image"},k,J),T),"right-title"===w&&o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"uagb-ifb-right-title-image"},J,k),T),("left"==w||"right"==w)&&o.a.createElement(o.a.Fragment,null,J,T)),"right"==w&&k)));return o.a.createElement("div",{className:n()(r,"uagb-infobox__outer-wrap","uagb-block-".concat(x))},"all"==A&&o.a.createElement(o.a.Fragment,null,o.a.createElement("a",{className:"uagb-infobox-link-wrap uagb-infbox__link-to-all","aria-label":"Infobox Link",rel:"noopener noreferrer"}),C),"all"!==A&&C)};t.default=o.a.memo(d)}}]);