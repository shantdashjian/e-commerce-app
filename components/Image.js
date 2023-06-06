import React from "react"
import PropTypes from "prop-types"

function Image({className, img, toggleFavorite}) {
	const [hovered, setHovered] = React.useState(false)

	function toggleHovered() {
		setHovered(prev => !prev)
	}

	const favoredIcon = img.isFavorite ? (
		<i className="ri-heart-fill favorite" onClick={toggleFavorite}></i>
	) : null
	const icons = hovered ? (
		<React.Fragment>
			<i className="ri-heart-line favorite" onClick={toggleFavorite}></i>
			<i className="ri-add-circle-line cart"></i>
		</React.Fragment>
	) : null
	return (
		<div className={`${className} image-container`} onMouseEnter={toggleHovered} onMouseLeave={toggleHovered}>
			{favoredIcon}
			{icons}
			<img src={img.url} className="image-grid"/>
		</div>
	)
}

Image.propTypes = {
	className: PropTypes.string,
	img: PropTypes.shape({
		id: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired,
		isFavorite: PropTypes.bool
	})
}

export default Image
