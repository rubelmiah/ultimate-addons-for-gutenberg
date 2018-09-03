const { decodeEntities } = wp.htmlEntities;

class Title extends React.Component {

	render() {

		const Tag = this.props.attributes.titleTag;

		const { post, attributes } = this.props;

		return (

			<Tag
				className={ 'uagb-post__title entry-title' }
				style={{ 
					color: attributes.titleColor,
					fontSize: attributes.titleFontSize
				}}
			>
				<a href={ post.link } target="_blank" rel="bookmark">{ decodeEntities( post.title.rendered.trim() ) || __( '(Untitled)' ) }</a>
			</Tag>
		);
	}
}

export default Title;
