(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{208:function(e,t,n){"use strict";n.d(t,"b",(function(){return v})),n.d(t,"a",(function(){return h})),n.d(t,"e",(function(){return k})),n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return _}));var r=n(57),a=n(61),o=n(58),c=n(60),l=n(59);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=wp.element,y=f.createContext,g=(f.useContext,f.Suspense),d=y({parentName:"",parentClassName:"",isLoading:!1}),v=function(e){var t=e.parentName,n=void 0===t?"":t,r=e.parentClassName,a=void 0===r?"":r,o=e.children,c={parentName:n,parentClassName:a};return React.createElement(d.Provider,{value:c},o)},h=[["uagb/post-image"],["uagb/post-title"],["uagb/post-meta"],["uagb/post-excerpt"],["uagb/post-button"]],k=function e(t,n,r,a,o){if(r){var c=N(t);return r.map((function(r,l){var i,u,s=(u=2,function(e){if(Array.isArray(e))return e}(i=r)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw a}}return o}}(i,u)||function(e,t){if(e){if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}(i,u)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),b=s[0],f=s[1],y=void 0===f?{}:f;y.children&&y.children.length>0&&e(t,n,y.children,a,o);var d=c[b];return d?React.createElement(g,{fallback:React.createElement("div",{className:"wc-block-placeholder"})},React.createElement(d,p({},y,{post:n,attributes:a,categoriesList:o}))):null}))}},w={};function O(e){e.context||(e.context="any"),E(e,"context","string"),E(e,"blockName","string"),j(e,"component");var t=e.context,n=e.blockName,r=e.component;w[t]||(w[t]={}),w[t][n]=r}var j=function(e,t){if(e[t]){if("function"==typeof e[t])return;if(e[t].$$typeof&&e[t].$$typeof===Symbol.for("react.lazy"))return}throw new Error("Incorrect value for the ".concat(t," argument when registering a block component. Component must be a valid React Element or Lazy callback."))},E=function(e,t,n){var r=b(e[t]);if(r!==n)throw new Error("Incorrect value for the ".concat(t," argument when registering a block component. It was a ").concat(r,", but must be a ").concat(n,"."))};O({blockName:"uagb/post-title",component:r.a}),O({blockName:"uagb/post-image",component:o.a}),O({blockName:"uagb/post-meta",component:a.a}),O({blockName:"uagb/post-excerpt",component:c.a}),O({blockName:"uagb/post-button",component:l.a});var N=function(e){return u(u({},"object"===b(w[t=e])&&Object.keys(w[t]).length>0?w[t]:{}),w.any);var t},_=function e(t){return t&&0!==t.length?t.map((function(t){return[t.name,u(u({},t.attributes),{},{post:void 0,children:t.innerBlocks.length>0?e(t.innerBlocks):[]})]})):[]}},373:function(e,t,n){"use strict";n.r(t);var r=n(208),a=n(11),o=n(6),c=n(5),l=n(0),i=n(2),u=n.n(i),s=n(10);function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=Object(i.lazy)((function(){return Promise.all([n.e(76),n.e(55)]).then(n.bind(null,312))})),m=function(e){var t,n=e,m=n.state,f=n.setState,y=n.togglePreview,g=e=e.parentProps,d=g.categoriesList,v=g.latestPosts,h=g.attributes,k=g.deviceType,w=u.a.createElement(c.Disabled,null,u.a.createElement(i.Suspense,{fallback:Object(s.a)()},u.a.createElement(p,{attributes:h,className:e.className,latestPosts:v,block_id:e.clientId.substr(0,8),categoriesList:d,deviceType:k})));return u.a.createElement(u.a.Fragment,null,m.isEditing?(t={template:e.attributes.layoutConfig,templateLock:!1,allowedBlocks:Object.keys(Object(r.c)("uagb/post-masonry"))},0!==e.attributes.layoutConfig.length&&(t.renderAppender=!1),u.a.createElement(c.Placeholder,{label:"Post Masonry Layout"},u.a.createElement("div",{className:"uagb-block-all-post-grid-item-template"},u.a.createElement(c.Tip,null,Object(l.__)("Edit the blocks inside the preview below to change the content displayed for each post within the post grid.")),u.a.createElement(r.b,{parentName:"uagb/post-masonry",parentClassName:"uagb-block-grid"},u.a.createElement("article",null,u.a.createElement("div",{className:"uagb-post__inner-wrap uagb-post__edit-mode"},u.a.createElement("div",{className:"uagb-post__text"},u.a.createElement(o.InnerBlocks,t))))),u.a.createElement("div",{className:"uagb-block-all-post__actions"},u.a.createElement(c.Button,{className:"uagb-block-all-post__done-button",isPrimary:!0,onClick:function(){var t=e,n=t.block;(0,t.setAttributes)({layoutConfig:Object(r.d)(n)}),f({innerBlocks:n}),y()}},Object(l.__)("Done")),u.a.createElement(c.Button,{className:"uagb-block-all-post__cancel-button",isTertiary:!0,onClick:function(){var t=e.replaceInnerBlocks,n=m.innerBlocks;t(e.clientId,n),y()}},Object(l.__)("Cancel")),u.a.createElement(c.Button,{className:"uagb-block-all-post__reset-button",onClick:function(){var t=e,n=t.block,o=t.replaceInnerBlocks,c=[];r.a.map((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=e&&("undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,a,o=[],c=!0,l=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);c=!0);}catch(e){l=!0,a=e}finally{try{c||null==n.return||n.return()}finally{if(l)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?b(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],l=r[1];return c.push(Object(a.createBlock)(o,l)),!0})),o(e.clientId,c),f({innerBlocks:n})}},Object(l.__)("Reset Layout")))))):w)};t.default=u.a.memo(m)}}]);