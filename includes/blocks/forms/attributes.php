<?php
/**
 * Attributes File.
 *
 * @since 2.0.0
 *
 * @package uagb
 */

$success_message_border_defaults  = array(
	'borderColor'             => 'green',
	'borderStyle'             => 'solid',
	'borderTopWidth'          => 3,
	'borderRightWidth'        => 3,
	'borderBottomWidth'       => 3,
	'borderLeftWidth'         => 3,
	'borderTopLeftRadius'     => 6,
	'borderTopRightRadius'    => 6,
	'borderBottomLeftRadius'  => 6,
	'borderBottomRightRadius' => 6,
	'borderHColor'            => 'yellowgreen',
);
$success_message_border_attribute = UAGB_Block_Helper::uag_generate_border_attribute( 'successMsg', $success_message_border_defaults );
$failed_message_border_defaults   = array(
	'borderColor'             => 'red',
	'borderStyle'             => 'solid',
	'borderTopWidth'          => 3,
	'borderRightWidth'        => 3,
	'borderBottomWidth'       => 3,
	'borderLeftWidth'         => 3,
	'borderTopLeftRadius'     => 6,
	'borderTopRightRadius'    => 6,
	'borderBottomLeftRadius'  => 6,
	'borderBottomRightRadius' => 6,
	'borderHColor'            => 'deeppink',
);
$failed_message_border_attribute  = UAGB_Block_Helper::uag_generate_border_attribute( 'errorMsg', $failed_message_border_defaults );
$input_border_defaults            = array(
	'borderStyle'             => 'solid',
	'borderTopWidth'          => 1,
	'borderRightWidth'        => 1,
	'borderBottomWidth'       => 1,
	'borderLeftWidth'         => 1,
	'borderTopLeftRadius'     => 3,
	'borderTopRightRadius'    => 3,
	'borderBottomLeftRadius'  => 3,
	'borderBottomRightRadius' => 3,
	'borderColor'             => '#bdbdbd',
	'borderHColor'            => '',
);
$input_border_attribute           = UAGB_Block_Helper::uag_generate_border_attribute( 'field', $input_border_defaults );
$toggle_border_defaults           = array(
	'borderStyle'             => 'solid',
	'borderTopWidth'          => 1,
	'borderRightWidth'        => 1,
	'borderBottomWidth'       => 1,
	'borderLeftWidth'         => 1,
	'borderTopLeftRadius'     => 3,
	'borderTopRightRadius'    => 3,
	'borderBottomLeftRadius'  => 3,
	'borderBottomRightRadius' => 3,
	'borderColor'             => '#1e1e1e',
	'borderHColor'            => '#017cba',
);
$toggle_border_attribute          = UAGB_Block_Helper::uag_generate_border_attribute( 'checkBoxToggle', $toggle_border_defaults );
$submit_border_defaults           = array(
	'borderTopWidth'          => 0,
	'borderRightWidth'        => 0,
	'borderBottomWidth'       => 0,
	'borderLeftWidth'         => 0,
	'borderTopLeftRadius'     => 3,
	'borderTopRightRadius'    => 3,
	'borderBottomLeftRadius'  => 3,
	'borderBottomRightRadius' => 3,
	'borderColor'             => '',
	'borderHColor'            => '',
	'borderStyle'             => '',
);
$submit_border_attribute          = UAGB_Block_Helper::uag_generate_border_attribute( 'btn', $submit_border_defaults );

