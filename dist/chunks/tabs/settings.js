(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/tabs/settings"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/responsive-select/editor.lazy.scss":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/responsive-select/editor.lazy.scss ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".uagb-responsive-select-control .uagb-size-type-field-tabs .components-tab-panel__tabs {\n  padding-right: 0; }\n", "",{"version":3,"sources":["webpack://./src/components/responsive-select/editor.lazy.scss"],"names":[],"mappings":"AAAA;EACE,gBAAgB,EAAE","sourcesContent":[".uagb-responsive-select-control .uagb-size-type-field-tabs .components-tab-panel__tabs {\n  padding-right: 0; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/tabs/settings.js":
/*!*************************************!*\
  !*** ./src/blocks/tabs/settings.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _Components_typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @Components/typography */ "./src/components/typography/index.js");
/* harmony import */ var _Components_responsive_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Components/responsive-select */ "./src/components/responsive-select/index.js");
/* harmony import */ var _components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/multi-buttons-control */ "./src/components/multi-buttons-control/index.js");
/* harmony import */ var _components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/color-control/advanced-pop-color-control.js */ "./src/components/color-control/advanced-pop-color-control.js");
/* harmony import */ var _components_spacing_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/spacing-control */ "./src/components/spacing-control/index.js");
/* harmony import */ var _components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/range/Range.js */ "./src/components/range/Range.js");
/* harmony import */ var _components_border__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/border */ "./src/components/border/index.js");
/* harmony import */ var _components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/inspector-tabs/InspectorTabs.js */ "./src/components/inspector-tabs/InspectorTabs.js");
/* harmony import */ var _components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/inspector-tabs/InspectorTab.js */ "./src/components/inspector-tabs/InspectorTab.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

















