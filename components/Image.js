import React from "react"

function Image({className, img, toggleFavorite}) {
	const [hovered, setHovered] = React.useState(false)

	function toggleHovered() {
		setHovered(prev => !prev)
	}

	const icons = hovered ? (
		<React.Fragment>
			<i className="ri-heart-line favorite" onClick={toggleFavorite}></i>
			<i className="ri-add-circle-line cart"></i>
		</React.Fragment>
	) : null
	return (
		<div className={`${className} image-container`} onMouseEnter={toggleHovered} onMouseLeave={toggleHovered}>
			{icons}
			<img src={img.url} className="image-grid"/>
		</div>
	)
}

export default Image
