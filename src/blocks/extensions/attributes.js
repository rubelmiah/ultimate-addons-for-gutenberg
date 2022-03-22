const { enableMasonryGallery } = uagb_blocks_info;

function addAttributes( settings ) {

	const excludeBlock = uagb_blocks_info.uagb_exclude_blocks_from_extension;

	if ( ! excludeBlock.includes( settings.name ) ) {

		if ( settings.attributes ) {
			settings.attributes = Object.assign( settings.attributes, {
				UAGUserRole: {
					type: 'string',
				},
				UAGBrowser: {
					type: 'string',
				},
				UAGSystem: {
					type: 'string',
				},
				UAGDisplayConditions: {
					type: 'string',
				},
				UAGHideDesktop: {
					type: 'boolean',
					default: false,
				},
				UAGHideMob: {
					type: 'boolean',
					default: false,
				},
				UAGHideTab: {
					type: 'boolean',
					default: false,
				},
				UAGLoggedIn: {
					type: 'boolean',
					default: false,
				},
				UAGLoggedOut: {
					type: 'boolean',
					default: false,
				},
				UAGResponsiveCondition: {
					type: 'boolean',
					default: true,
				},
			} );
		}
	}
	return settings;
}

wp.hooks.addFilter(
	'blocks.registerBlockType',
	'uagb/advanced-control-block',
	addAttributes
);

if ( 'enabled' === enableMasonryGallery || true === enableMasonryGallery ) {
	function addMasonryAttribute( settings ) {
		const blockType = [ 'core/gallery' ];
		if ( blockType.includes( settings.name ) ) {
			if ( settings.attributes ) {
				settings.attributes = Object.assign( settings.attributes, {
					masonry: {
						type: 'boolean',
						default: false,
					},
					masonryGutter: {
						type: 'number',
					},
					block_id: {
						type: 'string',
					},
				} );
			}
		}
		return settings;
	}

	wp.hooks.addFilter(
		'blocks.registerBlockType',
		'uagb/masonry-gallery',
		addMasonryAttribute
	);
}
