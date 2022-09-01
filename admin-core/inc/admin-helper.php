<?php
/**
 * Uag Admin Helper.
 *
 * @package Uag
 */

namespace UagAdmin\Inc;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Class Admin_Helper.
 */
class Admin_Helper {

	/**
	 * Common.
	 *
	 * @var object instance
	 */
	public static $common = null;

	/**
	 * Options.
	 *
	 * @var object instance
	 */
	public static $options = null;

	/**
	 * Get Common settings.
	 *
	 * @return array.
	 */
	public static function get_common_settings() {
		$uag_versions   = self::get_rollback_versions_options();
		$changelog_data = self::get_changelog_feed_data();
		$content_width  = \UAGB_Admin_Helper::get_global_content_width();

		$options = array(
			'rollback_to_previous_version'       => isset( $uag_versions[0]['value'] ) ? $uag_versions[0]['value'] : '',
			'enable_beta_updates'                => \UAGB_Admin_Helper::get_admin_settings_option( 'uagb_beta', 'no' ),
			'enable_legacy_blocks'               => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_legacy_blocks', ( 'yes' === get_option( 'uagb-old-user-less-than-2' ) ) ? 'yes' : 'no' ),
			'enable_file_generation'             => \UAGB_Admin_Helper::get_admin_settings_option( '_uagb_allow_file_generation', 'enabled' ),
			'blocks_activation_and_deactivation' => self::get_blocks(),
			'enable_templates_button'            => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_templates_button', 'yes' ),
			'enable_block_condition'             => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_block_condition', 'enabled' ),
			'enable_masonry_gallery'             => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_masonry_gallery', 'enabled' ),
			'enable_block_responsive'            => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_block_responsive', 'enabled' ),
			'select_font_globally'               => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_select_font_globally', array() ),
			'load_select_font_globally'          => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_load_select_font_globally', 'disabled' ),
			'load_gfonts_locally'                => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_load_gfonts_locally', 'disabled' ),
			'collapse_panels'                    => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_collapse_panels', 'enabled' ),
			'copy_paste'                         => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_copy_paste', 'enabled' ),
			'preload_local_fonts'                => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_preload_local_fonts', 'disabled' ),
			'enable_coming_soon_mode'            => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_enable_coming_soon_mode', 'disabled' ),
			'coming_soon_page'                   => self::get_coming_soon_page(),
			'uag_previous_versions'              => $uag_versions,
			'changelog_data'                     => $changelog_data,
			'content_width'                      => $content_width,
			'container_global_padding'           => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_container_global_padding', 'default' ),
			'container_global_elements_gap'      => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_container_global_elements_gap', 20 ),
			'recaptcha_site_key_v2'              => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_recaptcha_site_key_v2', '' ),
			'recaptcha_secret_key_v2'            => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_recaptcha_secret_key_v2', '' ),
			'recaptcha_site_key_v3'              => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_recaptcha_site_key_v3', '' ),
			'recaptcha_secret_key_v3'            => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_recaptcha_secret_key_v3', '' ),
			'blocks_editor_spacing'              => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_blocks_editor_spacing', 0 ),
			'load_font_awesome_5'                => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_load_font_awesome_5', ( 'yes' === get_option( 'uagb-old-user-less-than-2' ) ) ? 'enabled' : 'disabled' ),
			'auto_block_recovery'                => \UAGB_Admin_Helper::get_admin_settings_option( 'uag_auto_block_recovery', ( 'yes' === get_option( 'uagb-old-user-less-than-2' ) ) ? 'enabled' : 'disabled' ),
			'uagb_old_user_less_than_2'          => get_option( 'uagb-old-user-less-than-2' ),
		);

		return $options;
	}

	/**
	 * Get Coming Soon Page
	 *
	 * @since 2.0.0
	 * @return boolean|array
	 */
	public static function get_coming_soon_page() {
		$page_id = \UAGB_Admin_Helper::get_admin_settings_option( 'uag_coming_soon_page', '' );
		if ( $page_id ) {
			return array(
				'value' => $page_id,
				'label' => \get_the_title( $page_id ),
			);
		}
		return false;
	}

	/**
	 * Get Changelogs from API.
	 *
	 * @since 2.0.0
	 * @return array $changelog_data Changelog Data.
	 */
	public static function get_changelog_feed_data() {
		$posts          = json_decode( wp_remote_retrieve_body( wp_remote_get( 'https://wpspectra.com/wp-json/wp/v2/changelog?per_page=3' ) ) );
		$changelog_data = array();

		if ( isset( $posts ) && is_array( $posts ) ) {
			foreach ( $posts as $post ) {

				$changelog_data[] = array(
					'title'       => $post->title->rendered,
					'date'        => gmdate( 'l F j, Y', strtotime( $post->date ) ),
					'description' => $post->content->rendered,
					'link'        => $post->link,
				);
			}
		}

		return $changelog_data;
	}
	/**
	 * Get blocks.
	 */
	public static function get_blocks() {

		// Get all blocks.
		$list_blocks    = \UAGB_Helper::$block_list;
		$default_blocks = array();

		// Set all extension to enabled.
		foreach ( $list_blocks as $slug => $value ) {
			$_slug                    = str_replace( 'uagb/', '', $slug );
			$default_blocks[ $_slug ] = $_slug;
		}

		// Escape attrs.
		$default_blocks = array_map( 'esc_attr', $default_blocks );
		$saved_blocks   = \UAGB_Admin_Helper::get_admin_settings_option( '_uagb_blocks', array() );

		return wp_parse_args( $saved_blocks, $default_blocks );
	}

	/**
	 * Get options.
	 */
	public static function get_options() {

		$general_settings = self::get_common_settings();

		$options = $general_settings;

		$options = apply_filters( 'uag_global_data_options', $options );

		return $options;
	}

	/**
	 * Get Rollback versions.
	 *
	 * @since 1.23.0
	 * @return array
	 * @access public
	 */
	public static function get_rollback_versions_options() {

		$rollback_versions = \UAGB_Admin_Helper::get_instance()->get_rollback_versions();

		$rollback_versions_options = array();

		foreach ( $rollback_versions as $version ) {

			$version = array(
				'label' => $version,
				'value' => $version,

			);

			$rollback_versions_options[] = $version;
		}

		return $rollback_versions_options;
	}
	/**
	 * Sort Rollback versions.
	 *
	 * @param string $prev Previous Version.
	 * @param string $next Next Version.
	 *
	 * @since 1.23.0
	 * @return array
	 * @access public
	 */
	public static function sort_rollback_versions( $prev, $next ) {

		if ( version_compare( $prev, $next, '==' ) ) {
			return 0;
		}

		if ( version_compare( $prev, $next, '>' ) ) {
			return -1;
		}

		return 1;
	}
}
