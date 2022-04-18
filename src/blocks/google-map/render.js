import React, { useLayoutEffect } from 'react';
import classnames from 'classnames';
import { __ } from '@wordpress/i18n';
import styles from './editor.lazy.scss';
import { useDeviceType } from '@Controls/getPreviewType';

const Render = ( props ) => {
	// Add and remove the CSS on the drop and remove of the component.
	useLayoutEffect( () => {
		styles.use();
		return () => {
			styles.unuse();
		};
	}, [] );

	props = props.parentProps;

	const {
		className,
		attributes: { isPreview, height,
			theight,
			mheight,
			zoom,
			tzoom,
			mzoom, address, language },
	} = props;

	const deviceType = useDeviceType();
	let deviceHeight, deviceZoom;

	if( deviceType == 'desktop' ){
		deviceHeight = height;
		deviceZoom = zoom;
	} else if( deviceType == 'tablet' ){
		deviceHeight = theight;
		deviceZoom = tzoom;
	} else {
		deviceHeight = mheight;
		deviceZoom = mzoom;
	}
	const encoded_address = encodeURI( address );
	const lang_par = language ? language : 'en';

	const url = `https://www.google.com/maps/embed/v1/place?key=${ wp.uagb_google_api_key }&q=${ encoded_address }&zoom=${ deviceZoom }&language=${ lang_par }`;
	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/gmap.png`;
	return (
		isPreview  ? <img width='100%' src={previewImageData} alt=''/> :
		<div
			className={ classnames(
				className,
				'uagb-google-map__wrap',
				`uagb-block-${ props.clientId.substr( 0, 8 ) }`
			) }
		>
			<iframe
				className="uagb-google-map__iframe"
				title={
					__( 'Google Map for ', 'ultimate-addons-for-gutenberg' ) +
					address
				}
				src={ url }
				style={ {
					deviceHeight,
				} }
			></iframe>
		</div>
	);
};

export default React.memo( Render );
