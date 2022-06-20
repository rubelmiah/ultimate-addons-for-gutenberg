/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBorderCSS from '@Controls/generateBorderCSS';

function styling( props ) {
	const {
		layout,
		inactiveOtherItems,
		expandFirstItem,
		rowsGap,
		rowsGapTablet,
		rowsGapMobile,
		rowsGapUnit,
		columnsGapUnit,
		columnsGap,
		columnsGapTablet,
		columnsGapMobile,
		align,
		enableSeparator,
		boxBgColor,
		overallBorderHColor,
		questionTextColor,
		questionTextActiveColor,
		questionPaddingTypeDesktop,
		questionPaddingTypeMobile,
		questionPaddingTypeTablet,
		vquestionPaddingMobile,
		vquestionPaddingTablet,
		vquestionPaddingDesktop,
		hquestionPaddingMobile,
		hquestionPaddingTablet,
		hquestionPaddingDesktop,
		answerTextColor,
		answerPaddingTypeDesktop,
		answerPaddingTypeMobile,
		answerPaddingTypeTablet,
		answerTopPadding,
		answerBottomPadding,
		answerRightPadding,
		answerLeftPadding,
		answerTopPaddingTablet,
		answerBottomPaddingTablet,
		answerRightPaddingTablet,
		answerLeftPaddingTablet,
		answerTopPaddingMobile,
		answerBottomPaddingMobile,
		answerRightPaddingMobile,
		answerLeftPaddingMobile,
		iconColor,
		iconActiveColor,
		gapBtwIconQUestion,
		gapBtwIconQUestionTablet,
		gapBtwIconQUestionMobile,
		questionFontFamily,
		questionFontWeight,
		questionFontSizeType,
		questionFontSize,
		questionFontSizeMobile,
		questionFontSizeTablet,
		questionLineHeightType,
		questionLineHeight,
		questionLineHeightMobile,
		questionLineHeightTablet,
		answerFontFamily,
		answerFontWeight,
		answerFontSizeType,
		answerFontSize,
		answerFontSizeMobile,
		answerFontSizeTablet,
		answerLineHeightType,
		answerLineHeight,
		answerLineHeightMobile,
		answerLineHeightTablet,
		iconAlign,
		iconSize,
		iconSizeType,
		iconSizeMobile,
		iconSizeTablet,
		columns,
		tcolumns,
		mcolumns,
		questionLeftPaddingTablet,
		questionBottomPaddingTablet,
		questionLeftPaddingDesktop,
		questionBottomPaddingDesktop,
		questionLeftPaddingMobile,
		questionBottomPaddingMobile,
		answerFontStyle,
		answerTransform,
		answerDecoration,
		questionFontStyle,
		questionTransform,
		questionDecoration,
	} = props.attributes;


	const borderCSS = generateBorderCSS( props.attributes, 'overall', '' );
	const borderCSSTablet = generateBorderCSS( props.attributes,'overall', 'tablet' );
	const borderCSSMobile = generateBorderCSS( props.attributes,'overall', 'mobile' );

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};
	let iconColorTemp = iconColor;
	let iconActiveColorTemp = iconActiveColor;

	if ( 'undefined' === typeof iconColor ) {
		iconColorTemp = questionTextColor;
	}
	if ( 'undefined' === typeof iconActiveColor ) {
		iconActiveColorTemp = questionTextActiveColor;
	}

	selectors = {
		' .uagb-icon svg': {
			'width': generateCSSUnit( iconSize, iconSizeType ),
			'height': generateCSSUnit( iconSize, iconSizeType ),
			'font-size': generateCSSUnit( iconSize, iconSizeType ),
			'fill': iconColorTemp,
		},
		' .uagb-icon-active svg': {
			'width': generateCSSUnit( iconSize, iconSizeType ),
			'height': generateCSSUnit( iconSize, iconSizeType ),
			'font-size': generateCSSUnit( iconSize, iconSizeType ),
			'fill': iconActiveColorTemp,
		},
		' .uagb-faq-child__outer-wrap': {
			'margin-bottom': generateCSSUnit( rowsGap, rowsGapUnit ),
		},
		'.uagb-faq-layout-grid .block-editor-inner-blocks .block-editor-block-list__layout': {
			'grid-column-gap': generateCSSUnit( columnsGap, columnsGapUnit ),
			'grid-row-gap': generateCSSUnit( rowsGap, rowsGapUnit ),
		},
		' .uagb-faq-item': {
			'background-color': boxBgColor,
			...borderCSS
		},
		' .uagb-faq-item:hover': {
			'border-color': overallBorderHColor,
		},
		' .uagb-faq-item .uagb-question': {
			'color': questionTextColor,
		},
		' .uagb-faq-item.uagb-faq-item-active .uagb-question': {
			'color': questionTextActiveColor,
		},
		' .uagb-faq-item:hover .uagb-question': {
			'color': questionTextActiveColor,
		},
		' .uagb-faq-questions-button': {
			'padding-top': generateCSSUnit(
				vquestionPaddingDesktop,
				questionPaddingTypeDesktop
			),
			'padding-bottom': generateCSSUnit(
				questionBottomPaddingDesktop,
				questionPaddingTypeDesktop
			),
			'padding-right': generateCSSUnit(
				hquestionPaddingDesktop,
				questionPaddingTypeDesktop
			),
			'padding-left': generateCSSUnit(
				questionLeftPaddingDesktop,
				questionPaddingTypeDesktop
			),
		},
		' .uagb-faq-content': {
			'padding-top': generateCSSUnit(
				answerTopPadding,
				answerPaddingTypeDesktop
			),
			'padding-bottom': generateCSSUnit(
				answerBottomPadding,
				answerPaddingTypeDesktop
			),
			'padding-right': generateCSSUnit(
				answerRightPadding,
				answerPaddingTypeDesktop
			),
			'padding-left': generateCSSUnit(
				answerLeftPadding,
				answerPaddingTypeDesktop
			),
		},
		'.uagb-faq-icon-row .uagb-faq-item .uagb-faq-icon-wrap': {
			'margin-right': generateCSSUnit( gapBtwIconQUestion, 'px' ),
		},
		'.uagb-faq-icon-row-reverse .uagb-faq-item .uagb-faq-icon-wrap': {
			'margin-left': generateCSSUnit( gapBtwIconQUestion, 'px' ),
		},
		' .uagb-faq-item:hover .uagb-icon svg': {
			'fill': iconActiveColorTemp,
		},
		' .uagb-faq-item .uagb-faq-questions-button.uagb-faq-questions': {
			'flex-direction': iconAlign,
		},
		' .uagb-faq-questions-button .uagb-question': {
			'font-size': generateCSSUnit(
				questionFontSize,
				questionFontSizeType
			),
			'line-height': generateCSSUnit(
				questionLineHeight,
				questionLineHeightType
			),
			'font-family': questionFontFamily,
			'font-style' : questionFontStyle,
			'text-decoration': questionDecoration,
			'text-transform': questionTransform,
			'font-weight': questionFontWeight,
		},
		' .uagb-faq-item .uagb-faq-content': {
			'font-size': generateCSSUnit( answerFontSize, answerFontSizeType ),
			'line-height': generateCSSUnit(
				answerLineHeight,
				answerLineHeightType
			),
			'font-family': answerFontFamily,
			'font-style' : answerFontStyle,
			'text-decoration': answerDecoration,
			'text-transform': answerTransform,
			'font-weight': answerFontWeight,
			'color': answerTextColor,
		},
	};

	tabletSelectors = {
		' .uagb-faq-questions-button': {
			'padding-top': generateCSSUnit(
				vquestionPaddingTablet,
				questionPaddingTypeTablet
			),
			'padding-bottom': generateCSSUnit(
				questionBottomPaddingTablet,
				questionPaddingTypeTablet
			),
			'padding-right': generateCSSUnit(
				hquestionPaddingTablet,
				questionPaddingTypeTablet
			),
			'padding-left': generateCSSUnit(
				questionLeftPaddingTablet,
				questionPaddingTypeTablet
			),
		},
		' .uagb-faq-item': {
			...borderCSSTablet
		},
		' .uagb-faq-content': {
			'padding-top': generateCSSUnit(
				answerTopPaddingTablet,
				answerPaddingTypeTablet
			),
			'padding-bottom': generateCSSUnit(
				answerBottomPaddingTablet,
				answerPaddingTypeTablet
			),
			'padding-right': generateCSSUnit(
				answerRightPaddingTablet,
				answerPaddingTypeTablet
			),
			'padding-left': generateCSSUnit(
				answerLeftPaddingTablet,
				answerPaddingTypeTablet
			),
		},
		' .uagb-faq-questions-button .uagb-question': {
			'font-size': generateCSSUnit(
				questionFontSizeTablet,
				questionFontSizeType
			),
			'line-height': generateCSSUnit(
				questionLineHeightTablet,
				questionLineHeightType
			),
		},
		' .uagb-faq-item .uagb-faq-content': {
			'font-size': generateCSSUnit(
				answerFontSizeTablet,
				answerFontSizeType
			),
			'line-height': generateCSSUnit(
				answerLineHeightTablet,
				answerLineHeightType
			),
		},
		' .uagb-icon svg': {
			'width': generateCSSUnit( iconSizeTablet, iconSizeType ),
			'height': generateCSSUnit( iconSizeTablet, iconSizeType ),
			'font-size': generateCSSUnit( iconSizeTablet, iconSizeType ),
		},
		'.uagb-faq-icon-row .uagb-faq-item .uagb-faq-icon-wrap': {
			'margin-right': generateCSSUnit( gapBtwIconQUestionTablet, 'px' ),
		},
		'.uagb-faq-icon-row-reverse .uagb-faq-item .uagb-faq-icon-wrap': {
			'margin-left': generateCSSUnit( gapBtwIconQUestionTablet, 'px' ),
		},
		' .uagb-icon-active svg': {
			'width': generateCSSUnit( iconSizeTablet, iconSizeType ),
			'height': generateCSSUnit( iconSizeTablet, iconSizeType ),
			'font-size': generateCSSUnit( iconSizeTablet, iconSizeType ),
		},
		' .uagb-faq-child__outer-wrap': {
			'margin-bottom': generateCSSUnit( rowsGapTablet, rowsGapUnit ),
		},
		'.uagb-faq-layout-grid .block-editor-inner-blocks .block-editor-block-list__layout': {
			'grid-column-gap': generateCSSUnit( columnsGapTablet, columnsGapUnit ),
			'grid-row-gap': generateCSSUnit( rowsGapTablet, rowsGapUnit ),
		},
	};

	mobileSelectors = {
		' .uagb-faq-item': {
			...borderCSSMobile
		},
		'.uagb-faq-icon-row .uagb-faq-item .uagb-faq-icon-wrap': {
			'margin-right': generateCSSUnit( gapBtwIconQUestionMobile, 'px' ),
		},
		'.uagb-faq-icon-row-reverse .uagb-faq-item .uagb-faq-icon-wrap': {
			'margin-left': generateCSSUnit( gapBtwIconQUestionMobile, 'px' ),
		},
		' .uagb-faq-questions-button': {
			'padding-top': generateCSSUnit(
				vquestionPaddingMobile,
				questionPaddingTypeMobile
			),
			'padding-bottom': generateCSSUnit(
				questionBottomPaddingMobile,
				questionPaddingTypeMobile
			),
			'padding-right': generateCSSUnit(
				hquestionPaddingMobile,
				questionPaddingTypeMobile
			),
			'padding-left': generateCSSUnit(
				questionLeftPaddingMobile,
				questionPaddingTypeMobile
			),
		},
		' .uagb-faq-content': {
			'padding-top': generateCSSUnit(
				answerTopPaddingMobile,
				answerPaddingTypeMobile
			),
			'padding-bottom': generateCSSUnit(
				answerBottomPaddingMobile,
				answerPaddingTypeMobile
			),
			'padding-right': generateCSSUnit(
				answerRightPaddingMobile,
				answerPaddingTypeMobile
			),
			'padding-left': generateCSSUnit(
				answerLeftPaddingMobile,
				answerPaddingTypeMobile
			),
		},
		' .uagb-faq-questions-button .uagb-question': {
			'font-size': generateCSSUnit(
				questionFontSizeMobile,
				questionFontSizeType
			),
			'line-height': generateCSSUnit(
				questionLineHeightMobile,
				questionLineHeightType
			),
		},
		' .uagb-faq-item .uagb-faq-content': {
			'font-size': generateCSSUnit(
				answerFontSizeMobile,
				answerFontSizeType
			),
			'line-height': generateCSSUnit(
				answerLineHeightMobile,
				answerLineHeightType
			),
		},
		' .uagb-icon svg': {
			'width': generateCSSUnit( iconSizeMobile, iconSizeType ),
			'height': generateCSSUnit( iconSizeMobile, iconSizeType ),
			'font-size': generateCSSUnit( iconSizeMobile, iconSizeType ),
		},
		' .uagb-icon-active svg': {
			'width': generateCSSUnit( iconSizeMobile, iconSizeType ),
			'height': generateCSSUnit( iconSizeMobile, iconSizeType ),
			'font-size': generateCSSUnit( iconSizeMobile, iconSizeType ),
		},
		' .uagb-faq-child__outer-wrap': {
			'margin-bottom': generateCSSUnit( rowsGapMobile, rowsGapUnit ),
		},
		'.uagb-faq-layout-grid .block-editor-inner-blocks .block-editor-block-list__layout': {
			'grid-column-gap': generateCSSUnit( columnsGapMobile, columnsGapUnit ),
			'grid-row-gap': generateCSSUnit( rowsGapMobile, rowsGapUnit ),
		},
	};

	if ( 'accordion' === layout && true === inactiveOtherItems ) {
		selectors[
			' .block-editor-block-list__layout .uagb-faq-child__outer-wrap .uagb-faq-content '
		] = {
			'display': 'none',
		};
	}
	if ( 'accordion' === layout && false === inactiveOtherItems ) {
		selectors[
			' .block-editor-inner-blocks .uagb-faq-child__outer-wrap.uagb-faq-item .uagb-faq-questions-button .uagb-icon-active'
		] = {
			'display': 'flex',
		};
		selectors[
			' .block-editor-inner-blocks .uagb-faq-child__outer-wrap.uagb-faq-item .uagb-faq-questions-button .uagb-icon'
		] = {
			'display': 'none',
		};
	}
	if ( 'accordion' === layout && true === expandFirstItem ) {
		selectors[
			' .block-editor-block-list__layout > div:first-child > .uagb-faq-child__outer-wrap .uagb-faq-content '
		] = {
			'display': 'block',
		};
		selectors[
			' .block-editor-block-list__layout > div:first-child > .uagb-faq-child__outer-wrap.uagb-faq-item .uagb-faq-questions-button .uagb-icon-active '
		] = {
			'display': 'flex',
		};
		selectors[
			' .block-editor-block-list__layout > div:first-child > .uagb-faq-child__outer-wrap.uagb-faq-item .uagb-faq-questions-button .uagb-icon '
		] = {
			'display': 'none',
		};
	}
	if ( true === enableSeparator ) {
		selectors[
			'.uagb-faq__outer-wrap .uagb-faq-child__outer-wrap .uagb-faq-content '
		] = {
			'border-style': 'solid',
			...borderCSS
		};
		selectors[
			'.uagb-faq__outer-wrap .uagb-faq-child__outer-wrap .uagb-faq-content:hover '
		] = {
			'border-top-color': overallBorderHColor,
		};
	}
	if ( 'grid' === layout ) {
		selectors[
			' .block-editor-block-list__layout .uagb-faq-child__outer-wrap '
		] = {
			'text-align': align,
		};
		selectors[
			'.uagb-faq-layout-grid .block-editor-inner-blocks > .block-editor-block-list__layout '
		] = {
			'grid-template-columns': 'repeat(' + columns + ', 1fr)',
		};
		tabletSelectors[
			'.uagb-faq-layout-grid .block-editor-inner-blocks > .block-editor-block-list__layout '
		] = {
			'grid-template-columns': 'repeat(' + tcolumns + ', 1fr)',
		};
		mobileSelectors[
			'.uagb-faq-layout-grid .block-editor-inner-blocks > .block-editor-block-list__layout '
		] = {
			'grid-template-columns': 'repeat(' + mcolumns + ', 1fr)',
		};
	}

	let stylingCss = '';
	const id = `.uagb-block-${ props.clientId.substr( 0, 8 ) }`;

	stylingCss = generateCSS( selectors, id );

	stylingCss += generateCSS(
		tabletSelectors,
		`${ id }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	stylingCss += generateCSS(
		mobileSelectors,
		`${ id }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	return stylingCss;
}

export default styling;
