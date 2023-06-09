import React from "react"
import PropTypes from "prop-types"
import {Context} from "../Context";
import useHover from "../hooks/useHover"

function Image({className, img}) {
	const [hovered, ref] = useHover()
	const {cartItems, toggleFavorite, toggleAddToCart} = React.useContext(Context)

	const favoredIcon = img.isFavorite ? (
		<i className="ri-heart-fill favorite" onClick={() => toggleFavorite(img.id)}></i>
	) : null

	const addedToCartIcon = cartItems.includes(img) ? (
		<i className="ri-shopping-cart-fill cart" onClick={() => toggleAddToCart(img)}></i>
	) : null

	const icons = hovered ? (
		<React.Fragment>
			{favoredIcon || <i className="ri-heart-line favorite" onClick={() => toggleFavorite(img.id)}></i>}
			{addedToCartIcon || <i className="ri-add-circle-line cart" onClick={() => toggleAddToCart(img)}></i>}
		</React.Fragment>
	) : (
		<React.Fragment>
			{favoredIcon}
			{addedToCartIcon}
		</React.Fragment>
	)
	return (
		<div className={`${className} image-container`} ref={ref}>
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
