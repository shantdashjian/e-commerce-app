import React from "react"

import {Context} from "../Context"
import {toDollar} from "../utils"

function CartItem({item}) {
	const {toggleAddToCart} = React.useContext(Context)

	return (
		<div className="cart-item">
			<i className="ri-delete-bin-line" onClick={() => toggleAddToCart(item)}></i>
			<img src={item.url} width="130px" />
			<p>{toDollar(item.cost)}</p>
		</div>
	)
}

export default CartItem
