/**
 * BLOCK: Table of Contents
 */

import styling from './styling';
import jQuery from 'jquery';
import React, { lazy, useEffect, Suspense } from 'react';
import lazyLoader from '@Controls/lazy-loader';
import { useDeviceType } from '@Controls/getPreviewType';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import { migrateBorderAttributes } from '@Controls/generateAttributes';

const Settings = lazy( () =>
	import(
		/* webpackChunkName: "chunks/table-of-contents/settings" */ './settings'
	)
);
const Render = lazy( () =>
	import(
		/* webpackChunkName: "chunks/table-of-contents/render" */ './render'
	)
);

import { withSelect } from '@wordpress/data';
import { compose } from '@wordpress/compose';

const UAGBTableOfContentsEdit = ( props ) => {

	const deviceType = useDeviceType();

	useEffect( () => {
		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( { classMigrate: true } );

		const scroll_element = jQuery( '.uagb-toc__scroll-top' );

		// Pushing Scroll To Top div
		const scrollToTopSvg =
			'<svg xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" width="26px" height="16.043px" viewBox="57 35.171 26 16.043" enable-background="new 57 35.171 26 16.043" xml:space="preserve"><path d="M57.5,38.193l12.5,12.5l12.5-12.5l-2.5-2.5l-10,10l-10-10L57.5,38.193z"/></svg>';

		if ( 0 === scroll_element.length ) {
			jQuery( 'body' ).append(
				'<div class="uagb-toc__scroll-top"> ' +
					scrollToTopSvg +
					'</div>'
			);
		}

		// Pushing Style tag for this block css.
		if ( props.attributes.heading && '' !== props.attributes.heading ) {
			props.setAttributes( { headingTitle: props.attributes.heading } );
		}

		const { attributes, setAttributes } = props;
		const {
			vPaddingDesktop,
			vPaddingTablet,
			vPaddingMobile,
			hPaddingDesktop,
			hPaddingTablet,
			hPaddingMobile,
			vMarginDesktop,
			vMarginTablet,
			vMarginMobile,
			hMarginDesktop,
			hMarginTablet,
			hMarginMobile,
			topMargin,
			rightMargin,
			bottomMargin,
			leftMargin,
			topMarginTablet,
			rightMarginTablet,
			bottomMarginTablet,
			leftMarginTablet,
			topMarginMobile,
			rightMarginMobile,
			bottomMarginMobile,
			leftMarginMobile,
			topPadding,
			rightPadding,
			bottomPadding,
			leftPadding,
			topPaddingTablet,
			rightPaddingTablet,
			bottomPaddingTablet,
			leftPaddingTablet,
			topPaddingMobile,
			rightPaddingMobile,
			bottomPaddingMobile,
			leftPaddingMobile,
		} = attributes;

		//Padding
		if ( vPaddingDesktop ) {
			if ( undefined === topPadding ) {
				setAttributes( { topPadding: vPaddingDesktop } );
			}
			if ( undefined === bottomPadding ) {
				setAttributes( { bottomPadding: vPaddingDesktop } );
			}
		}

		if ( hPaddingDesktop ) {
			if ( undefined === rightPadding ) {
				setAttributes( { rightPadding: hPaddingDesktop } );
			}
			if ( undefined === leftPadding ) {
				setAttributes( { leftPadding: hPaddingDesktop } );
			}
		}

		if ( vPaddingMobile ) {
			if ( undefined === topPaddingMobile ) {
				setAttributes( { topPaddingMobile: vPaddingMobile } );
			}
			if ( undefined === bottomPaddingMobile ) {
				setAttributes( { bottomPaddingMobile: vPaddingMobile } );
			}
		}
		if ( hPaddingMobile ) {
			if ( undefined === rightPaddingMobile ) {
				setAttributes( { rightPaddingMobile: hPaddingMobile } );
			}
			if ( undefined === leftPaddingMobile ) {
				setAttributes( { leftPaddingMobile: hPaddingMobile } );
			}
		}

		if ( vPaddingTablet ) {
			if ( undefined === topPaddingTablet ) {
				setAttributes( { topPaddingTablet: vPaddingTablet } );
			}
			if ( undefined === bottomPaddingTablet ) {
				setAttributes( { bottomPaddingTablet: vPaddingTablet } );
			}
		}
		if ( hPaddingTablet ) {
			if ( undefined === rightPaddingTablet ) {
				setAttributes( { rightPaddingTablet: hPaddingTablet } );
			}
			if ( undefined === leftPaddingTablet ) {
				setAttributes( { leftPaddingTablet: hPaddingTablet } );
			}
		}

		//Margin
		if ( vMarginDesktop ) {
			if ( ! topMargin ) {
				setAttributes( { topMargin: vMarginDesktop } );
			}
			if ( ! bottomMargin ) {
				setAttributes( { bottomMargin: vMarginDesktop } );
			}
		}
		if ( hMarginDesktop ) {
			if ( ! rightMargin ) {
				setAttributes( { rightMargin: hMarginDesktop } );
			}
			if ( ! leftMargin ) {
				setAttributes( { leftMargin: hMarginDesktop } );
			}
		}

		if ( vMarginMobile ) {
			if ( ! topMarginMobile ) {
				setAttributes( { topMarginMobile: vMarginMobile } );
			}
			if ( ! bottomMarginMobile ) {
				setAttributes( { bottomMarginMobile: vMarginMobile } );
			}
		}
		if ( hMarginMobile ) {
			if ( ! rightMarginMobile ) {
				setAttributes( { rightMarginMobile: hMarginMobile } );
			}
			if ( ! leftMarginMobile ) {
				setAttributes( { leftMarginMobile: hMarginMobile } );
			}
		}

		if ( vMarginTablet ) {
			if ( ! topMarginTablet ) {
				setAttributes( { topMarginTablet: vMarginTablet } );
			}
			if ( ! bottomMarginTablet ) {
				setAttributes( { bottomMarginTablet: vMarginTablet } );
			}
		}
		if ( hMarginTablet ) {
			if ( ! rightMarginTablet ) {
				setAttributes( { rightMarginTablet: hMarginTablet } );
			}
			if ( ! leftMarginTablet ) {
				setAttributes( { leftMarginTablet: hMarginTablet } );
			}
		}
		const {borderStyle,borderWidth,borderRadius,borderColor,borderHColor} = props.attributes;
		// Backward Border Migration
		if( borderWidth || borderRadius || borderColor || borderHColor || borderStyle ){
			const migrationAttributes = migrateBorderAttributes( 'overall', {
				label: 'borderWidth',
				value: borderWidth,
			}, {
				label: 'borderRadius',
				value: borderRadius
			}, {
				label: 'borderColor',
				value: borderColor
			}, {
				label: 'borderHColor',
				value: borderHColor
			},{
				label: 'borderStyle',
				value: borderStyle
			}
			);
			props.setAttributes( migrationAttributes )
		}
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-toc-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ props ] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		const blockStyling = styling( props );

		addBlockEditorDynamicStyles( 'uagb-style-toc-' + props.clientId.substr( 0, 8 ), blockStyling );

	}, [ deviceType ] );

	const { scrollToTop } = props.attributes;

	const scrollElement = jQuery( '.uagb-toc__scroll-top' );
	if ( null !== scrollElement && 'undefined' !== scrollElement ) {
		if ( scrollToTop ) {
			scrollElement.addClass( 'uagb-toc__show-scroll' );
		} else {
			scrollElement.removeClass( 'uagb-toc__show-scroll' );
		}
	}

	return (
		<Suspense fallback={ lazyLoader() }>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
		</Suspense>
	);
};

