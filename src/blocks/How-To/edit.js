/**
 * BLOCK: How To
 */

// Import block dependencies and components.
import classnames from "classnames"
import times from "lodash/times"
import map from "lodash/map"
import memoize from "memize"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import styling from "./styling"
// import image from "../../../dist/blocks/image/placeholder"

// Import all of our Text Options requirements.
import TypographyControl from "../../components/typography"

// Import Web font loader for google fonts.
import WebfontLoader from "../../components/typography/fontloader"


//  Import CSS.
import "./style.scss"

const { __ } = wp.i18n

const { compose } = wp.compose

const {
	registerBlockType,
	createBlock
} = wp.blocks

const {
	AlignmentToolbar,
	BlockControls,
	MediaUpload,
	InspectorControls,
	RichText,
	ColorPalette,
	InnerBlocks,
} = wp.blockEditor

const {
	PanelBody,
	SelectControl,
	RangeControl,
	ButtonGroup,
	Button,
	TabPanel,
	Dashicon,
	ToggleControl,
	TextControl
} = wp.components

// console.log(image)

const { select, withSelect, dispatch } = wp.data;

const { Component, Fragment } = wp.element

const ALLOWED_BLOCKS = [ 'uagb/info-box' ];

let imageSizeOptions = [
	{ value: "thumbnail", label: __( "Thumbnail" ) },
	{ value: "medium", label: __( "Medium" ) },
	{ value: "full", label: __( "Large" ) }
]

class UAGBHowTo extends Component {

	constructor() {
		super( ...arguments )

		// this.splitBlock = this.splitBlock.bind( this )
		this.onRemoveImage = this.onRemoveImage.bind( this )
		this.onSelectImage = this.onSelectImage.bind( this )
		this.getImageSize  	  = this.getImageSize.bind(this)
	}

	componentDidMount() {

		// Assigning block_id in the attribute.
		this.props.setAttributes( { block_id: this.props.clientId } )

		// Assigning block_id in the attribute.
		this.props.setAttributes( { classMigrate: true } )

		this.props.setAttributes({ schema: JSON.stringify(this.props.schemaJsonData) });

		let level_val = parseInt( this.props.attributes.headingTag.replace( 'h' , '' ) )
		this.props.setAttributes( { level: level_val } )

		// Pushing Style tag for this block css.
		const $style = document.createElement( "style" )
		$style.setAttribute( "id", "uagb-how-to-schema-style-" + this.props.clientId )
		document.head.appendChild( $style )
	}

	componentDidUpdate(prevProps, prevState) {

		if (
				JSON.stringify( this.props.schemaJsonData ) !==
				JSON.stringify( prevProps.schemaJsonData )
			) {
				this.props.setAttributes({
				schema: JSON.stringify(this.props.schemaJsonData)
			});
		}
	}

	savematerials( value, index ) {
		const { attributes, setAttributes } = this.props
		const { materials } = attributes

		const newItems = materials.map( ( item, thisIndex ) => {
		if ( index === thisIndex ) {
			item = { ...item, ...value }
		}

		return item
		} )

		setAttributes( {
			materials: newItems,
		} )
	}

	savetools( value, index ) {
			const { attributes, setAttributes } = this.props
			const { tools } = attributes

			const newItems = tools.map( ( item, thisIndex ) => {
			if ( index === thisIndex ) {
				item = { ...item, ...value }
			}

			return item
		} )

			setAttributes( {
				tools: newItems,
			} )
		}

	/*
	 * Heading Tag Change
	 */
	onTagChange( value ) {
		const { setAttributes } = this.props

		let level_val = parseInt( value.replace( 'h' , '' ) )

		setAttributes( { level: level_val } )
		setAttributes( { headingTag: value } )
	}

	/*
	 * Event to set Image as null while removing.
	 */
	onRemoveImage() {
		const { setAttributes } = this.props
		setAttributes( { mainimage: null } )
	}

	/*
	 * Event to set Image as while adding.
	 */
	onSelectImage( media ) {
		const { mainimage } = this.props.attributes
		const { setAttributes } = this.props

		if ( ! media || ! media.url ) {
			setAttributes( { mainimage: null } )
			return
		}

		if ( ! media.type ) {
			return
		}

		setAttributes( { mainimage: media } )
		if ( media["sizes"] ) {
			var new_img = this.getImageSize(media["sizes"])
			imageSizeOptions = new_img
		}
	}

	getImageSize(sizes) {
		var size_arr = []
		$.each(sizes, function (index, item) {
		  var name = index
		  	var p = { "value" : name, "label": name }
		  	size_arr.push(p)
		})
		return(size_arr)
	}

