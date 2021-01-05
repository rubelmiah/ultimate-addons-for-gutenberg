/**
 * BLOCK: Forms - Block
 */

import UAGB_Block_Icons from "../../../dist/blocks/uagb-controls/block-icons"
import attributes from "./attributes"
import edit from "./edit"
import deprecated from "./deprecated"
import save from "./save"
import "./style.scss"
import "./editor.scss"
import variations from './variations';

const { __ } = wp.i18n

const {
	registerBlockType
} = wp.blocks

registerBlockType( "uagb/forms", {
	title: uagb_blocks_info.blocks["uagb/forms"]["title"],
	description: uagb_blocks_info.blocks["uagb/forms"]["description"],
	icon: UAGB_Block_Icons.faq,
	category: uagb_blocks_info.category,
	keywords: [
		__( "forms" ),
		__( "uag" ),
	],
	example:{},
	attributes,
	variations,
	edit,
	supports: {
		anchor: true,
	},
	save,
	deprecated,
} )
