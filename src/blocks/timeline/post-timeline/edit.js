/**
 * External dependencies
 */
import get from 'lodash/get';
import isUndefined from 'lodash/isUndefined';
import pickBy from 'lodash/pickBy';
import moment from 'moment';
import classnames from 'classnames';
import UAGBIcon from "../../../../dist/blocks/uagb-controls/UAGBIcon"
import FontIconPicker from '@fonticonpicker/react-fonticonpicker'
import times from "lodash/times"

// Import css for timeline.
import contentTimelineStyle from ".././inline-styles"
import ContentTmClasses from ".././classes"
import AlignClass from ".././align-classes"
import DayAlignClass from ".././day-align-classes"
import Title from "./components/Title"
import FeaturedImage from "./components/FeaturedImage"
import Excerpt from "./components/Excerpt"
import CtaLink from "./components/CtaLink"
import Author from "./components/Author"
import PostDate from "./components/PostDate"
import TmIcon from "./components/TmIcon"

const { Component, Fragment } = wp.element;

const { __ } = wp.i18n;

const { decodeEntities } = wp.htmlEntities;

//const { apiFetch } = wp;

const {
    //registerStore,
    withSelect,
} = wp.data;

const {
    PanelBody,
    Placeholder,
    QueryControls,
    RangeControl,
    SelectControl,
    Spinner,
    ToggleControl,
    TabPanel,
    TextControl,
} = wp.components;

const {
    InspectorControls,
    ColorPalette,
    RichText,
    BlockAlignmentToolbar,
    BlockControls,
    PanelColorSettings,
} = wp.editor;

class UAGBTimeline extends Component {
    constructor() {
        super( ...arguments );

        // Get initial timeline content.       
        this.toggleDisplayPostDate    = this.toggleDisplayPostDate.bind( this );
        this.toggleDisplayPostExcerpt = this.toggleDisplayPostExcerpt.bind( this );
        this.toggleDisplayPostAuthor  = this.toggleDisplayPostAuthor.bind( this );
        this.toggleDisplayPostImage   = this.toggleDisplayPostImage.bind( this );
        this.toggleDisplayPostLink    = this.toggleDisplayPostLink.bind( this );  
        this.getTimelineicon          = this.getTimelineicon.bind(this);    
   }    

    getTimelineicon(value) { 
        this.props.setAttributes( { icon: value } );
    }

    toggleDisplayPostDate() {
        const { displayPostDate } = this.props.attributes;
        const { setAttributes } = this.props;

        setAttributes( { displayPostDate: ! displayPostDate } );
    }

    toggleDisplayPostExcerpt() {
        const { displayPostExcerpt } = this.props.attributes;
        const { setAttributes } = this.props;

        setAttributes( { displayPostExcerpt: ! displayPostExcerpt } );
    }

    toggleDisplayPostAuthor() {
        const { displayPostAuthor } = this.props.attributes;
        const { setAttributes } = this.props;

        setAttributes( { displayPostAuthor: ! displayPostAuthor } );
    }

    toggleDisplayPostImage() {
        const { displayPostImage } = this.props.attributes;
        const { setAttributes } = this.props;

        setAttributes( { displayPostImage: ! displayPostImage } );
    }

    toggleDisplayPostLink() {
        const { displayPostLink } = this.props.attributes;
        const { setAttributes } = this.props;

        setAttributes( { displayPostLink: ! displayPostLink } );
    }

    customizeReadMoreText() {
        const { readMoreText } = this.props.attributes;
        const { setAttributes } = this.props;

        setAttributes( { readMoreText: ! readMoreText } );
    }
 