	render() {

		// Setup the attributes
		const {
			isSelected,
			className,
			attributes,
			setAttributes,
			insertBlocksAfter,
			mergeBlocks,
			onReplace,
			anchor,
			//JSON data
			schemaJsonData,
			attributes: {
				level,
				overallAlignment,
				currencyType,
				timeIn,
				showEstcost,
				showTotaltime,
				showEstcostcolor,
				showTotaltimecolor,
				tools_count,
				steps_count,
				material_count,
				toolsTitle,
				materialTitle,
				stepsTitle,
				tools,
				materials,
				steps,
				timeNeeded,
				estCost,
				mainimage,
				imgSize,
				imgWidth,
				headingTitle,
				headingId,
				headingDesc,
				headingAlign,
				descriptionAlign,
				headingColor,
				subHeadingColor,
				separatorColor,
				headingTag,
				headFontFamily,
				headFontWeight,
				headFontSubset,
				headFontSizeType,
				headFontSize,
				headFontSizeMobile,
				headFontSizeTablet,
				headLineHeightType,
				headLineHeight,
				headLineHeightMobile,
				headLineHeightTablet,
				subHeadFontFamily,
				subHeadFontWeight,
				subHeadFontSubset,
				subHeadFontSize,
				subHeadFontSizeType,
				subHeadFontSizeMobile,
				subHeadFontSizeTablet,
				subHeadLineHeight,
				subHeadLineHeightType,
				subHeadLineHeightMobile,
				subHeadLineHeightTablet,
				separatorWidth,
				separatorWidthType,
				seperatorStyle,
				separatorHeight,
				headSpace,
				separatorSpace,
				headLoadGoogleFonts,
				subHeadLoadGoogleFonts,
				//Total time.
				priceFontSizeType,
				priceFontSize,
				priceFontSizeTablet,
				priceFontSizeMobile,
				priceFontFamily,
				priceFontWeight,
				priceFontSubset,
				priceLineHeightType,
				priceLineHeight,
				priceLineHeightTablet,
				priceLineHeightMobile,
				priceLoadGoogleFonts,
				//Est cost.
				estcostLoadGoogleFonts,
				estcostFontFamily,
				estcostFontWeight,
				estcostFontSubset,
				estcostFontSizeType,
				estcostFontSize,
				estcostFontSizeMobile,
				estcostFontSizeTablet,
				estcostLineHeightType,
				estcostLineHeight,
				estcostLineHeightMobile,
				estcostLineHeightTablet,
				time,
				cost,
				//Tools attributes
				add_required_tools,
				toolsTitleColor,
				icon_color,
				icon_hover_color,
				toolsLoadGoogleFonts,
				toolsFontFamily,
				toolsFontWeight,
				toolsFontSubset,
				toolsFontSize,
				toolsFontSizeType,
				toolsFontSizeTablet,
				toolsFontSizeMobile,
				toolsLineHeightType,
				toolsLineHeight,
				toolsLineHeightTablet,
				toolsLineHeightMobile,
				//materials
				add_required_materials,
				materialTitleColor,
				materials_icon_color,
				materials_icon_hover_color,
				materialsLoadGoogleFonts,
				materialsFontFamily,
				materialsFontWeight,
				materialsFontSubset,
				materialsFontSize,
				materialsFontSizeType,
				materialsFontSizeTablet,
				materialsFontSizeMobile,
				materialsLineHeight,
				materialsLineHeightType,
				materialsLineHeightTablet,
				materialsLineHeightMobile,
				timeSpace,
				costSpace,
				
			},
		} = this.props



		var element = document.getElementById( "uagb-how-to-schema-style-" + this.props.clientId )

		if( null != element && "undefined" != typeof element ) {
			element.innerHTML = styling( this.props )
		}

		if( mainimage && mainimage["sizes"] ){
			imageSizeOptions = this.getImageSize(mainimage["sizes"])
		}

		let loadHeadingGoogleFonts;
		let loadSubHeadingGoogleFonts;
		let loadtoolsLoadGoogleFonts;
		let loadmaterialsLoadGoogleFonts; 

		if( headLoadGoogleFonts == true ) {
			
			const hconfig = {
				google: {
					families: [ headFontFamily + ( headFontWeight ? ':' + headFontWeight : '' ) ],
				},
			};

			loadHeadingGoogleFonts = (
				<WebfontLoader config={ hconfig }>
				</WebfontLoader>
			)
		}

		if( subHeadLoadGoogleFonts == true ) {

			const sconfig = {
				google: {
					families: [ subHeadFontFamily + ( subHeadFontWeight ? ':' + subHeadFontWeight : '' ) ],
				},
			};

			loadSubHeadingGoogleFonts = (
				<WebfontLoader config={ sconfig }>
				</WebfontLoader>
			)
		}

		if( toolsLoadGoogleFonts == true ) {
			
			const tconfig = {
				google: {
					families: [ toolsFontFamily + ( toolsFontWeight ? ':' + toolsFontWeight : '' ) ],
				},
			};

			loadtoolsLoadGoogleFonts = (
				<WebfontLoader config={ tconfig }>
				</WebfontLoader>
			)
		}

		if( materialsLoadGoogleFonts == true ) {
			
			const mconfig = {
				google: {
					families: [ materialsFontFamily + ( materialsFontWeight ? ':' + materialsFontWeight : '' ) ],
				},
			};

			loadmaterialsLoadGoogleFonts = (
				<WebfontLoader config={ mconfig }>
				</WebfontLoader>
			)
		}

		

		let url_chk = ""
		if( typeof attributes.mainimage !== "undefined" && attributes.mainimage !== null && attributes.mainimage !=="" ){
			url_chk = attributes.mainimage.url
		}
		
		let url = ""
		if( url_chk !== "" ){
			let size = attributes.mainimage.sizes
			let imageSize = attributes.imgSize

			if ( typeof size !== "undefined" && typeof size[imageSize] !== "undefined" ) {
			  url = size[imageSize].url 
			}else{
			  url = url_chk 
			}
	}

	let image_icon_html = ""

	if ( mainimage && mainimage.url ) {

		image_icon_html = <img className="uagb-howto__source-image" src={url} />

	}
	// console.log(url)

		const getInfoBoxAsChild = [ [ 'uagb/info-box', {infoBoxTitle:"Step 1",iconimgPosition:"left",source_type:"image",
		showPrefix:false,seperatorStyle:"none",ctaType:"all",
		} ] ];

		return (
			<Fragment>
				<InspectorControls>
				<PanelBody title={ __( "General" ) } initialOpen={ true } >
					<h2>{ __( "Heading" ) }</h2>
						<SelectControl
							label={ __( "Heading Tag" ) }
							value={ headingAlign }
							onChange={ value => {
								this.onTagChange( value )
							} }
							options={ [
								{ value: "h1", label: __( "H1" ) },
								{ value: "h2", label: __( "H2" ) },
								{ value: "h3", label: __( "H3" ) },
								{ value: "h4", label: __( "H4" ) },
								{ value: "h5", label: __( "H5" ) },
								{ value: "h6", label: __( "H6" ) },
							] }
						/>
						<SelectControl
							label={ __( "Heading Alignment" ) }
							value={ headingAlign }
							onChange={ value => { setAttributes( { headingAlign: value } ) } }
							options={ [
								{ value: "left", label: __( "Left" ) },
								{ value: "center", label: __( "Center" ) },
								{ value: "right", label: __( "Right" ) },
							] }
						/>
						<TypographyControl
							label={ __( "Typography" ) }
							attributes = { attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: headLoadGoogleFonts, label: 'headLoadGoogleFonts' } }
							fontFamily = { { value: headFontFamily, label: 'headFontFamily' } }
							fontWeight = { { value: headFontWeight, label: 'headFontWeight' } }
							fontSubset = { { value: headFontSubset, label: 'headFontSubset' } }
							fontSizeType = { { value: headFontSizeType, label: 'headFontSizeType' } }
							fontSize = { { value: headFontSize, label: 'headFontSize' } }
							fontSizeMobile = { { value: headFontSizeMobile, label: 'headFontSizeMobile' } }
							fontSizeTablet= { { value: headFontSizeTablet, label: 'headFontSizeTablet' } }
							lineHeightType = { { value: headLineHeightType, label: 'headLineHeightType' } }
							lineHeight = { { value: headLineHeight, label: 'headLineHeight' } }
							lineHeightMobile = { { value: headLineHeightMobile, label: 'headLineHeightMobile' } }
							lineHeightTablet= { { value: headLineHeightTablet, label: 'headLineHeightTablet' } }
						/>
						<p className="uagb-setting-label">{ __( "Heading Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: headingColor }} ></span></span></p>
						<ColorPalette
							value={ headingColor }
							onChange={ ( value ) => setAttributes( { headingColor: value } ) }
							allowReset
						/>
						<hr className="uagb-editor__separator" />
						<h2>{ __( "Description" ) }</h2>
						<SelectControl
							label={ __( "Description Alignment" ) }
							value={ descriptionAlign }
							onChange={ value => { setAttributes( { descriptionAlign: value } ) } }
							options={ [
								{ value: "left", label: __( "Left" ) },
								{ value: "center", label: __( "Center" ) },
								{ value: "right", label: __( "Right" ) },
							] }
						/>
						<TypographyControl
							label={ __( "Typography" ) }
							attributes = { attributes }
							setAttributes = { setAttributes }
							loadGoogleFonts = { { value: subHeadLoadGoogleFonts, label: 'subHeadLoadGoogleFonts' } }
							fontFamily = { { value: subHeadFontFamily, label: 'subHeadFontFamily' } }
							fontWeight = { { value: subHeadFontWeight, label: 'subHeadFontWeight' } }
							fontSubset = { { value: subHeadFontSubset, label: 'subHeadFontSubset' } }
							fontSizeType = { { value: subHeadFontSizeType, label: 'subHeadFontSizeType' } }
							fontSize = { { value: subHeadFontSize, label: 'subHeadFontSize' } }
							fontSizeMobile = { { value: subHeadFontSizeMobile, label: 'subHeadFontSizeMobile' } }
							fontSizeTablet= { { value: subHeadFontSizeTablet, label: 'subHeadFontSizeTablet' } }
							lineHeightType = { { value: subHeadLineHeightType, label: 'subHeadLineHeightType' } }
							lineHeight = { { value: subHeadLineHeight, label: 'subHeadLineHeight' } }
							lineHeightMobile = { { value: subHeadLineHeightMobile, label: 'subHeadLineHeightMobile' } }
							lineHeightTablet= { { value: subHeadLineHeightTablet, label: 'subHeadLineHeightTablet' } }
						/>
						<p className="uagb-setting-label">{ __( "Description Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: subHeadingColor }} ></span></span></p>
						<ColorPalette
							value={ subHeadingColor }
							onChange={ ( value ) => setAttributes( { subHeadingColor: value } ) }
							allowReset
						/>
						<hr className="uagb-editor__separator" />
								<h2>{ __( "Image" ) }</h2>
								<SelectControl
									label={ __( "Size" ) }
									options={ imageSizeOptions }
									value={ imgSize }
									onChange={ ( value ) => setAttributes( { imgSize: value } ) }
								/>
								<RangeControl
									label={ __( "Width(%)" ) }
									value={ imgWidth }
									onChange={ ( value ) => setAttributes( { imgWidth: value } ) }
									min={ 0 }
									max={ 500 }
									allowReset
								/>
								<MediaUpload
									title={ __( "Select Image" ) }
									onSelect={ ( value ) => setAttributes( { mainimage: value } ) }
									allowedTypes={ [ "image" ] }
									value={ mainimage }
									render={ ( { open } ) => (
										<Button isDefault onClick={ open }>
											{ ! mainimage ? __( "Select Image" ) : __( "Replace image" ) }
										</Button>
									) }
								/>
								{ mainimage &&
									<Button
										className="uagb-rm-btn"
										onClick={ () => setAttributes( { mainimage: null } ) }
										isLink isDestructive>
										{ __( "Remove Image" ) }
									</Button>
								}
						</PanelBody>
						<PanelBody title={ __( "Time & Cost" ) } initialOpen={ false } >
							<ToggleControl
								label={ __( "Show Total Time" ) }
								checked={ showTotaltime }
								onChange={ ( value ) => setAttributes( { showTotaltime: ! showTotaltime } ) }
								help={ __( "Note: Click here to find your country's ISO code." ) }
							/>
							<TypographyControl
								label={ __( "Typography" ) }
								attributes = { attributes }
								setAttributes = { setAttributes }
								loadGoogleFonts = { { value: priceLoadGoogleFonts, label: 'priceLoadGoogleFonts' } }
								fontFamily = { { value: priceFontFamily, label: 'priceFontFamily' } }
								fontWeight = { { value: priceFontWeight, label: 'priceFontWeight' } }
								fontSubset = { { value: priceFontSubset, label: 'priceFontSubset' } }
								fontSizeType = { { value: priceFontSizeType, label: 'priceFontSizeType' } }
								fontSize = { { value: priceFontSize, label: 'priceFontSize' } }
								fontSizeMobile = { { value: priceFontSizeMobile, label: 'priceFontSizeMobile' } }
								fontSizeTablet= { { value: priceFontSizeTablet, label: 'priceFontSizeTablet' } }
								lineHeightType = { { value: priceLineHeightType, label: 'priceLineHeightType' } }
								lineHeight = { { value: priceLineHeight, label: 'priceLineHeight' } }
								lineHeightMobile = { { value: priceLineHeightMobile, label: 'priceLineHeightMobile' } }
								lineHeightTablet= { { value: priceLineHeightTablet, label: 'priceLineHeightTablet' } }
							/>
							<p className="uagb-setting-label">{ __( "Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: showTotaltimecolor }} ></span></span></p>
							<ColorPalette
								value={ showTotaltimecolor }
								onChange={ ( value ) => setAttributes( { showTotaltimecolor: value } ) }
								allowReset
							/>
							<RangeControl
								label={ __( "Time Margin" ) }
								value={ timeSpace }
								onChange={ ( value ) => setAttributes( { timeSpace: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
							/>
							<ToggleControl
								label={ __( "Show Estimated Cost" ) }
								checked={ showEstcost }
								onChange={ ( value ) => setAttributes( { showEstcost: ! showEstcost } ) }
								help={ __( "Note: Click here to find your country's ISO code." ) }
							/>
							<TypographyControl
								label={ __( "Typography" ) }
								attributes = { attributes }
								setAttributes = { setAttributes }
								loadGoogleFonts = { { value: estcostLoadGoogleFonts, label: 'estcostLoadGoogleFonts' } }
								fontFamily = { { value: estcostFontFamily, label: 'estcostFontFamily' } }
								fontWeight = { { value: estcostFontWeight, label: 'estcostFontWeight' } }
								fontSubset = { { value: estcostFontSubset, label: 'estcostFontSubset' } }
								fontSizeType = { { value: estcostFontSizeType, label: 'estcostFontSizeType' } }
								fontSize = { { value: estcostFontSize, label: 'estcostFontSize' } }
								fontSizeMobile = { { value: estcostFontSizeMobile, label: 'estcostFontSizeMobile' } }
								fontSizeTablet= { { value: estcostFontSizeTablet, label: 'estcostFontSizeTablet' } }
								lineHeightType = { { value: estcostLineHeightType, label: 'estcostLineHeightType' } }
								lineHeight = { { value: estcostLineHeight, label: 'estcostLineHeight' } }
								lineHeightMobile = { { value: estcostLineHeightMobile, label: 'estcostLineHeightMobile' } }
								lineHeightTablet= { { value: estcostLineHeightTablet, label: 'estcostLineHeightTablet' } }
							/>
							<p className="uagb-setting-label">{ __( "Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: showEstcostcolor }} ></span></span></p>
							<ColorPalette
								value={ showEstcostcolor }
								onChange={ ( value ) => setAttributes( { showEstcostcolor: value } ) }
								allowReset
							/>
							<RangeControl
								label={ __( "Cost Margin" ) }
								value={ costSpace }
								onChange={ ( value ) => setAttributes( { costSpace: value } ) }
								min={ 0 }
								max={ 50 }
								allowReset
							/>
						</PanelBody>
						<PanelBody title={ __( "Tools Count" ) } initialOpen={ false }>
						<RangeControl
							label={ __( "Number of Tools" ) }
							value={ tools_count }
							onChange={ newCount => {

								let cloneIcons = [ ...tools ]

								if ( cloneIcons.length < newCount ) {

									const incAmount = Math.abs( newCount - cloneIcons.length )

									{ times( incAmount, n => {

										cloneIcons.push( {
											"add_required_tools": "- A Computer" + ( cloneIcons.length + 1 ),
											"icon_color": cloneIcons[ 0 ].icon_color,
											"icon_hover_color": cloneIcons[ 0 ].icon_hover_color,
										} )
									} ) }

									setAttributes( { tools: cloneIcons } )
								}
								setAttributes( { tools_count: newCount } )
							} }
							min={ 1 }
							max={ 12 }
						/>
						<TypographyControl
								label={ __( "Typography" ) }
								attributes = { attributes }
								setAttributes = { setAttributes }
								loadGoogleFonts = { { value: toolsLoadGoogleFonts, label: 'toolsLoadGoogleFonts' } }
								fontFamily = { { value: toolsFontFamily, label: 'toolsFontFamily' } }
								fontWeight = { { value: toolsFontWeight, label: 'toolsFontWeight' } }
								fontSubset = { { value: toolsFontSubset, label: 'toolsFontSubset' } }
								fontSizeType = { { value: toolsFontSizeType, label: 'toolsFontSizeType' } }
								fontSize = { { value: toolsFontSize, label: 'toolsFontSize' } }
								fontSizeMobile = { { value: toolsFontSizeMobile, label: 'toolsFontSizeMobile' } }
								fontSizeTablet= { { value: toolsFontSizeTablet, label: 'toolsFontSizeTablet' } }
								lineHeightType = { { value: toolsLineHeightType, label: 'toolsLineHeightType' } }
								lineHeight = { { value: toolsLineHeight, label: 'toolsLineHeight' } }
								lineHeightMobile = { { value: toolsLineHeightMobile, label: 'toolsLineHeightMobile' } }
								lineHeightTablet= { { value: toolsLineHeightTablet, label: 'toolsLineHeightTablet' } }
						/>
						<p className="uagb-setting-label">{ __( "Title Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: toolsTitleColor }} ></span></span></p>
  						<ColorPalette
  							value={ toolsTitleColor }
  							onChange={ ( value ) => setAttributes( { toolsTitleColor: value } ) }
  							allowReset
  						/>
  						<p className="uagb-setting-label">{ __( "Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icon_color }} ></span></span></p>
  						<ColorPalette
  							value={ icon_color }
  							onChange={ ( value ) => setAttributes( { icon_color: value } ) }
  							allowReset
  						/>
  						<p className="uagb-setting-label">{ __( "Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: icon_hover_color }} ></span></span></p>
  						<ColorPalette
  							value={ icon_hover_color }
  							onChange={ ( value ) => setAttributes( { icon_hover_color: value } ) }
  							allowReset
  						/>
					</PanelBody>
						<PanelBody title={ __( "Materials Count" ) } initialOpen={ false }>
						<RangeControl
							label={ __( "Number of Materials" ) }
							value={ material_count }
							onChange={ newCount => {

								let cloneIcons = [ ...materials ]

								if ( cloneIcons.length < newCount ) {

									const incAmount = Math.abs( newCount - cloneIcons.length )

									{ times( incAmount, n => {

										cloneIcons.push( {
											"add_required_materials": "- A WordPress Website" + ( cloneIcons.length + 1 ),
											"materials_icon_color": cloneIcons[ 0 ].materials_icon_color,
											"materials_icon_hover_color": cloneIcons[ 0 ].materials_icon_hover_color,
										} )
									} ) }

									setAttributes( { materials: cloneIcons } )
								}
								setAttributes( { material_count: newCount } )
							} }
							min={ 1 }
							max={ 12 }
						/>
						<TypographyControl
								label={ __( "Typography" ) }
								attributes = { attributes }
								setAttributes = { setAttributes }
								loadGoogleFonts = { { value: materialsLoadGoogleFonts, label: 'materialsLoadGoogleFonts' } }
								fontFamily = { { value: materialsFontFamily, label: 'materialsFontFamily' } }
								fontWeight = { { value: materialsFontWeight, label: 'materialsFontWeight' } }
								fontSubset = { { value: materialsFontSubset, label: 'materialsFontSubset' } }
								fontSizeType = { { value: materialsFontSizeType, label: 'materialsFontSizeType' } }
								fontSize = { { value: materialsFontSize, label: 'materialsFontSize' } }
								fontSizeMobile = { { value: materialsFontSizeMobile, label: 'materialsFontSizeMobile' } }
								fontSizeTablet= { { value: materialsFontSizeTablet, label: 'materialsFontSizeTablet' } }
								lineHeightType = { { value: materialsLineHeightType, label: 'materialsLineHeightType' } }
								lineHeight = { { value: materialsLineHeight, label: 'materialsLineHeight' } }
								lineHeightMobile = { { value: materialsLineHeightMobile, label: 'materialsLineHeightMobile' } }
								lineHeightTablet= { { value: materialsLineHeightTablet, label: 'materialsLineHeightTablet' } }
						/>
						<p className="uagb-setting-label">{ __( "Title Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: materialTitleColor }} ></span></span></p>
						<ColorPalette
							value={ materialTitleColor }
							onChange={ ( value ) => setAttributes( { materialTitleColor: value } ) }
							allowReset
						/>
						<p className="uagb-setting-label">{ __( "Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: materials_icon_color }} ></span></span></p>
						<ColorPalette
							value={ materials_icon_color }
							onChange={ ( value ) => setAttributes( { materials_icon_color: value } ) }
							allowReset
						/>
						<p className="uagb-setting-label">{ __( "Hover Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: materials_icon_hover_color }} ></span></span></p>
						<ColorPalette
							value={ materials_icon_hover_color }
							onChange={ ( value ) => setAttributes( { materials_icon_hover_color: value } ) }
							allowReset
						/>
					</PanelBody>
				</InspectorControls>
				<div
					className={ classnames(
						className,
						`uagb-block-${this.props.clientId}`,					
					) }
				>
					<RichText
						tagName={ headingTag }
						placeholder={ __( "How to configure HowTo Schema in UAG?" ) }
						value={ headingTitle }
						className='uagb-howto-heading-text'
						multiline={ false }
						onChange={ ( value ) => {
							setAttributes( { headingTitle: value } ) }
						}
						onMerge={ mergeBlocks }
						unstableOnSplit={
							insertBlocksAfter ?
								( before, after, ...blocks ) => {
									setAttributes( { content: before } )
									insertBlocksAfter( [
										...blocks,
										createBlock( "core/paragraph", { content: after } ),
									] )
								} :
								undefined
						}
						onRemove={ () => onReplace( [] ) }
					/>
					<RichText
						tagName="p"
						placeholder={ __( "So to get started, you will just need to drag-n-drop the How-to Schema block in the Guternburg editor. The How-to Schema block can be used on pages which contain a How-to in their title and describe steps to achieve certain requirements." ) }
						value={ headingDesc }
						className='uagb-howto-desc-text'
						onChange={ ( value ) => setAttributes( { headingDesc: value } ) }
						onMerge={ mergeBlocks }
						unstableOnSplit={ this.splitBlock }
						onRemove={ () => onReplace( [] ) }
					/>
					<span className="uagb-howto__source-wrap">{image_icon_html}</span>
					<span className="uagb-howto__time-wrap">
					{ showTotaltime &&
						<RichText
							tagName="h3"
							placeholder={ __( "Total Time Needed ( Minutes ):" ) }
							value={ timeNeeded }
							className='uagb-howto-timeNeeded-text'
							onChange={ ( value ) => setAttributes( { timeNeeded: value } ) }
							onMerge={ mergeBlocks }
							unstableOnSplit={ this.splitBlock }
							onRemove={ () => onReplace( [] ) }
						/>
					}
					{ showTotaltime &&
						<RichText
							tagName="h3"
							placeholder={ __( "30" ) }
							value={ time }
							className='uagb-howto-timeNeeded-value'
							onChange={ ( value ) => setAttributes( { time: value } ) }
							onMerge={ mergeBlocks }
							unstableOnSplit={ this.splitBlock }
							onRemove={ () => onReplace( [] ) }
						/>
					}
					{ showTotaltime &&
						<RichText
							tagName="h3"
							placeholder={ __( "Minutes" ) }
							value={ timeIn }
							className='uagb-howto-timeINmin-text'
							onChange={ ( value ) => setAttributes( { timeIn: value } ) }
							onMerge={ mergeBlocks }
							unstableOnSplit={ this.splitBlock }
							onRemove={ () => onReplace( [] ) }
						/>
					}
					</span>
					<span className="uagb-howto__cost-wrap">
					{ showEstcost &&
						<RichText
							tagName="h3"
							placeholder={ __( "Total Cost:" ) }
							value={ estCost }
							className='uagb-howto-estcost-text'
							onChange={ ( value ) => setAttributes( { estCost: value } ) }
							onMerge={ mergeBlocks }
							unstableOnSplit={ this.splitBlock }
							onRemove={ () => onReplace( [] ) }
						/>
					}
					{ showEstcost &&
						<RichText
							tagName="h3"
							placeholder={ __( "30" ) }
							value={ cost }
							className='uagb-howto-estcost-value'
							onChange={ ( value ) => setAttributes( { cost: value } ) }
							onMerge={ mergeBlocks }
							unstableOnSplit={ this.splitBlock }
							onRemove={ () => onReplace( [] ) }
						/>
					}
					{ showEstcost &&
						<RichText
							tagName="h3"
							placeholder={ __( "USD" ) }
							value={ currencyType }
							className='uagb-howto-estcost-type'
							onChange={ ( value ) => setAttributes( { currencyType: value } ) }
							onMerge={ mergeBlocks }
							unstableOnSplit={ this.splitBlock }
							onRemove={ () => onReplace( [] ) }
						/>
					}
					</span>
					<div className="uagb-how-to-tools__wrap">
						<RichText
							tagName="h3"
							placeholder={ __( "requirements tools:" ) }
							value={ toolsTitle }
							className='uagb-howto-req-tools-text'
							onChange={ ( value ) => setAttributes( { toolsTitle: value } ) }
							onMerge={ mergeBlocks }
							unstableOnSplit={ this.splitBlock }
							onnRemove={ () => onReplace( [] ) }
						/>
						<div className="uagb-how-to-tools">
						{
						tools.map( ( tools, index ) => {

								return (
									<div
										className={ classnames(
											`uagb-how-to-tools-${index}`,
											"uagb-how-to-tools-child__wrapper",
											className,
											`uagb-block-${ this.props.clientId }`
										) }
										key={ index }
									>
										<div className="uagb-tools">
											<RichText
												tagName="div"
												placeholder={ __( "Requirements Tools:" ) }
												value={ tools.add_required_tools }
												onChange={ value => {
															this.savetools( { add_required_tools: value }, index )
														} }
												className='uagb-tools__label'
												placeholder={ __( "Description" ) }
												multiline={false}
												allowedFormats={[ 'core/bold', 'core/italic', 'core/strikethrough' ]}
											/>
										</div>
									</div>
								)
						})
					}
					</div>
					<div className="uagb-how-to-materials__wrap">
						<RichText
							tagName="h3"
							placeholder={ __( "requirements materials:" ) }
							value={ materialTitle }
							className='uagb-howto-req-materials-text'
							onChange={ ( value ) => setAttributes( { materialTitle: value } ) }
							onMerge={ mergeBlocks }
							unstableOnSplit={ this.splitBlock }
							onRemove={ () => onReplace( [] ) }
						/>
					</div>
					<div className="uagb-how-to-materials">
						{
						materials.map( ( materials, index ) => {

								return (
									<div
										className={ classnames(
											`uagb-how-to-materials-${index}`,
											"uagb-how-to-materials-child__wrapper",
											className,
											`uagb-block-${ this.props.clientId }`
										) }
									>
										<div className="uagb-materials">
											<RichText
												tagName="div"
												placeholder={ __( "Requirements Materials:" ) }
												value={ materials.add_required_materials }
												onChange={ value => {
															this.savematerials( { add_required_materials: value }, index )
														} }
												className='uagb-materials__label'
												placeholder={ __( "Description" ) }
												multiline={false}
												allowedFormats={[ 'core/bold', 'core/italic', 'core/strikethrough' ]}
											/>
										</div>
									</div>
								)
						})
					}
					</div>
					</div>
					<div className="uagb-how-to-steps__wrap">
						<RichText
							tagName="h3"
							placeholder={ __( "requirements Steps:" ) }
							value={ stepsTitle }
							className='uagb-howto-req-steps-text'
							onChange={ ( value ) => setAttributes( { stepsTitle: value } ) }
							onMerge={ mergeBlocks }
							unstableOnSplit={ this.splitBlock }
							onRemove={ () => onReplace( [] ) }
						/>
						<div className="uagb-howto-steps__wrap">
						<InnerBlocks
							template={ getInfoBoxAsChild }
							allowedBlocks={ ALLOWED_BLOCKS }
						/>
					</div>	
					</div>		
				</div>				
				{ loadHeadingGoogleFonts }
				{ loadSubHeadingGoogleFonts }
				{ loadtoolsLoadGoogleFonts }
				{ loadmaterialsLoadGoogleFonts }
			</Fragment>
		)
	}
}

export default compose(
	withSelect( ( select, ownProps ) => {
			
			var tools_data = {}
			var materials_data = {}
			var steps_data = {}
			var json_data = {
				"@context": "https://schema.org",
				"@type": "HowTo",
				"name": ownProps.attributes.headingTitle,
				"description": ownProps.attributes.headingDesc,
				"totalTime": "PT"+ownProps.attributes.time+"M",
				"estimatedCost": {
					"@type": "MonetaryAmount",
					"currency":ownProps.attributes.currencyType,
					"value":ownProps.attributes.cost,
				},
				"tool": [],
				"supply": [],
				"step": []
			}

			ownProps.attributes.tools.forEach((tools, key) => {
				tools_data = {	
						"@type": "HowToTool",
						"name": tools.add_required_tools
				}
				json_data["tool"][key] = tools_data;
			});

			ownProps.attributes.materials.forEach((materials, key) => {
				materials_data = {	
						"@type": "HowToSupply",
						"name": materials.add_required_materials
				}
				json_data["supply"][key] = materials_data;
			});

			let getChildBlocks = select('core/block-editor').getBlocks( ownProps.clientId );

			getChildBlocks.forEach((steps, key) => {
				steps_data = {	
						"@type": "HowToStep",
						"url": steps.attributes.ctaLink,
						"name": steps.attributes.infoBoxTitle,
						"text": steps.attributes.headingDesc,
						"image": steps.attributes.iconImage.url
				}
				json_data["step"][key] = steps_data;
			});	
			
		return {
			schemaJsonData: json_data
		};
	} )
) ( UAGBHowTo )