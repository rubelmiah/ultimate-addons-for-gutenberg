/**
 * Box-Shadow reusable component.
 *
 */
import { __ } from '@wordpress/i18n';
import Range from '@Components/range/Range.js';
import AdvancedPopColorControl from '../color-control/advanced-pop-color-control';
import { Button, Dashicon } from '@wordpress/components';
import { useState } from '@wordpress/element';
import MultiButtonsControl from '../multi-buttons-control/index';
import React, { useLayoutEffect } from 'react';
const BoxShadowControl = ( props ) => {

	const [ showAdvancedControls, toggleAdvancedControls ] = useState( false );

	useLayoutEffect( () => {
		window.addEventListener( 'click', function( e ){
			const typoDiv = document.querySelector( '.uagb-box-shadow-advanced' );
			const actionsDiv = document.querySelector( '.uag-box-shadow-button' );
			if ( typoDiv ) {
				if ( ! typoDiv?.contains( e.target ) && ! actionsDiv?.contains( e.target ) && ! e.target?.classList?.contains( 'uagb-advanced-color-indicate' ) && ! e.target?.parentElement?.closest( '.uagb-popover-color' ) ){
					toggleAdvancedControls( false )
				}
			}
		  } );
	}, [] );

	const {
		setAttributes,
		boxShadowColor,
		boxShadowHOffset,
		boxShadowVOffset,
		boxShadowBlur,
		boxShadowSpread,
		boxShadowPosition,
		label = __( 'Box Shadow', 'ultimate-addons-for-gutenberg' ),
		popup = false,
	} = props;

	let advancedControls;
	const activeClass = showAdvancedControls ? 'active' : '';

	const overallControls = (
		<>
			{ /* Shadow Color */ }
			<AdvancedPopColorControl
				label={ boxShadowColor.title }
				colorValue={ boxShadowColor.value }
				onColorChange={ ( value ) =>
					setAttributes( { [ boxShadowColor.label ]: value } )
				}
			/>
			{ /* Horizontal Positioning */ }
			<Range
				label={ boxShadowHOffset.title }
				value={ boxShadowHOffset.value }
				min={ 0 }
				max={ 100 }
				displayUnit={ false }
				setAttributes={ setAttributes }
				data={ { value:boxShadowHOffset.value, label:boxShadowHOffset.label } }
				onChange={ false }
			/>
			{ /* Vertical Positioning */ }
			<Range
				label={ boxShadowVOffset.title }
				value={ boxShadowVOffset.value }
				min={ 0 }
				max={ 100 }
				displayUnit={ false }
				setAttributes={ setAttributes }
				data={ { value:boxShadowVOffset.value, label:boxShadowVOffset.label } }
				onChange={ false }
			/>
			{ /* Blur */ }
			<Range
				label={ boxShadowBlur.title }
				value={ boxShadowBlur.value }
				min={ 0 }
				max={ 100 }
				displayUnit={ false }
				setAttributes={ setAttributes }
				data={ { value:boxShadowBlur.value, label:boxShadowBlur.label } }
				onChange={ false }
			/>
			{ /* Blur */ }
			<Range
				label={ boxShadowSpread.title }
				value={ boxShadowSpread.value }
				min={ -100 }
				max={ 100 }
				displayUnit={ false }
				setAttributes={ setAttributes }
				data={ { value:boxShadowSpread.value, label:boxShadowSpread.label } }
				onChange={ false }
			/>
			{ /* Shadow Position */ }
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ boxShadowPosition.title }
				data={ {
					value: boxShadowPosition.value,
					label: boxShadowPosition.label,
				} }
				options={ [
					{
						value: 'outset',
						label: __(
							'Outset',
							'ultimate-addons-for-gutenberg'
						),
						tooltip: __(
							'Outset',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'inset',
						label: __(
							'Inset',
							'ultimate-addons-for-gutenberg'
						),
						tooltip: __(
							'Inset (10px)',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ false }
			/>
		</>
	);

	if ( showAdvancedControls ) {
		advancedControls = (
			<div className="uagb-box-shadow-advanced spectra-control-popup">
				{ overallControls }
			</div>
		);
	}

	const boxShadowAdvancedControls = (
		<div className="spectra-control-popup__options--action-wrapper">
			<span className="uag-control-label">
				{ label }
			</span>
			<Button
				className={ 'uag-box-shadow-button spectra-control-popup__options--action-button' }
				aria-pressed={ showAdvancedControls }
				onClick={ () =>
					toggleAdvancedControls( ! showAdvancedControls )
				}
			>
				<Dashicon icon="edit" />
			</Button>
		</div>
	);

	return popup ? (
		<div
			className={ `components-base-control uag-box-shadow-options spectra-control-popup__options ${ activeClass }` }
		>
			{ boxShadowAdvancedControls }
			{ showAdvancedControls && advancedControls }
		</div>
	) : (
		<>
			{ overallControls }
		</>
	);
};

export default BoxShadowControl;