var Settings = function Settings(props) {
  props = props.parentProps;
  var _props = props,
      attributes = _props.attributes,
      setAttributes = _props.setAttributes,
      deviceType = _props.deviceType;
  var tabsStyleD = attributes.tabsStyleD,
      tabsStyleM = attributes.tabsStyleM,
      tabsStyleT = attributes.tabsStyleT,
      tabActiveFrontend = attributes.tabActiveFrontend,
      tabHeaders = attributes.tabHeaders,
      headerBgColor = attributes.headerBgColor,
      borderStyle = attributes.borderStyle,
      borderWidth = attributes.borderWidth,
      borderRadius = attributes.borderRadius,
      borderColor = attributes.borderColor,
      borderHoverColor = attributes.borderHoverColor,
      headerTextColor = attributes.headerTextColor,
      activeTabBgColor = attributes.activeTabBgColor,
      activeTabTextColor = attributes.activeTabTextColor,
      bodyBgColor = attributes.bodyBgColor,
      bodyTextColor = attributes.bodyTextColor,
      tabTitleLeftMargin = attributes.tabTitleLeftMargin,
      tabTitleRightMargin = attributes.tabTitleRightMargin,
      tabTitleTopMargin = attributes.tabTitleTopMargin,
      tabTitleBottomMargin = attributes.tabTitleBottomMargin,
      tabTitleLeftMarginTablet = attributes.tabTitleLeftMarginTablet,
      tabTitleRightMarginTablet = attributes.tabTitleRightMarginTablet,
      tabTitleTopMarginTablet = attributes.tabTitleTopMarginTablet,
      tabTitleBottomMarginTablet = attributes.tabTitleBottomMarginTablet,
      tabTitleLeftMarginMobile = attributes.tabTitleLeftMarginMobile,
      tabTitleRightMarginMobile = attributes.tabTitleRightMarginMobile,
      tabTitleTopMarginMobile = attributes.tabTitleTopMarginMobile,
      tabTitleBottomMarginMobile = attributes.tabTitleBottomMarginMobile,
      tabTitleMarginUnit = attributes.tabTitleMarginUnit,
      mobiletabTitleMarginUnit = attributes.mobiletabTitleMarginUnit,
      tablettabTitleMarginUnit = attributes.tablettabTitleMarginUnit,
      tabTitleMarginLink = attributes.tabTitleMarginLink,
      tabTitleTopPadding = attributes.tabTitleTopPadding,
      tabTitleRightPadding = attributes.tabTitleRightPadding,
      tabTitleBottomPadding = attributes.tabTitleBottomPadding,
      tabTitleLeftPadding = attributes.tabTitleLeftPadding,
      tabTitleTopPaddingTablet = attributes.tabTitleTopPaddingTablet,
      tabTitleRightPaddingTablet = attributes.tabTitleRightPaddingTablet,
      tabTitleBottomPaddingTablet = attributes.tabTitleBottomPaddingTablet,
      tabTitleLeftPaddingTablet = attributes.tabTitleLeftPaddingTablet,
      tabTitleTopPaddingMobile = attributes.tabTitleTopPaddingMobile,
      tabTitleRightPaddingMobile = attributes.tabTitleRightPaddingMobile,
      tabTitleBottomPaddingMobile = attributes.tabTitleBottomPaddingMobile,
      tabTitleLeftPaddingMobile = attributes.tabTitleLeftPaddingMobile,
      tabTitlePaddingUnit = attributes.tabTitlePaddingUnit,
      mobiletabTitlePaddingUnit = attributes.mobiletabTitlePaddingUnit,
      tablettabTitlePaddingUnit = attributes.tablettabTitlePaddingUnit,
      tabTitlePaddingLink = attributes.tabTitlePaddingLink,
      tabBodyLeftMargin = attributes.tabBodyLeftMargin,
      tabBodyRightMargin = attributes.tabBodyRightMargin,
      tabBodyTopMargin = attributes.tabBodyTopMargin,
      tabBodyBottomMargin = attributes.tabBodyBottomMargin,
      tabBodyLeftMarginTablet = attributes.tabBodyLeftMarginTablet,
      tabBodyRightMarginTablet = attributes.tabBodyRightMarginTablet,
      tabBodyTopMarginTablet = attributes.tabBodyTopMarginTablet,
      tabBodyBottomMarginTablet = attributes.tabBodyBottomMarginTablet,
      tabBodyLeftMarginMobile = attributes.tabBodyLeftMarginMobile,
      tabBodyRightMarginMobile = attributes.tabBodyRightMarginMobile,
      tabBodyTopMarginMobile = attributes.tabBodyTopMarginMobile,
      tabBodyBottomMarginMobile = attributes.tabBodyBottomMarginMobile,
      tabBodyMarginUnit = attributes.tabBodyMarginUnit,
      mobiletabBodyMarginUnit = attributes.mobiletabBodyMarginUnit,
      tablettabBodyMarginUnit = attributes.tablettabBodyMarginUnit,
      tabBodyMarginLink = attributes.tabBodyMarginLink,
      tabBodyTopPadding = attributes.tabBodyTopPadding,
      tabBodyRightPadding = attributes.tabBodyRightPadding,
      tabBodyBottomPadding = attributes.tabBodyBottomPadding,
      tabBodyLeftPadding = attributes.tabBodyLeftPadding,
      tabBodyTopPaddingTablet = attributes.tabBodyTopPaddingTablet,
      tabBodyRightPaddingTablet = attributes.tabBodyRightPaddingTablet,
      tabBodyBottomPaddingTablet = attributes.tabBodyBottomPaddingTablet,
      tabBodyLeftPaddingTablet = attributes.tabBodyLeftPaddingTablet,
      tabBodyTopPaddingMobile = attributes.tabBodyTopPaddingMobile,
      tabBodyRightPaddingMobile = attributes.tabBodyRightPaddingMobile,
      tabBodyBottomPaddingMobile = attributes.tabBodyBottomPaddingMobile,
      tabBodyLeftPaddingMobile = attributes.tabBodyLeftPaddingMobile,
      tabBodyPaddingUnit = attributes.tabBodyPaddingUnit,
      mobiletabBodyPaddingUnit = attributes.mobiletabBodyPaddingUnit,
      tablettabBodyPaddingUnit = attributes.tablettabBodyPaddingUnit,
      tabBodyPaddingLink = attributes.tabBodyPaddingLink,
      titleLoadGoogleFonts = attributes.titleLoadGoogleFonts,
      titleFontFamily = attributes.titleFontFamily,
      titleFontWeight = attributes.titleFontWeight,
      titleFontSubset = attributes.titleFontSubset,
      titleFontSizeType = attributes.titleFontSizeType,
      titleFontSize = attributes.titleFontSize,
      titleFontSizeMobile = attributes.titleFontSizeMobile,
      titleFontSizeTablet = attributes.titleFontSizeTablet,
      titleLineHeightType = attributes.titleLineHeightType,
      titleLineHeight = attributes.titleLineHeight,
      titleLineHeightMobile = attributes.titleLineHeightMobile,
      titleLineHeightTablet = attributes.titleLineHeightTablet,
      titleTransform = attributes.titleTransform,
      titleDecoration = attributes.titleDecoration,
      titleAlign = attributes.titleAlign,
      tabAlign = attributes.tabAlign,
      showIcon = attributes.showIcon,
      icon = attributes.icon,
      iconColor = attributes.iconColor,
      iconPosition = attributes.iconPosition,
      iconSpacing = attributes.iconSpacing,
      iconSize = attributes.iconSize,
      activeiconColor = attributes.activeiconColor;

  var tabStyleSettings = function tabStyleSettings() {
    var tabsStyleOptions = {
      desktop: [{
        value: "hstyle1",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 1", "ultimate-addons-for-gutenberg")
      }, {
        value: "hstyle2",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 2", "ultimate-addons-for-gutenberg")
      }, {
        value: "hstyle3",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 3", "ultimate-addons-for-gutenberg")
      }, {
        value: "hstyle4",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 4", "ultimate-addons-for-gutenberg")
      }, {
        value: "hstyle5",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 5", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle6",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 6", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle7",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 7", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle8",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 8", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle9",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 9", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle10",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 10", "ultimate-addons-for-gutenberg")
      }],
      tablet: [{
        value: "hstyle1",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 1", "ultimate-addons-for-gutenberg")
      }, {
        value: "hstyle2",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 2", "ultimate-addons-for-gutenberg")
      }, {
        value: "hstyle3",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 3", "ultimate-addons-for-gutenberg")
      }, {
        value: "hstyle4",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 4", "ultimate-addons-for-gutenberg")
      }, {
        value: "hstyle5",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 5", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle6",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 6", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle7",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 7", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle8",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 8", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle9",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 9", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle10",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 10", "ultimate-addons-for-gutenberg")
      }],
      mobile: [{
        value: "hstyle1",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 1", "ultimate-addons-for-gutenberg")
      }, {
        value: "hstyle2",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 2", "ultimate-addons-for-gutenberg")
      }, {
        value: "hstyle3",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 3", "ultimate-addons-for-gutenberg")
      }, {
        value: "hstyle4",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 4", "ultimate-addons-for-gutenberg")
      }, {
        value: "hstyle5",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Horizontal Style 5", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle6",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 6", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle7",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 7", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle8",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 8", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle9",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 9", "ultimate-addons-for-gutenberg")
      }, {
        value: "vstyle10",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Vertical Style 10", "ultimate-addons-for-gutenberg")
      }, {
        value: "stack1",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Stack Style 11", "ultimate-addons-for-gutenberg")
      }, {
        value: "stack2",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Stack Style 12", "ultimate-addons-for-gutenberg")
      }, {
        value: "stack3",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Stack Style 13", "ultimate-addons-for-gutenberg")
      }, {
        value: "stack4",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Stack Style 14", "ultimate-addons-for-gutenberg")
      }]
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Tabs Style", "ultimate-addons-for-gutenberg"),
      initialOpen: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_responsive_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Style", "ultimate-addons-for-gutenberg"),
      data: {
        desktop: {
          value: tabsStyleD,
          label: "tabsStyleD"
        },
        tablet: {
          value: tabsStyleT,
          label: "tabsStyleT"
        },
        mobile: {
          value: tabsStyleM,
          label: "tabsStyleM"
        }
      },
      options: tabsStyleOptions,
      setAttributes: setAttributes
    }));
  };

  var tabTitleSettings = function tabTitleSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Tabs Title Settings", "ultimate-addons-for-gutenberg"),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Initial Open Tab", "ultimate-addons-for-gutenberg"),
      value: tabActiveFrontend,
      options: tabHeaders.map(function (tab, index) {
        return {
          value: index,
          label: tab
        };
      }),
      onChange: function onChange(value) {
        return setAttributes({
          tabActiveFrontend: parseInt(value)
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Tab Alignment", "ultimate-addons-for-gutenberg"),
      data: {
        value: tabAlign,
        label: "tabAlign"
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: "left",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])("fa fa-align-left")
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Left", "ultimate-addons-for-gutenberg")
      }, {
        value: "center",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])("fa fa-align-center")
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Center", "ultimate-addons-for-gutenberg")
      }, {
        value: "right",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])("fa fa-align-right")
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Right", "ultimate-addons-for-gutenberg")
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_multi_buttons_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
      setAttributes: setAttributes,
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Tab Text Alignment", "ultimate-addons-for-gutenberg"),
      data: {
        value: titleAlign,
        label: "titleAlign"
      },
      className: "uagb-multi-button-alignment-control",
      options: [{
        value: "left",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])("fa fa-align-left")
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Left", "ultimate-addons-for-gutenberg")
      }, {
        value: "center",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])("fa fa-align-center")
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Center", "ultimate-addons-for-gutenberg")
      }, {
        value: "right",
        icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["Icon"], {
          icon: Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"])("fa fa-align-right")
        }),
        tooltip: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Right", "ultimate-addons-for-gutenberg")
      }],
      showIcons: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["ToggleControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Enable Icon", "ultimate-addons-for-gutenberg"),
      checked: showIcon,
      onChange: function onChange() {
        return setAttributes({
          showIcon: !showIcon
        });
      }
    }), showIcon && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_11___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
      className: "components-base-control__label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Icon", "ultimate-addons-for-gutenberg")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_0___default.a, {
      icons: wp.UAGBSvgIcons,
      renderFunc: _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_1__["default"],
      theme: "default",
      value: icon,
      onChange: function onChange(value) {
        return setAttributes({
          icon: value
        });
      },
      isMulti: false,
      noSelectedPlaceholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Select Icon", "ultimate-addons-for-gutenberg")
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Icon Position", "ultimate-addons-for-gutenberg"),
      value: iconPosition,
      options: [{
        value: "left",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Left", "ultimate-addons-for-gutenberg")
      }, {
        value: "right",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Right", "ultimate-addons-for-gutenberg")
      }, {
        value: "top",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Top", "ultimate-addons-for-gutenberg")
      }, {
        value: "bottom",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Bottom", "ultimate-addons-for-gutenberg")
      }],
      onChange: function onChange(value) {
        return setAttributes({
          iconPosition: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Icon Spacing", "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: iconSpacing,
      onChange: function onChange(value) {
        return setAttributes({
          iconSpacing: value
        });
      },
      min: 0,
      max: 500,
      displayUnit: false
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Icon Color", "ultimate-addons-for-gutenberg"),
      colorValue: iconColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          iconColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Active Icon Color", "ultimate-addons-for-gutenberg"),
      colorValue: activeiconColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          activeiconColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_range_Range_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Icon Size", "ultimate-addons-for-gutenberg"),
      setAttributes: setAttributes,
      value: iconSize,
      onChange: function onChange(value) {
        return setAttributes({
          iconSize: value
        });
      },
      min: 0,
      max: 500,
      displayUnit: false
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Title Margin", "ultimate-addons-for-gutenberg"),
      valueTop: {
        value: tabTitleTopMargin,
        label: "tabTitleTopMargin"
      },
      valueRight: {
        value: tabTitleRightMargin,
        label: "tabTitleRightMargin"
      },
      valueBottom: {
        value: tabTitleBottomMargin,
        label: "tabTitleBottomMargin"
      },
      valueLeft: {
        value: tabTitleLeftMargin,
        label: "tabTitleLeftMargin"
      },
      valueTopTablet: {
        value: tabTitleTopMarginTablet,
        label: "tabTitleTopMarginTablet"
      },
      valueRightTablet: {
        value: tabTitleRightMarginTablet,
        label: "tabTitleRightMarginTablet"
      },
      valueBottomTablet: {
        value: tabTitleBottomMarginTablet,
        label: "tabTitleBottomMarginTablet"
      },
      valueLeftTablet: {
        value: tabTitleLeftMarginTablet,
        label: "tabTitleLeftMarginTablet"
      },
      valueTopMobile: {
        value: tabTitleTopMarginMobile,
        label: "tabTitleTopMarginMobile"
      },
      valueRightMobile: {
        value: tabTitleRightMarginMobile,
        label: "tabTitleRightMarginMobile"
      },
      valueBottomMobile: {
        value: tabTitleBottomMarginMobile,
        label: "tabTitleBottomMarginMobile"
      },
      valueLeftMobile: {
        value: tabTitleLeftMarginMobile,
        label: "tabTitleLeftMarginMobile"
      },
      unit: {
        value: tabTitleMarginUnit,
        label: "tabTitleMarginUnit"
      },
      mUnit: {
        value: mobiletabTitleMarginUnit,
        label: "mobiletabTitleMarginUnit"
      },
      tUnit: {
        value: tablettabTitleMarginUnit,
        label: "tablettabTitleMarginUnit"
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: tabTitleMarginLink,
        label: "tabTitleMarginLink"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Title Padding", "ultimate-addons-for-gutenberg"),
      valueTop: {
        value: tabTitleTopPadding,
        label: "tabTitleTopPadding"
      },
      valueRight: {
        value: tabTitleRightPadding,
        label: "tabTitleRightPadding"
      },
      valueBottom: {
        value: tabTitleBottomPadding,
        label: "tabTitleBottomPadding"
      },
      valueLeft: {
        value: tabTitleLeftPadding,
        label: "tabTitleLeftPadding"
      },
      valueTopTablet: {
        value: tabTitleTopPaddingTablet,
        label: "tabTitleTopPaddingTablet"
      },
      valueRightTablet: {
        value: tabTitleRightPaddingTablet,
        label: "tabTitleRightPaddingTablet"
      },
      valueBottomTablet: {
        value: tabTitleBottomPaddingTablet,
        label: "tabTitleBottomPaddingTablet"
      },
      valueLeftTablet: {
        value: tabTitleLeftPaddingTablet,
        label: "tabTitleLeftPaddingTablet"
      },
      valueTopMobile: {
        value: tabTitleTopPaddingMobile,
        label: "tabTitleTopPaddingMobile"
      },
      valueRightMobile: {
        value: tabTitleRightPaddingMobile,
        label: "tabTitleRightPaddingMobile"
      },
      valueBottomMobile: {
        value: tabTitleBottomPaddingMobile,
        label: "tabTitleBottomPaddingMobile"
      },
      valueLeftMobile: {
        value: tabTitleLeftPaddingMobile,
        label: "tabTitleLeftPaddingMobile"
      },
      unit: {
        value: tabTitlePaddingUnit,
        label: "tabTitlePaddingUnit"
      },
      mUnit: {
        value: mobiletabTitlePaddingUnit,
        label: "mobiletabTitlePaddingUnit"
      },
      tUnit: {
        value: tablettabTitlePaddingUnit,
        label: "tablettabTitlePaddingUnit"
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: tabTitlePaddingLink,
        label: "tabTitlePaddingLink"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Title Background Color", "ultimate-addons-for-gutenberg"),
      colorValue: headerBgColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          headerBgColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Title Text Color", "ultimate-addons-for-gutenberg"),
      colorValue: headerTextColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          headerTextColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Active Tab Background Color", "ultimate-addons-for-gutenberg"),
      colorValue: activeTabBgColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          activeTabBgColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Active Tab Text Color", "ultimate-addons-for-gutenberg"),
      colorValue: activeTabTextColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          activeTabTextColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_Components_typography__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Typography", "ultimate-addons-for-gutenberg"),
      attributes: attributes,
      setAttributes: setAttributes,
      loadGoogleFonts: {
        value: titleLoadGoogleFonts,
        label: "titleLoadGoogleFonts"
      },
      fontFamily: {
        value: titleFontFamily,
        label: "titleFontFamily"
      },
      fontWeight: {
        value: titleFontWeight,
        label: "titleFontWeight"
      },
      fontSubset: {
        value: titleFontSubset,
        label: "titleFontSubset"
      },
      fontSizeType: {
        value: titleFontSizeType,
        label: "titleFontSizeType"
      },
      fontSize: {
        value: titleFontSize,
        label: "titleFontSize"
      },
      fontSizeMobile: {
        value: titleFontSizeMobile,
        label: "titleFontSizeMobile"
      },
      fontSizeTablet: {
        value: titleFontSizeTablet,
        label: "titleFontSizeTablet"
      },
      lineHeightType: {
        value: titleLineHeightType,
        label: "titleLineHeightType"
      },
      lineHeight: {
        value: titleLineHeight,
        label: "titleLineHeight"
      },
      lineHeightMobile: {
        value: titleLineHeightMobile,
        label: "titleLineHeightMobile"
      },
      lineHeightTablet: {
        value: titleLineHeightTablet,
        label: "titleLineHeightTablet"
      },
      transform: {
        value: titleTransform,
        label: "titleTransform"
      },
      decoration: {
        value: titleDecoration,
        label: "titleDecoration"
      }
    }));
  };

  var tabBorderSettings = function tabBorderSettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Border Settings", "ultimate-addons-for-gutenberg"),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_border__WEBPACK_IMPORTED_MODULE_8__["default"], {
      setAttributes: setAttributes,
      borderStyle: {
        value: borderStyle,
        label: "borderStyle",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Style", "ultimate-addons-for-gutenberg")
      },
      borderWidth: {
        value: borderWidth,
        label: "borderWidth",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Width", "ultimate-addons-for-gutenberg")
      },
      borderRadius: {
        value: borderRadius,
        label: "borderRadius",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Radius", "ultimate-addons-for-gutenberg")
      },
      borderColor: {
        value: borderColor,
        label: "borderColor",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Color", "ultimate-addons-for-gutenberg")
      },
      borderHoverColor: {
        value: borderHoverColor,
        label: "borderHoverColor",
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Hover Color", "ultimate-addons-for-gutenberg")
      }
    }));
  };

  var tabBodySettings = function tabBodySettings() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_14__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Tabs Body Settings", "ultimate-addons-for-gutenberg"),
      initialOpen: false
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Body Background Color", "ultimate-addons-for-gutenberg"),
      colorValue: bodyBgColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          bodyBgColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_color_control_advanced_pop_color_control_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Body Text Color", "ultimate-addons-for-gutenberg"),
      colorValue: bodyTextColor,
      onColorChange: function onColorChange(value) {
        return setAttributes({
          bodyTextColor: value
        });
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Tab Body Margin", "ultimate-addons-for-gutenberg"),
      valueTop: {
        value: tabBodyTopMargin,
        label: "tabBodyTopMargin"
      },
      valueRight: {
        value: tabBodyRightMargin,
        label: "tabBodyRightMargin"
      },
      valueBottom: {
        value: tabBodyBottomMargin,
        label: "tabBodyBottomMargin"
      },
      valueLeft: {
        value: tabBodyLeftMargin,
        label: "tabBodyLeftMargin"
      },
      valueTopTablet: {
        value: tabBodyTopMarginTablet,
        label: "tabBodyTopMarginTablet"
      },
      valueRightTablet: {
        value: tabBodyRightMarginTablet,
        label: "tabBodyRightMarginTablet"
      },
      valueBottomTablet: {
        value: tabBodyBottomMarginTablet,
        label: "tabBodyBottomMarginTablet"
      },
      valueLeftTablet: {
        value: tabBodyLeftMarginTablet,
        label: "tabBodyLeftMarginTablet"
      },
      valueTopMobile: {
        value: tabBodyTopMarginMobile,
        label: "tabBodyTopMarginMobile"
      },
      valueRightMobile: {
        value: tabBodyRightMarginMobile,
        label: "tabBodyRightMarginMobile"
      },
      valueBottomMobile: {
        value: tabBodyBottomMarginMobile,
        label: "tabBodyBottomMarginMobile"
      },
      valueLeftMobile: {
        value: tabBodyLeftMarginMobile,
        label: "tabBodyLeftMarginMobile"
      },
      unit: {
        value: tabBodyMarginUnit,
        label: "tabBodyMarginUnit"
      },
      mUnit: {
        value: mobiletabBodyMarginUnit,
        label: "mobiletabBodyMarginUnit"
      },
      tUnit: {
        value: tablettabBodyMarginUnit,
        label: "tablettabBodyMarginUnit"
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: tabBodyMarginLink,
        label: "tabBodyMarginLink"
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_spacing_control__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, props, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_12__["__"])("Body Padding", "ultimate-addons-for-gutenberg"),
      valueTop: {
        value: tabBodyTopPadding,
        label: "tabBodyTopPadding"
      },
      valueRight: {
        value: tabBodyRightPadding,
        label: "tabBodyRightPadding"
      },
      valueBottom: {
        value: tabBodyBottomPadding,
        label: "tabBodyBottomPadding"
      },
      valueLeft: {
        value: tabBodyLeftPadding,
        label: "tabBodyLeftPadding"
      },
      valueTopTablet: {
        value: tabBodyTopPaddingTablet,
        label: "tabBodyTopPaddingTablet"
      },
      valueRightTablet: {
        value: tabBodyRightPaddingTablet,
        label: "tabBodyRightPaddingTablet"
      },
      valueBottomTablet: {
        value: tabBodyBottomPaddingTablet,
        label: "tabBodyBottomPaddingTablet"
      },
      valueLeftTablet: {
        value: tabBodyLeftPaddingTablet,
        label: "tabBodyLeftPaddingTablet"
      },
      valueTopMobile: {
        value: tabBodyTopPaddingMobile,
        label: "tabBodyTopPaddingMobile"
      },
      valueRightMobile: {
        value: tabBodyRightPaddingMobile,
        label: "tabBodyRightPaddingMobile"
      },
      valueBottomMobile: {
        value: tabBodyBottomPaddingMobile,
        label: "tabBodyBottomPaddingMobile"
      },
      valueLeftMobile: {
        value: tabBodyLeftPaddingMobile,
        label: "tabBodyLeftPaddingMobile"
      },
      unit: {
        value: tabBodyPaddingUnit,
        label: "tabBodyPaddingUnit"
      },
      mUnit: {
        value: mobiletabBodyPaddingUnit,
        label: "mobiletabBodyPaddingUnit"
      },
      tUnit: {
        value: tablettabBodyPaddingUnit,
        label: "tablettabBodyPaddingUnit"
      },
      attributes: attributes,
      setAttributes: setAttributes,
      link: {
        value: tabBodyPaddingLink,
        label: "tabBodyPaddingLink"
      }
    })));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_13__["InspectorControls"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_inspector_tabs_InspectorTabs_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
    tabs: ["general", "advance"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: "general"
  }, tabStyleSettings(), tabTitleSettings(), tabBodySettings(), tabBorderSettings()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_inspector_tabs_InspectorTab_js__WEBPACK_IMPORTED_MODULE_10__["default"], {
    key: "advance"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.memo(Settings));

/***/ }),

