import React from "react"

function Image({className, img}) {
	const [ hovered, setHovered ] = React.useState(false)

	function toggleHovered() {
		setHovered(prev => !prev)
	}

	return (
		<div className={`${className} image-container`} onMouseEnter={toggleHovered} onMouseLeave={toggleHovered}>
			<img src={img.url} className="image-grid"/>
		</div>
	)
}

export default Image
