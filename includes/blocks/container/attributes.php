<?php
/**
 * Block Information & Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$border_attribute = UAGB_Block_Helper::uag_generate_border_attribute( 'container' );

return array_merge(
	array(
		'block_id'                       => '',
		'widthDesktop'                   => 100,
		'widthTablet'                    => '',
		'widthMobile'                    => 100,
		'widthType'                      => '%',
		'minHeightDesktop'               => '',
		'minHeightTablet'                => '',
		'minHeightMobile'                => '',
		'minHeightType'                  => 'px',
		'directionDesktop'               => 'column',
		'directionTablet'                => '',
		'directionMobile'                => '',
		'alignItemsDesktop'              => 'center',
		'alignItemsTablet'               => '',
		'alignItemsMobile'               => '',
		'justifyContentDesktop'          => 'center',
		'justifyContentTablet'           => '',
		'justifyContentMobile'           => '',
		'wrapDesktop'                    => 'nowrap',
		'wrapTablet'                     => '',
		'wrapMobile'                     => 'wrap',
		'alignContentDesktop'            => '',
		'alignContentTablet'             => '',
		'alignContentMobile'             => '',
		'backgroundType'                 => '',
		'backgroundImageDesktop'         => '',
		'backgroundImageTablet'          => '',
		'backgroundImageMobile'          => '',
		'backgroundPositionDesktop'      => array(
			'x' => 0.5,
			'y' => 0.5,
		),
		'backgroundPositionTablet'       => '',
		'backgroundPositionMobile'       => '',
		'backgroundSizeDesktop'          => 'cover',
		'backgroundSizeTablet'           => '',
		'backgroundSizeMobile'           => '',
		'backgroundRepeatDesktop'        => 'no-repeat',
		'backgroundRepeatTablet'         => '',
		'backgroundRepeatMobile'         => '',
		'backgroundAttachmentDesktop'    => 'scroll',
		'backgroundAttachmentTablet'     => '',
		'backgroundAttachmentMobile'     => '',
		'backgroundColor'                => '',
		'backgroundOpacity'              => '',
		'backgroundImageColor'           => '#FFFFFF75',
		'gradientValue'                  => 'linear-gradient(90deg, rgb(6, 147, 227) 0%, rgb(155, 81, 224) 100%)',
		'boxShadowColor'                 => '#00000070',
		'boxShadowHOffset'               => 0,
		'boxShadowVOffset'               => 0,
		'boxShadowBlur'                  => '',
		'boxShadowSpread'                => '',
		'boxShadowPosition'              => 'outset',
		'boxShadowColorHover'            => '',
		'boxShadowHOffsetHover'          => 0,
		'boxShadowVOffsetHover'          => 0,
		'boxShadowBlurHover'             => '',
		'boxShadowSpreadHover'           => '',
		'boxShadowPositionHover'         => 'outset',

		'topPaddingDesktop'              => '',
		'bottomPaddingDesktop'           => '',
		'leftPaddingDesktop'             => '',
		'rightPaddingDesktop'            => '',
		'topPaddingTablet'               => '',
		'bottomPaddingTablet'            => '',
		'leftPaddingTablet'              => '',
		'rightPaddingTablet'             => '',
		'topPaddingMobile'               => '',
		'bottomPaddingMobile'            => '',
		'leftPaddingMobile'              => '',
		'rightPaddingMobile'             => '',
		'paddingType'                    => 'px',
		'paddingTypeTablet'              => 'px',
		'paddingTypeMobile'              => 'px',
		'paddingLink'                    => true,
		'topMarginDesktop'               => '',
		'bottomMarginDesktop'            => '',
		'leftMarginDesktop'              => '',
		'rightMarginDesktop'             => '',
		'topMarginTablet'                => '',
		'bottomMarginTablet'             => '',
		'leftMarginTablet'               => '',
		'rightMarginTablet'              => '',
		'topMarginMobile'                => '',
		'bottomMarginMobile'             => '',
		'leftMarginMobile'               => '',
		'rightMarginMobile'              => '',
		'marginType'                     => 'px',
		'marginTypeTablet'               => 'px',
		'marginTypeMobile'               => 'px',
		'marginLink'                     => true,
		'rowGapDesktop'                  => 20,
		'rowGapTablet'                   => '',
		'rowGapMobile'                   => '',
		'rowGapType'                     => 'px',
		'rowGapTypeTablet'               => 'px',
		'rowGapTypeMobile'               => 'px',
		'columnGapDesktop'               => 20,
		'columnGapTablet'                => '',
		'columnGapMobile'                => '',
		'columnGapType'                  => 'px',
		'columnGapTypeTablet'            => 'px',
		'columnGapTypeMobile'            => 'px',
		'contentWidth'                   => 'alignfull',
		'innerContentWidth'              => 'alignwide',
		'innerContentCustomWidthDesktop' => 1200,
		'innerContentCustomWidthTablet'  => 768,
		'innerContentCustomWidthMobile'  => 320,
		'innerContentCustomWidthType'    => 'px',
		'bottomType'                     => 'none',
		'bottomColor'                    => '#333',
		'bottomHeight'                   => '',
		'bottomHeightTablet'             => '',
		'bottomHeightMobile'             => '',
		'bottomWidth'                    => 100,
		'topType'                        => 'none',
		'topColor'                       => '#333',
		'topHeight'                      => '',
		'topHeightTablet'                => '',
		'topHeightMobile'                => '',
		'topWidth'                       => 100,
		'topFlip'                        => false,
		'bottomFlip'                     => false,
		'topContentAboveShape'           => false,
		'bottomContentAboveShape'        => false,
		'backgroundCustomSizeDesktop'    => 100,
		'backgroundCustomSizeTablet'     => '',
		'backgroundCustomSizeMobile'     => '',
		'backgroundCustomSizeType'       => '%',
		'overlayType'                    => 'none',
		'backgroundVideoColor'           => '#FFFFFF75',
		'backgroundVideo'                => '',
		'backgroundVideoOpacity'         => 0.5,
		'topInvert'                      => false,
		'bottomInvert'                   => false,
		'textColor'                      => 'inherit',
		'linkColor'                      => '',
		'linkHoverColor'                 => '',
	),
	$border_attribute
);
