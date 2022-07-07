import React, { Suspense } from 'react';
import { __ } from '@wordpress/i18n';
import lazyLoader from '@Controls/lazy-loader';
import TypographyControl from '@Components/typography';
import WebfontLoader from '@Components/typography/fontloader';
import ResponsiveBorder from '@Components/responsive-border';
import MultiButtonsControl from '@Components/multi-buttons-control';
import InspectorTabs from '@Components/inspector-tabs/InspectorTabs.js';
import InspectorTab, {
	UAGTabs,
} from '@Components/inspector-tabs/InspectorTab.js';
import AdvancedPopColorControl from '@Components/color-control/advanced-pop-color-control.js';
import SpacingControl from '@Components/spacing-control';
import ResponsiveSlider from '@Components/responsive-slider';
import { InspectorControls } from '@wordpress/block-editor';
import renderSVG from '@Controls/renderIcon';
import UAGTabsControl from '@Components/tabs';
import UAGSelectControl from '@Components/select-control';
import {
	TextControl,
	ToggleControl,
	TextareaControl,
	Icon,
} from '@wordpress/components';

import formsPresets, {buttonsPresets} from './presets';
import UAGPresets from '@Components/presets';
import UAGAdvancedPanelBody from '@Components/advanced-panel-body';

const Settings = ( props ) => {
	props = props.parentProps;

	const { attributes, setAttributes, deviceType } = props;
	const {
		formPaddingTop,
		formPaddingRight,
		formPaddingBottom,
		formPaddingLeft,
		formPaddingTopTab,
		formPaddingRightTab,
		formPaddingBottomTab,
		formPaddingLeftTab,
		formPaddingTopMob,
		formPaddingRightMob,
		formPaddingBottomMob,
		formPaddingLeftMob,
		formPaddingUnit,
		formPaddingUnitTab,
		formPaddingUnitMob,
		formPaddingLink,
		formLabel,
		buttonAlign,
		buttonAlignTablet,
		buttonAlignMobile,
		buttonSize,
		confirmationType,
		confirmationMessage,
		failedMessage,
		confirmationUrl,
		afterSubmitToEmail,
		afterSubmitCcEmail,
		afterSubmitBccEmail,
		afterSubmitEmailSubject,
		submitColor,
		submitColorHover,
		submitBgColor,
		submitBgColorHover,
		submitTextloadGoogleFonts,
		submitTextFontFamily,
		submitTextFontWeight,
		submitTextFontSize,
		submitTextFontSizeType,
		submitTextFontSizeTablet,
		submitTextFontSizeMobile,
		submitTextLineHeightType,
		submitTextLineHeight,
		submitTextLineHeightTablet,
		submitTextLineHeightMobile,
		labelloadGoogleFonts,
		labelFontFamily,
		labelFontWeight,
		labelFontSize,
		labelFontSizeType,
		labelFontSizeTablet,
		labelFontSizeMobile,
		labelLineHeightType,
		labelLineHeight,
		labelLineHeightTablet,
		labelLineHeightMobile,
		inputloadGoogleFonts,
		inputFontFamily,
		inputFontWeight,
		inputFontSize,
		inputFontSizeType,
		inputFontSizeTablet,
		inputFontSizeMobile,
		inputLineHeightType,
		inputLineHeight,
		inputLineHeightTablet,
		inputLineHeightMobile,
		toggleSize,
		toggleSizeTablet,
		toggleSizeMobile,
		toggleWidthSize,
		toggleWidthSizeTablet,
		toggleWidthSizeMobile,
		toggleColor,
		toggleActiveColor,
		toggleDotColor,
		toggleDotActiveColor,
		labelColor,
		labelHoverColor,
		inputColor,
		bgColor,
		bgHoverColor,
		bgActiveColor,
		inputplaceholderColor,
		inputplaceholderHoverColor,
		inputplaceholderActiveColor,
		fieldGap,
		fieldGapTablet,
		fieldGapMobile,
		formStyle,
		overallAlignment,
		reCaptchaEnable,
		reCaptchaType,
		successMessageTextColor,
		successMessageBGColor,
		failedMessageTextColor,
		failedMessageBGColor,

		paddingBtnTop,
		paddingBtnRight,
		paddingBtnBottom,
		paddingBtnLeft,
		paddingBtnTopTablet,
		paddingBtnRightTablet,
		paddingBtnBottomTablet,
		paddingBtnLeftTablet,
		paddingBtnTopMobile,
		paddingBtnRightMobile,
		paddingBtnBottomMobile,
		paddingBtnLeftMobile,
		paddingBtnUnit,
		mobilePaddingBtnUnit,
		tabletPaddingBtnUnit,
		paddingspacingLink,
		submitTextTransform,
		submitTextDecoration,
		labelTransform,
		labelDecoration,
		inputTransform,
		inputDecoration,
		fieldGapType,
		paddingFieldTop,
		paddingFieldRight,
		paddingFieldBottom,
		paddingFieldLeft,
		paddingFieldTopTablet,
		paddingFieldRightTablet,
		paddingFieldBottomTablet,
		paddingFieldLeftTablet,
		paddingFieldTopMobile,
		paddingFieldRightMobile,
		paddingFieldBottomMobile,
		paddingFieldLeftMobile,
		paddingFieldUnit,
		paddingFieldUnitmobile,
		paddingFieldUnitTablet,
		paddingFieldLink,
		toggleSizeType,
		submitTextFontStyle,
		labelFontStyle,
		inputFontStyle,
		hidereCaptchaBatch,

		labelGap,
		labelGapTablet,
		labelGapMobile,
		labelGapUnit,

		displayLabels,
		labelLetterSpacing,
		labelLetterSpacingTablet,
		labelLetterSpacingMobile,
		labelLetterSpacingType,
		inputLetterSpacing,
		inputLetterSpacingTablet,
		inputLetterSpacingMobile,
		inputLetterSpacingType,
		submitTextLetterSpacing,
		submitTextLetterSpacingTablet,
		submitTextLetterSpacingMobile,
		submitTextLetterSpacingType,
	} = attributes;

	const presetSettings = () => {
		return <UAGAdvancedPanelBody
					title={ __( 'Presets', 'ultimate-addons-for-gutenberg' ) }
					initialOpen={ true }
				>
					<UAGPresets
						setAttributes = { setAttributes }
						presets = { formsPresets }
						presetInputType = 'radioImage'
					/>
				</UAGAdvancedPanelBody>
	};
	const generalSettings = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'General', 'ultimate-addons-for-gutenberg' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<ToggleControl
					label={ __(
						'Show Labels',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ displayLabels }
					onChange={ () =>
						setAttributes( { displayLabels : ! displayLabels } )
					}
				/>
				<TextControl
					label={ __(
						'Hidden Field Label',
						'ultimate-addons-for-gutenberg'
					) }
					value={ formLabel }
					onChange={ ( value ) =>
						setAttributes( {
							formLabel: value,
						} )
					}
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __( 'Style', 'ultimate-addons-for-gutenberg' ) }
					data={ {
						value: formStyle,
						label: 'formStyle',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'boxed',
							label: 'Boxed',
						},
						{
							value: 'underlined',
							label: 'Underlined',
						},
					] }
					showIcons={ false }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Overall Alignment',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: overallAlignment,
						label: 'overallAlignment',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'left',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-left' ) }
								/>
							),
							tooltip: __(
								'Left',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'center',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-center' ) }
								/>
							),
							tooltip: __(
								'Center',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							value: 'right',
							icon: (
								<Icon
									icon={ renderSVG( 'fa fa-align-right' ) }
								/>
							),
							tooltip: __(
								'Right',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					showIcons={ true }
				/>
				<MultiButtonsControl
					setAttributes={ setAttributes }
					label={ __(
						'Confirmation Type',
						'ultimate-addons-for-gutenberg'
					) }
					data={ {
						value: confirmationType,
						label: 'confirmationType',
					} }
					className="uagb-multi-button-alignment-control"
					options={ [
						{
							value: 'message',
							label: 'Message',
						},
						{
							value: 'url',
							label: 'URL Text',
						},
					] }
					showIcons={ false }
				/>
				{ 'message' === confirmationType && (
					<>
						<TextareaControl
							label="Success Message Text"
							help={ __(
								'Enter a message you want to display after successfull form submission',
								'ultimate-addons-for-gutenberg'
							) }
							value={ confirmationMessage }
							onChange={ ( value ) =>
								setAttributes( {
									confirmationMessage: value,
								} )
							}
						/>
						<TextareaControl
							label="Error Message Text"
							help={ __(
								'Enter a message you want to display after unsuccessfull form submission',
								'ultimate-addons-for-gutenberg'
							) }
							value={ failedMessage }
							onChange={ ( value ) =>
								setAttributes( {
									failedMessage: value,
								} )
							}
						/>
					</>
				) }
				{ 'url' === confirmationType && (
					<TextControl
						label={ __(
							'Success Redirect URL',
							'ultimate-addons-for-gutenberg'
						) }
						help={ __(
							'Enter a URL you want to redirect your page to after form Submission',
							'ultimate-addons-for-gutenberg'
						) }
						value={ confirmationUrl }
						onChange={ ( value ) =>
							setAttributes( {
								confirmationUrl: value,
							} )
						}
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	const successMessageStyle = () => ( 'message' === confirmationType && (
		<>
			<AdvancedPopColorControl
				label={ __(
					'Text Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={
					successMessageTextColor
						? successMessageTextColor
						: ''
				}
				data={ {
					value: successMessageTextColor,
					label: 'successMessageTextColor',
				} }
				setAttributes={ setAttributes }
			/>
			<AdvancedPopColorControl
				label={ __(
					'Background Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={
					successMessageBGColor
						? successMessageBGColor
						: ''
				}
				data={ {
					value: successMessageBGColor,
					label: 'successMessageBGColor',
				} }
				setAttributes={ setAttributes }
			/>
			<ResponsiveBorder
				setAttributes={ setAttributes }
				prefix={'successMsg'}
				disabledBorderTitle= {false}
				attributes={ attributes }
				deviceType={deviceType}
				disableBottomSeparator={ true }
			/>
		</>
	) );
	const failedMessageStyle = () => ( 'message' === confirmationType && (
		<>
			<AdvancedPopColorControl
				label={ __(
					'Text Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={
					failedMessageTextColor
						? failedMessageTextColor
						: ''
				}
				data={ {
					value: failedMessageTextColor,
					label: 'failedMessageTextColor',
				} }
				setAttributes={ setAttributes }
			/>
			<AdvancedPopColorControl
				label={ __(
					'Background Color',
					'ultimate-addons-for-gutenberg'
				) }
				colorValue={
					failedMessageBGColor ? failedMessageBGColor : ''
				}
				data={ {
					value: failedMessageBGColor,
					label: 'failedMessageBGColor',
				} }
				setAttributes={ setAttributes }
			/>
			<ResponsiveBorder
				setAttributes={ setAttributes }
				prefix={'errorMsg'}
				disabledBorderTitle= {false}
				attributes={ attributes }
				deviceType={deviceType}
				disableBottomSeparator={ true }
			/>
		</>
	) );

	const afterSubmitActions = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __( 'Actions' ) }
				initialOpen={ false }
				className="uagb__url-panel-body"
			>
				<p className="uagb-form-notice">
					{ __(
						'Note: It is required to enter an email ID to receive the data submitted via Form. Else you will not receive any data.',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<UAGTabsControl
					tabs={ [
						{
							name: 'to',
							title: __(
								'To',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							name: 'cc',
							title: __(
								'CC',
								'ultimate-addons-for-gutenberg'
							),
						},
						{
							name: 'bcc',
							title: __(
								'BCC',
								'ultimate-addons-for-gutenberg'
							),
						},
					] }
					to={
						<TextControl
							placeholder={ __(
								'Email',
								'ultimate-addons-for-gutenberg'
							) }
							value={ afterSubmitToEmail }
							onChange={ ( value ) =>
								setAttributes( {
									afterSubmitToEmail: value,
								} )
							}
						/>
					}
					cc={
						<TextControl
							placeholder={ __(
								'Email',
								'ultimate-addons-for-gutenberg'
							) }
							value={ afterSubmitCcEmail }
							onChange={ ( value ) =>
								setAttributes( {
									afterSubmitCcEmail: value,
								} )
							}
						/>
					}
					bcc={
						<TextControl
							placeholder={ __(
								'Email',
								'ultimate-addons-for-gutenberg'
							) }
							value={ afterSubmitBccEmail }
							onChange={ ( value ) =>
								setAttributes( {
									afterSubmitBccEmail: value,
								} )
							}
						/>
					}
					disableBottomSeparator={ false }
				/>
				<TextControl
					label={ __(
						'Subject',
						'ultimate-addons-for-gutenberg'
					) }
					placeholder={ __(
						'Subject',
						'ultimate-addons-for-gutenberg'
					) }
					value={ afterSubmitEmailSubject }
					onChange={ ( value ) =>
						setAttributes( {
							afterSubmitEmailSubject: value,
						} )
					}
				/>
			</UAGAdvancedPanelBody>
		);
	};

	const labelStyling = () => (
		<UAGAdvancedPanelBody
			title={ __( 'Label', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ true }
		>
			<TypographyControl
				label={ __(
					'Typography',
					'ultimate-addons-for-gutenberg'
				) }
				attributes={ attributes }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: labelloadGoogleFonts,
					label: 'labelloadGoogleFonts',
				} }
				fontFamily={ {
					value: labelFontFamily,
					label: 'labelFontFamily',
				} }
				fontWeight={ {
					value: labelFontWeight,
					label: 'labelFontWeight',
				} }
				fontStyle={ {
					value: labelFontStyle,
					label: 'labelFontStyle',
				} }
				fontSizeType={ {
					value: labelFontSizeType,
					label: 'labelFontSizeType',
				} }
				fontSize={ {
					value: labelFontSize,
					label: 'labelFontSize',
				} }
				fontSizeMobile={ {
					value: labelFontSizeMobile,
					label: 'labelFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: labelFontSizeTablet,
					label: 'labelFontSizeTablet',
				} }
				lineHeightType={ {
					value: labelLineHeightType,
					label: 'labelLineHeightType',
				} }
				lineHeight={ {
					value: labelLineHeight,
					label: 'labelLineHeight',
				} }
				lineHeightMobile={ {
					value: labelLineHeightMobile,
					label: 'labelLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: labelLineHeightTablet,
					label: 'labelLineHeightTablet',
				} }
				letterSpacing={ {
					value: labelLetterSpacing,
					label: 'labelLetterSpacing',
				} }
				letterSpacingTablet={ {
					value: labelLetterSpacingTablet,
					label: 'labelLetterSpacingTablet',
				} }
				letterSpacingMobile={ {
					value: labelLetterSpacingMobile,
					label: 'labelLetterSpacingMobile',
				} }
				letterSpacingType={ {
					value: labelLetterSpacingType,
					label: 'labelLetterSpacingType',
				} }
				transform={ {
					value: labelTransform,
					label: 'labelTransform',
				} }
				decoration={ {
					value: labelDecoration,
					label: 'labelDecoration',
				} }
			/>
			<UAGTabsControl
				tabs={ [
					{
						name: 'normal',
						title: __(
							'Normal',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						name: 'hover',
						title: __(
							'Hover',
							'ultimate-addons-for-gutenberg'
						),
					}
				] }
				normal={
					<>
						<AdvancedPopColorControl
							label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ labelColor ? labelColor : '' }
							data={ {
								value: labelColor,
								label: 'labelColor',
							} }
							setAttributes={ setAttributes }
						/>
					</>
				}
				hover={
					<>
						<AdvancedPopColorControl
							label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
							colorValue={ labelHoverColor ? labelHoverColor : '' }
							data={ {
								value: labelHoverColor,
								label: 'labelHoverColor',
							} }
							setAttributes={ setAttributes }
						/>
					</>
				}
				disableBottomSeparator={ true }
			/>
		</UAGAdvancedPanelBody>
	);

	const inputStyling = () => (
		<UAGAdvancedPanelBody
			title={ __( 'Input', 'ultimate-addons-for-gutenberg' ) }
			// If displayLabels is false, this panel would be shown first and hence it's initialOpen should be set to true.
			initialOpen={ ! displayLabels }
		>
			<AdvancedPopColorControl
				label={ __( 'Color', 'ultimate-addons-for-gutenberg' ) }
				colorValue={ inputColor ? inputColor : '' }
				data={ {
					value: inputColor,
					label: 'inputColor',
				} }
				setAttributes={ setAttributes }
			/>
			<UAGTabsControl
				tabs={ [
					{
						name: 'normal',
						title: __(
							'Normal',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						name: 'hover',
						title: __(
							'Hover',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						name: 'active',
						title: __(
							'Active',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				normal={
					<>
						<AdvancedPopColorControl
							label={ __(
								'Placeholder Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								inputplaceholderColor ? inputplaceholderColor : ''
							}
							data={ {
								value: inputplaceholderColor,
								label: 'inputplaceholderColor',
							} }
							setAttributes={ setAttributes }
						/>
						{ 'underlined' !== formStyle && (
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ bgColor ? bgColor : '' }
								data={ {
									value: bgColor,
									label: 'bgColor',
								} }
								setAttributes={ setAttributes }
							/>
						) }
					</>
				}
				hover={
					<>
						<AdvancedPopColorControl
							label={ __(
								'Placeholder Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								inputplaceholderHoverColor ? inputplaceholderHoverColor : ''
							}
							data={ {
								value: inputplaceholderHoverColor,
								label: 'inputplaceholderHoverColor',
							} }
							setAttributes={ setAttributes }
						/>
						{ 'underlined' !== formStyle && (
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ bgHoverColor ? bgHoverColor : '' }
								data={ {
									value: bgHoverColor,
									label: 'bgHoverColor',
								} }
								setAttributes={ setAttributes }
							/>
						) }
					</>
				}
				active={
					<>
						<AdvancedPopColorControl
							label={ __(
								'Placeholder Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								inputplaceholderActiveColor ? inputplaceholderActiveColor : ''
							}
							data={ {
								value: inputplaceholderActiveColor,
								label: 'inputplaceholderActiveColor',
							} }
							setAttributes={ setAttributes }
						/>
						{ 'underlined' !== formStyle && (
							<AdvancedPopColorControl
								label={ __(
									'Background Color',
									'ultimate-addons-for-gutenberg'
								) }
								colorValue={ bgActiveColor ? bgActiveColor : '' }
								data={ {
									value: bgActiveColor,
									label: 'bgActiveColor',
								} }
								setAttributes={ setAttributes }
							/>
						) }
					</>
				}
				disableBottomSeparator={ false }
			/>
			<ResponsiveBorder
				setAttributes={ setAttributes }
				prefix={'field'}
				disabledBorderTitle= {false}
				attributes={ attributes }
				deviceType={deviceType}
			/>
			<SpacingControl
				{ ...props }
				label={ __( 'Input Padding', 'ultimate-addons-for-gutenberg' ) }
				valueTop={ {
					value: paddingFieldTop,
					label: 'paddingFieldTop',
				} }
				valueRight={ {
					value: paddingFieldRight,
					label: 'paddingFieldRight',
				} }
				valueBottom={ {
					value: paddingFieldBottom,
					label: 'paddingFieldBottom',
				} }
				valueLeft={ {
					value: paddingFieldLeft,
					label: 'paddingFieldLeft',
				} }
				valueTopTablet={ {
					value: paddingFieldTopTablet,
					label: 'paddingFieldTopTablet',
				} }
				valueRightTablet={ {
					value: paddingFieldRightTablet,
					label: 'paddingFieldRightTablet',
				} }
				valueBottomTablet={ {
					value: paddingFieldBottomTablet,
					label: 'paddingFieldBottomTablet',
				} }
				valueLeftTablet={ {
					value: paddingFieldLeftTablet,
					label: 'paddingFieldLeftTablet',
				} }
				valueTopMobile={ {
					value: paddingFieldTopMobile,
					label: 'paddingFieldTopMobile',
				} }
				valueRightMobile={ {
					value: paddingFieldRightMobile,
					label: 'paddingFieldRightMobile',
				} }
				valueBottomMobile={ {
					value: paddingFieldBottomMobile,
					label: 'paddingFieldBottomMobile',
				} }
				valueLeftMobile={ {
					value: paddingFieldLeftMobile,
					label: 'paddingFieldLeftMobile',
				} }
				unit={ {
					value: paddingFieldUnit,
					label: 'paddingFieldUnit',
				} }
				mUnit={ {
					value: paddingFieldUnitmobile,
					label: 'paddingFieldUnitmobile',
				} }
				tUnit={ {
					value: paddingFieldUnitTablet,
					label: 'paddingFieldUnitTablet',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: paddingFieldLink,
					label: 'paddingFieldLink',
				} }
			/>
			<TypographyControl
				label={ __(
					'Input Typography',
					'ultimate-addons-for-gutenberg'
				) }
				attributes={ attributes }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: inputloadGoogleFonts,
					label: 'inputloadGoogleFonts',
				} }
				fontFamily={ {
					value: inputFontFamily,
					label: 'inputFontFamily',
				} }
				fontWeight={ {
					value: inputFontWeight,
					label: 'inputFontWeight',
				} }
				fontStyle={ {
					value: inputFontStyle,
					label: 'inputFontStyle',
				} }
				fontSizeType={ {
					value: inputFontSizeType,
					label: 'inputFontSizeType',
				} }
				fontSize={ {
					value: inputFontSize,
					label: 'inputFontSize',
				} }
				fontSizeMobile={ {
					value: inputFontSizeMobile,
					label: 'inputFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: inputFontSizeTablet,
					label: 'inputFontSizeTablet',
				} }
				lineHeightType={ {
					value: inputLineHeightType,
					label: 'inputLineHeightType',
				} }
				lineHeight={ {
					value: inputLineHeight,
					label: 'inputLineHeight',
				} }
				lineHeightMobile={ {
					value: inputLineHeightMobile,
					label: 'inputLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: inputLineHeightTablet,
					label: 'inputLineHeightTablet',
				} }
				letterSpacing={ {
					value: inputLetterSpacing,
					label: 'inputLetterSpacing',
				} }
				letterSpacingTablet={ {
					value: inputLetterSpacingTablet,
					label: 'inputLetterSpacingTablet',
				} }
				letterSpacingMobile={ {
					value: inputLetterSpacingMobile,
					label: 'inputLetterSpacingMobile',
				} }
				letterSpacingType={ {
					value: inputLetterSpacingType,
					label: 'inputLetterSpacingType',
				} }
				transform={ {
					value: inputTransform,
					label: 'inputTransform',
				} }
				decoration={ {
					value: inputDecoration,
					label: 'inputDecoration',
				} }
			/>
		</UAGAdvancedPanelBody>
	);

	const elementStyling = () => (
		<UAGAdvancedPanelBody
			title={ __( 'Checkbox/Toggle/Radio', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
			// className="uagb__url-panel-body"
		>
			<ResponsiveSlider
				label={ __(
					'Checkbox/Radio Size',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: toggleSize,
						label: 'toggleSize',
					},
					tablet: {
						value: toggleSizeTablet,
						label: 'toggleSizeTablet',
					},
					mobile: {
						value: toggleSizeMobile,
						label: 'toggleSizeMobile',
					},
				} }
				min={ 0 }
				max={ 50 }
				unit={ {
					value: toggleSizeType,
					label: 'toggleSizeType',
				} }
				setAttributes={ setAttributes }
			/>
			<ResponsiveSlider
				label={ __(
					'Toggle Size',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: toggleWidthSize,
						label: 'toggleWidthSize',
					},
					tablet: {
						value: toggleWidthSizeTablet,
						label: 'toggleWidthSizeTablet',
					},
					mobile: {
						value: toggleWidthSizeMobile,
						label: 'toggleWidthSizeMobile',
					},
				} }
				min={ 0 }
				max={ 50 }
				displayUnit={ false }
				setAttributes={ setAttributes }
			/>
			<UAGTabsControl
				tabs={ [
					{
						name: 'normal',
						title: __(
							'Normal',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						name: 'active',
						title: __(
							'Active',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				normal={
					<>
						<AdvancedPopColorControl
							label={ __(
								'Background Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ toggleColor ? toggleColor : '' }
							data={ {
								value: toggleColor,
								label: 'toggleColor',
							} }
							setAttributes={ setAttributes }
						/>
						<AdvancedPopColorControl
							label={ __(
								'Element Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ toggleDotColor ? toggleDotColor : '' }
							data={ {
								value: toggleDotColor,
								label: 'toggleDotColor',
							} }
							setAttributes={ setAttributes }
						/>
					</>
				}
				active={
					<>
						<AdvancedPopColorControl
							label={ __(
								'Background Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ toggleActiveColor ? toggleActiveColor : '' }
							data={ {
								value: toggleActiveColor,
								label: 'toggleActiveColor',
							} }
							setAttributes={ setAttributes }
						/>
						<AdvancedPopColorControl
							label={ __(
								'Element Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ toggleDotActiveColor ? toggleDotActiveColor : '' }
							data={ {
								value: toggleDotActiveColor,
								label: 'toggleDotActiveColor',
							} }
							setAttributes={ setAttributes }
						/>
					</>
				}
				disableBottomSeparator={ false }
			/>
			<ResponsiveBorder
				setAttributes={ setAttributes }
				prefix={'checkBoxToggle'}
				disabledBorderTitle= {false}
				attributes={ attributes }
				deviceType={deviceType}
				disableBottomSeparator={ true }
			/>
		</UAGAdvancedPanelBody>
	);

	const submitStyling = () => (
		<UAGAdvancedPanelBody
			title={ __( 'Submit Button', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
			// className="uagb__url-panel-body"
		>
			<UAGPresets
				setAttributes = { setAttributes }
				presets = { buttonsPresets }
				presetInputType = 'radioImage'
			/>
			<UAGSelectControl
				label={ __(
					'Button Size',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					value: buttonSize,
					label: 'buttonSize',
				} }
				setAttributes={ setAttributes }
				options={ [
					{
						value: 'small',
						label: __(
							'Small',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'medium',
						label: __(
							'Medium',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'large',
						label: __(
							'Large',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'extralarge',
						label: __(
							'Extra Large',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'full',
						label: __(
							'Full',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
			/>
			<MultiButtonsControl
				setAttributes={ setAttributes }
				label={ __( 'Button Alignment', 'ultimate-addons-for-gutenberg' ) }
				data={ {
					desktop: {
						value: buttonAlign,
						label: 'buttonAlign',
					},
					tablet: {
						value: buttonAlignTablet,
						label: 'buttonAlignTablet',
					},
					mobile: {
						value: buttonAlignMobile,
						label: 'buttonAlignMobile',
					},
				} }
				options={ [
					{
						value: 'left',
						icon: (
							<Icon
								icon={ renderSVG( 'fa fa-align-left' ) }
							/>
						),
						tooltip: __(
							'Left',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'center',
						icon: (
							<Icon
								icon={ renderSVG( 'fa fa-align-center' ) }
							/>
						),
						tooltip: __(
							'Center',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						value: 'right',
						icon: (
							<Icon
								icon={ renderSVG( 'fa fa-align-right' ) }
							/>
						),
						tooltip: __(
							'Right',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				showIcons={ true }
				responsive={true}
			/>
			<SpacingControl
				{ ...props }
				label={ __(
					'Button Padding',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: paddingBtnTop,
					label: 'paddingBtnTop',
				} }
				valueRight={ {
					value: paddingBtnRight,
					label: 'paddingBtnRight',
				} }
				valueBottom={ {
					value: paddingBtnBottom,
					label: 'paddingBtnBottom',
				} }
				valueLeft={ {
					value: paddingBtnLeft,
					label: 'paddingBtnLeft',
				} }
				valueTopTablet={ {
					value: paddingBtnTopTablet,
					label: 'paddingBtnTopTablet',
				} }
				valueRightTablet={ {
					value: paddingBtnRightTablet,
					label: 'paddingBtnRightTablet',
				} }
				valueBottomTablet={ {
					value: paddingBtnBottomTablet,
					label: 'paddingBtnBottomTablet',
				} }
				valueLeftTablet={ {
					value: paddingBtnLeftTablet,
					label: 'paddingBtnLeftTablet',
				} }
				valueTopMobile={ {
					value: paddingBtnTopMobile,
					label: 'paddingBtnTopMobile',
				} }
				valueRightMobile={ {
					value: paddingBtnRightMobile,
					label: 'paddingBtnRightMobile',
				} }
				valueBottomMobile={ {
					value: paddingBtnBottomMobile,
					label: 'paddingBtnBottomMobile',
				} }
				valueLeftMobile={ {
					value: paddingBtnLeftMobile,
					label: 'paddingBtnLeftMobile',
				} }
				unit={ {
					value: paddingBtnUnit,
					label: 'paddingBtnUnit',
				} }
				mUnit={ {
					value: mobilePaddingBtnUnit,
					label: 'mobilePaddingBtnUnit',
				} }
				tUnit={ {
					value: tabletPaddingBtnUnit,
					label: 'tabletPaddingBtnUnit',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: paddingspacingLink,
					label: 'paddingspacingLink',
				} }
			/>
			<UAGTabsControl
				tabs={ [
					{
						name: 'normal',
						title: __(
							'Normal',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						name: 'hover',
						title: __(
							'Hover',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				normal={
					<>
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={ submitColor ? submitColor : '' }
							data={ {
								value: submitColor,
								label: 'submitColor',
							} }
							setAttributes={ setAttributes }
						/>
						<AdvancedPopColorControl
							label={ __(
								'Background Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								submitBgColor ? submitBgColor : ''
							}
							data={ {
								value: submitBgColor,
								label: 'submitBgColor',
							} }
							setAttributes={ setAttributes }
						/>
					</>
				}
				hover={
					<>
						<AdvancedPopColorControl
							label={ __(
								'Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								submitColorHover ? submitColorHover : ''
							}
							data={ {
								value: submitColorHover,
								label: 'submitColorHover',
							} }
							setAttributes={ setAttributes }
						/>
						<AdvancedPopColorControl
							label={ __(
								'Background Color',
								'ultimate-addons-for-gutenberg'
							) }
							colorValue={
								submitBgColorHover ? submitBgColorHover : ''
							}
							data={ {
								value: submitBgColorHover,
								label: 'submitBgColorHover',
							} }
							setAttributes={ setAttributes }
						/>
					</>
				}
			/>
			<ResponsiveBorder
				setAttributes={ setAttributes }
				prefix={'btn'}
				disabledBorderTitle= {false}
				attributes={ attributes }
				deviceType={deviceType}
			/>
			<TypographyControl
				label={ __(
					'Typography',
					'ultimate-addons-for-gutenberg'
				) }
				attributes={ attributes }
				setAttributes={ setAttributes }
				loadGoogleFonts={ {
					value: submitTextloadGoogleFonts,
					label: 'submitTextloadGoogleFonts',
				} }
				fontFamily={ {
					value: submitTextFontFamily,
					label: 'submitTextFontFamily',
				} }
				fontWeight={ {
					value: submitTextFontWeight,
					label: 'submitTextFontWeight',
				} }
				fontStyle={ {
					value: submitTextFontStyle,
					label: 'submitTextFontStyle',
				} }
				fontSizeType={ {
					value: submitTextFontSizeType,
					label: 'submitTextFontSizeType',
				} }
				fontSize={ {
					value: submitTextFontSize,
					label: 'submitTextFontSize',
				} }
				fontSizeMobile={ {
					value: submitTextFontSizeMobile,
					label: 'submitTextFontSizeMobile',
				} }
				fontSizeTablet={ {
					value: submitTextFontSizeTablet,
					label: 'submitTextFontSizeTablet',
				} }
				lineHeightType={ {
					value: submitTextLineHeightType,
					label: 'submitTextLineHeightType',
				} }
				lineHeight={ {
					value: submitTextLineHeight,
					label: 'submitTextLineHeight',
				} }
				lineHeightMobile={ {
					value: submitTextLineHeightMobile,
					label: 'submitTextLineHeightMobile',
				} }
				lineHeightTablet={ {
					value: submitTextLineHeightTablet,
					label: 'submitTextLineHeightTablet',
				} }
				letterSpacing={ {
					value: submitTextLetterSpacing,
					label: 'submitTextLetterSpacing',
				} }
				letterSpacingTablet={ {
					value: submitTextLetterSpacingTablet,
					label: 'submitTextLetterSpacingTablet',
				} }
				letterSpacingMobile={ {
					value: submitTextLetterSpacingMobile,
					label: 'submitTextLetterSpacingMobile',
				} }
				letterSpacingType={ {
					value: submitTextLetterSpacingType,
					label: 'submitTextLetterSpacingType',
				} }
				transform={ {
					value: submitTextTransform,
					label: 'submitTextTransform',
				} }
				decoration={ {
					value: submitTextDecoration,
					label: 'submitTextDecoration',
				} }
			/>
		</UAGAdvancedPanelBody>
	);

	const messageStyling = () => (
		<UAGAdvancedPanelBody
			title={ __( 'Messages', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
			// className="uagb__url-panel-body"
		>
			<UAGTabsControl
				tabs={ [
					{
						name: 'success',
						title: __(
							'Success',
							'ultimate-addons-for-gutenberg'
						),
					},
					{
						name: 'error',
						title: __(
							'Error',
							'ultimate-addons-for-gutenberg'
						),
					},
				] }
				success={ successMessageStyle() }
				error={ failedMessageStyle() }
				disableBottomSeparator={ true }
			/>
		</UAGAdvancedPanelBody>
	);

	const spaceStyling = () => (
		<UAGAdvancedPanelBody
			title={ __( 'Spacing', 'ultimate-addons-for-gutenberg' ) }
			initialOpen={ false }
			// className="uagb__url-panel-body"
		>
			<SpacingControl
				{ ...props }
				label={ __(
					'Form Padding',
					'ultimate-addons-for-gutenberg'
				) }
				valueTop={ {
					value: formPaddingTop,
					label: 'formPaddingTop',
				} }
				valueRight={ {
					value: formPaddingRight,
					label: 'formPaddingRight',
				} }
				valueBottom={ {
					value: formPaddingBottom,
					label: 'formPaddingBottom',
				} }
				valueLeft={ {
					value: formPaddingLeft,
					label: 'formPaddingLeft',
				} }
				valueTopTablet={ {
					value: formPaddingTopTab,
					label: 'formPaddingTopTab',
				} }
				valueRightTablet={ {
					value: formPaddingRightTab,
					label: 'formPaddingRightTab',
				} }
				valueBottomTablet={ {
					value: formPaddingBottomTab,
					label: 'formPaddingBottomTab',
				} }
				valueLeftTablet={ {
					value: formPaddingLeftTab,
					label: 'formPaddingLeftTab',
				} }
				valueTopMobile={ {
					value: formPaddingTopMob,
					label: 'formPaddingTopMob',
				} }
				valueRightMobile={ {
					value: formPaddingRightMob,
					label: 'formPaddingRightMob',
				} }
				valueBottomMobile={ {
					value: formPaddingBottomMob,
					label: 'formPaddingBottomMob',
				} }
				valueLeftMobile={ {
					value: formPaddingLeftMob,
					label: 'formPaddingLeftMob',
				} }
				unit={ {
					value: formPaddingUnit,
					label: 'formPaddingUnit',
				} }
				mUnit={ {
					value: formPaddingUnitTab,
					label: 'formPaddingUnitTab',
				} }
				tUnit={ {
					value: formPaddingUnitMob,
					label: 'formPaddingUnitMob',
				} }
				deviceType={ deviceType }
				attributes={ attributes }
				setAttributes={ setAttributes }
				link={ {
					value: formPaddingLink,
					label: 'formPaddingLink',
				} }
			/>
			<ResponsiveSlider
				label={ __(
					'Row Spacing',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: fieldGap,
						label: 'fieldGap',
					},
					tablet: {
						value: fieldGapTablet,
						label: 'fieldGapTablet',
					},
					mobile: {
						value: fieldGapMobile,
						label: 'fieldGapMobile',
					},
				} }
				min={ 0 }
				max={ 100 }
				unit={ {
					value: fieldGapType,
					label: 'fieldGapType',
				} }
				units={ [
					{
						name: __(
							'Pixel',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: 'px',
					},
					{
						name: __(
							'%',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: '%',
					},
					{
						name: __(
							'em',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: 'em',
					},
				] }
				setAttributes={ setAttributes }
			/>
			<ResponsiveSlider
				label={ __(
					'Label Bottom Margin',
					'ultimate-addons-for-gutenberg'
				) }
				data={ {
					desktop: {
						value: labelGap,
						label: 'labelGap',
					},
					tablet: {
						value: labelGapTablet,
						label: 'labelGapTablet',
					},
					mobile: {
						value: labelGapMobile,
						label: 'labelGapMobile',
					},
				} }
				min={ 0 }
				max={ 100 }
				unit={ {
					value: labelGapUnit,
					label: 'labelGapUnit',
				} }
				units={ [
					{
						name: __(
							'Pixel',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: 'px',
					},
					{
						name: __(
							'%',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: '%',
					},
					{
						name: __(
							'em',
							'ultimate-addons-for-gutenberg'
						),
						unitValue: 'em',
					},
				] }
				setAttributes={ setAttributes }
			/>
		</UAGAdvancedPanelBody>
	);


	const googleReCaptcha = () => {
		return (
			<UAGAdvancedPanelBody
				title={ __(
					'Google reCAPTCHA',
					'ultimate-addons-for-gutenberg'
				) }
				initialOpen={ false }
			>
				<p className="uagb-form-notice">
					{ __(
						'P.S. Note that If you are using two forms on the same page with the different reCAPTCHA versions (V2 checkbox and V3), it will create conflicts between the versions. Kindly avoid using different versions on same page. ',
						'ultimate-addons-for-gutenberg'
					) }
				</p>
				<ToggleControl
					label={ __(
						'Enable reCAPTCHA ',
						'ultimate-addons-for-gutenberg'
					) }
					checked={ reCaptchaEnable }
					onChange={ () =>
						setAttributes( {
							reCaptchaEnable: ! reCaptchaEnable,
						} )
					}
				/>
				{ reCaptchaEnable && (
					<>
						<p className="uagb-form-notice">
							Please configure the Google reCAPTCHA Site & Secret key from <a target = "_blank" href={`${uagb_blocks_info.uagb_home_url}/wp-admin/options-general.php?page=spectra&path=settings&settings=block-settings`} rel="noreferrer">here.</a>
						</p>
						<MultiButtonsControl
							setAttributes={ setAttributes }
							label={ __(
								'Select Version',
								'ultimate-addons-for-gutenberg'
							) }
							data={ {
								value: reCaptchaType,
								label: 'reCaptchaType',
							} }
							className="uagb-multi-button-alignment-control"
							options={ [
								{
									value: 'v2',
									label: 'V2',
									tooltip: __(
										'V2',
										'ultimate-addons-for-gutenberg'
									),
								},
								{
									value: 'v3',
									label: 'V3',
									tooltip: __(
										'V3',
										'ultimate-addons-for-gutenberg'
									),
								},
							] }
							showIcons={ false }
						/>
					</>
				) }
				{ reCaptchaEnable && 'v3' === reCaptchaType && (
					<ToggleControl
						label={ __(
							'Hide reCAPTCHA Badge',
							'ultimate-addons-for-gutenberg'
						) }
						checked={ hidereCaptchaBatch }
						onChange={ () =>
							setAttributes( {
								hidereCaptchaBatch: ! hidereCaptchaBatch,
							} )
						}
					/>
				) }
			</UAGAdvancedPanelBody>
		);
	};
	let loadsubmittextGoogleFonts;

	if ( submitTextloadGoogleFonts === true ) {
		const qconfig = {
			google: {
				families: [
					submitTextFontFamily +
						( submitTextFontWeight
							? ':' + submitTextFontWeight
							: '' ),
				],
			},
		};
		loadsubmittextGoogleFonts = (
			<WebfontLoader config={ qconfig }></WebfontLoader>
		);
	}

	let loadlabelGoogleFonts;

	if ( labelloadGoogleFonts === true ) {
		const qconfig = {
			google: {
				families: [
					labelFontFamily +
						( labelFontWeight ? ':' + labelFontWeight : '' ),
				],
			},
		};
		loadlabelGoogleFonts = (
			<WebfontLoader config={ qconfig }></WebfontLoader>
		);
	}

	let loadinputGoogleFonts;

	if ( inputloadGoogleFonts === true ) {
		const qconfig = {
			google: {
				families: [
					inputFontFamily +
						( inputFontWeight ? ':' + inputFontWeight : '' ),
				],
			},
		};
		loadinputGoogleFonts = (
			<WebfontLoader config={ qconfig }></WebfontLoader>
		);
	}

	return (
		<>
			<InspectorControls>
				<InspectorTabs>
					<InspectorTab { ...UAGTabs.general }>
						{ presetSettings() }
						{ generalSettings() }
						{ afterSubmitActions() }
						{ googleReCaptcha() }
					</InspectorTab>
					<InspectorTab { ...UAGTabs.style }>
						{ displayLabels &&
							labelStyling()
						}
						{ inputStyling() }
						{ elementStyling() }
						{ submitStyling() }
						{ messageStyling() }
						{ spaceStyling() }
					</InspectorTab>
					<InspectorTab
						{ ...UAGTabs.advance }
						parentProps={ props }
					></InspectorTab>
				</InspectorTabs>
			</InspectorControls>
			<Suspense fallback={ lazyLoader() }>
				{ loadsubmittextGoogleFonts }
				{ loadlabelGoogleFonts }
				{ loadinputGoogleFonts }
			</Suspense>
		</>
	);
};

export default React.memo( Settings );