/***/ "./src/components/responsive-select/editor.lazy.scss":
/*!***********************************************************!*\
  !*** ./src/components/responsive-select/editor.lazy.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/components/responsive-select/editor.lazy.scss");

            

var refs = 0;
var update;
var options = {"injectType":"lazySingletonStyleTag","attributes":{"id":"uagb-editor-styles"}};

options.insert = "head";
options.singleton = true;

var exported = {};

exported.locals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {};
exported.use = function() {
  if (!(refs++)) {
    update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  return exported;
};
exported.unuse = function() {
  if (refs > 0 && !--refs) {
    update();
    update = null;
  }
};



;
       /* harmony default export */ __webpack_exports__["default"] = (exported);


/***/ }),

/***/ "./src/components/responsive-select/index.js":
/*!***************************************************!*\
  !*** ./src/components/responsive-select/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/components/responsive-select/editor.lazy.scss");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * External dependencies
 */






var ResponsiveSelectControl = function ResponsiveSelectControl(props) {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(function () {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_0__["default"].use();
    return function () {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_0__["default"].unuse();
    };
  }, []);
  var label = props.label,
      data = props.data,
      setAttributes = props.setAttributes,
      options = props.options;
  var deviceType = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useSelect"])(function (select) {
    return select("core/edit-post").__experimentalGetPreviewDeviceType();
  }, []);

  var _useDispatch = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])("core/edit-post"),
      setPreviewDeviceType = _useDispatch.__experimentalSetPreviewDeviceType;

  var customSetPreviewDeviceType = function customSetPreviewDeviceType(device) {
    setPreviewDeviceType(device);
  };

  var devices = [{
    name: "Desktop",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
      icon: "desktop"
    }),
    itemClass: "uagb-desktop-tab uagb-responsive-tabs"
  }, {
    name: "Tablet",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
      icon: "tablet"
    }),
    itemClass: "uagb-tablet-tab uagb-responsive-tabs"
  }, {
    name: "Mobile",
    key: "mobile",
    title: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dashicon"], {
      icon: "smartphone"
    }),
    itemClass: "uagb-mobile-tab uagb-responsive-tabs"
  }];
  var output = {};
  output.Desktop = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    value: data.desktop.value,
    onChange: function onChange(value) {
      return setAttributes(_defineProperty({}, data.desktop.label, value));
    },
    options: options.desktop
  });
  output.Tablet = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    value: data.tablet.value,
    onChange: function onChange(value) {
      return setAttributes(_defineProperty({}, data.tablet.label, value));
    },
    options: options.tablet || options.desktop
  });
  output.Mobile = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    value: data.mobile.value,
    onChange: function onChange(value) {
      return setAttributes(_defineProperty({}, data.mobile.label, value));
    },
    options: options.mobile || options.desktop
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "components-base-control uagb-responsive-select-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-control__header"
  }, label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "uagb-control__label"
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-control__actions"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-size-type-field-tabs"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
    className: "components-tab-panel__tabs",
    "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])("Device", "ultimate-addons-for-gutenberg")
  }, devices.map(function (_ref) {
    var name = _ref.name,
        key = _ref.key,
        title = _ref.title,
        itemClass = _ref.itemClass;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      key: key,
      className: "components-button components-tab-panel__tabs-item ".concat(itemClass).concat(name === deviceType ? " active-tab" : ""),
      "aria-pressed": deviceType === name,
      onClick: function onClick() {
        return customSetPreviewDeviceType(name);
      }
    }, title);
  }))))), output[deviceType] ? output[deviceType] : output.Desktop);
};

/* harmony default export */ __webpack_exports__["default"] = (ResponsiveSelectControl);

/***/ })

}]);
//# sourceMappingURL=settings.js.map