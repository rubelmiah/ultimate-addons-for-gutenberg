/**
 * Set inline CSS class.
 * @param {object} props - The block object.
 * @return {array} The inline CSS class.
 */

function CtaPositionClasses( attributes ) {

	
	var iconimgStyle_class = ""

	iconimgStyle_class += "uagb-cta-block"+ " "
	iconimgStyle_class += "uagb-cta-block-icon-"+attributes.ctaPosition+ " "
	
	if( attributes.ctaPosition === "right" ){
		iconimgStyle_class +="uagb-cta-block-right"+ " "
	}

	if( ( attributes.ctaPosition === "right" ) && attributes.stack !== "none"  ){
		iconimgStyle_class +="uagb-cta-block-stacked-"+attributes.stack+ " "		
	}

	if( attributes.ctaPosition !== "below-title"  ){
		iconimgStyle_class += "uagb-cta-block-valign-"+attributes.buttonAlign+ " "
	}

	if( attributes.ctaType !== "text" && attributes.ctaType !== "button"  ){
		iconimgStyle_class += "uagb-cta__btn-type-none"+ " "
	}

	return [
		iconimgStyle_class        
	]
}

export default CtaPositionClasses