    render() {   
        
        const { attributes, categoriesList, setAttributes, latestPosts, focus } = this.props;
       
        const {
            className,
            headingColor,
            subHeadingColor,
            backgroundColor,
            separatorColor,
            separatorFillColor,
            separatorBg,
            separatorBorder,
            borderFocus,
            headingTag,
            headFontSize,
            timelineItem,
            postNumber,
            timelinAlignment,
            arrowlinAlignment,
            subHeadFontSize,
            verticalSpace,
            horizontalSpace,
            headSpace,
            separatorwidth,
            borderwidth,
            connectorBgsize,
            authorSpace,
            contentSpace,
            authorColor,
            dateBottomspace,
            displayPostDate,
            displayPostExcerpt,
            displayPostAuthor,
            displayPostImage,
            displayPostLink,
            align,
            postLayout,
            order,
            orderBy,
            categories,
            postsToShow,
            width,
            imageSize,
            readMoreText,
            ctaBackground,
            icon,
            iconColor,
            dateColor,
            ctaColor,
            dateFontsize,
            authorFontSize,
            ctaFontSize,
            iconSize,
            exerptLength,
            borderRadius,
            bgPadding,
            block_id,
            iconFocus,
            iconBgFocus,
            iconHover,
            iconBgHover,
            borderHover,
            stack,
        } = attributes;

        /* Image size options */
        const imageSizeOptions = [
            { value: 'thumbnail', label: __( 'Thumbnail' ) },
            { value: 'medium', label: __( 'Medium' ) },
            { value: 'medium_large', label: __( 'Medium Large' ) },
            { value: 'large', label: __( 'Large' ) }
        ];      

        // Parameters for FontIconPicker.
        const icon_props = {
          icons: UAGBIcon,
          renderUsing: 'class',
          theme: 'default',
          value: icon,
          onChange: this.getTimelineicon,
          isMulti: false,
        };

      	const iconColorSettings = (
			<Fragment>
				<PanelColorSettings
					title={ __( "Color Settings" ) }
					initialOpen={ true }
					colorSettings={ [
						{
							value: separatorColor,
							onChange: ( colorValue ) => setAttributes( { separatorColor: colorValue } ),
							label: __( "Line Color" ),
						},
						{
							value: iconColor,
							onChange: ( colorValue ) => setAttributes( { iconColor: colorValue } ),
							label: __( "Icon Color" ),
						},
						{
							value: separatorBg,
							onChange: ( colorValue ) => setAttributes( { separatorBg: colorValue } ),
							label: __( "Background Color" ),
						},
						{
							value: separatorBorder,
							onChange: ( colorValue ) => setAttributes( { separatorBorder: colorValue } ),
							label: __( "Border Color" ),
						},
					] }
				>
				</PanelColorSettings>         
			</Fragment>
		)   

        const iconFocusSettings = (
			<Fragment>
				<PanelColorSettings
					title={ __( "Color Settings" ) }
					initialOpen={ true }
					colorSettings={ [
						{
							value: separatorFillColor,
							onChange: ( colorValue ) => setAttributes( { separatorFillColor: colorValue } ),
							label: __( "Line Color" ),
						},
						{
							value: iconFocus,
							onChange: ( colorValue ) => setAttributes( { iconFocus: colorValue } ),
							label: __( "Icon Color" ),
						},
						{
							value: iconBgFocus,
							onChange: ( colorValue ) => setAttributes( { iconBgFocus: colorValue } ),
							label: __( "Background Color" ),
						},
						{
							value: borderFocus,
							onChange: ( colorValue ) => setAttributes( { borderFocus: colorValue } ),
							label: __( "Border Color" ),
						},
					] }
				>
				</PanelColorSettings> 
			</Fragment>
		)   

		const iconHoverSettings = (
			<Fragment>                  
				<PanelColorSettings
					title={ __( "Color Settings" ) }
					initialOpen={ true }
					colorSettings={ [       
						{
							value: iconHover,
							onChange: ( colorValue ) => setAttributes( { iconHover: colorValue } ),
							label: __( "Icon Color" ),
						},
						{
							value: iconBgHover,
							onChange: ( colorValue ) => setAttributes( { iconBgHover: colorValue } ),
							label: __( "Background Color" ),
						},
						{
							value: borderHover,
							onChange: ( colorValue ) => setAttributes( { borderHover: colorValue } ),
							label: __( "Border Color" ),
						},
					] }
				>
				</PanelColorSettings>      
			</Fragment>
		)  

        const iconControls = (
			<Fragment>
				<PanelBody 
					title={ __( "Connector Color Settings" ) }
					initialOpen={ true }
				>               
					<TabPanel className="uagb-inspect-tabs uagb-inspect-tabs-col-3"
						activeClass="active-tab"
						tabs={ [
							{
								name: "normal",
								title: __( "Normal" ),
								className: "uagb-normal-tab",
							},
							{
								name: "focus",
								title: __( "Focus" ),
								className: "uagb-focus-tab",
							}, 
							{
								name: "hover",
								title: __( "Hover" ),
								className: "uagb-hover-tab",
							},                                  
						] }>
						{
							( tabName ) => {
								let tabout
								if( "focus" === tabName.name ) {
									tabout = iconFocusSettings
								}else if( "hover" === tabName.name ){
									tabout = iconHoverSettings
								}else {
									tabout = iconColorSettings
								}
								return <div>{ tabout }</div>
							}
						}
					</TabPanel> 
				</PanelBody>               
			</Fragment>
		)
      
        const colorSetting = (
            <Fragment>
            <PanelColorSettings
                title={ __( "Color Settings" ) }
                initialOpen={ false }
                colorSettings={ [       
                    {
                        value: headingColor,
                        onChange: ( colorValue ) => setAttributes( { headingColor: colorValue } ),
                        label: __( "Heading Color" ),
                    },
                    {
                        value: subHeadingColor,
                        onChange: ( colorValue ) => setAttributes( { subHeadingColor: colorValue } ),
                        label: __( "Content Color" ),
                    },                            
                    {
                        value: backgroundColor,
                        onChange: ( colorValue ) => setAttributes( { backgroundColor: colorValue } ),
                        label: __( "Background Color" ),
                    },
                ] }
            >
                { displayPostAuthor && <Fragment>
                        <p className="uagb-setting-label">{ __( "Author Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: authorColor }} ></span></span></p>
                        <ColorPalette
                            value={ authorColor }
                            onChange={ ( colorValue ) => setAttributes( { authorColor: colorValue } ) }
                            allowReset
                        />
                    </Fragment>
                }
                { displayPostDate && <Fragment>
                        <p className="uagb-setting-label">{ __( "Date Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: dateColor }} ></span></span></p>
                        <ColorPalette
                            value={ dateColor }
                            onChange={ ( colorValue ) => setAttributes( { dateColor: colorValue } ) }
                            allowReset
                        />
                    </Fragment>
                }
                { displayPostLink && <Fragment>
                        <p className="uagb-setting-label">{ __( "CTA Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaColor }} ></span></span></p>
                        <ColorPalette
                            value={ ctaColor }
                            onChange={ ( colorValue ) => setAttributes( { ctaColor: colorValue } ) }
                            allowReset
                        />                   
                        <p className="uagb-setting-label">{ __( "CTA Background Color" ) }<span className="components-base-control__label"><span className="component-color-indicator" style={{ backgroundColor: ctaBackground }} ></span></span></p>
                        <ColorPalette
                            value={ ctaBackground }
                            onChange={ ( colorValue ) => setAttributes( { ctaBackground: colorValue } ) }
                            allowReset
                        />
                    </Fragment>
                }                
                </PanelColorSettings>
            </Fragment>
        )

        const content_control = (
            <InspectorControls>  
                <PanelBody title={ __( 'Query' ) }
                    initialOpen={ true }
                    >
                    <QueryControls
                        numberOfItems={ postsToShow }
                        { ...{ order, orderBy } }
                        categoriesList={ categoriesList }
                        selectedCategoryId={ categories }
                        onOrderChange={ ( value ) => { setAttributes( { order: value } ); } }
                        onOrderByChange={ ( value ) => { setAttributes( { orderBy: value } ); } }
                        onCategoryChange={ ( value ) => { setAttributes( { categories: '' !== value ? value : undefined } ) ; } }
                        onNumberOfItemsChange={ ( value ) => { setAttributes( { postsToShow: value } ); } }
                    />
                </PanelBody>
                <PanelBody title={ __( 'Image' ) }
                    initialOpen={ false }
                 >
                    <ToggleControl
                        label={ __( 'Display Featured Image' ) }
                        checked={ displayPostImage }
                        onChange={ this.toggleDisplayPostImage }
                    />
                    { displayPostImage &&
                        <SelectControl
                            label={ __( 'Featured Image Style' ) }
                            options={ imageSizeOptions }
                            value={ imageSize }
                            onChange={ ( value ) => this.props.setAttributes( { imageSize: value } ) }
                        />
                    }   
                </PanelBody>
                <PanelBody title={ __( 'Content' ) }
                    initialOpen={ false }
                > 
                    <ToggleControl
                        label={ __( 'Display Post Author' ) }
                        checked={ displayPostAuthor }
                        onChange={ this.toggleDisplayPostAuthor }
                    />
                    <ToggleControl
                        label={ __( "Display Post Date" ) }
                        checked={ displayPostDate }
                        onChange={ this.toggleDisplayPostDate }
                    />                   
                    <ToggleControl
                        label={ __( 'Display Post Excerpt' ) }
                        checked={ displayPostExcerpt }
                        onChange={ this.toggleDisplayPostExcerpt }
                    />
                    { displayPostExcerpt &&
                       <RangeControl
                            label={ __( 'Excerpt Length' ) }
                            value={ exerptLength }
                            onChange={ ( value ) => setAttributes( { exerptLength: value } ) }
                            min={ 1 }
                            max={ 50 }
                            beforeIcon="editor-textcolor"
                            allowReset
                        />
                    }

                    <ToggleControl
                        label={ __( 'Display Continue Reading Link' ) }
                        checked={ displayPostLink }
                        onChange={ this.toggleDisplayPostLink }
                    />
                    { displayPostLink && <Fragment> 
                        <TextControl
                            label= { __( "CTA Text" ) }
                            value= { readMoreText }
                            onChange={ value => setAttributes( { readMoreText: value } ) }
                        />
                        </Fragment>                                   
                    }  
                </PanelBody> 
               
                <PanelBody 
                    title={ __( "Layout" ) }
                    initialOpen={ false }
                >          
                    <SelectControl
                        label={ __( "Orientation" ) }
                        value={ timelinAlignment }
                        onChange={ ( value ) => setAttributes( { timelinAlignment: value } ) }
                        options={ [
                            { value: "left", label: __( "Left" ) },
                            { value: "right", label: __( "Right" ) },
                            { value: "center", label: __( "Center" ) },
                        ] }
                    />
                    <SelectControl
                        label={ __( "Arrow Alignment" ) }
                        value={ arrowlinAlignment }
                        onChange={ ( value ) => setAttributes( { arrowlinAlignment: value } ) }
                        options={ [
                            { value: "top", label: __( "Top" ) },
                            { value: "bottom", label: __( "Bottom" ) },
                            { value: "center", label: __( "Center" ) },
                        ] }
                    />    
                    <SelectControl
                        label={ __( "Stack on" ) }
                        value={ stack }
                        options={ [
                            { value: "none", label: __( "None" ) },
                            { value: "tablet", label: __( "Tablet" ) },
                            { value: "mobile", label: __( "Mobile" ) },
                        ] }
                        help={ __( "Note: Choose on what breakpoint the Post Timeline will stack." ) }
                        onChange={ ( value ) => setAttributes( { stack: value } ) }
                    />                
                </PanelBody>
                { colorSetting }
                <PanelBody 
                    title={ __( "Spacing" ) }
                    initialOpen={ false }
                >   
                    <RangeControl
                        label={ __( "Padding" ) }
                        value={ bgPadding }
                        onChange={ ( value ) => setAttributes( { bgPadding: value } ) }
                        min={ 1 }
                        initialPosition={10} 
                        max={ 50 }
                        allowReset
                    />
                    <RangeControl
                        label={ __( "Horizontal Space" ) }
                        value={ horizontalSpace }
                        onChange={ ( value ) => setAttributes( { horizontalSpace: value } ) }
                        min={ 1 }
                        max={ 50 }
                        initialPosition={10} 
                        allowReset
                    />
                    <RangeControl
                        label={ __( "Vertical Space" ) }
                        value={ verticalSpace }
                        onChange={ ( value ) => setAttributes( { verticalSpace: value } ) }
                        min={ 1 }
                        max={ 100 }
                        initialPosition={10} 
                        allowReset
                    />                   
                    <RangeControl
                        label={ __( "Heading Bottom Spacing" ) }
                        value={ headSpace }
                        onChange={ ( value ) => setAttributes( { headSpace: value } ) }
                        min={ 0 }
                        max={ 50 }
                        initialPosition={10} 
                        allowReset
                    />  

                    { displayPostAuthor && <RangeControl
                        label={ __( "Author Bottom Spacing" ) }
                        value={ authorSpace }
                        onChange={ ( value ) => setAttributes( { authorSpace: value } ) }
                        min={ 0 }
                        max={ 50 }
                        initialPosition={10} 
                        allowReset
                    />  
                    }
                    { displayPostExcerpt && displayPostLink && <RangeControl
                        label={ __( "Content Bottom Spacing" ) }
                        value={ contentSpace }
                        onChange={ ( value ) => setAttributes( { contentSpace: value } ) }
                        min={ 0 }
                        max={ 50 }
                        initialPosition={10} 
                        allowReset
                    />  
                    }

                    { displayPostDate && ( timelinAlignment !=="center" ) && <RangeControl
                        label={ __( "Date Bottom Spacing" ) }
                        value={ dateBottomspace }
                        onChange={ ( value ) => setAttributes( { dateBottomspace: value } ) }
                        min={ 0 }
                        max={ 50 }
                        initialPosition={10} 
                        allowReset
                    />
                    }       
                </PanelBody>
                <PanelBody 
                    title={ __( "Timeline Item" ) }
                    initialOpen={ false }
                >
                    <SelectControl
                        label={ __( "Heading Tag" ) }
                        value={ headingTag }
                        onChange={ ( value ) => setAttributes( { headingTag: value } ) }
                        options={ [
                            { value: "h1", label: __( "H1" ) },
                            { value: "h2", label: __( "H2" ) },
                            { value: "h3", label: __( "H3" ) },
                            { value: "h4", label: __( "H4" ) },
                            { value: "h5", label: __( "H5" ) },
                            { value: "h6", label: __( "H6" ) },
                        ] }
                    />  
                    <RangeControl
                        label={ __( "Heading Font Size" ) }
                        value={ headFontSize }
                        onChange={ ( value ) => setAttributes( { headFontSize: value } ) }
                        min={ 10 }
                        max={ 50 }
                        initialPosition={30}                        
                        beforeIcon="editor-textcolor"
                        allowReset
                    />                    
                    <RangeControl
                        label={ __( "Content Font Size" ) }
                        value={ subHeadFontSize }
                        onChange={ ( value ) => setAttributes( { subHeadFontSize: value } ) }
                        min={ 10 }
                        max={ 50 }
                        initialPosition={16}   
                        beforeIcon="editor-textcolor"
                        allowReset
                    />  

                    { displayPostDate &&
                        <RangeControl
                            label={ __( "Date Font Size" ) }
                            value={ dateFontsize }
                            onChange={ ( value ) => setAttributes( { dateFontsize: value } ) }
                            min={ 1 }
                            max={ 50 }
                            initialPosition={16}
                            beforeIcon="editor-textcolor"
                            allowReset
                        />                                       
                    } 

                    { displayPostAuthor && <RangeControl
                            label={ __( "Author Font Size" ) }
                            value={ authorFontSize }
                            onChange={ ( value ) => setAttributes( { authorFontSize: value } ) }
                            min={ 10 }
                            max={ 50 }
                            initialPosition={30}                        
                            beforeIcon="editor-textcolor"
                            allowReset
                        /> 
                    }
                    { displayPostLink && <RangeControl
                        label={ __( "CTA Font Size" ) }
                        value={ ctaFontSize }
                        onChange={ ( value ) => setAttributes( { ctaFontSize: value } ) }
                        min={ 10 }
                        max={ 50 }
                        initialPosition={30}                        
                        beforeIcon="editor-textcolor"
                        allowReset
                        /> 
                    }
                    <RangeControl
                        label={ __( "Rounded Corners" ) }
                        value={ borderRadius }
                        onChange={ ( value ) => setAttributes( { borderRadius: value } ) }
                        min={ 0 }
                        initialPosition={10} 
                        max={ 50 }
                        allowReset
                    />                 
                </PanelBody> 
                <PanelBody 
                    title={ __( "Connector" ) }
                    initialOpen={ false }
                >                    
                    <FontIconPicker {...icon_props} />
                    <RangeControl
                        label={ __( "Icon Size" ) }
                        value={ iconSize }
                        onChange={ ( value ) => setAttributes( { iconSize: value } ) }
                        min={ 0 }                        
                        max={ 30 }
                        allowReset
                    />  
                    <RangeControl
                        label={ __( "Border Width" ) }
                        value={ borderwidth }
                        onChange={ ( value ) => setAttributes( { borderwidth: value } ) }
                        min={ 1 }
                        max={ 10 }
                        allowReset
                    />
                    <RangeControl
                        label={ __( "Connector Width" ) }
                        value={ separatorwidth }
                        onChange={ ( value ) => setAttributes( { separatorwidth: value } ) }
                        min={ 1 }
                        max={ 10 }
                        allowReset
                    />
                    <RangeControl
                        label={ __( "Icon Background Size" ) }
                        value={ connectorBgsize }
                        onChange={ ( value ) => setAttributes( { connectorBgsize: value } ) }
                        min={ 25 }
                        max={ 90 }
                        allowReset
                    />  
                    { iconControls }                  
                </PanelBody>
            </InspectorControls>
        )
       
        var my_block_id = "uagb-ctm-"+this.props.clientId        
        var cta_enable = ''

        if(displayPostLink){
            cta_enable = 'uagb_timeline__cta-enable'
        }

        return (
            <Fragment>            
            { content_control }           
            <BlockControls>
				<BlockAlignmentToolbar
					value={ align }
					onChange={ ( value ) => {
						setAttributes( { align: value } )
					} }
					controls={ [ "center", "left","right" ] }
				/>               
			</BlockControls>
                <div  className={ classnames(
					className,
					"uagb-timeline__outer-wrap"
				) }
				id = { my_block_id } >                     
					<div  className = { classnames(
						"uagb-timeline__content-wrap",
                        cta_enable,
						...ContentTmClasses( this.props.attributes ),
					) }>
						<div className = "uagb-timeline-wrapper">
							<div className = "uagb-timeline__main">                                
								{ this.get_content() }
								<div className = "uagb-timeline__line" >
									<div className = "uagb-timeline__line__inner"></div>
								</div> 
							</div>
						</div>
					</div>
				</div>
            </Fragment>
        );
    }

    componentDidMount() {   
        //Store lient id. 
        this.props.setAttributes( { block_id: this.props.clientId } );

        var id = this.props.clientId;
        window.addEventListener("load", this.timelineContent_back(id));
        window.addEventListener("resize", this.timelineContent_back(id));
        var time = this;
        $('.edit-post-layout__content').scroll( function(event) {            
            time.timelineContent_back(id);            
        });

        // Pushing Style tag for this block css.
        const $style = document.createElement( "style" )
        $style.setAttribute( "id", "uagb-timeline-style-" + this.props.clientId )
        document.head.appendChild( $style )
    }    

    componentDidUpdate(){
        var id = this.props.clientId
        window.addEventListener("load", this.timelineContent_back(id))
        window.addEventListener("resize", this.timelineContent_back(id))
        var time = this
        $(".edit-post-layout__content").scroll( function(event) {
            time.timelineContent_back(id)
        })
    }
   
    /*  Js for timeline line and inner line filler*/
    timelineContent_back(id){
        var timeline            = $(".uagb-timeline").parents("#block-"+id)
        var tm_item             = timeline.find(".uagb-timeline")
        var line_inner          = timeline.find(".uagb-timeline__line__inner")
        var line_outer          = timeline.find(".uagb-timeline__line")
        var $icon_class         = timeline.find(".uagb-timeline__marker")
        if( $icon_class.length > 0){
            var $card_last          = timeline.find(".uagb-timeline__field:last-child")
            var timeline_start_icon = $icon_class.first().position()
            var timeline_end_icon   = $icon_class.last().position()
            line_outer.css("top", timeline_start_icon.top )

            var timeline_card_height = $card_last.height()
            var last_item_top = $card_last.offset().top - tm_item.offset().top
            var $last_item, parent_top
            var $document = $(document)

            if( tm_item.hasClass("uagb-timeline__arrow-center")) {

                line_outer.css("bottom", timeline_end_icon.top )

                parent_top = last_item_top - timeline_start_icon.top
                $last_item = parent_top + timeline_end_icon.top

            } else if( tm_item.hasClass("uagb-timeline__arrow-top")) {

                var top_height = timeline_card_height - timeline_end_icon.top
                line_outer.css("bottom", top_height )

                $last_item = last_item_top

            } else if( tm_item.hasClass("uagb-timeline__arrow-bottom")) {

                var bottom_height = timeline_card_height - timeline_end_icon.top
                line_outer.css("bottom", bottom_height )

                parent_top = last_item_top - timeline_start_icon.top
                $last_item = parent_top + timeline_end_icon.top
            }

            var num = 0
            var elementEnd = $last_item + 20

            var viewportHeight = document.documentElement.clientHeight
            var viewportHeightHalf = viewportHeight/2

            var elementPos = tm_item.offset().top

            var new_elementPos = elementPos + timeline_start_icon.top

            var photoViewportOffsetTop = new_elementPos - $document.scrollTop()

            if (photoViewportOffsetTop < 0) {
                photoViewportOffsetTop = Math.abs(photoViewportOffsetTop)
            } else {
                photoViewportOffsetTop = -Math.abs(photoViewportOffsetTop)
            }

            if ( elementPos < (viewportHeightHalf) ) {
                if ( (viewportHeightHalf) + Math.abs(photoViewportOffsetTop) < (elementEnd) ) {
                    line_inner.height((viewportHeightHalf) + photoViewportOffsetTop)
                }else{
                    if ( (photoViewportOffsetTop + viewportHeightHalf) >= elementEnd ) {
                        line_inner.height(elementEnd)
                    }
                }
            } else {
                if ( (photoViewportOffsetTop  + viewportHeightHalf) < elementEnd ) {
                    if (0 > photoViewportOffsetTop) {
                        line_inner.height((viewportHeightHalf) - Math.abs(photoViewportOffsetTop))
                        ++num
                    } else {
                        line_inner.height((viewportHeightHalf) + photoViewportOffsetTop)
                    }
                }else{
                    if ( (photoViewportOffsetTop + viewportHeightHalf) >= elementEnd ) {
                        line_inner.height(elementEnd)
                    }
                }
            }

            //For changing icon background color and icon color.
            var timeline_icon_pos, timeline_card_pos
            var elementPos, elementCardPos
            var timeline_icon_top, timeline_card_top
            var timeline_icon   = timeline.find(".uagb-timeline__marker"),
                animate_border  = timeline.find(".uagb-timeline__animate-border")

            for (var i = 0; i < timeline_icon.length; i++) {
                timeline_icon_pos = $(timeline_icon[i]).offset().top
                timeline_card_pos = $(animate_border[i]).offset().top
                elementPos = timeline.offset().top
                elementCardPos = timeline.offset().top

                timeline_icon_top = timeline_icon_pos - $document.scrollTop()
                timeline_card_top = timeline_card_pos - $document.scrollTop()

                if ( ( timeline_card_top ) < ( ( viewportHeightHalf ) ) ) {

                    animate_border[i].classList.remove("out-view")
                    animate_border[i].classList.add("in-view")

                } else {
                    // Remove classes if element is below than half of viewport.
                    animate_border[i].classList.add("out-view")
                    animate_border[i].classList.remove("in-view")
                }

                if ( ( timeline_icon_top ) < ( ( viewportHeightHalf ) ) ) {

                    // Add classes if element is above than half of viewport.
                    timeline_icon[i].classList.remove("uagb-timeline__out-view-icon")
                    timeline_icon[i].classList.add("uagb-timeline__in-view-icon")

                } else {

                    // Remove classes if element is below than half of viewport.
                    timeline_icon[i].classList.add("uagb-timeline__out-view-icon")
                    timeline_icon[i].classList.remove("uagb-timeline__in-view-icon")

                }
            }

        }
    }
    
     /* Render output at backend */
    get_content(){
        
        const { attributes, setAttributes, latestPosts, mergeBlocks,insertBlocksAfter,onReplace } = this.props;  

        const {
            timelinAlignment,
            arrowlinAlignment,
            displayPostDate,
            postsToShow,
            align,
        } = attributes;
       
       
        // Add CSS.
        var element = document.getElementById( "uagb-timeline-style-" + this.props.clientId )
        if( null != element && "undefined" != typeof element ) {
            element.innerHTML = contentTimelineStyle( this.props )
        }   

        const hasPosts = Array.isArray( latestPosts ) && latestPosts.length;

            if ( ! hasPosts ) {
                return (
                    <Fragment>                                            
                        <Placeholder
                            icon="admin-post"
                            label={ __( 'UAGB timeline' ) }
                        >
                            { ! Array.isArray( latestPosts ) ?
                                <Spinner /> :
                                __( 'No posts found.' )
                            }
                        </Placeholder>
                    </Fragment>
                );
            }else{
                // Removing posts from display should be instant.
            const displayPosts = latestPosts.length > postsToShow ?
                latestPosts.slice( 0, postsToShow ) :
                latestPosts;
            
           	var content_align_class = AlignClass( this.props.attributes, 0 ) // Get classname for layout alignment
			var day_align_class     = DayAlignClass( this.props.attributes, 0 ) // Get classname for day alignment.
			let data_copy           = [ ...latestPosts ]
			var display_inner_date  = false

             return (
				<div className = "uagb-timeline__days uagb-timeline-infinite-load">
					{
						displayPosts.map((post,index) => {

							if(timelinAlignment == "center"){
								display_inner_date = true
								content_align_class = AlignClass( this.props.attributes, index )
								day_align_class = DayAlignClass( this.props.attributes, index )
							} 

			                return (
			                	<article className = "uagb-timeline__field uagb-timeline__animate-border"  key={index}>
			                		<div className = {content_align_class}> 

                                        { <TmIcon attributes={attributes} /> } 
										
										<div className = {day_align_class} >
											<div className="uagb-timeline__events-new">
												<div className="uagb-timeline__events-inner-new"> 
													<div className="uagb-timeline__date-hide uagb-timeline__date-inner"> 
                                                        { <PostDate post={post} attributes={attributes} dateClass = "uagb-timeline__inner-date-new"/> } 
													</div>

													<div className="uagb-content">

                                                        { <FeaturedImage post={post} attributes={attributes} /> }
                                                        { <Title post={post} attributes={attributes} /> }                                                        
                                                        { <Author post={post} attributes={attributes} /> }
                                                        { <Excerpt post={post} attributes={attributes} /> }			                                             
                                                        { <CtaLink post={post} attributes={attributes} /> }                                                    

			                                            <div className="uagb-timeline__arrow"></div>  

													</div>

												</div>
											</div>
										</div>
										{ display_inner_date && <div className = "uagb-timeline__date-new"> 
                                            { <PostDate post={post} attributes={attributes} dateClass = "uagb-timeline__date-new"/> } 
										</div>
										}
			                		</div>
			                	</article>
			                );
						})
					}
				</div>
			);
         }                   
    }

}

export default withSelect( ( select, props ) => {
    const { postsToShow, order, orderBy, categories } = props.attributes;    
    
        const { getEntityRecords } = select( 'core' );
        const latestPostsQuery = pickBy( {
            categories,
            order,
            orderby: orderBy,
            per_page: postsToShow,
            ignore_sticky_posts:1,
        }, ( value ) => ! isUndefined( value ) );
        const categoriesListQuery = {
            per_page: 100,
        };        
        return {
            latestPosts: getEntityRecords( 'postType', 'post', latestPostsQuery ),
            categoriesList: getEntityRecords( 'taxonomy', 'category', categoriesListQuery ),
        };
    
} )( UAGBTimeline );
