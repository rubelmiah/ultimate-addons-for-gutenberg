<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$box_shadow_position_css = $attr['boxShadowPosition'];

if ( 'outset' === $attr['boxShadowPosition'] ) {
	$box_shadow_position_css = '';
}

$bg_obj_desktop           = array(
	'backgroundType'           => $attr['backgroundType'],
	'backgroundImage'          => $attr['backgroundImageDesktop'],
	'backgroundColor'          => $attr['backgroundColor'],
	'gradientValue'            => $attr['gradientValue'],
	'backgroundRepeat'         => $attr['backgroundRepeatDesktop'],
	'backgroundPosition'       => $attr['backgroundPositionDesktop'],
	'backgroundSize'           => $attr['backgroundSizeDesktop'],
	'backgroundAttachment'     => $attr['backgroundAttachmentDesktop'],
	'backgroundImageColor'     => $attr['backgroundImageColor'],
	'overlayType'              => $attr['overlayType'],
	'backgroundCustomSize'     => $attr['backgroundCustomSizeDesktop'],
	'backgroundCustomSizeType' => $attr['backgroundCustomSizeType'],
	'backgroundVideo'          => $attr['backgroundVideo'],
	'backgroundVideoColor'     => $attr['backgroundVideoColor'],
);
$container_bg_css_desktop = UAGB_Block_Helper::uag_get_background_obj( $bg_obj_desktop );

$video_bg_css = UAGB_Block_Helper::uag_get_background_obj( $bg_obj_desktop );

$container_css = array(
	'min-height'      => UAGB_Helper::get_css_value( $attr['minHeightDesktop'], $attr['minHeightType'] ),
	'flex-direction'  => $attr['directionDesktop'],
	'align-items'     => $attr['alignItemsDesktop'],
	'justify-content' => $attr['justifyContentDesktop'],
	'flex-wrap'       => $attr['wrapDesktop'],
	'align-content'   => $attr['alignContentDesktop'],
	'border-style'    => $attr['borderStyle'],
	'border-color'    => $attr['borderColor'],
	'border-radius'   => UAGB_Helper::get_css_value( $attr['borderRadius'], 'px' ),
	'border-width'    => UAGB_Helper::get_css_value( $attr['borderWidth'], 'px' ),
	'row-gap'         => UAGB_Helper::get_css_value( $attr['rowGapDesktop'], $attr['rowGapType'] ),
	'column-gap'      => UAGB_Helper::get_css_value( $attr['columnGapDesktop'], $attr['columnGapType'] ),
	'box-shadow'      =>
			UAGB_Helper::get_css_value( $attr['boxShadowHOffset'], 'px' ) .
			' ' .
			UAGB_Helper::get_css_value( $attr['boxShadowVOffset'], 'px' ) .
			' ' .
			UAGB_Helper::get_css_value( $attr['boxShadowBlur'], 'px' ) .
			' ' .
			UAGB_Helper::get_css_value( $attr['boxShadowSpread'], 'px' ) .
			' ' .
			$attr['boxShadowColor'] .
			' ' .
			$box_shadow_position_css,
	'padding-top'     => UAGB_Helper::get_css_value( $attr['topPaddingDesktop'], $attr['paddingType'] ),
	'padding-bottom'  => UAGB_Helper::get_css_value( $attr['bottomPaddingDesktop'], $attr['paddingType'] ),
	'padding-left'    => UAGB_Helper::get_css_value( $attr['leftPaddingDesktop'], $attr['paddingType'] ),
	'padding-right'   => UAGB_Helper::get_css_value( $attr['rightPaddingDesktop'], $attr['paddingType'] ),
	'margin-top'      => UAGB_Helper::get_css_value( $attr['topMarginDesktop'], $attr['marginType'] ),
	'margin-bottom'   => UAGB_Helper::get_css_value( $attr['bottomMarginDesktop'], $attr['marginType'] ),
	'margin-left'     => UAGB_Helper::get_css_value( $attr['leftMarginDesktop'], $attr['marginType'] ),
	'margin-right'    => UAGB_Helper::get_css_value( $attr['rightMarginDesktop'], $attr['marginType'] ),
);

$container_css                  = array_merge( $container_css, $container_bg_css_desktop );
$background_video_opacity_value = ( isset( $attr['backgroundVideoOpacity'] ) && 'none' !== $attr['overlayType'] && ( ( 'color' === $attr['overlayType'] && ! empty( $attr['backgroundVideoColor'] ) ) || ( 'gradient' === $attr['overlayType'] && ! empty( $attr['gradientValue'] ) ) ) ) ? 1 - $attr['backgroundVideoOpacity'] : 1;

