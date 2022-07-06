<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$cta_border_css        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn' );
$cta_border_css        = UAGB_Block_Helper::uag_generate_deprecated_border_css(
	$cta_border_css,
	( isset( $attr['ctaBorderWidth'] ) ? $attr['ctaBorderWidth'] : '' ),
	( isset( $attr['ctaBorderRadius'] ) ? $attr['ctaBorderRadius'] : '' ),
	( isset( $attr['ctaBorderColor'] ) ? $attr['ctaBorderColor'] : '' ),
	( isset( $attr['ctaBorderStyle'] ) ? $attr['ctaBorderStyle'] : '' ),
	( isset( $attr['ctaBorderHColor'] ) ? $attr['ctaBorderHColor'] : '' )
);
$cta_border_css_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'tablet' );
$cta_border_css_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'btn', 'mobile' );
// Adds Fonts.
UAGB_Block_JS::blocks_info_box_gfont( $attr );

$m_selectors = array();
$t_selectors = array();

$block_name = 'info-box';

$seperator_thickness_fallback   = UAGB_Block_Helper::get_fallback_number( $attr['seperatorThickness'], 'seperatorThickness', $block_name );
$iconSize_fallback              = UAGB_Block_Helper::get_fallback_number( $attr['iconSize'], 'iconSize', $block_name );
$attr['iconSizeTablet']         = is_numeric( $attr['iconSizeTablet'] ) ? $attr['iconSizeTablet'] : $iconSize_fallback;
$attr['iconSizeMobile']         = is_numeric( $attr['iconSizeMobile'] ) ? $attr['iconSizeMobile'] : $attr['iconSizeTablet'];
$iconimg_border_radius_fallback = UAGB_Block_Helper::get_fallback_number( $attr['iconimgBorderRadius'], 'iconimgBorderRadius', $block_name );

$seperator_width_fallback        = UAGB_Block_Helper::get_fallback_number( $attr['seperatorWidth'], 'seperatorWidth', $block_name );
$seperator_width_tablet_fallback = UAGB_Block_Helper::get_fallback_number( $attr['seperatorWidthTablet'], 'seperatorWidthTablet', $block_name );
$seperator_width_mobile_fallback = UAGB_Block_Helper::get_fallback_number( $attr['seperatorWidthMobile'], 'seperatorWidthMobile', $block_name );

$ctaIconSpace_fallback      = UAGB_Block_Helper::get_fallback_number( $attr['ctaIconSpace'], 'ctaIconSpace', $block_name );
$attr['ctaIconSpaceTablet'] = is_numeric( $attr['ctaIconSpaceTablet'] ) ? $attr['ctaIconSpaceTablet'] : $ctaIconSpace_fallback;
$attr['ctaIconSpaceMobile'] = is_numeric( $attr['ctaIconSpaceMobile'] ) ? $attr['ctaIconSpaceMobile'] : $attr['ctaIconSpaceTablet'];

$imageWidth_fallback      = UAGB_Block_Helper::get_fallback_number( $attr['imageWidth'], 'imageWidth', $block_name );
$attr['imageWidthTablet'] = is_numeric( $attr['imageWidthTablet'] ) ? $attr['imageWidthTablet'] : $imageWidth_fallback;
$attr['imageWidthMobile'] = is_numeric( $attr['imageWidthMobile'] ) ? $attr['imageWidthMobile'] : $attr['imageWidthTablet'];

$cta_icon_size   = UAGB_Helper::get_css_value( $attr['ctaFontSize'], $attr['ctaFontSizeType'] );
$m_cta_icon_size = UAGB_Helper::get_css_value( $attr['ctaFontSizeMobile'], $attr['ctaFontSizeType'] );
$t_cta_icon_size = UAGB_Helper::get_css_value( $attr['ctaFontSizeTablet'], $attr['ctaFontSizeType'] );

