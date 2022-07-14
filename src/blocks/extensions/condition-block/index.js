import { ToggleControl, SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';
import classnames from 'classnames';
const { enableConditions, enableResponsiveConditions } = uagb_blocks_info;

const UserConditionOptions = ( props ) => {
	const { attributes, setAttributes } = props;
	const {
		UAGLoggedIn,
		UAGLoggedOut,
		UAGDisplayConditions,
		UAGSystem,
		UAGBrowser,
		UAGUserRole,
	} = attributes;

	return (
		<>
			<SelectControl
				label={ __( 'Display Conditions' ) }
				value={ UAGDisplayConditions }
				onChange={ ( value ) =>
					setAttributes( { UAGDisplayConditions: value } )
				}
				options={ [
					{ value: 'none', label: __( 'None' ) },
					{ value: 'userstate', label: __( 'User State' ) },
					{ value: 'userRole', label: __( 'User Role' ) },
					{ value: 'browser', label: __( 'Browser' ) },
					{ value: 'os', label: __( 'Operating System' ) },
				] }
			/>
			{ UAGDisplayConditions === 'userstate' && (
				<>
					<ToggleControl
						label={ __( 'Hide From Logged In Users' ) }
						checked={ UAGLoggedIn }
						onChange={ () =>
							setAttributes( {
								UAGLoggedIn: ! attributes.UAGLoggedIn,
							} )
						}
					/>
					<ToggleControl
						label={ __( 'Hide From Logged Out Users' ) }
						checked={ UAGLoggedOut }
						onChange={ () =>
							setAttributes( {
								UAGLoggedOut: ! attributes.UAGLoggedOut,
							} )
						}
					/>
				</>
			) }
			{ UAGDisplayConditions === 'os' && (
				<>
					<SelectControl
						label={ __( 'Hide on Operating System' ) }
						value={ UAGSystem }
						onChange={ ( value ) =>
							setAttributes( { UAGSystem: value } )
						}
						options={ [
							{ value: '', label: __( 'None' ) },
							{ value: 'iphone', label: __( 'IOS' ) },
							{ value: 'android', label: __( 'Android' ) },
							{ value: 'windows', label: __( 'Windows' ) },
							{ value: 'open_bsd', label: __( 'OpenBSD' ) },
							{ value: 'sun_os', label: __( 'SunOS' ) },
							{ value: 'linux', label: __( 'Linux' ) },
							{ value: 'mac_os', label: __( 'Mac OS' ) },
						] }
					/>
				</>
			) }
			{ UAGDisplayConditions === 'browser' && (
				<>
					<SelectControl
						label={ __( 'Hide on Browser' ) }
						value={ UAGBrowser }
						onChange={ ( value ) =>
							setAttributes( { UAGBrowser: value } )
						}
						options={ [
							{ value: '', label: __( 'None' ) },
							{ value: 'ie', label: __( 'Internet Explorer' ) },
							{
								value: 'firefox',
								label: __( 'Mozilla Firefox' ),
							},
							{ value: 'chrome', label: __( 'Google Chrome' ) },
							{ value: 'opera_mini', label: __( 'Opera Mini' ) },
							{ value: 'opera', label: __( 'Opera' ) },
							{ value: 'safari', label: __( 'Safari' ) },
							{ value: 'edge', label: __( 'Microsoft Edge' ) },
						] }
					/>
				</>
			) }
			{ UAGDisplayConditions === 'userRole' && (
				<>
					<SelectControl
						label={ __( 'Hide for User Role' ) }
						value={ UAGUserRole }
						onChange={ ( value ) =>
							setAttributes( { UAGUserRole: value } )
						}
						options={ uagb_blocks_info.user_role }
					/>
				</>
			) }
		</>
	);
};

const ResponsiveConditionOptions = ( props ) => {
	const { attributes, setAttributes } = props;
	const {
		UAGHideDesktop,
		UAGHideMob,
		UAGHideTab,
	} = attributes;

	return (
		<>
		<>
			<ToggleControl
				label={ __( 'Hide on Desktop' ) }
				checked={ UAGHideDesktop }
				onChange={ () =>
					setAttributes( {
						UAGHideDesktop: ! attributes.UAGHideDesktop,
					} )
				}
			/>
			<ToggleControl
				label={ __( 'Hide on Tablet' ) }
				checked={ UAGHideTab }
				onChange={ () =>
					setAttributes( {
						UAGHideTab: ! attributes.UAGHideTab,
					} )
				}
			/>
			<ToggleControl
				label={ __( 'Hide on Mobile' ) }
				checked={ UAGHideMob }
				onChange={ () =>
					setAttributes( {
						UAGHideMob: ! attributes.UAGHideMob,
					} )
				}
			/>
		</>
		</>
	);
};

function ApplyExtraClass( extraProps, blockType, attributes ) {
	const {
		UAGHideDesktop,
		UAGHideTab,
		UAGHideMob,
	} = attributes;

		if ( UAGHideDesktop ) {
			extraProps.className = classnames( extraProps.className, 'uag-hide-desktop' );
		}

		if ( UAGHideTab ) {
			extraProps.className = classnames( extraProps.className, 'uag-hide-tab' );
		}

		if ( UAGHideMob ) {
			extraProps.className = classnames( extraProps.className, 'uag-hide-mob' );
		}

	return extraProps;
}

	//For UAG Blocks.
	addFilter(
		'uag_advance_tab_content',
		'uagb/advanced-display-condition',
		function ( content, props ) {
			if ( ! props ) {
				return content;
			}

			const { isSelected, name } = props;

			const excludeBlocks = ['uagb/buttons-child','uagb/faq-child', 'uagb/icon-list-child', 'uagb/social-share-child', 'uagb/restaurant-menu-child'];

			if( isSelected && ! excludeBlocks.includes( name ) ) {
				return (
					<>
					{ 'enabled' === enableConditions &&
					<UAGAdvancedPanelBody
						title={ __(
							'Display Conditions',
							'ultimate-addons-for-gutenberg'
						) }
						initialOpen={ true }
						className="block-editor-block-inspector__advanced uagb-extention-tab"
					>
						{ UserConditionOptions( props ) }
						<p className="components-base-control__help">
							{ __(
								"Above setting will only take effect once you are on the live page, and not while you're editing.",
								'ultimate-addons-for-gutenberg'
							) }
						</p>
					</UAGAdvancedPanelBody>
					}
					{ 'enabled' === enableResponsiveConditions &&
						<UAGAdvancedPanelBody
							title={ __(
								'Responsive Conditions',
								'ultimate-addons-for-gutenberg'
							) }
							initialOpen={ false }
							className="block-editor-block-inspector__advanced uagb-extention-tab"
						>
						{ ResponsiveConditionOptions( props ) }
							<p className="components-base-control__help">
								{ __(
									"Above setting will only take effect once you are on the live page, and not while you're editing.",
									'ultimate-addons-for-gutenberg'
								) }
							</p>
						</UAGAdvancedPanelBody>
					}
					</>
				);
			}
		}
	);

	addFilter(
		'blocks.getSaveContent.extraProps',
		'uagb/apply-extra-class',
		ApplyExtraClass
	);

