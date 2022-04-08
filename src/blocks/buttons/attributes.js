const itemCount = 2;

const buttons = [];

for ( let i = 1; i <= itemCount; i++ ) {
	const label = '#Click Here';
	const link = '#';
	buttons.push( {
		label,
		link,
		target: '_self',
		size: '',
		vPadding: '',
		hPadding: '',
		borderWidth: '',
		borderRadius: '',
		borderStyle: '',
		borderColor: '',
		borderHColor: '',
		color: '',
		background: '',
		hColor: '',
		hBackground: '',
		sizeType: 'px',
		sizeMobile: '',
		sizeTablet: '',
		lineHeight: '',
		lineHeightType: 'em',
		lineHeightMobile: '',
		lineHeightTablet: '',
	} );
}

const attributes = {
	block_id: {
		type: 'string',
	},
	btn_count: {
		type: 'number',
		default: itemCount,
	},
	buttons: {
		type: 'array',
		default: buttons,
	},
	classMigrate: {
		type: 'boolean',
		default: false,
	},
	childMigrate: {
		type: 'boolean',
		default: false,
	},
	align: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'btn-align'
		}
	},
	alignTablet: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'btn-align-tablet'
		}
	},
	alignMobile: {
		type: 'string',
		default: 'center',
		UAGCopyPaste: {
			styleType: 'btn-align-mobile'
		}
	},
	gap: {
		type: 'number',
		default: 10,
	},
	stack: {
		type: 'string',
		default: 'none',
	},
	loadGoogleFonts: {
		type: 'boolean',
		default: false,
		UAGCopyPaste: {
			styleType: 'btn-load-google-fonts'
		}
	},
	fontFamily: {
		type: 'string',
		default: 'Default',
		UAGCopyPaste: {
			styleType: 'btn-font-family'
		}
	},
	fontWeight: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-weight'
		}
	},
	fontStyle: {
		type: 'string',
		default: 'normal',
		UAGCopyPaste: {
			styleType: 'btn-font-style'
		}
	},
	fontTransform: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-transform'
		}
	},
	fontDecoration: {
		type: 'string',
		UAGCopyPaste: {
			styleType: 'btn-font-decoration'
		}
	},
	isPreview: {
		type: 'boolean',
		default: false,
	},
	fontSizeType: {
		type: 'string',
		default: 'px'
	},
	fontSize: {
		type: 'string'
	},
	fontSizeMobile: {
		type: 'string'
	},
	fontSizeTablet: {
		type: 'string'
	},
	lineHeightType: {
		type: 'string',
		default: 'px'
	},
	lineHeight: {
		type: 'string'
	},
	lineHeightMobile: {
		type: 'string'
	},
	lineHeightTablet: {
		type: 'string'
	},
};

export default attributes;
