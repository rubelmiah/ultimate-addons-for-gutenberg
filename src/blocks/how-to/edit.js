/**
 * BLOCK: How-To Schema
 */

import SchemaNotices from './schema-notices';
import styling from './styling';
import './style.scss';
import { compose } from '@wordpress/compose';
import { withSelect } from '@wordpress/data';

import React from 'react';
import { useState, useEffect } from '@wordpress/element';
import addBlockEditorDynamicStyles from '@Controls/addBlockEditorDynamicStyles';
import scrollBlockToView from '@Controls/scrollBlockToView';
import { useDeviceType } from '@Controls/getPreviewType';
import Settings from './settings';
import Render from './render';

const HowToComponent = ( props ) => {
	const deviceType = useDeviceType();
	const [ prevState, setPrevState ] = useState( '' );

	useEffect( () => {
		// Replacement for componentDidMount.

		// Assigning block_id in the attribute.
		props.setAttributes( { block_id: props.clientId.substr( 0, 8 ) } );

		props.setAttributes( {
			schema: JSON.stringify( props.schemaJsonData ),
		} );

		setPrevState( props.schemaJsonData );
	}, [] );

	useEffect( () => {
		// Replacement for componentDidUpdate.
		if (
			JSON.stringify( props.schemaJsonData ) !==
			JSON.stringify( prevState )
		) {
			props.setAttributes( {
				schema: JSON.stringify( props.schemaJsonData ),
			} );

			setPrevState( props.schemaJsonData );
		}
		const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-how-to-schema-style-' + props.clientId.substr( 0, 8 ), blockStyling );
	}, [ props ] );


	useEffect( () => {
		// Replacement for componentDidUpdate.
	    const blockStyling = styling( props );

        addBlockEditorDynamicStyles( 'uagb-how-to-schema-style-' + props.clientId.substr( 0, 8 ), blockStyling );

		scrollBlockToView();
	}, [deviceType] );

	// Setup the attributes
	const {
		attributes: {
			currencyType,
			showEstcost,
			showTotaltime,
			tools,
			materials,
			timeNeeded,
			estCost,
			mainimage,
			headingTitle,
			headingDesc,
			time,
			cost,
			timeInMins,
			timeInHours,
			timeInDays,
			timeInMonths,
			timeInYears,
			isPreview,
		},
	} = props;
	const minsValue = timeInMins ? timeInMins : time;

	const previewImageData = `${ uagb_blocks_info.uagb_url }/admin/assets/preview-images/how-to.png`;

	return (
		<>
			{ isPreview ? <img width='100%' src={previewImageData} alt=''/> :
			<>
			<SchemaNotices
				headingTitle={ headingTitle }
				headingDesc={ headingDesc }
				mainimage={ mainimage }
				showTotaltime={ showTotaltime }
				timeNeeded={ timeNeeded }
				minsValue={ minsValue }
				timeInHours={ timeInHours }
				timeInDays={ timeInDays }
				timeInMonths={ timeInMonths }
				timeInYears={ timeInYears }
				showEstcost={ showEstcost }
				estCost={ estCost }
				cost={ cost }
				currencyType={ currencyType }
				tools={ tools }
				materials={ materials }
				clientId={ props.clientId }
			/>
			<Settings parentProps={ props } />
			<Render parentProps={ props } />
			</>
			}
		</>
	);
};

export default compose(
	withSelect( ( select, ownProps ) => {
		let urlChk = '';

		if (
			'undefined' !== ownProps.attributes.mainimage &&
			null !== ownProps.attributes.mainimage &&
			'' !== ownProps.attributes.mainimage
		) {
			urlChk = ownProps.attributes.mainimage.url;
		}
		let toolsData = {};
		let materialsData = {};
		let stepsData = {};
		const jsonData = {
			'@context': 'https://schema.org',
			'@type': 'HowTo',
			'name': ownProps.attributes.headingTitle,
			'description': ownProps.attributes.headingDesc,
			'image': {
				'@type': 'ImageObject',
				'url': urlChk,
				'height': '406',
				'width': '305',
			},
			'totalTime': '',
			'estimatedCost': [],
			'tool': [],
			'supply': [],
			'step': [],
		};

		const y = ownProps.attributes.timeInYears
			? ownProps.attributes.timeInYears
			: 0;
		const m = ownProps.attributes.timeInMonths
			? ownProps.attributes.timeInMonths
			: 0;
		const d = ownProps.attributes.timeInDays
			? ownProps.attributes.timeInDays
			: 0;
		const h = ownProps.attributes.timeInHours
			? ownProps.attributes.timeInHours
			: 0;

		const minutes = ownProps.attributes.timeInMins
			? ownProps.attributes.timeInMins
			: ownProps.attributes.time;

		if ( ownProps.attributes.showTotaltime ) {
			jsonData.totalTime =
				'P' + y + 'Y' + m + 'M' + d + 'DT' + h + 'H' + minutes + 'M';
		}

		if ( ownProps.attributes.showEstcost ) {
			jsonData.estimatedCost = {
				'@type': 'MonetaryAmount',
				'currency': ownProps.attributes.currencyType,
				'value': ownProps.attributes.cost,
			};
		}

		if ( ownProps.attributes.showTools ) {
			ownProps.attributes.tools.forEach( ( tools, key ) => {
				toolsData = {
					'@type': 'HowToTool',
					'name': tools.add_required_tools,
				};
				jsonData.tool[ key ] = toolsData;
			} );
		}

		if ( ownProps.attributes.showMaterials ) {
			ownProps.attributes.materials.forEach( ( materials, key ) => {
				materialsData = {
					'@type': 'HowToSupply',
					'name': materials.add_required_materials,
				};
				jsonData.supply[ key ] = materialsData;
			} );
		}

		const getChildBlocks = select( 'core/block-editor' ).getBlocks(
			ownProps.clientId
		);

		getChildBlocks.forEach( ( steps, key ) => {
			stepsData = {
					'@type': 'HowToStep',
					'url': steps.attributes?.ctaLink || steps.attributes?.url,
					'name': steps.attributes?.infoBoxTitle || steps.attributes?.name,
					'text': steps.attributes?.headingDesc || steps.attributes?.description,
					'image': steps.attributes?.iconImage?.url || steps.attributes?.image?.url
			}
			jsonData.step[key] = stepsData;
		} );

		return {
			schemaJsonData: jsonData,
		};
	} )
)( HowToComponent );
