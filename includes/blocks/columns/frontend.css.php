<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

global $content_width;

$bg_type = ( isset( $attr['backgroundType'] ) ) ? $attr['backgroundType'] : 'none';

$border        = UAGB_Block_Helper::uag_generate_border_css( $attr, 'columns' );
$border_tablet = UAGB_Block_Helper::uag_generate_border_css( $attr, 'columns', 'tablet' );
$border_mobile = UAGB_Block_Helper::uag_generate_border_css( $attr, 'columns', 'mobile' );

$top_margin    = isset( $attr['topMarginDesktop'] ) ? $attr['topMarginDesktop'] : $attr['topMargin'];
$bottom_margin = isset( $attr['bottomMarginDesktop'] ) ? $attr['bottomMarginDesktop'] : $attr['bottomMargin'];
$left_margin   = isset( $attr['leftMarginDesktop'] ) ? $attr['leftMarginDesktop'] : '';
$right_margin  = isset( $attr['rightMarginDesktop'] ) ? $attr['rightMarginDesktop'] : '';

$mobile_top_margin    = $attr['topMarginMobile'];
$mobile_bottom_margin = $attr['bottomMarginMobile'];
$mobile_left_margin   = isset( $attr['leftMarginMobile'] ) ? $attr['leftMarginMobile'] : '';
$mobile_right_margin  = isset( $attr['rightMarginMobile'] ) ? $attr['rightMarginMobile'] : '';

$tablet_top_margin    = $attr['topMarginTablet'];
$tablet_bottom_margin = $attr['bottomMarginTablet'];
$tablet_left_margin   = isset( $attr['leftMarginTablet'] ) ? $attr['leftMarginTablet'] : '';
$tablet_right_margin  = isset( $attr['rightMarginTablet'] ) ? $attr['rightMarginTablet'] : '';

$m_selectors          = array();
$t_selectors          = array();
$boxShadowPositionCSS = $attr['boxShadowPosition'];
if ( 'outset' === $attr['boxShadowPosition'] ) {
	$boxShadowPositionCSS = '';
}
$style = array(
	'padding-top'    => UAGB_Helper::get_css_value( $attr['topPadding'], $attr['desktopPaddingType'] ),
	'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPadding'], $attr['desktopPaddingType'] ),
	'padding-left'   => UAGB_Helper::get_css_value( $attr['leftPadding'], $attr['desktopPaddingType'] ),
	'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPadding'], $attr['desktopPaddingType'] ),
	'margin-top'     => UAGB_Helper::get_css_value( $top_margin, $attr['desktopMarginType'] ),
	'margin-bottom'  => UAGB_Helper::get_css_value( $bottom_margin, $attr['desktopMarginType'] ),
	'margin-left'    => UAGB_Helper::get_css_value( $left_margin, $attr['desktopMarginType'] ),
	'margin-right'   => UAGB_Helper::get_css_value( $right_margin, $attr['desktopMarginType'] ),
);

$position = str_replace( '-', ' ', $attr['backgroundPosition'] );

if ( 'image' === $bg_type ) {

	$style['background-image']      = ( isset( $attr['backgroundImage'] ) && isset( $attr['backgroundImage']['url'] ) ) ? "url('" . $attr['backgroundImage']['url'] . "' )" : null;
	$style['background-position']   = $position;
	$style['background-attachment'] = $attr['backgroundAttachment'];
	$style['background-repeat']     = $attr['backgroundRepeat'];
	$style['background-size']       = $attr['backgroundSize'];

}

$inner_width = '100%';

if ( isset( $attr['contentWidth'] ) ) {
	if ( 'theme' === $attr['contentWidth'] ) {
		$inner_width = UAGB_Helper::get_css_value( $content_width, 'px' );
	} elseif ( 'custom' === $attr['contentWidth'] ) {
		$inner_width = UAGB_Helper::get_css_value( $attr['width'], $attr['widthType'] );
	}
}

$video_opacity = 0.5;
if ( isset( $attr['backgroundVideoOpacity'] ) && '' !== $attr['backgroundVideoOpacity'] ) {
	$video_opacity = ( 1 < $attr['backgroundVideoOpacity'] ) ? ( ( 100 - $attr['backgroundVideoOpacity'] ) / 100 ) : ( ( 1 - $attr['backgroundVideoOpacity'] ) );
}

