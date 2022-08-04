import { RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

const InfoBoxCta = ( props ) => {
	const { attributes, setAttributes = 'not_set' } = props;

	const ctaBtnClass = 'uagb-infobox-cta-link uagb-ifb-cta-button';

	let target = '_self';
	const rel = 'noopener noreferrer';
	if ( attributes.ctaTarget ) {
		target = '_blank';
	}

	let ctaIconOutput = '';
	if ( attributes.ctaIcon !== '' ) {
		ctaIconOutput = (
			<span
				className={ classnames(
					`uagb-ifb-${ attributes.ctaType }-icon`,
					`uagb-ifb-align-icon-${ attributes.ctaIconPosition }`
				) }
			>
				<i className={ attributes.ctaIcon }></i>
			</span>
		);
	}

	if( setAttributes !== 'not_set' ) {
		return (
			<div className="uagb-ifb-cta uagb-infobox-cta-link-style">
				{ attributes.ctaType === 'text' && (
					<a
						href={ attributes.ctaLink }
						target={ target }
						className="uagb-infobox-cta-link"
						rel={ rel }
					>
						{ attributes.ctaIconPosition === 'before' && ctaIconOutput }
						<RichText
							tagName="span"
							placeholder={ __(
								'Read More',
								'ultimate-addons-for-gutenberg'
							) }
							value={ attributes.ctaText }
							className="uagb-inline-editing"
							multiline={ false }
							onChange={ ( value ) => {
								setAttributes( { ctaText: value } );
							} }
						/>
						{ attributes.ctaIconPosition === 'after' && ctaIconOutput }
					</a>
				) }
	
				{ attributes.ctaType === 'button' && (
					<div className="uagb-ifb-button-wrapper">
						<a
							href={ attributes.ctaLink }
							className={ ctaBtnClass }
							target={ target }
							rel={ rel }
						>
							{ ctaIconOutput }
							<span className="uagb-ifb-cta-content-wrapper">
								<RichText
									tagName="span"
									placeholder={ __(
										'Read More',
										'ultimate-addons-for-gutenberg'
									) }
									value={ attributes.ctaText }
									className="uagb-inline-editing"
									multiline={ false }
									onChange={ ( value ) => {
										setAttributes( { ctaText: value } );
									} }
								/>
							</span>
						</a>
					</div>
				) }
			</div>
		);
	}
	return (
		<div className="uagb-ifb-cta uagb-infobox-cta-link-style">
			{ attributes.ctaType === 'text' && (
				<a
					href={ attributes.ctaLink }
					target={ target }
					className="uagb-infobox-cta-link"
					rel={ rel }
				>
					{ attributes.ctaIconPosition === 'before' && ctaIconOutput }
						<RichText.Content
							tagName="span"
							value={ attributes.ctaText }
							className="uagb-inline-editing"
						/>
					{ attributes.ctaIconPosition === 'after' && ctaIconOutput }
				</a>
			) }

			{ attributes.ctaType === 'button' && (
				<div className="uagb-ifb-button-wrapper">
					<a
						href={ attributes.ctaLink }
						className={ ctaBtnClass }
						target={ target }
						rel={ rel }
					>
						{ ctaIconOutput }
						<span className="uagb-ifb-cta-content-wrapper">
							<RichText.Content
								tagName="span"
								value={ attributes.ctaText }
								className="uagb-inline-editing"
							/>
						</span>
					</a>
				</div>
			) }
		</div>
	);
};
export default InfoBoxCta;