$selectors = array(
	'.uagb-block-' . $id                                  => $container_css, // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
	'.uagb-block-' . $id . ':hover'                       => array(
		'border-color' => $attr['borderHoverColor'],
	),
	'.uagb-is-root-container .uagb-block-' . $id          => array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'max-width' => UAGB_Helper::get_css_value( $attr['widthDesktop'], $attr['widthType'] ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape-top svg' => array(
		'height' => UAGB_Helper::get_css_value( $attr['topHeight'], 'px' ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape.uagb-container__shape-top .uagb-container__shape-fill' => array(
		'fill' => UAGB_Helper::hex2rgba( $attr['topColor'], ( isset( $attr['topDividerOpacity'] ) && '' !== $attr['topDividerOpacity'] ) ? $attr['topDividerOpacity'] : 100 ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape-bottom svg' => array(
		'height' => UAGB_Helper::get_css_value( $attr['bottomHeight'], 'px' ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape.uagb-container__shape-bottom .uagb-container__shape-fill' => array(
		'fill' => UAGB_Helper::hex2rgba( $attr['bottomColor'], ( isset( $attr['bottomDividerOpacity'] ) && '' !== $attr['bottomDividerOpacity'] ) ? $attr['bottomDividerOpacity'] : 100 ),
	),
	'.uagb-block-' . $id . ' .uagb-container__video-wrap' => $video_bg_css,
	'.uagb-block-' . $id . ' .uagb-container__video-wrap video' => array(
		'opacity' => $background_video_opacity_value,
	),
);

if ( '' !== $attr['topWidth'] ) {
	$selectors[ '.uagb-block-' . $id . ' .uagb-container__shape-top svg' ]['width'] = 'calc( ' . $attr['topWidth'] . '% + 1.3px )';
}

if ( '' !== $attr['bottomWidth'] ) {
	$selectors[ '.uagb-block-' . $id . ' .uagb-container__shape-bottom svg' ]['width'] = 'calc( ' . $attr['bottomWidth'] . '% + 1.3px )';
}

$bg_obj_tablet           = array(
	'backgroundType'           => $attr['backgroundType'],
	'backgroundImage'          => $attr['backgroundImageTablet'],
	'backgroundColor'          => $attr['backgroundColor'],
	'gradientValue'            => $attr['gradientValue'],
	'backgroundRepeat'         => $attr['backgroundRepeatTablet'],
	'backgroundPosition'       => $attr['backgroundPositionTablet'],
	'backgroundSize'           => $attr['backgroundSizeTablet'],
	'backgroundAttachment'     => $attr['backgroundAttachmentTablet'],
	'backgroundImageColor'     => $attr['backgroundImageColor'],
	'overlayType'              => $attr['overlayType'],
	'backgroundCustomSize'     => $attr['backgroundCustomSizeTablet'],
	'backgroundCustomSizeType' => $attr['backgroundCustomSizeType'],
	'backgroundVideo'          => $attr['backgroundVideo'],
	'backgroundVideoColor'     => $attr['backgroundVideoColor'],
);
$container_bg_css_tablet = UAGB_Block_Helper::uag_get_background_obj( $bg_obj_tablet );
$container_tablet_css    = array(
	'min-height'      => UAGB_Helper::get_css_value( $attr['minHeightTablet'], $attr['minHeightType'] ),
	'flex-direction'  => $attr['directionTablet'],
	'align-items'     => $attr['alignItemsTablet'],
	'justify-content' => $attr['justifyContentTablet'],
	'flex-wrap'       => $attr['wrapTablet'],
	'align-content'   => $attr['alignContentTablet'],
	'row-gap'         => UAGB_Helper::get_css_value( $attr['rowGapTablet'], $attr['rowGapType'] ),
	'column-gap'      => UAGB_Helper::get_css_value( $attr['columnGapTablet'], $attr['columnGapType'] ),
	'padding-top'     => UAGB_Helper::get_css_value( $attr['topPaddingTablet'], $attr['paddingType'] ),
	'padding-bottom'  => UAGB_Helper::get_css_value( $attr['bottomPaddingTablet'], $attr['paddingType'] ),
	'padding-left'    => UAGB_Helper::get_css_value( $attr['leftPaddingTablet'], $attr['paddingType'] ),
	'padding-right'   => UAGB_Helper::get_css_value( $attr['rightPaddingTablet'], $attr['paddingType'] ),
	'margin-top'      => UAGB_Helper::get_css_value( $attr['topMarginTablet'], $attr['marginType'] ),
	'margin-bottom'   => UAGB_Helper::get_css_value( $attr['bottomMarginTablet'], $attr['marginType'] ),
	'margin-left'     => UAGB_Helper::get_css_value( $attr['leftMarginTablet'], $attr['marginType'] ),
	'margin-right'    => UAGB_Helper::get_css_value( $attr['rightMarginTablet'], $attr['marginType'] ),
);
$container_tablet_css    = array_merge( $container_tablet_css, $container_bg_css_tablet );

$t_selectors = array(
	'.uagb-block-' . $id                         => $container_tablet_css, // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
	'.uagb-is-root-container .uagb-block-' . $id => array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'max-width' => UAGB_Helper::get_css_value( $attr['widthTablet'], $attr['widthType'] ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape-bottom svg' => array(
		'height' => UAGB_Helper::get_css_value( $attr['bottomHeightTablet'], 'px' ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape-top svg' => array(
		'height' => UAGB_Helper::get_css_value( $attr['topHeightTablet'], 'px' ),
	),
);

$bg_obj_mobile           = array(
	'backgroundType'           => $attr['backgroundType'],
	'backgroundImage'          => $attr['backgroundImageMobile'],
	'backgroundColor'          => $attr['backgroundColor'],
	'gradientValue'            => $attr['gradientValue'],
	'backgroundRepeat'         => $attr['backgroundRepeatMobile'],
	'backgroundPosition'       => $attr['backgroundPositionMobile'],
	'backgroundSize'           => $attr['backgroundSizeMobile'],
	'backgroundAttachment'     => $attr['backgroundAttachmentMobile'],
	'backgroundImageColor'     => $attr['backgroundImageColor'],
	'overlayType'              => $attr['overlayType'],
	'backgroundCustomSize'     => $attr['backgroundCustomSizeMobile'],
	'backgroundCustomSizeType' => $attr['backgroundCustomSizeType'],
	'backgroundVideo'          => $attr['backgroundVideo'],
	'backgroundVideoColor'     => $attr['backgroundVideoColor'],
);
$container_bg_css_mobile = UAGB_Block_Helper::uag_get_background_obj( $bg_obj_mobile );
$container_mobile_css    = array(
	'min-height'      => UAGB_Helper::get_css_value( $attr['minHeightMobile'], $attr['minHeightType'] ),
	'flex-direction'  => $attr['directionMobile'],
	'align-items'     => $attr['alignItemsMobile'],
	'justify-content' => $attr['justifyContentMobile'],
	'flex-wrap'       => $attr['wrapMobile'],
	'align-content'   => $attr['alignContentMobile'],
	'row-gap'         => UAGB_Helper::get_css_value( $attr['rowGapMobile'], $attr['rowGapType'] ),
	'column-gap'      => UAGB_Helper::get_css_value( $attr['columnGapMobile'], $attr['columnGapType'] ),
	'padding-top'     => UAGB_Helper::get_css_value( $attr['topPaddingMobile'], $attr['paddingType'] ),
	'padding-bottom'  => UAGB_Helper::get_css_value( $attr['bottomPaddingMobile'], $attr['paddingType'] ),
	'padding-left'    => UAGB_Helper::get_css_value( $attr['leftPaddingMobile'], $attr['paddingType'] ),
	'padding-right'   => UAGB_Helper::get_css_value( $attr['rightPaddingMobile'], $attr['paddingType'] ),
	'margin-top'      => UAGB_Helper::get_css_value( $attr['topMarginMobile'], $attr['marginType'] ),
	'margin-bottom'   => UAGB_Helper::get_css_value( $attr['bottomMarginMobile'], $attr['marginType'] ),
	'margin-left'     => UAGB_Helper::get_css_value( $attr['leftMarginMobile'], $attr['marginType'] ),
	'margin-right'    => UAGB_Helper::get_css_value( $attr['rightMarginMobile'], $attr['marginType'] ),
);
$container_mobile_css    = array_merge( $container_mobile_css, $container_bg_css_mobile );

$m_selectors = array(
	'.uagb-block-' . $id                         => $container_mobile_css, // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
	'.uagb-is-root-container .uagb-block-' . $id => array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'max-width' => UAGB_Helper::get_css_value( $attr['widthMobile'], $attr['widthType'] ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape-bottom svg' => array(
		'height' => UAGB_Helper::get_css_value( $attr['bottomHeightMobile'], 'px' ),
	),
	'.uagb-block-' . $id . ' .uagb-container__shape-top svg' => array(
		'height' => UAGB_Helper::get_css_value( $attr['topHeightMobile'], 'px' ),
	),
);
if ( 'alignwide' === $attr['innerContentWidth'] ) {

	$left_padding_desktop  = ! empty( $attr['leftPaddingDesktop'] ) ? $attr['leftPaddingDesktop'] : 0;
	$right_padding_desktop = ! empty( $attr['rightPaddingDesktop'] ) ? $attr['rightPaddingDesktop'] : 0;
	$column_gap_desktop    = ! empty( $attr['columnGapDesktop'] ) ? $attr['columnGapDesktop'] : 0;

	$left_padding_tablet  = ! empty( $attr['leftPaddingTablet'] ) ? $attr['leftPaddingTablet'] : 0;
	$right_padding_tablet = ! empty( $attr['rightPaddingTablet'] ) ? $attr['rightPaddingTablet'] : 0;
	$column_gap_tablet    = ! empty( $attr['columnGapTablet'] ) ? $attr['columnGapTablet'] : 0;

	$left_padding_mobile  = ! empty( $attr['leftPaddingMobile'] ) ? $attr['leftPaddingMobile'] : 0;
	$right_padding_mobile = ! empty( $attr['rightPaddingMobile'] ) ? $attr['rightPaddingMobile'] : 0;
	$column_gap_mobile    = ! empty( $attr['columnGapMobile'] ) ? $attr['columnGapMobile'] : 0;

	if ( 'default' === $attr['contentWidth'] || 'alignfull' === $attr['contentWidth'] ) {
		$selectors[ '.uagb-is-root-container.uagb-block-' . $id ] = array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'--inner-content-custom-width' => $attr['innerContentCustomWidthDesktop'] . $attr['innerContentCustomWidthType'],
		'--padding-left'               => $left_padding_desktop . $attr['paddingType'],
		'--padding-right'              => $right_padding_desktop . $attr['paddingType'],
		'--column-gap'                 => $column_gap_desktop . $attr['columnGapType'],
		'padding-left'                 => 'calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 )',
		'padding-right'                => 'calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 )',
		);

		$t_selectors[ '.uagb-is-root-container.uagb-block-' . $id ] = array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'--inner-content-custom-width' => $attr['innerContentCustomWidthTablet'] . $attr['innerContentCustomWidthType'],
		'--padding-left'               => $left_padding_tablet . $attr['paddingType'],
		'--padding-right'              => $right_padding_tablet . $attr['paddingType'],
		'padding-left'                 => 'calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 )',
		'padding-right'                => 'calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 )',
		);

		$m_selectors[ '.uagb-is-root-container.uagb-block-' . $id ] = array( // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
		'--inner-content-custom-width' => $attr['innerContentCustomWidthMobile'] . $attr['innerContentCustomWidthType'],
		'--padding-left'               => $left_padding_mobile . $attr['paddingType'],
		'--padding-right'              => $right_padding_mobile . $attr['paddingType'],
		'padding-left'                 => 'calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 )',
		'padding-right'                => 'calc( ( var(--root-container-full-width) - var( --inner-content-custom-width-final ) ) / 2 )',
		);
	}
}

if ( 'default' === $attr['contentWidth'] ) {
	$selectors[ '.uagb-block-' . $id ]['max-width']    = UAGB_Helper::get_css_value( $attr['widthDesktop'], $attr['widthType'] ) . ' !important';
	$selectors[ '.uagb-block-' . $id ]['margin-left']  = UAGB_Helper::get_css_value( $attr['leftMarginDesktop'], $attr['marginType'] ) . ' !important';
	$selectors[ '.uagb-block-' . $id ]['margin-right'] = UAGB_Helper::get_css_value( $attr['rightMarginDesktop'], $attr['marginType'] ) . ' !important';

	$t_selectors[ '.uagb-block-' . $id ]['max-width']    = UAGB_Helper::get_css_value( $attr['widthTablet'], $attr['widthType'] ) . ' !important';
	$t_selectors[ '.uagb-block-' . $id ]['margin-left']  = UAGB_Helper::get_css_value( $attr['leftMarginTablet'], $attr['marginType'] ) . ' !important';
	$t_selectors[ '.uagb-block-' . $id ]['margin-right'] = UAGB_Helper::get_css_value( $attr['rightMarginTablet'], $attr['marginType'] ) . ' !important';

	$m_selectors[ '.uagb-block-' . $id ]['max-width']    = UAGB_Helper::get_css_value( $attr['widthMobile'], $attr['widthType'] ) . ' !important';
	$m_selectors[ '.uagb-block-' . $id ]['margin-left']  = UAGB_Helper::get_css_value( $attr['leftMarginMobile'], $attr['marginType'] ) . ' !important';
	$m_selectors[ '.uagb-block-' . $id ]['margin-right'] = UAGB_Helper::get_css_value( $attr['rightMarginMobile'], $attr['marginType'] ) . ' !important';
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

return UAGB_Helper::generate_all_css( $combined_selectors, '.wp-block-uagb-container' );
