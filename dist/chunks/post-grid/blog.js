(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{316:function(e,t,a){"use strict";a.r(t);var o=a(3),c=a.n(o),s=a(195);t.default=React.memo((function(e){var t=e.attributes,a=e.className,o=e.latestPosts,n=e.block_id,i=(e.categoriesList,e.deviceType),r=t.columns,l=t.tcolumns,u=t.mcolumns,g=t.imgPosition,m=t.postsToShow,p=t.equalHeight,b=t.paginationMarkup,d=t.postPagination,_=t.layoutConfig,v=p?"uagb-post__equal-height":"",w=o.length>m?o.slice(0,m):o;return React.createElement("div",{className:c()(a,"uagb-post-grid","uagb-post__image-position-".concat(g),"uagb-editor-preview-mode-".concat(i.toLowerCase()),"uagb-block-".concat(n))},React.createElement("div",{className:c()("is-grid","uagb-post__columns-".concat(r),"uagb-post__columns-tablet-".concat(l),"uagb-post__columns-mobile-".concat(u),"uagb-post__items","".concat(v))},React.createElement(s.b,{parentName:"uagb/post-grid",parentClassName:"uagb-block-grid"},w.map((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1?arguments[1]:void 0;return React.createElement("article",{key:a},React.createElement("div",{className:"uagb-post__inner-wrap"},Object(s.e)("uagb/post-grid",t,_,e.attributes,e.categoriesList)))})))),1==d&&"empty"!==b&&React.createElement("div",{dangerouslySetInnerHTML:{__html:b},className:"uagb-post-pagination-wrap"}))}))}}]);