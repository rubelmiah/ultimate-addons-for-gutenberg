/**
 * BLOCK: FAQ
 */

import classnames from 'classnames';
import { InnerBlocks } from '@wordpress/block-editor';
import React, { useLayoutEffect, useMemo } from 'react';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';
const ALLOWED_BLOCKS = [ 'uagb/faq-child' ];

const faq = [];
const faqCount = 2;

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;
	const deviceType = useDeviceType();
	const { attributes } = props;
	const { isPreview, equalHeight } = attributes;

	const getFaqChildTemplate = useMemo( () => {
		const childFaq = [];

		for ( let i = 0; i < faqCount; i++ ) {
			childFaq.push( [ 'uagb/faq-child', faq[ i ] ] );
		}

		return childFaq;
	}, [ faqCount, faq ] );

	const equalHeightClass = equalHeight ? 'uagb-faq-equal-height' : '';
	const previewImageData = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzUwcHgiIGhlaWdodD0iMzUwcHgiIHZpZXdCb3g9IjAgMCAzNTAgMzUwIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzNTAgMzUwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxwYXRoIGZpbGw9IiNGMUYxRjIiIGQ9Ik0zMTguNDMsMTg5LjE4N2MwLDQuMTQ0LTMuMzYsNy41MDUtNy41MDYsNy41MDVIMzkuMDc2Yy00LjE0NSwwLTcuNTA1LTMuMzYxLTcuNTA1LTcuNTA1Vjk2LjY4Mw0KCQljMC00LjE0NiwzLjM2LTcuNTA2LDcuNTA1LTcuNTA2aDI3MS44NDhjNC4xNDYsMCw3LjUwNiwzLjM2LDcuNTA2LDcuNTA2VjE4OS4xODd6Ii8+DQoJPGc+DQoJCTxnPg0KCQkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTE4Ni45MjYsMTIwLjI1NmMwLDQuMDgtMy4zMDgsNy4zODktNy4zOTIsNy4zODlINjIuNzVjLTQuMDgzLDAtNy4zOTEtMy4zMDktNy4zOTEtNy4zODlsMCwwDQoJCQkJYzAtNC4wODMsMy4zMDgtNy4zOTIsNy4zOTEtNy4zOTJoMTE2Ljc4NEMxODMuNjE4LDExMi44NjUsMTg2LjkyNiwxMTYuMTczLDE4Ni45MjYsMTIwLjI1NkwxODYuOTI2LDEyMC4yNTZ6Ii8+DQoJCQk8Zz4NCgkJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjg0LjY5MiwxNTEuMTE5YzAsMi4zOTktMS45NDQsNC4zNDctNC4zNDQsNC4zNDdINTkuNzA1Yy0yLjM5OSwwLTQuMzQ1LTEuOTQ3LTQuMzQ1LTQuMzQ3di0wLjU0Mg0KCQkJCQljMC0yLjM5OSwxLjk0Ni00LjM0Myw0LjM0NS00LjM0M2gyMjAuNjQ0YzIuMzk5LDAsNC4zNDQsMS45NDMsNC4zNDQsNC4zNDNWMTUxLjExOXoiLz4NCgkJCQk8cGF0aCBmaWxsPSIjREJEQ0RFIiBkPSJNMjQxLjIxMywxNjguNjU3YzAsMi4zOTktMS45NDUsNC4zNDctNC4zNDQsNC4zNDdINTkuNzA0Yy0yLjM5OSwwLTQuMzQ0LTEuOTQ3LTQuMzQ0LTQuMzQ3di0wLjU0Mg0KCQkJCQljMC0yLjQwMSwxLjk0NS00LjM0NCw0LjM0NC00LjM0NGgxNzcuMTY1YzIuMzk4LDAsNC4zNDQsMS45NDMsNC4zNDQsNC4zNDRWMTY4LjY1N3oiLz4NCgkJCTwvZz4NCgkJPC9nPg0KCQkNCgkJCTxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0RCRENERSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHgxPSIyODUuNDg3IiB5MT0iMTE2LjY1MyIgeDI9IjI5NC42NCIgeTI9IjExNi42NTMiLz4NCgk8L2c+DQoJPHBhdGggZmlsbD0iI0YxRjFGMiIgZD0iTTMxOC40MywyNTMuMzE4YzAsNC4xNDQtMy4zNiw3LjUwNS03LjUwNiw3LjUwNUgzOS4wNzZjLTQuMTQ1LDAtNy41MDUtMy4zNjEtNy41MDUtNy41MDV2LTMzLjQNCgkJYzAtNC4xNDUsMy4zNi03LjUwNiw3LjUwNS03LjUwNmgyNzEuODQ4YzQuMTQ2LDAsNy41MDYsMy4zNjEsNy41MDYsNy41MDZWMjUzLjMxOHoiLz4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0RCRENERSIgZD0iTTE4Ni45MjYsMjM2LjYxOWMwLDQuMDc5LTMuMzA4LDcuMzktNy4zOTIsNy4zOUg2Mi43NWMtNC4wODMsMC03LjM5MS0zLjMxMS03LjM5MS03LjM5bDAsMA0KCQkJYzAtNC4wODMsMy4zMDgtNy4zOTIsNy4zOTEtNy4zOTJoMTE2Ljc4NEMxODMuNjE4LDIyOS4yMjgsMTg2LjkyNiwyMzIuNTM2LDE4Ni45MjYsMjM2LjYxOUwxODYuOTI2LDIzNi42MTl6Ii8+DQoJCTxnPg0KCQkJDQoJCQkJPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjREJEQ0RFIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjI4NS40ODciIHkxPSIyMzYuNjE4IiB4Mj0iMjk0LjY0IiB5Mj0iMjM2LjYxOCIvPg0KCQkJDQoJCQkJPGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjREJEQ0RFIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgeDE9IjI5MC4wNjMiIHkxPSIyMzIuMDQxIiB4Mj0iMjkwLjA2MyIgeTI9IjI0MS4xOTQiLz4NCgkJPC9nPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K';

	return (
		isPreview ? <img width='100%' src={previewImageData}/> :
		<div
			className={ classnames(
				'uagb-faq__outer-wrap',
				`uagb-editor-preview-mode-${ deviceType.toLowerCase() }`,
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`,
				`uagb-faq-icon-${ props.attributes.iconAlign }`,
				`uagb-faq-layout-${ props.attributes.layout }`,
				`uagb-faq-expand-first-${ props.attributes.expandFirstItem }`,
				`uagb-faq-inactive-other-${ props.attributes.inactiveOtherItems }`,
				equalHeightClass
			) }
			data-faqtoggle={ props.attributes.enableToggle }
			role="tablist"
		>
			<InnerBlocks
				template={ getFaqChildTemplate }
				templateLock={ false }
				allowedBlocks={ ALLOWED_BLOCKS }
				__experimentalMoverDirection={ 'vertical' }
			/>
		</div>
	);
};

export default React.memo( Render );
