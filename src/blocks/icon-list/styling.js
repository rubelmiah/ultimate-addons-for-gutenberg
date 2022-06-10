/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';

function styling( props ) {
	const {
		align,
		alignTablet,
		alignMobile,
		gap,
		gapTablet,
		gapMobile,
		gapType,
		inner_gap,
		innerGapTablet,
		innerGapMobile,
		innerGapType,
		icon_layout,
		size,
		sizeType,
		sizeTablet,
		sizeMobile,
		fontSize,
		fontSizeType,
		fontSizeMobile,
		fontSizeTablet,
		fontFamily,
		fontWeight,
		lineHeightType,
		lineHeight,
		lineHeightTablet,
		lineHeightMobile,
		stack,
		border,
		borderTablet,
		borderMobile,
		borderType,
		bgSize,
		bgSizeType,
		bgSizeTablet,
		bgSizeMobile,
		borderRadius,
		borderRadiusTablet,
		borderRadiusMobile,
		borderRadiusType,
		fontStyle,
		fontTransform,
		fontDecoration,
		iconPosition,
		iconPositionTablet,
		iconPositionMobile,
		hideLabel,
	} = props.attributes;

	let selectors = {};
	let tabletSelectors = {};
	let mobileSelectors = {};
	let alignment = '';
	if ( align === 'left' ) {
		alignment = 'flex-start';
	} else if ( align === 'right' ) {
		alignment = 'flex-end';
	} else {
		alignment = 'center';
	}
	
	let tabletAlignment = alignment;

	if ( alignTablet === 'left' ) {
		tabletAlignment = 'flex-start';
	} else if ( alignTablet === 'right' ) {
		tabletAlignment = 'flex-end';
	} else if ( alignTablet === 'center' ) {
		tabletAlignment = 'center';
	}

	let mobileAlignment = tabletAlignment;

	if ( alignMobile === 'left' ) {
		mobileAlignment = 'flex-start';
	} else if ( alignMobile === 'right' ) {
		mobileAlignment = 'flex-end';
	} else if ( alignMobile === 'center' ) {
		mobileAlignment = 'center';
	}

	const editorGap = undefined !== typeof gap && '' !== gap ? gap : 15;
	const editorGapTablet = undefined !== typeof gapTablet && '' !== gapTablet ? gapTablet : 15;
	const editorGapMobile = undefined !== typeof gapMobile && '' !== gapMobile ? gapMobile : 15;

	const position = iconPosition === 'top' ? 'flex-start' : 'center';
	let positionTablet = '';
	let positionMobile = '';

	if( iconPositionTablet === 'top' ) {
		positionTablet = 'flex-start';
	} else if( iconPositionTablet === 'middle' ) {
		positionTablet = 'center';
	} else {
		positionTablet = position;
	}

	if( iconPositionMobile === 'top' ) {
		positionMobile = 'flex-start';
	} else if( iconPositionMobile === 'middle' ) {
		positionMobile = 'center';
	} else {
		positionMobile = positionTablet;
	}

	selectors = {
		' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap': {
			'padding': generateCSSUnit( bgSize, bgSizeType ),
			'border-radius': generateCSSUnit( borderRadius, borderRadiusType ),
			'border-style':
				0 === border || undefined === border ? 'none' : 'solid',
			'border-width': generateCSSUnit( border, borderType ),
			'align-self' : position
		},
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit( size, sizeType ),
		},
		' .uagb-icon-list__wrap .block-editor-inner-blocks': {
			'text-align': align,
		},
	};

	tabletSelectors = {
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit( sizeTablet, sizeType ),
		},
		' .uagb-icon-list__wrap .block-editor-inner-blocks': {
			'text-align': alignTablet,
		},
		
	};

	mobileSelectors = {
		' .uagb-icon-list__source-image': {
			'width': generateCSSUnit( sizeMobile, sizeType ),
		},
		' .uagb-icon-list__wrap .block-editor-inner-blocks': {
			'text-align': alignMobile,
		},
	};

	selectors[ ' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit( size, sizeType ),
		'height': generateCSSUnit( size, sizeType ),
		'font-size': generateCSSUnit( size, sizeType ),
	};
	tabletSelectors[ ' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeTablet, sizeType ),
		'height': generateCSSUnit( sizeTablet, sizeType ),
		'font-size': generateCSSUnit( sizeTablet, sizeType ),
	};
	
	mobileSelectors[' .uagb-icon-list__source-wrap svg' ] = {
		'width': generateCSSUnit( sizeMobile, sizeType ),
		'height': generateCSSUnit( sizeMobile, sizeType ),
		'font-size': generateCSSUnit( sizeMobile, sizeType ),
	};
	if ( 'horizontal' === icon_layout ) {
		if ( 'tablet' === stack ) {
			tabletSelectors[
				' .uagb-icon-list__wrap .wp-block[data-type="uagb/icon-list-child"]'
			] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( editorGapTablet, gapType ),
			};
			tabletSelectors[
				'.uagb-editor-preview-mode-tablet .uagb-icon-list__wrap .block-editor-inner-blocks'
			] = {
				'text-align': alignTablet,
			};
			tabletSelectors[
				'.uagb-editor-preview-mode-tablet .block-editor-block-list__layout'
			] = {
				'display': 'flex',
				'flex-direction': 'column',
			};
			mobileSelectors[
				'.uagb-editor-preview-mode-mobile .block-editor-block-list__layout'
			] = {
				'display': 'flex',
				'flex-direction': 'column',
			};
			mobileSelectors[
				'.uagb-editor-preview-mode-mobile .uagb-icon-list__wrap .block-editor-inner-blocks'
			] = {
				'text-align': alignMobile,
			};
			tabletSelectors[
				' .uagb-icon-list__wrap .wp-block[data-type="uagb/icon-list-child"]:last-child'
			] = {
				'margin-bottom': 0,
			};
		} else if ( 'mobile' === stack ) {
			mobileSelectors[
				' .uagb-icon-list__wrap .wp-block[data-type="uagb/icon-list-child"]'
			] = {
				'margin-left': 0,
				'margin-right': 0,
				'margin-bottom': generateCSSUnit( editorGapMobile, gapType ),
			};

			mobileSelectors[
				'.uagb-editor-preview-mode-mobile .block-editor-block-list__layout'
			] = {
				'display': 'flex',
				'flex-direction': 'column',
			};

			mobileSelectors[
				' .uagb-icon-list__wrap .wp-block-uagb-icon-list-child:last-child'
			] = {
				'margin-bottom': 0,
			};
			
			mobileSelectors[
				'.uagb-editor-preview-mode-mobile .uagb-icon-list__wrap .block-editor-inner-blocks'
			] = {
				'text-align': alignMobile,
			};
		}
		selectors[ ' .uagb-icon-list__wrap .block-editor-block-list__layout'] = {
			'justify-content': alignment,
			'-webkit-box-pack': alignment,
			'-ms-flex-pack': alignment,
			'align-items' : alignment,
		};
		selectors[' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': generateCSSUnit( editorGap / 2, gapType ),
			'margin-right': generateCSSUnit( editorGap / 2, gapType ),
			'display': 'inline-flex'
		};
		tabletSelectors[' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': generateCSSUnit( editorGapTablet / 2, gapType ),
			'margin-right': generateCSSUnit( editorGapTablet / 2, gapType ),
			'display': 'inline-flex'
		};
		tabletSelectors[' .uagb-icon-list__wrap .block-editor-block-list__layout' ] = {
			'justify-content': tabletAlignment,
			'-webkit-box-pack': tabletAlignment,
			'-ms-flex-pack': tabletAlignment,
			'align-items' : tabletAlignment,
		};
		mobileSelectors[' .block-editor-block-list__layout .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': generateCSSUnit( editorGapMobile / 2, gapType ),
			'margin-right': generateCSSUnit( editorGapMobile / 2, gapType ),
			'display': 'inline-flex'
		};
		mobileSelectors[ ' .uagb-icon-list__wrap .block-editor-block-list__layout'] = {
			'justify-content': mobileAlignment,
			'-webkit-box-pack': mobileAlignment,
			'-ms-flex-pack': mobileAlignment,
			'align-items' : mobileAlignment,
		};
	}
	if( 'vertical' === icon_layout  ) {
		selectors[ ' .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': 0,
			'margin-right': 0,
			'margin-bottom': generateCSSUnit( editorGap, gapType ),
		};
		mobileSelectors[ ' .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': 0,
			'margin-right': 0,
			'margin-bottom': generateCSSUnit( editorGapMobile, gapType ),
		};
		tabletSelectors[ ' .wp-block[data-type="uagb/icon-list-child"]' ] = {
			'margin-left': 0,
			'margin-right': 0,
			'margin-bottom': generateCSSUnit( editorGapTablet, gapType ),
		};
		selectors[ ' .uagb-icon-list__wrap' ] = {
			'flex-direction': 'column',
		};
	}

	if ( 'right' === align && hideLabel ) {
		selectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': '0px',
		};
		mobileSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': '0px',
		};
		tabletSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': '0px',
		};
	} else {
		selectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': generateCSSUnit( inner_gap, innerGapType ),
		};
		mobileSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': generateCSSUnit( innerGapMobile, innerGapType ),
		};
		tabletSelectors[
			' .uagb-icon-list__source-wrap'
		] = {
			'margin-right': generateCSSUnit( innerGapTablet, innerGapType ),
		};
	}

	selectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__label' ] = {
		'font-size': generateCSSUnit( fontSize, fontSizeType ),
		'font-family': fontFamily,
		'font-style' : fontStyle,
		'text-decoration': fontDecoration,
		'text-transform': fontTransform,
		'font-weight': fontWeight,
		'line-height': generateCSSUnit( lineHeight, lineHeightType ),
	};

	mobileSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__label' ] = {
		'font-size': generateCSSUnit( fontSizeMobile, fontSizeType ),
		'line-height': generateCSSUnit( lineHeightMobile, lineHeightType ),
	};

	tabletSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__label' ] = {
		'font-size': generateCSSUnit( fontSizeTablet, fontSizeType ),
		'line-height': generateCSSUnit( lineHeightTablet, lineHeightType ),
	};

	mobileSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap' ] = {
		'border-radius': generateCSSUnit( borderRadiusMobile, borderRadiusType ),
		'padding': generateCSSUnit( bgSizeMobile, 'px' ),
		'border-style':	0 === borderMobile || undefined === borderMobile ? 'none' : 'solid',
		'border-width': generateCSSUnit( borderMobile, borderType ),
		'align-self' : positionMobile,
	};

	tabletSelectors[ ' .wp-block-uagb-icon-list-child .uagb-icon-list__source-wrap' ] = {
		'border-radius': generateCSSUnit( borderRadiusTablet, borderRadiusType ),
		'padding': generateCSSUnit( bgSizeTablet, 'px' ),
		'border-style':	0 === borderTablet || undefined === borderTablet ? 'none' : 'solid',
		'border-width': generateCSSUnit( borderTablet, borderType ),
		'align-self' : positionTablet,
	};

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
