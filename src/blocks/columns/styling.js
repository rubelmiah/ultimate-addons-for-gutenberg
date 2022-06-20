/**
 * Returns Dynamic Generated CSS
 */

import inlineStyles from './inline-styles'
import generateCSS from '@Controls/generateCSS'
import hexToRgba from '@Controls/hexToRgba'
import generateCSSUnit from '@Controls/generateCSSUnit'
import maybeGetColorForVariable from '@Controls/maybeGetColorForVariable';
import generateBorderCSS from '@Controls/generateBorderCSS';

function styling( props ) {

	const {
		backgroundType,
		backgroundVideoColor,
		backgroundImageColor,
		backgroundOpacity,
		backgroundColor,
		backgroundVideoOpacity,
		contentWidth,
		width,
		widthType,
		columnGap,
		topColor,
		topHeight,
		topHeightTablet,
		topHeightMobile,
		topWidth,
		bottomColor,
		bottomHeight,
		bottomHeightTablet,
		bottomHeightMobile,
		bottomWidth,
		gradientColor1,
		gradientColor2,
		gradientLocation1,
		gradientLocation2,
		gradientType,
		gradientAngle,
		gradientPosition,
		topPaddingTablet,
		bottomPaddingTablet,
		leftPaddingTablet,
		rightPaddingTablet,
		topPaddingMobile,
		bottomPaddingMobile,
		leftPaddingMobile,
		rightPaddingMobile,
		topMarginMobile,
		bottomMarginMobile,
		topMarginTablet,
		bottomMarginTablet,
		topDividerOpacity,
		bottomDividerOpacity,
		mobileMarginType,
		tabletMarginType,
		mobilePaddingType,
		tabletPaddingType,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		gradientValue,
		columnsBorderHColor
	} = props.attributes

	let max_width = '100%'

	if ( 'custom' === contentWidth ) {
		if ( '' !== width ) {
			max_width = generateCSSUnit( width, widthType )
		}
	}
	let boxShadowPositionCSS = boxShadowPosition;

	if ( 'outset' === boxShadowPosition ) {
		boxShadowPositionCSS = '';
	}

	let tablet_selectors = {}
	let mobile_selectors = {}

	let videoOpacity = 0.5;
	if ( typeof backgroundVideoOpacity !== 'undefined' ) {
		videoOpacity = ( 1 < backgroundVideoOpacity ) ? ( ( 100 - backgroundVideoOpacity ) / 100 ) : ( ( 1 - backgroundVideoOpacity ) );
	}

	const borderCSSTablet = generateBorderCSS( props.attributes, 'columns', 'tablet' );
	const borderCSSMobile = generateBorderCSS( props.attributes, 'columns', 'mobile' );

	const selectors = {
		'.uagb-columns__wrap' : inlineStyles( props ),
		' .uagb-columns__video-wrap': {
			'opacity' : videoOpacity
		},
		' > .block-editor-inner-blocks > .block-editor-block-list__layout': {

			'max-width' : max_width
		},
		' > .block-editor-inner-blocks > .block-editor-block-list__layout > [data-type="uagb/column"]' : {
			'padding' : generateCSSUnit( columnGap, 'px' )
		},
		' .uagb-columns__shape-top svg' : {
			'width': 'calc( ' + topWidth + '% + 1.3px )',
			'height': generateCSSUnit( topHeight, 'px' )
		},
		' .uagb-columns__shape-top .uagb-columns__shape-fill' : {
			'fill': hexToRgba( maybeGetColorForVariable( topColor ), ( typeof topDividerOpacity !== 'undefined' ) ? topDividerOpacity : 100 ),
		},
		' .uagb-columns__shape-bottom svg' : {
			'width': 'calc( ' + bottomWidth + '% + 1.3px )',
			'height': generateCSSUnit( bottomHeight, 'px' )
		},
		' .uagb-columns__shape-bottom .uagb-columns__shape-fill' : {
			'fill': hexToRgba( maybeGetColorForVariable( bottomColor ), ( typeof bottomDividerOpacity !== 'undefined' ) ? bottomDividerOpacity : 100 ),
		},
		'.wp-block-uagb-columns': {
			'box-shadow': generateCSSUnit( boxShadowHOffset, 'px' ) + ' ' + generateCSSUnit( boxShadowVOffset, 'px' ) + ' ' + generateCSSUnit( boxShadowBlur, 'px' ) + ' ' + generateCSSUnit( boxShadowSpread, 'px' ) + ' ' + boxShadowColor + ' ' + boxShadowPositionCSS
		},
		'.uagb-columns__wrap:hover': {
			'border-color': columnsBorderHColor,
		}
	}

	selectors[' > .uagb-columns__overlay'] = {}

	if ( 'video' === backgroundType ) {
		selectors[' > .uagb-columns__overlay'] = {
			'opacity' : 1,
			'background-color': backgroundVideoColor
		}
	} else if( 'image' === backgroundType ) {
		selectors[' > .uagb-columns__overlay'] = {
			'opacity' : ( typeof backgroundOpacity !== 'undefined' ) ? backgroundOpacity/100 : '',
			'background-color': backgroundImageColor
		}
	} else if( 'color' === backgroundType ) {
		selectors[' > .uagb-columns__overlay'] = {
			'opacity' : ( typeof backgroundOpacity !== 'undefined' ) ? backgroundOpacity/100 : '',
			'background-color' : backgroundColor
		}
	} else if ( 'gradient' === backgroundType ) {

		selectors[' > .uagb-columns__overlay']['background-color'] = 'transparent'
		selectors[' > .uagb-columns__overlay'].opacity = ( typeof backgroundOpacity !== 'undefined' ) ? backgroundOpacity/100 : ''
		if( gradientValue ) {
			selectors[' > .uagb-columns__overlay']['background-image'] = gradientValue

		} else if ( 'linear' === gradientType ) {

				selectors[' > .uagb-columns__overlay']['background-image'] = `linear-gradient(${ gradientAngle }deg, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
			} else {

				selectors[' > .uagb-columns__overlay']['background-image'] = `radial-gradient( at ${ gradientPosition }, ${ gradientColor1 } ${ gradientLocation1 }%, ${ gradientColor2 } ${ gradientLocation2 }%)`
			}

	}

	tablet_selectors = {
		'.uagb-columns__wrap' : {
			'padding-top': generateCSSUnit( topPaddingTablet, tabletPaddingType ),
			'padding-bottom': generateCSSUnit( bottomPaddingTablet, tabletPaddingType ),
			'padding-left': generateCSSUnit( leftPaddingTablet, tabletPaddingType ),
			'padding-right': generateCSSUnit( rightPaddingTablet, tabletPaddingType ),
			'margin-top': generateCSSUnit( topMarginTablet, tabletMarginType ),
			'margin-bottom': generateCSSUnit( bottomMarginTablet, tabletMarginType ),
			...borderCSSTablet
		},
		' .uagb-columns__shape-top svg' : {
			'height': generateCSSUnit( topHeightTablet, 'px' )
		},
		' .uagb-columns__shape-bottom svg' : {
			'height': generateCSSUnit( bottomHeightTablet, 'px' )
		},
	}

	mobile_selectors = {
		'.uagb-columns__wrap' : {
			'padding-top': generateCSSUnit( topPaddingMobile, mobilePaddingType ),
			'padding-bottom': generateCSSUnit( bottomPaddingMobile, mobilePaddingType ),
			'padding-left': generateCSSUnit( leftPaddingMobile, mobilePaddingType ),
			'padding-right': generateCSSUnit( rightPaddingMobile, mobilePaddingType ),
			'margin-top': generateCSSUnit( topMarginMobile, mobileMarginType ),
			'margin-bottom': generateCSSUnit( bottomMarginMobile, mobileMarginType ),
			...borderCSSMobile
		},
		' .uagb-columns__shape-top svg' : {
			'height': generateCSSUnit( topHeightMobile, 'px' )
		},
		' .uagb-columns__shape-bottom svg' : {
			'height': generateCSSUnit( bottomHeightMobile, 'px' )
		},
	}

	let styling_css = ''
	const id = `.editor-styles-wrapper .uagb-block-${ props.clientId.substr( 0, 8 ) }`

	styling_css = generateCSS( selectors, id )

	styling_css += generateCSS( tablet_selectors, `${id}.uagb-editor-preview-mode-tablet`, true, 'tablet' )

	styling_css += generateCSS( mobile_selectors, `${id}.uagb-editor-preview-mode-mobile`, true, 'mobile' )

	return styling_css
}

export default styling
