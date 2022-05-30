/**
 * Returns Dynamic Generated CSS
 */

import generateCSS from '@Controls/generateCSS';
import generateCSSUnit from '@Controls/generateCSSUnit';
import generateBackgroundCSS from '@Controls/generateBackgroundCSS';
import hexToRgba from '@Controls/hexToRgba';
import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';

function styling( props ) {
	const { attributes } = props;
	let {
		block_id,
		widthDesktop,
		widthTablet,
		widthMobile,
		widthType,
		minHeightDesktop,
		minHeightTablet,
		minHeightMobile,
		minHeightType,
		directionDesktop,
		directionTablet,
		directionMobile,
		alignItemsDesktop,
		alignItemsTablet,
		alignItemsMobile,
		justifyContentDesktop,
		justifyContentTablet,
		justifyContentMobile,
		wrapDesktop,
		wrapTablet,
		wrapMobile,
		alignContentDesktop,
		alignContentTablet,
		alignContentMobile,
		backgroundType,
		backgroundImageDesktop,
		backgroundImageTablet,
		backgroundImageMobile,
		backgroundColor,
		backgroundPositionDesktop,
		backgroundPositionTablet,
		backgroundPositionMobile,
		backgroundAttachmentDesktop,
		backgroundAttachmentTablet,
		backgroundAttachmentMobile,
		backgroundRepeatDesktop,
		backgroundRepeatTablet,
		backgroundRepeatMobile,
		backgroundSizeDesktop,
		backgroundSizeTablet,
		backgroundSizeMobile,
		gradientValue,
		borderStyle,
		borderWidth,
		borderRadius,
		borderColor,
		borderHoverColor,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		boxShadowColorHover,
		boxShadowHOffsetHover,
		boxShadowVOffsetHover,
		boxShadowBlurHover,
		boxShadowSpreadHover,
		boxShadowPositionHover,

		topPaddingDesktop,
		bottomPaddingDesktop,
		leftPaddingDesktop,
		rightPaddingDesktop,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		paddingType,
		paddingTypeTablet,
		paddingTypeMobile,
		topMarginDesktop,
		bottomMarginDesktop,
		leftMarginDesktop,
		rightMarginDesktop,
		topMarginTablet,
		bottomMarginTablet,
		leftMarginTablet,
		rightMarginTablet,
		topMarginMobile,
		bottomMarginMobile,
		leftMarginMobile,
		rightMarginMobile,
		marginType,
		marginTypeTablet,
		marginTypeMobile,
		rowGapDesktop,
		rowGapTablet,
		rowGapMobile,
		rowGapType,
		rowGapTypeTablet,
		rowGapTypeMobile,
		columnGapDesktop,
		columnGapTablet,
		columnGapMobile,
		columnGapType,
		columnGapTypeTablet,
		columnGapTypeMobile,
		contentWidth,
		innerContentWidth,
		bottomColor,
		bottomHeight,
		bottomHeightTablet,
		bottomHeightMobile,
		bottomWidth,
		topColor,
		topHeight,
		topHeightTablet,
		topHeightMobile,
		topWidth,
		backgroundCustomSizeDesktop,
		backgroundCustomSizeTablet,
		backgroundCustomSizeMobile,
		backgroundCustomSizeType,
		backgroundImageColor,
		overlayType,
		backgroundVideoOpacity,
		backgroundVideoColor,
		innerContentCustomWidthType,
		backgroundVideo,

		textColor,
		linkColor,
		linkHoverColor,
	} = attributes;

	topPaddingTablet = topPaddingTablet ? topPaddingTablet : topPaddingDesktop;
	topPaddingMobile = topPaddingMobile ? topPaddingMobile : topPaddingTablet;

	bottomPaddingTablet = bottomPaddingTablet ? bottomPaddingTablet : bottomPaddingDesktop;
	bottomPaddingMobile = bottomPaddingMobile ? bottomPaddingMobile : bottomPaddingTablet;

	leftPaddingTablet = leftPaddingTablet ? leftPaddingTablet : leftPaddingDesktop;
	leftPaddingMobile = leftPaddingMobile ? leftPaddingMobile : leftPaddingTablet;

	rightPaddingTablet = rightPaddingTablet ? rightPaddingTablet : rightPaddingDesktop;
	rightPaddingMobile = rightPaddingMobile ? rightPaddingMobile : rightPaddingTablet;

	topMarginTablet = topMarginTablet ? topMarginTablet : topMarginDesktop;
	topMarginMobile = topMarginMobile ? topMarginMobile : topMarginTablet;

	bottomMarginTablet = bottomMarginTablet ? bottomMarginTablet : bottomMarginDesktop;
	bottomMarginMobile = bottomMarginMobile ? bottomMarginMobile : bottomMarginTablet;

	leftMarginTablet = leftMarginTablet ? leftMarginTablet : leftMarginDesktop;
	leftMarginMobile = leftMarginMobile ? leftMarginMobile : leftMarginTablet;

	rightMarginTablet = rightMarginTablet ? rightMarginTablet : rightMarginDesktop;
	rightMarginMobile = rightMarginMobile ? rightMarginMobile : rightMarginTablet;

	const containerFullWidth = '100vw';

	const backgroundVideoOpacityValue = ( backgroundVideoOpacity && 'none' !== overlayType && ( ( 'color' === overlayType &&backgroundVideoColor ) || ( 'gradient' === overlayType && gradientValue ) ) ) ? 1 - backgroundVideoOpacity : 1;

	const videoBackgroundAttributes = {
        'backgroundType': backgroundType,
        'backgroundImage': backgroundImageDesktop,
        'backgroundColor': backgroundColor,
        'gradientValue': gradientValue,
        'backgroundRepeat': backgroundRepeatDesktop,
        'backgroundPosition': backgroundPositionDesktop,
        'backgroundSize': backgroundSizeDesktop,
        'backgroundAttachment': backgroundAttachmentDesktop,
		'backgroundCustomSize' : backgroundCustomSizeDesktop,
		'backgroundCustomSizeType' : backgroundCustomSizeType,
		'backgroundImageColor' : backgroundImageColor,
		'overlayType' : overlayType,
		'backgroundVideo' : backgroundVideo,
		'backgroundVideoColor' : backgroundVideoColor,
    };

	const videoBackgroundCSS = generateBackgroundCSS( videoBackgroundAttributes );

	const selectors = {
		' .wp-block-uagb-container .block-editor-block-list__block' : {
			'color': textColor,
		},
		' .wp-block-uagb-container .block-editor-block-list__block a' : {
			'color': linkColor,
		},
		' .wp-block-uagb-container .block-editor-block-list__block a:hover' : {
			'color': linkHoverColor,
		},
		' .uagb-container__shape-top svg' : {
			'width': 'calc( ' + topWidth + '% + 1.3px )',
			'height': generateCSSUnit( topHeight, 'px' )
		},
		' .uagb-container__shape-top .uagb-container__shape-fill' : {
			'fill': hexToRgba( maybeGetColorForVariable( topColor ), 100 ),
		},
		' .uagb-container__shape-bottom svg' : {
			'width': 'calc( ' + bottomWidth + '% + 1.3px )',
			'height': generateCSSUnit( bottomHeight, 'px' )
		},
		' .uagb-container__shape-bottom .uagb-container__shape-fill' : {
			'fill': hexToRgba( maybeGetColorForVariable( bottomColor ), 100 ),
		},
		' .uagb-container__video-wrap' : {
			...videoBackgroundCSS
		},
		' .uagb-container__video-wrap video' : {
			'opacity': backgroundVideoOpacityValue
		}
	};

	const backgroundAttributesDesktop = {
        'backgroundType': backgroundType,
        'backgroundImage': backgroundImageDesktop,
        'backgroundColor': backgroundColor,
        'gradientValue': gradientValue,
        'backgroundRepeat': backgroundRepeatDesktop,
        'backgroundPosition': backgroundPositionDesktop,
        'backgroundSize': backgroundSizeDesktop,
        'backgroundAttachment': backgroundAttachmentDesktop,
		'backgroundCustomSize' : backgroundCustomSizeDesktop,
		'backgroundCustomSizeType' : backgroundCustomSizeType,
		'backgroundImageColor' : backgroundImageColor,
		'overlayType' : overlayType,
		'backgroundVideo' : backgroundVideo,
		'backgroundVideoColor' : backgroundVideoColor,
    };

	const containerBackgroundCSSDesktop = generateBackgroundCSS( backgroundAttributesDesktop );

	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	let boxShadowPositionCSSHover = boxShadowPositionHover;

	if ( 'outset' === boxShadowPositionHover ) {
		boxShadowPositionCSSHover = '';
	}

	const containerCSS = {
		'padding-top': generateCSSUnit( topPaddingDesktop, paddingType ),
		'padding-bottom': generateCSSUnit( bottomPaddingDesktop, paddingType ),
		'padding-left': generateCSSUnit( leftPaddingDesktop, paddingType ),
		'padding-right': generateCSSUnit( rightPaddingDesktop, paddingType ),
		'margin-top': generateCSSUnit( topMarginDesktop, marginType ),
		'margin-bottom': generateCSSUnit( bottomMarginDesktop, marginType ),
		'margin-left': generateCSSUnit( leftMarginDesktop, marginType ),
		'margin-right': generateCSSUnit( rightMarginDesktop, marginType ),
		'border-style': borderStyle,
		'border-color': borderColor,
		'border-radius': generateCSSUnit( borderRadius, 'px' ),
		'border-width': generateCSSUnit( borderWidth, 'px' ),
		...containerBackgroundCSSDesktop,
		'box-shadow':
		generateCSSUnit( boxShadowHOffset, 'px' ) + ' ' + generateCSSUnit( boxShadowVOffset, 'px' ) +	' ' +
		generateCSSUnit( boxShadowBlur, 'px' ) + ' ' +	generateCSSUnit( boxShadowSpread, 'px' ) + ' ' +
		boxShadowColor + ' ' +	boxShadowPositionCSS,
		'min-height' : generateCSSUnit( minHeightDesktop, minHeightType ),
	}

	selectors['.wp-block'] = containerCSS;
	selectors['.wp-block:hover'] = {
		'border-color': borderHoverColor,
		'box-shadow':
		generateCSSUnit( boxShadowHOffsetHover, 'px' ) + ' ' + generateCSSUnit( boxShadowVOffsetHover, 'px' ) +	' ' +
		generateCSSUnit( boxShadowBlurHover, 'px' ) + ' ' +	generateCSSUnit( boxShadowSpreadHover, 'px' ) + ' ' +
		boxShadowColorHover + ' ' +	boxShadowPositionCSSHover,
	};

	selectors[' > .wp-block-uagb-container > .uagb-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout'] = {
		'min-height' : generateCSSUnit( minHeightDesktop, minHeightType ),
		'flex-direction' : directionDesktop,
		'align-items' : alignItemsDesktop,
		'justify-content' : justifyContentDesktop,
		'flex-wrap' : wrapDesktop,
		'align-content' : alignContentDesktop,
		'row-gap' : generateCSSUnit( rowGapDesktop, rowGapType ),
		'column-gap' : generateCSSUnit( columnGapDesktop, columnGapType ),
	}
	selectors['.block-editor-block-list__block'] = {
		'min-height' : generateCSSUnit( minHeightDesktop, minHeightType ),
		'flex-direction' : directionDesktop,
		'align-items' : alignItemsDesktop,
		'justify-content' : justifyContentDesktop,
		'flex-wrap' : wrapDesktop,
		'align-content' : alignContentDesktop,
	}

	const widthSelectorsDesktop = {
		[`.is-root-container > .block-editor-block-list__block .block-editor-block-list__block#block-${ props.clientId } `] : {
			'max-width' : generateCSSUnit( widthDesktop, widthType ),
			'width' : generateCSSUnit( widthDesktop, widthType ),
		}
	};

	const widthSelectorsTablet = {
		[`.is-root-container > .block-editor-block-list__block .uagb-editor-preview-mode-tablet.block-editor-block-list__block#block-${ props.clientId } `] : {
			'max-width' : generateCSSUnit( widthTablet, widthType ),
			'width' : generateCSSUnit( widthTablet, widthType ),
		},
	};

	const widthSelectorsMobile = {
		[`.is-root-container > .block-editor-block-list__block .uagb-editor-preview-mode-mobile.block-editor-block-list__block#block-${ props.clientId } `] : {
			'max-width' : generateCSSUnit( widthMobile, widthType ),
			'width' : generateCSSUnit( widthMobile, widthType ),
		},
	};

	if ( ( 'alignfull' === contentWidth || 'default' === contentWidth ) && 'alignwide' === innerContentWidth ) {

		widthSelectorsDesktop[`.is-root-container > .block-editor-block-list__block > .wp-block-uagb-container.uagb-block-${ block_id } > .uagb-container-inner-blocks-wrap`] = {
			'--inner-content-custom-width' : `min(${containerFullWidth},${attributes.innerContentCustomWidthDesktop}${innerContentCustomWidthType})`,
			'max-width' : 'var(--inner-content-custom-width)',
			'margin-left': 'auto',
			'margin-right': 'auto'
		};

		widthSelectorsTablet[`.is-root-container > .block-editor-block-list__block.uagb-editor-preview-mode-tablet > .wp-block-uagb-container.uagb-block-${ block_id } > .uagb-container-inner-blocks-wrap`] = {
			'--inner-content-custom-width' : `min(${containerFullWidth},${attributes.innerContentCustomWidthTablet || attributes.innerContentCustomWidthDesktop}${innerContentCustomWidthType})`,
			'max-width' : 'var(--inner-content-custom-width)',
			'margin-left': 'auto',
			'margin-right': 'auto'
		};

		widthSelectorsMobile[`.is-root-container > .block-editor-block-list__block.uagb-editor-preview-mode-mobile > .wp-block-uagb-container.uagb-block-${ block_id } > .uagb-container-inner-blocks-wrap`] = {
			'--inner-content-custom-width' : `min(${containerFullWidth},${ attributes.innerContentCustomWidthMobile || attributes.innerContentCustomWidthTablet || attributes.innerContentCustomWidthDesktop}${innerContentCustomWidthType})`,
			'max-width' : 'var(--inner-content-custom-width)',
			'margin-left': 'auto',
			'margin-right': 'auto'
		};
	}

	const backgroundAttributesTablet = {
        'backgroundType': backgroundType,
        'backgroundImage': backgroundImageTablet,
        'backgroundColor': backgroundColor,
        'gradientValue': gradientValue,
        'backgroundRepeat': backgroundRepeatTablet,
        'backgroundPosition': backgroundPositionTablet,
        'backgroundSize': backgroundSizeTablet,
        'backgroundAttachment': backgroundAttachmentTablet,
		'backgroundCustomSize' : backgroundCustomSizeTablet,
		'backgroundCustomSizeType' : backgroundCustomSizeType,
		'backgroundImageColor' : backgroundImageColor,
		'overlayType' : overlayType,
		'backgroundVideo' : backgroundVideo,
		'backgroundVideoColor' : backgroundVideoColor,
    };

	const containerBackgroundCSSTablet = generateBackgroundCSS( backgroundAttributesTablet );

	const tablet_selectors = {
		'.wp-block' : {
			'padding-top': generateCSSUnit( topPaddingTablet, paddingTypeTablet ),
			'padding-bottom': generateCSSUnit( bottomPaddingTablet, paddingTypeTablet ),
			'padding-left': generateCSSUnit( leftPaddingTablet, paddingTypeTablet ),
			'padding-right': generateCSSUnit( rightPaddingTablet, paddingTypeTablet ),
			'margin-top': generateCSSUnit( topMarginTablet, marginTypeTablet ),
			'margin-bottom': generateCSSUnit( bottomMarginTablet, marginTypeTablet ),
			'margin-left': generateCSSUnit( leftMarginTablet, marginTypeTablet ),
			'margin-right': generateCSSUnit( rightMarginTablet, marginTypeTablet ),
			'min-height' : generateCSSUnit( minHeightTablet, minHeightType ),
			...containerBackgroundCSSTablet
		},
		' > .wp-block-uagb-container > .uagb-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout' : {
			'flex-direction' : directionTablet,
			'align-items' : alignItemsTablet,
			'justify-content' : justifyContentTablet,
			'flex-wrap' : wrapTablet,
			'align-content' : alignContentTablet,
			'row-gap' : generateCSSUnit( rowGapTablet, rowGapTypeTablet ),
			'column-gap' : generateCSSUnit( columnGapTablet, columnGapTypeTablet ),
		},
		'.block-editor-block-list__block' : {
			'min-height' : generateCSSUnit( minHeightTablet, minHeightType ),
			'flex-direction' : directionTablet,
			'align-items' : alignItemsTablet,
			'justify-content' : justifyContentTablet,
			'flex-wrap' : wrapTablet,
			'align-content' : alignContentTablet,
		},
		' .uagb-container__shape-top svg' : {
			'height': generateCSSUnit( topHeightTablet, 'px' )
		},
		' .uagb-container__shape-bottom svg' : {
			'height': generateCSSUnit( bottomHeightTablet, 'px' )
		},
	};

	const backgroundAttributesMobile = {
        'backgroundType': backgroundType,
        'backgroundImage': backgroundImageMobile,
        'backgroundColor': backgroundColor,
        'gradientValue': gradientValue,
        'backgroundRepeat': backgroundRepeatMobile,
        'backgroundPosition': backgroundPositionMobile,
        'backgroundSize': backgroundSizeMobile,
        'backgroundAttachment': backgroundAttachmentMobile,
		'backgroundCustomSize' : backgroundCustomSizeMobile,
		'backgroundCustomSizeType' : backgroundCustomSizeType,
		'backgroundImageColor' : backgroundImageColor,
		'overlayType' : overlayType,
		'backgroundVideo' : backgroundVideo,
		'backgroundVideoColor' : backgroundVideoColor,
    };

	const containerBackgroundCSSMobile = generateBackgroundCSS( backgroundAttributesMobile );

	const mobile_selectors = {
		'.wp-block' : {
			'padding-top': generateCSSUnit( topPaddingMobile, paddingTypeMobile ),
			'padding-bottom': generateCSSUnit( bottomPaddingMobile, paddingTypeMobile ),
			'padding-left': generateCSSUnit( leftPaddingMobile, paddingTypeMobile ),
			'padding-right': generateCSSUnit( rightPaddingMobile, paddingTypeMobile ),
			'margin-top': generateCSSUnit( topMarginMobile, marginTypeMobile ),
			'margin-bottom': generateCSSUnit( bottomMarginMobile, marginTypeMobile ),
			'margin-left': generateCSSUnit( leftMarginMobile, marginTypeMobile ),
			'margin-right': generateCSSUnit( rightMarginMobile, marginTypeMobile ),
			'min-height' : generateCSSUnit( minHeightMobile, minHeightType ),
			...containerBackgroundCSSMobile
		},
		' > .wp-block-uagb-container > .uagb-container-inner-blocks-wrap > .block-editor-inner-blocks > .block-editor-block-list__layout' : {
			'flex-direction' : directionMobile,
			'align-items' : alignItemsMobile,
			'justify-content' : justifyContentMobile,
			'flex-wrap' : wrapMobile,
			'align-content' : alignContentMobile,
			'row-gap' : generateCSSUnit( rowGapMobile, rowGapTypeMobile ),
			'column-gap' : generateCSSUnit( columnGapMobile, columnGapTypeMobile ),
		},
		'.block-editor-block-list__block' : {
			'min-height' : generateCSSUnit( minHeightMobile, minHeightType ),
			'flex-direction' : directionMobile,
			'align-items' : alignItemsMobile,
			'justify-content' : justifyContentMobile,
			'flex-wrap' : wrapMobile,
			'align-content' : alignContentMobile,
		},
		' .uagb-container__shape-top svg' : {
			'height': generateCSSUnit( topHeightMobile, 'px' )
		},
		' .uagb-container__shape-bottom svg' : {
			'height': generateCSSUnit( bottomHeightMobile, 'px' )
		},
	};

	if ( 'default' === contentWidth ) {
		selectors['.block-editor-block-list__block'].width = generateCSSUnit( widthDesktop, widthType );
		selectors['.block-editor-block-list__block']['max-width'] = generateCSSUnit( widthDesktop, widthType );

		tablet_selectors['.block-editor-block-list__block'].width = generateCSSUnit( widthTablet, widthType );
		tablet_selectors['.block-editor-block-list__block']['max-width'] = generateCSSUnit( widthTablet, widthType );

		mobile_selectors['.block-editor-block-list__block'].width = generateCSSUnit( widthMobile, widthType );
		mobile_selectors['.block-editor-block-list__block']['max-width'] = generateCSSUnit( widthMobile, widthType );
	}

	const base_selector = `.editor-styles-wrapper #block-${ props.clientId }`;

	let styling_css = generateCSS( selectors, base_selector );

	styling_css += generateCSS( widthSelectorsDesktop, '.editor-styles-wrapper ' );

	styling_css += generateCSS(
		tablet_selectors,
		`${ base_selector }.uagb-editor-preview-mode-tablet`,
		true,
		'tablet'
	);

	styling_css += generateCSS(
		widthSelectorsTablet,
		'.editor-styles-wrapper ',
		true,
		'tablet'
	);

	styling_css += generateCSS(
		mobile_selectors,
		`${ base_selector }.uagb-editor-preview-mode-mobile`,
		true,
		'mobile'
	);

	styling_css += generateCSS(
		widthSelectorsMobile,
		'.editor-styles-wrapper ',
		true,
		'mobile'
	);

	return styling_css;
}

export default styling;
