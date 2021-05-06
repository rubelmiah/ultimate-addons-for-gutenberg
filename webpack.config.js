const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const path = require( "path" );

module.exports = {
	...defaultConfig,
	entry: {
		"blocks": path.resolve(
			__dirname,
			'src/blocks.js'
		),
	},
	resolve: {
		alias: {
			...defaultConfig.resolve.alias,
			'@Controls': path.resolve( __dirname, 'blocks-config/uagb-controls/' ),
		},
	},
	output: {
		filename: "[name].js",
		// eslint-disable-next-line no-undef
		path:  __dirname + "/dist/build",
		publicPath: "/wp-content/plugins/ultimate-addons-for-gutenberg/dist/build/"

	}
}

const paths = require( "./paths" )
const fs = require( "fs" )
const sass = require("node-sass")

fs.readdir(paths.pluginSrc + "/blocks", function(err, items) {
	for ( var index=0; index<items.length; index++ ) {
		sass.render({
			file: paths.pluginSrc + "/blocks/" + items[index] + "/style.scss",
			outputStyle: "compressed",
			outFile: "./assets/css/blocks/" + items[index] + ".css",
			sourceMap: false,
		}, function( error, result ) {
			if (null !== result ) {
				let file_path = result.stats.entry
				let new_path = file_path.replace( paths.pluginSrc + path.sep + "blocks" + path.sep, "" )
				new_path = new_path.replace( path.sep + "style.scss", "" )
				if ( !error && undefined !== new_path ) {
					fs.writeFile("./assets/css/blocks/" + new_path + ".css", result.css, function(err) {
						if (err) throw err
					}
					)
				}
			}
		})
	}
})
