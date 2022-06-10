<?php
/**
 * Frontend CSS & Google Fonts loading File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

// Adds Fonts.
UAGB_Block_JS::blocks_post_timeline_gfont( $attr );

$t_selectors = array();

$ctaBottomSpace = ( isset( $attr['ctaBottomSpacing'] ) && ! empty( $attr['ctaBottomSpacing'] ) ) ? $attr['ctaBottomSpacing'] : $attr['contentPadding'];
$headTopSpace   = ( isset( $attr['headTopSpacing'] ) && ! empty( $attr['headTopSpacing'] ) ) ? $attr['headTopSpacing'] : $attr['contentPadding'];

$left_margin  = isset( $attr['leftMargin'] ) ? $attr['leftMargin'] : $attr['horizontalSpace'];
$right_margin = isset( $attr['rightMargin'] ) ? $attr['rightMargin'] : $attr['horizontalSpace'];

$selectors = array(
	' .uagb-timeline__heading'      => array(
		'text-align' => $attr['align'],
	),
	' .uagb-timeline__link_parent'  => array(
		'text-align' => $attr['align'],
	),
	' .uagb-timeline__image a'      => array(
		'text-align' => $attr['align'],
	),
	' a.uagb-timeline__image'       => array(
		'text-align' => $attr['align'],
	),
	' .uagb-timeline__author-link'  => array(
		'color'      => $attr['authorColor'],
		'text-align' => $attr['align'],
	),
	' .dashicons-admin-users'       => array(
		'color'       => $attr['authorColor'],
		'font-size'   => UAGB_Helper::get_css_value( $attr['authorFontSize'], $attr['authorFontSizeType'] ),
		'font-weight' => $attr['authorFontWeight'],
		'line-height' => UAGB_Helper::get_css_value( $attr['authorLineHeight'], $attr['authorLineHeightType'] ),
	),
	' .uagb-timeline__link'         => array(
		'color'            => $attr['ctaColor'],
		'background-color' => $attr['ctaBackground'],
		'text-align'       => $attr['align'],
		'margin-bottom'    => UAGB_Helper::get_css_value( $ctaBottomSpace, 'px' ),
	),
	' .uagb-timeline__heading a'    => array(
		'text-align' => $attr['align'],
		'color'      => $attr['headingColor'],
	),
	' .uagb-timeline__heading-text' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpace'], 'px' ),
		'margin-top'    => UAGB_Helper::get_css_value( $headTopSpace, 'px' ),
	),
	'.uagb_timeline__cta-enable .uagb-timeline-desc-content' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['contentSpace'], 'px' ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['authorSpace'], 'px' ),
	),
	' .uagb-timeline__author-link + .uagb-timeline__link_parent' => array(
		'margin-top' => UAGB_Helper::get_css_value( $attr['authorSpace'], 'px' ),
	),
);

$desktop_selectors = UAGB_Block_Helper::get_timeline_selectors( $attr );
$selectors         = array_merge( $selectors, $desktop_selectors );

$t_selectors = array(
	' .dashicons-admin-users'       => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['authorFontSizeTablet'], $attr['authorFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['authorLineHeightTablet'], $attr['authorLineHeightType'] ),
	),
	' .uagb-timeline__link_parent'  => array(
		'text-align' => $attr['alignTablet'],
	),
	' .uagb-timeline__image a'      => array(
		'text-align' => $attr['alignTablet'],
	),
	' a.uagb-timeline__image'       => array(
		'text-align' => $attr['alignTablet'],
	),
	' .uagb-timeline__author-link'  => array(
		'text-align' => $attr['alignTablet'],
	),
	' .uagb-timeline__heading'      => array(
		'text-align' => $attr['alignTablet'],
	),
	' .uagb-timeline__heading a'    => array(
		'text-align' => $attr['alignTablet'],
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__author-link' => array(
		'text-align' => 'left',
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link_parent' => array(
		'text-align' => 'left',
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link' => array(
		'text-align' => 'left',
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__image a' => array(
		'text-align' => 'left',
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-tablet a.uagb-timeline__image' => array(
		'text-align' => 'left',
	),
	' .uagb-timeline__link'         => array(
		'text-align'       => $attr['alignTablet'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['ctaBottomSpacingTablet'], 'px' ),
	),
	' .uagb-timeline__heading-text' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceTablet'], 'px' ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['headTopSpacingTablet'], 'px' ),
	),
	'.uagb_timeline__cta-enable .uagb-timeline-desc-content' => array(
		'margin-top' => UAGB_Helper::get_css_value( $attr['authorSpaceTablet'], 'px' ),
	),
	' .uagb-timeline__author-link + .uagb-timeline__link_parent' => array(
		'margin-top' => UAGB_Helper::get_css_value( $attr['authorSpaceTablet'], 'px' ),
	),
	'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__marker' => array(
		'margin-left'  => ( 'tablet' === $attr['stack'] ) ?
							0 :
							UAGB_Helper::get_css_value( $left_margin + 3, $attr['marginUnit'] ),
		'margin-right' => ( 'tablet' === $attr['stack'] ) ?
							0 :
							UAGB_Helper::get_css_value( $right_margin, $attr['marginUnit'] ),
	),
	'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__marker' => array(
		'margin-left'  => ( 'tablet' === $attr['stack'] ) ?
							0 :
							UAGB_Helper::get_css_value( $left_margin + 3, $attr['marginUnit'] ),
		'margin-right' => ( 'tablet' === $attr['stack'] ) ?
							0 :
							UAGB_Helper::get_css_value( $right_margin, $attr['marginUnit'] ),
	),
);

$tablet_selectors = UAGB_Block_Helper::get_timeline_tablet_selectors( $attr );
$t_selectors      = array_merge( $t_selectors, $tablet_selectors );

// Mobile responsive CSS.
$m_selectors = array(
	' .dashicons-admin-users'       => array(
		'font-size'   => UAGB_Helper::get_css_value( $attr['authorFontSizeMobile'], $attr['authorFontSizeType'] ),
		'line-height' => UAGB_Helper::get_css_value( $attr['authorLineHeightMobile'], $attr['authorLineHeightType'] ),
	),
	' .uagb-timeline__link_parent'  => array(
		'text-align' => $attr['alignMobile'],
	),
	' .uagb-timeline__image a'      => array(
		'text-align' => $attr['alignMobile'],
	),
	' a.uagb-timeline__image'       => array(
		'text-align' => $attr['alignMobile'],
	),
	' .uagb-timeline__author-link'  => array(
		'text-align' => $attr['alignMobile'],
	),
	' .uagb-timeline__heading a'    => array(
		'text-align' => $attr['alignMobile'],
	),
	' .uagb-timeline__heading'      => array(
		'text-align' => $attr['alignMobile'],
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__author-link' => array(
		'text-align' => 'left',
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link_parent' => array(
		'text-align' => 'left',
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__link' => array(
		'text-align' => 'left',
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__image a' => array(
		'text-align' => 'left',
	),
	'.uagb-timeline__center-block.uagb-timeline__responsive-mobile a.uagb-timeline__image' => array(
		'text-align' => 'left',
	),
	' .uagb-timeline__link'         => array(
		'text-align'       => $attr['alignMobile'],
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['ctaBottomSpacingMobile'], 'px' ),
	),
	' .uagb-timeline__heading-text' => array(
		'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceMobile'], 'px' ),
		'margin-top'    => UAGB_Helper::get_css_value( $attr['headTopSpacingMobile'], 'px' ),
	),
	'.uagb_timeline__cta-enable .uagb-timeline-desc-content' => array(
		'margin-top' => UAGB_Helper::get_css_value( $attr['authorSpaceMobile'], 'px' ),
	),
	' .uagb-timeline__author-link + .uagb-timeline__link_parent' => array(
		'margin-top' => UAGB_Helper::get_css_value( $attr['authorSpaceMobile'], 'px' ),
	),
	'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__marker' => array(
		'margin-left'  => ( 'tablet' === $attr['stack'] ) || ( 'mobile' === $attr['stack'] ) ?
							0 :
							UAGB_Helper::get_css_value( $left_margin + 3, $attr['marginUnit'] ),
		'margin-right' => ( 'tablet' === $attr['stack'] ) || ( 'mobile' === $attr['stack'] ) ?
							0 :
							UAGB_Helper::get_css_value( $right_margin, $attr['marginUnit'] ),
	),
	'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__marker' => array(
		'margin-left'  => ( 'tablet' === $attr['stack'] ) || ( 'mobile' === $attr['stack'] ) ?
							0 :
							UAGB_Helper::get_css_value( $left_margin + 3, $attr['marginUnit'] ),
		'margin-right' => ( 'tablet' === $attr['stack'] ) || ( 'mobile' === $attr['stack'] ) ?
							0 :
							UAGB_Helper::get_css_value( $right_margin, $attr['marginUnit'] ),
	),
);

$mobile_selectors = UAGB_Block_Helper::get_timeline_mobile_selectors( $attr );
$m_selectors      = array_merge( $m_selectors, $mobile_selectors );

$combined_selectors = array(
	'desktop' => $selectors,
	'tablet'  => $t_selectors,
	'mobile'  => $m_selectors,
);
// .uagb-timeline__date-hide.uagb-timeline__inner-date-new
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'date', ' .uagb-timeline__date-hide.uagb-timeline__inner-date-new', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'date', ' .uagb-timeline__date-hide.uagb-timeline__date-inner', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'date', ' .uagb-timeline__date-new', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'subHead', ' .uagb-timeline-desc-content', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'author', ' .uagb-timeline__author-link', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'cta', ' .uagb-timeline__link', $combined_selectors );
$combined_selectors = UAGB_Helper::get_typography_css( $attr, 'head', ' .uagb-timeline__heading a', $combined_selectors );

return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id . '.uagb-timeline__outer-wrap' );
