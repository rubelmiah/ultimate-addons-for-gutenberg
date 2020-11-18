/**
 * BLOCK: Forms - Email - Edit
 */

import classnames from "classnames"

const { __ } = wp.i18n

const {
	Component,
	Fragment
} = wp.element

const {
	RichText,
	InspectorControls
} = wp.blockEditor

const {	
	ToggleControl,
	TextControl,
	PanelBody
} = wp.components

class UAGBFormsEmailEdit extends Component {

	constructor() {
		super( ...arguments )
	}

	componentDidMount() {

		const { attributes, setAttributes } = this.props

		// Assigning block_id in the attribute.
		setAttributes( { block_id: this.props.clientId.substr( 0, 8 ) } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-style-forms-email-" + this.props.clientId.substr( 0, 8 ) )
		document.head.appendChild( $style )
		
	}

	componentDidUpdate(prevProps, prevState) {
    }
    
	render() {

		const { attributes,setAttributes,isSelected } = this.props

        const {
			block_id,
			name,
			required,
			placeholder
		} = attributes
		
		const nameInspectorControls = () => {

			return (
				<PanelBody
					title={ __( "General" ) }
					initialOpen={ true }
					className="uagb__url-panel-body"
				>
					<ToggleControl
						label={ __( "Required" ) }
						checked={ required }
						onChange={ ( value ) => setAttributes( { required: ! required } ) }
					/>
					<TextControl
					 	label="Placeholder"
						value={ placeholder }
						onChange={ ( value ) => setAttributes( { placeholder: value } ) }
						placeholder={__( "Placeholder" )}
					/>
				</PanelBody>
			)
		}

		const isRequired = (required) ? "required" : "";

		return (
			<Fragment>
				<InspectorControls>
					{ nameInspectorControls() }
				</InspectorControls>
				<div className={ classnames(
					"uagb-forms-email-wrap",
					"uagb-forms-field-set",
					`uagb-block-${ block_id }`,
				) }>
					{isSelected && (
						<div className="uagb-forms-required-wrap">
							<ToggleControl
								label={ __( "Required" ) }
								checked={ required }
								onChange={ ( value ) => setAttributes( { required: ! required } ) }
							/>
						</div>
					)}
					<RichText
							tagName="div"
							placeholder={ __( "Email" ) }
							value={ name }
							onChange={ ( value ) => setAttributes( { name: value } ) }
							className={`uagb-forms-email-label ${isRequired} uagb-forms-input-label`}
							multiline={ false }
					/>
					<input type="email"  className="uagb-forms-email-input uagb-forms-input" placeholder={placeholder} required={ required }/>
				</div>
			</Fragment>
		)
	}
}

export default UAGBFormsEmailEdit
