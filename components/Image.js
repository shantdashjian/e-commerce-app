import React from "react"
import PropTypes from "prop-types"
import {Context} from "../Context";

function Image({className, img}) {
	const [hovered, setHovered] = React.useState(false)
	const {toggleFavorite, addToCart} = React.useContext(Context)

	function toggleHovered() {
		setHovered(prev => !prev)
	}

	const favoredIcon = img.isFavorite ? (
		<i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
	) : null
	const icons = hovered ? (
		<React.Fragment>
			<i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>
			<i className="ri-add-circle-line cart" onClick={() => addToCart(img)}></i>
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
