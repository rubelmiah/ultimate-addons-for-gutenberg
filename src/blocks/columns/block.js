/**
 * BLOCK: Columns
 */

import classnames from "classnames"
import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"

//  Import CSS.
import "./style.scss"
import "./editor.scss"
import attributes from "./attributes"
import edit from "./edit"


// Components
const { __ } = wp.i18n

// Register block controls
const {
	registerBlockType
} = wp.blocks

const {
	InnerBlocks,
} = wp.editor

registerBlockType( "uagb/columns", {
	title: uagb_blocks_info.blocks["uagb/columns"]["title"],
	description: uagb_blocks_info.blocks["uagb/columns"]["description"],
	icon: UAGB_Block_Icons.columns,
	category: uagb_blocks_info.category,
	keywords: [
		__( "columns" ),
		__( "rows" ),
		__( "uagb" ),
	],
	attributes,
	edit,
	getEditWrapperProps( attributes ) {
		return { "data-align": attributes.align }
		return { "data-valign": attributes.vAlign }
	},
	save : function( props ) {

		const { attributes, className } = props

		const {
			block_id,
			tag,
			backgroundType,
			backgroundVideo,
			contentWidth,
			align,
			columns,
			stack,
			vAlign,
			columnGap
		} = props.attributes

		const CustomTag = `${tag}`

		return (
			<CustomTag
				className={ classnames(
					className,
					"uagb-columns__wrap",
					`uagb-columns__background-${backgroundType}`,
					`uagb-columns__stack-${stack}`,
					`uagb-columns__valign-${vAlign}`,
					`uagb-columns__gap-${columnGap}`,
					`align${ align }`
				) }
				id={ `uagb-columns-${block_id}` }
			>
				<div className="uagb-columns__overlay"></div>
				{ "video" == backgroundType &&
					<div className="uagb-columns__video-wrap">
						{  backgroundVideo &&
							<video src={ backgroundVideo.url } autoPlay loop muted></video>
						}

					</div>
				}
				<div className={ classnames(
					"uagb-columns__inner-wrap",
					`uagb-columns__columns-${columns}`
				) }>
					<InnerBlocks.Content />
				</div>

			</CustomTag>
		)
	}
} )
