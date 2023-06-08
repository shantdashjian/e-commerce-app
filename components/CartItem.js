import React from "react"

import {Context} from "../Context"
import {toDollar} from "../utils"

function CartItem({item}) {
	const {toggleAddToCart} = React.useContext(Context)
	const [hovered, setHovered] = React.useState(false)

	const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

	return (
		<div className="cart-item">
			<i
				className={iconClassName}
				onClick={() => toggleAddToCart(item)}
				onMouseEnter={() => setHovered(true)}
				onMouseLeave={() => setHovered(false)}
			>
			</i>
			<img src={item.url} width="130px" />
			<p>{toDollar(item.cost)}</p>
		</div>
	)
}

export default CartItem