export default compose(
	withSelect( () => {

		const parseTocSlug = ( slug ) => {
			// If not have the element then return false!
			if ( ! slug ) {
				return slug;
			}

			const parsedSlug = slug
				.toString()
				.toLowerCase()
				.replace( /\…+/g, '' ) // Remove multiple …
				.replace( /&(amp;)/g, '' ) // Remove &
				.replace( /&(mdash;)/g, '' ) // Remove long dash
				.replace( /\u2013|\u2014/g, '' ) // Remove long dash
				.replace( /[&]nbsp[;]/gi, '-' ) // Replace inseccable spaces
				.replace( /\s+/g, '-' ) // Replace spaces with -
				.replace( /[&\/\\#,^!+()$~%.\[\]'":*?<>{}@‘’”“|]/g, '' ) // Remove special chars
				.replace( /\-\-+/g, '-' ) // Replace multiple - with single -
				.replace( /^-+/, '' ) // Trim - from start of text
				.replace( /-+$/, '' ); // Trim - from end of text

			return decodeURI( encodeURIComponent( parsedSlug ) );
		};

		let level = 0;

		let headerArray = [];
		const iframeEl = jQuery( `iframe[name='editor-canvas']` );
		let locateRootContainerInsideIframe;
		if( iframeEl.contents().length > 0 ){
			locateRootContainerInsideIframe = iframeEl.contents().find( 'div.is-root-container' );
			headerArray = locateRootContainerInsideIframe.find( 'h1, h2, h3, h4, h5, h6' );
		} else {
			headerArray = jQuery( 'div.is-root-container' ).find( 'h1, h2, h3, h4, h5, h6' );
		}

		const headers = [];
		if ( headerArray !== 'undefined' ) {
			headerArray.each( function ( index, value ) {
				const header = jQuery( this );
				let excludeHeading;

				if ( value.className.includes( 'uagb-toc-hide-heading' ) ) {
					excludeHeading = true;
				} else if (
					0 < header.parents( '.uagb-toc-hide-heading' ).length
				) {
					excludeHeading = true;
				} else {
					excludeHeading = false;
				}

				const headerText = parseTocSlug( header.text() );
				const openLevel = header[ 0 ].nodeName.replace( /^H+/, '' );
				const titleText = header.text();

				level = parseInt( openLevel );

				if ( ! excludeHeading ) {
					headers.push( {
						tag: level,
						text: titleText,
						link: headerText,
						content: header.text(),
					} );
				}
			} );
		}

		if ( headers !== undefined ) {
			headers.forEach( function ( heading, index ) {
				heading.level = 0;

				for ( let i = index - 1; i >= 0; i-- ) {
					const currentOrderedItem = headers[ i ];

					if ( currentOrderedItem.tag <= heading.tag ) {
						heading.level = currentOrderedItem.level;

						if ( currentOrderedItem.tag < heading.tag ) {
							heading.level++;
						}
						break;
					}
				}
			} );
		}

		return {
			headers,
		};
	} )
)( UAGBTableOfContentsEdit );