$icon_size        = UAGB_Helper::get_css_value( $iconSize_fallback, $attr['iconSizeType'] );
$icon_size_tablet = UAGB_Helper::get_css_value( $attr['iconSizeTablet'], $attr['iconSizeType'] );
$icon_size_mobile = UAGB_Helper::get_css_value( $attr['iconSizeMobile'], $attr['iconSizeType'] );

$btn_padding_top         = isset( $attr['paddingBtnTop'] ) ? $attr['paddingBtnTop'] : $attr['ctaBtnVertPadding'];
$btn_padding_bottom      = isset( $attr['paddingBtnBottom'] ) ? $attr['paddingBtnBottom'] : $attr['ctaBtnVertPadding'];
$btn_padding_left        = isset( $attr['paddingBtnLeft'] ) ? $attr['paddingBtnLeft'] : $attr['ctaBtnHrPadding'];
$btn_padding_right       = isset( $attr['paddingBtnRight'] ) ? $attr['paddingBtnRight'] : $attr['ctaBtnHrPadding'];
$icon_padding_top        = is_int( $attr['iconTopMargin'] ) ? $attr['iconTopMargin'] : 0;
$icon_padding_bottom     = is_int( $attr['iconBottomMargin'] ) ? $attr['iconBottomMargin'] : 0;
$icon_padding_left       = is_int( $attr['iconLeftMargin'] ) ? $attr['iconLeftMargin'] : 0;
$icon_padding_right      = is_int( $attr['iconRightMargin'] ) ? $attr['iconRightMargin'] : 0;
$box_sizing_icon         = ( '%' === $attr['iconSizeType'] ) ? 'border-box' : 'content-box';
$box_sizing_image        = ( '%' === $attr['imageWidthUnit'] ) ? 'border-box' : 'content-box';
$box_sizing_image_tablet = ( '%' === $attr['imageWidthUnitTablet'] ) ? 'border-box' : 'content-box';
$box_sizing_image_mobile = ( '%' === $attr['imageWidthUnitMobile'] ) ? 'border-box' : 'content-box';


