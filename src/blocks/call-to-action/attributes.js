/**
 * BLOCK: Call To Action - Attributes
 */

const attributes = {
	inheritFromTheme: {
		type: 'boolean',
		default: false,
	},
	ctaTitle: {
		source: 'html',
		selector: 'h1,h2,h3,h4,h5,h6',
		default: 'Call To Action',
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	description: {
		source: 'html',
		selector: 'p',
		default:
			'Click here to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.',
	},
	textAlign: {
		type: 'string',
		default: 'left',
	},
	titleColor: {
		type: 'string',
	},
	descColor: {
		type: 'string',
	},
	ctaPosition: {
		type: 'string',
		default: 'right',
	},
	titleTag: {
		type: 'string',
		default: 'h3',
	},
	titleFontSize: {
		type: 'number',
	},
	titleFontSizeType: {
		type: 'string',
		default: 'px',
	},
	titleFontSizeMobile: {
		type: 'number',
	},
	titleFontSizeTablet: {
		type: 'number',
	},
	titleFontFamily: {
		type: 'string',
		default: 'Default',
	},
	titleFontWeight: {
		type: 'string',
	},
	titleFontStyle: {
		type: 'string',
		default: 'normal',
	},
	titleTransform: {
		type: 'string',
	},
	titleDecoration: {
		type: 'string',
	},
	titleLineHeightType: {
		type: 'string',
		default: 'em',
	},
	titleLineHeight: {
		type: 'number',
	},
	titleLineHeightTablet: {
		type: 'number',
	},
	titleLineHeightMobile: {
		type: 'number',
	},
	titleLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	descFontSize: {
		type: 'number',
	},
	descFontSizeType: {
		type: 'string',
		default: 'px',
	},
	descFontSizeMobile: {
		type: 'number',
	},
	descFontSizeTablet: {
		type: 'number',
	},
	descFontFamily: {
		type: 'string',
		default: 'Default',
	},
	descFontWeight: {
		type: 'string',
	},
	descFontStyle: {
		type: 'string',
		default: 'normal',
	},
	descTransform: {
		type: 'string',
	},
	descDecoration: {
		type: 'string',
	},
	descLineHeightType: {
		type: 'string',
		default: 'em',
	},
	descLineHeight: {
		type: 'number',
	},
	descLineHeightTablet: {
		type: 'number',
	},
	descLineHeightMobile: {
		type: 'number',
	},
	descLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	titleSpace: {
		type: 'number',
		default: 10,
	},
	descSpace: {
		type: 'number',
		default: 10,
	},
	block_id: {
		type: 'string',
		default: 'not_set',
	},
	buttonAlign: {
		type: 'string',
		default: 'middle',
	},
	ctaTarget: {
		type: 'boolean',
		default: false,
	},
	ctaIcon: {
		type: 'string',
		default: '',
	},
	ctaIconPosition: {
		type: 'string',
		default: 'after',
	},
	ctaIconSpace: {
		type: 'number',
		default: 5,
	},
	ctaType: {
		type: 'string',
		default: 'button',
	},
	ctaText: {
		type: 'html',
		default: 'Read More',
	},
	ctaLink: {
		type: 'string',
		default: '#',
	},
	ctaFontSize: {
		type: 'number',
		default: 14
	},
	ctaFontSizeType: {
		type: 'string',
		default: 'px',
	},
	ctaFontSizeMobile: {
		type: 'number',
	},
	ctaFontSizeTablet: {
		type: 'number',
	},
	ctaFontFamily: {
		type: 'string',
		default: 'Default',
	},
	ctaFontWeight: {
		type: 'string',
	},
	ctaFontStyle: {
		type: 'string',
		default: 'normal',
	},
	ctaTransform: {
		type: 'string',
	},
	ctaDecoration: {
		type: 'string',
	},
	ctaLoadGoogleFonts: {
		type: 'boolean',
		default: false,
	},
	contentWidth: {
		type: 'number',
		default: '70',
	},
	ctaBtnLinkColor: {
		type: 'string'
	},
	ctaLinkHoverColor: {
		type: 'string',
		default: '',
	},
	ctaBgColor: {
		type: 'string',
		default: '',
	},
	ctaBgHoverColor: {
		type: 'string',
		default: '',
	},
	ctaBorderColor: {
		type: 'string'
	},
	ctaBorderhoverColor: {
		type: 'string',
		default: '',
	},
	ctaBorderStyle: {
		type: 'string',
		default: 'none'
	},
	ctaBtnVertPadding: {
		type: 'number',
		default: '',
	},
	ctaBtnHrPadding: {
		type: 'number',
		default: '',
	},
	ctaBorderWidth: {
		type: 'number',
		default: '',
	},
	ctaBorderRadius: {
		type: 'number',
		default: '',
	},
	stack: {
		type: 'string',
		default: 'tablet',
	},
	ctaLeftSpace: {
		type: 'number',
		default: 5,
	},
	ctaRightSpace: {
		type: 'number',
		default: 5,
	},
	ctaTopPadding: {
		type: 'number',
	},
	ctaBottomPadding: {
		type: 'number',
	},
	ctaLeftPadding: {
		type: 'number',
	},
	ctaRightPadding: {
		type: 'number',
	},
	ctaLeftPaddingTablet: {
		type: 'number',
	},
	ctaRightPaddingTablet: {
		type: 'number',
	},
	ctaTopPaddingTablet: {
		type: 'number',
	},
	ctaBottomPaddingTablet: {
		type: 'number',
	},
	ctaLeftPaddingMobile: {
		type: 'number',
	},
	ctaRightPaddingMobile: {
		type: 'number',
	},
	ctaTopPaddingMobile: {
		type: 'number',
	},
	ctaBottomPaddingMobile: {
		type: 'number',
	},
	ctaPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	mobileCTAPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	tabletCTAPaddingUnit: {
		type: 'string',
		default: 'px',
	},
	ctaPaddingLink: {
		type: 'boolean',
		default: false,
	},
};

export default attributes;