return array_merge(
	array(
		'block_id'                    => '',
		'formPaddingTop'              => 25,
		'formPaddingRight'            => 25,
		'formPaddingBottom'           => 25,
		'formPaddingLeft'             => 25,
		'formPaddingTopTab'           => 25,
		'formPaddingRightTab'         => 25,
		'formPaddingBottomTab'        => 25,
		'formPaddingLeftTab'          => 25,
		'formPaddingTopMob'           => 25,
		'formPaddingRightMob'         => 25,
		'formPaddingBottomMob'        => 25,
		'formPaddingLeftMob'          => 25,
		'formPaddingUnit'             => 'px',
		'formPaddingUnitTab'          => 'px',
		'formPaddingUnitMob'          => 'px',
		'submitButtonText'            => __( 'Submit', 'ultimate-addons-for-gutenberg' ),
		'formLabel'                   => __( 'Spectra Form', 'ultimate-addons-for-gutenberg' ),
		'buttonAlign'                 => 'left',
		'buttonAlignTablet'           => '',
		'buttonAlignMobile'           => '',
		'confirmationType'            => 'message',
		'confirmationMessage'         => __( 'The form has been submitted Successfully!', 'ultimate-addons-for-gutenberg' ),
		'confirmationUrl'             => '',
		'buttonSize'                  => 'medium',
		'submitColor'                 => '',
		'submitColorHover'            => '',
		'submitBgColor'               => '',
		'submitBgColorHover'          => '',
		'toggleSize'                  => 15,
		'toggleSizeTablet'            => '',
		'toggleSizeMobile'            => '',
		'toggleColor'                 => '#ffffff',
		'toggleActiveColor'           => '#017cba',
		'toggleDotColor'              => '#1e1e1e',
		'toggleDotActiveColor'        => '#ffffff',
		'toggleWidthSize'             => 0,
		'toggleWidthSizeTablet'       => '',
		'toggleWidthSizeMobile'       => '',
		'toggleHeightSize'            => 0,
		'toggleHeightSizeTablet'      => 0,
		'toggleHeightSizeMobile'      => 0,
		'vPaddingSubmit'              => '',
		'hPaddingSubmit'              => '',
		'submitTextloadGoogleFonts'   => false,
		'sendAfterSubmitEmail'        => true,
		'afterSubmitToEmail'          => '',
		'afterSubmitBccEmail'         => '',
		'afterSubmitCcEmail'          => '',
		'afterSubmitEmailSubject'     => __( 'Form Submission', 'ultimate-addons-for-gutenberg' ),
		'submitTextFontFamily'        => 'Default',
		'submitTextFontWeight'        => '',
		'submitTextFontSize'          => 15,
		'submitTextFontSizeType'      => 'px',
		'submitTextFontSizeTablet'    => 15,
		'submitTextFontSizeMobile'    => 15,
		'submitTextLineHeight'        => '',
		'submitTextLineHeightType'    => 'em',
		'submitTextLineHeightTablet'  => '',
		'submitTextLineHeightMobile'  => '',
		'labelloadGoogleFonts'        => false,
		'labelFontFamily'             => 'Default',
		'labelFontWeight'             => '',
		'labelFontSize'               => 15,
		'labelFontSizeType'           => 'px',
		'labelFontSizeTablet'         => 15,
		'labelFontSizeMobile'         => 15,
		'labelLineHeight'             => '',
		'labelLineHeightType'         => 'em',
		'labelLineHeightTablet'       => '',
		'labelLineHeightMobile'       => '',
		'inputloadGoogleFonts'        => false,
		'inputFontFamily'             => 'Default',
		'inputFontWeight'             => '',
		'inputFontSize'               => '',
		'inputFontSizeType'           => 'px',
		'inputFontSizeTablet'         => '',
		'inputFontSizeMobile'         => '',
		'inputLineHeight'             => '',
		'inputLineHeightType'         => 'em',
		'inputLineHeightTablet'       => '',
		'inputLineHeightMobile'       => '',
		'labelColor'                  => '',
		'labelHoverColor'             => '',
		'inputColor'                  => '',
		'bgColor'                     => '',
		'bgHoverColor'                => '',
		'bgActiveColor'               => '',
		'inputplaceholderColor'       => '',
		'inputplaceholderHoverColor'  => '',
		'inputplaceholderActiveColor' => '',
		'inputactiveColor'            => '',
		'vPaddingField'               => 10,
		'hPaddingField'               => 10,
		'fieldGap'                    => 20,
		'fieldGapTablet'              => '',
		'fieldGapMobile'              => '',
		'formStyle'                   => 'boxed',
		'overallAlignment'            => 'left',
		'successMessageTextColor'     => '',
		'successMessageBGColor'       => '',
		'failedMessage'               => __( 'There has been some error while submitting the form. Please verify all form fields again.', 'ultimate-addons-for-gutenberg' ),
		'failedMessageTextColor'      => '',
		'failedMessageBGColor'        => '',
		'reCaptchaEnable'             => false,
		'reCaptchaType'               => 'v2',
		'reCaptchaSiteKeyV2'          => '',
		'reCaptchaSecretKeyV2'        => '',
		'reCaptchaSiteKeyV3'          => '',
		'reCaptchaSecretKeyV3'        => '',
		'hidereCaptchaBatch'          => false,
		'paddingBtnTopTablet'         => '',
		'paddingBtnRightTablet'       => '',
		'paddingBtnBottomTablet'      => '',
		'paddingBtnLeftTablet'        => '',
		'paddingBtnTopMobile'         => '',
		'paddingBtnRightMobile'       => '',
		'paddingBtnBottomMobile'      => '',
		'paddingBtnLeftMobile'        => '',
		'paddingBtnUnit'              => 'px',
		'mobilePaddingBtnUnit'        => 'px',
		'tabletPaddingBtnUnit'        => 'px',
		'submitTextTransform'         => '',
		'submitTextDecoration'        => '',
		'submitTextFontStyle'         => '',
		'labelTransform'              => '',
		'labelDecoration'             => '',
		'labelFontStyle'              => '',
		'inputTransform'              => '',
		'inputDecoration'             => '',
		'inputFontStyle'              => '',
		'fieldGapType'                => 'px',
		'paddingFieldTop'             => 12,
		'paddingFieldRight'           => 12,
		'paddingFieldBottom'          => 12,
		'paddingFieldLeft'            => 12,
		'paddingFieldTopTablet'       => '',
		'paddingFieldRightTablet'     => '',
		'paddingFieldBottomTablet'    => '',
		'paddingFieldLeftTablet'      => '',
		'paddingFieldTopMobile'       => '',
		'paddingFieldRightMobile'     => '',
		'paddingFieldBottomMobile'    => '',
		'paddingFieldLeftMobile'      => '',
		'paddingFieldUnit'            => 'px',
		'paddingFieldUnitmobile'      => 'px',
		'paddingFieldUnitTablet'      => 'px',
		'toggleSizeType'              => 'px',
		'captchaMessage'              => __( 'Please fill up the above captcha.', 'ultimate-addons-for-gutenberg' ),
		'labelGap'                    => 10,
		'labelGapTablet'              => '',
		'labelGapMobile'              => '',
		'labelGapUnit'                => 'px',
		'displayLabels'               => true,
		'submitLetterSpacing'         => '',
		'submitLetterSpacingTablet'   => '',
		'submitLetterSpacingMobile'   => '',
		'submitLetterSpacingType'     => 'px',
		'inputLetterSpacing'          => '',
		'inputLetterSpacingTablet'    => '',
		'inputLetterSpacingMobile'    => '',
		'inputLetterSpacingType'      => 'px',
		'labelLetterSpacing'          => '',
		'labelLetterSpacingTablet'    => '',
		'labelLetterSpacingMobile'    => '',
		'labelLetterSpacingType'      => 'px',
	),
	$success_message_border_attribute,
	$failed_message_border_attribute,
	$input_border_attribute,
	$toggle_border_attribute,
	$submit_border_attribute
);
