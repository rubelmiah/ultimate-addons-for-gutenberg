/**
 * External dependencies
 */

import React, { useEffect,    } from 'react';

import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import { getFallbackNumber } from '@Controls/getAttributeFallback';

// Import css for timeline.
import contentTimelineStyle from '.././inline-styles';
import Settings from './settings';
import Render from './render';

import { withSelect } from '@wordpress/data';

const PostTimelineComponent = ( props ) => {
	const deviceType = useDeviceType();
	useEffect( () => {

		// Replacement for componentDidMount.
		//Store Client id.
		props.setAttributes( { block_id: props.clientId } );

		const {
			horizontalSpace,
			rightMargin,
			leftMargin,
			bgPadding,
			topPadding,
			rightPadding,
			bottomPadding,
			leftPadding,
			contentPadding,
			ctaBottomSpacing,
			headTopSpacing,
			timelinAlignment,
			stack,
			timelinAlignmentTablet,
			timelinAlignmentMobile
		} = props.attributes;

		if ( bgPadding ) {
			if ( ! topPadding ) {
				props.setAttributes( { topPadding: bgPadding } );
			}
			if ( ! bottomPadding ) {
				props.setAttributes( { bottomPadding: bgPadding } );
			}
			if ( ! rightPadding ) {
				props.setAttributes( { rightPadding: bgPadding } );
			}
			if ( ! leftPadding ) {
				props.setAttributes( { leftPadding: bgPadding } );
			}
		}

		if ( contentPadding ){
			if ( isNaN( ctaBottomSpacing ) ) {
				props.setAttributes( { ctaBottomSpacing: contentPadding } );
			}

			if ( isNaN( headTopSpacing ) ) {
				props.setAttributes( { headTopSpacing: contentPadding } );
			}
		}
		if ( horizontalSpace ) {
			if ( ! rightMargin ) {
				props.setAttributes( { rightMargin: horizontalSpace } );
			}
			if ( ! leftMargin ) {
				props.setAttributes( { leftMargin: horizontalSpace } );
			}

		}

		if( timelinAlignment ) {
            if( 'none' === stack ) {
                if( undefined === timelinAlignmentTablet ) {
                    props.setAttributes( { timelinAlignmentTablet: timelinAlignment } );
                }
                if( undefined === timelinAlignmentMobile ) {
                    props.setAttributes( { timelinAlignmentMobile: timelinAlignment } );
                }
            } else {
                if( undefined === timelinAlignmentTablet && 'tablet' === stack ) {
                    props.setAttributes( { timelinAlignmentTablet: 'left' } );
                    props.setAttributes( { timelinAlignmentMobile: 'left' } );
                }

                if( undefined === timelinAlignmentMobile && 'mobile' === stack ) {
                    props.setAttributes( { timelinAlignmentMobile: 'left' } );
                    props.setAttributes( { timelinAlignmentTablet: timelinAlignment } );
                }
            }
        }

	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = contentTimelineStyle( props );

        addBlockEditorDynamicStyles( 'uagb-timeline-style-' + props.clientId, blockStyling );
		const loadPostTimelineEditor = new CustomEvent( 'UAGTimelineEditor', { // eslint-disable-line no-undef
			detail: {},
		} );
		document.dispatchEvent( loadPostTimelineEditor );
	}, [ props, deviceType ] );


	useEffect( () => {
		scrollBlockToView();
	}, [deviceType] );

	return (

					<>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
			</>

	);
};
export default withSelect( ( select, props ) => {
	const {
		categories,
		postsToShow,
		order,
		orderBy,
		postType,
		taxonomyType,
		excludeCurrentPost,
	} = props.attributes;

	const postsToShowFallback = getFallbackNumber( postsToShow, 'postsToShow', 'post-timeline' );
	const { getEntityRecords } = select( 'core' );

	const allTaxonomy = uagb_blocks_info.all_taxonomy;
	const currentTax = allTaxonomy[ postType ];

	let categoriesList = [];
	let restBase = '';

	if ( 'undefined' !== typeof currentTax ) {
		if ( 'undefined' !== typeof currentTax.taxonomy[ taxonomyType ] ) {
			restBase = ( currentTax.taxonomy[taxonomyType].rest_base === false || currentTax.taxonomy[taxonomyType].rest_base === null ) ? currentTax.taxonomy[taxonomyType].name : currentTax.taxonomy[taxonomyType].rest_base
		}

		if ( '' !== taxonomyType ) {
			if (
				'undefined' !== typeof currentTax.terms &&
				'undefined' !== typeof currentTax.terms[ taxonomyType ]
			) {
				categoriesList = currentTax.terms[ taxonomyType ];
			}
		}
	}

	const latestPostsQuery = {
		order,
		orderby: orderBy,
		per_page: postsToShowFallback,
	};

	if ( excludeCurrentPost ) {
		latestPostsQuery.exclude = select( 'core/editor' ).getCurrentPostId();
	}
	const category = [];
	const temp = parseInt( categories );
	category.push( temp );
	const catlenght = categoriesList.length;
	for ( let i = 0; i < catlenght; i++ ) {
		if ( categoriesList[ i ].id === temp ) {
			if ( categoriesList[ i ].child.length !== 0 ) {
				categoriesList[ i ].child.forEach( ( element ) => {
					category.push( element );
				} );
			}
		}
	}
	if ( undefined !== categories && '' !== categories ) {
		latestPostsQuery[ restBase ] =
			undefined === categories || '' === categories
				? categories
				: category;
	}
	return {
		latestPosts: getEntityRecords( 'postType', postType, latestPostsQuery ),
		categoriesList,
		taxonomyList:
			'undefined' !== typeof currentTax ? currentTax.taxonomy : [],
	};
} )( PostTimelineComponent );