$selectors = array(
	'.wp-block-uagb-columns.uagb-columns__wrap' => $style,
	' .uagb-columns__video-wrap'                => array(
		'opacity' => $video_opacity,
	),
	' > .uagb-columns__inner-wrap'              => array( // For backward user.
		'max-width' => $inner_width,
	),
	' .uagb-column__inner-wrap'                 => array( // For backward user.
		'padding' => UAGB_Helper::get_css_value( $attr['columnGap'], 'px' ),
	),
	' .uagb-column__wrap'                       => array(
		'padding' => UAGB_Helper::get_css_value( $attr['columnGap'], 'px' ),
	),
	' .uagb-columns__shape-top svg'             => array(
		'height' => UAGB_Helper::get_css_value( $attr['topHeight'], 'px' ),
	),
	' .uagb-columns__shape.uagb-columns__shape-top .uagb-columns__shape-fill' => array(
		'fill' => UAGB_Helper::hex2rgba( $attr['topColor'], ( isset( $attr['topDividerOpacity'] ) && '' !== $attr['topDividerOpacity'] ) ? $attr['topDividerOpacity'] : 100 ),
	),
	' .uagb-columns__shape-bottom svg'          => array(
		'height' => UAGB_Helper::get_css_value( $attr['bottomHeight'], 'px' ),
	),
	' .uagb-columns__shape.uagb-columns__shape-bottom .uagb-columns__shape-fill' => array(
		'fill' => UAGB_Helper::hex2rgba( $attr['bottomColor'], ( isset( $attr['bottomDividerOpacity'] ) && '' !== $attr['bottomDividerOpacity'] ) ? $attr['bottomDividerOpacity'] : 100 ),
	),
	'.wp-block-uagb-columns'                    => array(
		'box-shadow' => UAGB_Helper::get_css_value( $attr['boxShadowHOffset'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['boxShadowVOffset'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['boxShadowBlur'], 'px' ) . ' ' . UAGB_Helper::get_css_value( $attr['boxShadowSpread'], 'px' ) . ' ' . $attr['boxShadowColor'] . ' ' . $boxShadowPositionCSS,
	),
);

if ( '' !== $attr['topWidth'] ) {
	$selectors[' .uagb-columns__shape-top svg']['width'] = 'calc( ' . $attr['topWidth'] . '% + 1.3px )';
}

if ( '' !== $attr['bottomWidth'] ) {
	$selectors[' .uagb-columns__shape-bottom svg']['width'] = 'calc( ' . $attr['bottomWidth'] . '% + 1.3px )';
}

if ( 'video' === $bg_type ) {
	$selectors[' > .uagb-columns__overlay'] = array(
		'opacity'          => 1,
		'background-color' => $attr['backgroundVideoColor'],
	);
} elseif ( 'image' === $bg_type ) {
	$selectors[' > .uagb-columns__overlay'] = array(
		'background-color' => $attr['backgroundImageColor'],
		'opacity'          => ( isset( $attr['backgroundOpacity'] ) && '' !== $attr['backgroundOpacity'] && 101 !== $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : '',
	);
} elseif ( 'color' === $bg_type ) {
	$selectors[' > .uagb-columns__overlay'] = array(
		'background-color' => $attr['backgroundColor'],
		'opacity'          => ( isset( $attr['backgroundOpacity'] ) && '' !== $attr['backgroundOpacity'] && 101 !== $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : '',
	);
} elseif ( 'gradient' === $bg_type ) {
	$selectors[' > .uagb-columns__overlay']['background-color'] = 'transparent';
	$selectors[' > .uagb-columns__overlay']['opacity']          = ( isset( $attr['backgroundOpacity'] ) && '' !== $attr['backgroundOpacity'] ) ? $attr['backgroundOpacity'] / 100 : '';
	if ( $attr['gradientValue'] ) {
		$selectors[' > .uagb-columns__overlay']['background-image'] = $attr['gradientValue'];
	} else {
		if ( 'linear' === $attr['gradientType'] ) {
			$selectors[' > .uagb-columns__overlay']['background-image'] = 'linear-gradient(' . $attr['gradientAngle'] . 'deg, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
		} else {
			$selectors[' > .uagb-columns__overlay']['background-image'] = 'radial-gradient( at center center, ' . $attr['gradientColor1'] . ' ' . $attr['gradientLocation1'] . '%, ' . $attr['gradientColor2'] . ' ' . $attr['gradientLocation2'] . '%)';
		}
	}
}

$m_selectors = array(
	'.wp-block-uagb-columns.uagb-columns__wrap' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingMobile'], $attr['mobilePaddingType'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingMobile'], $attr['mobilePaddingType'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['leftPaddingMobile'], $attr['mobilePaddingType'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingMobile'], $attr['mobilePaddingType'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $mobile_top_margin, $attr['mobileMarginType'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $mobile_bottom_margin, $attr['mobileMarginType'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $mobile_left_margin, $attr['mobileMarginType'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $mobile_right_margin, $attr['mobileMarginType'] ),
	),
	' .uagb-columns__shape-bottom svg'          => array(
		'height' => UAGB_Helper::get_css_value( $attr['bottomHeightMobile'], 'px' ),
	),
	' .uagb-columns__shape-top svg'             => array(
		'height' => UAGB_Helper::get_css_value( $attr['topHeightMobile'], 'px' ),
	),
);

$t_selectors                      = array(
	'.wp-block-uagb-columns.uagb-columns__wrap' => array(
		'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingTablet'], $attr['tabletPaddingType'] ),
		'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingTablet'], $attr['tabletPaddingType'] ),
		'padding-left'   => UAGB_Helper::get_css_value( $attr['leftPaddingTablet'], $attr['tabletPaddingType'] ),
		'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingTablet'], $attr['tabletPaddingType'] ),
		'margin-top'     => UAGB_Helper::get_css_value( $tablet_top_margin, $attr['tabletMarginType'] ),
		'margin-bottom'  => UAGB_Helper::get_css_value( $tablet_bottom_margin, $attr['tabletMarginType'] ),
		'margin-left'    => UAGB_Helper::get_css_value( $tablet_left_margin, $attr['tabletMarginType'] ),
		'margin-right'   => UAGB_Helper::get_css_value( $tablet_right_margin, $attr['tabletMarginType'] ),
	),
	' .uagb-columns__shape-bottom svg'          => array(
		'height' => UAGB_Helper::get_css_value( $attr['bottomHeightTablet'], 'px' ),
	),
	' .uagb-columns__shape-top svg'             => array(
		'height' => UAGB_Helper::get_css_value( $attr['topHeightTablet'], 'px' ),
	),
);
$selectors['.uagb-columns__wrap'] = $border;
$selectors['.uagb-columns__wrap:hover']['border-color'] = $attr['columnsBorderHColor'];
$t_selectors['.uagb-columns__wrap']                     = $border_tablet;
$m_selectors['.uagb-columns__wrap']                     = $border_mobile;

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);

$base_selector = ( $attr['classMigrate'] ) ? '.uagb-block-' : '#uagb-columns-';

return UAGB_Helper::generate_all_css( $combined_selectors, $base_selector . $id );
