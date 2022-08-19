<?php
/**
 * UAGB Block Helper.
 *
 * @package UAGB
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! class_exists( 'UAGB_Block_Helper' ) ) {

	/**
	 * Class UAGB_Block_Helper.
	 */
	class UAGB_Block_Helper {

		/**
		 * Get Buttons Block CSS
		 *
		 * @since 1.14.9
		 * @param array  $attr The block attributes.
		 * @param string $id The key for the Icon List Item.
		 * @param string $child_migrate The child migration flag.
		 * @return array The Widget List.
		 */
		public static function get_buttons_child_selectors( $attr, $id, $child_migrate ) {

			$block_name = 'buttons-child';

			$wrapper = ( ! $child_migrate ) ? ' .uagb-buttons-repeater-' . $id : ' .uagb-buttons-repeater';

			$m_selectors = array();
			$t_selectors = array();
			$selectors   = array();

			$border_css        = self::uag_generate_border_css( $attr, 'btn' );
			$border_css        = self::uag_generate_deprecated_border_css(
				$border_css,
				( isset( $attr['borderWidth'] ) ? $attr['borderWidth'] : '' ),
				( isset( $attr['borderRadius'] ) ? $attr['borderRadius'] : '' ),
				( isset( $attr['borderColor'] ) ? $attr['borderColor'] : '' ),
				( isset( $attr['borderStyle'] ) ? $attr['borderStyle'] : '' ),
				( isset( $attr['borderHColor'] ) ? $attr['borderHColor'] : '' )
			);
			$border_css_tablet = self::uag_generate_border_css( $attr, 'btn', 'tablet' );
			$border_css_mobile = self::uag_generate_border_css( $attr, 'btn', 'mobile' );

			$top_padding    = isset( $attr['topPadding'] ) ? $attr['topPadding'] : $attr['vPadding'];
			$bottom_padding = isset( $attr['bottomPadding'] ) ? $attr['bottomPadding'] : $attr['vPadding'];
			$left_padding   = isset( $attr['leftPadding'] ) ? $attr['leftPadding'] : $attr['hPadding'];
			$right_padding  = isset( $attr['rightPadding'] ) ? $attr['rightPadding'] : $attr['hPadding'];

			$attr['sizeType']       = isset( $attr['sizeType'] ) ? $attr['sizeType'] : 'px';
			$attr['lineHeightType'] = isset( $attr['lineHeightType'] ) ? $attr['lineHeightType'] : 'em';

			$box_shadow_position_css = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$box_shadow_position_css = '';
			}

			if ( 'transparent' === $attr['backgroundType'] ) {

				$selectors[' .wp-block-button__link']['background'] = 'transparent';

			} elseif ( 'color' === $attr['backgroundType'] ) {

				$selectors['.wp-block-uagb-buttons-child .uagb-buttons-repeater']['background'] = $attr['background'];
				$selectors[' .wp-block-button__link']['background']                             = $attr['background'];

			} elseif ( 'gradient' === $attr['backgroundType'] ) {
				$bg_obj = array(
					'backgroundType' => 'gradient',
					'gradientValue'  => $attr['gradientValue'],
				);

				$btn_bg_css                           = self::uag_get_background_obj( $bg_obj );
				$selectors[' .wp-block-button__link'] = $btn_bg_css;
			}

			// Hover background color types.
			if ( 'transparent' === $attr['hoverbackgroundType'] ) {

				$selectors[' .wp-block-button__link:hover'] = array(
					'background' => 'transparent',
				);

			} elseif ( 'color' === $attr['hoverbackgroundType'] ) {

				$selectors[' .wp-block-button__link:hover'] = array(
					'background' => $attr['hBackground'],
				);

			} elseif ( 'gradient' === $attr['hoverbackgroundType'] ) {
				$bg_hover_obj = array(
					'backgroundType' => 'gradient',
					'gradientValue'  => $attr['hovergradientValue'],
				);

				$btn_hover_bg_css                           = self::uag_get_background_obj( $bg_hover_obj );
				$selectors[' .wp-block-button__link:hover'] = $btn_hover_bg_css;
			}

			$selectors[' .uagb-button__wrapper .uagb-buttons-repeater']                   = array(
				'font-family'     => $attr['fontFamily'],
				'font-weight'     => $attr['fontWeight'],
				'font-style'      => $attr['fontStyle'],
				'text-transform'  => $attr['transform'],
				'text-decoration' => $attr['decoration'],
				'font-size'       => UAGB_Helper::get_css_value( $attr['size'], $attr['sizeType'] ),
				'line-height'     => UAGB_Helper::get_css_value( $attr['lineHeight'], $attr['lineHeightType'] ),
				'padding-top'     => UAGB_Helper::get_css_value( $top_padding, $attr['paddingUnit'] ),
				'padding-bottom'  => UAGB_Helper::get_css_value( $bottom_padding, $attr['paddingUnit'] ),
				'padding-left'    => UAGB_Helper::get_css_value( $left_padding, $attr['paddingUnit'] ),
				'padding-right'   => UAGB_Helper::get_css_value( $right_padding, $attr['paddingUnit'] ),
				'color'           => $attr['color'],
				'margin-top'      => UAGB_Helper::get_css_value( $attr['topMargin'], $attr['marginType'] ),
				'margin-bottom'   => UAGB_Helper::get_css_value( $attr['bottomMargin'], $attr['marginType'] ),
				'margin-left'     => UAGB_Helper::get_css_value( $attr['leftMargin'], $attr['marginType'] ),
				'margin-right'    => UAGB_Helper::get_css_value( $attr['rightMargin'], $attr['marginType'] ),
			);
			$selectors[' .wp-block-button__link.has-text-color:hover .uagb-button__link'] = array(
				'color' => $attr['hColor'],
			);
			if ( 0 !== $attr['boxShadowHOffset'] || 0 !== $attr['boxShadowVOffset'] ) {
				$selectors[ $wrapper . '.wp-block-button__link' ] = array(
					'box-shadow' =>
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
				);
			}
			$selectors[ $wrapper ]                           = $border_css;
			$m_selectors[ $wrapper ]                         = $border_css_mobile;
			$t_selectors[ $wrapper ]                         = $border_css_tablet;
			$selectors[ $wrapper . ':hover' ]                = array(
				'border-color' => $attr['btnBorderHColor'],
			);
			$selectors[ $wrapper . ' .uagb-button__link' ]   = array(
				'color'           => $attr['color'],
				'font-family'     => $attr['fontFamily'],
				'font-weight'     => $attr['fontWeight'],
				'font-style'      => $attr['fontStyle'],
				'text-transform'  => $attr['transform'],
				'text-decoration' => $attr['decoration'],
				'font-size'       => UAGB_Helper::get_css_value( $attr['size'], $attr['sizeType'] ),
				'line-height'     => UAGB_Helper::get_css_value( $attr['lineHeight'], $attr['lineHeightType'] ),
			);
			$m_selectors[ $wrapper . ' .uagb-button__link' ] = array(
				'font-size'   => UAGB_Helper::get_css_value( $attr['sizeMobile'], $attr['sizeType'] ),
				'line-height' => UAGB_Helper::get_css_value( $attr['lineHeightMobile'], $attr['lineHeightType'] ),
			);
			$t_selectors[ $wrapper . ' .uagb-button__link' ] = array(
				'font-size'   => UAGB_Helper::get_css_value( $attr['sizeTablet'], $attr['sizeType'] ),
				'line-height' => UAGB_Helper::get_css_value( $attr['lineHeightTablet'], $attr['lineHeightType'] ),
			);
			$m_selectors[ ' .uagb-button__wrapper ' . $wrapper . '.wp-block-button__link' ] = array(
				'padding-top'    => UAGB_Helper::get_css_value( $attr['topMobilePadding'], $attr['mobilePaddingUnit'] ),
				'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomMobilePadding'], $attr['mobilePaddingUnit'] ),
				'padding-left'   => UAGB_Helper::get_css_value( $attr['leftMobilePadding'], $attr['mobilePaddingUnit'] ),
				'padding-right'  => UAGB_Helper::get_css_value( $attr['rightMobilePadding'], $attr['mobilePaddingUnit'] ),
				'margin-top'     => UAGB_Helper::get_css_value( $attr['topMarginMobile'], $attr['marginType'] ),
				'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMarginMobile'], $attr['marginType'] ),
				'margin-left'    => UAGB_Helper::get_css_value( $attr['leftMarginMobile'], $attr['marginType'] ),
				'margin-right'   => UAGB_Helper::get_css_value( $attr['rightMarginMobile'], $attr['marginType'] ),

			);

			$t_selectors[ ' .uagb-button__wrapper ' . $wrapper . '.wp-block-button__link' ] = array(
				'padding-top'    => UAGB_Helper::get_css_value( $attr['topTabletPadding'], $attr['tabletPaddingUnit'] ),
				'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomTabletPadding'], $attr['tabletPaddingUnit'] ),
				'padding-left'   => UAGB_Helper::get_css_value( $attr['leftTabletPadding'], $attr['tabletPaddingUnit'] ),
				'padding-right'  => UAGB_Helper::get_css_value( $attr['rightTabletPadding'], $attr['tabletPaddingUnit'] ),
				'margin-top'     => UAGB_Helper::get_css_value( $attr['topMarginTablet'], $attr['marginType'] ),
				'margin-bottom'  => UAGB_Helper::get_css_value( $attr['bottomMarginTablet'], $attr['marginType'] ),
				'margin-left'    => UAGB_Helper::get_css_value( $attr['leftMarginTablet'], $attr['marginType'] ),
				'margin-right'   => UAGB_Helper::get_css_value( $attr['rightMarginTablet'], $attr['marginType'] ),

			);

			$selectors[ $wrapper . ' .uagb-button__icon > svg' ]       = array(
				'width'  => UAGB_Helper::get_css_value( self::get_fallback_number( $attr['iconSize'], 'iconSize', $block_name ), 'px' ),
				'height' => UAGB_Helper::get_css_value( self::get_fallback_number( $attr['iconSize'], 'iconSize', $block_name ), 'px' ),
				'fill'   => $attr['iconColor'],
			);
			$t_selectors[ $wrapper . ' .uagb-button__icon > svg' ]     = array(
				'width'  => UAGB_Helper::get_css_value( $attr['iconSizeTablet'], 'px' ),
				'height' => UAGB_Helper::get_css_value( $attr['iconSizeTablet'], 'px' ),
				'fill'   => $attr['iconColor'],
			);
			$m_selectors[ $wrapper . ' .uagb-button__icon > svg' ]     = array(
				'width'  => UAGB_Helper::get_css_value( $attr['iconSizeMobile'], 'px' ),
				'height' => UAGB_Helper::get_css_value( $attr['iconSizeMobile'], 'px' ),
				'fill'   => $attr['iconColor'],
			);
			$selectors[ $wrapper . ':hover .uagb-button__icon > svg' ] = array(
				'fill' => $attr['iconHColor'],
			);
			if ( ! $attr['removeText'] ) {
				$selectors[ $wrapper . ' .uagb-button__icon-position-after' ]   = array(
					'margin-left' => UAGB_Helper::get_css_value( self::get_fallback_number( $attr['iconSpace'], 'iconSpace', $block_name ), 'px' ),
				);
				$t_selectors[ $wrapper . ' .uagb-button__icon-position-after' ] = array(
					'margin-left' => UAGB_Helper::get_css_value( $attr['iconSpaceTablet'], 'px' ),
				);
				$m_selectors[ $wrapper . ' .uagb-button__icon-position-after' ] = array(
					'margin-left' => UAGB_Helper::get_css_value( $attr['iconSpaceMobile'], 'px' ),
				);

				$selectors[ $wrapper . ' .uagb-button__icon-position-before' ]   = array(
					'margin-right' => UAGB_Helper::get_css_value( self::get_fallback_number( $attr['iconSpace'], 'iconSpace', $block_name ), 'px' ),
				);
				$t_selectors[ $wrapper . ' .uagb-button__icon-position-before' ] = array(
					'margin-right' => UAGB_Helper::get_css_value( $attr['iconSpaceTablet'], 'px' ),
				);
				$m_selectors[ $wrapper . ' .uagb-button__icon-position-before' ] = array(
					'margin-right' => UAGB_Helper::get_css_value( $attr['iconSpaceMobile'], 'px' ),
				);
			}
			return array(
				'selectors'   => $selectors,
				'm_selectors' => $m_selectors,
				't_selectors' => $t_selectors,
			);
		}

		/**
		 * Get Social share Block CSS
		 *
		 * @since 1.14.9
		 * @param array  $attr The block attributes.
		 * @param string $id The key for the Icon List Item.
		 * @param string $childMigrate The child migration flag.
		 * @return array The Widget List.
		 */
		public static function get_social_share_child_selectors( $attr, $id, $childMigrate ) {

			$wrapper = ( ! $childMigrate ) ? ' .uagb-ss-repeater-' . $id : '.uagb-ss-repeater';

			$selectors[ $wrapper . ' a.uagb-ss__link' ]           = array(
				'color' => $attr['icon_color'],
			);
			$selectors[ $wrapper . ' a.uagb-ss__link' ]           = array(
				'color' => $attr['icon_color'],
			);
			$selectors[ $wrapper . ' a.uagb-ss__link svg' ]       = array(
				'fill' => $attr['icon_color'],
			);
			$selectors[ $wrapper . ':hover a.uagb-ss__link' ]     = array(
				'color' => $attr['icon_hover_color'],
			);
			$selectors[ $wrapper . ':hover a.uagb-ss__link svg' ] = array(
				'fill' => $attr['icon_hover_color'],
			);

			$selectors[ $wrapper . '.uagb-ss__wrapper' ]       = array(
				'background' => $attr['icon_bg_color'],
			);
			$selectors[ $wrapper . '.uagb-ss__wrapper:hover' ] = array(
				'background' => $attr['icon_bg_hover_color'],
			);

			return $selectors;
		}

		/**
		 * Get Icon List Block CSS
		 *
		 * @since 1.14.9
		 * @param array  $attr The block attributes.
		 * @param string $id The key for the Icon List Item.
		 * @param string $childMigrate The child migration flag.
		 * @return array The Widget List.
		 */
		public static function get_icon_list_child_selectors( $attr, $id, $childMigrate ) {

			$wrapper = ( ! $childMigrate ) ? ' .uagb-icon-list-repeater-' . $id : '.wp-block-uagb-icon-list-child';

			if ( ! empty( $attr['icon_color'] ) ) {
				$selectors[ $wrapper . ' .uagb-icon-list__source-wrap svg' ] = array(
					'fill'  => $attr['icon_color'] . ' !important',
					'color' => $attr['icon_color'] . ' !important',
				);
			}
			if ( ! empty( $attr['icon_hover_color'] ) ) {
				$selectors[ $wrapper . ':hover .uagb-icon-list__source-wrap svg' ] = array(
					'fill'  => $attr['icon_hover_color'] . ' !important',
					'color' => $attr['icon_hover_color'] . ' !important',
				);
			}
			if ( ! empty( $attr['label_color'] ) ) {
				$selectors[ $wrapper . ' .uagb-icon-list__label' ] = array(
					'color' => $attr['label_color'] . ' !important',
				);
			}
			if ( ! empty( $attr['label_hover_color'] ) ) {
				$selectors[ $wrapper . ':hover .uagb-icon-list__label' ] = array(
					'color' => $attr['label_hover_color'] . ' !important',
				);
			}

			$selectors[ $wrapper . ' .uagb-icon-list__source-wrap' ]       = array(
				'background'   => $attr['icon_bg_color'] . ' !important',
				'border-color' => $attr['icon_border_color'] . ' !important',
			);
			$selectors[ $wrapper . ':hover .uagb-icon-list__source-wrap' ] = array(
				'background'   => $attr['icon_bg_hover_color'] . ' !important',
				'border-color' => $attr['icon_border_hover_color'] . ' !important',
			);

			$selectors[ $wrapper . '.wp-block-uagb-icon-list-child.wp-block-uagb-icon-list-child' ] = array(
				'margin-top'     => UAGB_Helper::get_css_value(
					$attr['childTopMargin'],
					$attr['childMarginUnit']
				),
				'margin-right'   => UAGB_Helper::get_css_value(
					$attr['childRightMargin'],
					$attr['childMarginUnit']
				),
				'margin-bottom'  => UAGB_Helper::get_css_value(
					$attr['childBottomMargin'],
					$attr['childMarginUnit']
				),
				'margin-left'    => UAGB_Helper::get_css_value(
					$attr['childLeftMargin'],
					$attr['childMarginUnit']
				),
				'padding-top'    => UAGB_Helper::get_css_value(
					$attr['childTopPadding'],
					$attr['childPaddingUnit']
				),
				'padding-right'  => UAGB_Helper::get_css_value(
					$attr['childRightPadding'],
					$attr['childPaddingUnit']
				),
				'padding-bottom' => UAGB_Helper::get_css_value(
					$attr['childBottomPadding'],
					$attr['childPaddingUnit']
				),
				'padding-left'   => UAGB_Helper::get_css_value(
					$attr['childLeftPadding'],
					$attr['childPaddingUnit']
				),
			);

			$t_selectors[ $wrapper . '.wp-block-uagb-icon-list-child.wp-block-uagb-icon-list-child' ] = array(
				'margin-top'     => UAGB_Helper::get_css_value(
					$attr['childTopMarginTablet'],
					$attr['childMarginUnitTablet']
				),
				'margin-right'   => UAGB_Helper::get_css_value(
					$attr['childRightMarginTablet'],
					$attr['childMarginUnitTablet']
				),
				'margin-bottom'  => UAGB_Helper::get_css_value(
					$attr['childBottomMarginTablet'],
					$attr['childMarginUnitTablet']
				),
				'margin-left'    => UAGB_Helper::get_css_value(
					$attr['childLeftMarginTablet'],
					$attr['childMarginUnitTablet']
				),
				'padding-top'    => UAGB_Helper::get_css_value(
					$attr['childTopPaddingTablet'],
					$attr['childPaddingUnitTablet']
				),
				'padding-right'  => UAGB_Helper::get_css_value(
					$attr['childRightPaddingTablet'],
					$attr['childPaddingUnitTablet']
				),
				'padding-bottom' => UAGB_Helper::get_css_value(
					$attr['childBottomPaddingTablet'],
					$attr['childPaddingUnitTablet']
				),
				'padding-left'   => UAGB_Helper::get_css_value(
					$attr['childLeftPaddingTablet'],
					$attr['childPaddingUnitTablet']
				),
			);

			$m_selectors[ $wrapper . '.wp-block-uagb-icon-list-child.wp-block-uagb-icon-list-child' ] = array(
				'margin-top'     => UAGB_Helper::get_css_value(
					$attr['childTopMarginMobile'],
					$attr['childMarginUnitMobile']
				),
				'margin-right'   => UAGB_Helper::get_css_value(
					$attr['childRightMarginMobile'],
					$attr['childMarginUnitMobile']
				),
				'margin-bottom'  => UAGB_Helper::get_css_value(
					$attr['childBottomMarginMobile'],
					$attr['childMarginUnitMobile']
				),
				'margin-left'    => UAGB_Helper::get_css_value(
					$attr['childLeftMarginMobile'],
					$attr['childMarginUnitMobile']
				),
				'padding-top'    => UAGB_Helper::get_css_value(
					$attr['childTopPaddingMobile'],
					$attr['childPaddingUnitMobile']
				),
				'padding-right'  => UAGB_Helper::get_css_value(
					$attr['childRightPaddingMobile'],
					$attr['childPaddingUnitMobile']
				),
				'padding-bottom' => UAGB_Helper::get_css_value(
					$attr['childBottomPaddingMobile'],
					$attr['childPaddingUnitMobile']
				),
				'padding-left'   => UAGB_Helper::get_css_value(
					$attr['childLeftPaddingMobile'],
					$attr['childPaddingUnitMobile']
				),
			);

			return array(
				'desktop' => $selectors,
				'tablet'  => $t_selectors,
				'mobile'  => $m_selectors,
			);
		}

		/**
		 * Get Post Block Selectors CSS
		 *
		 * @param array $attr The block attributes.
		 * @since 1.4.0
		 */
		public static function get_post_selectors( $attr ) {

			$overlay_opacity_fallback      = self::get_fallback_number( $attr['overlayOpacity'], 'overlayOpacity', $attr['blockName'] );
			$image_bottom_space_fallback   = self::get_fallback_number( $attr['imageBottomSpace'], 'imageBottomSpace', $attr['blockName'] );
			$title_bottom_space_fallback   = self::get_fallback_number( $attr['titleBottomSpace'], 'titleBottomSpace', $attr['blockName'] );
			$meta_bottom_space_fallback    = self::get_fallback_number( $attr['metaBottomSpace'], 'metaBottomSpace', $attr['blockName'] );
			$excerpt_bottom_space_fallback = self::get_fallback_number( $attr['excerptBottomSpace'], 'excerptBottomSpace', $attr['blockName'] );
			$cta_bottom_space_fallback     = self::get_fallback_number( $attr['ctaBottomSpace'], 'ctaBottomSpace', $attr['blockName'] );

			$border_css = self::uag_generate_border_css( $attr, 'btn' );
			$border_css = self::uag_generate_deprecated_border_css(
				$border_css,
				( isset( $attr['borderWidth'] ) ? $attr['borderWidth'] : '' ),
				( isset( $attr['borderRadius'] ) ? $attr['borderRadius'] : '' ),
				( isset( $attr['borderColor'] ) ? $attr['borderColor'] : '' ),
				( isset( $attr['borderStyle'] ) ? $attr['borderStyle'] : '' ),
				( isset( $attr['borderHColor'] ) ? $attr['borderHColor'] : '' )
			);

			$overall_border_css = self::uag_generate_border_css( $attr, 'overall' );

			$paddingTop    = isset( $attr['paddingTop'] ) ? $attr['paddingTop'] : $attr['contentPadding'];
			$paddingBottom = isset( $attr['paddingBottom'] ) ? $attr['paddingBottom'] : $attr['contentPadding'];
			$paddingLeft   = isset( $attr['paddingLeft'] ) ? $attr['paddingLeft'] : $attr['contentPadding'];
			$paddingRight  = isset( $attr['paddingRight'] ) ? $attr['paddingRight'] : $attr['contentPadding'];

			$paddingBtnTop    = isset( $attr['paddingBtnTop'] ) ? $attr['paddingBtnTop'] : $attr['btnVPadding'];
			$paddingBtnBottom = isset( $attr['paddingBtnBottom'] ) ? $attr['paddingBtnBottom'] : $attr['btnVPadding'];
			$paddingBtnLeft   = isset( $attr['paddingBtnLeft'] ) ? $attr['paddingBtnLeft'] : $attr['btnHPadding'];
			$paddingBtnRight  = isset( $attr['paddingBtnRight'] ) ? $attr['paddingBtnRight'] : $attr['btnHPadding'];

			$box_shadow_position_css = $attr['boxShadowPosition'];

			if ( 'outset' === $attr['boxShadowPosition'] ) {
				$box_shadow_position_css = '';
			}

			$box_shadow_position_css_hover = $attr['boxShadowPositionHover'];

			if ( 'outset' === $attr['boxShadowPositionHover'] ) {
				$box_shadow_position_css_hover = '';
			}

			$column_gap_fallback = self::get_fallback_number( $attr['columnGap'], 'columnGap', $attr['blockName'] );
			$row_gap_fallback    = self::get_fallback_number( $attr['rowGap'], 'rowGap', $attr['blockName'] );

			$selectors = array(
				'.is-grid .uagb-post__inner-wrap'         => array_merge(
					array(
						'padding-top'    => UAGB_Helper::get_css_value( $paddingTop, $attr['contentPaddingUnit'] ),
						'padding-bottom' => UAGB_Helper::get_css_value( $paddingBottom, $attr['contentPaddingUnit'] ),
						'padding-left'   => UAGB_Helper::get_css_value( $paddingLeft, $attr['contentPaddingUnit'] ),
						'padding-right'  => UAGB_Helper::get_css_value( $paddingRight, $attr['contentPaddingUnit'] ),
						'box-shadow'     =>
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
					),
					$overall_border_css
				),
				'.is-grid .uagb-post__inner-wrap .uagb-post__image:first-child' => array(
					'margin-left'  => UAGB_Helper::get_css_value( - $paddingLeft, $attr['contentPaddingUnit'] ),
					'margin-right' => UAGB_Helper::get_css_value( - $paddingRight, $attr['contentPaddingUnit'] ),
					'margin-top'   => UAGB_Helper::get_css_value( - $paddingTop, $attr['contentPaddingUnit'] ),
				),
				':not(.is-grid) .uagb-post__inner-wrap .uagb-post__text:last-child' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $paddingBottom, $attr['contentPaddingUnit'] ),
				),
				':not(.is-grid) .uagb-post__inner-wrap .uagb-post__text:first-child' => array(
					'margin-top' => UAGB_Helper::get_css_value( $paddingTop, $attr['contentPaddingUnit'] ),
				),
				':not(.is-grid).uagb-post__items'         => array(
					'margin-right' => UAGB_Helper::get_css_value( (int) ( -$row_gap_fallback / 2 ), $attr['rowGapUnit'] ),
					'margin-left'  => UAGB_Helper::get_css_value( (int) ( -$row_gap_fallback / 2 ), $attr['rowGapUnit'] ),
				),
				':not(.is-grid).uagb-post__items article' => array(
					'padding-right' => UAGB_Helper::get_css_value( (int) ( $row_gap_fallback / 2 ), $attr['rowGapUnit'] ),
					'padding-left'  => UAGB_Helper::get_css_value( (int) ( $row_gap_fallback / 2 ), $attr['rowGapUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( ( $column_gap_fallback ), $attr['columnGapUnit'] ),
				),
				':not(.is-grid) .uagb-post__inner-wrap .uagb-post__text:not(.highlighted)' => array(
					'margin-left'  => UAGB_Helper::get_css_value( $paddingLeft, $attr['contentPaddingUnit'] ),
					'margin-right' => UAGB_Helper::get_css_value( $paddingRight, $attr['contentPaddingUnit'] ),
				),
				':not(.is-grid) .uagb-post__inner-wrap .uagb-post__text:first-child.highlighted:first-child' => array(
					'margin-top'  => UAGB_Helper::get_css_value( $paddingTop, $attr['contentPaddingUnit'] ),
					'margin-left' => UAGB_Helper::get_css_value( $paddingLeft, $attr['contentPaddingUnit'] ),
				),
				' .uagb-post__inner-wrap'                 => array(
					'background' => $attr['bgColor'],
					'text-align' => $attr['align'],
				),
				' .uagb-post__inner-wrap:hover'           => array(
					'border-color' => $attr['overallBorderHColor'],
				),
				' .uagb-post__inner-wrap .uagb-post__cta' => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $cta_bottom_space_fallback, $attr['ctaBottomSpaceUnit'] ),
				),
				' .uagb-post__image '                     => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $image_bottom_space_fallback, $attr['imageBottomSpaceUnit'] ),
				),
				' .uagb-post__title'                      => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $title_bottom_space_fallback, $attr['titleBottomSpaceUnit'] ),
				),
				' .uagb-post-grid-byline'                 => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $meta_bottom_space_fallback, $attr['metaBottomSpaceUnit'] ),
				),
				' .uagb-post__excerpt'                    => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $excerpt_bottom_space_fallback, $attr['excerptBottomSpaceUnit'] ),
				),
				' .uagb-post__image:before'               => array(
					'background-color' => $attr['bgOverlayColor'],
					'opacity'          => ( (int) $overlay_opacity_fallback / 100 ),
				),
				'.is-grid.uagb-post__items'               => array(
					'row-gap'    => UAGB_Helper::get_css_value( $row_gap_fallback, $attr['rowGapUnit'] ),
					'column-gap' => UAGB_Helper::get_css_value( $column_gap_fallback, $attr['columnGapUnit'] ),
				),
			);

			// If hover blur or hover color are set, show the hover shadow.
			if ( ( ( '' !== $attr['boxShadowBlurHover'] ) && ( null !== $attr['boxShadowBlurHover'] ) ) || '' !== $attr['boxShadowColorHover'] ) {

				$selectors['.is-grid .uagb-post__inner-wrap:hover']['box-shadow'] = UAGB_Helper::get_css_value( $attr['boxShadowHOffsetHover'], 'px' ) .
																			' ' .
																			UAGB_Helper::get_css_value( $attr['boxShadowVOffsetHover'], 'px' ) .
																			' ' .
																			UAGB_Helper::get_css_value( $attr['boxShadowBlurHover'], 'px' ) .
																			' ' .
																			UAGB_Helper::get_css_value( $attr['boxShadowSpreadHover'], 'px' ) .
																			' ' .
																			$attr['boxShadowColorHover'] .
																			' ' .
																			$box_shadow_position_css_hover;

			}
			$selectors[' .uagb-post__text.uagb-post__title']['color']                            = $attr['titleColor'];
			$selectors[' .uagb-post__text.uagb-post__title a']                                   = array(
				'color' => $attr['titleColor'],
			);
			$selectors[' .uagb-post__text.uagb-post-grid-byline']['color']                       = $attr['metaColor'];
			$selectors[' .uagb-post__text.uagb-post-grid-byline .uagb-post__author']             = array(
				'color' => $attr['metaColor'],
			);
			$selectors[' .uagb-post__inner-wrap .uagb-post__taxonomy']['color']                  = $attr['metaColor'];
			$selectors[' .uagb-post__inner-wrap .uagb-post__taxonomy a']['color']                = $attr['metaColor'];
			$selectors[' .uagb-post__inner-wrap .uagb-post__taxonomy.highlighted']['color']      = $attr['highlightedTextColor'];
			$selectors[' .uagb-post__inner-wrap .uagb-post__taxonomy.highlighted a']['color']    = $attr['highlightedTextColor'];
			$selectors[' .uagb-post__inner-wrap .uagb-post__taxonomy.highlighted']['background'] = $attr['highlightedTextBgColor'];
			$selectors[' .uagb-post__text.uagb-post-grid-byline .uagb-post__author a']           = array(
				'color' => $attr['metaColor'],
			);
			$selectors[' .uagb-post__text.uagb-post__excerpt']['color']                          = $attr['excerptColor'];
			$selectors[' .uagb-post__text.uagb-post__cta .uagb-text-link']                       = array_merge(
				array(
					'color'      => $attr['ctaColor'],
					'background' => $attr['ctaBgColor'],
				),
				$border_css
			);
			$selectors[' .uagb-post__text.uagb-post__cta a']                                     = array(
				'color'          => $attr['ctaColor'],
				'padding-top'    => UAGB_Helper::get_css_value( $paddingBtnTop, $attr['paddingBtnUnit'] ),
				'padding-bottom' => UAGB_Helper::get_css_value( $paddingBtnBottom, $attr['paddingBtnUnit'] ),
				'padding-left'   => UAGB_Helper::get_css_value( $paddingBtnLeft, $attr['paddingBtnUnit'] ),
				'padding-right'  => UAGB_Helper::get_css_value( $paddingBtnRight, $attr['paddingBtnUnit'] ),

			);
			$selectors[' .uagb-post__text.uagb-post__cta:hover']                  = array(
				'color'        => $attr['ctaHColor'],
				'background'   => $attr['ctaBgHColor'],
				'border-color' => $attr['btnBorderHColor'],
			);
			$selectors[' .uagb-post__text.uagb-post__cta:hover a.uagb-text-link'] = array(
				'color'        => $attr['ctaHColor'],
				'background'   => $attr['ctaBgHColor'],
				'border-color' => $attr['btnBorderHColor'],
			);

			return $selectors;

		}

		/**
		 * Get Post Block Selectors CSS for Mobile devices
		 *
		 * @param array $attr The block attributes.
		 * @since 1.6.1
		 */
		public static function get_post_mobile_selectors( $attr ) {

			$column_gap_fallback = self::get_fallback_number( $attr['columnGap'], 'columnGap', $attr['blockName'] );
			$row_gap_fallback    = self::get_fallback_number( $attr['rowGap'], 'rowGap', $attr['blockName'] );

			$border_css_mobile         = self::uag_generate_border_css( $attr, 'btn', 'mobile' );
			$overall_border_css_mobile = self::uag_generate_border_css( $attr, 'overall', 'mobile' );

			$paddingTopMobile    = isset( $attr['paddingTopMobile'] ) ? $attr['paddingTopMobile'] : $attr['contentPaddingMobile'];
			$paddingBottomMobile = isset( $attr['paddingBottomMobile'] ) ? $attr['paddingBottomMobile'] : $attr['contentPaddingMobile'];
			$paddingLeftMobile   = isset( $attr['paddingLeftMobile'] ) ? $attr['paddingLeftMobile'] : $attr['contentPaddingMobile'];
			$paddingRightMobile  = isset( $attr['paddingRightMobile'] ) ? $attr['paddingRightMobile'] : $attr['contentPaddingMobile'];

			$paddingBtnTopMobile    = isset( $attr['paddingBtnTopMobile'] ) ? $attr['paddingBtnTopMobile'] : $attr['btnVPadding'];
			$paddingBtnBottomMobile = isset( $attr['paddingBtnBottomMobile'] ) ? $attr['paddingBtnBottomMobile'] : $attr['btnVPadding'];
			$paddingBtnLeftMobile   = isset( $attr['paddingBtnLeftMobile'] ) ? $attr['paddingBtnLeftMobile'] : $attr['btnHPadding'];
			$paddingBtnRightMobile  = isset( $attr['paddingBtnRightMobile'] ) ? $attr['paddingBtnRightMobile'] : $attr['btnHPadding'];

			$rowGapMobile    = is_numeric( $attr['rowGapMobile'] ) ? $attr['rowGapMobile'] : $row_gap_fallback;
			$columnGapMobile = is_numeric( $attr['columnGapMobile'] ) ? $attr['columnGapMobile'] : $column_gap_fallback;

			$ctaBottomSpaceMobile     = isset( $attr['ctaBottomSpaceMobile'] ) ? $attr['ctaBottomSpaceMobile'] : '';
			$imageBottomSpaceMobile   = isset( $attr['imageBottomSpaceMobile'] ) ? $attr['imageBottomSpaceMobile'] : '';
			$titleBottomSpaceMobile   = isset( $attr['titleBottomSpaceMobile'] ) ? $attr['titleBottomSpaceMobile'] : '';
			$metaBottomSpaceMobile    = isset( $attr['metaBottomSpaceMobile'] ) ? $attr['metaBottomSpaceMobile'] : '';
			$excerptBottomSpaceMobile = isset( $attr['excerptBottomSpaceMobile'] ) ? $attr['excerptBottomSpaceMobile'] : '';

			$m_selector = array(
				' .uagb-post__inner-wrap .uagb-post__text.uagb-post__cta' => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $ctaBottomSpaceMobile, $attr['ctaBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__image' => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $imageBottomSpaceMobile, $attr['imageBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__title' => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $titleBottomSpaceMobile, $attr['titleBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post-grid-byline' => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $metaBottomSpaceMobile, $attr['metaBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__excerpt' => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $excerptBottomSpaceMobile, $attr['excerptBottomSpaceUnit'] ),
				),
				'.is-grid .uagb-post__inner-wrap'         => array_merge(
					array(
						'padding-top'    => UAGB_Helper::get_css_value( $paddingTopMobile, $attr['mobilePaddingUnit'] ),
						'padding-bottom' => UAGB_Helper::get_css_value( $paddingBottomMobile, $attr['mobilePaddingUnit'] ),
						'padding-left'   => UAGB_Helper::get_css_value( $paddingLeftMobile, $attr['mobilePaddingUnit'] ),
						'padding-right'  => UAGB_Helper::get_css_value( $paddingRightMobile, $attr['mobilePaddingUnit'] ),
					),
					$overall_border_css_mobile
				),
				' .uagb-post__cta a'                      => array_merge(
					array(
						'padding-top'    => UAGB_Helper::get_css_value( $paddingBtnTopMobile, $attr['mobilePaddingBtnUnit'] ),
						'padding-bottom' => UAGB_Helper::get_css_value( $paddingBtnBottomMobile, $attr['mobilePaddingBtnUnit'] ),
						'padding-left'   => UAGB_Helper::get_css_value( $paddingBtnLeftMobile, $attr['mobilePaddingBtnUnit'] ),
						'padding-right'  => UAGB_Helper::get_css_value( $paddingBtnRightMobile, $attr['mobilePaddingBtnUnit'] ),
					),
					$border_css_mobile
				),
				'.is-grid.uagb-post__items'               => array(
					'row-gap'    => UAGB_Helper::get_css_value( $rowGapMobile, $attr['rowGapUnit'] ),
					'column-gap' => UAGB_Helper::get_css_value( $columnGapMobile, $attr['columnGapUnit'] ),
				),
				':not(.is-grid).uagb-post__items article' => array(
					'padding-right' => UAGB_Helper::get_css_value( (int) ( $rowGapMobile / 2 ), $attr['rowGapUnit'] ),
					'padding-left'  => UAGB_Helper::get_css_value( (int) ( $rowGapMobile / 2 ), $attr['rowGapUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( ( $columnGapMobile ), $attr['columnGapUnit'] ),
				),
				':not(.is-grid).uagb-post__items'         => array(
					'margin-right' => UAGB_Helper::get_css_value( (int) ( -$rowGapMobile / 2 ), $attr['rowGapUnit'] ),
					'margin-left'  => UAGB_Helper::get_css_value( (int) ( -$rowGapMobile / 2 ), $attr['rowGapUnit'] ),
				),
				'.is-grid .uagb-post__inner-wrap .uagb-post__image:first-child' => array(
					'margin-left'  => UAGB_Helper::get_css_value( - (int) ( $paddingLeftMobile ), $attr['mobilePaddingBtnUnit'] ),
					'margin-right' => UAGB_Helper::get_css_value( - (int) ( $paddingRightMobile ), $attr['mobilePaddingBtnUnit'] ),
					'margin-top'   => UAGB_Helper::get_css_value( - (int) ( $paddingTopMobile ), $attr['mobilePaddingBtnUnit'] ),
				),
			);

			return $m_selector;
		}

		/**
		 * Get Post Block Selectors CSS for Tablet devices
		 *
		 * @param array $attr The block attributes.
		 * @since 1.8.2
		 */
		public static function get_post_tablet_selectors( $attr ) {

			$column_gap_fallback = self::get_fallback_number( $attr['columnGap'], 'columnGap', $attr['blockName'] );
			$row_gap_fallback    = self::get_fallback_number( $attr['rowGap'], 'rowGap', $attr['blockName'] );

			$border_css_tablet         = self::uag_generate_border_css( $attr, 'btn', 'tablet' );
			$overall_border_css_tablet = self::uag_generate_border_css( $attr, 'overall', 'tablet' );

			$paddingTopTablet    = isset( $attr['paddingTopTablet'] ) ? $attr['paddingTopTablet'] : $attr['contentPadding'];
			$paddingBottomTablet = isset( $attr['paddingBottomTablet'] ) ? $attr['paddingBottomTablet'] : $attr['contentPadding'];
			$paddingLeftTablet   = isset( $attr['paddingLeftTablet'] ) ? $attr['paddingLeftTablet'] : $attr['contentPadding'];
			$paddingRightTablet  = isset( $attr['paddingRightTablet'] ) ? $attr['paddingRightTablet'] : $attr['contentPadding'];

			$paddingBtnTopTablet    = isset( $attr['paddingBtnTopTablet'] ) ? $attr['paddingBtnTopTablet'] : $attr['btnVPadding'];
			$paddingBtnBottomTablet = isset( $attr['paddingBtnBottomTablet'] ) ? $attr['paddingBtnBottomTablet'] : $attr['btnVPadding'];
			$paddingBtnLeftTablet   = isset( $attr['paddingBtnLeftTablet'] ) ? $attr['paddingBtnLeftTablet'] : $attr['btnHPadding'];
			$paddingBtnRightTablet  = isset( $attr['paddingBtnRightTablet'] ) ? $attr['paddingBtnRightTablet'] : $attr['btnHPadding'];

			$rowGapTablet    = is_numeric( $attr['rowGapTablet'] ) ? $attr['rowGapTablet'] : $row_gap_fallback;
			$columnGapTablet = is_numeric( $attr['columnGapTablet'] ) ? $attr['columnGapTablet'] : $column_gap_fallback;

			$ctaBottomSpaceTablet     = isset( $attr['ctaBottomSpaceTablet'] ) ? $attr['ctaBottomSpaceTablet'] : '';
			$imageBottomSpaceTablet   = isset( $attr['imageBottomSpaceTablet'] ) ? $attr['imageBottomSpaceTablet'] : '';
			$titleBottomSpaceTablet   = isset( $attr['titleBottomSpaceTablet'] ) ? $attr['titleBottomSpaceTablet'] : '';
			$metaBottomSpaceTablet    = isset( $attr['metaBottomSpaceTablet'] ) ? $attr['metaBottomSpaceTablet'] : '';
			$excerptBottomSpaceTablet = isset( $attr['excerptBottomSpaceTablet'] ) ? $attr['excerptBottomSpaceTablet'] : '';

			$t_selector = array(
				' .uagb-post__inner-wrap .uagb-post__text.uagb-post__cta' => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $ctaBottomSpaceTablet, $attr['ctaBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__image' => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $imageBottomSpaceTablet, $attr['imageBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__title' => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $titleBottomSpaceTablet, $attr['titleBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post-grid-byline' => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $metaBottomSpaceTablet, $attr['metaBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap .uagb-post__excerpt' => array(
					'padding-bottom' => UAGB_Helper::get_css_value( $excerptBottomSpaceTablet, $attr['excerptBottomSpaceUnit'] ),
				),
				' .uagb-post__inner-wrap'                 => array_merge(
					array(
						'padding-top'    => UAGB_Helper::get_css_value( $paddingTopTablet, $attr['tabletPaddingUnit'] ),
						'padding-bottom' => UAGB_Helper::get_css_value( $paddingBottomTablet, $attr['tabletPaddingUnit'] ),
						'padding-left'   => UAGB_Helper::get_css_value( $paddingLeftTablet, $attr['tabletPaddingUnit'] ),
						'padding-right'  => UAGB_Helper::get_css_value( $paddingRightTablet, $attr['tabletPaddingUnit'] ),
					),
					$overall_border_css_tablet
				),
				' .uagb-post__cta a'                      => array_merge(
					array(
						'padding-top'    => UAGB_Helper::get_css_value( $paddingBtnTopTablet, $attr['tabletPaddingBtnUnit'] ),
						'padding-bottom' => UAGB_Helper::get_css_value( $paddingBtnBottomTablet, $attr['tabletPaddingBtnUnit'] ),
						'padding-left'   => UAGB_Helper::get_css_value( $paddingBtnLeftTablet, $attr['tabletPaddingBtnUnit'] ),
						'padding-right'  => UAGB_Helper::get_css_value( $paddingBtnRightTablet, $attr['tabletPaddingBtnUnit'] ),
					),
					$border_css_tablet
				),
				'.is-grid.uagb-post__items'               => array(
					'row-gap'    => UAGB_Helper::get_css_value( $rowGapTablet, $attr['rowGapUnit'] ),
					'column-gap' => UAGB_Helper::get_css_value( $columnGapTablet, $attr['columnGapUnit'] ),
				),
				':not(.is-grid).uagb-post__items article' => array(
					'padding-right' => UAGB_Helper::get_css_value( (int) ( $rowGapTablet / 2 ), $attr['rowGapUnit'] ),
					'padding-left'  => UAGB_Helper::get_css_value( (int) ( $rowGapTablet / 2 ), $attr['rowGapUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( ( $columnGapTablet ), $attr['columnGapUnit'] ),
				),
				':not(.is-grid).uagb-post__items'         => array(
					'margin-right' => UAGB_Helper::get_css_value( (int) ( -$rowGapTablet / 2 ), $attr['rowGapUnit'] ),
					'margin-left'  => UAGB_Helper::get_css_value( (int) ( -$rowGapTablet / 2 ), $attr['rowGapUnit'] ),
				),
				'.is-grid .uagb-post__inner-wrap .uagb-post__image:first-child' => array(
					'margin-left'  => UAGB_Helper::get_css_value( - (int) ( $paddingLeftTablet ), $attr['tabletPaddingUnit'] ),
					'margin-right' => UAGB_Helper::get_css_value( - (int) ( $paddingRightTablet ), $attr['tabletPaddingUnit'] ),
					'margin-top'   => UAGB_Helper::get_css_value( - (int) ( $paddingTopTablet ), $attr['tabletPaddingUnit'] ),
				),
			);

			return $t_selector;
		}

		/**
		 * Get Timeline Block Desktop Selectors CSS
		 *
		 * @param array $attr The block attributes.
		 * @since 1.8.2
		 */
		public static function get_timeline_selectors( $attr ) {

			$left_margin  = $attr['horizontalSpace'];
			$right_margin = $attr['horizontalSpace'];

			$top_padding    = isset( $attr['topPadding'] ) ? $attr['topPadding'] : $attr['bgPadding'];
			$bottom_padding = isset( $attr['bottomPadding'] ) ? $attr['bottomPadding'] : $attr['bgPadding'];
			$left_padding   = isset( $attr['leftPadding'] ) ? $attr['leftPadding'] : $attr['bgPadding'];
			$right_padding  = isset( $attr['rightPadding'] ) ? $attr['rightPadding'] : $attr['bgPadding'];

			$icon_size_fallback         = self::get_fallback_number( $attr['iconSize'], 'iconSize', $attr['blockName'] );
			$connector_bg_size_fallback = self::get_fallback_number( $attr['connectorBgsize'], 'connectorBgsize', $attr['blockName'] );
			$border_width_fallback      = self::get_fallback_number( $attr['borderwidth'], 'borderwidth', $attr['blockName'] );
			$separator_width_fallback   = self::get_fallback_number( $attr['separatorwidth'], 'separatorwidth', $attr['blockName'] );
			$head_space_fallback        = self::get_fallback_number( $attr['headSpace'], 'headSpace', $attr['blockName'] );
			$border_radius_fallback     = self::get_fallback_number( $attr['borderRadius'], 'borderRadius', $attr['blockName'] );
			$date_bottom_space_fallback = self::get_fallback_number( $attr['dateBottomspace'], 'dateBottomspace', $attr['blockName'] );
			$head_top_spacing_fallback  = 'post-timeline' === $attr['blockName'] ? self::get_fallback_number( $attr['headTopSpacing'], 'headTopSpacing', $attr['blockName'] ) : $attr['contentPadding'];

			$connector_size = UAGB_Helper::get_css_value( $connector_bg_size_fallback, 'px' );

			$selectors = array(
				' .uagb-timeline__heading'               => array(
					'margin-top'    => UAGB_Helper::get_css_value( $head_top_spacing_fallback, 'px' ),
					'margin-bottom' => UAGB_Helper::get_css_value( $head_space_fallback, 'px' ),
				),
				' .uagb-timeline-desc-content'           => array(
					'text-align' => $attr['align'],
					'color'      => $attr['subHeadingColor'],
				),
				' .uagb-timeline__day-new'               => array(
					'text-align' => $attr['align'],
				),
				' .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
					'border-left-color' => $attr['backgroundColor'],
				),
				' .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
					'border-left-color' => $attr['backgroundColor'],
				),
				' .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
					'border-right-color' => $attr['backgroundColor'],
				),
				' .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
					'border-right-color' => $attr['backgroundColor'],
				),
				' .uagb-timeline__line__inner'           => array(
					'background-color' => $attr['separatorFillColor'],
				),
				' .uagb-timeline__line'                  => array(
					'background-color' => $attr['separatorColor'],
					'width'            => UAGB_Helper::get_css_value( $separator_width_fallback, 'px' ),
				),
				'.uagb-timeline__right-block .uagb-timeline__line' => array(
					'right' => 'calc( ' . $connector_bg_size_fallback . 'px / 2 )',
				),
				'.uagb-timeline__left-block .uagb-timeline__line' => array(
					'left' => 'calc( ' . $connector_bg_size_fallback . 'px / 2 )',
				),
				'.uagb-timeline__center-block .uagb-timeline__line' => array(
					'right' => 'calc( ' . $connector_bg_size_fallback . 'px / 2 )',
				),
				' .uagb-timeline__marker'                => array(
					'background-color' => $attr['separatorBg'],
					'min-height'       => $connector_size,
					'min-width'        => $connector_size,
					'line-height'      => $connector_size,
					'border'           => $border_width_fallback . 'px solid' . $attr['separatorBorder'],
				),
				'.uagb-timeline__left-block .uagb-timeline__left .uagb-timeline__arrow' => array(
					'height' => $connector_size,
				),
				'.uagb-timeline__right-block .uagb-timeline__right .uagb-timeline__arrow' => array(
					'height' => $connector_size,
				),
				'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__arrow' => array(
					'height' => $connector_size,
				),
				'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__arrow' => array(
					'height' => $connector_size,
				),
				'.uagb-timeline__center-block .uagb-timeline__left .uagb-timeline__marker' => array(
					'margin-left'  => UAGB_Helper::get_css_value( $left_margin, $attr['marginUnit'] ),
					'margin-right' => UAGB_Helper::get_css_value( $right_margin, $attr['marginUnit'] ),
				),
				'.uagb-timeline__center-block .uagb-timeline__right .uagb-timeline__marker' => array(
					'margin-left'  => UAGB_Helper::get_css_value( $left_margin, $attr['marginUnit'] ),
					'margin-right' => UAGB_Helper::get_css_value( $right_margin, $attr['marginUnit'] ),
				),
				' .uagb-timeline__date-hide.uagb-timeline__inner-date-new' => array( // For New User.
					'margin-bottom' => UAGB_Helper::get_css_value( $date_bottom_space_fallback, 'px' ),
					'color'         => $attr['dateColor'],
					'text-align'    => $attr['align'],
				),
				' .uagb-timeline__date-hide.uagb-timeline__date-inner' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $date_bottom_space_fallback, 'px' ),
					'color'         => $attr['dateColor'],
					'text-align'    => $attr['align'],
				),
				'.uagb-timeline__left-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
					'margin-left' => UAGB_Helper::get_css_value( $left_margin, $attr['marginUnit'] ),
				),
				'.uagb-timeline__right-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
					'margin-right' => UAGB_Helper::get_css_value( $right_margin, $attr['marginUnit'] ),
				),
				' .uagb-timeline__date-new'              => array(
					'color'     => $attr['dateColor'],
					'font-size' => UAGB_Helper::get_css_value( $attr['dateFontsize'], $attr['dateFontsizeType'] ),
				),
				' .uagb-timeline__events-inner-new'      => array(
					'background-color' => $attr['backgroundColor'],
					'border-radius'    => UAGB_Helper::get_css_value( $border_radius_fallback, 'px' ),
				),
				' .uagb-timeline__events-inner--content' => array(
					'padding-left'   => UAGB_Helper::get_css_value( $top_padding, $attr['paddingUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $right_padding, $attr['paddingUnit'] ),
					'padding-top'    => UAGB_Helper::get_css_value( $top_padding, $attr['paddingUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $bottom_padding, $attr['paddingUnit'] ),
				),
				' svg'                                   => array(
					'color'     => $attr['iconColor'],
					'font-size' => UAGB_Helper::get_css_value( $icon_size_fallback, 'px' ),
					'width'     => UAGB_Helper::get_css_value( $icon_size_fallback, 'px' ),
					'fill'      => $attr['iconColor'],
				),
				' .uagb-timeline__marker.uagb-timeline__in-view-icon svg' => array(
					'fill'  => $attr['iconFocus'],
					'color' => $attr['iconFocus'],
				),
				' .uagb-timeline__marker.uagb-timeline__in-view-icon' => array(
					'background'   => $attr['iconBgFocus'],
					'border-color' => $attr['borderFocus'],
				),
			);

			return $selectors;

		}

		/**
		 * Get Timeline Block Tablet Selectors CSS.
		 *
		 * @param array $attr The block attributes.
		 * @since 1.8.2
		 */
		public static function get_timeline_tablet_selectors( $attr ) {

			$connector_bg_size_fallback = self::get_fallback_number( $attr['connectorBgsize'], 'connectorBgsize', $attr['blockName'] );

			$tablet_selector = array(
				' .uagb-timeline__heading'          => array(
					'margin-top'    => UAGB_Helper::get_css_value( $attr['headTopSpacingTablet'], 'px' ),
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceTablet'], 'px' ),
				),
				' .uagb-timeline__date-hide.uagb-timeline__inner-date-new' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['dateBottomspaceTablet'], 'px' ),
				),
				'.uagb-timeline__center-block .uagb-timeline__marker' => array(
					'margin-left'  => 0,
					'margin-right' => 0,
				),
				'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
					'border-right-color' => $attr['backgroundColor'],
				),
				'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__day-left .uagb-timeline__arrow:after' => array(
					'border-right-color' => $attr['backgroundColor'],
				),
				'.uagb-timeline__center-block.uagb-timeline__responsive-tablet .uagb-timeline__line' => array(
					'left' => 'calc( ' . $connector_bg_size_fallback . 'px / 2 )',
				),
				'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
					'margin-left'   => UAGB_Helper::get_css_value( $attr['leftMarginTablet'], $attr['tabletMarginUnit'] ),
					'margin-right'  => UAGB_Helper::get_css_value( $attr['rightMarginTablet'], $attr['tabletMarginUnit'] ),
					'margin-top'    => UAGB_Helper::get_css_value( $attr['topMarginTablet'], $attr['tabletMarginUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['bottomMarginTablet'], $attr['tabletMarginUnit'] ),
				),
				'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
					'margin-left'   => UAGB_Helper::get_css_value( $attr['leftMarginTablet'], $attr['tabletMarginUnit'] ),
					'margin-right'  => UAGB_Helper::get_css_value( $attr['rightMarginTablet'], $attr['tabletMarginUnit'] ),
					'margin-top'    => UAGB_Helper::get_css_value( $attr['topMarginTablet'], $attr['tabletMarginUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['bottomMarginTablet'], $attr['tabletMarginUnit'] ),
				),
				' .uagb-timeline__events-inner-new' => array(
					'padding-left'   => UAGB_Helper::get_css_value( $attr['topPaddingTablet'], $attr['tabletPaddingUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingTablet'], $attr['tabletPaddingUnit'] ),
					'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingTablet'], $attr['tabletPaddingUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingTablet'], $attr['tabletPaddingUnit'] ),
					'border-radius'  => UAGB_Helper::get_css_value( $attr['borderRadiusTablet'], 'px' ),
				),
			);

			return $tablet_selector;

		}

		/**
		 * Get Timeline Block Mobile Selectors CSS.
		 *
		 * @param array $attr The block attributes.
		 * @since 1.8.2
		 */
		public static function get_timeline_mobile_selectors( $attr ) {

			$connector_bg_size_fallback = self::get_fallback_number( $attr['connectorBgsize'], 'connectorBgsize', $attr['blockName'] );

			$m_selectors = array(
				' .uagb-timeline__heading'          => array(
					'margin-top'    => UAGB_Helper::get_css_value( $attr['headTopSpacingMobile'], 'px' ),
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['headSpaceMobile'], 'px' ),
				),
				' .uagb-timeline__date-hide.uagb-timeline__inner-date-new' => array(
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['dateBottomspaceMobile'], 'px' ),
				),
				'.uagb-timeline__center-block .uagb-timeline__marker' => array(
					'margin-left'  => 0,
					'margin-right' => 0,
				),
				' .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
					'margin-left' => UAGB_Helper::get_css_value( $attr['horizontalSpace'], 'px' ),
				),
				' .uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
					'margin-left' => UAGB_Helper::get_css_value( $attr['horizontalSpace'], 'px' ),
				),
				'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__day-right .uagb-timeline__arrow:after' => array(
					'border-right-color' => $attr['backgroundColor'],
				),
				'.uagb-timeline__center-block.uagb-timeline__responsive-mobile .uagb-timeline__line' => array(
					'left' => 'calc( ' . $connector_bg_size_fallback . 'px / 2 )',
				),
				'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-left' => array(
					'margin-left'   => UAGB_Helper::get_css_value( $attr['leftMarginMobile'], $attr['mobileMarginUnit'] ),
					'margin-right'  => UAGB_Helper::get_css_value( $attr['rightMarginMobile'], $attr['mobileMarginUnit'] ),
					'margin-top'    => UAGB_Helper::get_css_value( $attr['topMarginMobile'], $attr['mobileMarginUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['bottomMarginMobile'], $attr['mobileMarginUnit'] ),
				),
				'.uagb-timeline__center-block .uagb-timeline__day-new.uagb-timeline__day-right' => array(
					'margin-left'   => UAGB_Helper::get_css_value( $attr['leftMarginMobile'], $attr['mobileMarginUnit'] ),
					'margin-right'  => UAGB_Helper::get_css_value( $attr['rightMarginMobile'], $attr['mobileMarginUnit'] ),
					'margin-top'    => UAGB_Helper::get_css_value( $attr['topMarginMobile'], $attr['mobileMarginUnit'] ),
					'margin-bottom' => UAGB_Helper::get_css_value( $attr['bottomMarginMobile'], $attr['mobileMarginUnit'] ),
				),
				' .uagb-timeline__events-inner-new' => array(
					'padding-left'   => UAGB_Helper::get_css_value( $attr['topPaddingMobile'], $attr['mobilePaddingUnit'] ),
					'padding-right'  => UAGB_Helper::get_css_value( $attr['rightPaddingMobile'], $attr['mobilePaddingUnit'] ),
					'padding-top'    => UAGB_Helper::get_css_value( $attr['topPaddingMobile'], $attr['mobilePaddingUnit'] ),
					'padding-bottom' => UAGB_Helper::get_css_value( $attr['bottomPaddingMobile'], $attr['mobilePaddingUnit'] ),
					'border-radius'  => UAGB_Helper::get_css_value( $attr['borderRadiusMobile'], 'px' ),
				),
			);
			return $m_selectors;

		}

		/**
		 * Get Condition block CSS.
		 *
		 * @since 1.22.0
		 */
		public static function get_condition_block_css() {

			return '@media (min-width: 1025px){body .uag-hide-desktop.uagb-google-map__wrap,body .uag-hide-desktop{display:none !important}}@media (min-width: 768px) and (max-width: 1024px){body .uag-hide-tab.uagb-google-map__wrap,body .uag-hide-tab{display:none !important}}@media (max-width: 767px){body .uag-hide-mob.uagb-google-map__wrap,body .uag-hide-mob{display:none !important}}';
		}

		/**
		 * Get Masonry Gallery CSS.
		 *
		 * @since 1.24.0
		 * @param array  $attr The block attributes.
		 * @param string $id The selector ID.
		 */
		public static function get_gallery_css( $attr, $id ) {

			if ( isset( $attr['masonry'] ) && true === $attr['masonry'] ) {
				$col_count = ( isset( $attr['columns'] ) ) ? $attr['columns'] : 3;
				$selectors = array();
				if ( isset( $attr['masonryGutter'] ) && '' !== $attr['masonryGutter'] ) {
					$selectors = array(
						'.wp-block-gallery.has-nested-images.columns-' . $col_count => array(
							'column-gap' => UAGB_Helper::get_css_value( $attr['masonryGutter'], 'px' ),
						),
						'.wp-block-gallery.has-nested-images.columns-default' => array(
							'column-gap' => UAGB_Helper::get_css_value( $attr['masonryGutter'], 'px' ),
						),
						'.wp-block-gallery.has-nested-images figure.wp-block-image:not(#individual-image) img' => array(
							'margin-bottom' => UAGB_Helper::get_css_value( $attr['masonryGutter'], 'px' ),
						),
						'.wp-block-gallery.columns-' . $col_count . ' ul.blocks-gallery-grid' => array( // For Backword.
							'column-gap' => UAGB_Helper::get_css_value( $attr['masonryGutter'], 'px' ),
						),
						'.wp-block-gallery ul.blocks-gallery-grid li.blocks-gallery-item' => array( // For Backword.
							'margin-bottom' => UAGB_Helper::get_css_value( $attr['masonryGutter'], 'px' ),
						),
					);
				}
				$t_selectors = array();
				if ( $col_count > 3 ) {
					$t_selectors = array(
						'.wp-block-gallery.columns-' . $col_count . ' .blocks-gallery-grid' => array(
							'column-count' => '3',
						),
					);
				}
			}
			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => $t_selectors,
				'mobile'  => array(),
			);

			return UAGB_Helper::generate_all_css( $combined_selectors, '.uagb-block-' . $id );
		}

		/**
		 * Get Masonry Gallery CSS.
		 *
		 * @since 1.24.0
		 */
		public static function get_masonry_gallery_css() {

			$selectors = array(
				'.wp-block-gallery.has-nested-images'    => array(
					'display'      => 'block',
					'column-count' => '3',
					'column-gap'   => '1em',
				),
				'.wp-block-gallery.has-nested-images figure.wp-block-image:not(#individual-image)' => array(
					'margin'             => 0,
					'display'            => 'block',
					'grid-template-rows' => '1fr auto',
					'margin-bottom'      => '1em',
					'break-inside'       => 'avoid',
					'width'              => 'unset',
				),
				'.columns-default.wp-block-gallery.has-nested-images' => array(
					'column-count' => '3',
					'width'        => 'unset',
				),
				'.columns-1.wp-block-gallery.has-nested-images' => array(
					'column-count' => '1',
					'width'        => 'unset',
				),
				'.columns-2.wp-block-gallery.has-nested-images' => array(
					'column-count' => '2',
				),
				'.columns-3.wp-block-gallery.has-nested-images' => array(
					'column-count' => '3',
					'width'        => 'unset',
				),
				'.columns-4.wp-block-gallery.has-nested-images' => array(
					'column-count' => '4',
					'width'        => 'unset',
				),
				'.columns-5.wp-block-gallery.has-nested-images' => array(
					'column-count' => '5',
					'width'        => 'unset',
				),
				'.columns-6.wp-block-gallery.has-nested-images' => array(
					'column-count' => '6',
					'width'        => 'unset',
				),
				'.columns-7.wp-block-gallery.has-nested-images' => array(
					'column-count' => '7',
					'width'        => 'unset',
				),
				'.columns-8.wp-block-gallery.has-nested-images' => array(
					'column-count' => '8',
					'width'        => 'unset',
				),
				/* For Backword */
				' .blocks-gallery-grid .blocks-gallery-item' => array(
					'margin'             => 0,
					'display'            => 'block',
					'grid-template-rows' => '1fr auto',
					'margin-bottom'      => '1em',
					'break-inside'       => 'avoid',
					'width'              => 'unset',
				),
				'.wp-block-gallery .blocks-gallery-grid' => array(
					'column-gap' => '1em',
					'display'    => 'block',
				),
				'.columns-1 .blocks-gallery-grid'        => array(
					'column-count' => '1',
				),
				'.columns-2 .blocks-gallery-grid'        => array(
					'column-count' => '2',
				),
				'.columns-3 .blocks-gallery-grid'        => array(
					'column-count' => '3',
				),
				'.columns-4 .blocks-gallery-grid'        => array(
					'column-count' => '4',
				),
				'.columns-5 .blocks-gallery-grid'        => array(
					'column-count' => '5',
				),
				'.columns-6 .blocks-gallery-grid'        => array(
					'column-count' => '6',
				),
				'.columns-7 .blocks-gallery-grid'        => array(
					'column-count' => '7',
				),
				'.columns-8 .blocks-gallery-grid'        => array(
					'column-count' => '8',
				),
				/* End Backword */
			);

			$m_selectors = array(
				'.wp-block-gallery[class*="columns-"].blocks-gallery-grid' => array(
					'column-count' => '2',
					'column-gap'   => '1em',
					'display'      => 'unset',
				),
				'.wp-block-gallery.columns-1.blocks-gallery-grid'        => array(
					'column-count' => '1',
				),
				/* For Backword */
				'.wp-block-gallery[class*="columns-"] .blocks-gallery-grid' => array(
					'column-count' => '2',
					'column-gap'   => '1em',
					'display'      => 'unset',
				),
				'.wp-block-gallery.columns-1 .blocks-gallery-grid'        => array(
					'column-count' => '1',
				),
				/* End Backword */
			);

			$combined_selectors = array(
				'desktop' => $selectors,
				'tablet'  => array(),
				'mobile'  => $m_selectors,
			);

			$css = UAGB_Helper::generate_all_css( $combined_selectors, '.uag-masonry' );

			$desktop = $css['desktop'];
			$tablet  = $css['tablet'];
			$mobile  = $css['mobile'];

			$tab_styling_css = '';
			$mob_styling_css = '';

			if ( ! empty( $tablet ) ) {
				$tab_styling_css .= '@media only screen and (max-width: ' . UAGB_TABLET_BREAKPOINT . 'px) {';
				$tab_styling_css .= $tablet;
				$tab_styling_css .= '}';
			}

			if ( ! empty( $mobile ) ) {
				$mob_styling_css .= '@media only screen and (max-width: ' . UAGB_MOBILE_BREAKPOINT . 'px) {';
				$mob_styling_css .= $mobile;
				$mob_styling_css .= '}';
			}

			return $desktop . $tab_styling_css . $mob_styling_css;
		}
		/**
		 * Background Control CSS Generator Function.
		 *
		 * @param  array $bg_obj   Color code in HEX.
		 *
		 * @return array         Color code in HEX.
		 */
		public static function uag_get_background_obj( $bg_obj ) {

			$gen_bg_css = array();

			$bg_type             = isset( $bg_obj['backgroundType'] ) ? $bg_obj['backgroundType'] : '';
			$bg_img              = isset( $bg_obj['backgroundImage'] ) && isset( $bg_obj['backgroundImage']['url'] ) ? $bg_obj['backgroundImage']['url'] : '';
			$bg_color            = isset( $bg_obj['backgroundColor'] ) ? $bg_obj['backgroundColor'] : '';
			$gradient_value      = isset( $bg_obj['gradientValue'] ) ? $bg_obj['gradientValue'] : '';
			$repeat              = isset( $bg_obj['backgroundRepeat'] ) ? $bg_obj['backgroundRepeat'] : '';
			$position            = isset( $bg_obj['backgroundPosition'] ) ? $bg_obj['backgroundPosition'] : '';
			$size                = isset( $bg_obj['backgroundSize'] ) ? $bg_obj['backgroundSize'] : '';
			$attachment          = isset( $bg_obj['backgroundAttachment'] ) ? $bg_obj['backgroundAttachment'] : '';
			$overlay_type        = isset( $bg_obj['overlayType'] ) ? $bg_obj['overlayType'] : '';
			$bg_image_color      = isset( $bg_obj['backgroundImageColor'] ) ? $bg_obj['backgroundImageColor'] : '';
			$bg_custom_size      = isset( $bg_obj['backgroundCustomSize'] ) ? $bg_obj['backgroundCustomSize'] : '';
			$bg_custom_size_type = isset( $bg_obj['backgroundCustomSizeType'] ) ? $bg_obj['backgroundCustomSizeType'] : '';
			$bg_video            = isset( $bg_obj['backgroundVideo'] ) ? $bg_obj['backgroundVideo'] : '';
			$bg_video_color      = isset( $bg_obj['backgroundVideoColor'] ) ? $bg_obj['backgroundVideoColor'] : '';

			$custom_position = isset( $bg_obj['customPosition'] ) ? $bg_obj['customPosition'] : '';
			$x_position      = isset( $bg_obj['xPosition'] ) ? $bg_obj['xPosition'] : '';
			$x_position_type = isset( $bg_obj['xPositionType'] ) ? $bg_obj['xPositionType'] : '';
			$y_position      = isset( $bg_obj['yPosition'] ) ? $bg_obj['yPosition'] : '';
			$y_position_type = isset( $bg_obj['yPositionType'] ) ? $bg_obj['yPositionType'] : '';

			if ( 'custom' === $size ) {
				$size = $bg_custom_size . $bg_custom_size_type;
			}

			if ( '' !== $bg_type ) {
				switch ( $bg_type ) {
					case 'color':
						if ( '' !== $bg_img && '' !== $bg_color ) {
							$gen_bg_css['background-image'] = 'linear-gradient(to right, ' . $bg_color . ', ' . $bg_color . '), url(' . $bg_img . ');';
						} elseif ( '' === $bg_img ) {
							$gen_bg_css['background-color'] = $bg_color . ';';
						}
						break;

					case 'image':
						if ( 'color' === $overlay_type && '' !== $bg_img && '' !== $bg_image_color ) {
							$gen_bg_css['background-image'] = 'linear-gradient(to right, ' . $bg_image_color . ', ' . $bg_image_color . '), url(' . $bg_img . ');';
						}
						if ( 'gradient' === $overlay_type && '' !== $bg_img && '' !== $gradient_value ) {
							$gen_bg_css['background-image'] = $gradient_value . ', url(' . $bg_img . ');';
						}
						if ( 'none' === $overlay_type && '' !== $bg_img ) {
							$gen_bg_css['background-image'] = 'url(' . $bg_img . ');';
						}
						break;

					case 'gradient':
						if ( isset( $gradient_value ) ) {
							$gen_bg_css['background-image'] = $gradient_value . ';';
						}
						break;
					case 'video':
						if ( 'color' === $overlay_type && '' !== $bg_video && '' !== $bg_video_color ) {
							$gen_bg_css['background'] = $bg_video_color . ';';
						}
						if ( 'gradient' === $overlay_type && '' !== $bg_video && '' !== $gradient_value ) {
							$gen_bg_css['background-image'] = $gradient_value . ';';
						}
						break;

					default:
						break;
				}
			} elseif ( '' !== $bg_color ) {
				$gen_bg_css['background-color'] = $bg_color . ';';
			}

			if ( '' !== $bg_img ) {
				if ( isset( $repeat ) ) {
					$gen_bg_css['background-repeat'] = esc_attr( $repeat );
				}

				if ( 'custom' !== $custom_position && isset( $position ) && isset( $position['x'] ) && isset( $position['y'] ) ) {
					$position_value                    = $position['x'] * 100 . '% ' . $position['y'] * 100 . '%';
					$gen_bg_css['background-position'] = $position_value;
				} elseif ( 'custom' === $custom_position && isset( $x_position ) && isset( $y_position ) && isset( $x_position_type ) && isset( $y_position_type ) ) {
					$position_value                    = $x_position . $x_position_type . ' ' . $y_position . $y_position_type;
					$gen_bg_css['background-position'] = $position_value;
				}

				if ( isset( $size ) ) {
					$gen_bg_css['background-size'] = esc_attr( $size );
				}

				if ( isset( $attachment ) ) {
					$gen_bg_css['background-attachment'] = esc_attr( $attachment );
				}
			}

			return $gen_bg_css;
		}
		/**
		 * Border attribute generation Function.
		 *
		 * @since 2.0.0
		 * @param  array $prefix   Attribute Prefix.
		 * @param array $default_args  default attributes args.
		 * @return array
		 */
		public static function uag_generate_php_border_attribute( $prefix, $default_args = array() ) {

			$border_attr = array();

			$device = array( '', 'Tablet', 'Mobile' );

			foreach ( $device as $slug => $data ) {

				$border_attr[ "{$prefix}BorderTopWidth{$data}" ]          = array(
					'type' => 'number',
				);
				$border_attr[ "{$prefix}BorderLeftWidth{$data}" ]         = array(
					'type' => 'number',
				);
				$border_attr[ "{$prefix}BorderRightWidth{$data}" ]        = array(
					'type' => 'number',
				);
				$border_attr[ "{$prefix}BorderBottomWidth{$data}" ]       = array(
					'type' => 'number',
				);
				$border_attr[ "{$prefix}BorderTopLeftRadius{$data}" ]     = array(
					'type' => 'number',
				);
				$border_attr[ "{$prefix}BorderTopRightRadius{$data}" ]    = array(
					'type' => 'number',
				);
				$border_attr[ "{$prefix}BorderBottomLeftRadius{$data}" ]  = array(
					'type' => 'number',
				);
				$border_attr[ "{$prefix}BorderBottomRightRadius{$data}" ] = array(
					'type' => 'number',
				);
				$border_attr[ "{$prefix}BorderRadiusUnit{$data}" ]        = array(
					'type' => 'number',
				);
			}

			$border_attr[ "{$prefix}BorderStyle" ]      = array(
				'type' => 'string',
			);
			$border_attr[ "{$prefix}BorderColor" ]      = array(
				'type' => 'string',
			);
			$border_attr[ "{$prefix}BorderHColor" ]     = array(
				'type' => 'string',
			);
			$border_attr[ "{$prefix}BorderLink" ]       = array(
				'type'    => 'boolean',
				'default' => true,
			);
			$border_attr[ "{$prefix}BorderRadiusLink" ] = array(
				'type'    => 'boolean',
				'default' => true,
			);

			return $border_attr;
		}
		/**
		 * Border attribute generation Function.
		 *
		 * @since 2.0.0
		 * @param  array $prefix   Attribute Prefix.
		 * @param array $default_args  default attributes args.
		 * @return array
		 */
		public static function uag_generate_border_attribute( $prefix, $default_args = array() ) {
			$defaults = wp_parse_args(
				$default_args,
				array(
					// Width.
					'borderTopWidth'                => '',
					'borderRightWidth'              => '',
					'borderBottomWidth'             => '',
					'borderLeftWidth'               => '',
					'borderTopWidthTablet'          => '',
					'borderRightWidthTablet'        => '',
					'borderBottomWidthTablet'       => '',
					'borderLeftWidthTablet'         => '',
					'borderTopWidthMobile'          => '',
					'borderRightWidthMobile'        => '',
					'borderBottomWidthMobile'       => '',
					'borderLeftWidthMobile'         => '',
					// Radius.
					'borderTopLeftRadius'           => '',
					'borderTopRightRadius'          => '',
					'borderBottomRightRadius'       => '',
					'borderBottomLeftRadius'        => '',
					'borderTopLeftRadiusTablet'     => '',
					'borderTopRightRadiusTablet'    => '',
					'borderBottomRightRadiusTablet' => '',
					'borderBottomLeftRadiusTablet'  => '',
					'borderTopLeftRadiusMobile'     => '',
					'borderTopRightRadiusMobile'    => '',
					'borderBottomRightRadiusMobile' => '',
					'borderBottomLeftRadiusMobile'  => '',
					// unit.
					'borderRadiusUnit'              => 'px',
					'borderRadiusUnitTablet'        => 'px',
					'borderRadiusUnitMobile'        => 'px',
					// common.
					'borderStyle'                   => 'none',
					'borderColor'                   => '',
					'borderHColor'                  => '',
				)
			);

			$border_attr = array();

			$device = array( '', 'Tablet', 'Mobile' );

			foreach ( $device as $slug => $data ) {

				$border_attr[ "{$prefix}BorderTopWidth{$data}" ]          = $defaults[ "borderTopWidth{$data}" ];
				$border_attr[ "{$prefix}BorderLeftWidth{$data}" ]         = $defaults[ "borderLeftWidth{$data}" ];
				$border_attr[ "{$prefix}BorderRightWidth{$data}" ]        = $defaults[ "borderRightWidth{$data}" ];
				$border_attr[ "{$prefix}BorderBottomWidth{$data}" ]       = $defaults[ "borderBottomWidth{$data}" ];
				$border_attr[ "{$prefix}BorderTopLeftRadius{$data}" ]     = $defaults[ "borderTopLeftRadius{$data}" ];
				$border_attr[ "{$prefix}BorderTopRightRadius{$data}" ]    = $defaults[ "borderTopRightRadius{$data}" ];
				$border_attr[ "{$prefix}BorderBottomLeftRadius{$data}" ]  = $defaults[ "borderBottomLeftRadius{$data}" ];
				$border_attr[ "{$prefix}BorderBottomRightRadius{$data}" ] = $defaults[ "borderBottomLeftRadius{$data}" ];
				$border_attr[ "{$prefix}BorderRadiusUnit{$data}" ]        = $defaults[ "borderRadiusUnit{$data}" ];
			}

			$border_attr[ "{$prefix}BorderStyle" ]  = $defaults['borderStyle'];
			$border_attr[ "{$prefix}BorderColor" ]  = $defaults['borderColor'];
			$border_attr[ "{$prefix}BorderHColor" ] = $defaults['borderHColor'];
			return $border_attr;
		}

		/**
		 * Border CSS generation Function.
		 *
		 * @since 2.0.0
		 * @param  array  $attr   Attribute List.
		 * @param  string $prefix Attribuate prefix .
		 * @param  string $device Responsive.
		 * @return array         border css array.
		 */
		public static function uag_generate_border_css( $attr, $prefix, $device = 'desktop' ) {
			$gen_border_css = array();
			if ( 'tablet' === $device ) {
				if ( 'none' !== $attr[ $prefix . 'BorderStyle' ] ) {
					$gen_border_css['border-top-width']    = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderTopWidthTablet' ], 'px' );
					$gen_border_css['border-left-width']   = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderLeftWidthTablet' ], 'px' );
					$gen_border_css['border-right-width']  = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderRightWidthTablet' ], 'px' );
					$gen_border_css['border-bottom-width'] = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderBottomWidthTablet' ], 'px' );
				}
				$gen_border_unit_tablet                       = isset( $attr[ $prefix . 'BorderRadiusUnitTablet' ] ) ? $attr[ $prefix . 'BorderRadiusUnitTablet' ] : 'px';
				$gen_border_css['border-top-left-radius']     = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderTopLeftRadiusTablet' ], $gen_border_unit_tablet );
				$gen_border_css['border-top-right-radius']    = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderTopRightRadiusTablet' ], $gen_border_unit_tablet );
				$gen_border_css['border-bottom-left-radius']  = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderBottomLeftRadiusTablet' ], $gen_border_unit_tablet );
				$gen_border_css['border-bottom-right-radius'] = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderBottomRightRadiusTablet' ], $gen_border_unit_tablet );
			} elseif ( 'mobile' === $device ) {
				if ( 'none' !== $attr[ $prefix . 'BorderStyle' ] ) {
					$gen_border_css['border-top-width']    = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderTopWidthMobile' ], 'px' );
					$gen_border_css['border-left-width']   = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderLeftWidthMobile' ], 'px' );
					$gen_border_css['border-right-width']  = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderRightWidthMobile' ], 'px' );
					$gen_border_css['border-bottom-width'] = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderBottomWidthMobile' ], 'px' );
				}
				$gen_border_unit_mobile                       = isset( $attr[ $prefix . 'borderRadiusUnitMobile' ] ) ? $attr[ $prefix . 'borderRadiusUnitMobile' ] : 'px';
				$gen_border_css['border-top-left-radius']     = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderTopLeftRadiusMobile' ], $gen_border_unit_mobile );
				$gen_border_css['border-top-right-radius']    = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderTopRightRadiusMobile' ], $gen_border_unit_mobile );
				$gen_border_css['border-bottom-left-radius']  = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderBottomLeftRadiusMobile' ], $gen_border_unit_mobile );
				$gen_border_css['border-bottom-right-radius'] = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderBottomRightRadiusMobile' ], $gen_border_unit_mobile );
			} else {
				if ( 'none' !== $attr[ $prefix . 'BorderStyle' ] ) {
					$gen_border_css['border-top-width']    = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderTopWidth' ], 'px' );
					$gen_border_css['border-left-width']   = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderLeftWidth' ], 'px' );
					$gen_border_css['border-right-width']  = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderRightWidth' ], 'px' );
					$gen_border_css['border-bottom-width'] = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderBottomWidth' ], 'px' );
				}
				$gen_border_unit                              = isset( $attr[ $prefix . 'BorderRadiusUnit' ] ) ? $attr[ $prefix . 'BorderRadiusUnit' ] : 'px';
				$gen_border_css['border-top-left-radius']     = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderTopLeftRadius' ], $gen_border_unit );
				$gen_border_css['border-top-right-radius']    = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderTopRightRadius' ], $gen_border_unit );
				$gen_border_css['border-bottom-left-radius']  = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderBottomLeftRadius' ], $gen_border_unit );
				$gen_border_css['border-bottom-right-radius'] = UAGB_Helper::get_css_value( $attr[ $prefix . 'BorderBottomRightRadius' ], $gen_border_unit );
			}
			$borderStyle                    = $attr[ $prefix . 'BorderStyle' ];
			$borderColor                    = $attr[ $prefix . 'BorderColor' ];
			$gen_border_css['border-style'] = $borderStyle;
			$gen_border_css['border-color'] = $borderColor;
			return $gen_border_css;
		}

		/**
		 * Deprecated Border CSS generation Function.
		 *
		 * @since 2.0.0
		 * @param  array  $current_css   Current style list.
		 * @param  string $border_width   Border Width.
		 * @param  string $border_radius Border Radius.
		 * @param  string $border_color Border Color.
		 * @param string $border_style Border Style.
		 */
		public static function uag_generate_deprecated_border_css( $current_css, $border_width, $border_radius, $border_color = '', $border_style = '' ) {
			$gen_border_css = array();
			if ( is_numeric( $border_width ) ) {
				$gen_border_css['border-top-width']    = UAGB_Helper::get_css_value( $border_width, 'px' );
				$gen_border_css['border-left-width']   = UAGB_Helper::get_css_value( $border_width, 'px' );
				$gen_border_css['border-right-width']  = UAGB_Helper::get_css_value( $border_width, 'px' );
				$gen_border_css['border-bottom-width'] = UAGB_Helper::get_css_value( $border_width, 'px' );
			}

			if ( is_numeric( $border_radius ) ) {
				$gen_border_css['border-top-left-radius']     = UAGB_Helper::get_css_value( $border_radius, 'px' );
				$gen_border_css['border-top-right-radius']    = UAGB_Helper::get_css_value( $border_radius, 'px' );
				$gen_border_css['border-bottom-left-radius']  = UAGB_Helper::get_css_value( $border_radius, 'px' );
				$gen_border_css['border-bottom-right-radius'] = UAGB_Helper::get_css_value( $border_radius, 'px' );
			}

			if ( $border_color ) {
				$gen_border_css['border-color'] = $border_color;
			}

			if ( $border_style ) {
				$gen_border_css['border-style'] = $border_style;
			}
			return wp_parse_args( $current_css, $gen_border_css );
		}

		/**
		 * For flex-direction: row-reverse, justify-content work opposite.
		 *
		 * @since 2.0.0
		 * @param string $text_align Alignment value from text-align property.
		 */
		public static function flex_alignment_when_direction_is_row_reverse( $text_align ) {

			switch ( $text_align ) {

				case 'flex-end':
					return 'flex-start';
				case 'center':
					return 'center';
				case 'space-between':
					return 'space-between';
				default:
					return 'flex-end';
			}

		}

		/**
		 * Get a Block's Default Attributes.
		 *
		 * @param string $block_name  Name of the block to retrieve defaults.
		 * @return array              All default attributes for the specified block.
		 */
		private static function get_block_default_attributes( $block_name ) {
			return require UAGB_DIR . 'includes/blocks/' . $block_name . '/attributes.php';
		}

		/**
		 * Return the Current Attribute or the Default Attribute.
		 *
		 * @param array  $current_value  The current variable / attribute that is altered by settings.
		 * @param string $key           The key of the default attribute for that setting.
		 * @param string $block_name     The name of the block.
		 */
		public static function get_attribute_fallback( $current_value, $key, $block_name ) {
			$default = self::get_block_default_attributes( $block_name );
			return isset( $current_value ) ? $current_value : $default[ $key ];
		}

		/**
		 * Return the Current Attribute or the Default Attribute for Numeric Data.
		 *
		 * @param array  $current_value  The current variable / attribute that is altered by settings.
		 * @param string $key           The key of the default attribute for that setting.
		 * @param string $block_name     The name of the block.
		 */
		public static function get_fallback_number( $current_value, $key, $block_name ) {
			$default = self::get_block_default_attributes( $block_name );
			return is_numeric( $current_value ) ? $current_value : $default[ $key ];
		}
	}
}