$selectors = array(
	' .uagb-ifb-icon'                                     => array(
		'width'       => $icon_size,
		'line-height' => $icon_size,
	),
	' .uagb-ifb-icon > span'                              => array(
		'font-size'   => $icon_size,
		'width'       => $icon_size,
		'line-height' => $icon_size,
		'color'       => $attr['iconColor'],
	),
	' .uagb-ifb-icon svg'                                 => array( // For Backword.
		'fill' => $attr['iconColor'],
	),
	'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap svg' => array(
		'width'       => $icon_size,
		'height'      => $icon_size,
		'line-height' => $icon_size,
		'font-size'   => $icon_size,
		'color'       => $attr['iconColor'],
		'fill'        => $attr['iconColor'],
	),
	' .uagb-ifb-content .uagb-ifb-icon-wrap svg'          => array(
		'line-height' => $icon_size,
		'font-size'   => $icon_size,
		'color'       => $attr['iconColor'],
		'fill'        => $attr['iconColor'],
	),
	' .uagb-iconbox-icon-wrap'                            => array(
		'margin'         => 'auto',
		'display'        => 'inline-block',
		'line-height'    => 0,
		'box-sizing'     => 'content-box',
		'width'          => $icon_size,
		'height'         => $icon_size,
		'line-height'    => $icon_size,
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),

	),
	'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap > svg' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-icon-wrap > svg' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
	),
	' .uagb-ifb-content .uagb-ifb-left-title-image svg'   => array(
		'width'       => $icon_size,
		'line-height' => $icon_size,
		'font-size'   => $icon_size,
		'color'       => $attr['iconColor'],
		'fill'        => $attr['iconColor'],
	),
	' .uagb-ifb-content .uagb-ifb-right-title-image svg'  => array(
		'width'       => $icon_size,
		'line-height' => $icon_size,
		'font-size'   => $icon_size,
		'color'       => $attr['iconColor'],
		'fill'        => $attr['iconColor'],
	),
	' .uagb-ifb-content .uagb-ifb-icon-wrap svg:hover'    => array(
		'fill'  => $attr['iconHover'],
		'color' => $attr['iconHover'],
	),
	'.uagb-infobox-icon-right .uagb-ifb-icon-wrap > svg:hover' => array(
		'fill'  => $attr['iconHover'],
		'color' => $attr['iconHover'],
	),
	'.uagb-infobox-icon-left .uagb-ifb-icon-wrap > svg:hover' => array(
		'fill'  => $attr['iconHover'],
		'color' => $attr['iconHover'],
	),
	' .uagb-infbox__link-to-all:hover ~.uagb-ifb-content .uagb-ifb-icon-wrap svg' => array(
		'fill' => $attr['iconHover'],
	),
	'.uagb-infbox__link-to-all:hover ~.uagb-infobox__content-wrap svg' => array(
		'fill' => $attr['iconHover'],
	),
	// Img Style.
	' .uagb-infobox__content-wrap .uagb-ifb-imgicon-wrap' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
	),
	' .uagb-infobox .uagb-ifb-image-content img'          => array(
		'border-radius' => UAGB_Helper::get_css_value( $iconimg_border_radius_fallback, $attr['iconimgBorderRadiusUnit'] ),
	),
	'.uagb-infobox__content-wrap img'                     => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
		'border-radius'  => UAGB_Helper::get_css_value( $attr['iconimgBorderRadius'], $attr['iconimgBorderRadiusUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image > img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
		'border-radius'  => UAGB_Helper::get_css_value( $attr['iconimgBorderRadius'], $attr['iconimgBorderRadiusUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image > img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
		'border-radius'  => UAGB_Helper::get_css_value( $attr['iconimgBorderRadius'], $attr['iconimgBorderRadiusUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content > img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $icon_padding_left, $attr['iconMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $icon_padding_right, $attr['iconMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $icon_padding_top, $attr['iconMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $icon_padding_bottom, $attr['iconMarginUnit'] ),
		'border-radius'  => UAGB_Helper::get_css_value( $attr['iconimgBorderRadius'], $attr['iconimgBorderRadiusUnit'] ),
	),
	// Prefix Style.
	' .uagb-ifb-title-prefix'                             => array(
		'letter-spacing' => UAGB_Helper::get_css_value( $attr['prefixLetterSpacing'], $attr['prefixLetterSpacingType'] ),
		'color'          => $attr['prefixColor'],
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['prefixSpace'], $attr['prefixSpaceUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['prefixTopMargin'], $attr['prefixSpaceUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['prefixLeftMargin'], $attr['prefixSpaceUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['prefixRightMargin'], $attr['prefixSpaceUnit'] ),
	),
	// Title Style.
	' .uagb-ifb-title'                                    => array(
		'letter-spacing' => UAGB_Helper::get_css_value( $attr['headLetterSpacing'], $attr['headLetterSpacingType'] ),
		'color'          => $attr['headingColor'],
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['headSpace'], $attr['headSpaceUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['headTopMargin'], $attr['headSpaceUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['headLeftMargin'], $attr['headSpaceUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['headRightMargin'], $attr['headSpaceUnit'] ),
	),
	// Description Style.
	' .uagb-ifb-desc'                                     => array(
		'letter-spacing' => UAGB_Helper::get_css_value( $attr['subHeadLetterSpacing'], $attr['subHeadLetterSpacingType'] ),
		'color'          => $attr['subHeadingColor'],
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['subHeadSpace'], $attr['subHeadSpaceUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['subHeadTopMargin'], $attr['subHeadSpaceUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['subHeadLeftMargin'], $attr['subHeadSpaceUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['subHeadRightMargin'], $attr['subHeadSpaceUnit'] ),
	),
	// Seperator.
	' .uagb-ifb-separator'                                => array(
		'width'            => UAGB_Helper::get_css_value( $seperator_width_fallback, $attr['separatorWidthType'] ),
		'border-top-width' => UAGB_Helper::get_css_value( $seperator_thickness_fallback, $attr['thicknessUnit'] ),
		'border-top-color' => $attr['seperatorColor'],
		'border-top-style' => $attr['seperatorStyle'],
		'margin-bottom'    => UAGB_Helper::get_css_value( $attr['seperatorSpace'], $attr['seperatorSpaceUnit'] ),
		'margin-top'       => UAGB_Helper::get_css_value( $attr['separatorTopMargin'], $attr['seperatorSpaceUnit'] ),
		'margin-left'      => UAGB_Helper::get_css_value( $attr['separatorLeftMargin'], $attr['seperatorSpaceUnit'] ),
		'margin-right'     => UAGB_Helper::get_css_value( $attr['separatorRightMargin'], $attr['seperatorSpaceUnit'] ),
	),
	' .uagb-infobox__content-wrap .uagb-ifb-separator'    => array(
		'width'            => UAGB_Helper::get_css_value( $seperator_width_fallback, $attr['separatorWidthType'] ),
		'border-top-width' => UAGB_Helper::get_css_value( $seperator_thickness_fallback, $attr['thicknessUnit'] ),
		'border-top-color' => $attr['seperatorColor'],
		'border-top-style' => $attr['seperatorStyle'],
	),
	// CTA icon space for Backword compatibility.
	' .uagb-ifb-align-icon-after'                         => array(
		'margin-left' => UAGB_Helper::get_css_value( $ctaIconSpace_fallback, 'px' ),
	),
	' .uagb-ifb-align-icon-before'                        => array(
		'margin-right' => UAGB_Helper::get_css_value( $ctaIconSpace_fallback, 'px' ),
	),
	// image svg.
	'.uagb-infobox__content-wrap .uagb-ifb-content svg'   => array(
		'box-sizing' => $box_sizing_icon,
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content img'   => array(
		'box-sizing' => $box_sizing_image,
	),
);
if ( 'Stacked' === $attr['iconView'] ) {
	$selectors[' .uagb-iconbox-icon-wrap.uagb-infobox-shape-circle'] = array(
		'background-color' => $attr['iconBackgroundColor'],
		'border-radius'    => '50%',
	);
	$selectors[' .uagb-iconbox-icon-wrap.uagb-infobox-shape-squre']  = array(
		'background-color' => $attr['iconBackgroundColor'],
	);
	$selectors[' .uagb-iconbox-icon-wrap:hover']                     = array(
		'background-color' => $attr['iconBackgroundHoverColor'] . ' !important',
	);
} elseif ( 'Framed' === $attr['iconView'] ) {
	$selectors[' .uagb-iconbox-icon-wrap.uagb-infobox-shape-circle'] = array(
		'border'        => $attr['iconBorderWidth'] . 'px solid ' . $attr['iconBackgroundColor'],
		'border-radius' => '50%',
	);
	$selectors[' .uagb-iconbox-icon-wrap.uagb-infobox-shape-squre']  = array(
		'border' => $attr['iconBorderWidth'] . 'px solid ' . $attr['iconBackgroundColor'],
	);
	$selectors[' .uagb-iconbox-icon-wrap:hover']                     = array(
		'border' => $attr['iconBorderWidth'] . 'px solid ' . $attr['iconBackgroundHoverColor'],
	);
}
if ( 'text' === $attr['ctaType'] ) {
	$selectors[' div.uagb-ifb-button-wrapper a.uagb-infobox-cta-link'] = array(
		'text-decoration' => $attr['ctaDecoration'],
		'color'           => $attr['ctaLinkColor'],
	);
	$selectors[' .uagb-infobox-cta-link:hover']                        = array(
		'color' => $attr['ctaLinkHoverColor'],
	);
	$selectors[' .uagb-infobox-cta-link:hover svg']                    = array(
		'fill' => $attr['ctaLinkHoverColor'],
	);
	$selectors[' .uagb-infobox-cta-link svg']                          = array(
		'font-size'   => $cta_icon_size,
		'height'      => $cta_icon_size,
		'width'       => $cta_icon_size,
		'line-height' => $cta_icon_size,
		'fill'        => $attr['ctaLinkColor'],
	);
}

$m_selectors = array(
	' .uagb-ifb-title-prefix'                              => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['prefixMobileSpace'], $attr['prefixMobileMarginUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['prefixMarginTopMobile'], $attr['prefixMobileMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['prefixMarginLeftMobile'], $attr['prefixMobileMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['prefixMarginRightMobile'], $attr['prefixMobileMarginUnit'] ),
	),
	' .uagb-ifb-title'                                     => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headMobileSpace'] . $attr['headMobileMarginUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['headMarginTopMobile'], $attr['headMobileMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['headMarginLeftMobile'], $attr['headMobileMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['headMarginRightMobile'], $attr['headMobileMarginUnit'] ),
	),
	' .uagb-ifb-desc'                                      => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['subHeadMobileSpace'], $attr['subHeadMobileMarginUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['subHeadMarginTopMobile'], $attr['subHeadMobileMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['subHeadMarginLeftMobile'], $attr['subHeadMobileMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['subHeadMarginRightMobile'], $attr['subHeadMobileMarginUnit'] ),
	),
	' .uagb-ifb-separator'                                 => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['seperatorMobileSpace'], $attr['separatorMobileMarginUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['separatorMarginTopMobile'], $attr['separatorMobileMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['separatorMarginLeftMobile'], $attr['separatorMobileMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['separatorMarginRightMobile'], $attr['separatorMobileMarginUnit'] ),
	),
	' .uagb-infobox-cta-link svg'                          => array(
		'font-size'   => $m_cta_icon_size,
		'height'      => $m_cta_icon_size,
		'width'       => $m_cta_icon_size,
		'line-height' => $m_cta_icon_size,
	),
	'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap > svg' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-icon-wrap > svg' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap > svg'                    => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
	),
	' .uagb-ifb-content > svg'                             => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
	),
	' .uagb-ifb-content .uagb-ifb-left-title-image > svg'  => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
	),
	' .uagb-ifb-content .uagb-ifb-right-title-image > svg' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap img'                      => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginTopMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginBottomMobile'], $attr['iconMobileMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginLeftMobile'], $attr['iconMobileMarginUnit'] ),
	),
	' .uagb-ifb-button-wrapper .uagb-infobox-cta-link'     => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopMobile'], $attr['mobilePaddingBtnUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomMobile'], $attr['mobilePaddingBtnUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftMobile'], $attr['mobilePaddingBtnUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightMobile'], $attr['mobilePaddingBtnUnit'] ),

	),
	' .uagb-ifb-separator'                                 => array(
		'width' => UAGB_Helper::get_css_value( $seperator_width_mobile_fallback, $attr['separatorWidthType'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content img'    => array(
		'box-sizing' => $box_sizing_image_mobile,
	),
	' .uagb-ifb-icon'                                      => array(
		'width'       => $icon_size_mobile,
		'line-height' => $icon_size_mobile,
	),
	' .uagb-ifb-icon > span'                               => array(
		'font-size'   => $icon_size_mobile,
		'width'       => $icon_size_mobile,
		'line-height' => $icon_size_mobile,
	),
	'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap svg'  => array(
		'width'       => $icon_size_mobile,
		'height'      => $icon_size_mobile,
		'line-height' => $icon_size_mobile,
		'font-size'   => $icon_size_mobile,
	),
	' .uagb-ifb-content .uagb-ifb-icon-wrap svg'           => array(
		'line-height' => $icon_size_mobile,
		'font-size'   => $icon_size_mobile,
	),
	' .uagb-iconbox-icon-wrap'                             => array(
		'width'       => $icon_size_mobile,
		'height'      => $icon_size_mobile,
		'line-height' => $icon_size_mobile,
	),
	' .uagb-ifb-content .uagb-ifb-left-title-image svg'    => array(
		'width'       => $icon_size_mobile,
		'line-height' => $icon_size_mobile,
		'font-size'   => $icon_size_mobile,
	),
	' .uagb-ifb-content .uagb-ifb-right-title-image svg'   => array(
		'width'       => $icon_size_mobile,
		'line-height' => $icon_size_mobile,
		'font-size'   => $icon_size_mobile,
	),
);

$t_selectors = array(
	' .uagb-ifb-title-prefix'                             => array(
		'letter-spacing' => UAGB_Helper::get_css_value( $attr['prefixLetterSpacingTablet'], $attr['prefixLetterSpacingType'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['prefixTabletSpace'], $attr['prefixTabletMarginUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['prefixMarginTopTablet'], $attr['prefixTabletMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['prefixMarginLeftTablet'], $attr['prefixTabletMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['prefixMarginRightTablet'], $attr['prefixTabletMarginUnit'] ),
	),
	' .uagb-ifb-title'                                    => array(
		'letter-spacing' => UAGB_Helper::get_css_value( $attr['headLetterSpacingTablet'], $attr['headLetterSpacingType'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['headTabletSpace'] . $attr['headTabletMarginUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['headMarginTopTablet'], $attr['headTabletMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['headMarginLeftTablet'], $attr['headTabletMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['headMarginRightTablet'], $attr['headTabletMarginUnit'] ),
	),
	' .uagb-ifb-desc'                                     => array(
		'letter-spacing' => UAGB_Helper::get_css_value( $attr['subHeadLetterSpacingTablet'], $attr['subHeadLetterSpacingType'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $attr['subHeadTabletSpace'], $attr['subHeadTabletMarginUnit'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $attr['subHeadMarginTopTablet'], $attr['subHeadTabletMarginUnit'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $attr['subHeadMarginLeftTablet'], $attr['subHeadTabletMarginUnit'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $attr['subHeadMarginRightTablet'], $attr['subHeadTabletMarginUnit'] ),
	),
	' .uagb-ifb-separator'                                => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['seperatorTabletSpace'], $attr['separatorTabletMarginUnit'] ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['separatorMarginTopTablet'], $attr['separatorTabletMarginUnit'] ),
		'margin-left'   => UAGB_Helper::get_css_value( $attr['separatorMarginLeftTablet'], $attr['separatorTabletMarginUnit'] ),
		'margin-right'  => UAGB_Helper::get_css_value( $attr['separatorMarginRightTablet'], $attr['separatorTabletMarginUnit'] ),
	),
	' .uagb-ifb-button-wrapper .uagb-infobox-cta-link'    => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['paddingBtnTopTablet'], $attr['tabletPaddingBtnUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['paddingBtnBottomTablet'], $attr['tabletPaddingBtnUnit'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['paddingBtnLeftTablet'], $attr['tabletPaddingBtnUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['paddingBtnRightTablet'], $attr['tabletPaddingBtnUnit'] ),

	),
	' .uagb-infobox-cta-link svg'                         => array(
		'font-size'   => $t_cta_icon_size,
		'height'      => $t_cta_icon_size,
		'width'       => $t_cta_icon_size,
		'line-height' => $t_cta_icon_size,
	),
	'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap > svg' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-icon-wrap > svg' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-right-title-image img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content .uagb-ifb-left-title-image img' => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap > svg'                   => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	' .uagb-ifb-content > svg'                            => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	' .uagb-infobox-icon-right:hover > svg'               => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	' .uagb-infobox-icon-left:hover > svg'                => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	'.uagb-infobox__content-wrap img'                     => array(
		'padding-left'   => UAGB_Helper::get_css_value( $attr['iconMarginLeftTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['iconMarginRightTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-top'    => UAGB_Helper::get_css_value( $attr['iconMarginTopTablet'], $attr['iconTabletMarginUnit'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['iconMarginBottomTablet'], $attr['iconTabletMarginUnit'] ),
	),
	' .uagb-ifb-separator'                                => array(
		'width' => UAGB_Helper::get_css_value( $seperator_width_tablet_fallback, $attr['separatorWidthType'] ),
	),
	'.uagb-infobox__content-wrap .uagb-ifb-content img'   => array(
		'box-sizing' => $box_sizing_image_tablet,
	),
	' .uagb-ifb-icon'                                     => array(
		'width'       => $icon_size_tablet,
		'line-height' => $icon_size_tablet,
	),
	' .uagb-ifb-icon > span'                              => array(
		'font-size'   => $icon_size_tablet,
		'width'       => $icon_size_tablet,
		'line-height' => $icon_size_tablet,
	),
	'.uagb-infobox__content-wrap .uagb-ifb-icon-wrap svg' => array(
		'width'       => $icon_size_tablet,
		'height'      => $icon_size_tablet,
		'line-height' => $icon_size_tablet,
		'font-size'   => $icon_size_tablet,
	),
	' .uagb-ifb-content .uagb-ifb-icon-wrap svg'          => array(
		'line-height' => $icon_size_tablet,
		'font-size'   => $icon_size_tablet,
	),
	' .uagb-iconbox-icon-wrap'                            => array(
		'width'       => $icon_size_tablet,
		'height'      => $icon_size_tablet,
		'line-height' => $icon_size_tablet,
	),
	' .uagb-ifb-content .uagb-ifb-left-title-image svg'   => array(
		'width'       => $icon_size_tablet,
		'line-height' => $icon_size_tablet,
		'font-size'   => $icon_size_tablet,
	),
	' .uagb-ifb-content .uagb-ifb-right-title-image svg'  => array(
		'width'       => $icon_size_tablet,
		'line-height' => $icon_size_tablet,
		'font-size'   => $icon_size_tablet,
	),
);

if ( 'above-title' === $attr['iconimgPosition'] || 'below-title' === $attr['iconimgPosition'] ) {
	$selectors['.uagb-infobox__content-wrap']   = array(
		'text-align' => $attr['headingAlign'],
	);
	$t_selectors['.uagb-infobox__content-wrap'] = array(
		'text-align' => $attr['headingAlignTablet'],
	);
	$m_selectors['.uagb-infobox__content-wrap'] = array(
		'text-align' => $attr['headingAlignMobile'],
	);
}

if ( 'button' === $attr['ctaType'] ) {
	$selectors[' div.uagb-ifb-button-wrapper a.uagb-infobox-cta-link'] = array(
		'text-decoration' => $attr['ctaDecoration'],
	);
	$selectors[' .uagb-infobox-cta-link svg']                          = array(
		'font-size'   => $cta_icon_size,
		'height'      => $cta_icon_size,
		'width'       => $cta_icon_size,
		'line-height' => $cta_icon_size,
	);
	$selectors[' .uagb-ifb-button-wrapper .uagb-infobox-cta-link']     =
		array(
			'color'            => $attr['ctaBtnLinkColor'],
			'background-color' => $attr['ctaBgColor'],
			'padding-top'      => UAGB_Helper::get_css_value( $btn_padding_top, $attr['paddingBtnUnit'] ),
			'padding-bottom'   => UAGB_Helper::get_css_value( $btn_padding_bottom, $attr['paddingBtnUnit'] ),
			'padding-left'     => UAGB_Helper::get_css_value( $btn_padding_left, $attr['paddingBtnUnit'] ),
			'padding-right'    => UAGB_Helper::get_css_value( $btn_padding_right, $attr['paddingBtnUnit'] ),

		);
	$selectors[' .uagb-ifb-button-wrapper .uagb-infobox-cta-link svg'] = array(
		'fill' => $attr['ctaBtnLinkColor'],
	);
	$selectors[' .uagb-ifb-button-wrapper.wp-block-button:not(.is-style-outline) .wp-block-button__link:not(.has-background):hover'] = array(
		'color'            => $attr['ctaLinkHoverColor'],
		'background-color' => $attr['ctaBgHoverColor'],
		'border-color'     => $attr['btnBorderHColor'],
	);
	$selectors[' .uagb-infobox-cta-link:hover']                              = array(
		'border-color' => $attr['btnBorderHColor'],
	);
	$selectors[' .uagb-ifb-button-wrapper .uagb-infobox-cta-link:hover svg'] = array(
		'fill' => $attr['ctaLinkHoverColor'],
	);
	$selectors[' .uagb-infobox-cta-link']                                    = $cta_border_css;
	$t_selectors[' .uagb-infobox-cta-link']                                  = $cta_border_css_tablet;
	$m_selectors[' .uagb-infobox-cta-link']                                  = $cta_border_css_mobile;

}
if ( $attr['imageWidthType'] ) {
	// Image.
	$selectors[' .uagb-ifb-content .uagb-ifb-image-content > img']            = array(
		'width' => UAGB_Helper::get_css_value( $imageWidth_fallback, $attr['imageWidthUnit'] ),
	);
	$selectors['.uagb-infobox__content-wrap .uagb-ifb-image-content > img']   = array(
		'width' => UAGB_Helper::get_css_value( $imageWidth_fallback, $attr['imageWidthUnit'] ),
	);
	$selectors[' .uagb-ifb-content .uagb-ifb-left-title-image > img']         = array(
		'width' => UAGB_Helper::get_css_value( $imageWidth_fallback, $attr['imageWidthUnit'] ),
	);
	$selectors[' .uagb-ifb-content .uagb-ifb-right-title-image > img']        = array(
		'width' => UAGB_Helper::get_css_value( $imageWidth_fallback, $attr['imageWidthUnit'] ),
	);
	$m_selectors[' .uagb-ifb-content .uagb-ifb-image-content > img']          = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthUnitMobile'] ),
	);
	$m_selectors['.uagb-infobox__content-wrap .uagb-ifb-image-content > img'] = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthUnitMobile'] ),
	);
	$m_selectors[' .uagb-ifb-content .uagb-ifb-left-title-image > img']       = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthUnitMobile'] ),
	);
	$m_selectors[' .uagb-ifb-content .uagb-ifb-right-title-image > img']      = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthMobile'], $attr['imageWidthUnitMobile'] ),
	);
	$t_selectors[' .uagb-ifb-content .uagb-ifb-image-content > img']          = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthUnitTablet'] ),
	);
	$t_selectors['.uagb-infobox__content-wrap .uagb-ifb-image-content > img'] = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthUnitTablet'] ),
	);
	$t_selectors[' .uagb-ifb-content .uagb-ifb-left-title-image > img']       = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthUnitTablet'] ),
	);
	$t_selectors[' .uagb-ifb-content .uagb-ifb-right-title-image > img']      = array(
		'width' => UAGB_Helper::get_css_value( $attr['imageWidthTablet'], $attr['imageWidthUnitTablet'] ),
	);

}

if ( 'after' === $attr['ctaIconPosition'] ) {
	$selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg ']   = array(
		'margin-left' => UAGB_Helper::get_css_value( $ctaIconSpace_fallback, $attr['ctaIconSpaceType'] ),
	);
	$t_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg '] = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['ctaIconSpaceTablet'], $attr['ctaIconSpaceType'] ),
	);
	$m_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg '] = array(
		'margin-left' => UAGB_Helper::get_css_value( $attr['ctaIconSpaceMobile'], $attr['ctaIconSpaceType'] ),
	);
} else {
	$selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg']   = array(
		'margin-right' => UAGB_Helper::get_css_value( $ctaIconSpace_fallback, $attr['ctaIconSpaceType'] ),
	);
	$t_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['ctaIconSpaceTablet'], $attr['ctaIconSpaceType'] ),
	);
	$m_selectors['.uagb-infobox__content-wrap .uagb-infobox-cta-link > svg'] = array(
		'margin-right' => UAGB_Helper::get_css_value( $attr['ctaIconSpaceMobile'], $attr['ctaIconSpaceType'] ),
	);
}



if ( '%' === $attr['imageWidthUnit'] ) {
	$selectors[' .uagb-ifb-content .uagb-ifb-image-content > img']['box-sizing'] = 'border-box';
}

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'head', ' .uagb-ifb-title', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'subHead', ' .uagb-ifb-desc', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'prefix', ' .uagb-ifb-title-prefix', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-infobox-cta-link', $combined_selectors );

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-infobox-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
