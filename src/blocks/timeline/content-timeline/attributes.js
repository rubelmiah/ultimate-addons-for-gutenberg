/**
 * BLOCK: UAGB Timeline Attributes
 */

import { __ } from '@wordpress/i18n';

const itemCount = 5;

const item = [];
const dateArr = [];

for ( let i = 1; i <= itemCount; i++ ) {
	item.push( {
		time_heading:
			__( 'Timeline Heading ', 'ultimate-addons-for-gutenberg' ) + i,
		time_desc: __(
			'This is Timeline description, you can change me anytime click here ',
			'ultimate-addons-for-gutenberg'
		),
	} );

	const j = i - 1;
	let today = new Date( '1/1/2019' );
	let dd = today.getDate();
	let mm = today.getMonth() + 1; //January is 0!
	const yyyy = today.getFullYear() - j;

	if ( dd < 10 ) {
		dd = '0' + dd;
	}

	if ( mm < 10 ) {
		mm = '0' + mm;
	}

	today = mm + '/' + dd + '/' + yyyy;

	dateArr.push( {
		title: today,
	} );
}

const attributes = {
	content_class: {
		type: 'string',
	},
	tm_content: {
		type: 'array',
		default: item,
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	childMigrate: {
		type: 'boolean',
		default: false,
	},
	dateFormat: {
		type: 'string',
		default: 'F j, Y',
	},
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'align'
		},
	},
	headingColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-color'
		},
	},
	subHeadingColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-color'
		},
	},
	separatorBg: {
		type: 'string',
		default: '#eee',
		UAGCopyPaste: {
			styleType: 'seprator-bg-color'
		},
	},
	backgroundColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'bg-color'
		},
		default: '#eee',
	},
	separatorColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'separator-color'
		},
		default: '#eee',
	},
	separatorFillColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'separator-fill-color'
		},
		default: '#0693e3',
	},
	separatorBorder: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'separator-border-color'
		},
		default: '#eee',
	},
	borderFocus: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'border-focus-color'
		},
		default: '#0693e3',
	},
	headingTag: {
		type: 'string',
		default: 'h4',
	},
	horizontalSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'horizantal-space'
		},
		default: 10,
	},
	verticalSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'vertical-space'
		},
		default: 15,
	},
	headFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size'
		},
	},
	headFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-type'
		},
		default: 'px',
	},
	headFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-tablet'
		},
	},
	headFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-font-size-mobile'
		},
	},
	headFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-family'
		},
		default: 'Default',
	},
	headFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-weight'
		},
	},
	headFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-font-style'
		},
	},
	headTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-transform'
		},
	},
	headDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-decoration'
		},
	},
	headLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-type'
		},
		default: 'em',
	},
	headLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height'
		},
	},
	headLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-tablet'
		},
	},
	headLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'main-title-line-height-mobile'
		},
	},
	headLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'main-title-load-google-fonts'
		},
		default: false,
	},
	timelinAlignment: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'timeline-alignment'
		},
		default: 'center',
	},
	arrowlinAlignment: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'arrowline-alignment'
		},
		default: 'center',
	},
	subHeadFontSizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-size-type'
		},
		default: 'px',
	},
	subHeadFontSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size'
		},
	},
	subHeadFontSizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-tablet'
		},
	},
	subHeadFontSizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-font-size-mobile'
		},
	},
	subHeadFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-family'
		},
		default: 'Default',
	},
	subHeadFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-weight'
		},
	},
	subHeadFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-font-style'
		},
	},
	subHeadTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-transform'
		},
	},
	subHeadDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		},
	},
	subHeadLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'desc-decoration'
		},
		default: 'em',
	},
	subHeadLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height'
		},
	},
	subHeadLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-tablet'
		},
	},
	subHeadLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-line-height-mobile'
		},
	},
	subHeadLoadGoogleFonts: {
		type: 'boolean',
		UAGCopyPaste: {
			styleType: 'desc-load-google-fonts'
		},
		default: false,
	},
	headSpace: {
		type: 'number',
		default: 5,
		UAGCopyPaste: {
			styleType: 'head-space'
		},
	},
	separatorwidth: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'separator-width'
		},
		default: 3,
	},
	borderwidth: {
		type: 'number',
		default: 0,
		UAGCopyPaste: {
			styleType: 'border-width'
		},
	},
	iconColor: {
		type: 'string',
		default: '#333',
		UAGCopyPaste: {
			styleType: 'icon-color'
		},
	},
	iconFocus: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-focus-color'
		},
		default: '#fff',
	},
	iconBgFocus: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'icon-bg-focus-color'
		},
		default: '#0693e3',
	},
	dateColor: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'date-color'
		},
		default: '#333',
	},
	dateFontsizeType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'date-font-size-type'
		},
		default: 'px',
	},
	dateFontsize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-font-size'
		},
	},
	dateFontsizeTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-font-size-tablet'
		},
	},
	dateFontsizeMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-font-size-mobile'
		},
	},
	dateFontFamily: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'date-font-family'
		},
		default: 'Default',
	},
	dateFontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'date-font-weight'
		},
	},
	dateFontStyle: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'date-font-style'
		},
	},
	dateTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'date-line-height-type'
		},
	},
	dateDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'date-line-height'
		},
	},
	dateLineHeightType: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'date-line-height-type'
		},
		default: 'em',
	},
	dateLineHeight: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-line-height'
		},
	},
	dateLineHeightTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-line-height-tablet'
		},
	},
	dateLineHeightMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-line-height-mobile'
		},
	},
	dateLoadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'date-load-google-fonts'
		},
	},
	connectorBgsize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'connector-bg-size'
		},
		default: 35,
	},
	subHeadSpace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'desc-bottom-space'
		},
		default: 5,
	},
	dateBottomspace: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'date-bottom-space'
		},
		default: 5,
	},
	block_id: {
		type: 'string',
		default: '0',
	},
	timelineItem: {
		type: 'number',
		default: itemCount,
	},
	tm_client_id: {
		type: 'string',
		default: 'not_set',
	},
	borderRadius: {
		type: 'number',
		default: 2,
		UAGCopyPaste: {
			styleType: 'border-radius'
		},
	},
	bgPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'bg-padding'
		},
		default: 20,
	},
	iconSize: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'icon-size'
		},
		default: 12,
	},
	icon: {
		type: 'string',
		default: 'fab fa fa-calendar-alt',
	},
	t_date: {
		type: 'array',
		default: dateArr,
	},
	displayPostDate: {
		type: 'boolean',
		default: true,
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	leftMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'margin-left'
		},
	},
	rightMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'margin-right'
		},
	},
	topMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'margin-top'
		},
	},
	bottomMargin: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'margin-bottom'
		},
	},
	leftMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'margin-left-tablet'
		},
	},
	rightMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'margin-right-tablet'
		},
	},
	topMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'margin-bottom-tablet'
		},
	},
	bottomMarginTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'margin-bottom-tablet'
		},
	},
	leftMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'margin-left-mobile'
		},
	},
	rightMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'margin-right-mobile'
		},
	},
	topMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'margin-top-mobile'
		},
	},
	bottomMarginMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'margin-bottom-mobile'
		},
	},
	marginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'margin-unit'
		},
	},
	mobileMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'margin-unit-mobile'
		},
	},
	tabletMarginUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'margin-unit-tablet'
		},
	},
	marginLink: {
		type: 'boolean',
		default: false,
	},
	leftPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'padding-left'
		},
	},
	rightPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'padding-right'
		},
	},
	topPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'padding-top'
		},
	},
	bottomPadding: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'padding-bottom'
		},
	},
	leftPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'padding-left-tablet'
		},
	},
	rightPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'padding-right-tablet'
		},
	},
	topPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'padding-top-tablet'
		},
	},
	bottomPaddingTablet: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'padding-bottom-tablet'
		},
	},
	leftPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'padding-left-mobile'
		},
	},
	rightPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'padding-right-mobile'
		},
	},
	topPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'padding-top-mobile'
		},
	},
	bottomPaddingMobile: {
		type: 'number',
		UAGCopyPaste: {
			styleType: 'padding-bottom-mobile'
		},
	},
	paddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'padding-unit'
		},
	},
	mobilePaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'padding-unit-mobile'
		},
	},
	tabletPaddingUnit: {
		type: 'string',
		default: 'px',
		UAGCopyPaste: {
			styleType: 'padding-unit-tablet'
		},
	},
	paddingLink: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
