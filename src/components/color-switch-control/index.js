import React from 'react';
import { __ } from '@wordpress/i18n';
import GradientSettings from '@Components/gradient-settings';
import MultiButtonsControl from '@Components/multi-buttons-control';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default function ColorSwitchControl({label, type, classic, gradient, setAttributes}) {
	return (
		<React.Fragment>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ label }
				data={ type }
				className="uagb-multi-button-alignment-control"
				options={ [
					{
						value: 'classic',
						label: __(
							'Classic',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'gradient',
						label: __(
							'Gradient',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ false }
			/>
			{
				type.value === 'classic' ? (
					<AdvancedPopColorControl
						colorValue={ classic.value }
						onColorChange={ ( value ) =>
							setAttributes( { [classic.label]: value } )
						}
					/>
				) : (
					<GradientSettings
						backgroundGradient={
							gradient
						}
						setAttributes={ setAttributes }
					/>
				)
			}
		</React.Fragment>
	);
}

ColorSwitchControl.propTypes = propTypes;
ColorSwitchControl.defaultProps = defaultProps;
