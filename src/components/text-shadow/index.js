/**
 * Text-Shadow reusable component.
 *
 */
import { __ } from '@wordpress/i18n';
import Range from '@Components/range/Range.js';
import AdvancedPopColorControl from '../color-control/advanced-pop-color-control';
import { Button, Dashicon } from '@wordpress/components';
import { useState } from '@wordpress/element';
import React, { useLayoutEffect } from 'react';
import { select } from '@wordpress/data'
import getUAGEditorStateLocalStorage from '@Controls/getUAGEditorStateLocalStorage';

const TextShadowControl = ( props ) => {
	const [ showAdvancedControls, toggleAdvancedControls ] = useState( false );

	const {
		setAttributes,
		textShadowColor,
		textShadowHOffset,
		textShadowVOffset,
		textShadowBlur,
		label = __( 'Text Shadow', 'ultimate-addons-for-gutenberg' ),
		popup = false,
	} = props;

	let advancedControls;
	const activeClass = showAdvancedControls ? 'active' : '';

	useLayoutEffect( () => {
		window.addEventListener( 'click', function( e ){
			const typoDiv = document.querySelector( '.uagb-text-shadow-advanced' );
			const actionsDiv = document.querySelector( '.uag-text-shadow-button' );
			if ( typoDiv ) {
				if ( ! typoDiv?.contains( e.target ) && ! actionsDiv?.contains( e.target ) && ! e.target?.classList?.contains( 'uagb-advanced-color-indicate' ) && ! e.target?.parentElement?.closest( '.uagb-popover-color' ) ){
					toggleAdvancedControls( false )
				}
			}
		  } );
	}, [] );

	const overallControls = (
		<>
			{ /* Shadow Color */ }
			<AdvancedPopColorControl
				label={ textShadowColor.title }
				colorValue={ textShadowColor.value }
				data={ {
					value: textShadowColor.value,
					label: textShadowColor.label,
				} }
				setAttributes={ setAttributes }
			/>
			{ /* Horizontal */ }
			<Range
				label={ textShadowHOffset.title }
				value={ textShadowHOffset.value }
				max={ 100 }
				displayUnit={ false }
				setAttributes={setAttributes}
				data={ {
					value: textShadowHOffset.value,
					label: textShadowHOffset.label,
				} }
			/>
			{ /* Vertical */ }
			<Range
				label={ textShadowVOffset.title }
				value={ textShadowVOffset.value }
				max={ 100 }
				displayUnit={ false }
				setAttributes={setAttributes}
				data={ {
					value: textShadowVOffset.value,
					label: textShadowVOffset.label,
				} }
			/>
			{ /* Blur */ }
			<Range
				label={ textShadowBlur.title }
				value={ textShadowBlur.value }
				min={ 0 }
				max={ 100 }
				displayUnit={ false }
				setAttributes={setAttributes}
				data={ {
					value: textShadowBlur.value,
					label: textShadowBlur.label,
				} }
			/>
		</>
	);

	if ( showAdvancedControls ) {
		advancedControls = (
			<div className="uagb-text-shadow-advanced spectra-control-popup">
				{ overallControls }
			</div>
		);
	}

	const textShadowAdvancedControls = (
		<div className="spectra-control-popup__options--action-wrapper">
			<span className="uag-control-label">
				{ label }
			</span>
			<Button
				className={ 'uag-text-shadow-button spectra-control-popup__options--action-button' }
				aria-pressed={ showAdvancedControls }
				onClick={ () => {
						toggleAdvancedControls( ! showAdvancedControls )
						if ( ! showAdvancedControls ) {
							const { getSelectedBlock } = select( 'core/block-editor' );
							const blockName = getSelectedBlock()?.name;
							const uagSettingState = getUAGEditorStateLocalStorage( 'uagSettingState' );
							const data = {
								...uagSettingState,
								[blockName] : {
									...uagSettingState?.[blockName],
									selectedSetting : '.uag-text-shadow-options'
								}
							}

							const uagLocalStorage = getUAGEditorStateLocalStorage();
							if ( uagLocalStorage ) {
								uagLocalStorage.setItem( 'uagSettingState', JSON.stringify( data ) );
							}
						}
					}
				}
			>
				<Dashicon icon="edit" />
			</Button>
		</div>
	);

	return popup ? (
		<div
			className={ `components-base-control uag-text-shadow-options spectra-control-popup__options ${ activeClass }` }
		>
			{ textShadowAdvancedControls }
			{ showAdvancedControls && advancedControls }
		</div>
	) : (
		<>
			{ overallControls }
		</>
	);
};

export default TextShadowControl;
